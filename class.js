class Support{
    name;
    address = 'bd';
    designation = 'suport we dev';
    constructor (name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,'start a session');
    }
}

const kabul = new Support('kabul','BD');
const kabul2 = new Support('kabul2','dubai');
kabul.startSession();
console.log(kabul,kabul2);