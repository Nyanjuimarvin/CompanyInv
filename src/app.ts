import { Clientowes } from "./classes/sell.js";
import { Oweclient } from "./classes/buy.js";
import { StringReturn } from "./interfaces/StringReturn.js";



let invOne:StringReturn;
invOne = new Clientowes("ergounand","rtx",90);
console.log(invOne);
//Add ! to indicate object is not null
const form = document.querySelector('form')!;

//input elements
const transaction = document.querySelector('#transaction') as HTMLInputElement;
const client = document.querySelector("#tofrom") as HTMLInputElement;
const items = document.querySelector('#items')as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


//Try creating a new class instance
const client1 = new Clientowes("Duke","Blowing up",45);
const client2 = new Oweclient("Duke","Blowing up",45);
console.log(client1,client2);
