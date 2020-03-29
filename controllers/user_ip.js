const axios = require('axios'); //calling axios package

/*

3 controller and middleware that can be used for each goal 

and all of them set useful ip to requset

*/

module.exports = new class App {

    user_ip_by_requset(req, res, next) {

        let user_ip = (req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress).split(",")[0];
        req.userip = user_ip;
        next();
    }

    user_ip_by_brinatafoya(req, res, next) {

        axios.get('https://ip.briantafoya.com/simple')
            .then((result) => {
                let user_ip = result.data;
                req.userip = user_ip;
                next();
            })
            .catch((err) => {
                res.send({ success: false, message: 'error in getting ip address' });
                return;
            })
    }

    user_ip_by_params(req, res, next, ip) {

        req.userip = ip;
        next();
    }

}