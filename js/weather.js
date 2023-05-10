function onGeoOK(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log(`You are in ${lat}, ${long}`);
}
function onGeoErr() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
