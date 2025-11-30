import { Component, computed, signal } from '@angular/core';
import { EnvelopeComponent } from "../envelope/envelope.component";

@Component({
  selector: 'app-liste-personnes',
  imports: [EnvelopeComponent],
  templateUrl: './liste-personnes.component.html',
  styleUrl: './liste-personnes.component.scss',
})
export class ListePersonnesComponent {
  listPersonnes = signal<Personnes[]>([
    { nom: 'Estelle', anniversaire: new Date(1990, 8, 11), svg: 'assets/gift_es.svg' },
    { nom: 'Sullyvan', anniversaire: new Date(1990, 8, 20), svg: 'assets/gift_su.svg' },
    { nom: 'Noélie', anniversaire: new Date(1990, 10, 30), svg: 'assets/gift_no.svg' },
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
}

export interface Personnes {
  nom: string;
  anniversaire: Date;
  svg?: string;
}
