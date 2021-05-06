import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wysiwyg-home',
  templateUrl: './wysiwyg-home.component.html',
  styleUrls: ['./wysiwyg-home.component.css'],
})
export class WysiwygHomeComponent implements OnInit {
  model = {
    editorData:
      '<p>This is some <strong><em>formatted</em></strong> text!</p><h1>More formatting ... Hola!</h1><div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Even more formatting ...&nbsp;</div>',
  };
  constructor() {}

  ngOnInit(): void {}

  saveData() {
    console.log(this.model.editorData);
  }
}
