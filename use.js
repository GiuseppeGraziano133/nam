const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function useAlias(alias, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;

        let json = JSON.parse(data);

        if (!json.find(a => a.alias === alias)) {
            console.log('Alias doesn\'t exists');
            return;
        }

        json.forEach(a => {
            if (a.alias === alias) {
                a.current = true;
            } else {
                a.current = false;
            }
        });

        fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
            if (err) throw err;
        });

        exec(`nvm use ${json.find(a => a.alias === alias).version}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`NAM error: ${error}`);
                return;
            }
            console.log(alias, 'selected', `(v${json.find(a => a.alias === alias).version})`);
            if (stderr) {
                console.log(`External error: ${stderr}`);
            }
        });
    });
}

module.exports = useAlias;
