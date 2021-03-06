function Promise_all(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        // Your code here.
        // async function execute() {
        //     for (let element of promises) {
        //         let data = await element;
        //         result.push(data);
        //     };
        //     resolve(result);
        // }
        // execute();
        let count = promises.length;
        promises.forEach((promise, index) => {
            promise.then((data) => {
                result.push(data);
                count--;
                if (count == 0) {
                    resolve(result);
                }
            })
            .catch((error) => {
                reject(error);
            })
        })
    });
}

// Test code.
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
// Promise_all([soon(1), soon(2), soon(3)]).then(array => {
//     console.log("This should be [1, 2, 3]:", array);
// });
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error == "X") {
            console.log("Unexpected failure:", error);
        }
    });
