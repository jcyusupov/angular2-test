import { Component } from '@angular/core';
import { ApiService } from '../shared';
import { Router } from "@angular/router";

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  items = [];
  filteredItems = [];
  filter = {
    name: '',
    author: ''
  };

  constructor(private api: ApiService, private router: Router) {
    this.items = api.items;
    this.filteredItems = this.items;
  }

  changeFilter() {
    this.filteredItems = this.items.filter((i) =>
      i.name.toLowerCase().includes(this.filter.name.toLowerCase()) &&
      i.author.toLowerCase().includes(this.filter.author.toLowerCase()));
  };

  clickRow(id) {
    this.router.navigate(['photo', id]);
  }

}
