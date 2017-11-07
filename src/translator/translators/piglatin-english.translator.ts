
export function translateEnPg(text: string): string {
  // split text into words
  const textArray = text.split(' ');
  const textTranslatedArray = textArray.map((word) => translateWordEnToPg(word));
  return textTranslatedArray.join(' ');
}

export function translatePgToEn(word: string): string {
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


export function translateWordEnToPg(word: string): string {
  let first = '';
  let second = '';
  const last = 'ay';
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word.charAt(i))) {
      second = word.substring(0, i);
      first = word.substring(i, word.length);
      break;
    }
  }
  return first + second + last;
}

const vowels = ['a', 'e', 'i', 'o', 'u'];
