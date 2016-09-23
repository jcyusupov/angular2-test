import { Component } from '@angular/core';
import { ApiService } from '../../shared';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  item = {};

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    route.params.forEach((params: Params) => {
      let id = +params['id'];

      this.item = Object.assign({}, api.items.filter((i) => i.id === id)[0]);
    });
  }

  save() {
    this.api.save(this.item);
    this.router.navigate(['photos']);
  }
}
