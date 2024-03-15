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

      const responseData = await response.json();
      setSubmitStatus({ success: true, message: 'Bestellung successfully submitted!' });

      const bestellungUrl = `${window.location.origin}/bestellungen/${responseData.urlSlug}`;
      updateBestellung('bestellungUrl', bestellungUrl);

      console.log("bestellung",bestellung)
      
    } catch (error) {
      console.error('Error submitting bestellung:', error);
      setSubmitStatus({ success: false, message: 'Error submitting bestellung. Please try again.' });
      
    }

  };

  return { submitBestellung, submitStatus };
};
