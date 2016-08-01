import { Component } from '@angular/core';
import { NoteCard } from '../ui';

@Component({
  selector: 'notes-container',
  directives: [
    NoteCard
  ],
  styles: [`
  .notes {
    padding-top: 50px;
  }
  .creator {
    margin-bottom: 40px;
  }
  `],
  template: `
    <div class='row center-xs notes'>
      <div class='col-xs-6 creator'>
      note creator here
      </div>
      <div class='notes col-xs-8'>
        <div class='row between-xs'>
          <note-card
          class='col-xs-4'
          [note]='note'
          *ngFor='let note of notes; let i = index'
          (checked)="onNoteChecked($event, i)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})
export class Notes {
  notes = [
  {title: 'Adventure', value: 'By the end of 2016, I am skydiving in Yosemite ', color: '#fce220'},
  {title: 'Education', value: 'By Jan 1st, 2017, I engage a native Portuguese speaker in 15min conversation ', color: '#fe848c'},
  {title: 'Material', value: 'By the end of 2018, I am driving my digital nomadic camper cross-country', color: '#c197c7'}
  ]

  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  }
}
