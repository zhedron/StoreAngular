import {Component, OnInit} from '@angular/core';
import {Store} from "../Store";
import {StoreService} from "../store.service";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-store',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [StoreService],
  templateUrl: './update-store.component.html',
  styleUrl: './update-store.component.css'
})
export class UpdateStoreComponent implements OnInit{
  id: number = 0;

  store: Store = new Store();

  constructor(private storeService: StoreService, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  update () {
    this.id = this.route.snapshot.params["id"];

    this.storeService.update(this.id, this.store).subscribe(update => {
      this.store = update;
    });
  }
}
