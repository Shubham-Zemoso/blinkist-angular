import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  changeStatus = new Subject<string>();

  searchBooks = new Subject<string>();
}
