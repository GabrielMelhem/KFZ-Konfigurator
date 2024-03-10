import React from 'react';
import Fahrzeuge from './components/Fahrzeuge';
import Felgen from './components/Felgen';
import Lackierung from './components/Lackierung';
import Motorleistung from './components/Motorleistung';
import Sonderausstattungen from './components/Sonderausstattungen';


const Main = () => {
  
  return (
    <div>
      Main 
      <Motorleistung />
      <Fahrzeuge />
      <Lackierung />
      <Felgen />
      <Sonderausstattungen />
    </div>
  )
}

export default Main