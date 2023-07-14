const dbConnect = require("./mongoConnector");

const updateData = async(name)=>{
    let result = await dbConnect();
    let response = await result.updateOne(name,{$set:{age:21}});
    return response.modifiedCount;
}


module.exports = updateData;