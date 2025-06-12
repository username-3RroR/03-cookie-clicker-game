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

async function fetchData() {
	const response = await fetch(
		'https://cookie-upgrade-api.vercel.app/api/upgrades'
	);
	console.log('HTTP Response:', response); // delete later

	const data = await response.json();
	console.log('JSON Data:', data); // delete later

	return data;
}

async function upgradesBtns() {
	const upgrades = await fetchData();
	console.log(upgrades); // delete later

	const divBig = document.createElement('div');
	const store = document.createElement('h2');

	store.innerText = 'Epic Cooking Skills';

	divBig.append(store);

	document.body.appendChild(divBig);

	upgrades.forEach((upgrade) => {
		const div = document.createElement('div');
		const name = document.createElement('p');
		const cost = document.createElement('p');
		const increase = document.createElement('p');
		const buy = document.createElement('button');

		name.innerText = upgrade.name;
		cost.innerText = upgrade.cost;
		increase.innerText = upgrade.increase;
		buy.innerText = 'Buy';

		div.append(name, cost, increase, buy);

		divBig.appendChild(div);
	});
}

upgradesBtns();

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
