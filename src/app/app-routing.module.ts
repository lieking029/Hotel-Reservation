import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { EditComponent } from './pages/edit/edit.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component:HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'hotel', component:HotelComponent },
  { path: 'reservations', component:ReservationsComponent },
  { path: 'edit', component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
