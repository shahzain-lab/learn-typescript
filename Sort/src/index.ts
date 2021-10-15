import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';

const numberCollection = new NumberCollection([200, -4, -34, 34]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
