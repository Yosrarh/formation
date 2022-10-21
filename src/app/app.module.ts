import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/components/contact/contact.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchComponent } from './components/match/match.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ContacteComponent,
    LoginComponent,
    SignupComponent,
    AddmatchComponent,
    AdminComponent,
    CartComponent,
    AddplayersComponent,
    MatchesComponent,
    BannerComponent,
    MatchComponent,
    FilterPipe,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
