import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {CarPlatesCarPlatesListModule} from '@danske-task/car-plates/car-plates-list';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CarPlatesCarPlatesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
