import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/constants';
import { LibraryService } from '../library-service';
import { data } from './data';

@Component({
  selector: 'app-library-tabs',
  templateUrl: './library-tabs.component.html',
  styleUrls: ['./library-tabs.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LibraryTabsComponent implements OnInit, OnDestroy {
  books: Book[] = data.books;
  currentlyReading: Book[] = [];
  finished: Book[] = [];
  private statusChanged: Subscription;
  private searchBook: Subscription;
  searchString: string = '';

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    for (let book of this.books) {
      if (book.finished) {
        this.finished.push(book);
      } else {
        this.currentlyReading.push(book);
      }
    }

    this.statusChanged = this.libraryService.changeStatus.subscribe((id) => {
      for (let book of this.books) {
        if (book.id === id) {
          book.finished = !book.finished;
        }
      }
      this.currentlyReading = [];
      this.finished = [];

      for (let book of this.books) {
        if (book.finished) {
          this.finished.push(book);
        } else {
          this.currentlyReading.push(book);
        }
      }
    });

    this.searchBook = this.libraryService.searchBooks.subscribe((search) => {
      console.log(search);
      this.searchString = search;
    });
  }

  ngOnDestroy(): void {
    this.statusChanged.unsubscribe();
    this.searchBook.unsubscribe();
  }
}
