import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  showEmojiPicker = false;
  emojiForm = new FormGroup({
    inputField: new FormControl(''),
  });

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji($event): void {
    const data = this.emojiForm.get('inputField');
    data.patchValue(data.value + $event.emoji.native);
    console.log('data', data);
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}
