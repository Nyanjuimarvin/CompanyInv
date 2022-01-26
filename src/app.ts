import { Clientowes } from "./classes/sell.js";
import { Oweclient } from "./classes/buy.js";
import { BuildList } from "./classes/BuildList.js";
import { StringReturn } from "./interfaces/StringReturn.js";


//Add ! to indicate object is not null
const form = document.querySelector('form')!;

//input elements
const transaction = document.querySelector('#transaction') as HTMLInputElement;
const client = document.querySelector("#tofrom") as HTMLInputElement;
const items = document.querySelector('#items') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


//Try creating a new class instance
const client1 = new Clientowes("Duke", "Blowing up", 45);
const client2 = new Oweclient("Duke", "Blowing up", 45);
console.log(client1, client2);

//try creating new list;
const listCont = document.querySelector('ul')!;
const createList = new BuildList(listCont);


//Try testing Dom manipulation
//specify e is of type event
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

});
