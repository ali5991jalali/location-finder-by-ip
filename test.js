const axios = require('axios');
let j = 0;

const test = async () => {

    for (let i = 0; i < 200000; ++i) {
        let result = await axios.get('http://localhost:4000/location/156.85.0.1');
        if (result.data['success']) {
            j = j + 1;
            console.log(i, result.data.result.service);
        } else {
            console.log(j, "this the last requset number")
            break;
        }
    }
}

test().catch((err) => {

    console.log(j, " is the last request number")
})