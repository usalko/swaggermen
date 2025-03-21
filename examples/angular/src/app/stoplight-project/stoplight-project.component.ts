import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: './swaggermen-project.component.html',
})
export class SwaggermenProjectComponent {
  projectId = 'cHJqOjYwNjYx';
  platformUrl = 'https://swaggermen.io';
  basePath = environment.basePath ? `${environment.basePath}/swaggermen-project` : 'swaggermen-project';
  router = 'history';
}
