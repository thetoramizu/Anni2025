import { Component, signal } from '@angular/core';
import { EnvelopeComponent } from "./envelope/envelope.component";
import {  ListePersonnesComponent } from "./liste-personnes/liste-personnes.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [EnvelopeComponent,  ListePersonnesComponent]
})
export class AppComponent {

}
