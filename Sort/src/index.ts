import { LinkedList } from './LinkedList.ts';
import { NumberCollection } from './NumberCollection';

const numberCollection = new NumberCollection([200, -4, -34, 34]);
numberCollection.sort()
console.log(numberCollection.data);
