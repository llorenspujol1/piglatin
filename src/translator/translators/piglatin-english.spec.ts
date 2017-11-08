import {translateWordEnToPg} from './piglatin-english.translator';
describe('Pig Latin - English Translator', () => {

  it('should translate from english to pig latin', () => {
    translations.forEach((item) => {
      const translation = translateWordEnToPg(item.en);
      expect(translation).toEqual(item.pg);
    });
  });
});


const translations = [
  {en: 'mess', pg: 'essmay'},
  {en: 'father', pg: 'atherfay'},
  {en: 'chick', pg: 'ickchay'},
  {en: 'star', pg: 'arstay'},
  {en: 'city', pg: 'itysay'},
  {en: 'rwanda', pg: 'andarway'},
  {en: 'queen', pg: 'eenquay'},
  {en: 'choir', pg: 'oirchay'},
  {en: 'ant', pg: 'antay'},
  {en: 'honor', pg: 'onorhay'},
  {en: 'question', pg: 'estionquay'},
  {en: 'three', pg: 'eethray'},
  {en: 'happy', pg: 'appyhay'},
  {en: 'dough', pg: 'oughday'},
];
