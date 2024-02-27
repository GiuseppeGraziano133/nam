const fs = require('fs');

function addAlias(version, alias, filePath) {
    if (!fs.existsSync(filePath)) {
            let json = [];

            json.push({
                version,
                alias,
                current: false
            });

            fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
                if (err) throw err;
                console.log(version, 'added as', alias);
            });
    } else {
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;

            let json = JSON.parse(data);

            if (!!json.find(a => a.alias === alias)) {
                console.log('Alias already exists');
                return;
            }

            json.push({
                version,
                alias,
                current: false
            });

            fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
                if (err) throw err;
                console.log(version, 'added as', alias);
            });
        });
    }
}

module.exports = addAlias;
