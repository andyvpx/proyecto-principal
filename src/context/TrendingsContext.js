import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const TrendingsContext = createContext();

const TrendingsProvider = ({children}) => {

    const [trendings, setTrendings] = useState([])

    const options = {
        method: 'GET',
        url: 'https://theaudiodb.p.rapidapi.com/trending.php',
        params: {country: 'us', type: 'itunes', format: 'singles'},
        headers: {
          'x-rapidapi-key': '2d17034f92msh73f33284c26e55ep1c4b06jsn15532fce3d21',
          'x-rapidapi-host': 'theaudiodb.p.rapidapi.com'
        }
      };
    
      useEffect(() => {
        axios.request(options).then(function (response) {
            setTrendings(response.data.trending)
        }).catch(function (error) {
          console.error(error);
        });  
      }, [setTrendings])
    
      console.log(trendings);
    return ( 
        <TrendingsContext.Provider
            value={{
              trendings,
              setTrendings
            }}
        >
            {children}
        </TrendingsContext.Provider>
     );
}
 
export default TrendingsProvider;