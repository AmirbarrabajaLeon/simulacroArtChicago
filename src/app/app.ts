import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toolbar} from './shared/presentation/components/toolbar/toolbar';
import {FooterContent} from './shared/presentation/components/footer-content/footer-content';
import {ExhibitionsView} from './exhibitions/presentation/views/exhibitions-view/exhibitions-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, FooterContent, ExhibitionsView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simulacroArtChicago');
}
