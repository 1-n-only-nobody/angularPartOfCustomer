import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { DriverComponent } from './driver/driver.component';
import { RatingFilterPipe } from './rating-filter.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ParentComponent } from './parent/parent.component';
import { HeaderParentComponent } from './header-parent/header-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DriverComponent,
    RatingFilterPipe,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ParentComponent,
    HeaderParentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
