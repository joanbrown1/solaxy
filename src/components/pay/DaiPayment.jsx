import React, { useState, useEffect } from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import { Alert } from 'flowbite-react';


const DaiContractAddress = '0x6f7e87f461bf1BEa6Aa70b519de17bD597fcF573';
const DaiContractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InputIsZero","type":"error"},{"inputs":[],"name":"TransferError","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"taffif","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Revenue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"bool","name":"state","type":"bool"},{"indexed":true,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"}],"name":"Switch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DAI","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"W3BSTREAM_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"otherAddress","type":"address"}],"name":"_setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tariff","type":"uint256"}],"name":"_setTariff","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bool","name":"state","type":"bool"}],"name":"_switch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"pay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"revenues","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"stateOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"states","outputs":[{"internalType":"uint248","name":"tariff","type":"uint248"},{"internalType":"bool","name":"state","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tariffOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const DaiPayment = () => {
    const [web3, setWeb3] = useState(null);
  const [daiContract, setDaiContract] = useState(null);
  const [insufficient, setInsufficient] = useState(false);
  const [noWallet, setNoWallet] = useState(false);
  const [errorPay, setErrorPay] = useState(false);

  const connectWallet = async () => {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          1: 'https://mainnet.infura.io/v3/6470e40700c74890a1964bcc43ba2934',
        },
      });

      await provider.enable();

      const web3Instance = new Web3(provider);
      setWeb3(web3Instance);

      const daiContractInstance = new web3Instance.eth.Contract(DaiContractABI, DaiContractAddress);
      setDaiContract(daiContractInstance);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      // Handle error, e.g., display an error message to the user
      setNoWallet(true);
    }
  };

  const getUserDaiBalance = async (userAddress) => {
    try {
      const balance = await daiContract.methods.balanceOf(userAddress).call();
      return balance;
    } catch (error) {
      console.error('Error fetching Dai balance:', error);
      throw error; // Propagate the error to the caller
    }
  };

  const handlePayment = async () => {
    try {
      if (web3 && daiContract) {
        const recipientAddress = '0x6f7e87f461bf1BEa6Aa70b519de17bD597fcF573';
        const userAddress = (await web3.eth.getAccounts())[0];

        const userDaiBalance = await getUserDaiBalance(userAddress);

        const amountToSend = web3.utils.toWei('1', 'ether'); // or any other amount

        if (userDaiBalance >= amountToSend) {
          // User has enough Dai, proceed with payment
          await daiContract.methods.transfer(recipientAddress, amountToSend).send({
            from: userAddress,
          });

          // Update UI or perform additional actions
        } else {
          // Insufficient balance, display an error
          console.error('Insufficient Dai balance');
          // Handle error, e.g., display an error message to the user
          setInsufficient(true);
        }
      }
    } catch (error) {
      console.error('Error handling payment:', error);
      // Handle error, e.g., display an error message to the user
      setErrorPay(true)
    }
  };

  useEffect(() => {
    // Cleanup when the component is unmounted
    return () => {
      if (web3) {
        web3.currentProvider.disconnect();
      }
    };
  }, [web3]);
  return (
    <>
    <div className="sm:block hidden bg-[#F3F3F3] mt-20 ml-[-800px] w-full h-screen">
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            <button onClick={handlePayment}>Make Dai Payment</button>
        </div>
        {insufficient ? 
        <Alert color="failure" onDismiss={() => navigate("/daipayment")} className='mb-10'>
            <span className="font-medium">Error!</span> Insufficient Dai Balance
        </Alert>: ""
        }
        {noWallet ? 
        <Alert color="failure" onDismiss={() => navigate("/daipayment")} className='mb-10'>
            <span className="font-medium">Error!</span> Wallet unable to connect
        </Alert>: ""
        }
        {errorPay ? 
        <Alert color="failure" onDismiss={() => navigate("/daipayment")} className='mb-10'>
            <span className="font-medium">Error!</span> Payment Not Succesful
        </Alert>: ""
        }
    </div>
    <div className="lg:hidden md:hidden bg-[#F3F3F3] mt-20 w-full h-screen ml-[-280px] mb-10">
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            <button onClick={handlePayment}>Make Dai Payment</button>
        </div>
        {insufficient ? 
        <Alert color="failure" onDismiss={() => navigate("/daipayment")} className='mb-10'>
            <span className="font-medium">Error!</span> Insufficient Dai Balance
        </Alert>: ""
        }
        {noWallet ? 
        <Alert color="failure" onDismiss={() => navigate("/daipayment")} className='mb-10'>
            <span className="font-medium">Error!</span> Wallet unable to connect
        </Alert>: ""
        }
        {errorPay ? 
        <Alert color="failure" onDismiss={() => navigate("/daipayment")} className='mb-10'>
            <span className="font-medium">Error!</span> Payment Not Succesful
        </Alert>: ""
        }
    </div>
    </>
  )
}

export default DaiPayment

