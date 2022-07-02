import { Injectable } from "@angular/core";
import { CommonForms } from "../forms/commonForms";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ProfileForm } from "./profile";

@Injectable()
export class PoliticsForm {
  constructor(
    public fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public profileForm: ProfileForm,
    public commonForms: CommonForms
  ) {}

  education = this.commonForms.education;
  itemsHistory = this.commonForms.empoloyeeHistory;

  politicsForm = this.fb.group({
    pmId: [
      this.profileForm.profileForm.getRawValue().pmId,
      Validators.required,
    ],
    lean: ["", Validators.required],
    leanDetail: ["", Validators.required],
    memeberShip: ["", Validators.required],
    education: this.fb.group(this.education),
    anyWorkExperience: [null, Validators.required],
    workExperienceHistory: this.fb.group({
      details: this.fb.array([this.fb.group(this.itemsHistory)]),
    }),
  });

  get workHistory() {
    return this.politicsForm.get("workExperienceHistory") as FormGroup;
  }

  get details() {
    return this.politicsForm.get("workExperienceHistory.details") as FormArray;
  }

  ngOnInit() {}
}
