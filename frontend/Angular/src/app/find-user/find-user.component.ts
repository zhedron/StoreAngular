import {Component, OnInit} from '@angular/core';
import {StoreService} from "../store.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "../Store";

@Component({
  selector: 'app-find-user',
  standalone: true,
  imports: [],
  providers: [StoreService],
  templateUrl: './find-user.component.html',
  styleUrl: './find-user.component.css'
})
export class FindUserComponent implements OnInit{
  id: number = 0;

  store: Store | undefined;

  constructor(private storeService: StoreService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.storeService.findUser(this.id).subscribe(result => {
      this.store = result;
      console.log(result);
    })
  }

  delete () {
    this.storeService.delete(this.id).subscribe(result => {
      console.log(result);
    })
  }
}
