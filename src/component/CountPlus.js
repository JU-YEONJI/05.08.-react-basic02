import { useState } from "react"



export default function CountPlus(){
    // 스테이트만들려면컴퍼넌트안에
    const [count,setCount] = useState(0)
    // function Play(){}
    return(
    <div>
        <h1>count:{count}</h1>
        <p>
            <button type="button"
                    // onClick={play}
                    onClick={ () => setCount(count+  1) }
            >
                click</button>
        </p>
    </div>
    )
}