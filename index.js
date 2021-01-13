// requiring the OS module 
var os = require('os');
// pakages
// var packages = ["wget", "curl", "node"];
var packages = ["wget"];

// A function that varifies and install the package
function variousPakages(osCommand, particularPackage) {
    // checking existence of package
    require('child_process').exec(`which ${particularPackage}`, function (err, stdout, stderr) {
        // installing package
        console.log("err: ", err);
        // if (stdout === "") {
            console.log(`Installation of ${particularPackage} : ${osCommand} ${particularPackage} ...`);
            require('child_process').exec(`${osCommand} ${particularPackage}`, function (err, stdout, stderr) {
                console.log("Output: ", stdout);
                console.log("err: ", err);
                console.log("stderr: ", stderr);
            })
        // }
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

