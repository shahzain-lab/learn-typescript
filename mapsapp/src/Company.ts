import faker from 'faker';
import { MapClass } from './CustomMap';

 class Company implements MapClass{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    }
    color = 'blue'

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
         <h2>Company name: ${this.companyName}</h2>
         <h3>CatchPhrase: ${this.catchPhrase}</h3>
         `;
    }
}
export default Company