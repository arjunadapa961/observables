import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {
  activatedEvent = new EventEmitter<boolean>();

  constructor() { }


}
