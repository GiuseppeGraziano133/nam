const fs = require("fs");

function removeAlias(alias, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;

        let json = JSON.parse(data);

        if (!json.find(a => a.alias === alias)) {
            console.log('Alias doesn\'t exists');
            return;
        }

        json.splice(json.indexOf(json.find(a => a.alias === alias)), 1);

        fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
            if (err) throw err;
            console.log(alias, 'removed correctly');
        });
    });
}

module.exports = removeAlias