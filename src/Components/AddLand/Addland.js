import React, { useContext, useState,useEffect } from "react";
import "../AddLand/Addland.css";
import { getFirestore, getDocs } from "firebase/firestore/lite";
import { collection, addDoc,getDoc} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

// import 'firebase/app'
// import 'firebase/firebase'
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
// import { storage } from "firebase-admin";
import { storage } from "../../firebase/config";
import { uploadBytes ,ref,getDownloadURL} from "firebase/storage";
function Addland(props) {
  const navigate=useNavigate();
  useEffect(() => {
    let user = window.localStorage.getItem("user");
    if(user){
      setAccount(user)
    }
 
    
    }
  , [])
  


  // const {user} = useContext(AuthContext)

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState();
  const [account, setAccount] = useState(props.user);


  const handleSubmit = async () => {
    const imageRef = ref(storage,`/images/${image.name}`);
    const result = await uploadBytes(imageRef,image).then(()=>{
      console.log('sucess');
    }).catch((error)=>{
      console.log(error);   
      
    })
    getDownloadURL(ref(storage, `/images/${image.name}`))
    .then(async (url) => {
      // `url` is the download URL for 'images/stars.jpg'
      await addDoc(collection(db, "lands") ,{
        WalletAddress:account,
        Name: name,
        Email: email,
        Price: price,
        City: city,
        Approved:false,
        image:url,
    });
    console.log(url)
    })
    .catch((error) => {
      // Handle any errors
    });
    
  
    // const docRef = doc(db, "lands");
    // const docSnap = await getDoc(docRef);
    
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }

    setName('')
    setEmail('')
    setPrice('')
    setCity('')
    navigate('/landing')
    

  };

  // const connectHandler = async () =>
  //  {

  //     // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     // const account = accounts[0]
  //     // setAccount(account);
  //     if (typeof window !="undefined" && typeof window.ethereum !="undefined"){
  //           try{
  //             const accounts=await window.ethereum.request({method: "eth_requestAccounts"});
  //             setAccount(accounts[0]);
  //             // console.log(walletAddress);

  //           }catch(err){
  //             console.log(err.message);
  //           }
  //         }else{
  //           console.log("Please install MetaMask");
  //         }
  // }

  return (
    <div>
      <div className="centerDiv">
        <form>
          <label htmlFor="fname">wallet Address</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            Value={account}
            disabled
          />
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="fname"
            name="Name"
            placeholder="enter your name"
          />
          <br />
          <label htmlFor="fname">email</label>
          <br />
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="fname"
            name="category"
            placeholder="enter your email"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            id="fname"
            name="Price"
            placeholder="in eth"
          />
          <br />
          <label htmlFor="fname">City</label>
          <br />
          <input
            className="input"
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br />
          {/* <input type="file" className="input" /> */}
        </form>
        <br />
        {/* <img alt="Posts" width="200px" height="200px" src='../assets.auth.svg'></img> */}
        <br />
        <input
          onChange={(e)=>{setImage(e.target.files[0])}}
          type="file"
        />
        <br />
        <button onClick={handleSubmit} className="uploadBtn">
          upload and Submit
        </button>
      </div>
    </div>
  );
}

export default Addland;
