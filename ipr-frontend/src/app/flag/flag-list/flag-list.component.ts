import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.css']
})
export class FlagListComponent implements OnInit {
  @Input() flags: number[];
  constructor() { }

  ngOnInit() {
  }

}
