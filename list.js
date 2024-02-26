const fs = require('fs');
const path = require('path');

function listAlias(versionsFilePath) {
    if (!fs.existsSync(versionsFilePath)) {
        console.log("No Node version found.");
        return;
    }

    const versions = JSON.parse(fs.readFileSync(versionsFilePath, 'utf8'));

    if (Object.keys(versions).length === 0) {
        console.log("No Node version found.");
    } else {
        const longestAlias = Math.max(...Object.entries(versions).map(v => v[1].alias).map(a => a?.length)) + 4;
        const longestVersion = Math.max(...Object.entries(versions).map(v => v[1].version).map(v => v?.length)) + 2;

        console.log("");
        for (const [key, value] of Object.entries(versions)) {
            let line = value.alias;

            for (let i = 0; i < longestAlias - value.alias?.length; i++) {
                line += ' ';
            }

            line += value.version;

            for (let i = 0; i < longestVersion - value.version?.length; i++) {
                line += ' ';
            }

            if (value.current) {
                line += '#';
            }

            console.log(line);
        }
        console.log("");
    }
}

module.exports = listAlias;
