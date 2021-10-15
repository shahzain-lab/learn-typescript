import faker from 'faker';
import { MapClass } from './CustomMap';

 class User implements MapClass {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    color = 'red'

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
         <h2>User name: ${this.name}
        `
    }
}

export default User;