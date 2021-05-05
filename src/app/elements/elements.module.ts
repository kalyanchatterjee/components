import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [CommonModule, ElementsRoutingModule],
  // For a component inside this module to be accessible to other modules
  // it needs to be exported first.
  // In this case, we are using routing - check elements-routing.module.ts
  exports: [],
})
export class ElementsModule {}
