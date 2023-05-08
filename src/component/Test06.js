// const list ={
//      title:'react',
//      price: '10000원',
//      level: 5
//  }

function ReactBook(props){
    console.log(props)
    return(
        <dl>
            <dt>{props.title}</dt>
            <dd>{props.price}</dd>
            <dd>{props.level}</dd> 
        </dl>
    )
}

export default function Test06(){
return(
    <ReactBook
    title="react"
    price="10000원"
    level={5}
    />
)
}