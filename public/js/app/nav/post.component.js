"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require("./post.service");
var PostComponent = (function () {
    function PostComponent(_postService) {
        this._postService = _postService;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return console.error(error); });
    };
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'posts',
            templateUrl: 'post.template.html',
            styleUrls: ['post.template.css'],
            providers: [post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof post_service_1.PostService !== 'undefined' && post_service_1.PostService) === 'function' && _a) || Object])
    ], PostComponent);
    return PostComponent;
    var _a;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi9wb3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBRXpFLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBVTdDO0lBR0ksdUJBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUVuRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTthQUN2QixTQUFTLENBQ04sVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFDO0lBQ1YsQ0FBQztJQW5CTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO1NBQzdCLENBQUM7O3FCQUFBO0lBdUJGLG9CQUFDOztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlkscUJBQWEsZ0JBcUJ6QixDQUFBIiwiZmlsZSI6Im5hdi9wb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0Lm1vZGVsXCI7XG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gXCIuL3Bvc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncG9zdHMnLFxuICAgIHRlbXBsYXRlVXJsOiAncG9zdC50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncG9zdC50ZW1wbGF0ZS5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFsgUG9zdFNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBvc3RzOiBQb3N0W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZSA6IFBvc3RTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHBvc3RzID0+IHRoaXMucG9zdHMgPSBwb3N0cyxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gY3JlYXRlUG9zdCgpIHtcbiAgICAvLyAgICAgY29uc3QgcG9zdCA9IG5ldyBQb3N0KHJuZCArICcgaXMgZ29vZCEnKTtcbiAgICAvLyAgICAgdGhpcy5wb3N0cy5wdXNoKHBvc3QpO1xuICAgIC8vICAgICB0aGlzLl9wb3N0U2VydmljZS5zYXZlUG9zdChwb3N0KS5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3VjY2VzIScpLFxuICAgIC8vICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAvLyAgICAgKTtcbiAgICAvLyB9XG59Il19
