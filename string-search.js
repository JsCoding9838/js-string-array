const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone Dell',
    'yellow laptop with black camera',
    '1X59 Lenove commercial yoga laptop Dell',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with laptop Dell'
]

const searching = 'Dell';

// indexOf
const output = [];
for(const product of products){
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    };
}
// console.log(output);

// includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

// starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

// ends with
for(const product of products){
    if(product.toLowerCase().endsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);