import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Step 1 (for Routing) - import the components which gets routed to
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
