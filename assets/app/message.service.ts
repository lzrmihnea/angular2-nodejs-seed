import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Message } from "./message.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class MessageService {
    constructor(private _http: Http){ }

    getMessages(): Observable<any>{
        return this._http.get('http://localhost:3000/messages')
            .map( (data:Response) => {
                
                console.log('here we are');
                
                const extracted = data.json();
                const msgArray: Message[] = [];
                
                for(let element of extracted.data) {
                    msgArray.push(new Message(element.content));
                    console.log(element.content);
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