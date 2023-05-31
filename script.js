function initMap(){
    var options = {
        zoom:8,
        center:{lat:42.3601, lng:-71.0589}
}
    var map = new 
    google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: { lat: 40.785091, lng: -73.968285 },
        map: map
    });

}


initMap();