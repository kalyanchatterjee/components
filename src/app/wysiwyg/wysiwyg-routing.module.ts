import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WysiwygHomeComponent } from './wysiwyg-home/wysiwyg-home.component';

const routes: Routes = [
  {
    path: 'wysiwyg',
    component: WysiwygHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WysiwygRoutingModule {}
