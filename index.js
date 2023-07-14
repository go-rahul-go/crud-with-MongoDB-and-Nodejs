const {readWithCondition} = require("./crud ops/read");
const insertData = require("./crud ops/insert");
const {deleteData} = require("./crud ops/delete");
const updateData = require("./crud ops/update");

const searchquery = {}
const insertQuery ={
    name:"ramesh gupta",
    course:"btech",
    branch:"cse",
    year:2019,
    status:"inactive",
    duration:4
}

const delQuery = {name:"bikas shukla"};

async function read(){
   let result= await readWithCondition(searchquery);
   console.log(result);
}


async function insert(){
        let result = await insertData(insertQuery);
        if(result===true)
        {
            console.log("data entered");
        }
        else{
            console.log("data cant be entered");
        }

}


async function deleteEntry(){
    let result = await deleteData(delQuery);
    console.log(result);
}


async function updateEntry(){
    let result = await updateData({name:"ramesh gupta"});
    if(result)
        console.log("updated successfully");
    else{
        console.log("already exists")
    }    
}



