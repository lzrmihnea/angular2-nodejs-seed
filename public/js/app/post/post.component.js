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
            providers: [post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QvcG9zdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQVM3QztJQUdJLHVCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFbkQsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7YUFDdkIsU0FBUyxDQUNOLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztJQUNWLENBQUM7SUFsQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtTQUM3QixDQUFDOztxQkFBQTtJQXVCRixvQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlkscUJBQWEsZ0JBcUJ6QixDQUFBIiwiZmlsZSI6InBvc3QvcG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3QubW9kZWxcIjtcbmltcG9ydCB7IFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vcG9zdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwb3N0cycsXG4gICAgdGVtcGxhdGVVcmw6ICdwb3N0LnRlbXBsYXRlLmh0bWwnLFxuICAgIHByb3ZpZGVyczogWyBQb3N0U2VydmljZSBdXG59KVxuXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcG9zdHM6IFBvc3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlIDogUG9zdFNlcnZpY2UpIHsgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHBvc3RzID0+IHRoaXMucG9zdHMgPSBwb3N0cyxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGVQb3N0KCkge1xuICAgIC8vICAgICBjb25zdCBwb3N0ID0gbmV3IFBvc3Qocm5kICsgJyBpcyBnb29kIScpO1xuICAgIC8vICAgICB0aGlzLnBvc3RzLnB1c2gocG9zdCk7XG4gICAgLy8gICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLnNhdmVQb3N0KHBvc3QpLnN1YnNjcmliZShcbiAgICAvLyAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXMhJyksXG4gICAgLy8gICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIC8vICAgICApO1xuICAgIC8vIH1cbn0iXX0=
