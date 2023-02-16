import { useCounter } from '../hook/useCounter'

const CounterWithHook = () => {

   const {counter, accumulated} = useCounter();
  return (
    <>
    <h3>Counter with hook: <small>{counter}</small></h3>
      <div>
        <button onClick={() => accumulated(+1)}>+1</button>
        &nbsp;
        <button onClick={() => accumulated(-1)}>-1</button>
      </div>
    </>  )
}

export default CounterWithHook