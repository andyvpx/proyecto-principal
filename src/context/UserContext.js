import React, {createContext, useState} from 'react';

//       [ Crear el context ]       
export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    //       [ State del provider ]  
    const [username, setUsername] = useState('');
    const [usernameAPI, setUsernameAPI] = useState('');


    return ( 
        <UserContext.Provider 
            value={{
                username,
                usernameAPI,
                setUsername,
                setUsernameAPI
            }}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;