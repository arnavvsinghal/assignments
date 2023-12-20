/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/
const fs = require('fs');
const regex = /\s+/g;

function removeSpace(str){
    str=str.trim().replace(regex," ");
    fs.writeFile('file.txt',str,'utf-8',(err)=>{
        console.log('Data has been written!');
    })
}
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(`The data is ${data}`);
    removeSpace(data);
})
