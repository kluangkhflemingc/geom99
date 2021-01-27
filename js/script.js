let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("fullmap"), {
    center: { lat: 37.5665, lng: 126.9780 },
    zoom: 12,
    mapTypeId: 'hybrid',
  });
}

let placemap;
function placeMap() {
    placemap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 64.14060855172188, lng: -21.949368330132092 },
    zoom: 15,
    mapTypeId: "terrain",
  });
  const request = {
    placeId: "ChIJBeb-7zAL1kgRc0e0hEM_GPs",
    fields: ["name", "formatted_address", "international_phone_number", "website", "geometry"],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(placemap);
  service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        map: placemap,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          "<div><strong>" +
            place.name +
            "</strong><br>" +
            "Address: " +
            place.formatted_address +
            "<br>" +
            "Phone Number: " +
            place.international_phone_number +
            "<br>" +
            "Website: " +
            place.website +
            "</div>"
        );
        infowindow.open(placemap, this);
      });
    }
  });
}