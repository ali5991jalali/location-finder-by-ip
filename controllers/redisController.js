/**
 * requiring needed packages
 */
const redis = require('redis');
const client = redis.createClient();

const services = require('./../configs/services');


/**
 * function for using redis to store number of service requsets
 * 
 * @param {string} serviceName 
 */
const checkRedis = (serviceName) => {
    return new Promise((resolve) => {
        /**
         * find service in services array
         */
        let service;
        for (let i = 0; i < services.length; ++i) {
            if (services[i]['name'] == serviceName) {
                service = services[i];
                break;
            }
        }

        /**
         * check if this service exist in redis databaseor not
         */
        client.exists(service['name'], (err1, reply1) => {
            if (err1) {
                resolve(false)
            } else {
                /**
                 * being in redis
                 */
                if (reply1 === 1) {
                    if (reply1 < service['number']) {

                        /**
                         * if service name is in redis database, increase number of requests
                         */
                        client.incr(service['name'], (err2, reply2) => {
                            if (err2) {
                                resolve(false)
                            } else {
                                resolve(true)
                            }
                        })
                    } else {
                        client.del(service['name'])
                        resolve(false)
                    }
                    /**
                     * when it is not in redis database
                     */
                } else {
                    client.set(service['name'], 1, (err3, reply3) => {

                        if (err3) {
                            resolve(false)
                        } else {
                            client.expire(service['name'], service['expiration'])
                            resolve(true)
                        }
                    })
                }
            }
        })
    })
}

/**
 * export main redis function
 */
module.exports = {
    checkRedis
}