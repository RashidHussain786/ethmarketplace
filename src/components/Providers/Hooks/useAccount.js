"use client";
import { useEffect } from 'react'
import useSWR from 'swr';

const adminAddress = { "0x3abf2df5bc4c7ac6612c6010d3bc924750a291b2ef6a9679bfd75a7bec8250e0": true };

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