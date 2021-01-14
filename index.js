// requiring the OS module 
var os = require('os');
// pakages
var packages = ["wget", "curl", "node"];
// A function that varifies and install the package
function variousPakages(osCommand, particularPackage) {
    // checking existence of package
    require('child_process').exec(`which ${particularPackage}`, function (stdout, stderr) {
        if (stdout === "") {
            // console.log(`Installation of ${particularPackage} : ${osCommand} ${particularPackage} ...`);
            require('child_process').exec(`${osCommand} ${particularPackage}`, function (err, stdout, stderr) {
                console.log("Output: ", stdout);
                console.log("err: ", err);
                console.log("stderr: ", stderr);
            })
        }
    });
}

// checking operating system
if (os.type() == "Linux") {
    console.log(os.type());
    // calling the package instances
    packages.forEach(package => {
        variousPakages("sudo apt-get install", package);
    });

} else {
    if (os.type().startsWith("Win")) {
        console.log('secondCheck');
        console.log(os.type());
    } else {
        if (os.type().startsWith("Mac")) {
            console.log(os.type());
            // calling the package instances
            packages.forEach(package => {
                variousPakages("sudo brew install", package);
            });
        } else {
            console.log("OS NOT FOUND");
        }
    }
}

// console.log('platform = ', os.platform());
// console.log('End of line marker  = ', os.EOL);
// console.log('Memory rem= ', os.freemem());
// console.log('directory for tem file =', os.tmpdir());
// console.log('OS type = ', os.type());

// var machineOS = os.type();
// console.log(machineOS);