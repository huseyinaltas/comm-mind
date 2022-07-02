import { TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { CommonForms } from "./forms/commonForms";
import { PoliticsForm } from "./forms/politics";
import { ProfileForm } from "./forms/profile";
import { HomeBeMindComponent } from "./home-be-mind/home-be-mind.component";
import { FirstNameComponent } from "./home-be-mind/profile/name/name.component";

describe("AppComponent", () => {
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

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
