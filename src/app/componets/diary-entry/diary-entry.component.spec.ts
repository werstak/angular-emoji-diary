import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryEntryComponent } from './diary-entry.component';

describe('DiaryEntryComponent', () => {
  let component: DiaryEntryComponent;
  let fixture: ComponentFixture<DiaryEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
