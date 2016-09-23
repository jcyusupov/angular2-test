import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent},
  { path: 'photo/:id', component: PhotoComponent },
];

export const routing = RouterModule.forRoot(routes);
