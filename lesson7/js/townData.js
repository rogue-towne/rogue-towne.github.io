const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns']

    const prestonYear = document.getElementById('preston-year');
    const prestonPopulation = document.getElementById('preston-pop');
    const prestonRain = document.getElementById('preston-rain');
    const prestonMotto = document.getElementById('preston-motto');
    prestonYear.textContent = `${towns[6].yearFounded}`;
    prestonMotto.textContent = `${towns[6].motto}`;
    prestonRain.textContent = `${towns[6].averageRainfall}`;
    prestonPopulation.textContent = `${towns[6].currentPopulation}`;

    const fishhavenYear = document.getElementById('fishhaven-year');
    const fishhavenPopulation = document.getElementById('fishhaven-pop');
    const fishhavenRain = document.getElementById('fishhaven-rain');
    const fishhavenMotto = document.getElementById('fishhaven-motto');
    fishhavenYear.textContent = `${towns[2].yearFounded}`;
    fishhavenMotto.textContent = `${towns[2].motto}`;
    fishhavenRain.textContent = `${towns[2].averageRainfall}`;
    fishhavenPopulation.textContent = `${towns[2].currentPopulation}`;

    const sodaspringYear = document.getElementById('sodaspring-year');
    const sodaspringPopulation = document.getElementById('sodaspring-pop');
    const sodaspringRain = document.getElementById('sodaspring-rain');
    const sodaspringMotto = document.getElementById('sodaspring-motto');
    sodaspringYear.textContent = `${towns[0].yearFounded}`;
    sodaspringMotto.textContent = `${towns[0].motto}`;
    sodaspringRain.textContent = `${towns[0].averageRainfall}`;
    sodaspringPopulation.textContent = `${towns[0].currentPopulation}`;

  });