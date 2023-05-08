const people = {
    name:'My dog',
    source:'./images/face.jpg',
    alt:'putty dog',
    thema:{
        backgroundColor:'green',
        color:'#fff'
    }
}

export default function Test05(){
    return(
        <div className="main">
            <h1>{people.name}</h1>
            <img src={people.source} alt={people.alt} />
            <ul style={people.thema}>
                <li>list01</li>
                <li>list02</li>
            </ul>
        </div>
    )
}