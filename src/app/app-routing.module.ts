import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { BookCreateComponent } from "./books/components/book-create/book-create.component"; 
import { BookListComponent } from "./books/components/book-list/book-list.component"; 
import { BookDetailComponent } from "./books/components/book-detail/book-detail.component";
const routes: Routes = [
  { path: '', component: BookListComponent},
  { path: 'create', component: BookCreateComponent},
  { path: 'detail', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
