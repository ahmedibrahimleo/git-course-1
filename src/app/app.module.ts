import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruncatePipe } from './truncate.pipe';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TryComponent } from './try/try.component';
import { ChangeCocolrDirective } from './change-cocolr.directive';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    ChildComponent,
    ParentComponent,
    TryComponent,
    ChangeCocolrDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
