import { useState } from 'react';
import './home.css';
const Home = () => {
  const [input,setinput] = useState({
    'h':0,
    'm':0,
    's':0
  })
  // const obj = {
  //   'h':0,
  //   'm':0,
  //   's':0,
    function second(){
      let tmp;
      tmp = Math.floor(this.s/60); 
      this.s = Number(this.s) - tmp*60;
      this.m = Number(this.m) + Number(tmp);
      console.log(".....",this.s,this.m,this.h)
    }
    function min(){
      let tmp;
      tmp = Math.floor(this.m/60); 
      this.m = Number(this.m) - tmp*60;
      this.h = Number(this.h) + tmp;
    }
  // }
  function handleInputs()
  {
    second.call(input);
    min.call(input);
    const intervalHandler = setInterval(()=>{
      if(input.s == 1)
      {
        if(input.m != 0){
          setinput({...input,'m':(input.m=input.m-1),'s':(input.s = 59)});
        }
        else{
          if(input.h != 0)
          {
            setinput({...input,'h':(input.h=input.h-1),'m':(input.m=59),'s':(input.s = 60)});
          }
          else{
             clearInterval(intervalHandler);
          }
        }
      }
      setinput({...input,'s':(input.s=input.s-1)});
    },1000)
    console.log("----",input);
  }
  function handleInputsReset(){
    setinput({
      'h':0,
      'm':0,
      's':0
    })
  }
  console.log("values",input);
  return (
    <div>
       <h2>Stop Watch</h2>
       <div className='mainContainer'>
         <input type="number"  className="input_"  placeholder='00' value={input.h} onChange={(e)=>setinput({...input,'h':e.target.value})} ></input><span>:</span>
         <input type="number"  className="input_" placeholder='00' value={input.m}  onChange={(e)=>setinput({...input,'m':e.target.value})}></input><span>:</span>
         <input type="number"  className="input_" placeholder='00' value={input.s}  onChange={(e)=>setinput({...input,'s':e.target.value})}></input><span>:</span>
       </div>
       <div className='footerCont'>
         <button onClick={()=>handleInputs()} >Start</button>
         <button onClick={()=>handleInputsReset()} >Restart</button>
       </div>
    </div>
  )
}

export default Home
