
import { useWalletInfo } from '@/components/Hooks/web3Hooks';
import { useWeb3 } from '@/components/Providers/web3Provider';
import React from 'react'

const WalletBar = () => {
  const { isLoading,web3 } = useWeb3();
  const {account, network} = useWalletInfo();
  return (
    <section className="text-white bg-cyan-600">
      <div className="p-8">
        <h1 className="text-2xl">Hello, {account.data}</h1>
        <h2 className="subtitle mb-5 text-xl">I hope you are having a great day!</h2>
        <div className="flex justify-between items-center">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                Learn how to purchase
              </a>
            </div>
          </div>
          <div>
            {isLoading ? (<div className='subtitle mb-5 text-xl'>Connecting ...</div>) : !web3 && (
              <div className="bg-yellow-500 p-4 rounded-lg">
                Cannot connect to network. Please install Metamask.
              </div>
            )}
            {network.hasInitialResponse && !network.isSupported &&
              <div className="bg-red-400 p-4 rounded-lg">
                <div>Connected to wrong network</div>
                <div>
                  Connect to: {` `}
                  <strong className="text-2xl">
                    {network.target}
                  </strong>
                </div>
              </div>
            }
            {account.data && network.data &&
              <div><span>Currently on </span>
                <strong className="text-2xl">{network.data?.toString()}</strong>
              </div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletBar