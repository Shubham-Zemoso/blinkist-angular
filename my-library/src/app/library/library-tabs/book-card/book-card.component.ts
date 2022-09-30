import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book, book1, time, user } from 'src/app/constants';
import { LibraryService } from '../../library-service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  bookImg: string;
  user: string;
  time: string;

  constructor( private libraryService : LibraryService) {
    this.bookImg = book1;
    this.user = user;
    this.time = time;
  }

  ngOnInit(): void {}

  onclick(id: string) {

    this.libraryService.changeStatus.next(id);

  }
}
