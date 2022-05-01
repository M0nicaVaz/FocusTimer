import { activateCard } from './index.js';

const soundCards = [
  {
    name: 'forest',
    sound: new Audio('./assets/sounds/Floresta.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: activateCard,
  },
  {
    name: 'rain',
    sound: new Audio('./assets/sounds/Chuva.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: activateCard,
  },
  {
    name: 'coffee',
    sound: new Audio('./assets/sounds/Cafeteria.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: activateCard,
  },
  {
    name: 'fire',
    sound: new Audio('./assets/sounds/Lareira.wav'),
    volume: 0,
    isActive: false,
    displayElement: '',
    activate: activateCard,
  },
];

export { soundCards };
