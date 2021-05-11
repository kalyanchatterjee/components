import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() header = false;
  @Input() lines = 1;
  constructor() {}

  ngOnInit(): void {
    console.log(this.header);
  }
}
