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
        return this._http.get('http://localhost:3000/messages')
            .map(function (data) {
            console.log('here we are');
            var extracted = data.json();
            var posts = [];
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var p = _a[_i];
                // TODO
                posts.push(new post_model_1.Post(p.content));
                console.log(p.content);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hELDJCQUFxQixjQUFjLENBQUMsQ0FBQTtBQUVwQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBQ0kscUJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVuQyw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO2FBQ2xELEdBQUcsQ0FBRSxVQUFDLElBQWE7WUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUzQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1lBRXpCLEdBQUcsQ0FBQSxDQUFVLFVBQWMsRUFBZCxLQUFBLFNBQVMsQ0FBQyxJQUFJLEVBQWQsY0FBYyxFQUFkLElBQWMsQ0FBQztnQkFBeEIsSUFBSSxDQUFDLFNBQUE7Z0JBRUwsT0FBTztnQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFHaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXZCTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBZ0NiLGtCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxtQkFBVyxjQStCdkIsQ0FBQSIsImZpbGUiOiJwb3N0L3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3QubW9kZWxcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApeyB9XG5cbiAgICBnZXRQb3N0cygpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2VzJylcbiAgICAgICAgICAgIC5tYXAoIChkYXRhOlJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgd2UgYXJlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gZGF0YS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdHM6IFBvc3RbXSA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcihsZXQgcCBvZiBleHRyYWN0ZWQuZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICAgICAgcG9zdHMucHVzaChuZXcgUG9zdChwLmNvbnRlbnQpKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHAuY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0cztcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNhdmVQb3N0KHBvc3QgOiBQb3N0KSA6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb3N0KTtcbiAgICAvLyAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIC8vICAgICAvLyBUT0RPXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jcmVhdGUnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pO1xuICAgIC8vIH1cblxufSJdfQ==
