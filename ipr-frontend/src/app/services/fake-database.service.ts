import { Injectable } from '@angular/core';
import {UNIVERSITIES, PROFESSORS, DEPARTMENTS, REVIEWS, FLAGS} from './mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {University} from '../university/university';
import {Professor} from '../professor/professor';
import { Department } from '../data-objects/department';
import { Review } from '../review/review';
import { Flag } from '../flag/flag';


@Injectable()
export class FakeDatabaseService {

  getUniversity(id: number): Observable<University>{
    return of(UNIVERSITIES.find(univ => univ.id === id));
  }

  getProfessorsInUniversity(uni_id: number): Observable<Professor[]>{
    return of(PROFESSORS.filter(prof => prof.universityId === uni_id));
  }

  getDepartment(id: number): Observable<Department>{
    return of(DEPARTMENTS.find(univ => univ.id === id));
  }
  getProfessor(id: number): Observable<Professor>{
    return of(PROFESSORS.find(univ => univ.id === id));
  }

  getReviewsForProfessor(prof_id: number): Observable<Review[]>{
    return of(REVIEWS.filter(review => review.professorId === prof_id));
  }

  getFlag(id: number): Observable<Flag>{
    return of(FLAGS.find(univ => univ.id === id));
  }
  getUniversities(): Observable<University[]>{
    return of(UNIVERSITIES);
  }

}
