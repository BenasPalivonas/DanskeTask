import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {SharedUiModule} from '@danske-task/shared-ui';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedUiModule,
   // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
