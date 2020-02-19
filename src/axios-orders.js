import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-fb82c.firebaseio.com/'
});

export default instance;
