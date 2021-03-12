import { Component, Input } from '@angular/core';

import { DiaryEntry } from '../../interfaces/diary-entry';

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.scss']
})
export class DiaryEntryComponent {

  @Input() post: DiaryEntry;
}
