import readline from 'readline';
import {Student} from './class activity es6 part 2.mjs';


//const readline = require('readline');

const r1 = readline.createInterface({

input: process.stdin,

output: process.stdout

});



r1.question('What is your name? ', (name) =>{
    r1.question('What is your matric no? ', (matricNo) =>{
        r1.question('What is your major? ', (major) =>{
   
           let student = new Student (name, matricNo, major);
           console.log(student.display());
           r1.close();
        });
    });
});









