import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data From Api:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      Main 
      {/* Render data */}
    </div>
  )
}

export default Main