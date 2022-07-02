import { Component, Injectable, OnInit } from "@angular/core";
import { HomeBeMindComponent } from "../../home-be-mind.component";
import { Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { AppComponent } from "../../../app.component";

@Component({
  selector: "app-name",
  templateUrl: "./name.component.html",
  styleUrls: ["./name.component.css", "../../../../styles.css"],
})
export class FirstNameComponent implements OnInit {
  fName = "";
  lName = "";
  constructor(
    public homeBeMind: HomeBeMindComponent,
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public appComponent: AppComponent
  ) {}
  subForm = this._formBuilder.group({
    companyName: ["", Validators.required],
  });
  ngOnInit(): void {}
}
