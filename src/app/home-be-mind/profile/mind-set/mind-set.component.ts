import { Component, OnInit } from "@angular/core";
import { HomeBeMindComponent } from "../../home-be-mind.component";
import { AppComponent } from "../../../app.component";

@Component({
  selector: "app-mind-set",
  templateUrl: "./mind-set.component.html",
  styleUrls: ["./mind-set.component.css", "../../../../styles.css"],
})
export class MindSetComponent implements OnInit {
  madeArrayMindSets() {
    this.homeBeMind.mindSets.clear();
    this.homeBeMind.allMSetArray = this.homeBeMind.allMindSets
      .split(",")
      .filter((i) => i.length > 0);
    this.homeBeMind.allMSetArray.map((i) =>
      this.homeBeMind.mindSets.push(this.homeBeMind.fb.control(i))
    );
  }

  constructor(
    public homeBeMind: HomeBeMindComponent,
    public appComponent: AppComponent
  ) {}
  ngOnInit(): void {}
}
