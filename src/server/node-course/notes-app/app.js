//Core modules
const validator = require('validator');
const chalk = require('chalk');
let fs = require('fs');
const yargs = require('yargs');

//Custom modules
let util = require('./utils.js');
let notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

 
// fs.writeFileSync('notes.txt', 'this file was created by node.js something else');
fs.appendFileSync('notes.txt', 'hello this is new text by rajendra');
 
// console.log(msg);

// console.log(validator.isURL('http://rajendratest.com')); 

// console.log(chalk.blue('hello world'));
// console.log(chalk.green.bold('success'));



// process.argv.map(data=>{
//     console.log(data);
// })

// const command  = process.argv[2]
// if(command == 'add'){
//     console.log('note has been added...')
// }else if(command === 'remove'){
//     console.log('Removing the note...')
// }

// console.log(process.argv);


// Create add command
yargs.command({
    command:'add',
    describe:'adding the note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body);
    }
});

//Removing the note
yargs.command({
    command:'remove',
    describe:'remove the note',
    builder:{
        title:{
            describe:'remove note',
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNotes(argv.title)
    }
});

//Listing the notes
yargs.command({
    command:'list',
    describe:'listing the note',
    handler: () => {
        console.log('listing the note...');
    }
});

//Read the note
yargs.command({
    command:'read',
    describe:'read a note',
    handler: () => {
        console.log('reading the note...');
    }
});

 


//add, remove, read, list
yargs.parse();


//working with JSON data
// let loadJSON  = fs.readFileSync('./data.json');
// let data = JSON.parse(loadJSON.toString());
// data.name = 'to the new';
// data.age = 10;
// let updatedData = JSON.stringify(data);
// fs.writeFileSync('./data.json', updatedData);