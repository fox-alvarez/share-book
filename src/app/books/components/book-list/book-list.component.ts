import { Component, OnInit } from '@angular/core';

// Models
import { IBook } from '../../models/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];

  constructor() {
    const newBookS: IBook[] = [{
      name: 'Brújula...',
      author: 'Diana Uribe',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs-E7SvsMUWxDH06wyfr9JkRkhxVFoATm3yQ&usqp=CAU',
    },{
      name: 'Narraciones...',
      author: 'Edgar Allan Poe',
      imageUrl:
        'https://panamericana.vteximg.com.br/arquivos/ids/348888-1600-1600/narraciones-extraordinarias.png?v=637188622698700000',
    },{
      name: 'Brújula...',
      author: 'Diana Uribe',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs-E7SvsMUWxDH06wyfr9JkRkhxVFoATm3yQ&usqp=CAU',
    },{
      name: 'Narraciones...',
      author: 'Edgar Allan Poe',
      imageUrl:
        'https://panamericana.vteximg.com.br/arquivos/ids/348888-1600-1600/narraciones-extraordinarias.png?v=637188622698700000',
    },
    {
      name: 'Narraciones...',
      author: 'Edgar Allan Poe',
      imageUrl:
        'https://panamericana.vteximg.com.br/arquivos/ids/348888-1600-1600/narraciones-extraordinarias.png?v=637188622698700000',
    },{
      name: 'Brújula...',
      author: 'Diana Uribe',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs-E7SvsMUWxDH06wyfr9JkRkhxVFoATm3yQ&usqp=CAU',
    },{
      name: 'Narraciones...',
      author: 'Edgar Allan Poe',
      imageUrl:
        'https://panamericana.vteximg.com.br/arquivos/ids/348888-1600-1600/narraciones-extraordinarias.png?v=637188622698700000',
    },{
      name: 'Brújula...',
      author: 'Diana Uribe',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs-E7SvsMUWxDH06wyfr9JkRkhxVFoATm3yQ&usqp=CAU',
    }
  ];
    this.bookList = [...this.bookList, ...newBookS];
  }

  ngOnInit(): void {}

  addNewBook(book: IBook) {
    this.bookList = [...this.bookList, book];
    console.log(this.bookList);
  }
}
