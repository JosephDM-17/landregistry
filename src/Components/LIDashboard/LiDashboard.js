import React from 'react'
import './LiDashboard.css'
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/config";
 function LiDashboard() {

// const querySnapshot = await getDocs(collection(db, "lands"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
  // const [data, setData] = useState("")
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const q = query(collection(db, "lands"), where("Approved", "==", false));
  //     const querySnapshot = await getDocs(q);
  //     const docs = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setData(docs);
  //   };

  //   fetchData();
  // }, []);

  

  return (
    <div className='body'>
        
    <header>
 <h1>Document Approval Page</h1>
</header>
<section>
  
 <table>
   <tr>
     <th>Wallet address</th>
     <th>Name</th>
     <th>City</th>
     <th>Document</th>
     <th>Actions</th>
   </tr>
   {/* {!data ? */}
    <div><h3>No data available </h3></div>:
   <><tr>
              <td>Wallet address 1</td>
              <td>Ajith Kumar</td>
              <td>Ernakulam</td>
              <td><a href="">doc</a></td>
              <td>
                <button class="approve">Approve</button>
                <button class="reject">Reject</button>
              </td>
            </tr><tr>
                <td>Wallet address 2</td>
                <td>James Carol</td>
                <td>Alappuzha</td>
                <td><a href="">doc</a></td>

                <td>
                  <button class="approve">Approve</button>
                  <button class="reject">Reject</button>
                </td>
              </tr><tr>
                <td>Wallet address 3</td>
                <td>Gireesh Kumar</td>
                <td>Thiruvanthapuram</td>
                <td><a href="">doc</a></td>

                <td>
                  <button class="approve">Approve</button>
                  <button class="reject">Reject</button>
                </td>
              </tr></>
 {/* } */}
 </table>
</section>

</div>
  )
}

export default LiDashboard