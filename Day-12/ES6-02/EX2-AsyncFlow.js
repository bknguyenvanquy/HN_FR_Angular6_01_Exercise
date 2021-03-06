const fs = require('fs');


   // callback cho cac tac vu la bien, bat buoc phai dung de qui
(() => {
    let res = '';
    let fileName = '1024';
    function readFile(){
        fs.readFile(`./numfiles/${fileName}`, 'utf-8', function(err, data){
            if (err) {
                console.log(res);
            }
            if(data){
                let arr = data.split(' ');
                res += arr[arr.length - 1].split('')[1];
                fileName = arr[arr.length - 2];
                readFile();
            }
        });
    }
    readFile();
})();

//promise

(() => {
    let res = '';
    let fileName = '1024';
    function readFilePromise(fileName){
        return new Promise(function(resolve,reject){
            fs.readFile(`./numfiles/${fileName}`, 'utf-8', function(err, data){
                if (err) {
                    console.log(res);
                }
                if(data){
                    let arr = data.split(' ');
                    res += arr[arr.length - 1].split('')[1];
                    fileName = arr[arr.length - 2];
                    resolve(fileName);
                }
            })
                
        })
    }
    function run(fileName){
        let promise = readFilePromise(fileName);
        promise.then(fileName => {
            run(fileName);
        }, err => {
            console.log(res);
        })
    }

    run(fileName);
})();

(() => {
    let res = '';
    let fileName = '1024';
    function readFilePromise(fileName){
        return new Promise(function(resolve,reject){
            fs.readFile(`./numfiles/${fileName}`, 'utf-8', function(err, data){
                if (err) {
                    console.log(res);
                }
                if(data){
                    let arr = data.split(' ');
                    res += arr[arr.length - 1].split('')[1];
                    fileName = arr[arr.length - 2];
                    resolve(fileName);
                }
            })
                
        })
    }
    async function readFile(fileName){
        let promise = await readFilePromise(fileName);
        while (promise) {
            promise = await readFilePromise(promise);
        }
    }
    readFile(fileName);
})();