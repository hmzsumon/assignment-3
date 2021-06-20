//

// 1 function
function kilometerToMeter(km) {
	let meter = km * 1000;
	if (km < 0) {
		return 'please enter a number greater than 0';
	} else if (isNaN(km)) {
		return 'It is not a number';
	} else {
		return meter;
	}
}
// console.log(kilometerToMeter(2));

//2. budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
	watch = watch * 50;
	mobile = mobile * 100;
	laptop = laptop * 500;

	return watch + mobile + laptop;
}

// console.log(budgetCalculator(2, 1, 1));

// hotelCost function

function hotelCost(day) {
	let totalConst = 0;

	if (day <= 10) {
		totalConst = day * 100;
		return totalConst;
	} else if (day <= 20) {
		let first10_days_cost = 100 * 10;
		let remaining_day_const = (day - 10) * 80;
		totalConst = first10_days_cost + remaining_day_const;
		return totalConst;
	} else if (day > 20) {
		let first10_days_cost = 100 * 10;
		let second10_days_cost = 80 * 10;
		let remaining_day_cost = (day - 20) * 50;
		totalConst = first10_days_cost + second10_days_cost + remaining_day_cost;
		return totalConst;
	}
}

// console.log(hotelCost(15));

//3. Function megaFriend

function megaFriend(arr) {
	let friendName = '';
	for (let i = 0; i < arr.length; i++) {
		if (friendName.length < arr[i].length) {
			friendName = arr[i];
		}
	}
	return friendName;
}

// console.log(megaFriend(['Sumon', 'Zakaria', 'HM Zakaria']));
