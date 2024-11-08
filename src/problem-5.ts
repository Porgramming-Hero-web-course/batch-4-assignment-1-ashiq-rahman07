{
// Problem 5 --->



const getProperty = <T, K extends keyof T>(obj: T, property: K): T[K] => {
    return obj[property];
  };
  
  // Sample Input
  const person = { name: "Alice", age: 30 };


  console.log(getProperty(person, "name")); 
  




















}