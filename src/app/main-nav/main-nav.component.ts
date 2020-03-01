import { Component, OnInit } from '@angular/core';
import { Rubrique } from './model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  iconsList = ['car', 'motorcycle', 'bicycle', 'home', 'bed', 'book', 'mobile-alt', 'gamepad', 'camera-retro'];
  rubriquesList: Rubrique[] = [
    { name: 'Voitures', img: '../../assets/img/vo.jpg' },
    { name: 'Motos', img: '../../assets/img/mo.jpg' },
    { name: 'Sport', img: '../../assets/img/sport.jpg' },
    { name: 'Maison', img: '' },
    { name: 'Multimédia', img: '' },
    { name: 'Mobiles', img: '' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
