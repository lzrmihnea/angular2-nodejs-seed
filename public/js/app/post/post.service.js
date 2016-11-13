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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var post_model_1 = require("./post.model");
require('rxjs/Rx');
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
    }
    PostService.prototype.getPosts = function () {
        return this._http.get('http://localhost:3000/posts')
            .map(function (data) {
            console.log('here we are');
            var extracted = data.json();
            var posts = [];
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var p = _a[_i];
                // TODO
                posts.push(new post_model_1.Post(p.title, p.body, p.author));
            }
            return posts;
        });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hELDJCQUFxQixjQUFjLENBQUMsQ0FBQTtBQUVwQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBQ0kscUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVuQyw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO2FBQy9DLEdBQUcsQ0FBRSxVQUFDLElBQWE7WUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUzQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1lBRXpCLEdBQUcsQ0FBQSxDQUFVLFVBQWMsRUFBZCxLQUFBLFNBQVMsQ0FBQyxJQUFJLEVBQWQsY0FBYyxFQUFkLElBQWMsQ0FBQztnQkFBeEIsSUFBSSxDQUFDLFNBQUE7Z0JBRUwsT0FBTztnQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNQLENBQUMsQ0FBQyxJQUFJLEVBQ04sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFHbEM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXhCTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBaUNiLGtCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSxtQkFBVyxjQWdDdkIsQ0FBQSIsImZpbGUiOiJwb3N0L3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3QubW9kZWxcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApeyB9XG5cbiAgICBnZXRQb3N0cygpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzJylcbiAgICAgICAgICAgIC5tYXAoIChkYXRhOlJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gZGF0YS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdHM6IFBvc3RbXSA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcihsZXQgcCBvZiBleHRyYWN0ZWQuZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICAgICAgcG9zdHMucHVzaChuZXcgUG9zdChwLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmF1dGhvcikpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RzO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZVBvc3QocG9zdCA6IFBvc3QpIDogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvc3QpO1xuICAgIC8vICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgLy8gICAgIC8vIFRPRE9cbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NyZWF0ZScsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gICAgLy8gfVxuXG59Il19
