/**
 * Given a text applies the function callbackfn to every word on the array and returns all words as a text
 * @param text
 * @param callbackfn
 * @returns {string}
 */
export function translateTextWords(text: string, callbackfn: (value: string) => string) {
  let textSplit = text.split(' ');
  textSplit = textSplit.map((word) => callbackfn(word) );
  return textSplit.join(' ');
}

/**
 * Returns the word translated from PigLatin to English
 * @param word
 * @returns {string}
 */
export function translateWordPgToEn(word: string): string {
  let first = '';
  let second = '';
  const last = 'ay';
  if (word.substring(word.length - 2, word.length) === last) {
    // word is immutable so we can modificate
    second = word.substring(0, word.length - 3);
    first = word.charAt(word.length - 3);
    return first + second;
  } else {
    return word;
  }
}

/**
 * Returns the word translated from English to PigLatin
 * @param word
 * @returns {string}
 */
export function translateWordEnToPg(word) {
  let first = '';
  let second = '';
  const last = 'ay';
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word.charAt(i))) {
      if (i > 0 && word.charAt(i - 1) === 'q' && word.charAt(i) === 'u') {
        continue;
      }
      if (i > 0 && word.charAt(i - 1) === 'c' && vowelsEI.includes(word.charAt(i))) {
        word = replaceAt(word, i - 1, 's'); // change the sound 'c' for 's'
      }
      second = word.substring(0, i);
      first = word.substring(i, word.length);
      break;
    }
  }
  return first + second + last;
}

/**
 * Helper function that replaces an item in the string and return the new one
 * @param source
 * @param index
 * @param replacement
 * @returns {string}
 */
function replaceAt(source: string, index: number, replacement: string) {
  return source.substr(0, index) + replacement+ source.substr(index + replacement.length);
}

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const vowelsEI = ['e', 'i', 'E', 'I'];
