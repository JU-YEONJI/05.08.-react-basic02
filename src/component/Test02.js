export default function Test02(){
    const people = './images/face.jpg';
    const alt = 'small dog'
    return(
        <img
            className="people"
            src= {people}
            alt= {alt} />
    )
}