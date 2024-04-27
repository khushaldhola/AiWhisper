"use client"
import { useState, useCallback, useEffect, useRef } from 'react'
// import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAlowed, setsymbolAlowed] = useState(false)
  const [passwrd, setPasswrd] = useState('')

  const passRef = useRef(false) // hook -> powrful hook if want to grab from window

  // const genPass = () =>{ //logic - js normal func }
  const genPass = useCallback(() => {
    let passs = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) chars += '0123456789'
    if(symbolAlowed) chars += '!@#$%^&*()_+'

    for(let i = 0; i < length; i++){
      const indx = Math.floor(Math.random() * chars.length + 1)
      passs += chars.charAt(indx)
    }
    console.log(passs)
    setPasswrd(passs)
  }, [length, numberAllowed, symbolAlowed])
  // in callback func we add dependencies which does not change too much - , [length, numberAllowed, symbolAlowed]

  // useEffect(callback, dependency arr) , dependency - as soon as something changes
  useEffect(() => {
    genPass()
  }, [length, numberAllowed, symbolAlowed]) // dont use passwrd here cause it changes a lot

  const cpPassToClipboard = () => {
    window.navigator.clipboard.writeText(passwrd)
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0, 3)
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 bg-gray-800 text-blue-200'>
        <h1 className='text-white text-center my-3 text-3xl' >Pass Gen</h1>
        <div className='flex shadow rounded-md overflow-hidden mb-4'>
          <input
          type='text'
          value={passwrd}
          className='outline-none w-full py-1 px-3 text-blue-900'
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button className='outline-none bg-blue-400 text-white px-4 py-0.5 shrink-0'
          onClick={cpPassToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            id=''
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={(e) => { setNumberAllowed((prev) => !prev) }}
            name=''
            id=''
            />
            <label htmlFor='number'>Numbers</label>
            <input 
            type='checkbox'
            defaultChecked={symbolAlowed}
            onChange={(e) => { setsymbolAlowed((prev) => !prev) }}
            name=''
            id=''
            />
            <label htmlFor='symbol'>Symbol</label>
          </div>
        </div>
        <div className='flex'>
          <button className='mt-10 ml-80 border-b-2 border-blue-300'
          onClick={() => genPass()}
          >ReGenerate</button>
        </div>
      </div>
    </>
  )
}

export default App
