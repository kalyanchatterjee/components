import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WysiwygRoutingModule } from './wysiwyg-routing.module';
import { WysiwygHomeComponent } from './wysiwyg-home/wysiwyg-home.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [WysiwygHomeComponent],
  imports: [CommonModule, FormsModule, WysiwygRoutingModule, CKEditorModule],
})
export class WysiwygModule {}
