import {Component, OnInit} from '@angular/core';
import {Store} from "../Store";
import {StoreService} from "../store.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-all-store',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [StoreService],
  templateUrl: './all-store.component.html',
  styleUrl: './all-store.component.css'
})
export class AllStoreComponent implements OnInit{
  store: Store[] = [];
  isSortAsc = true;
  isSortDesc = true;
  inputValue: string = "";

  originalStore: Store[] = [];

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.storeService.allstore().subscribe((stores: any) => {
      this.originalStore = [...stores];
      this.store = this.originalStore;
    });
  }

  sortAsc () {
    if (this.isSortAsc) {
      this.store = this.store.sort((a, b) => a.price - b.price);
    }
  }

  sortDesc () {
    if (this.isSortDesc) {
      this.store = this.store.sort((a, b) => b.price - a.price);
    }
  }

  trackById (index: number, item: Store): number {
    return item.id;
  }

  filterByName() {
    this.store = this.originalStore.filter(filter => filter.productName.includes(this.inputValue));
      console.log(this.store);
      this.inputValue = "";
  }
}
