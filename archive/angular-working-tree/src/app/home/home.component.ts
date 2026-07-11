import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Capability = {
  number: string;
  title: string;
  summary: string;
  items: string[];
};

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly capabilities: Capability[] = [
    {
      number: '01',
      title: 'Product & UX design',
      summary: 'Make complex requirements understandable before they become expensive to build.',
      items: ['Product flows', 'Information architecture', 'Interface design', 'Interactive prototypes'],
    },
    {
      number: '02',
      title: 'UX engineering',
      summary: 'Translate design intent into responsive, accessible interface behavior.',
      items: ['Design-to-code', 'Complex UI states', 'Responsive frontend', 'Interaction and motion'],
    },
    {
      number: '03',
      title: 'Design systems',
      summary: 'Create shared foundations that help design and engineering move with less friction.',
      items: ['Reusable components', 'Design tokens', 'UI standardisation', 'Team-ready documentation'],
    },
    {
      number: '04',
      title: 'Web experiences',
      summary: 'Build clear, credible websites that are designed around real content and business needs.',
      items: ['Company websites', 'Product pages', 'Interactive experiences', 'Responsive implementation'],
    },
  ];

  readonly process = [
    {
      number: '01',
      title: 'Frame the problem',
      body: 'We align on the audience, requirements, constraints, and the decisions the interface needs to support.',
    },
    {
      number: '02',
      title: 'Shape the system',
      body: 'We explore flows and interface patterns, then turn the strongest direction into a coherent system.',
    },
    {
      number: '03',
      title: 'Prototype the behaviour',
      body: 'Important states and interactions are made tangible early, so feedback is about how the product works.',
    },
    {
      number: '04',
      title: 'Build with intent',
      body: 'We carry design decisions into reusable frontend implementation and refine the details in context.',
    },
  ];
}
