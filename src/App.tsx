
import React from 'react';
import {useState} from 'react'
import Block from './Components/Block'
import './App.css'



const App:React.FC=()=>{
  const[state,setstate]=useState(Array(9).fill(null))
  const[currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = (state :any[])=>{
    const winner=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0;i<winner.length;i++){
      const [a,b,c]=winner[i]
      if(state[a]===state[b] && state[a]===state[c] && state[a]!=null){
        return true
      }
    }
    return false
  }

  const handleOnClick = (index: number) => {

    if (state[index] === null) { // Check to prevent overwriting a cell
      const copyArray = [...state];
      copyArray[index] = currentTurn;
      if(checkWinner(copyArray)){
        alert(`${currentTurn} wins`)
        copyArray.fill(null)
      }
     

      setCurrentTurn(currentTurn === "X" ? "O" : "X");
      setstate(copyArray);

    }
  };

  return (
    <div className='flex m-32'>
        <div className=''>
            <Block onClick={()=>handleOnClick(0)} value={state[0]}/>
            <Block onClick={()=>handleOnClick(1)} value={state[1]}/>
            <Block onClick={()=>handleOnClick(2)} value={state[2]}/>
        </div>
        <div className='row'>
          <Block onClick={()=>handleOnClick(3)} value={state[3]}/>
          <Block onClick={()=>handleOnClick(4)} value={state[4]}/>
          <Block onClick={()=>handleOnClick(5)} value={state[5]}/>
        </div>
        <div className='row'>
          <Block onClick={()=>handleOnClick(6)} value={state[6]}/>
          <Block onClick={()=>handleOnClick(7)} value={state[7]}/>
          <Block onClick={()=>handleOnClick(8)} value={state[8]}/>
        </div>
    </div>    
  );
}

export default App;
