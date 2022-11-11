console.log('map works!')

function initMap() {

    const practice_fla = new google.maps.LatLng(51.5254613304083, -0.09635282977019068);

    const map = new google.maps.Map( document.getElementById('map'), {
        center: practice_fla,
        zoom: 15});
        
    const contentString = `     <div class="infowindow"><h2 style="text-align: center;"> Dr. Flavia Cigolla </h2> <br>
                                <h3 style="margin-bottom: 5px;">45 Central Street
                                London
                                EC1V 8AB  
                                </h3>
                                <h4><a  href="https://www.google.com/maps/dir//45+Central+St,+London+EC1V+8AB/@51.5254993,-0.1314781,13z/           data=!4m8!4m7!1m0!1m5!1m1!1s0x48761b57875c84a9:0x2b96d66223772f80!2m2!1d-0.0964588!2d51.5254511" target="_blank">Direction</a>
                                </h4>
                                </div>`
                                
                                ;
        
    const marker = new google.maps.Marker({
        position: practice_fla,
        map,
        title: "Dr Flavia Cigolla",
    });
    
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500,
        
    });

    // marker.addListener("click", () => {
    //     window.location.href = this.url;
    // })

    infowindow.open(map, marker);

  
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

// window.initMap = initMap;