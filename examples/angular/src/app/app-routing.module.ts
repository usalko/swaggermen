import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiComponent } from './api/api.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SwaggermenProjectComponent } from './swaggermen-project/swaggermen-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'swaggermen-project',
    component: SwaggermenProjectComponent,
    children: [{ path: '**', component: SwaggermenProjectComponent }],
  },
  {
    path: 'zoom-api',
    component: ApiComponent,
    children: [{ path: '**', component: ApiComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
