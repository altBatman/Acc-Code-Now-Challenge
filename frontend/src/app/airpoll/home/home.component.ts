import { Component, OnInit } from '@angular/core';
import { isSmallBreakpoint } from 'src/app/shared/utils/breakpoint';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'airpoll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isSmallBreakpoint= isSmallBreakpoint();
  showData = false;
  public faWindowClose = faWindowClose;
  constructor() { }

  ngOnInit(): void {
  }

  openData(): void{
    this.showData = true;
  }

  closeData(): void {
    this.showData= false;
  }
}
