import { Component, OnInit } from '@angular/core';
import { logo } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  logo: string;
  constructor() {
    this.logo = logo
  }

  ngOnInit(): void {}
}
