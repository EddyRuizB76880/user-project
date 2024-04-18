import CardComponent from "../CardComponent/CardComponent";
import '../CardComponent/CardComponent.css'
import './ExistingUsersComponent.css'

export function ExistingUsersComponent(props){
    const existingUsers = props.existingUsers;
    
    return (
                <CardComponent className='card'>
                   {existingUsers.length === 0 ? <h1>No users added.</h1>:
                    existingUsers.map(existingUser => { 
                        return(<h3 key={existingUser.key} className='existing-user'>
                                {existingUser.name} ({existingUser.age} years old)
                               </h3>)
                    })}
                   
                </CardComponent>
            )
            
}