import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApiComponent } from './api/api.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SwaggermenProjectComponent } from './swaggermen-project/swaggermen-project.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SwaggermenProjectComponent, ApiComponent],
  imports: [BrowserModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
