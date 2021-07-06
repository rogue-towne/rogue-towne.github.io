if(!localStorage.getItem('lastvisit')){
    populateStorage();
    calculateDayDiff();
} else {
    currentDay = calculateDayDiff();
    resetlastVisit(currentDay);
}

function populateStorage() {
    localStorage.setItem('lastvisit', d.getTime());
}
function resetlastVisit(currentDay){
    localStorage.setItem('lastvisit', currentDay);
}
function calculateDayDiff(){
    var lastDay = localStorage.getItem('lastvisit')
    var currentDay = d.getTime()
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInMilli = currentDay - lastDay;
    const diffInDays = Math.round(diffInMilli/ oneDay);
    document.querySelector('#number-days').textContent = diffInDays
    return currentDay
}


