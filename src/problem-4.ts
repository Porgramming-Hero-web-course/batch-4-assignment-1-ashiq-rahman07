{

//Problem 4---->

// Define the types for Circle and Rectangle with unique 'shape' properties
type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  // Union type for Circle or Rectangle
  type Shape = Circle | Rectangle;
  
  
  const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {
     
      return Math.PI * shape.radius ** 2;
    } else {
      
      return shape.width * shape.height;
    }
  };
  
  // Sample Input 1: Circle
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  
  console.log(circleArea); 
  
  // Sample Input 2: Rectangle
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });


  console.log(rectangleArea); 
  










}