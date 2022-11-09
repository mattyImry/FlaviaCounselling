console.log('map works!')

function initMap() {

    const practice_fla = new google.maps.LatLng(51.5254613304083, -0.09635282977019068);

    const map = new google.maps.Map( document.getElementById('map'), {
        center: practice_fla,
        zoom: 15});
        
    const contentString = `<h4> Dr. Flavia Cigolla  </h4>` ;
        
    const marker = google.maps.Marker({
        position: practice_fla,
        map,
        title: "Dr Flavia Cigolla",
    });
    
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
    });

    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
    })

  
//   var service = new google.maps.places.PlacesService(map);

//   service.findPlaceFromQuery(request, function(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
}

window.initMap = initMap;