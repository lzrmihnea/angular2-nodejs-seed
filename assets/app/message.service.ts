import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Message } from "./message.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class MessageService {
    constructor(private _http: Http){ }

    getMessages(): Observable<any>{
        return this._http.get('http://localhost:3000/messages')
            .map( (data:Response) => {
                const extracted = data.json();
                const msgArray: Message[] = [];
                let message;
                for(let element in extracted.data) {
                    message = new Message(element.content);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    saveMessage(message : Message) : Observable<any> {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/messages', body, {headers: headers});
    }

}