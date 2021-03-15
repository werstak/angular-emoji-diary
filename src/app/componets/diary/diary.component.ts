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
  private myId: string;
  private editFlag: boolean;

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



    if (this.editFlag === true) {
      const id = this.myId;

      // const checkId = this.posts.find(x => x.id === id);
      // console.log('checkId', checkId);

      const {value: message} = this.message;
      const date = moment().format('hh:mm A | MMM DD, YYYY');
      const newItems = [{message, date, id}];
      this.message.reset();
      this.hideEmojiPicker();


      this.posts = this.posts.map(x => {
        // tslint:disable-next-line:no-shadowed-variable
        const item = newItems.find(({ id }) => id === x.id);
        return item ? item : x;
      });



      this.editFlag = false;
      return;
    } else  {
      this.myId = uuid.v4();
      const id = this.myId;
      const {value: message} = this.message;
      const date = moment().format('hh:mm A | MMM DD, YYYY');
      this.posts.push({message, date, id} as any);
      this.message.reset();
      this.hideEmojiPicker();
      console.log('addPost == this.posts', this.posts);

    }



/*    this.myId = uuid.v4();
    const id = this.myId;
    const {value: message} = this.message;
    const date = moment().format('hh:mm A | MMM DD, YYYY');
    this.posts.push({message, date, id} as any);
    this.message.reset();
    this.hideEmojiPicker();
    console.log('addPost == this.posts', this.posts);*/


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
    this.editFlag = true;
  }

  removePost(id): void {
    this.posts.splice(id, 1);
  }
}

