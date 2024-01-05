import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Routing/Router";
import { DataProvider } from './components/context/DataContext'


import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// Add a global object polyfill
if (typeof global === 'undefined') {
  global = window;
}


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '95aed63feff698ffe386411626beda34'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <DataProvider>
        <div className="flex">
        <Sidebar />
        <Navbar />
        <Router />
        <Footer />
      </div>
      </DataProvider>
    </WagmiConfig>
  )
}
export default App;
