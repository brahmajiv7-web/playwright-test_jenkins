function isPalindrome(str: string): boolean {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return str === reverse;
}

let word = "madam";

if (isPalindrome(word)) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}