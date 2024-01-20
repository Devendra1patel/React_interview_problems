import { useState } from 'react';
import './home.css';
const Emi = () => {
  const [downpay,setDownpay] = useState({
    "value":0,
    "max":100
  })
  const [emi,setEmi] = useState({
    "value":0,
    "max":100
  })
  const [input,setInput] = useState(0)
  const [installment,setInstallment] = useState({
    'arr':[12,24,36,48],
    'current':12
  });
  function handlerEmi()
  {
    let mony = (input*20)/100 ;
    setDownpay({...downpay,"value": mony ,"max":input});
    let tmp_emi = input - downpay.value;
    // console.log("first-->",tmp_emi);
    setEmi({"value":(tmp_emi)/12,"max":tmp_emi });
    // console.log("second-->",emi);
  }
  function updates(e){
    setDownpay({...downpay,"value":e.target.value})
    // updates2();
  }
  function updates2(e){
    setEmi({"value":e.target.value});
  }
  return (
    <>
    <div className='inputContainer_' >
      <span>Amount-{input}</span>
      <input type='text'  onChange={(e)=>setInput(e.target.value)} ></input>
      <span>rate%-{input}</span>
      <input type='text'  onChange={(e)=>setInput(e.target.value)} ></input>
      <span>processing%-{input}</span>
      <input type='text'  onChange={(e)=>setInput(e.target.value)} ></input>
    </div>

      <button onClick={()=>handlerEmi()} >handler</button>

      <div>
         <h2>downPay with proc charge:-{downpay.value + (input -downpay.value)/100 }</h2>
          <input type="range" min="0" max={downpay.max} value={downpay.value} id="myRange"  onChange={(e)=>updates(e)} />
          <h3>downpayment : <span>{downpay.value}</span></h3>
      </div>
      <div>
          <input type="range" min="0" max={emi.max} value={(input-downpay.value)/(installment)}  onChange={(e)=>updates2(e)}/>
          <h3>TotalEmi Amount: <span>{emi.value}</span></h3>
      </div>
      <div>
        {
          installment.arr.map((ele,ind)=>{
            return(
              <div className='installments_' key={ind}>
                <button onClick={()=>setInstallment({...installment,'current':ele})} >{ele}</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Emi;
