const animals = ['Fox', 'Cow', 'Sheep', 'Pig', 'Dog', 'Cat'];
if (animals.includes('Fox')){
    console.log('Great!')
    animals.unshift('Tiger');
    console.log(animlLegalCheck(animals[0]));
}
function animlLegalCheck(animal) {
    return animals.includes(animal);
}