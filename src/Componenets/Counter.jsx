import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterslice';

function Counter() {
   //state to hold the value from input box
   const [range,setrange] = useState('')

    //hook to dispatch a function in action
    const dispatch = useDispatch()
     
    //component can access the state by using useselector hook
    const count = useSelector((state)=>state.counter.value)

    
  return (
    <>
    <div className='bg-light d-flex justify-content-center align-items-center align-items-center w-100 p-4 rounded flex-column'>
            <h1 style={{fontSize:'90px'}}>{count}</h1>
          </div>
          <form className='mt-5'>            
            <Stack  direction="row" spacing={1}>
            <Button onClick={()=>dispatch(increment(Number(range)))} variant="contained" color="success">Increment</Button>
            <Button onClick={()=>dispatch(decrement(Number(range)))} variant="contained" color="warning">Decrement</Button>
            <Button  onClick={()=>dispatch(reset())} variant="contained" color="error">Reset</Button>
            </Stack>
          </form>
          <div className='mt-4 w-100'>
            <input type="text" onChange={(e)=>setrange(e.target.value)} className='form-control' style={{borderColor:'blue'}} placeholder='Enter the Range' />
          </div>
    </>
  )
}

export default Counter