export class AppareilService {
    appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            statut: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            statut: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            statut: 'éteint'
        }
    ];

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
    };

    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.statut = 'éteint';
        }
    }

    switchOnOne(indexOfAppareil: number) {
        this.appareils[indexOfAppareil].statut = 'allumé';
    }

    switchOffOne(indexOfAppareil: number) {
        this.appareils[indexOfAppareil].statut = 'éteint';
    }
}