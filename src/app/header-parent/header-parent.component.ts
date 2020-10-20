import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-parent',
  templateUrl: './header-parent.component.html',
  styleUrls: ['./header-parent.component.css']
})
export class HeaderParentComponent implements OnInit {

  logo = '../assets/images/testImage.jpg';
  heading = 'Customer Driver Application';

  constructor() { }

  ngOnInit() {
  }

}
