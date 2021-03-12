import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DiaryEntry } from '../../interfaces/diary-entry';
import * as moment from 'moment';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent {
  postsArr: DiaryEntry[] = [];
  post: DiaryEntry;

  showEmojiPicker = false;
  emojiForm = new FormGroup({
    inputField: new FormControl(''),
  });

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  hideEmojiPicker(): void {
    this.showEmojiPicker = false;
  }

  addEmoji($event): void {
    const data = this.emojiForm.get('inputField');
    data.patchValue(data.value + $event.emoji.native);
    console.log('data', data);
  }

  onSubmit(): void {
    const {value: {inputField: post}} = this.emojiForm;
    const date = moment().format('hh:mm A | MMM DD, YYYY');
    this.postsArr.push({post, date} as any);
    this.emojiForm.reset();
    this.hideEmojiPicker();
  }
}
