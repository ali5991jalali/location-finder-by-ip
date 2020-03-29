const { server_numbers } = require('./all_project')

const services = [

    { name: 'dbip', time: (24 * 60 * 60 * 1000), number: (server_numbers * 998),expiration:(24*60*60) },
    { name: 'ip-api', time: (1 * 60 * 1000), number: (server_numbers * 148),expiration:(1*60) },
    { name: 'ipapi', time: (24 * 60 * 60 * 1000), number: (server_numbers * 998),expiration:(24*60*60) },
    { name: 'ipbriantafoya', time: (24 * 60 * 60 * 1000), number: (server_numbers * 998) ,expiration:(24*60*60)},
    { name: 'ipdata', time: (24 * 60 * 60 * 1000), number: (server_numbers * 1498),expiration:(24*60*60) },
    { name: 'ipinfodb', time: (1 * 1000), number: (2),expiration:(2) }

]

module.exports = services;