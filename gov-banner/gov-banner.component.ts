import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gov-banner',
  templateUrl: './gov-banner.component.html',
  styleUrls: ['./gov-banner.component.scss']
})
export class GovBannerComponent implements OnInit {

  expandBanner: Boolean = false;

  constructor() { 
    // private expandBanner: Boolean;
  }

  ngOnInit(): void {
  }

  toggleBanner() {
    if (!this.expandBanner){
      this.expandBanner = true;
    } else {
      this.expandBanner = false;
    }
  }

}
