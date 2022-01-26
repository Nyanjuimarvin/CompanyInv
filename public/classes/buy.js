export class Oweclient {
    //access modifiers eliminate need for declaration before constructor
    constructor(clientName, transDetail, transAmount) {
        this.clientName = clientName;
        this.transDetail = transDetail;
        this.transAmount = transAmount;
    }
    summary() {
        return `Your company owes ${this.clientName} Ksh ${this.transAmount} for ${this.transDetail}`;
    }
}
