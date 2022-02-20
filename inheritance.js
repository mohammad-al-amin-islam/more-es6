class TeamMember {
    name;
    address = 'bd';
    
    constructor (name,address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    designation = 'suport web dev';
    startSession(){
        console.log(this.name,'start a session');
    }
}

class StudentCare extends TeamMember{
    takeSuport;
    designation = 'care web dev';
    constructor(name,address,takeSuport){
        super(name,address);
        this.takeSuport = takeSuport;
    }
    startSession(){
        console.log(this.name,'build a routine for',this.takeSuport);
    }
}
const kabul = new Support('kabul','BD');
const babul = new StudentCare('kabul','BD','sabul');
console.log(kabul,babul);
