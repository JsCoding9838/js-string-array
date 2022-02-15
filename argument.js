function addNumbers(num1, num2){
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }

    // arguments.push(45);
    // const result = num1 + num2;
    return result;
}


const sum = addNumbers(23, 13, 50, 100, 45, 76, 198, 901);
// console.log(sum);


function getFullName(firstNmae, lastName){
    // const fullName = firstNmae + ' ' + lastName;
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Umuk', 'Sonket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Sonket', 'bin', 'Kumuk', 'Sonket');
console.log(name);