import React, {createContext, useState} from 'react';

//       [ Crear el context ]       
export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    //       [ State del provider ]  
    const [username, setUsername] = useState('');
    const [usernameAPI, setUsernameAPI] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState('');


    return ( 
        <UserContext.Provider 
            value={{
                username,
                usernameAPI,
                fotoPerfil,
                setUsername,
                setUsernameAPI,
                setFotoPerfil
            }}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;