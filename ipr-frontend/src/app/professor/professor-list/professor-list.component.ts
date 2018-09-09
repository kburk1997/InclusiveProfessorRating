import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { Professor } from '../professor';
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  private _universityId;
  @Input()
  set universityId(id: number){
    this._universityId = id;
    if(this._universityId !== -1){
      this.dbService.getProfessorsInUniversity(this._universityId)
      .subscribe(professors => this.professors = professors);
    }
  }

  get universityId(): number {return this._universityId;}
  professors: Professor[];
  deptNames: Object;
  constructor(private route: ActivatedRoute, private dbService: DatabaseService) { }

  ngOnInit() {
    // get profs by uni id
    this.dbService.getProfessorsInUniversity(this._universityId)
      .subscribe(professors => {
        this.professors = professors;
        this.deptNames = [];
        this.professors.forEach(professor => {
          this.dbService.getDepartment(professor.departmentId)
            .subscribe(dept => this.deptNames[professor.id] = dept.name);
        });
      });
  }

}
