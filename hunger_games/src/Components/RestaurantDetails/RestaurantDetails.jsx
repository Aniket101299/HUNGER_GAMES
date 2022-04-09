import axios from "axios";
import {useState,useEffect} from "react";

import "../Forms/Forms.css";


export const RestaurantDetails = () => {

    const [data,setData] = useState([]);

    // const [call,setCall] = useState(true);


    useEffect(()=>{
        axios.get("http://localhost:3001/get-restaurants").then((response)=>{
        setData(response.data);
    })
    
    },[])
   


    const oneStar = () => {
        console.log("hi");
       let newData = data.filter((e)=>{
           return e.rating>1;
       });
        console.log(newData);
        setData(newData)
      } 

  
  
  const twoStar = () => {
    console.log("hi");
   let newData = data.filter((e)=>{
       return e.rating>2;
   });
    console.log(newData);
    setData(newData)
  }
  
  
  
  const threeStar = () => {
    console.log("hi");
   let newData = data.filter((e)=>{
       return e.rating>3;
   });
    console.log(newData);
    setData(newData)
  }
  
  

  const fourStar = () => {
    console.log("hi");
   let newData = data.filter((e)=>{
       return e.rating>4;
   });
    console.log(newData);
    setData(newData)
  }
  











    return (   
        <>

              <div className="sortingButtons">
                    <div className="sortById">Sort by Ratings</div>
                    <button className="sortByRentAsc" onClick={()=> oneStar()}>1 star</button>
                    <button className="sortByRentDesc" onClick={()=> twoStar()}>2 star</button>
                    <button className="sortByAreaAsc" onClick={()=> threeStar()}>3 star</button>
                    <button className="sortByAreaDesc" onClick={fourStar}>4 star</button>
              </div>


              <div className="restaurants">
                 {data.map((item)=> {
                   return <>
                 <div className="singleRes">
              <div className="pic">
                 <img width="150px" height="140px" src={item.img_url} alt=""/>
              </div>
             <div className="ncp">
               <h3>{item.name}</h3>
               <div className="categ">{item.category.map((e)=> {
                   return <>
                   <p>{e},</p>
                   </>
               })}</div>
               <p className="cost">Cost $ {item.cost}</p>
               <div className="pay">{item.paymentMode.map((e)=> {
                   return <>
                   <p>{e},</p>
                   </>
               })}</div>
             </div>
             <div className="rvv">
                 <div>{item.rating}</div>
                 <p>{item.votes} votes</p>
                 <p>{item.views} reviews</p>
             </div>

          </div>
                   </>
                })}
             </div>


        </>
    )
}