const cookieBtn = document.getElementById('cookieBtn');
const counterDisplay = document.getElementById('counterDisplay');
const cpsDisplay = document.getElementById('cookiePerSecDisplay');

let defaults = {
	cookieCount: 0,
	cookiePerSec: 0,
};

let countLS = localStorage.getItem('cookieCount') || defaults.cookieCount;
let count = JSON.parse(countLS);
counterDisplay.innerText = count;

let cpsLS = localStorage.getItem('cookiePerSec') || defaults.cookiePerSec;
let cps = JSON.parse(cpsLS);
cpsDisplay.innerText = `Auto-Cooking: ${cps} every 10 seconds`;

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

	divBig.setAttribute('class', 'storeContainer');

	document.body.appendChild(divBig);

	upgrades.forEach((upgrade) => {
		// const div = document.createElement('div'); // all information about an upgrade
		const name = document.createElement('p');
		const cost = document.createElement('p');
		const increase = document.createElement('p');
		const buy = document.createElement('button');

		name.innerText = upgrade.name;
		cost.innerText = 'Cost: ' + upgrade.cost;
		increase.innerText = '+ ' + upgrade.increase + ' cookies';
		buy.innerText = 'Buy';
		buy.id = upgrade.id;

		buy.setAttribute('class', 'buyBtn');

		const toPay = upgrade.cost;

		setInterval(() => {
			let countLS = localStorage.getItem('cookieCount');
			let countNow = JSON.parse(countLS);

			if (countNow < toPay) {
				buy.setAttribute('disabled', '');
				buy.style.backgroundColor = '#ffe6a7';
				buy.style.borderColor = '#B09D6F';
				buy.style.borderStyle = 'solid';
			} else if (countNow > toPay) {
				buy.removeAttribute('disabled');
				buy.style.backgroundColor = '#8CD685';
				buy.style.borderColor = '#3F5F3C';
				buy.style.borderStyle = 'solid';
			}
		}, 1000);

		const upDetails = document.createElement('div'); // for the cost and increase details // yellow
		upDetails.setAttribute('class', 'upDetails');
		upDetails.append(cost, increase);

		const upNameDetails = document.createElement('div'); // all information about an upgrade // green
		upNameDetails.setAttribute('class', 'upNameDetails');
		upNameDetails.append(name, upDetails);

		const upBuyBtn = document.createElement('div'); // add buy button // orange
		upBuyBtn.setAttribute('class', 'upBuyBtn');
		upBuyBtn.append(buy, upNameDetails);

		divBig.appendChild(upBuyBtn);
	});

	const delay = 5000;

	// +1 cookie
	const autoI = document.getElementById('1');
	autoI.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[0].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[0].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[0].name}: You get ${upgrades[0].increase} cookie every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +5 cookies
	const autoV = document.getElementById('2');
	autoV.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[1].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[1].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[1].name}: You get ${upgrades[1].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +10 cookies
	const autoX = document.getElementById('3');
	autoX.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[2].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[2].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[2].name}: You get ${upgrades[2].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +20 cookies
	const autoXX = document.getElementById('4');
	autoXX.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[3].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[3].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[3].name}: You get ${upgrades[3].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +50 cookies
	const autoL = document.getElementById('5');
	autoL.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[4].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[4].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[4].name}: You get ${upgrades[4].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +100 cookies
	const autoC = document.getElementById('6');
	autoC.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[5].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[5].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[5].name}: You get ${upgrades[5].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +200 cookies
	const autoCC = document.getElementById('7');
	autoCC.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[6].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[6].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[6].name}: You get ${upgrades[6].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +500 cookies
	const autoD = document.getElementById('8');
	autoD.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[7].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[7].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[7].name}: You get ${upgrades[7].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +1000 cookies
	const autoM = document.getElementById('9');
	autoM.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[8].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[8].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[8].name}: You get ${upgrades[8].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});

	// +2000 cookies
	const autoMM = document.getElementById('10');
	autoMM.addEventListener('click', () => {
		// minus cost from current count, then set the new count
		let countLS = localStorage.getItem('cookieCount');
		let count = JSON.parse(countLS);

		let paidCount = count - upgrades[9].cost;
		counterDisplay.innerText = paidCount;
		localStorage.setItem('cookieCount', paidCount);
		//

		// increase the current cps, then set the new cps
		let cpsLS = localStorage.getItem('cookiePerSec');
		let cps = JSON.parse(cpsLS);

		let addedCps = cps + upgrades[9].increase;
		cpsDisplay.innerText = `Auto-Cooking: ${addedCps} every 10 seconds`;
		localStorage.setItem('cookiePerSec', addedCps);
		//

		console.log(
			`Upgraded! ${upgrades[9].name}: You get ${upgrades[9].increase} cookies every 10 seconds!`
		);

		// set auto click interval
		setInterval(() => {
			// get whatever the current count is
			let countLS = localStorage.getItem('cookieCount');
			let count = JSON.parse(countLS);

			// get whatever the current cps
			let cpsLS = localStorage.getItem('cookiePerSec');
			let cps = JSON.parse(cpsLS);

			// add the current cps to the count
			let newCount = count + cps;
			counterDisplay.innerText = newCount;
			localStorage.setItem('cookieCount', newCount);
		}, delay);
	});
}

upgradesBtns();

cookieBtn.addEventListener('click', () => {
	let countLS = localStorage.getItem('cookieCount') || defaults.cookieCount;
	let count = JSON.parse(countLS);

	let plusOne = count + 1;
	counterDisplay.innerText = plusOne;
	localStorage.setItem('cookieCount', plusOne);
});
