import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../../firebaseConfig';

const firebaseConfig = {
  apiKey: 'AIzaSyC6WqQvGlMDxhJ4RAzStxL9bIVL-OkLsQs',
  authDomain: 'codebin-ng.firebaseapp.com',
  projectId: 'codebin-ng',
  storageBucket: 'codebin-ng.appspot.com',
  messagingSenderId: '135935216209',
  appId: '1:135935216209:web:0166d65b8fca782eb98670',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    initializeApp(firebaseConfig);
  }
}
