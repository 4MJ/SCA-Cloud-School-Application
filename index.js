// requiring the OS module 
var os = require('os');
// packages
var packages = ["wget", "curl", "node"];
// A function that varifies and install the packages  in Linux and Mac
function variousPackages(osCommand, particularPackage) {
    // checking existence of package
    require('child_process').exec(`which ${particularPackage}`, function (stdout, stderr) {
        if (stdout === "") {
            // installing package if it doesn't exist
            require('child_process').exec(`${osCommand} ${particularPackage}`, function (err, stdout, stderr) {})
        }
    });
}

// checking if operating system is Linux
if (os.type() == "Linux") {
    console.log(os.type());
    // calling the package instances
    packages.forEach(package => {
        variousPackages("sudo apt-get install", package);
    });

} else {
    // checking if OS is Windows
    if (os.type()==="Windows_NT") {
        console.log(os.type());
        function windowsPackage(particularPackage){
            // checking the packages on windows
            require('child_process').exec(`${particularPackage} --version`, function (err, stdout, stderr) {
                // console.log("err", err);
                console.log("Output", stdout);
                // console.log("stderr", stderr); 
            })
        }
        packages.forEach(package => {
            windowsPackage(package);
        });
    } else {
        if (os.type().startsWith("Mac")) {
            // calling the package instances
            packages.forEach(package => {
                variousPackages("sudo brew install", package);
            });
        } else {
            // If OS isn't found
            console.log("OS NOT FOUND");
        }
    }
}
