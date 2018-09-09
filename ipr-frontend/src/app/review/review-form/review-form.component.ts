import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { DatabaseService } from '../../services/database.service';
import { Flag } from '../../flag/flag';
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  review: Review;

  redFlags: Flag[];
  greenFlags: Flag[];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.review = new Review();
    this.getFlags();
  }

  getFlags(): void{
    this.dbService.getRedFlags().subscribe(flags => this.redFlags = flags);
    this.dbService.getGreenFlags().subscribe(flags => this.greenFlags = flags);
  }

  submit(): void{
    this.dbService.addReview(this.review);
  }

}
