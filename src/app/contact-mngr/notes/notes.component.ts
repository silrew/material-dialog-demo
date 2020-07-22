import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Note } from '../models/note'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'date'];
    @Input() notes: Note[];
    datasource: Note[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.notes,'sdsds')}
    
  ngOnChanges () {
    this.datasource = this.notes;
  }

}
