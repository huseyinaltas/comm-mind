import { Component, OnInit } from "@angular/core";
import { HomeBeMindComponent } from "../../home-be-mind.component";
import { AppComponent } from "../../../app.component";
import { states } from "../../../all-data/states";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css", "../../../../styles.css"],
})
export class AddressComponent implements OnInit {
  states = states;

  constructor(
    public homeBeMind: HomeBeMindComponent,
    public appComponent: AppComponent
  ) {}
  ngOnInit(): void {}
}
