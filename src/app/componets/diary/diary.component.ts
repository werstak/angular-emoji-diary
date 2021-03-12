import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';

import { DiaryEntry } from '../../interfaces/diary-entry';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent {
  posts: DiaryEntry[] = [];
  editMessage: any;

  showEmojiPicker = false;
  message: FormControl = new FormControl('', [Validators.required]);

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  hideEmojiPicker(): void {
    this.showEmojiPicker = false;
  }

  addEmoji($event): void {
    const {value} = this.message;
    this.message.patchValue(value + $event.emoji.native);
  }

  addMessage(): void {
    const {value: message} = this.message;
    const date = moment().format('hh:mm A | MMM DD, YYYY');
    this.posts.push({message, date} as any);
    this.message.reset();
    this.hideEmojiPicker();
  }

  editPost(i, post): void {
    console.log(i, post);
    this.editMessage = post.message;
    console.log(this.editMessage);
  }

  removePost(i): void {
    this.posts.splice(i, 1);
  }
}
