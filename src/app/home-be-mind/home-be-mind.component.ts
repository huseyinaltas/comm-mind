import {
  Component,
  HostListener,
  Injectable,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { MindSetComponent } from "./profile/mind-set/mind-set.component";
import { PoliticsComponent } from "./mindSetDetails/politics/politics.component";
import { AppComponent } from "../app.component";
import * as uuid from "uuid";
import { MatStepper } from "@angular/material/stepper";
import { FirstNameComponent } from "./profile/name/name.component";

@Component({
  selector: "app-home-be-mind",
  templateUrl: "./home-be-mind.component.html",
  styleUrls: ["./home-be-mind.component.css"],
})
@Injectable({ providedIn: "root" })
export class HomeBeMindComponent implements OnInit {
  public showMindSetDetails = false;
  public allMindSets = "";
  public allMSetArray = [""];
  public mindSetComp = new MindSetComponent(this, this.appComponent);
  public isLinear = true;
  public nameSubmit: boolean = false;
  public pmId = uuid.v4();
  public showMindSetDetailsHeader = false;
  public fName = "";
  public lName = "";

  @ViewChild("stepperMindDetails")
  private myStepper: MatStepper | undefined;
  nextMindDetails() {
    this.myStepper!.next();
  }
  @ViewChild(FirstNameComponent) firstNameComponent!: FirstNameComponent;
  ngAfterViewInit() {
    this.firstNameComponent.fName = this.fName;
    this.firstNameComponent.lName = this.lName;
  }

  get aliases() {
    return this.appComponent.profileForm.get("aliases") as FormArray;
  }
  get mindSets() {
    return this.appComponent.profileForm.get("mindSets") as FormArray;
  }

  constructor(public fb: FormBuilder, public appComponent: AppComponent) {}

  updateProfile() {
    this.appComponent.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street",
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }

  onSubmit() {
    console.warn(this.appComponent.profileForm.value);
  }
  onStepChange(event: any): void {
    if (event.selectedIndex == 0) {
      this.showMindSetDetailsHeader = false;
    } else if (event.selectedIndex == 1) {
      this.showMindSetDetailsHeader = true;
    }
  }

  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    var innerWidth = 100;
    var innerHeight = 200;
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
    this.appComponent.myStyle = {
      width: innerWidth + "px",
      height: innerHeight - 150 + "px",
      overflow: "scroll",
    };
  }
}
