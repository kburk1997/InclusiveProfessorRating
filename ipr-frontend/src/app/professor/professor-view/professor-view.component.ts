import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../professor';
import {Department} from '../../data-objects/department';
import {University} from '../../university/university';
import {Review} from '../../review/review';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-professor-view',
  templateUrl: './professor-view.component.html',
  styleUrls: ['./professor-view.component.css']
})
export class ProfessorViewComponent implements OnInit {

  professor: Professor;
  department: Department;
  university: University;
  reviews: Review[];

  constructor(private route: ActivatedRoute,
    private dbService: DatabaseService) { }

  ngOnInit() {
    this.getProfessor();
  }

    getProfessor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dbService.getProfessor(id)
      .subscribe(professor => {
        this.professor = professor;
        this.getDept();
      });

  }

  getDept(): void {
    this.dbService.getDepartment(this.professor.departmentId)
      .subscribe(dept=>{this.department=dept
         this.getUniversity();
      });
  }

  getUniversity(): void{
    this.dbService.getUniversity(this.professor.universityId)
      .subscribe(uni => {this.university = uni;
        this.getReviews();})
  }

  getReviews(): void {
    this.dbService.getReviewsForProfessor(this.professor.id)
      .subscribe(reviews => this.reviews = reviews);
  }
}
