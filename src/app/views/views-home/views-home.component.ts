import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  data: any[] = [
    { value: 22, label: 'Faves' },
    { value: 31200, label: 'Views' },
    { value: 22, label: 'Members' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
