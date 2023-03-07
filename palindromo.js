// 30 días de JavaScript
// playground Encuentra el mayor palíndromo

function findLargestPalindrome(words) {

    let largest = null;

    function palindromo(word){
        let j = word.length - 1;
        for (let i= 0; i<=j; i++ ){
            if (word[i] != word[j]){ return false; } 
            j--;
        }
        return true;
    } 

    for (const word of words){
        if (palindromo(word)) {
           if (largest == null || word.length > largest.length){
                largest = word;
            }
        } 
    }
    return largest;
}
  
console.log(
    findLargestPalindrome(['racecar', 'level', 'world', 'hello'])
);

