import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "../app.component";
import { CommonForms } from "../forms/commonForms";
import { PoliticsForm } from "../forms/politics";
import { ProfileForm } from "../forms/profile";
import { HomeBeMindComponent } from "../home-be-mind/home-be-mind.component";
import { AddressComponent } from "../home-be-mind/profile/address/address.component";
import { FirstNameComponent } from "../home-be-mind/profile/name/name.component";
import { MindSetComponent } from "../home-be-mind/profile/mind-set/mind-set.component";

import { ToolBarComponent } from "./tool-bar.component";

describe("ToolBarComponent", () => {
  let component: ToolBarComponent;
  let fixture: ComponentFixture<ToolBarComponent>;

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
        MatButtonToggleModule,
      ],
      declarations: [
        MindSetComponent,
        AddressComponent,
        HomeBeMindComponent,
        FirstNameComponent,
        ToolBarComponent,
      ],
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
    fixture = TestBed.createComponent(ToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Tool Bar componenet should be created", () => {
    expect(component).toBeTruthy();
  });
});
