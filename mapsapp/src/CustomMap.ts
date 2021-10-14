import Company from "./Company";
import User from "./User";

class CustomMap{
    googleMap: google.maps.Map;
    constructor(mapDiv: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapDiv),{
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        })
    }

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        })
    }

    addCompanyMarker(company: Company): void {}
}

export default CustomMap;