import { useContext, useState } from 'react';
import { BestellungContext } from '../context/BestellungContext';

const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1`;

export const useSubmitBestellung = () => {
  const { bestellung, updateBestellung } = useContext(BestellungContext);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  

  const submitBestellung = async () => {
    try {
      const response = await fetch(`${apiUrl}/bestellungen`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bestellung),
      });

      if (!response.ok) {
        throw new Error('Failed to submit bestellung');
      }
      const savedBestellung = await response.json();


      updateBestellung({
        // isFinalized: true,
        url: savedBestellung.urlSlug,
      });
    
      console.log("bestellung in hooks",bestellung);

     

      setSubmitStatus({ success: true, message: 'Bestellung successfully submitted!' });

      
    } catch (error) {
      console.error('Error submitting bestellung:', error);
      setSubmitStatus({ success: false, message: 'Error submitting bestellung. Please try again.' });
      
    }

  };

  const finalizeBestellung = async (urlSlug) => {
    try {
      const response = await fetch(`${apiUrl}/bestellungen/${urlSlug}/finalize`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFinalized: true }),
      });
  
      if (response.ok) {
        updateBestellung('isFinalized', true);
      }else {
        throw new Error('Failed to finalize bestellung');
      }
      
    } catch (error) {
      console.error("Failed to finalize bestellung", error);
    }
  };

  return { submitBestellung,finalizeBestellung,submitStatus };
};
