/*

function for transforming data and change format for sending useful data
not all of them

*/



const transform = (items, fields) => {

    let last_data = items.map((item) => {

        let mp = {};

        fields.map((field) => {

            mp[field] = item[field];

        })
        return mp;
    })

    return last_data;
}

module.exports = transform;