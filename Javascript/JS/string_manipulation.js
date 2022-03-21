let str="krishna kumar";

let greet=` Hi ${str}`;  //template leteral
console.log(greet);


let str1="krishna \n sahu";  // for new line.
console.log(str1);

let str2="krishna \ sahu";  
console.log(str2);

let str3="krishna \\ sahu";   // if you want \ in your stmt.
console.log(str3);

let str4="krishna \" sahu";   // suppose we want " in our stmt
console.log(str4);
console.log(str4.length);
console.log(str4[2]);

let st1="krishna";
let st2="sahu";
let  st3=st1.concat(" ",st2);
console.log(st3);


// sustring

let s="my name is krishna sahu";
let substri=s.substr(3,7);
let substring1=s.substring(3,7);
console.log(substri);
console.log(substring1);
console.log(s.length);


let position=s.indexOf("name");
console.log(position);

let position=s.indexOf("name",2);  // means we don't want first is we want after
console.log(position);

let position11=s.lastIndexOf("name");  // -1 means no string available
console.log(position11);




