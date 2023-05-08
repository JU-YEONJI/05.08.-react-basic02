import { useState } from "react";


export default function Test09(){
    const [year, setYear] = useState(2023)
    return(
        <div>
            <p>년도:{year}</p>
            <p>
                <button type="button"
                onClick={ () => setYear(year+1)}>
                    더하기
                </button>
            </p>
        </div>
    )
}