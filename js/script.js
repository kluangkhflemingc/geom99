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

function directionsMap() {
  const newmap = new google.maps.Map(document.getElementById("directionMap"), {
    zoom: 15,
    center: { lat: 35.62685855672777, lng: 139.34062175621025 },
  });
  const directionsService = new google.maps.DirectionsService(newmap);
  const directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map: newmap,
    panel: document.getElementById("right-panel"),
  });
  directionsRenderer.addListener("directions_changed", () => {
    computeTotalDistance(directionsRenderer.getDirections());
  });
  displayRoute(
    "Tokyo University of Technology",
    "Naganuma Park",
    directionsService,
    directionsRenderer
  );
}

function displayRoute(origin, destination, service, display) {
  service.route(
    {
      origin: origin,
      destination: destination,
      waypoints: [
        { location: "7-Eleven, Hachioji, Tokyo 192-0912 Japan" },
      ],
      travelMode: google.maps.TravelMode.BICYCLING,
      avoidTolls: true,
    },
    (result, status) => {
      if (status === "OK") {
        display.setDirections(result);
      } else {
        alert("Could not display directions due to: " + status);
      }
    }
  );
}

function computeTotalDistance(result) {
  let total = 0;
  const myroute = result.routes[0];

  for (let i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000;
  document.getElementById("total").innerHTML = total + " km";
}