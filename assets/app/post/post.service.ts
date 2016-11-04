import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Post } from "./post.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class PostService {
    constructor(private _http: Http){ }

    getPosts(): Observable<any>{
        return this._http.get('http://localhost:3000/posts')
            .map( (data:Response) => {
                
                console.log('here we are');
                
                const extracted = data.json();
                const posts: Post[] = [];
                
                for(let p of extracted.data) {

                    // TODO
                    posts.push(new Post(p.title,
                                        p.body,
                                        p.author));


                }
                return posts;
            });
    }

    // savePost(post : Post) : Observable<any> {
    //     const body = JSON.stringify(post);
    //     const headers = new Headers({'Content-Type': 'application/json' });
    //     // TODO
    //     return this._http.post('http://localhost:3000/create', body, {headers: headers});
    // }

}