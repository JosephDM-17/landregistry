import React, { useState } from "react";
import Auth from "../../assets/auth.svg";

import "../Login/Login.css";

import Web3 from "web3";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../store/Context";

function LoginContent() {
  const navigate = useNavigate();
  const [walletAddress, setwalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

 
  

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setwalletAddress(account);
        console.log(walletAddress);
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // async function requestAccount(){
  //   if(window.ethereum){

  //     try{
  //       const account = await window.ethereum.request({method:"eth_requestAccounts",});
  //       console.log(account);
  //     }catch(error){
  //       console.log('error connecting');
  //     }
  //   }else{
  //     alert('metamask not detected')
  //   }
  // }

  //   async function connectWallet(){
  //     if(typeof window.ethereum !== 'undefined'){
  //       await requestAccount();

  //       const provider= new ethers.providers.Web3Provider(window.ethereum);
  //     }
  //   }

  // const connectWallet = async ()=>{
  //   if (typeof window !="undefined" && typeof window.ethereum !="undefined"){
  //     try{
  //       const accounts=await window.ethereum.request({method: "eth_requestAccounts"});
  //       setwalletAddress(accounts[0]);
  //       console.log(walletAddress);

  //     }catch(err){
  //       console.log(err.message);
  //     }
  //   }else{
  //     console.log("Please install MetaMask");
  //   }

  // }

  return (
    <div className="outer_container">
      <img
        className="auth_img"
        src={Auth}
        alt=""
        width="500px"
        height="500px"
      />
      {
        // !isConnected &&
        <div>
          {!isConnected ? (
            <button onClick={onConnect} className="button">
              Connect to metamask wallet
            </button>
          ) : (
            <button onClick={onConnect} className="button">
              Connected to metamask wallet
            </button>
          )}
        </div>
      }
      <br />
      <a href="/signup">If you are new register here</a>
    </div>
  );
}

export default LoginContent;

// const [isConnected, setIsConnected] = useState(false);
// const [ethBalance, setEthBalance] = useState("");

// const onDisconnect = () => {
//   setIsConnected(false);
// }
