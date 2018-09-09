import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { ProfessorViewComponent } from './professor/professor-view/professor-view.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { UniversityViewComponent } from './university/university-view/university-view.component';
import { FlagListComponent } from './flag/flag-list/flag-list.component';
import { FlagComponent } from './flag/flag.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomePageComponent } from './static-pages/welcome-page/welcome-page.component';
import { AboutPageComponent } from './static-pages/about-page/about-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { DatabaseService } from './services/database.service';
import { FakeDatabaseService } from './services/fake-database.service';
import { ReviewFormComponent } from './review/review-form/review-form.component';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService }  from './services/in-memory-review-api.service';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ProfessorViewComponent,
    ProfessorListComponent,
    UniversityViewComponent,
    FlagListComponent,
    FlagComponent,
    NavbarComponent,
    WelcomePageComponent,
    AboutPageComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [{provide: DatabaseService,
      useClass: FakeDatabaseService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
