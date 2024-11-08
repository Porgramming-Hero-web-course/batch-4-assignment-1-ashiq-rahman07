{
//Problem 2 -Remove Duplicate elements

const removeDuplicates = (arr: number[]): number[] => {
    const uniqueElements: number[] = [];
    const uniqResult = new Set<number>();

    for (const num of arr) {
        if (!uniqResult.has(num)) {
            uniqueElements.push(num);
            uniqResult.add(num);
        }
    }

    return uniqueElements;
}

// Sample Input:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));










}