import axios from 'axios';
import { User } from './models/User';

// axios.get('http://localhost:3000/users/1');

const user = new User({ name: 'New Record', age: 0 });

console.log(user.get('name'));
user.on('change', () => {
  console.log('User was changed');
});
user.trigger('change');
