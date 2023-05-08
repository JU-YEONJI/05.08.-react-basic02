const allColor = ['red','blue','yellow','orange','violet'];

function Procolor({color}){
    function optionColor(){
        console.log(color);
        // 함수니까 리턴을 기억하자
        return color.map((item,index) => (<option value={item} key={index}>{item}</option>))
    }

    return(
        <p>
        <label htmlFor="color"></label>
        <select id="color">
            {/* {color.map((item,index) => (<option value={item} key={index}>{item}</option>))} */}
            {optionColor()};
            {/* 함수작동 기억 */}
        </select>
        </p>
    )

}

export default function Test12(){
    // console.log(Procolor)
    return(
        // <p>
        //     <label>color:</label>
        //     <select>
        //         {/* {color.map()} */}
        //     </select>
        // </p>
        <Procolor color={allColor} />
    
        )
}

