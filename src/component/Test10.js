const list = ['title01','title02','title03','title04'];



// props 불러들이기
function Source(title){
    console.log(title);
    function Middle(){
    return title.map((item, index) => (<li key={index}> {item}:{index}</li>))
    
    }
    return(
        <ul>
            {Middle()}
        </ul>
    )
}

export default function Test10(){
    return(
        <Source 
        title={list} />
    )
}