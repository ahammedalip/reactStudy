import { useEffect, useState } from "react";

function useSum(a,b){
    const [sum, setSum] = useState(0)

    useEffect(()=>{
        setSum(a+b)
    },[a,b])

    return sum
}



function MyComponent() {
    const [a, setA] = useState(5);
    const [b, setB] = useState(10);
  
    const sum = useSum(a, b);
  
    return (
      <>
        <div>
          <label>
            A:
            <input type="number"  value={a}  onChange={(e) => setA(Number(e.target.value))} />
          </label>
        </div>
        <div>
          <label>
            B:
            <input
              type="number"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
            />
          </label>
        </div>
        <h2>{`Sum of ${a} and ${b} is ${sum}`}</h2>
      </>
    );
  }
  

export default MyComponent;
