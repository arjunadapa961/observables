import { Component, OnInit } from '@angular/core';
import { ActivateService } from './activate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activated: boolean = false

  constructor(private activateService: ActivateService) { }

  ngOnInit() {
    this.activateService.activatedEvent.subscribe(
      (didActivate) => {
        this.activated = didActivate
      }
    )
  }
}
