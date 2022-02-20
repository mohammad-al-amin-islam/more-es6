const names = ['md', 'alamin', 'islam'];

const result = names.map(x => x.length);
console.log(result);

const products = [
    {name: 'mobile', price:134,color:'red'},
    {name: 'bottle', price:34,color:'blue'},
    {name: 'watch', price:14,color:'black'},
    {name: 'glass', price:1,color:'white'},
    {name: 'headphone', price:1000,color:'white'},
];

const productName = products.map(p =>p.name);
console.log(productName);

products.map(p=>console.log(p.name));

//if there is no return we can use forEach()
products.forEach(p=>console.log(p));
