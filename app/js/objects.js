import { updateCardDisplay } from './index.js';

const soundCards = [
  {
    name: 'forest',
    sound: './assets/sounds/Floresta.wav',
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: updateCardDisplay,
  },
  {
    name: 'rain',
    sound: './assets/sounds/Chuva.wav',
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: updateCardDisplay,
  },
  {
    name: 'coffee',
    sound: './assets/sounds/Cafeteria.wav',
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: updateCardDisplay,
  },
  {
    name: 'fire',
    sound: './assets/sounds/Lareira.wav',
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: updateCardDisplay,
  },
];

export { soundCards };
