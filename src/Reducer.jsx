import React from 'react';
import { useReducer } from 'react';
import { is,reducer } from './Myreducer';




function Reducer() {

    const[state,dispatch]=useReducer(reducer,is);
  return (
<>
<h1>{state.count}</h1>
    <input type="button" value="increase"  onClick={()=>{dispatch({type:'inc'})}} />
    <input type="button" value="decrease"  onClick={()=>{dispatch({type:'dec'})}}/>

</>  )
}

export default Reducer