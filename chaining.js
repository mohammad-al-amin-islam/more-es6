const object ={x:1,y:34,a:10,g:23};
const {x,y,g} = object;
// console.log(g);

//for array destructuring
//const array = [1,2,3,4,5];

/* const [first,second] = [1,2,3,4,5];
console.log(first,second); */

const nestedObjectsCompany = {
    name: 'GP',
    ceo:'janina',
    tech:{
        work: 'web development',
        tools:'react',
        more :{
            first : 'html',
            second : 'css',
            third : 'js'

        }
    }
};
console.log(nestedObjectsCompany?.tech?.more?.third);
console.log(nestedObjectsCompany?.backend?.more.third);