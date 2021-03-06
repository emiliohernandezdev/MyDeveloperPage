import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeModule } from './components/about-me/about-me.module';
import { ServicesModule } from './components/services/services.module';
import { NotFoundModule } from './components/not-found/not-found.module';
import { BodyModule } from './components/body/body.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeModule,
    ServicesModule,
    NotFoundModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
