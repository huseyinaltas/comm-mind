import { Component, OnInit } from '@angular/core';
import { HomeBeMindComponent } from '../home-be-mind.component';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css'],
})
export class FirstNameComponent implements OnInit {
  constructor(
    public homeBeMind: HomeBeMindComponent,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder
  ) {}
  subForm = this._formBuilder.group({
    companyName: ['', Validators.required],
  });
  ngOnInit(): void {}
}
