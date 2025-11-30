import { Injectable, signal } from '@angular/core';
import { Personnes } from '../liste-personnes/liste-personnes.component';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {


personneChoisie = signal<Personnes | null>({ nom: 'Noélie', anniversaire: new Date(1990, 10, 30), svg: 'assets/gift_es.svg' });


}
