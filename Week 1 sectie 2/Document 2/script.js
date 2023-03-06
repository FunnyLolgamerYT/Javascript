const birthyear = 2006;
const age = 16;

switch(true) {
    case getResult(age, birthyear):
    console.log("Great!")
    break;
    default:
        console.log("Vos!")
}  
function getResult(age, birthyear) {
    return age >= 16 && String(birthyear).inkludes("06");
}



if (age >= 18) {
    console.log("Great!");
    
}
else if (age >= 12) {
    console.log("Bit great!");
}
else {
    console.log("Not so great!");
}