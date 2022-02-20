const fish ={name : 'hilsha',price:5693,home:'padma',color:'silver',phone:017034243435};

//old rules to make variable from object
/* const name = fish.name;
const home = fish.home; */

//new ways to declare is called destructing
const {name,home} = fish;
console.log(name,home);

const nestedObjectsCompany = {
    name: 'GP',
    ceo:'janina',
    tech:{
        work: 'web development',
        tools:'react',
        more :{
            first : 'html',
            second : 'css',
            third : 'framework'

        }
    }
};

const {work,tools} = nestedObjectsCompany.tech;
const{first,third}= nestedObjectsCompany.tech.more
console.log(work,tools,third);