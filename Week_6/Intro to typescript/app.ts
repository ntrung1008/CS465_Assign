import {Guest} from './Guest';

export class Codelab 
{
  constructor(public guests: Guest[]) 
  {
  }

  Coming() 
  {
    return this.guests.filter(guest => guest.coming);
  }
}