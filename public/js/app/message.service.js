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
var message_model_1 = require("./message.model");
require('rxjs/Rx');
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.getMessages = function () {
        return this._http.get('http://localhost:3000/messages')
            .map(function (data) {
            console.log('here we are');
            var extracted = data.json();
            var msgArray = [];
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                msgArray.push(new message_model_1.Message(element.content));
                console.log(element.content);
            }
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/messages', body, { headers: headers });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCw4QkFBd0IsaUJBQWlCLENBQUMsQ0FBQTtBQUUxQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBQ0ksd0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVuQyxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO2FBQ2xELEdBQUcsQ0FBRSxVQUFDLElBQWE7WUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUzQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1lBRS9CLEdBQUcsQ0FBQSxDQUFnQixVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTlCLElBQUksT0FBTyxTQUFBO2dCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWlCO1FBQ3pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBekJMO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUEyQmIscUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHNCQUFjLGlCQTBCMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlLm1vZGVsXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXsgfVxuXG4gICAgZ2V0TWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlcycpXG4gICAgICAgICAgICAubWFwKCAoZGF0YTpSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIHdlIGFyZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZ0FycmF5OiBNZXNzYWdlW10gPSBbXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2YgZXh0cmFjdGVkLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbXNnQXJyYXkucHVzaChuZXcgTWVzc2FnZShlbGVtZW50LmNvbnRlbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZ0FycmF5O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZU1lc3NhZ2UobWVzc2FnZSA6IE1lc3NhZ2UpIDogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlcycsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gICAgfVxuXG59Il19
