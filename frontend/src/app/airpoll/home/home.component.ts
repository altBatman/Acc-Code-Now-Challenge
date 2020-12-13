import { Component, OnInit } from '@angular/core';
import { isSmallBreakpoint } from 'src/app/shared/utils/breakpoint';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'airpoll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isSmallBreakpoint= isSmallBreakpoint();
  public closeData = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleData(): void{
    this.closeData = !this.closeData;
  }

}
