import config from './config';

const apiUrl = `${config.baseUrl}/api`;

export const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/data`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };