import React, { useEffect, useState } from 'react';

const main = () => {
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
      main
      {/* Render data */}
    </div>
  )
}

export default main