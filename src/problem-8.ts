// Problem 8 ---->


const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean =>
    keys.every(key => key in obj);
  
  // Sample Input
  const person = { name: "Ashiq", age: 27, email: "ashiq@example.com" };



  console.log(validateKeys(person, ["name", "age"])); 
  