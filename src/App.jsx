import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false);
  const [Password , setPassword ] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  },[Password])


  // const Passwordgenerator = useCallback(() => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
  //   if(numberAllowed) str += '0123456789'
  //   if(charAllowed) str += '!@#$%^&*'

  //   for(let i = 1 ; i<length ; i++){
  //     let Random = Math.floor(Math.random()*str.length + 1)
  //     pass += str.charAt(Random)
  //   }
  //   setPassword(pass)
  // }, [length, numberAllowed, charAllowed])


  useEffect(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#}$<?>%)^&(*{'

    for(let i = 1 ; i<length ; i++){
      let Random = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(Random)
    }
    setPassword(pass)
  } , [length, numberAllowed , charAllowed])

  return (
    <>
      <div className='w-full max-w-md md-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type='text' value={Password} className='outline-none w-full py-1 px-3' placeholder='password' ref = {passwordRef}  readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        
        </div>
{/* ------------range------------------- */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6} 
              max={20}
              value={length}
              className='cursor-pointor'
              onChange={(e)=>{
                setlength(parseInt(e.target.value))
              }}
              />
            <label>length : {length}</label>
{/* ------------Number------------------- */}
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{
                  setNumAllowed((prev)=>!prev)
                }}
              />
              <label>Number</label>
            </div>
{/* ------------Character------------------- */}
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"

                min={6} 
                max={100}
                value={charAllowed}
                className='cursor-pointor'
                onChange={()=>{
                  setCharAllowed((prev)=>!prev)
                }}
              />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
      <></>
    </>
  )
}

export default App
