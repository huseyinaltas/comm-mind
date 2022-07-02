import { Injectable } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Injectable()
export class CommonForms {
  constructor(public fb: FormBuilder, private _formBuilder: FormBuilder) {}
  public empoloyeeHistory = {
    employerId: 1,
    employer: ["", Validators.required],
    fromDate: ["", Validators.required],
    isCurrent: [false, Validators.required],
    toDate: ["", Validators.required],
    title: ["", Validators.required],
  };

  public education = {
    degree: ["", Validators.required],
    major: ["", Validators.required],
    otherMajor: ["None", Validators.required],
  };
}
