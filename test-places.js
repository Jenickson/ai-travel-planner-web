import axios from 'axios';

const BASE_URL='https://places.googleapis.com/v1/places:searchText'

const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key': 'AIzaSyA-XbCgKZU89tt9MX3tLdgNSi4zjWKtGTA',
        'X-Goog-FieldMask':[
            'places.photos',
            'places.displayName',
            'places.id'
        ]
    }
}

async function run() {
    try {
        const data={ textQuery: "Paris, France" };
        const response = await axios.post(BASE_URL, data, config);
        console.log("SUCCESS", response.data);
    } catch (e) {
        console.log("ERROR", e.response?.data || e.message);
    }
}
run();
