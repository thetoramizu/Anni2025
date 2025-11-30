import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { EnvelopeComponent } from "../envelope/envelope.component";
import { PersonnesService } from '../services/personnes.service';

@Component({
  selector: 'app-liste-personnes',
  imports: [EnvelopeComponent],
  templateUrl: './liste-personnes.component.html',
  styleUrl: './liste-personnes.component.scss',
})
export class ListePersonnesComponent implements OnInit {

  personneService = inject(PersonnesService)

  listPersonnes = signal<Personnes[]>([
        { nom: 'Noélie', anniversaire: new Date(1990, 10, 30), svg: 'assets/gift_no.svg' },
    { nom: 'Sullyvan', anniversaire: new Date(1990, 8, 20), svg: 'assets/gift_su.svg' },
  { nom: 'Estelle', anniversaire: new Date(1990, 8, 11), svg: 'assets/gift_es.svg' },
]);

  anniToday = computed(() => {
    return this.listPersonnes().filter((personne) =>
      this.isBirthday(personne.anniversaire)
    );
  });

  notToday = computed(() => {
    return this.listPersonnes().filter(
      (personne) => !this.isBirthday(personne.anniversaire)
    );
  });

  todayDate = signal<Date>(new Date());

  ngOnInit() {
    if(this.anniToday().length > 0) {
      this.chooseWho(this.anniToday()[0]);
    }
  }

  isBirthday(dateNaissance: Date | string): boolean {
    const today = this.todayDate();
    const birth = new Date(dateNaissance);

    console.log('birth 1', birth.getMonth());
    console.log('today', today.getMonth());

    return (
      birth.getDate() === today.getDate() &&
      birth.getMonth() === today.getMonth()
    );
  }

  chooseWho(personne: Personnes) {
    this.personneService.personneChoisie.set(personne);
}
}

export interface Personnes {
  nom: string;
  anniversaire: Date;
  svg?: string;
}
