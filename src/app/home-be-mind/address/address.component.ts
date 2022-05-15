import { Component, OnInit } from '@angular/core';
import { HomeBeMindComponent } from '../home-be-mind.component';
import { states } from '../states';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  states = states;

  constructor(public homeBeMind: HomeBeMindComponent) {}
  ngOnInit(): void {}
}
