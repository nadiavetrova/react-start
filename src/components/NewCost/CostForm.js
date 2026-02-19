import React, {useState} from "react"; 
import "./CostForm.css";

const CostForm = () => {
//добавление состояний
const [inputName, setInputName] = useState('');
const [inputAmount, setInputAmount] = useState('');
const [inputDate, setInputDate] = useState('');

//альтернатиынй вариант - передаем в useState обьект

// const [userInput, setUserInput] = useState({
// name: '',
// amount: '',
// date: ''
// });

//добавление обработчиков событий
const nameChangeHandler = (event) => {
  setInputName(event.target.value);

  // setUserInput({
  //   ...userInput,
  //   name: event.target.value
  // })

  //каждый раз когда изменение состояние зависит от предыдущего состояния, используем такой синтаксис: 

  // setUserInput((previousState) => {
  //     return {
  //       ...previousState,
  //     name: event.target.value,
  //     }
  //   })
  
  console.log(event.target.value);
}

const amountChangeHandler = (event) => {
  setInputAmount(event.target.value);

  // setUserInput({
  //   ...userInput,
  //   amount: event.target.value,
  // })

    //   setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //   amount: event.target.value,
    //   }
    // })

  console.log(event.target.value);
}

const dateChangeHandler = (event) => {
    setInputDate(event.target.value);

  //     setUserInput({
  //   ...userInput,
  //   date: event.target.value,
  // })

    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //   date: event.target.value,
    //   }
    // })

  console.log(event.target.value);
}

//предотыразаем дефолтное поведение
  const submitHandler = (event) => {
  event.preventDefault();

  const costData = {
    name: inputName,
    amount: inputAmount,
    date: new Date(inputDate)
  }

  console.log(costData);
  
  }

return   <form onSubmit={submitHandler}>
  <div className="new-cost__controls">
    <div className="new-cost__control">
      <label>Название</label>
      <input type="text" onChange={nameChangeHandler}/>
    </div>
        <div className="new-cost__control">
      <label>Сумма</label>
      <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
    </div>
        <div className="new-cost__control">
      <label>Дата</label>
      <input type="date" min='2026-01-01' max='2026-02-19' onChange={dateChangeHandler}/>
    </div>
    <div className="new-cost__actions">
<button type='submit'>Добавить расход</button>
    </div>
  </div>
</form>
}

export default CostForm;