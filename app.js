const appEl = document.getElementById('app');

// do ajax call
const apiUrl = 'http://localhost:3000/api/facts/random';// 'https://catfacts-api.azurewebsites.net/api';

async function getFact() {
  const res = await fetch(apiUrl);
  const fact = await res.text();
  const str =`
  <article>
      <p>${fact}</p>
      <p>😸</p>
    </article>
  `
  appEl.innerHTML = str;
}

getFact();