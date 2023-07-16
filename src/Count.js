import React from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import { Inc,Dec,Inc1,Dec1} from './states/reducers/Reducer1';

function Count() {
    const curState = useSelector((state)=>state.number);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>React Redux Tutorial</h1>
        <div>
            <h1>{curState}</h1>
            <div>
                <button onClick={()=>dispatch(Inc())} >Inc</button>
                <button onClick={()=>dispatch(Dec())} >Dec</button>
                <button onClick={()=>dispatch(Inc1(10))} >Inc10</button>
                <button onClick={()=>dispatch(Dec1(5))} >Dec5</button>
            </div>
        </div>
    </div>
  )
}

export default Count