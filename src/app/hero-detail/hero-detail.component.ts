import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  destroy(hero: Hero): void{

    console.log(hero.name, "fue aniquilado");

    // Imprime en nodo hijo de button.
    let textnode = document.createTextNode(hero.name + " fue aniquilado");

    document.getElementById("selectedHero").appendChild(textnode);
     


}

}
