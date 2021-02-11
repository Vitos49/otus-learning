const fs = require ("fs");
const path = process.argv[2] == undefined ? 'foo' : process.argv[2];

let tree = {
    "files": getFiles(path),
    "dirs": getDirs(path)
}
console.log('tree ', tree);

function getDirs(path){
    let result = [];
    result.push(path);
    let pathList = fs.readdirSync(path);
    pathList.forEach(function(file){
        file = path + '/' + file;
        let stats = fs.statSync(file);
        if(stats && stats.isDirectory()){
            result = result.concat(getDirs(file));
        }
    });
    return result
}; 

function getFiles(path){
    let result = [];
    let pathList = fs.readdirSync(path);
    pathList.forEach(function(file){
        file = path + '/' + file;
        let stat = fs.statSync(file);
        if(stat && stat.isDirectory()){
            result = result.concat(getFiles(file));
        }
        else {
            result.push(file);
        }
    });
    return result
}; 