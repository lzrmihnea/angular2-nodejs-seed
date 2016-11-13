///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { PostComponent } from "./post/post.component";
import { AppComponent } from "./app.component";
import {NavComponent} from "./nav/nav.component";

bootstrap(PostComponent, [
    HTTP_PROVIDERS
]);

bootstrap(NavComponent, [
    HTTP_PROVIDERS
]);

bootstrap(AppComponent, [
    HTTP_PROVIDERS
]);
