const dbConnect = require("./mongoConnector");




const readWithCondition = async (data)=>{
    let result = await dbConnect();
    return result.find(data).toArray();
    
}

function read(){

}


module.exports = {readWithCondition,read};