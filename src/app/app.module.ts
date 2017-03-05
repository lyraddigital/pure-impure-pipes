import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomJsonPipe } from './custom-json.pipe';
import { PlayerOnlyPipe } from './player-only.pipe';
import { PlayerOnlyImpurePipe } from './player-only-impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomJsonPipe,
    PlayerOnlyPipe,
    PlayerOnlyImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
