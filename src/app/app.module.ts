import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/MyNavbar/navbar.component';
import { SliderComponent } from './components/MySlider/slider.component';
import { MainComponent } from './components/MyMainContent/main.component';
import { ProudctsComponent } from './components/MyProudcts/proudcts.component';
import { FooterComponent } from './components/MyFooter/footer.component';
import { AboutComponent } from './components/MyAboutSection/about.component';
import { ProudctComponent } from './components/MyProuduct/proudct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    MainComponent,
    ProudctsComponent,
    FooterComponent,
    AboutComponent,
    ProudctComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
