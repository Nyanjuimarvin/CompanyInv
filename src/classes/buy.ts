export class Oweclient {

    //access modifiers eliminate need for declaration before constructor
    constructor(readonly clientName: string,
        private transDetail: string,
        public transAmount: number) { }


    summary() {
        return `Your company owes ${this.clientName} Ksh ${this.transAmount} for ${this.transDetail}`
    }
}