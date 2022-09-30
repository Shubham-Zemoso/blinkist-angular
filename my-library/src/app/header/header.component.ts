import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {
  avatar,
  career,
  communication,
  corporate,
  development,
  down,
  DropDownItem,
  economic,
  education,
  entrepreneurship,
  health,
  history,
  logo,
  marketing,
  motivation,
  nature,
  politics,
  productivity,
  psychology,
  relationship,
  science,
  wallet,
} from '../constants';
import { LibraryService } from '../library/library-service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  logo: string;
  down: string;
  avatar: string;
  search: string;
  show: boolean = false;
  logout: boolean = false;
  showDropdown: boolean = false;

  firstRow: DropDownItem[] = [
    {
      icon: entrepreneurship,
      label: 'Entrepreneurship',
    },
    {
      icon: science,
      label: 'Science',
    },
    {
      icon: economic,
      label: 'Economics',
    },
    {
      icon: corporate,
      label: 'Corporate Culture',
    },
    {
      icon: psychology,
      label: 'Psychology',
    },
    {
      icon: nature,
      label: 'Nature & Environment',
    },
  ];

  secondRow: DropDownItem[] = [
    {
      icon: politics,
      label: 'Politics',
    },
    {
      icon: health,
      label: 'Health & Nutrition',
    },
    {
      icon: history,
      label: 'History',
    },
    {
      icon: motivation,
      label: 'Motivation & Inspiration',
    },
    {
      icon: productivity,
      label: 'Productivity',
    },
    {
      icon: career,
      label: 'Career & Success',
    },
  ];
  thirdRow: DropDownItem[] = [
    {
      icon: marketing,
      label: 'Marketing & Sales',
    },
    {
      icon: development,
      label: 'Personal Development',
    },
    {
      icon: communication,
      label: 'Communication Skills',
    },
    {
      icon: wallet,
      label: 'Money & Investments',
    },
    {
      icon: relationship,
      label: 'Sex & Relationship',
    },
    {
      icon: education,
      label: 'Education',
    },
  ];

  constructor(
    private libraryService: LibraryService,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {
    this.logo = logo;
    this.down = down;
    this.avatar = avatar;
  }

  ngOnInit(): void {}

  onSearch() {
    this.show = !this.show;
  }

  onChange(search) {
    this.libraryService.searchBooks.next(search);
  }

  onLogout() {
    this.logout = !this.logout;
  }

  onExplore() {
    this.showDropdown = !this.showDropdown;
  }
}
