import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  
  isAuth = false;
  appareils: any [];
  appareilSubcription: Subscription;
  lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        ()=> {
          resolve(date);
        }, 0
      );
    });
  
  constructor(private appareilService: AppareilService) {
    this.appareilService.getAppareilsFromServer()
    setTimeout(() => {
        this.isAuth = true
    }, 4000
    )
  }

  ngOnInit(): void {
    this.appareilSubcription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    )
    this.appareilService.emitAppareilSubject()
  }

  onAllumer() {
    this.appareilService.switchOnAll()
  }

  onEteindre() {
    this.appareilService.switchOffAll()
  }

  onSave() {
    this.appareilService.saveAppareilsToServer()
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer()
  }
}
