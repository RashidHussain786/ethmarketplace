"use client"; // Ensures this component runs on the client side
import detectEthereumProvider from '@metamask/detect-provider';
import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import Web3 from 'web3';
import { setupHooks } from './Hooks/setupHooks';

// Create a context for Web3
const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null); // Ethereum provider
  const [web3, setWeb3] = useState(null); // Web3 instance
  const [contract, setContract] = useState(null); // Smart contract instance
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Function to load the Ethereum provider
  const loadProvider = useCallback(async () => {
    const detectedProvider = await detectEthereumProvider();
    if (detectedProvider) {
      const newWeb3 = new Web3(detectedProvider);
      setProvider(detectedProvider);
      setWeb3(newWeb3);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      console.error("Please install MetaMask.");
    }
  }, []);

  // Effect to load the provider on component mount
  useEffect(() => {
    loadProvider();
  }, [loadProvider]);

  // Function to connect to MetaMask
  const connect = useCallback(async () => {
    if (provider) {
      try {
         await provider.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.error("User rejected the request.");
      }
    } else {
      console.error("Cannot connect to MetaMask, provider is not available.");
    }
  }, [provider]);

  // Set up hooks using Web3
  const getHooks = useMemo(() => setupHooks(web3, provider), [web3,provider]);

  // Memoize the Web3 API to prevent unnecessary re-renders
  const web3Api = useMemo(() => ({
    provider,
    web3,
    contract,
    isLoading,
    getHooks,
    connect // Include the connect function in the API
  }), [provider, web3, contract, isLoading, getHooks, connect]);

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  );
};

// Custom hook to use the Web3 context
export const useWeb3 = () => useContext(Web3Context);

// Custom hook to use specific hooks from Web3 context
export function useHooks(cb) {
  const { getHooks } = useWeb3();
  return useMemo(() => cb(getHooks), [cb, getHooks]);
}
