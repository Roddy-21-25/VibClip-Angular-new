import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './Components/content/content.component';
import { HeaderComponent } from './Components/header/header.component';

// import { NavbarComponent } from '../Root_Components/navbar/navbar.component';
// import { FooterComponent } from '../Root_Components/footer/footer.component';

import { SharedModule } from '../Root_Components/shared/shared.module';

import { MidComponent } from './Components/mid/mid.component';
import { MidtwoComponent } from './Components/midtwo/midtwo.component';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    MidComponent,
    MidtwoComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
