
import './App.css'
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Friend from './Friend';

function App() {
 //Normal function rendering components -------
  function handleClick() {
    alert('This is new button');
  }
//Arrow function rendering components------
  const addClickHandler = (num) => {
    alert(num * 5);
  }

  return (
    <>
      <h1>React Rendering</h1> 
      <Users></Users>
      <Friends></Friends>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => {
        addClickHandler(65)
      }}>Learn more</button>

      <button onClick={function sumClick() {
        alert('This is handler components')
      }}>Login me</button>
      <button onClick={() => alert('how beautiful is it!')}>Home declare</button>
      
    </>
  )
}

export default App
