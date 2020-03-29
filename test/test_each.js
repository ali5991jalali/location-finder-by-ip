/*
we will test project routes to see if they can pass our expectation or not
*/


const expect = require('chai').expect;
const request = require('request');


describe('TEST EACH API', () => {

    it('test dbip Route', (done) => {

        request.get('http://localhost:4000/api/dbip/5.121.183.73', (err, res, body) => {

            expect(res.statusCode).have.to.equal(200);
            expect(JSON.parse(body)).have.to.have.property('success');
            if ((JSON.parse(body)).success === true) {
                expect(JSON.parse(body)).have.to.have.property('result');
                expect((JSON.parse(body)).result).have.to.have.property('country');
                expect((JSON.parse(body)).result).have.to.have.property('city');
                expect((JSON.parse(body)).result).have.to.have.property('ip');
                expect((JSON.parse(body)).result).have.to.have.property('service');
            }
            done();
        })

    })

    it('test ipinfodb Route', (done) => {

        request.get('http://localhost:4000/api/ipinfodb/5.121.183.73', (err, res, body) => {

            expect(res.statusCode).have.to.equal(200);
            expect(JSON.parse(body)).have.to.have.property('success');
            if ((JSON.parse(body)).success === true) {
                expect(JSON.parse(body)).have.to.have.property('result');
                expect((JSON.parse(body)).result).have.to.have.property('country');
                expect((JSON.parse(body)).result).have.to.have.property('city');
                expect((JSON.parse(body)).result).have.to.have.property('ip');
                expect((JSON.parse(body)).result).have.to.have.property('service');
                done();
            } else {

                done();
            }
        })

    })

    it('test ipapi Route', (done) => {

        request.get('http://localhost:4000/api/ipapi/5.121.183.73', (err, res, body) => {

            expect(res.statusCode).have.to.equal(200);
            expect(JSON.parse(body)).have.to.have.property('success');
            if ((JSON.parse(body)).success === true) {
                expect(JSON.parse(body)).have.to.have.property('result');
                expect((JSON.parse(body)).result).have.to.have.property('country');
                expect((JSON.parse(body)).result).have.to.have.property('city');
                expect((JSON.parse(body)).result).have.to.have.property('ip');
                expect((JSON.parse(body)).result).have.to.have.property('service');
            }
            done();
        })

    })

    it('test briantafoya Route', (done) => {

        request.get('http://localhost:4000/api/briantafoya/5.121.183.73', (err, res, body) => {

            expect(res.statusCode).have.to.equal(200);
            expect(JSON.parse(body)).have.to.have.property('success');
            if ((JSON.parse(body)).success === true) {
                expect(JSON.parse(body)).have.to.have.property('result');
                expect((JSON.parse(body)).result).have.to.have.property('country');
                expect((JSON.parse(body)).result).have.to.have.property('city');
                expect((JSON.parse(body)).result).have.to.have.property('ip');
                expect((JSON.parse(body)).result).have.to.have.property('service');
            }
            done();
        })

    })

    it('test ipdata Route', (done) => {

        request.get('http://localhost:4000/api/ipdata/5.121.183.73', (err, res, body) => {

            expect(res.statusCode).have.to.equal(200);
            expect(JSON.parse(body)).have.to.have.property('success');
            if ((JSON.parse(body)).success === true) {
                expect(JSON.parse(body)).have.to.have.property('result');
                expect((JSON.parse(body)).result).have.to.have.property('country');
                expect((JSON.parse(body)).result).have.to.have.property('city');
                expect((JSON.parse(body)).result).have.to.have.property('ip');
                expect((JSON.parse(body)).result).have.to.have.property('service');
                done();
            } else {

                done();
            }

        })

    })

    it('test ip-api Route', (done) => {

        request.get('http://localhost:4000/api/ip-api/5.121.183.73', (err, res, body) => {

            expect(res.statusCode).have.to.equal(200);
            expect(JSON.parse(body)).have.to.have.property('success');
            if ((JSON.parse(body)).success === true) {
                expect(JSON.parse(body)).have.to.have.property('result');
                expect((JSON.parse(body)).result).have.to.have.property('country');
                expect((JSON.parse(body)).result).have.to.have.property('city');
                expect((JSON.parse(body)).result).have.to.have.property('ip');
                expect((JSON.parse(body)).result).have.to.have.property('service');
                done();
            } else {

                done();
            }
        })
    })
})

describe('TEST MAIN ROUTE', () => {

    it('main Route', (done) => {

        request.get('http://localhost:4000/location/5.121.183.73', (err, res, body) => {

            expect(res.statusCode).have.to.equal(200);
            expect(JSON.parse(body)).have.to.have.property('success');
            if ((JSON.parse(body)).success === true) {
                expect(JSON.parse(body)).have.to.have.property('result');
                expect((JSON.parse(body)).result).have.to.have.property('country');
                expect((JSON.parse(body)).result).have.to.have.property('city');
                expect((JSON.parse(body)).result).have.to.have.property('ip');
                expect((JSON.parse(body)).result).have.to.have.property('service');
                done();
            } else {

                done();
            }
        })


    })

})