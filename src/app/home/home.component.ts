import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideAnimation', [
      state(
        'hidden',
        style({
          opacity: 0,
          position: 'absolute',
          right: '100px',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          position: 'absolute',
          right: '0',
        })
      ),
      transition('hidden => visible', [
        style({ display: 'block' }),
        animate('200ms ease-out'),
      ]),
      transition('visible => hidden', [
        animate(
          '250ms ease-in',
          style({
            opacity: 0,
            right: '-100px',
          })
        ),
      ]),
    ]),
    trigger('slideReverseAnimation', [
      state(
        'hidden',
        style({
          opacity: 0,
          position: 'absolute',
          right: '100px',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          position: 'absolute',
          right: '0',
        })
      ),
      transition('hidden => visible', [
        style({ display: 'block' }),
        animate('200ms ease-out'),
      ]),
      transition('visible => hidden', [
        animate(
          '250ms ease-in',
          style({
            opacity: 0,
            right: '-200px',
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  selected = false;
  showMac = true;
  showIphone = false;
  toggleInProgress = false;
  browse = [
    {
      id: 1,
      title: 'Kantara SDM',
      desc: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputatevulputate libero et velit interdum, ac aliquet odio mattis...',
      image: 'assets/item-dummy-1.png',
    },
    {
      id: 2,
      title: 'Microsoft',
      desc: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputatevulputate libero et velit interdum, ac aliquet odio mattis...',
      image: 'assets/item-dummy-2.png',
    },
    {
      id: 3,
      title: 'Kantara SDM',
      desc: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputatevulputate libero et velit interdum, ac aliquet odio mattis...',
      image: 'assets/item-dummy-1.png',
    },
    {
      id: 4,
      title: 'Microsoft',
      desc: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputatevulputate libero et velit interdum, ac aliquet odio mattis...',
      image: 'assets/item-dummy-2.png',
    },
  ];
  solution = [
    {
      icon: '/assets/intuitive.svg',
      title: 'Intuitive',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      icon: '/assets/proffesional.svg',
      title: 'Professional',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      icon: '/assets/user_proven.svg',
      title: 'User proven',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      icon: '/assets/helpfull_animation.svg',
      title: 'Helpfull animation',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      icon: '/assets/user_understand.svg',
      title: 'User understand',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
  ];
  ourClient = [
    {
      id: 1,
      img: 'assets/image_20.png',
    },
    {
      id: 2,
      img: 'assets/image_24.png',
    },
    {
      id: 3,
      img: 'assets/image_21.png',
    },
    {
      id: 4,
      img: 'assets/image_23.png',
    },
    {
      id: 5,
      img: 'assets/image_22.png',
    },
  ];
  screenWidth = window.innerWidth;
  public limitedSolution = this.solution.slice(0, 3);
  public isMobile = window.innerWidth < 768;
  get limitedItems(): any[] {
    return this.screenWidth >= 1536
      ? this.solution.slice(0, 4)
      : this.solution.slice(0, 3);
  }

  datas = [
    {
      id: 1,
      img: '/assets/Photo-1.png',
      title: 'Crafting Seamless Experiences: The Art of UI/UX Design',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      id: 2,
      img: '/assets/Photo-2.png',
      title: 'User-Centric Design: Elevating Experiences through UI/UX',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      id: 3,
      img: '/assets/Photo-3.png',
      title: 'User-Centric Design: Elevating Experiences through UI/UX',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      id: 4,
      img: '/assets/Photo-4.png',
      title: 'User-Centric Design: Elevating Experiences through UI/UX',
      desc: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
  ];

  filter = [
    { id: 1, name: 'Discover', active: true },
    { id: 2, name: 'Website', active: false },
    { id: 3, name: 'Mobile', active: false },
    { id: 4, name: 'Company', active: false },
    { id: 5, name: 'Company', active: false },
  ];
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  }

  onToggleDevice(ev: any) {
    if (this.toggleInProgress) return; // Blokir klik selama animasi
    this.toggleInProgress = true;

    if (ev) {
      // Pergi ke iPhone
      this.showMac = false;
      setTimeout(() => {
        this.selected = true;
        this.showIphone = true;
        this.toggleInProgress = false; // Buka lagi toggle
      }, 300);
    } else {
      // Pergi ke Mac
      this.showIphone = false;
      setTimeout(() => {
        this.selected = false;
        this.showMac = true;
        this.toggleInProgress = false;
      }, 300);
    }
  }
}
