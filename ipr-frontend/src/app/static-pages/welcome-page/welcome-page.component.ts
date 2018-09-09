import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { University } from '../../university/university';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  universities: University[];
  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.dbService.getUniversities().subscribe(unis=> this.universities = unis);
  }

}
