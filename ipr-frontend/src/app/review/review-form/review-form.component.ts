import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review';
import { DatabaseService } from '../../services/database.service';
import { Flag } from '../../flag/flag';
import { Professor } from '../../professor/professor';
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Input() professor: Professor;
  // todo get rid of hardcoding
  len: number;

  review: Review;

  redFlags: Flag[];
  greenFlags: Flag[];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.len = 5;
    this.review = new Review();
    this.getFlags();
  }

  getFlags(): void{
    this.dbService.getRedFlags().subscribe(flags => this.redFlags = flags);
    this.dbService.getGreenFlags().subscribe(flags => this.greenFlags = flags);
  }

  submit(): void{
    // get professor
    this.review.id = this.len;
    this.len++;
    this.review.professorId = this.professor.id;
    this.professor.numRatings++;
    console.log(this.review);
    this.dbService.addReview(this.review);
  }

}
