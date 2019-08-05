//Importing core module
let fs = require('fs');

const getNotes  = ()=> {
    return 'Hello this is my first note';
};


//Adding Notes
const addNotes = (title, body) => {
    let notes = readingNotes();  

    let uniqNotesByTitle = notes.length && notes.filter(note=>{
        return note.title == title;
    });
    if(uniqNotesByTitle.length){
        console.log("duplicate notes....");
    }else{
        
        notes.push({title, body});
        writeNotes(notes);
    }
};


//Writing notes to json
const writeNotes = (data) => {
    let noteString = JSON.stringify(data);
    fs.writeFileSync('./notes.json',noteString);
}


//Reading the notes
const readingNotes = () => {
    try{
        let note = fs.readFileSync('./notes.json');
        return JSON.parse(note);
    }catch(e){
        return [];
    }
}


//Removing notes..
const removeNotes = (title) =>{
    let notes = readingNotes(); 
    let uniqNotesByTitle = notes.filter(note=>{
        return note.title != title;
    });
    if(uniqNotesByTitle.length){
        writeNotes(uniqNotesByTitle);
    }else{
        console.log("no duplicate...");
    }
};


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes:removeNotes,
};