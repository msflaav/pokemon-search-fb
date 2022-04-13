const baseUrl = 'https://api.funtranslations.com/translate/shakespeare.json?text=';

export async function fetchShakespeareTranslation(text) {
  console.log(`${baseUrl}${text}`);
  return fetch(`${baseUrl}${text}`)
}