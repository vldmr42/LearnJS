import axios from 'axios';
import { User } from './models/User';

// axios.get('http://localhost:3000/users/1');

const user = new User({ name: 'New Record', age: 0 });
user.events.on('change', () => {
  console.log('Change');
});

user.events.trigger('change');
