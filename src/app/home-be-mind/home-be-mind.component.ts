import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MindSetComponent } from './mind-set/mind-set.component';

@Component({
  selector: 'app-home-be-mind',
  templateUrl: './home-be-mind.component.html',
  styleUrls: ['./home-be-mind.component.css'],
})
export class HomeBeMindComponent implements OnInit {
  public allMindSets = '';
  public allMSetArray = [''];
  public mindSetComp = new MindSetComponent(this);
  isLinear = true;
  public nameSubmit: boolean = false;
  address = this.fb.group({});
  profileForm = this.fb.group({
    name: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    }),
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
    mindSets: this.fb.array([]),
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  get mindSets() {
    return this.profileForm.get('mindSets') as FormArray;
  }

  constructor(public fb: FormBuilder, private _formBuilder: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  public currentPage = 0;
  public changePage(index: number): void {
    this.currentPage += index;
  }

  ngOnInit(): void {}
}
