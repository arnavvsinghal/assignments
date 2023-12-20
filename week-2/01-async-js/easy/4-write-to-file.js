/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const fs = require("fs");

const content = "Dummy text has been updated now!";

fs.writeFile("file.txt", content, "utf-8",(err)=>{
    console.log("Write operation successful!");
})

fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
});