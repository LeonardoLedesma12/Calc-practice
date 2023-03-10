import './App.css';
import Button from './component/Buttons'
import Screen from './component/Screen';
import ClearButton from './component/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const addInput = (val) => {
    setInput(input + val);
  }

  const calcRes = () => {
    if(input){
      setInput(evaluate(input))
    }
    else{
      setInput('')
    }
  };

  return (
    <div className="App">
      <div className='mainContainer'>
        <Screen input={input}/>
        <div className='fila'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick={calcRes}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton manageClear ={() => setInput('')}/>
        </div>
      </div>
    </div>
  );
}

export default App;
