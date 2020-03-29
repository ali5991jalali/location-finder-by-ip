const mongoose = require('mongoose');

const { db_name, db_port } = require('./../configs/all_project')

const local_str=`mongodb://localhost:${db_port}/${db_name}`;
const production_str=`mongodb://raychat_api_location_database:HsgIqrxz97519Rsxsa4264aSnx_HA65jf5sA@185.86.181.212:63245,185.86.181.214:50653,162.223.91.67:12782/apilocations?readPreference=nearest&replicaSet=raychatReplicaSet`


//conecting to mongodb

module.exports = new class App {

    constructor(strName="production") {
        /**
         * check the connection type if it is local or production
         */
        let connection_str;
        if(strName=='production'){
            connection_str=production_str;
        }else{
            connection_str=local_str;            
        }
        

        mongoose.connect(connection_str,(err)=>{
            if(err){
                console.log(`error in connecting mongo on ${connection_str} service`)
            }else{
                console.log(`successfully connected to mongo on ${connection_str} service`)
            }
        })
    }
}