# Node Js - Demo

## What Is Node Js
Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js is commonly used for developing server-side applications, but it can also be used for developing desktop and mobile applications.


Javascript Runtime Environment
it is used for server side programming.

### Node.js is not a languege, library or framework.

Download 
And Check Version


# Process

 ### process 
 - This Object provides information about, and control over, the current Node.js process.

### process.argv
- returns an array containing the command-line arguments passed when the node.js process was launched.

# Module.exports

### require()
- a build-in function to include external modules that exist in separate files.

### module.exports
- a special object

## index.js
- is entry filed (starter point : )


# NPM (node package manager)

npm is the standerd package manager for node.js
 1) library of package
 2) command line access


 
# Installing packages
## node_modules 
- the node_modules folder conatains every installed dependency for your projects.

## package-lock.json 
- it records the exact version of every installed dependency, including its sub-dependency and their versions.


## pakage.json
- the package. json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies
 

 # require v/s import
 import {sum} from "./math.js"

 we can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.

 Loading is synchronous for 'require' but can be asychronous for  'import'

 