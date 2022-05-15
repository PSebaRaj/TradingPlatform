import axios from 'axios';

const url = 'http://localhost:3001/portfolio/'; // pointing to backend data

export  const fetchData = () => axios.get(url);



