import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent}
];

export const routing = RouterModule.forRoot(routes);
