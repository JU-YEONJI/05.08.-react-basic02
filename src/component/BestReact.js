// 제일 많이 쓰는 형태의 react

function ReactBook({title,level,price,num='no05'}){
    console.log()
    return(
        <dl>
            <dt>{title}</dt>
            <dd>{level}</dd>
            <dd>{price}</dd> 
            <dd>{num}</dd>
        </dl>
    )
}

export default function BestReact(){
    return (
        <ReactBook
        title="react"
        level={5}
        price="5000" />
    )
}