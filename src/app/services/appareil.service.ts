import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AppareilService {

    appareilSubject = new Subject<any>();
    
    private appareils = [
    ];

    constructor(private httpClient: HttpClient) {}

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice())
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        
        return appareil;
    }

    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.statut = 'allumé';
        }
        this.emitAppareilSubject();
    };

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.statut = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(indexOfAppareil: number) {
        this.appareils[indexOfAppareil].statut = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(indexOfAppareil: number) {
        this.appareils[indexOfAppareil].statut = 'éteint';
        this.emitAppareilSubject();
    }

    addAppareil(name: string, statut: string) {
        const appareilObject = {
            id: 0,
            name: '',
            statut: '',
        }
        appareilObject.name = name
        appareilObject.statut = statut
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1
        this.appareils.push(appareilObject);
        this.emitAppareilSubject()
    }

    saveAppareilsToServer() {
        this.httpClient.put('https://http-client-demo-3a488.firebaseio.com/appareil.json', this.appareils)
                        .subscribe(
                            () => {
                                console.log('Enregistrement terminé !')
                                this.emitAppareilSubject()
                            },
                            (error) => {
                                console.log('Erreur de sauvegarde: ', error)
                            })
    }

    getAppareilsFromServer() {
        this.httpClient.get<any[]>('https://http-client-demo-3a488.firebaseio.com/appareil.json')
                        .subscribe(
                            (response) => {
                                this.appareils = response
                                this.emitAppareilSubject()
                                console.log('Le contenu a été charger: ')
                            },
                            (error) => {
                                console.log('Error trouvé lors de la récuperation: ', error)
                            }
                        )
    }
}