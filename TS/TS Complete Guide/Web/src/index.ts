import axios from 'axios';
import { User } from './models/User';

// axios.get('http://localhost:3000/users/1');

const user = new User({ id: 1, name: 'newer name', age: 0 });

user.on('save ', () => {
  console.log(user);
});

user.save();
