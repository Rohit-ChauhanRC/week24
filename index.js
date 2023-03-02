import fs from 'fs';

// fs.readFile('async.txt', function (err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// const getFile = fileName => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data.toString());
//             }
//         })
//     })
// }

// getFile("async.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));


async function getFile(fileName
) {
    let data = fs.promises.readFile(fileName);
    // return (await data).toString();
    return  (await data).toString();
}

// console.log(await getFile("async.txt"));
let dtaGet = await getFile('async.txt');
console.log(dtaGet);