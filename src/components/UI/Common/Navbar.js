"use client";
import { useWeb3 } from '@/components/Providers/web3Provider';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { useAccount } from '@/components/Hooks/web3Hooks';
import ActiveLink from './ActiveLink';

const Navbar = () => {
  const { connect, isLoading, web3 } = useWeb3();
  const { account } = useAccount();

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div className='flex gap-[3rem]'>
              <ActiveLink href="/" className="font-medium mr-8 text-white hover:text-gray-500">Home</ActiveLink>
              <ActiveLink href="/marketplace" className="font-medium mr-8 text-white hover:text-gray-500">Marketplace</ActiveLink>
              <ActiveLink href="/blog" className="font-medium mr-8 text-white hover:text-gray-500">Blog</ActiveLink>
            </div>
            <div className='flex gap-[1rem] items-center'>
              <ActiveLink href="/wishlist" className="font-medium mr-8 text-white hover:text-gray-500">WishList</ActiveLink>
              {isLoading ? (
                <Button disabled={true}>Connecting...</Button>
              ) : account.data ? (
                <>
                <span className='mr-8'>{account.isAdmin ? `Hi Admin`: `Hi There`}</span>
                <Button disabled={true}>{account.data.slice(0, 6) + "..." + account.data.slice(-4)}</Button>
                </>
              ) : web3 ? (
                <Button onClick={connect}>Connect</Button>
              ) : (
                <Button onClick={() => window.open("https://metamask.io/download.html", "_blank")}>Install MetaMask</Button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
