
function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.image = "elephant.jpeg";
    this.type = "Elephant";
  }
  
  function Cheetah(name, age) {
    this.name = name;
    this.age = age;
    this.image = "TheCheethcat.jpeg";
    this.type = "Cheetah";
  }
  
  function PolarBear(name, age) {
    this.name = name;
    this.age = age;
    this.image = "Polar_Bear_-_Alaska_(cropped).jpeg";
    this.type = "Bear";
  }
  

  var animals = [new Elephant(), new Cheetah(), new PolarBear()];
  var names = ["Annie" , "Bonnnie" , "Stone" , "Luna" , "Peanut" , "Galaxy" , "Felix" , "Moonie"];
  
 
  function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }
  

  function generateRandomAnimal() {
    var randomIdx = getRandomIndex(animals.length);
    var randomAnimal = animals[randomIdx];
  
    if (randomAnimal instanceof Elephant) 
    {
      return new Elephant(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Cheetah) 
    {
      return new Cheetah(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof PolarBear) 
    {
      return new PolarBear(generateRandomName(), generateRandomAge());
    }
  }
  
 
  function generateRandomName() {
    var randomIdx = getRandomIndex(names.length);
    return names[randomIdx];
  }
  
  
  function generateRandomAge() {
    var randomIdx = getRandomIndex(10);
    return randomIdx;
  }
  
 
  function onLoad () {
  
    
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  
   
    var hasSavedAnimal = false;
  
    
    if (animal === null) 
    {
      
      document.getElementById("button-storage").textContent = "Save Animal";
  
    
      animal = generateRandomAnimal();
    } 
    else 
    {
      
      document.getElementById("button-storage").textContent = "Clear Animal";
  
      
      hasSavedAnimal = true;
    }
  
    
    document.getElementById("animal-properties").textContent = animal.name + " " + "is" + " " + animal.age + " " + "years old";
    document.getElementById("animal-img").setAttribute("src", animal.image);
  
  
    document.getElementById("button-storage").addEventListener("click", function() {
      
      if (hasSavedAnimal) 
      {
        
        localStorage.removeItem("savedAnimal");
  
        
        document.getElementById("button-storage").style.display = "none";
        document.getElementById("button-action-text").textContent = "Cleared!";
        document.getElementById("button-action-text").style.display = "block";
      }
      
      else 
      {
        
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
  
        
        document.getElementById("button-storage").style.display = "none";
        document.getElementById("button-action-text").textContent = "Saved!";
        document.getElementById("button-action-text").style.display = "block";
      }
    });
  
  };

  