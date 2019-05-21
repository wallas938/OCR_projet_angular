import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  
  //@Input() id: number;
  
  isAuth = false;
  appareils: any [];
  lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        ()=> {
          resolve(date);
        }, 2000
      );
    });
  
  constructor(private appareilService: AppareilService) {
    setTimeout(
      ()=>{
          this.isAuth = true;
        }, 4000
      )
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll()
  }

  onEteindre() {
    this.appareilService.switchOffAll()
  }

}
