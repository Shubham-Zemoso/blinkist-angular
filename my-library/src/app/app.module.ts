import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SearchComponent } from './header/Search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryComponent } from './library/library.component';
import { LibraryTabsComponent } from './library/library-tabs/library-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BookCardComponent } from './library/library-tabs/book-card/book-card.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './library/library-tabs/search.pipe';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LibraryComponent,
    LibraryTabsComponent,
    BookCardComponent,
    FooterComponent,
    SearchPipe,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    FormsModule,
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientID,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
