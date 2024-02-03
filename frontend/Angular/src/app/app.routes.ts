import { Routes } from '@angular/router';
import {AllStoreComponent} from "./all-store/all-store.component";
import {CreateStoreComponent} from "./create-store/create-store.component";
import {UpdateStoreComponent} from "./update-store/update-store.component";
import {FindUserComponent} from "./find-user/find-user.component";

export const routes: Routes = [
  {path: "store", component: AllStoreComponent},
  {path: "store/createproduct", component: CreateStoreComponent},
  {path: "store/:id/update", component: UpdateStoreComponent},
  {path: "store/:id", component: FindUserComponent}
];
