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
  currentId: string;
  editFlag = false;

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
    if (this.editFlag === false) {
      this.currentId = uuid.v4();
      const id = this.currentId;
      const {value: message} = this.message;
      const date = moment().format('hh:mm A | MMM DD, YYYY');
      this.posts.push({message, date, id} as any);
      this.message.reset();
      this.hideEmojiPicker();
    } else {
      this.updatePost();
    }
  }


  updatePost(): void {
    const id = this.currentId;
    const {value: message} = this.message;
    const date = moment().format('hh:mm A | MMM DD, YYYY');
    const newItem = [{message, date, id}];
    this.posts = this.posts.map(x => {
      // tslint:disable-next-line:no-shadowed-variable
      const item = newItem.find(({id}) => id === x.id);
      return item ? item : x;
    });
    this.message.reset();
    this.hideEmojiPicker();
    this.editFlag = false;
  }

  editPost(post): void {
    this.message.setValue(post.message);
    this.currentId = post.id;
    this.editFlag = true;
  }

  removePost(id): void {
    this.posts.splice(id, 1);
  }
}

