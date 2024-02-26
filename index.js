#!/usr/bin/env node

const yargs = require('yargs');
const fs = require('fs');
const path = require('path');

const add = require('./add');
const remove = require('./remove');
const use = require('./use');
const list = require('./list');

const versionsFilePath = path.join(__dirname, 'versions.json');

yargs
    .scriptName("nam")
    .usage('$0 <cmd> [args]')
    .command('add <vers> <name>', 'Add a new alias for a Node version', (yargs) => {
        yargs.positional('vers', {
            describe: 'Version of Node to use',
            type: 'string'
        }).positional('name', {
            describe: 'Alias to use',
            type: 'string'
        })
    }, (argv) => {
        add(argv.vers, argv.name, versionsFilePath);
    })
    .command('remove <name>', 'Remove an alias for a Node version', (yargs) => {
        yargs.positional('name', {
            describe: 'Alias to use',
            type: 'string'
        })
    }, (argv) => {
        remove(argv.name, versionsFilePath);
    })
    .command('use <name>', 'Select a version using its alias and use it', (yargs) => {
        yargs.positional('name', {
            describe: 'Alias to use',
            type: 'string'
        })
    }, (argv) => {
        use(argv.name, versionsFilePath);
    })
    .command('list', 'List all the availables versions', {}, () => {
        list(versionsFilePath);
    })
    .help()
    .argv;
