import { useDispatch } from "react-redux";
import { countDecrement, countIncrement } from "./redux/countSlice";
import CountDisplay from "./redux/CountDisplay";

function App() {

  const dispatch = useDispatch();

  const handleIncrement= () => {
    dispatch(countIncrement());
  }

  const handleDecrement= () => {
    dispatch(countDecrement());

  }


  return (

    <div>
      <CountDisplay/>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
