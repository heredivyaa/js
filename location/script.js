const button = document.getElementById("get-loc-button");

async function getData(lat, long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f70ae04d3c744c2a8a174112250211&q=${lat}, ${long}&aqi=yes` );
    return await promise.json();
}

async function gotLocation(position){
    const result = await getData(position.coords.latitude , position.coords.longitude);
    console.log(result);
}

function failedToGet(){
    console.log("There is some issue");
}

button.addEventListener("click" ,async () => {
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);
})