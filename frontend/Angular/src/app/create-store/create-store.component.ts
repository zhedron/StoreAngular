import { Component } from '@angular/core';
import {Store} from "../Store";
import {StoreService} from "../store.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [
    FormsModule, HttpClientModule
  ],
  providers: [StoreService],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.css'
})
export class CreateStoreComponent {
  store: Store = new Store();

  constructor(private storeService: StoreService, private router: Router) {
  }

  createproduct() {

    this.storeService.createStore(this.store).subscribe(data => {
      console.log(data);
      this.router.navigate(["/store"]);
    });
  }
}
