import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "src/app/app.component";
import { CommonForms } from "src/app/forms/commonForms";
import { PoliticsForm } from "src/app/forms/politics";
import { ProfileForm } from "src/app/forms/profile";
import { HomeBeMindComponent } from "../../home-be-mind.component";
import { FirstNameComponent } from "../../profile/name/name.component";

import { PoliticsComponent } from "./politics.component";

describe("HomeBeMindComponent", () => {
  let component: PoliticsComponent;
  let fixture: ComponentFixture<PoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
      ],
      declarations: [
        PoliticsComponent,
        HomeBeMindComponent,
        FirstNameComponent,
      ],
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
    fixture = TestBed.createComponent(PoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Politics componenet should be created", () => {
    expect(component).toBeTruthy();
  });
});
