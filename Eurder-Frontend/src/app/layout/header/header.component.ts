import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _title: string;

  constructor() {
    this._title = 'Örder'
  }

  ngOnInit(): void {
  }

  get title(): string {
    return this._title;
  }

}
