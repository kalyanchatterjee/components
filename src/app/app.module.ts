import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Going to lazy load these module
// import { ElementsModule } from './elements/elements.module';
// import { CollectionsModule } from './collections/collections.module';
import { WysiwygModule } from './wysiwyg/wysiwyg.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  // https://www.udemy.com/course/the-modern-angular-bootcamp/learn/lecture/17674180#questions
  // (order of the imports matter when it comes to routing.)
  imports: [
    BrowserModule,
    // ElementsModule,
    // CollectionsModule,
    WysiwygModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
