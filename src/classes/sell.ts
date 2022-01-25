class Clientowes {

    //access modifiers eliminate need for declaration before constructor
    constructor(readonly clientName: string, private transDetail: string, public transAmount: number) { };
}