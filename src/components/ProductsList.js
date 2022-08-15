import {useParams} from "react-router";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ApplicationTheme} from "./ApplicationThemeProvider";

const ProductsList=()=>{
    let{isLight,setLight}=useContext(ApplicationTheme);
    let [productsList,setProductsList]=useState([]);
    let [isLoading,setLoading]=useState(true);
    useEffect(()=>{
        async function loadProducts(){
              try {
                  const response  = await fetch('http://localhost:8000/api/test');
                  setProductsList(await response.json());
                }catch (e){
                  console.log(e);
              }finally {
                  setLoading(false);
              }
          }
          loadProducts();
    },[])
    return (
        <div>
            {isLoading? <span>
                Loading ...
            </span>:<ul style={{color:isLight?'black':'white',backgroundColor:isLight?'white':'black'}}>
                {productsList.map((p,index)=>{
                    return <li key={index+'_item'}>{p.title} <span style={{color:isLight?'blue':'red'}}>{p.price}</span></li>
                })}
            </ul>
            }
            <button onClick={()=>{setLight(!isLight)}}> Set {isLight?'Dark':'Light'}</button>
        </div>

    )
}
export default ProductsList;