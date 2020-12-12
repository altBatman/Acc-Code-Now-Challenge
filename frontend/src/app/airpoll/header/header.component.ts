import { Component, OnInit } from '@angular/core';
import { AirDataService } from 'src/app/shared/services/air-data.service';

@Component({
  selector: 'airpoll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public message;
  constructor(private airDataService: AirDataService) { }

  ngOnInit(): void {
    this.airDataService.getairdata().subscribe((data)=>{
      this.message = data.length;
    }, (error)=>{
      console.log(error);
      this.message = error.message;
    });
  }

}
