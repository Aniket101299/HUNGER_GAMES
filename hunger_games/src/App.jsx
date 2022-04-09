import { useState } from 'react';
import './App.css';
import { Forms } from './Components/Forms/Forms';
import { RestaurantDetails } from './Components/RestaurantDetails/RestaurantDetails';

function App() {

const [form,setForm] = useState(false);

const showForm = ()=> {
 setForm(!form);
 return;
}


  return (
    <div className="App">
     
     <button onClick={showForm}>{form? "Hide Form" : "Show Form"}</button>
     {form? <Forms/>: <RestaurantDetails/>}
    
    </div>
  );
}

export default App;
