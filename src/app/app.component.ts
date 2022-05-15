import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public isHideBeMind = true;
  public isHideHome = false;
  constructor(public router: Router) {}
  title = 'comm-mind';
  refreshPage() {
    window.location.reload();
  }
  ngOnInit(): void {
    this.isHideBeMind == false ? this.refreshPage() : this.isHideBeMind;
    this.isHideBeMind = true;
    this.router.navigateByUrl('/');
  }
}
