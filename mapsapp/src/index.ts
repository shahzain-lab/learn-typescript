import {} from 'googlemaps';
import CustomMap from './CustomMap';
import User from './User';
import Company from './Company';

const user = new User();
const company = new Company()
const customMap = new CustomMap('googlemaps');
customMap.addMarker(user);
customMap.addMarker(company);