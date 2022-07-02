import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as uuid from "uuid";

@Injectable()
export class ProfileForm {
  constructor(public fb: FormBuilder, private _formBuilder: FormBuilder) {}

  public pmId = uuid.v4();
  profileForm = this.fb.group({
    pmId: [this.pmId, Validators.required],
    name: this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: [
        "",
        Validators.pattern(
          "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        ),
      ],
    }),
    address: this.fb.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
    }),
    mindSets: this.fb.array(["Politics"]),
    aliases: this.fb.array([this.fb.control("")]),
  });

  get profileName() {
    return this.profileForm.get("name") as FormGroup;
  }
}
