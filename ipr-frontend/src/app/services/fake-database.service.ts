import { Injectable } from '@angular/core';
import {UNIVERSITIES, PROFESSORS, DEPARTMENTS, REVIEWS, FLAGS} from './mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {University} from '../university/university';
import {Professor} from '../professor/professor';
import { Department } from '../data-objects/department';
import { Review } from '../review/review';
import { Flag } from '../flag/flag';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FakeDatabaseService {

  constructor(private http: HttpClient){}

  private reviewsUrl = 'api/reviews';

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
    return this.http.get<Review[]>(this.reviewsUrl).
      map(reviews =>{
        const results= reviews.filter(review => review.professorId === prof_id )
        return results;
      });
  }

  getFlag(id: number): Observable<Flag>{
    return of(FLAGS.find(univ => univ.id === id));
  }
  getUniversities(): Observable<University[]>{
    return of(UNIVERSITIES);
  }

  getRedFlags(): Observable<Flag[]>{
    return of(FLAGS.filter(flag=> flag.red === true));
  }

  getGreenFlags(): Observable<Flag[]>{
    return of(FLAGS.filter(flag=> flag.red === false));
  }

  addReview(review: Review): Observable<any>{
    return this.http.post<Review>(this.reviewsUrl, review, httpOptions);
    //REVIEWS.push(review);
  }
}
