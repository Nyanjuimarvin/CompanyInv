import { StringReturn } from "../interfaces/StringReturn.js"
export class Clientowes {

    //access modifiers eliminate need for declaration before constructor
    constructor(readonly clientName: string, 
                private transDetail: string, 
                public transAmount: number) {}


    summary() {
        return `${this.clientName} Owes your company  Ksh ${this.transAmount} for ${this.transDetail}`
    }
}