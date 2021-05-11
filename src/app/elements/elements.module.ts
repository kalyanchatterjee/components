import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { CalloutComponent } from './callout/callout.component';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, CalloutComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  // For a component inside this module to be accessible to other modules
  // it needs to be exported first.
  // In this case, we are using routing - check elements-routing.module.ts
  exports: [],
})
export class ElementsModule {}
