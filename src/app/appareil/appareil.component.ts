import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatut: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService ) { 
  }

  ngOnInit() {

  }

  getStatus() {
    return this.appareilStatut;
  }

  getColor() {
    if(this.appareilStatut === 'allumé')

    return 'green';
    
    else if (this.appareilStatut === 'éteint')

    return 'red';
  }
/** A finir */
  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }

}
