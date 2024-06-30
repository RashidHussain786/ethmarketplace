"use client";
import { useEffect } from 'react'
import useSWR from 'swr';

const adminAddress = { "0xacaca3a521a40fdebc07806a417142af3ef68160c86a848c0ceb4cc80087c53a": true };

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    }
  )
  useEffect(() => {
    provider &&
      provider.on("accountsChanged",
        accounts => mutate(accounts[0] ?? null)
      )
  }, [provider])

  return {
    data,
    isAdmin: (data && adminAddress[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest
  }
}