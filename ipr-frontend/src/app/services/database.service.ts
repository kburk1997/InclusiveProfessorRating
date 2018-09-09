//import { Injectable } from '@angular/core';
import { University } from '../university/university';
import { Professor } from '../professor/professor';
import { Department } from '../data-objects/department';
import { Review } from '../review/review';
import { Flag } from '../flag/flag';
import { Observable } from 'rxjs/Observable';

//@Injectable()
export abstract class DatabaseService {

  abstract getUniversity(id: number): Observable<University>;
  abstract getProfessorsInUniversity(uni_id: number): Observable<Professor[]>;
  abstract getDepartment(id: number): Observable<Department>;
  abstract getProfessor(id: number): Observable<Professor>;
  abstract getReviewsForProfessor(prof_id: number): Observable<Review[]>;
  abstract getFlag(id: number): Observable<Flag>;
}
