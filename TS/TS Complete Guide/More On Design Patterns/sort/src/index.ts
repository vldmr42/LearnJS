import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const collectionToSort = new NumbersCollection([10, 3, -5, 0]);
// const collectionToSort = new CharactersCollection('XaaabrtyErt');
const collectionToSort = new LinkedList();
collectionToSort.add(500);
collectionToSort.add(23);
collectionToSort.add(34);
collectionToSort.add(0);
collectionToSort.add(1000);
const sorter = new Sorter(collectionToSort);
sorter.sort();
console.log(sorter.collection);
collectionToSort.print();
