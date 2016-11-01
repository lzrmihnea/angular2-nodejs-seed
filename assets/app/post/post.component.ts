import { Component, OnInit } from '@angular/core';
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: 'post.template.html',
    providers: [ PostService ]
})

export class PostComponent implements OnInit {
    posts: Post[];

    constructor(private _postService : PostService) { }
    
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                error => console.error(error)
            );
    }

    // createPost() {
    //     const post = new Post(rnd + ' is good!');
    //     this.posts.push(post);
    //     this._postService.savePost(post).subscribe(
    //         () => console.log('Succes!'),
    //         error => console.error(error)
    //     );
    // }
}