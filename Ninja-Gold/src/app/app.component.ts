import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Ninja-Gold';
	gold = 0;
	activities = [];
	lostactivities = [];

	findGoldFarm() {
		var rand = Math.floor(Math.random() * (20 - 10) + 11);
		this.gold += rand;
		this.activities.push(`You entered the Farm and earned ${rand} golds...`);
		console.log(this.activities)
	}
	findGoldCave() {
		var rand = Math.floor(Math.random() * (10 - 5) + 6);
		this.gold += rand;
		this.activities.push(`You entered the Cave and earned  ${rand} golds...`);
		console.log(this.activities)
	}
	findGoldHouse() {
		var rand = Math.floor(Math.random() * (5 - 2) + 3);
		this.gold += rand;
		this.activities.push(`You entered the House and earned  ${rand} golds...`);
		console.log(this.activities)
	}

	findGoldCasino() {
		if (this.gold > 0) {
			var rand = Math.floor(Math.random() * (50 - (-50)) + (-49))
			console.log(`random number is: ${rand}`)
			if (rand < 0) {
				this.gold += rand;
				this.lostactivities.push(`You entered the Casino and lost  ${Math.abs(rand)} golds...`)
				if (this.gold < 0) {
					rand = rand - this.gold;
					this.gold = 0;
					window.alert(`You lost all your golds. `);

				}
			}
			if (rand > 0) {
				(this.gold += rand);
				this.activities.push(`You entered the Casino and earned  ${rand} golds...`)
			}
		}

	}
	restart() {
		this.gold = 0;
		this.activities = [];
	}
}
