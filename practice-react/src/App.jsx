import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from "axios"





function App() {
  const [count, setCount] = useState([])

  useEffect(()=>{
    axios.get(`https://randomuser.me/api/?results=5`).then((mydata)=>{
      setCount(mydata.data.results)
    })

  },[])

  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  
  count.map((ele)=>{
    
    arr.push(ele);
    localStorage.setItem("myArrCart",JSON.stringify(arr))
  })
  
  
    return (
      <div id="container">
      {arr.map((e)=>{ 
        console.log("e",e);
        return(
        <div className="details_div">
          <img src={e.picture.large} alt="" /> <br />
          Name : {e.name.title + " "+e.name.first+ " "+ e.name.last} <br />
          Gender : {e.gender} <br />
          Email : {e.email} <br />
          Age: {e.dob.age}
          
        </div>
        )
      })}
      
      </div>
    )
    
  
};

export default App
