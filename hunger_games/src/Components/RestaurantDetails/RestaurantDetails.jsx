import axios from "axios";
import {useEffect, useState} from "react";

import "../Forms/Forms.css";


export const RestaurantDetails = () => {

    const [data,setData] = useState([]);

    // const [call,setCall] = useState(true);

    const [page, setPage] = useState(1);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);
    // const [order,setOrder] = useState(null);
    const [sortData,setSortData] = useState({sort:null,order:null});
    // const [cost,setCost] = useState(null);
    const [payMode,setPayMode] = useState(null);
    const [rating,setRating] = useState(null);

    const perPage = 5;
    
  
    const fetchData = (page, perPage,sortData,rating,payMode) => {
      setLoading(true);
      setErr(false);
      axios(`http://localhost:3001/get-restaurants`, {
        method: "GET",
        params: {
          _page: page,
          _limit: perPage,
          _sort:sortData.sort,
          _order:sortData.order,
          rating_gte:rating,
          paymentMode:payMode
        }
      })
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setData([]);
          setErr(true);
        });
    };
  
    useEffect(() => {
      fetchData(page, perPage,sortData,rating,payMode);
    }, [page, perPage,sortData,rating,payMode]);




    // useEffect(()=>{
    //     axios.get("http://localhost:3001/get-restaurants").then((response)=>{
    //     setData(response.data);
    // })
    
    // },[])
   


//     const oneStar = () => {
//         console.log("hi");
//        let newData = data.filter((e)=>{
//            return e.rating>1;
//        });
//         console.log(newData);
//         setData(newData)
//       } 

  
  
//   const twoStar = () => {
//     console.log("hi");
//    let newData = data.filter((e)=>{
//        return e.rating>2;
//    });
//     console.log(newData);
//     setData(newData)
//   }
  
  
  
//   const threeStar = () => {
//     console.log("hi");
//    let newData = data.filter((e)=>{
//        return e.rating>3;
//    });
//     console.log(newData);
//     setData(newData)
//   }
  
  

//   const fourStar = () => {
//     console.log("hi");
//    let newData = data.filter((e)=>{
//        return e.rating>4;
//    });
//     console.log(newData);
//     setData(newData)
//   }
  











    return (   
        <>
             {err && <div className="error"> Something went wrong! Try again </div>}
              <div className="sortingButtons">
                    <div className="sortByRating">Sort by Ratings</div>
                    <button className="oneStar" onClick={()=> setRating(1)}>1 star & above</button>
                    <button className="twoStar" onClick={()=> setRating(2)}>2 star & above</button>
                    <button className="threeStar" onClick={()=> setRating(3)}>3 star & above</button>
                    <button className="fourStar" onClick={()=>setRating(4)}>4 star & above</button>
              </div>

             <div className="sortByCost"> 
                <div>Sort by Cost</div>
                <button onClick={()=> setSortData({sort:"cost",order:"desc"})}>Sort High to Low</button>
                <button onClick={()=> setSortData({sort:"cost",order:"asc"})}>Sort Low to High</button>
             </div> 

             <div className="sortByPay">
                <div>Sort by Payment Methods</div>
                <button onClick={()=>setPayMode("Cash")}>Cash only Restaurants</button>
                <button onClick={()=>setPayMode("Card")}>Card only Restaurants</button>
                <button onClick={()=>setPayMode(null)}>All Restaurants</button>
             </div> 




              <div className="restaurants">
                 {data.map((item)=> {
                   return <>
                 <div className="singleRes" key={item.id}>
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
               <p className="cost">Cost for 2 people $ {item.cost}</p>
               <div className="pay">Accepts {item.paymentMode} only</div>
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
     
     

       {loading && <div>...loading</div>}
       <div className="preNext"> 
       <button 
        className="pre"
        disabled={loading || page === 1}
        onClick={() => setPage((page) => page - 1)}
       >
         PREV
       </button>
       <button 
       className="nxt"
       disabled={loading || page === 4}
       onClick={() => setPage(page + 1)}>
         NEXT
       </button>
       <div className="page">Page: {page}</div>
       </div>
      

        </>
    )
}