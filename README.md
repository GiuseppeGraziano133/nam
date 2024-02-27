# nam
Node Alias Manager

# Description

NAM is a tool to manage Node versions and add an alias to each.<br>
NVM is required to use NAM.

# Installation

Run ```npm install -g node-alias-manager```<br>
Add ```NAM_HOME``` to the user environment variables and set the value to the directory in the npm modules

e.g.
C:\Users\YN\AppData\Roaming\nvm\vX.X.X\node_modules\node-alias-manager

Add ```%NAM_HOME%``` to the ```Path``` variable<br>
Add ```NAM_HOME``` to the system environment variables and set the value to the directory in the npm modules<br>
Add ```%NAM_HOME%``` to the ```Path``` variable

# Instructions

```nam add <vers> <alias>``` Add a new alias for a Node version<br>
```nam remove <alias>``` Remove an alias for a Node version<br>
```nam use <alias>``` Select a version using its alias and use it<br>
```nam list``` List all the availables versions
