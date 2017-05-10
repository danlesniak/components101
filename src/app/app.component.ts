import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  	trigger('myAnimation', [
  		state('small', style({
  			transform: 'scale(1)',
  		})),
  		state('large', style({
  			transform: 'scale(1.2)',
  		})),
  		transition('small <=> large', animate('300ms ease-in', style({
  			transform: 'translateY(40px)'
  		}))), // => makes one way, <=> makes it go both ways
  	]),
  	trigger('myAnimation2', [
  		state('small', style({
  			transform: 'scale(1)',
  		})),
  		state('large', style({
  			transform: 'scale(1.2)',
  		})),
  		transition('small <=> large', animate('300ms ease-in', keyframes([
  			style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  			style({opacity: 1, transform: 'translateY(35px)', offset: 0.5}),
  			style({opacity: 1, transform: 'translateY(0)', offset: 1}),
  		]))), // => makes one way, <=> makes it go both ways
  	]),
  ]
})
export class AppComponent {

	state:string = 'small';

	constructor(private dataService:DataService) {

	}

	someProperty:string = '';

	ngOnInit() {
		console.log(this.dataService.cars);
		this.someProperty = this.dataService.myData();
	}

	animateMe() {
		this.state = this.state == 'small' ? 'large' : 'small';
	}

  title = 'app works!';
  myObject = {
  	gender: 'male',
  	age: 33,
  	location: 'USA'
  }

  myArr = ['him', 'hers', 'yours'];

  buttonStatus = 'enabled';

  myEvent(event) {
  	console.log(event);
  }

  titleClass = 'red-title';
  titleClass2 = true;

  titleClasses = {
  	'red-title': true,
  	'large-title': true
  }

  titleStyle = 'red';
  titleStyle2 = true;

  titleStyles = {
  	'color': 'red',
  	'font-size': '4em'
  }

  animateBox = 'animate-box';
}
