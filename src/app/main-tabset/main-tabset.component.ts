import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tabset',
  templateUrl: './main-tabset.component.html',
  styleUrls: ['./main-tabset.component.css']
})

export class MainTabsetComponent implements OnInit {

	tab:string = 'Home';

	constructor() {}
	ngOnInit() {}

	setTab = function(newTab) {
		this.tab = newTab;
	}

	getActiveTab = function() {
		return this.tab;
	}

	alert = function(msg) {
		window.alert(msg);
	}
}
