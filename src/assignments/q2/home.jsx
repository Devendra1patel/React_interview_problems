import { useEffect, useState } from 'react';
import './home.css';



const Pagination = () => {
  const [pages, setPages] = useState(1);
  const [data, setData] = useState()
  async function fun()
  {
      let tmp_data = await fetch(`https://dummyjson.com/products?limit=100`);
          tmp_data = await tmp_data.json();
          setData(tmp_data);
          console.log("data which fatched",data);
  }
    function pagesHandler(page){
      setPages(page);
    }
    useEffect(()=>{
        fun(); 
    },[]);
  return (
    <>
      <div className='container' >
        {
          data != undefined  && data.products.slice(pages*10-10,pages*10).map((ele)=>{
              return (  
                  <div className='product_' key={ele.id}>
                      <h2>{ele.title}-{ele.id}</h2>
                      <span>{ele.brand}</span>
                      <img src={ele.images[0]} ></img>
                  </div>
              )
          })
        }
      </div>
      <div>
        {
          data != undefined  &&
          [...Array(data.limit/10)].map((_,i)=>{
            return (
              <div key={i+1}>
                <button onClick={()=>pagesHandler(i+1)} >{i+1}</button>
                </div>
            )
          }
          )
        }
      </div>
    </>
  )
}

export default Pagination;
