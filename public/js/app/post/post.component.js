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
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QvcG9zdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5RCxlQUFlLENBQUMsQ0FBQTtBQUV6RSw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQVU3QztJQUdJLHVCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFbkQsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7YUFDdkIsU0FBUyxDQUNOLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztJQUNWLENBQUM7SUFuQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtTQUM3QixDQUFDOztxQkFBQTtJQXVCRixvQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlkscUJBQWEsZ0JBcUJ6QixDQUFBIiwiZmlsZSI6InBvc3QvcG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdC5tb2RlbFwiO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9wb3N0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3Bvc3RzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3Bvc3QudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3Bvc3QudGVtcGxhdGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbIFBvc3RTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3N0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwb3N0czogUG9zdFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2UgOiBQb3N0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwb3N0cyA9PiB0aGlzLnBvc3RzID0gcG9zdHMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIGNyZWF0ZVBvc3QoKSB7XG4gICAgLy8gICAgIGNvbnN0IHBvc3QgPSBuZXcgUG9zdChybmQgKyAnIGlzIGdvb2QhJyk7XG4gICAgLy8gICAgIHRoaXMucG9zdHMucHVzaChwb3N0KTtcbiAgICAvLyAgICAgdGhpcy5fcG9zdFNlcnZpY2Uuc2F2ZVBvc3QocG9zdCkuc3Vic2NyaWJlKFxuICAgIC8vICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1N1Y2NlcyEnKSxcbiAgICAvLyAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgLy8gICAgICk7XG4gICAgLy8gfVxufSJdfQ==
