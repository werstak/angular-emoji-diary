import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componets/header/header.component';
import { DiaryComponent } from './componets/diary/diary.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    PickerModule,
    EmojiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
