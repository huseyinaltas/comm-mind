import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HomeBeMindComponent } from "../home-be-mind/home-be-mind.component";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  // constructor() {}
  constructor(
    public homeBeMind: HomeBeMindComponent,
    public appComponent: AppComponent
  ) {}

  ngOnInit(): void {}
}
