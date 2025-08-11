import { useSelector, useDispatch } from "react-redux"
import { decrease, increase } from "./redux/counterSlice"

function App() {
  const count = useSelector((state: any) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
    </div>
  )
}

export default App