export class Clientowes {
    //access modifiers eliminate need for declaration before constructor
    constructor(clientName, transDetail, transAmount) {
        this.clientName = clientName;
        this.transDetail = transDetail;
        this.transAmount = transAmount;
    }
    summary() {
        return `${this.clientName} Owes your company  Ksh ${this.transAmount} for ${this.transDetail}`;
    }
}
