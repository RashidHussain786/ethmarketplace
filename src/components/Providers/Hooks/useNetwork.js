"use client";

import { useEffect } from "react";
import useSWR from "swr";

const NETWORKS = {
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
    56: "Binance Smart Chain",
    59144:"Linea Mainnet",
    11155111:"Sepolia",
    59141:"Linea Sepolia",
    1337: "Ganache",
  }

  const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID]

export const handler = (web3, provider) => () => {
    const {data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/network" : null,
        async () => {
          const netId = await web3.eth.getChainId()
          return NETWORKS[netId] ? NETWORKS[netId] : netId
        //   return netId
        }
      )
    
      useEffect(() => {
        provider &&
        provider.on("chainChanged", chainId => NETWORKS[mutate(chainId)])
      }, [web3])

    return {
        data,
        mutate,
        target: targetNetwork,
        isSupported: data === targetNetwork,
        ...rest
      }

}