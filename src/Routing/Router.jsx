import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Power from "../components/Home/Power";
import Wallet from '../components/Wallet/Wallet';
import Convert from '../components/Convert/Convert';
import Convert2 from '../components/Convert/Convert2';
import Profile from '../components/Profile/Profile';
import Settings from '../components/Profile/Settings';
import SignUp from '../components/Register/SignUp';
import Login from '../components/Register/Login';
import Welcom from '../components/Register/Welcom';
import Popup from '../components/Home/Popup';
import Pay from '../components/pay/Pay';
import Dai from '../components/pay/Dai';
import Transactions from '../components/Home/Transactions';
import DaiPayment from '../components/pay/DaiPayment';

const Router = () => {
  return (
    <>
        <Routes>
             <Route path="/home" element={<Home/>} />
             <Route path="/power" element={<Power />} />
             <Route path="/wallet" element={<Wallet />} />
             <Route path="/convert" element={<Convert />} />
             <Route path="/convert2" element={<Convert2 />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="/settings" element={<Settings />} />
             <Route path="/signup" element={<SignUp />} />
             <Route exact={true} path="/" element={<Login />} />
             <Route path="/login" element={<Login />} />
             <Route path="/welcome" element={<Welcom />} />
             <Route path="/solaxy" element={<Popup />} />
             <Route path="/pay" element={<Pay />} />
             <Route path="/dai" element={<Dai />} />
             <Route path="/transactions" element={<Transactions />} />
             <Route path="/daipayment" element={<DaiPayment />} />
        </Routes>
    </>
  )
}

export default Router