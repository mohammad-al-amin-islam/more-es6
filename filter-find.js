const numbers = [1,2,3,4,234,34,23,4,2,23,42,3423];

const bigNumbers = numbers.filter(num => num>20);
// console.log(bigNumbers);

const smallNumbers = numbers.filter(num => num<20);
// console.log(smallNumbers);


const products = [
    {name: 'mobile', price:134,color:'red'},
    {name: 'bottle', price:34,color:'blue'},
    {name: 'watch', price:14,color:'black'},
    {name: 'glass', price:1,color:'white'},
    {name: 'headphone', price:1000,color:'white'},
];

const product = products.filter(p => p.price>100);//if not find anything it will give blank array
console.log(product);
const pcolor = products.filter(p => p.color == 'white');
console.log(pcolor);

const productFind = products.find(p => p.price>100);//it will give only first number and if not find it will give undefined;
console.log(productFind);
