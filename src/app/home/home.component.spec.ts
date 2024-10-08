import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "../app.component";
import { CommonForms } from "../forms/commonForms";
import { PoliticsForm } from "../forms/politics";
import { ProfileForm } from "../forms/profile";
import { HomeBeMindComponent } from "../home-be-mind/home-be-mind.component";
import { FirstNameComponent } from "../home-be-mind/profile/name/name.component";

import { HomeComponent } from "./home.component";

describe("HomeBeMindComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, MatButtonModule],
      declarations: [HomeComponent, HomeBeMindComponent, FirstNameComponent],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Home componenet should be created", () => {
    expect(component).toBeTruthy();
  });
});
