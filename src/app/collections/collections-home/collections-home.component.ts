import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', started: '2020-12-14' },
    { name: 'Jill', age: 26, job: 'Engineer', started: '2015-10-16' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'started', label: 'Started' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
