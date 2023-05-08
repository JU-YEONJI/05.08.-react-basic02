const allColor = ['red','blue','yellow','orange','violet'];


function Procolor({color}){

    function optionColor(){
        console.log();
        return color.map((item,index) => (<option value={item} key={index}>{item}</option>))
    }

    return(
        <p>
        <label htmlFor="color"></label>
        <select id="color">
            {/* {color.map((item,index) => (<option value={item} key={index}>{item}</option>))} */}
            {optionColor()}
        </select>
        </p>
    )

}

export default function Test11(){
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

