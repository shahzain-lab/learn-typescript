export interface MapClass{
    location: {
        lat: number,
        lng: number
    },
    markerContent(): string;
    color: string
}

class CustomMap{
    private googleMap: google.maps.Map;
    constructor(mapDiv: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapDiv),{
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 1
        })
    }

    addMarker(mapClass: MapClass): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapClass.location.lat,
                lng: mapClass.location.lng
            }
        });

        marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
            content: mapClass.markerContent()
        });

        infoWindow.open(this.googleMap, marker);
        })
    }

}

export default CustomMap;