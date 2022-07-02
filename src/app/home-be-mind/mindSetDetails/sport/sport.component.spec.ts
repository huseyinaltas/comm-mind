import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "src/app/app.component";
import { CommonForms } from "src/app/forms/commonForms";
import { PoliticsForm } from "src/app/forms/politics";
import { ProfileForm } from "src/app/forms/profile";
import { HomeBeMindComponent } from "../../home-be-mind.component";
import { FirstNameComponent } from "../../profile/name/name.component";

import { SportComponent } from "./sport.component";

describe("SportComponent", () => {
  let component: SportComponent;
  let fixture: ComponentFixture<SportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, MatButtonModule],
      declarations: [SportComponent, HomeBeMindComponent, FirstNameComponent],
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
    fixture = TestBed.createComponent(SportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
