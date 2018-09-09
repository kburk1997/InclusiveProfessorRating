import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Flag } from './flag';
@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  @Input() flagId: number;

  flag: Flag;
  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.getFlag();
  }

  getFlag(): void{
    this.dbService.getFlag(this.flagId)
      .subscribe(flag => this.flag = flag);
  }
}
