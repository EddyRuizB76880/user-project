import styles from './ButtonComponent.module.css'

export function ButtonComponent(props){
    return(
        <button className={styles.buttoncomponent +' '+props.additionalStyles} 
                onClick={props.onButtonClicked}
                type={props.type}>
        {props.children}
        </button>
    )
}



export default ButtonComponent