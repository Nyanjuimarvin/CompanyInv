import { Clientowes } from "./classes/sell";
import { Oweclient } from "./classes/buy";
//Add ! to indicate object is not null
const form = document.querySelector('form');
//input elements
const transaction = document.querySelector('#transaction');
const client = document.querySelector("#tofrom");
const items = document.querySelector('#items');
const amount = document.querySelector('#amount');
//Try creating a new class instance
const client1 = new Clientowes("Duke", "Blowing up", 45);
const client2 = new Oweclient("Duke", "Blowing up", 45);
console.log(client1, client2);
