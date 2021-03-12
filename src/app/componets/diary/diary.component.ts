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

  showEmojiPicker = false;
  message: FormControl = new FormControl('', [Validators.required]);

  private index: number;

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

  addPost(): void {
    const {value: message} = this.message;
    const date = moment().format('hh:mm A | MMM DD, YYYY');
    const index = this.index ?? this.posts.length; // check if index is defined otherwise return array length
    this.posts = [...this.posts.slice(0, index), { message, date }, ...this.posts.slice(index + 1)];
    this.message.reset();
    this.index = undefined; // clear previously selected index
    this.hideEmojiPicker();
  }

  editPost(i, post): void {
    this.message.setValue(post.message);
    this.index = i;
  }

  removePost(i): void {
    this.posts.splice(i, 1);
  }
}
