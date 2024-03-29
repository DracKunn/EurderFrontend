import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  _year: number;

  constructor() {
    this._year = new Date(Date.now()).getFullYear();
  }

  ngOnInit(): void {
  }

  get year(): number {
    return this._year;
  }
}
