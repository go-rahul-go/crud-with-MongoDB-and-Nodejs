const dbConnect = require("./mongoConnector");



const deleteData = async (data)=>{
    let result = await dbConnect();
    let resp = await result.deleteOne(data);
    return resp.deletedCount;
}


const deleteEverything = async()=>{
    let result = await dbConnect();
    let resp = await result.deleteMany({course:"btech"});
    return resp.deletedCount;
}

module.exports = {deleteData, deleteEverything};