import { Component, computed, inject } from '@angular/core';
import { PersonnesService } from '../services/personnes.service';

@Component({
  selector: 'app-envelope',
  imports: [],
  templateUrl: './envelope.component.html',
  styleUrl: './envelope.component.scss'
})
export class EnvelopeComponent {


  protected readonly personneService = inject(PersonnesService);
 isOpen = false;
   confettis: any[] = [];

   textBillet = computed(() => {
     const pers = this.personneService.personneChoisie()?.nom;

  if (pers === 'Noélie') {
    return `Je t'offre deux journées au parc Le PAL, avec accompagné de Sullyvan, ta maman et Sébastien !
Tu pourras à la fois y découvrir un tas d'animaux (Girafes, perroquets, crocodiles,...), mais également y faire toutes les attractions que tu veux !
Le parc est fermé en hiver, donc ce sera pour plus tard, quand tout sera ouvert.`;
  } else if (pers === 'Sullyvan') {
    return `Je t'offre deux journées au parc Le PAL, avec accompagné de Noélie, ta maman et Sébastien !
Tu pourras à la fois y découvrir un tas d'animaux (Loups, hippopotames, phoques,...), mais également y faire toutes les attractions que tu veux !
Le parc est fermé en hiver, donc ce sera pour plus tard, quand tout sera ouvert.`;
  } else {
    return `Tu as droit à deux journées au PAL, offertes par mes soins !
Mais tu seras obligée d'y aller avec tes enfants et moi si tu veux en profiter.
Certainement en avril, on se prendra du temps pour organiser ça bientôt !`;
  }
   })

  toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.generateConfettis(50); // 50 confettis
    } else {
      this.confettis = [];
    }
  }

  generateConfettis(count: number) {
    this.confettis = [];
    for (let i = 0; i < count; i++) {
      const style = {
        left: `${Math.random() * 500 + 50}px`, // centré sur SVG 600px
        top: `0px`,
        animationDelay: `${Math.random() * 0.5}s`,
        background: this.randomColor(),
        '--rand-x': `${Math.random() * 100 - 50}px`, // pour trajectoire aléatoire
        '--rand-rotate': `${Math.random() * 360}deg`
      };
      this.confettis.push({ style });
    }
  }

  randomColor() {
    const colors = ['#ff5a5f','#ffcc00','#00ccff','#ff5aff','#00ff99'];
    return colors[Math.floor(Math.random() * colors.length)];
  }


}
