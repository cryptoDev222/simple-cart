import { createContext, useState } from "react";
import Web3 from "web3";

export const ItemContext = createContext({
  connectWallet: () => {},
  setItmems: () => {},
});

export const ItemProvider = ({ children }) => {
  const [itemA, setItemA] = useState(0);
  const [itemB, setItemB] = useState(0);
  const [itemC, setItemC] = useState(0);
  const [itemD, setItemD] = useState(0);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else {
      window.web3 = new Web3(window.web3.currentProvider);
    }

    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  const resetItem = () => {
    if (account === null) return;
    setItemA(0);
    setItemB(0);
    setItemC(0);
    setItemD(0);
  };

  const setItem = (str, value) => {
    if (account === null) return;
    // eslint-disable-next-line default-case
    switch (str) {
      case "A":
        if (value === 0) return setItemA(0);
        if (itemA + value >= 0) setItemA(itemA + value);
        break;
      case "B":
        if (value === 0) return setItemB(0);
        if (itemB + value >= 0) setItemB(itemB + value);
        break;
      case "C":
        if (value === 0) return setItemC(0);
        if (itemC + value >= 0) setItemC(itemC + value);
        break;
      case "D":
        if (value === 0) return setItemD(0);
        if (itemD + value >= 0) setItemD(itemD + value);
        break;
    }
  };

  // set context value
  const contextValue = {
    connectWallet,
    resetItem,
    itemA,
    itemB,
    itemC,
    itemD,
    setItem,
    account,
  };
  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};
