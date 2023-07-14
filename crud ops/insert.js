const dbConnect = require("./mongoConnector");



const insertData = async(data)=>{
    let result = await dbConnect();
    let resp = await result.insertOne(data);
    return resp.acknowledged;
}


module.exports = insertData;