export function CardComponent(props){
    return(<div className={props.className}> {props.children} </div>)
}

export default CardComponent;