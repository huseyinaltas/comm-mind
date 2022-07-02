import { Component, HostListener, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as uuid from "uuid";
import { ProfileForm } from "./forms/profile";
import { PoliticsForm } from "./forms/politics";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public isHideBeMind = true;
  public isHideHome = false;
  public pmId = uuid.v4();
  public myStyle: any;
  title = "comm-mind";

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public politicsFormFile: PoliticsForm,
    public profileFormFile: ProfileForm
  ) {}

  refreshPage() {
    window.location.reload();
  }
  ngOnInit(): void {
    this.isHideBeMind == false ? this.refreshPage() : this.isHideBeMind;
    this.isHideBeMind = true;
    this.router.navigateByUrl("/");
    this.myStyle = {
      width: innerWidth + "px",
      height: innerHeight - 150 + "px",
      overflow: "scroll",
    };
  }

  politicsForm = this.politicsFormFile.politicsForm;
  profileForm = this.profileFormFile.profileForm;

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    var innerWidth = 100;
    var innerHeight = 200;
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
    this.myStyle = {
      width: innerWidth + "px",
      height: innerHeight - 150 + "px",
      overflow: "scroll",

      // ...
    };
  }
}
