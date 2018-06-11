export class Messaggio{
    constructor (
        public idm: number,     //id messaggio
        public idt: string,     //id treno
        public idu: string,     //id utente
        public testo: string,   //testo messaggio
        public idd?: string,    //id destinatario (opzionale)
    ) {}
}