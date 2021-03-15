import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as uuid from 'uuid';

import { DiaryEntry } from '../../interfaces/diary-entry';
import { Message } from '../../shared/models/message.model';

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

  save(): void {
    this.currentId = this.editFlag ? this.currentId : uuid.v4();
    const message = new Message(this.message.value, this.currentId);
    if (this.editFlag) {
      this.updatePost(message);
    } else {
      this.posts.push(message);
    }
    this.message.reset();
    this.hideEmojiPicker();
  }

  updatePost(message): void {
    this.posts = this.posts.map(post => {
      if (this.currentId === post.id) {
        return {...message};
      }
      return {...post};
    });
    this.editFlag = false;
  }

  editPost(post): void {
    this.message.setValue(post.message);
    this.currentId = post.id;
    this.editFlag = true;
  }

  removePost(id): void {
    this.posts = this.posts.filter(n => n.id !== id);
  }
}

