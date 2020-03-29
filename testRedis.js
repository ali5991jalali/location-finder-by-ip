const redis = require('redis');
const client = redis.createClient();

client.get('ipapi', (err, reply) => {

    console.log(reply)
})