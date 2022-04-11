import axios from "axios";
import { useState } from "react";
import "./Forms.css";

export const Forms = ()=>{

const [formData,setFormData] = useState({
    category:[],
    name:"",
    img_url:"",
    cost:"",
    rating:"",
    votes:"",
    views:"",
    paymentMode:""
})



const handleChange = (e)=> {
 const {id,value,checked} = e.target;
  if(id === "category") {
   
    const {category} = formData;
    
     // Case 1 : The user checks the box
     if (checked) {
        setFormData({
            ...formData,
            category: [...category, value]
        });
      }
    
      // Case 2  : The user unchecks the box
      else {
        setFormData({
            ...formData,
            category: category.filter((e) => e!== value)
        });
      }
  
  } else if(id === "paymentMode") {
   
    const {paymentMode} = formData;
    
     // Case 1 : The user checks the box
     if (checked) {
        setFormData({
            ...formData,
            paymentMode: [...paymentMode, value]
        });
      }
    
      // Case 2  : The user unchecks the box
      else {
        setFormData({
            ...formData,
            paymentMode: paymentMode.filter((e) => e!== value)
        });
      }
  
  } else {

    setFormData({
        ...formData,
        [id]:value
      })
  }

}


const handleSubmit = (e)=>{
e.preventDefault();
axios.post("http://localhost:3001/get-restaurants",formData)
alert("Restaurent added Successfully");
setFormData({
    category:[],
    name:"",
    img_url:"",
    cost:"",
    rating:"",
    votes:"",
    views:"",
    paymentMode:""
})

}



    return(
        <>

        <form onSubmit={handleSubmit}>
            <h1>Add new Restaurant</h1>
            <label>Continental</label>
            <input id="category" type="checkbox" value="Continental"  onChange={handleChange}/>
            <br/>
            <label>Asian</label>
            <input id="category" type="checkbox" value="Asian"  onChange={handleChange}/>
            <br/>
            <label>Desserts</label>
            <input id="category" type="checkbox" value="Desserts"  onChange={handleChange}/>
            <br/>
            <label>South Indian</label>
            <input id="category" type="checkbox" value="South Indian"  onChange={handleChange}/>
            <br/>
            <label>Pizza Burger</label>
            <input id="category" type="checkbox" value="Pizza Burger"  onChange={handleChange}/>
            {/* <select  onChange={handleChange}>
                <option value="">Select Category</option>
                <option id="Veg" value="">Continental</option>
                <option id="Non-veg" value="">Asian</option>
                <option id="Spicy" value="">Desserts</option>
                <option id="Sweet" value="">South Indian</option>
                <option id="Fruit" value="">Pizza Burger</option>
            </select> */}
            <br/>
           
            <input id="name" type="text" placeholder="enter name"  onChange={handleChange} />
            <br/>
            <input id="img_url" type="text" placeholder="add image url"  onChange={handleChange}/>
            <br/>
            <input id="cost" type="text" placeholder="enter cost"  onChange={handleChange}/>
            <br/>
            <input id="rating" type="text" placeholder="rating"  onChange={handleChange}/>
            <br/>
            <input id="votes" type="number" placeholder="votes"  onChange={handleChange}/>
            <br/>
            <input id="views" type="number" placeholder="views"  onChange={handleChange}/>
            <br/>
            <label>Card</label>
            <input id="paymentMode" type="checkbox" value="Card" onChange={handleChange}/>
            <br/>
            <label>UPI</label>
            <input id="paymentMode" type="checkbox" value="UPI" onChange={handleChange}/>
            <br/>
            <label>Cash</label>
            <input id="paymentMode" type="checkbox" value="Cash" onChange={handleChange}/>
          
            {/* <select  id="paymentMode" onChange={handleChange}>
                <option value="">Select Payment methods</option>
                <option value="">Card</option>
                <option value="">UPI</option>
                <option value="">Cash</option>
            </select> */}
            <br/>
            <br/>
            <input type="submit" value="Add Restaurent"/>
        </form>

        

        </>
    )
}