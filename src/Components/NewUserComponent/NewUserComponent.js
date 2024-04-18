import CardComponent from "../CardComponent/CardComponent"
import ButtonComponent from "../Button/ButtonComponent"
import styles from './NewUserComponent.module.css'
export function NewUserComponent(props){
    console.log('rerender')
    const dataSubmitHandler = (event)=>{
        event.preventDefault();
        
        const errorMessages = [];
        const newUser = { 
            name: event.target['Name'].value, 
            age: event.target['Age'].value
        }

        if(newUser.name.length <= 0){
            errorMessages.push('Username is a required field');
        }

        if(newUser.age === ''){
            errorMessages.push('Age is a required field');
        }

        if(+newUser.age < 0){
            errorMessages.push('Age must be a positive number');
        }

        if(+newUser.age > 120){
            errorMessages.push('Age must be equal or less than 120');
        }

        if(errorMessages.length === 0){
            props.onUserSubmitted(newUser);
        } else{
            props.onErrorsDetected(errorMessages);
        }

    
    }

    return(
            <CardComponent className='card'>
               <form onSubmit= {dataSubmitHandler} className={styles.newuserform} >
                <label htmlFor="Name" className={styles.newuserlabel}>Username</label>
                <input id="Name" type="text" className={styles.newuserinput} ></input>
                <label htmlFor="Age" className={styles.newuserlabel}>Age</label>
                <input id="Age" type="number" className={styles.newuserinput}></input>
                <ButtonComponent type='submit' onButtonClicked= {null}>
                    Add user
                </ButtonComponent>
               </form>
            </CardComponent>
        )
}