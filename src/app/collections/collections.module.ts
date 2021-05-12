import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
  // For a component inside this module to be accessible to other modules
  // it needs to be exported first.
  // In this case, we are using routing. Check collections-routing.module.ts
  exports: [],
})
export class CollectionsModule {}
