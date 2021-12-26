const animals = ['cat', 'dog'];

const findAnimal = (animal) => {
  console.log(`${animal} ${animals.includes(animal) > -1 ? 'exist.' : 'does not exist.' }`);
};

findAnimal('cat');
