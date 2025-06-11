const cookieBtn = document.getElementById('cookieBtn');
const counterDisplay = document.getElementById('counterDisplay');
const cpsDisplay = document.getElementById('cookiePerSecDisplay');

let defaults = {
	cookieCount: 0,
	cookiePerSec: 1,
};

let count = localStorage.getItem('cookieCount') || defaults.cookieCount;
counterDisplay.innerText = count;

let cps = localStorage.getItem('cookiePerSec') || defaults.cookiePerSec;
cpsDisplay.innerText = cps;

cookieBtn.addEventListener('click', () => {
	count++;
	counterDisplay.innerText = count;
	localStorage.setItem('cookieCount', count); // delete later
});

/* Interval to store cookie count every second
const saveCookies = setInterval(() => {
	localStorage.setItem('cookieCount', count);
	localStorage.setItem('cookiePerSec', cps);
}, 1000);*/
