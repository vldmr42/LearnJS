import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([50, 3, 10, -6, 0, 34]);
numbersCollection.sort();
console.log(numbersCollection);

const charCollection = new CharactersCollection('asdRXXpOFr');
charCollection.sort();
console.log(charCollection);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(10);
linkedList.add(1);
linkedList.add(9);
linkedList.add(67);
linkedList.print();
