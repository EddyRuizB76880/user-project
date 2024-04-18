import ButtonComponent from "../Button/ButtonComponent";
import styles from './PopUpComponent.module.css'
import CardComponent from "../CardComponent/CardComponent";

export function PopUpComponent(props){
    const buttonClickedHandler = ()=>{
        props.onPopupClosed();
    }

    return(
        <div className={styles.popupContainer}>
            <CardComponent className= {props.currentClassname + ' '+ styles.popupCard}>
            <h2 className={styles.popupTitle}>{props.title}</h2>
                    <ul className={styles.errorList}>
                    {
                        props.errorMessages.map(
                            (errorMessage, index)=>{return (<li key={index}>{errorMessage}</li>)
                        })
                    }
                    </ul>
            <ButtonComponent type='none' onButtonClicked={buttonClickedHandler} 
             additionalStyles={styles.popupButton}>Okay</ButtonComponent>
            </CardComponent>
        </div>
    )
}


export default PopUpComponent;