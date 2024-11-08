{
//Problem 3 --->


const countWordOccurrences = (sentence: string, word: string): number => {
    const wordsArray = sentence.toLowerCase().split(" ");
    const givenWord = word.toLowerCase();
    let count = 0;
  
    for (const currentWord of wordsArray) {
      if (currentWord === givenWord) {
        count++;
      }
    }
  
    return count;
  };
  
  // Sample Input:
  console.log(countWordOccurrences("I love typescript", "typescript")); 
  


}