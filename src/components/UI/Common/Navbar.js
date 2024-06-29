"use client";
import { useWeb3 } from '@/components/Providers/web3Provider';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { useAccount } from '@/components/Hooks/web3Hooks';

const Navbar = () => {
  const { connect, isLoading, web3 } = useWeb3();
  const { account } = useAccount();

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/" className="font-medium mr-8 text-white hover:text-gray-500">Home</Link>
              <Link href="/marketplace" className="font-medium mr-8 text-white hover:text-gray-500">Marketplace</Link>
              <Link href="/blog" className="font-medium mr-8 text-white hover:text-gray-500">Blog</Link>
            </div>
            <div>
              <Link href="/wishlist" className="font-medium mr-8 text-white hover:text-gray-500">WishList</Link>
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
