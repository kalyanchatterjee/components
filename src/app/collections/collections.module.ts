import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [CommonModule, CollectionsRoutingModule],
  // For a component inside this module to be accessible to other modules
  // it needs to be exported first.
  // In this case, we are using routing. Check collections-routing.module.ts
  exports: [],
})
export class CollectionsModule {}
