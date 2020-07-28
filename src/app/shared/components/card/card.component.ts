import { Component, OnInit, Input } from '@angular/core';
// Models
import { IBook } from '../../../books/models/book.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() book: IBook;
  constructor() { }

  ngOnInit(): void {
    console.log(this.book);
  }

}
