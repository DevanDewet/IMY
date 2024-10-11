var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];



class PetHandler {

  constructor(petsArray) {
      this.pets = petsArray;
  }


  findPetsInAgeRange(minAge, maxAge) {
    return this.pets.filter(pet => pet.age >= minAge && pet.age <= maxAge);
  }

  listAdoptedPetsByDate() {

    return this.pets.filter(function(pet) {
            return pet.adopted; 
        })
        .sort(function(a, b) {
            return new Date(b.adoptedDate) - new Date(a.adoptedDate); 
        });
  }



  ListPets(...args) {

    let petsList;

    if ( args.length==0)
    {
      petsList = this.pets;
    }
    else if (args.length === 1 && Array.isArray(args[0])) 
    {
      petsList = args[0];
    } 
    else 
    {
      petsList = args;
    }

    const createPetItem = (pet) => {

      let petInfo = `${pet.name} | ${pet.species} | Age: ${pet.age}`;
      
      if (pet.adopted) {
        petInfo += ` | Adopted!`;
      }

      return petInfo;
    };

    return petsList.map(createPetItem);
  }

  calculateUniqueAdoptionFee(...petNames){

    const uniquePetNames = [...new Set(petNames)];


    const matchedPets = this.pets.filter(function(pet){
      return uniquePetNames.includes(pet.name);
    });


    const totalAdoptionFee = matchedPets.reduce(function(sum,pet){
      return sum + pet.adoptionFee;
    },0);

    return totalAdoptionFee;
  }

}


const handler = new PetHandler(pets);



Array.prototype.ListPets = function() {
  return handler.ListPets(this);
};

Array.prototype.findPetsInAgeRange = function(minAge, maxAge) {
  return handler.findPetsInAgeRange(minAge, maxAge);
};

Array.prototype.listAdoptedPetsByDate = function() {
  return handler.listAdoptedPetsByDate();
};

Array.prototype.calculateUniqueAdoptionFee = function(...petNames) {
  return handler.calculateUniqueAdoptionFee(...petNames);
};

