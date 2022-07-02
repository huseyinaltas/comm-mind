import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "src/app/app.component";
import { CommonForms } from "src/app/forms/commonForms";
import { PoliticsForm } from "src/app/forms/politics";
import { ProfileForm } from "src/app/forms/profile";
import { HomeBeMindComponent } from "../../home-be-mind.component";
import { FirstNameComponent } from "../name/name.component";

import { AddressComponent } from "./address.component";

describe("AddressComponent", () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [AddressComponent, HomeBeMindComponent, FirstNameComponent],
      providers: [
        FormBuilder,
        AppComponent,
        PoliticsForm,
        ProfileForm,
        CommonForms,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Address componenet should be created", () => {
    expect(component).toBeTruthy();
  });
});
