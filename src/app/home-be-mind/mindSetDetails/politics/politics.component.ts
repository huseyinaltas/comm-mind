import { Component, NgModule, OnInit, ViewChild } from "@angular/core";
import { HomeBeMindComponent } from "../../home-be-mind.component";
import { PoliticsForm } from "../../../forms/politics";
import {
  politicsViews,
  politicsParties,
  educationMajors,
} from "../../../all-data/politicsAll";
import { educationLevels } from "../../../all-data/educationLevel";
import { AppComponent } from "../../../app.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-politics",
  templateUrl: "./politics.component.html",
  styleUrls: ["./politics.component.css", "../../../../styles.css"],
})
export class PoliticsComponent implements OnInit {
  public politicsViews = politicsViews;
  public politicsParties = politicsParties;
  public educationMajors = educationMajors;
  public hideLevel = false;
  public educationLevels = educationLevels;
  public makeLine = false;
  public showOther = false;
  public isSubmitEnabled = false;

  public reset() {
    this.appComponent.politicsForm.reset();
    this.appComponent.politicsForm.controls["pmId"].setValue(
      this.appComponent.profileForm.getRawValue().pmId
    );
    this.appComponent.politicsForm.getRawValue().workExperienceHistory
      ? this.appComponent.politicsForm.getRawValue().workExperienceHistory
      : this.appComponent.politicsForm.addControl(
          "workExperienceHistory",
          this.fb.group({
            details: this.fb.array([
              this.fb.group(this.appComponent.politicsFormFile.itemsHistory),
            ]),
          })
        );
  }
  public resetWorkHistory(isHistoryMade: boolean) {
    isHistoryMade
      ? this.appComponent.politicsForm.getRawValue().workExperienceHistory
        ? this.appComponent.politicsForm.getRawValue().workExperienceHistory
        : this.appComponent.politicsForm.addControl(
            "workExperienceHistory",
            this.fb.group({
              details: this.fb.array([
                this.fb.group(this.appComponent.politicsFormFile.itemsHistory),
              ]),
            })
          )
      : this.appComponent.politicsForm.removeControl("workExperienceHistory");
    isHistoryMade ? this.employerIdRenewal() : isHistoryMade;
  }

  addWorkHistory(isSubmitBack: boolean) {
    if (this.appComponent.politicsForm.get("workExperienceHistory") == null) {
      this.appComponent.politicsForm.addControl(
        "workExperienceHistory",
        this.fb.group({
          details: this.fb.array([
            this.fb.group(this.appComponent.politicsFormFile.itemsHistory),
          ]),
        })
      );
      this.makeLine = true;
      this.employerIdRenewal();
    } else if (
      this.appComponent.politicsFormFile.details.value.length > 0 &&
      !isSubmitBack
    ) {
      this.appComponent.politicsFormFile.details.insert(
        this.appComponent.politicsFormFile.details.value.length,
        this.fb.group(this.appComponent.politicsFormFile.itemsHistory)
      );
      this.makeLine = true;
      this.employerIdRenewal();
    } else {
      return;
    }
  }

  employerIdRenewal() {
    this.appComponent.politicsFormFile.details.controls.map((x: any, i) =>
      x.get("employerId")?.setValue(i + 1)
    );
  }
  public removeWorkHistory(index: any) {
    this.appComponent.politicsFormFile.details.removeAt(index);
    this.employerIdRenewal();
  }

  isWorkHistoryValid() {
    if (this.appComponent.politicsFormFile.details) {
      var last =
        this.appComponent.politicsFormFile.details.controls[
          this.appComponent.politicsFormFile.details.controls.length - 1
        ];
      return (
        (last.get("toDate")?.value == "current" || last.get("toDate")?.valid) &&
        last.get("title")?.valid &&
        last.get("employer")?.valid &&
        last.get("fromDate")?.valid
      );
    }
    return true;
  }
  error: any = { isError: false, errorMessage: "" };

  compareTwoDates(index: any) {
    if (
      this.appComponent.politicsFormFile.details.controls[index].get("toDate")
        ?.value == "current"
    ) {
      return (this.error = {
        isError: false,
        errorMessage: "End Date can't before Start Date",
      });
    }
    if (
      new Date(
        this.appComponent.politicsFormFile.details.controls[index].get(
          "toDate"
        )?.value
      ) <
      new Date(
        this.appComponent.politicsFormFile.details.controls[index].get(
          "fromDate"
        )?.value
      )
    ) {
      return (this.error = {
        isError: true,
        errorMessage: "End Date can't before Start Date",
      });
    }
    return (this.error = {
      isError: false,
      errorMessage: "End Date can't before Start Date",
    });
  }

  constructor(
    public homeBeMind: HomeBeMindComponent,
    public appComponent: AppComponent,
    public fb: FormBuilder,
    private _formBuilder: FormBuilder,
    public politicsForm: PoliticsForm
  ) {}

  ngOnInit(): void {}
}
