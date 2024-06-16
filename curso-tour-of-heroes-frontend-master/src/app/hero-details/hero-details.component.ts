import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero-model';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero!: Hero;
  constructor(private heroService: HeroService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

}
