import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {LanguageSwitcher} from '../language-switcher/language-switcher';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbar,
    LanguageSwitcher
  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {

}
