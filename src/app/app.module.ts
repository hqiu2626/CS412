import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormsModule} from '@angular/forms';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
