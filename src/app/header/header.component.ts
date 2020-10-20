import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() logo: string;
  @Input() heading: string;

  menus = [];
  constructor() {
    this.menus = [
      {linkRef: 'home', linkText: 'Home'},
      {linkRef: 'page1', linkText: 'Page 1'},
      {linkRef: 'page2', linkText: 'Page 2'},
      {linkRef: 'page3', linkText: 'Page 3'},
      {linkRef: 'page4', linkText: 'Page 4'},
    ]
  }

  ngOnInit() {
  }

}
