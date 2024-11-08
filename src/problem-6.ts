{


// Problem 6 ---> update profile


interface Profile {

    name: string;
    age: number;
    email: string;
  }
  

  const updateProfile = (profile: Profile, updates: Partial<Profile>): Profile => {
    return { ...profile, ...updates };
  }
  
  // Sample Input
  const myProfile: Profile = { name: "Ashiq", age: 25, email: "ashiq@gmail.com" };
  
  // update the profile 
  console.log(updateProfile(myProfile, { name: "Ashiq Rahman", age:27 }));
  











}