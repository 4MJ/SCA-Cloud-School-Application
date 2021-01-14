// requiring the OS module 
var os = require('os');
// packages
var packages = ["wget", "curl", "node"];
// A function that varifies and install the packages  in Linux and Mac
function variousPackages(osCommand, particularPackage) {
    // checking existence of package
    require('child_process').exec(`${particularPackage} --version`, function (err, stdout, stderr) {
        console.log("output: ", stdout);
        // console.log("err: ", err);
        // console.log("stderr: ", stderr);
        if (stdout === "") {
            // installing package if it doesn't exist
            require('child_process').exec(`${osCommand} ${particularPackage}`, function (err, stdout, stderr) {
                console.log("output: ", stdout);
                console.log("err: ", err);
                console.log("stderr: ", stderr);
            })
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
    if (os.type() === "Windows_NT") {
        console.log(os.type());
    } else {
        if (os.type().startsWith("Mac")) {
            // installing homebrew
            require('child_process').exec(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`, function (err, stdout, stdderr) {})
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

// which ${particularPackage}