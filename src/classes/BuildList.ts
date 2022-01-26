//Class to render lists in HTML
import { StringReturn } from "../interfaces/StringReturn.js";

export class BuildList{
 constructor( private listContainer:HTMLUListElement ){}

 renderInv(listItem:StringReturn,listHeader:string){
    const list = document.createElement("li");

    list.className += "form-control mb-3";

    //List Header = Transaction Type
    const listHead = document.createElement('h5');
    listHead.innerText = listHeader;
    list.append(listHead);

    //listDetail = summary of transaction
    const listDetail = document.createElement('p');
    listDetail.innerText = listItem.summary();
    list.append(listDetail);

    //Append to ul
    this.listContainer.append(list);

 }
};