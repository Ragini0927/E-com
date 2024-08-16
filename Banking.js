import React, { useState } from 'react';
import OpenAccount from './OpenAccount';
import Login from './Login';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import './BankingApp.css';

const BankingApp = () => {
  const [accountOpened, setAccountOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');

  const handleAccountOpen = (cname, initialBalance) => {
    setAccountOpened(true);
    setBalance(initialBalance);
    setMessage(`Account for ${cname} opened with balance $${initialBalance}`);
  };

  const handleLogin = (uname) => {
    setLoggedIn(true);
    setMessage(`Logged in as ${uname}`);
  };

  const handleDeposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
    setMessage(`$${amount} deposited. New balance: $${balance + amount}`);
  };

  const handleWithdraw = (amount) => {
    if (amount <= balance) {
      setBalance((prevBalance) => prevBalance - amount);
      setMessage(`$${amount} withdrawn. New balance: $${balance - amount}`);
    } else {
      setMessage('Insufficient funds for this withdrawal.');
    }
  };

  return (
    <div className="banking-app">
      <h1>Banking Application</h1>

      {!accountOpened && <OpenAccount onAccountOpen={handleAccountOpen} />}
      
      {accountOpened && <Login onLogin={handleLogin} />}
      
      {loggedIn && (
        <>
          <Deposit balance={balance} onDeposit={handleDeposit} />
          <Withdraw balance={balance} onWithdraw={handleWithdraw} />
        </>
      )}

      <p>{message}</p>
    </div>
  );
};

export default BankingApp;
