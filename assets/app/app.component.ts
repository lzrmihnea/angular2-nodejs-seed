import { Component, OnInit } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [ MessageService ]
})

export class AppComponent implements OnInit {
    messages: Message[] = [
        new Message('Hello')
    ];

    constructor(private _messageService : MessageService) { }
    
    ngOnInit() {
        this._messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );
    }

    onAddMessage() {
        const rnd = Math.ceil(Math.random() * 100);
        const message = new Message(rnd + ' is good!');
        this.messages.push(message);
        this._messageService.saveMessage(message).subscribe(
            () => console.log('Succes!'),
            error => console.error(error)
        );
    }
}