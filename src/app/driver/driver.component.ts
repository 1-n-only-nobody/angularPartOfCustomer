import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driverList: Driver[];

  userLocation = '';

  tempDriver: Driver = {
    driverId : 0,
    firstName : '',
    lastName : '',
    driverEmail : '',
    driverPhoneNumber : 0,
    location : '',
    rating : 0
  };

  constructor(private service: DriverService) { }

  ngOnInit() {
    this.service.findAll().subscribe( data => this.driverList = data);
  }

}
