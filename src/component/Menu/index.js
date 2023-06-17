import React,{useState} from "react";
import "./style.css";
import Categoris from "../category/categorise";

function Menu(){
  
const[data,setData]=useState(Categoris);
    
const filterResult=(catItem)=>{
setData( Categoris.filter((curData)=>{
  return curData.category === catItem;

 }));
}


return(
    // <>
    <div className="container">
    <div>
        <div>
            <h1 className="title">Our Menu</h1>
            <div className="divider1"></div>
        </div>
    </div>


    <div>
         <div className="anchor">
              <a onClick={()=>setData(Categoris)}>All</a>
              <a onClick={()=>filterResult('Breakfast')}>Breakfast</a>
              <a onClick={()=>filterResult('Lunch')}>Lunch</a>
              <a onClick={()=>filterResult('Shakes')}>Shakes</a>
         </div> 
    
    <div className="containerCard">
          {data.map((item)=>{
             return(
             <div key={item.id} className="card">

             <div className="left">
                <img src={item.img} alt={item.title} />
             </div>

             <div className="right">
                <div className="card-body">
                  <h4 className="titleca">{item.title}</h4>
                  <h4 className="price">{item.price}</h4>
                </div>
                <div className="divider"></div>
               <div className="des">
                 <span > {item.des}</span>
               </div>
             </div>
            
             </div>
            )
            })}
    </div>
    </div>
</div>
    
)
}
export default Menu;