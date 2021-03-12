import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';
import * as uuid from 'uuid';


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

  private index: string;
  private myId: string = uuid.v4();

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
    console.log(this.myId);
    const {value: message} = this.message;
    const date = moment().format('hh:mm A | MMM DD, YYYY');
    const id = this.myId;
    this.posts.push({message, date, id} as any);
    this.message.reset();
    this.hideEmojiPicker();
    console.log(this.posts);


    /*    console.log(this.id);
    const {value: message} = this.message;
    const date = moment().format('hh:mm A | MMM DD, YYYY');
    const index = this.index ?? this.posts.length; // check if index is defined otherwise return array length
    this.posts = [...this.posts.slice(0, index), { message, date }, ...this.posts.slice(index + 1)];
    this.message.reset();
    this.index = undefined; // clear previously selected index
    this.hideEmojiPicker();*/
  }

  editPost(post): void {
    this.message.setValue(post.message);
    this.myId = post.id;
  }

  removePost(id): void {
    this.posts.splice(id, 1);
  }
}

