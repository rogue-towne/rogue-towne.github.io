const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section'),
          h2 = document.createElement('h2'),
          birthDate = document.createElement('p'),
          birthPlace = document.createElement('p');
          image = document.createElement('img')

      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
      birthDate.textContent = `Date of Birth: ${prophets[i].birthdate}`;
      birthPlace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
      image.setAttribute('src', prophets[i].imageurl)
      image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`)

      card.appendChild(h2);
      card.append(birthDate);
      card.append(birthPlace);
      card.append(image)

      document.querySelector('div.cards').appendChild(card);

    }
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
  });
