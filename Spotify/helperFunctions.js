function capitalizeEachWord(input) {
    // Split the input string into words
    const words = input.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        // Ensure the word is not an empty string
        if (word.length > 0) {
            // Capitalize the first letter and concatenate with the rest of the word
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            // Return empty string for empty words
            return '';
        }
    });

    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
}

module.exports = {capitalizeEachWord}