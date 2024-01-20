import { useState } from "react";

function Passwordgn() {
    const [password,setPassword] = useState('')
    // let specialChar = ` !@#$%^&*.,<>/'";:? `
    // function number()
    // {
    //     return (Math.round(data*10))%9;
    // }
    function lowercase()
    {
        return String.fromCharCode(97+(Math.round(Math.random()*100))%25);
    }
    function uppercase()
    {
        return String.fromCharCode(65+(Math.round(Math.random()*100))%25);
    }
    // function number()
    // {

    // }
    function pass_gen()
    {
        let pass = '';
        let lable = true
        for(let i=1;i<=5;i++)
        {   
            let tmp ;
            if(lable){
                 tmp = lowercase();
                lable = false;
            }
            else{
                 tmp = uppercase();
                lable = true;
            }
            console.log(tmp)
            pass =  pass + tmp;
        }
      setPassword(pass);   
    }
   
  return (
    <div>
      {/* {String.fromCharCode(97+(Math.round(data*100))%26)} */}
      <button onClick={()=>pass_gen()} >gen</button>
      <span>{password}</span>
    </div>
  )
}

export default Passwordgn
