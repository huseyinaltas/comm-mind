import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeBeMindComponent } from "./home-be-mind.component";
import { AppComponent } from "../app.component";
import { PoliticsForm } from "../forms/politics";
import { ProfileForm } from "../forms/profile";
import { CommonForms } from "../forms/commonForms";

import { RouterTestingModule } from "@angular/router/testing";

import {
  Validators,
  FormGroup,
  FormBuilder,
  FormArray,
  ReactiveFormsModule,
  FormsModule,
  FormControl,
} from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Component, DebugElement, ElementRef } from "@angular/core";
import { FirstNameComponent } from "./profile/name/name.component";
import { MatButtonModule } from "@angular/material/button";

describe("HomeBeMindComponent", () => {
  let component: HomeBeMindComponent;
  let fixture: ComponentFixture<HomeBeMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, MatButtonModule],
      declarations: [HomeBeMindComponent, FirstNameComponent],
      providers: [
        FormBuilder,
        AppComponent,
        PoliticsForm,
        ProfileForm,
        CommonForms,
        FirstNameComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBeMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Home Be Mind componenet should be created", () => {
    expect(component).toBeTruthy();
  });
  it("pmId is created", () => {
    expect(component.pmId).toMatch(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    );
  });

  it("Name - Next Button - disablity an color check", async () => {
    let btn = fixture.debugElement.nativeElement.querySelector("#nameNext");

    expect(btn["disabled"]).toBe(true);
    expect(getComputedStyle(btn).color).toEqual("rgb(0, 0, 0)");
    expect(getComputedStyle(btn).backgroundColor).toEqual("rgb(128, 128, 128)");

    let firstName = component.appComponent.profileForm.get("name.firstName");
    let lastName = component.appComponent.profileForm.get("name.lastName");
    let email = component.appComponent.profileForm.get("name.email");
    firstName?.setValue("TestName");
    lastName?.setValue("");
    email?.setValue("ada@");
    fixture.detectChanges();
    expect(btn["disabled"]).toBe(true);
    expect(getComputedStyle(btn).color).toEqual("rgb(0, 0, 0)");
    expect(getComputedStyle(btn).backgroundColor).toEqual("rgb(128, 128, 128)");

    firstName?.setValue("");
    lastName?.setValue("TestLast");
    email?.setValue("ada@");
    fixture.detectChanges();
    expect(btn["disabled"]).toBe(true);
    expect(getComputedStyle(btn).color).toEqual("rgb(0, 0, 0)");
    expect(getComputedStyle(btn).backgroundColor).toEqual("rgb(128, 128, 128)");

    firstName?.setValue("TestName");
    lastName?.setValue("TestLast");
    email?.setValue("test@test.com");
    fixture.detectChanges();
    expect(btn["disabled"]).toBe(false);
    expect(getComputedStyle(btn).color).toEqual("rgb(255, 255, 255)");
    expect(getComputedStyle(btn).backgroundColor).toEqual("rgb(194, 24, 91)");
  });
});
