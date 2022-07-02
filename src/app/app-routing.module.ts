import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeBeMindComponent } from "./home-be-mind/home-be-mind.component";
import { HomeNeedMindComponent } from "./home-need-mind/home-need-mind.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "beMind", component: HomeBeMindComponent },
  { path: "needMind", component: HomeNeedMindComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
