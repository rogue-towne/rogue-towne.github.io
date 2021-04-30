let lastModified = new Date.parse(document.lastModified);
document.querySelector('#year').textContent = currentDate.getFullYear();
document.querySelector('#dateTime').textContent = lastModified
