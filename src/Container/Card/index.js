import './style.css';
const Card=(props)=>{
    return(
        <div className="card px-3 my-2">
            <div>{props.name}<h6>{props.phone}</h6></div>
        </div>
    );
}
export default Card;