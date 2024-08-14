import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initTyped();
    }
  }

  private initTyped(): void {
    const options = {
      strings: ['Designer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    };

    new Typed('#typed-text', options);
  }
}
