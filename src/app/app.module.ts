import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ToolBarComponent } from "./tool-bar/tool-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { HomeBeMindComponent } from "./home-be-mind/home-be-mind.component";
import { HomeNeedMindComponent } from "./home-need-mind/home-need-mind.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FirstNameComponent } from "./home-be-mind/profile/name/name.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AddressComponent } from "./home-be-mind/profile/address/address.component";
import { MatSelectModule } from "@angular/material/select";
import { MindSetComponent } from "./home-be-mind/profile/mind-set/mind-set.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { PoliticsComponent } from "./home-be-mind/mindSetDetails/politics/politics.component";
import { SportComponent } from "./home-be-mind/mindSetDetails/sport/sport.component";
import { FooterComponent } from "./footer/footer.component";
import { PoliticsForm } from "./forms/politics";
import { ProfileForm } from "./forms/profile";
import { CommonForms } from "./forms/commonForms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolBarComponent,
    HomeBeMindComponent,
    HomeNeedMindComponent,
    AddressComponent,
    FirstNameComponent,
    MindSetComponent,
    PoliticsComponent,
    SportComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [PoliticsForm, ProfileForm, CommonForms],
  bootstrap: [AppComponent],
})
export class AppModule {}
