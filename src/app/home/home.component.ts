import { Component, OnInit } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, public appComponent: AppComponent) {}

  ngOnInit() {
    this.refreshOnBackButtonClick();
  }

  refreshOnBackButtonClick(): void {
    this.router.events.subscribe((event: any) => {
      if (event.navigationTrigger === "popstate") {
        this.appComponent.isHideBeMind = true;
        window.location.reload();
      }
    });
  }

  ngAfterContentInit(): void {}
}
