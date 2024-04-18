import { useState } from 'react';
import './App.css';
import { ExistingUsersComponent } from './Components/ExistingUsersComponent/ExistingUsersComponent';
import { NewUserComponent } from './Components/NewUserComponent/NewUserComponent';
import PopUpComponent from './Components/PopUpComponent/PopUpComponent';

const DEFAULT_POPUP_STATE = {currentClassname: 'hidden', errorMessages: []};
let opacity = 1;
function App() {
  const [existingUsers, setExistingUsers] = useState([]);
  const [popUp, setPopup] = useState(DEFAULT_POPUP_STATE);

  const userSubmittedHandler = (userData)=>{
    const newUser = {
      key: existingUsers.length,
      age: userData.age,
      name: userData.name
    }

    setExistingUsers(()=> {return [...existingUsers, newUser]});
  }

  const invalidInputHandler = (newErrorMessages)=>{
    opacity = 0.4;
    setPopup({currentClassname: 'card', errorMessages: newErrorMessages});
  }

  const popupClosedHandler = ()=>{
    opacity = 1;
    setPopup(DEFAULT_POPUP_STATE);
  }

  return (
  <div>
    <div style={{marginTop: 20 ,display: 'flex', flexDirection:'column', 
                  alignItems:'center', justifyContent:'center',
                rowGap: 10, opacity: opacity }}>
      <NewUserComponent onUserSubmitted={userSubmittedHandler}
                        onErrorsDetected={invalidInputHandler}
      />
      <ExistingUsersComponent existingUsers={existingUsers}>
      </ExistingUsersComponent>
    </div>

    <PopUpComponent currentClassname={popUp.currentClassname} 
      errorMessages={popUp.errorMessages}
      onPopupClosed={popupClosedHandler}
      title = 'Invalid input'>
    </PopUpComponent>
  </div>
  );
}

export default App;
