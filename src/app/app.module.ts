import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { CardItemComponent } from './core/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    HotelComponent,
    CardItemComponent,
   
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
      ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
