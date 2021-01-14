// requiring the OS module 
var os = require('os');
// packages
var packages = ["wget", "curl", "node"];
// A function that varifies and install the packages  in Linux and Mac
function variousPackages(osCommand, particularPackage) {
    // checking existence of package
    require('child_process').exec(`${particularPackage} --version`, function (err, stdout, stderr) {
        // console.log("output: ", stdout);
        if (stdout === "") {
            // installing package if it doesn't exist
            require('child_process').exec(`${osCommand} ${particularPackage}`, function (err, stdout, stderr) {
                // console.log("output: ", stdout);
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
        function windowsPackage(particularPackage) {
            // checking the packages on windows
            require('child_process').exec(`${particularPackage} --version`, function (err, stdout, stderr) {
                // console.log("Output", stdout);
                if (stdout === "") {
                    switch (particularPackage) {
                        case "node":
                            console.log("Go to the site https://nodejs.org/en/download and follow the instructions");
                            break;
                        case "wget":
                            console.log("Go to the site https://sourceforge.net/projects/gnuwin32/files/wget/ and follow the instructions");
                            break;
                        case "curl":
                            console.log("Go to the site https://curl.haxx.se/download.html and follow the instructions. Also, go to the site https://curl.haxx.se/docs/caextract.html to download the digital certificate");
                            break;
                        default:
                            break;
                    }
                }
            })
        }
        packages.forEach(package => {
            windowsPackage(package);
        });
    } else {
        if (os.type().startsWith("Mac")) {
            // installing homebrew
            require('child_process').exec(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`, function (err, stdout, stdderr) { })
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