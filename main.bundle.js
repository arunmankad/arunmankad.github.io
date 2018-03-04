webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-header></app-header>-->\n<div class=\"row\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_visit_service__ = __webpack_require__("./src/app/services/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_people_service__ = __webpack_require__("./src/app/services/people.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'ust/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_9__services_visit_service__["a" /* VisitService */],
                __WEBPACK_IMPORTED_MODULE_10__services_people_service__["a" /* PeopleService */],
                __WEBPACK_IMPORTED_MODULE_11__services_event_service__["a" /* EventService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".page-footer {\n    padding-top: 0;\n    color: #fff;\n    background-color: #00bcd4;\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n}\n.page-footer span.center-align{\n    width: 100%;\n    display: block;\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n  <div class=\"footer-copyright\">\n    <span class=\" center-align\"> © 2018 UST Global</span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "nav .brand-logo {\n    font-size: 1.4rem;\n}\n.grey.darken-5{\n    background: #00bcd4 !important; \n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-5\">\n    <div class=\"row\">\n        <div class=\"col s12\">\n            <div class=\"nav-warpper blue\">\n                <a class=\"brand-logo left\"><i class=\"material-icons tiny\">view_agenda</i>Agenda Manager</a>\n            </div>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".grid-example{\n    width:auto !important;\n    padding:.6rem 1.5rem;\n}\n.ag-list{\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    float: left;\n    width: 100%;\n    margin-top: 0;\n}\n.ag-list .card{\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-right:1px solid  #dfe1e8;\n    \n}\n.disp-icon{\n    background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAhsRHR5yBwvvAAAD0ElEQVRo3u2Yb2hVZRzHv+dubtNSc2qKrT/OJFBDWVzfBLb0Ta03WhLECumFGphgSEQZglIg9pekfyMdrYyoFZSUJRVIEMJqEakZi/yTWajlxpzz7l736cXOnvOcP3f37uzsVed7uXDP7/t7ft/v8zvPc57DlVKkSJEixf8dTjDAPGWVVVZV6tD36tAxZzApMWYqq8U6pQ51OUQlrORPgrjAukTE69hvVf2Du4MJ03iXYviCujHKr6I7VPUNvP7TGDF3G93cPwb5eVx061ziB86aqpuGE2ZznlK4zKKY8hm+BSDHE1RKEnfwu2vnlqGUfT6pQX5lL638TMEX72RCLAMN7viNVqyeXgB2SuJhn8x+735TS5uP2xbLwFp32fl2HM8D8LWYSo8l8Vho+GquGDbPzTEMvAbAJ4HoAwD8m9FtmmKiHzovBYc77XrBXFRqWYwW/C1Jqg1Ea12Ox838epgROYNqd8kAvBqjA3cC0MdsX/QzAN4U75viB4qWaDE5h2IYmMgAAPuoMrHhdfeg6DLFny1aYq3J6R/aSKO08JE7+ieauZUmWt3rXmpFX/EFaAqsspbptTEMNBCNHVJGp0xeQ9EKHjOgc6M34HTq84hwv16UMjppAkuLVvCYM5GnWGlE3d4W56wknrZasiaygY0Mmox3YslL4pvQo33OEDHXKt8dPvWYzHFr2IrYBpYHDLzuUQet8Gnu8g3LctRij5OJa0DiO6vSADd6xD0Bb+1s5HayrKM1cBxtiC8v0WRV2uOnOikHf1EzFgOWToH5fuK+sgxsDhWs5jpmMo3J1JTzgDI6e72YI0k4OqwFJUaf101OX6DgM9riCxSUd7/eL+/qNz2iw1ogtMg5GvTWXHL+W4KOmMKFsjrnYRnNQHtUcyqsMyEK3UwNjXlylPLwJRV0scSu4t455wo79NYIN2CX0xOQn6Ths+OyLiqvvNtw/69gZKJWOkeiF8gEThZ13sv0UP4mwzaXXn5lgQ1FDTwXyq3mtMvluSYpAzWciZTvZ1Yod71hv0pIXpLYHGlgVyiv0npJezRJA1dxLiSf4/pQ3kMWf0OCBiSeChloCeVk+MWwnYnKRzxcCtSHclZb/NaEDUhs9xloi8j40eIXj1Uv/AfFdJ3Q1e7FoBZqkto0YD45VanJJJ9w5ibeAYmdZn4fSHw8wqP15XGQl5jFpeEGs9B6YQujcVwMSLwCwKcS740g/w8V42WgjhywlPmBVzI/3h4neUmihQMSuxkJ9yah5ESHqdccHdNBSTlrB3i7oaCCtgffkFKkSJEiRYo4+A/lrSvs2xBfZgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0yN1QxNzoyOTozMCswMTowMOx9Ai8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMjdUMTc6Mjk6MzArMDE6MDCdILqTAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==');\n    width: 40px;\n    height: 40px;\n    float: left;\n    background-size: 100% 100%;\n}\n.disp-label{\n    float: left;\n    padding-top: .8rem;\n}\n.disp-label{\n    float: left;\n    padding-top: .8rem;\n}\n.arrival-icon{\n    background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAhwLIDahPPW0AAAC7UlEQVRo3u2YWUhUYRTHz5iZmKElEVKoLy3Yoj1EIaRCGS1khGQWhBURZkELRBBYRBQYPfQQWIgZgVjUg1BWIxUIBYamYUoPhqgtZGGKZu7+enAcZvnuMnodiO7/8X7nnN9/vnu+5Y6ILVu2bNmy9b/LoXpImGyVaOmTXml0/AyyI1Zwky4mNc57rrONuRZUDsFhHLSPYVQappoLpBAaMHYJ2zlHGR8YppvLxIiIkEiyKjiUb+irl8ecYpUJ8ELyecEvd2Ybp5knIkIqTxgHqtjkn/YUc/pOGYeJU6KjOISTUY/oWnIIFSGELN561cn2TU7gtUkLE2qhiCwWuLIjyKGCQZ+YdhERwsmjxS+/QdUqJ+gLyASMUcc1yvmtHK0nhgJ+KMd61O8vnucBWtBTD/2aY5XaTZTrsRhnTrl6fbyIhzOMv2e8mHYbLsyp6xVzzGwk0ZTMAHyQs4SYwLtMbKbVUnwtiabh7hVeZBF8mAKfDZ0o0tjPMh28gwO0W4J/53cGsMO9ShvJ1HgBDZbAnWSoyn/yCnrDRq/R1TyzAD1EqeYBxku/8EqSRERYzB3Gpg3v4gqxeu2Vrkgap4yr/Jk2vInjRBh3eIUFk+yrDgon5tHMEluqcQua6pTfInXi8kUYmTzgM+uNLNywBN1POTuZ7Vq4adx2H2cFRgbmT/Pk+0IJe4h0VUuikA6v8WLj13BySuABqjjDSneVBM7TpIhzapMnN8VOkw0zqY/iFKdUOwY8fsR9yVZ/Z0icQTUyTbdhN484onEZrdHuDn18OJ2G4DFquEQKs3TqxPFVMz9Gz0C8DniUZkrYO3nvNZjJZHo16qzVT7zrEz5EHcUcY4OJfcy70hZGlAZ2aWW4moZ0WSPLJUFapV4apNkxEhjYw8JBKVU8zncUTbVi4BYuKmbgaNDwIiKKW2R6cA2E+nzYtJj4MLfYQiT1bvwg64KMFxEhljYAGpT/BATFQjR5ZAR98m3ZsmXLlq1/Tn8BmeIJcxUCKCwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDItMjhUMTE6MzI6NTQrMDE6MDDJPLNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAyLTI4VDExOjMyOjU0KzAxOjAwuGEL1wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');\n    width: 50px;\n    height: 50px;\n    margin: 0 auto;\n    background-size: 100% 100%;\n}\n.travel-icon{\n    background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAhsRHR5yBwvvAAAD0ElEQVRo3u2Yb2hVZRzHv+dubtNSc2qKrT/OJFBDWVzfBLb0Ta03WhLECumFGphgSEQZglIg9pekfyMdrYyoFZSUJRVIEMJqEakZi/yTWajlxpzz7l736cXOnvOcP3f37uzsVed7uXDP7/t7ft/v8zvPc57DlVKkSJEixf8dTjDAPGWVVVZV6tD36tAxZzApMWYqq8U6pQ51OUQlrORPgrjAukTE69hvVf2Du4MJ03iXYviCujHKr6I7VPUNvP7TGDF3G93cPwb5eVx061ziB86aqpuGE2ZznlK4zKKY8hm+BSDHE1RKEnfwu2vnlqGUfT6pQX5lL638TMEX72RCLAMN7viNVqyeXgB2SuJhn8x+735TS5uP2xbLwFp32fl2HM8D8LWYSo8l8Vho+GquGDbPzTEMvAbAJ4HoAwD8m9FtmmKiHzovBYc77XrBXFRqWYwW/C1Jqg1Ea12Ox838epgROYNqd8kAvBqjA3cC0MdsX/QzAN4U75viB4qWaDE5h2IYmMgAAPuoMrHhdfeg6DLFny1aYq3J6R/aSKO08JE7+ieauZUmWt3rXmpFX/EFaAqsspbptTEMNBCNHVJGp0xeQ9EKHjOgc6M34HTq84hwv16UMjppAkuLVvCYM5GnWGlE3d4W56wknrZasiaygY0Mmox3YslL4pvQo33OEDHXKt8dPvWYzHFr2IrYBpYHDLzuUQet8Gnu8g3LctRij5OJa0DiO6vSADd6xD0Bb+1s5HayrKM1cBxtiC8v0WRV2uOnOikHf1EzFgOWToH5fuK+sgxsDhWs5jpmMo3J1JTzgDI6e72YI0k4OqwFJUaf101OX6DgM9riCxSUd7/eL+/qNz2iw1ogtMg5GvTWXHL+W4KOmMKFsjrnYRnNQHtUcyqsMyEK3UwNjXlylPLwJRV0scSu4t455wo79NYIN2CX0xOQn6Ths+OyLiqvvNtw/69gZKJWOkeiF8gEThZ13sv0UP4mwzaXXn5lgQ1FDTwXyq3mtMvluSYpAzWciZTvZ1Yod71hv0pIXpLYHGlgVyiv0npJezRJA1dxLiSf4/pQ3kMWf0OCBiSeChloCeVk+MWwnYnKRzxcCtSHclZb/NaEDUhs9xloi8j40eIXj1Uv/AfFdJ3Q1e7FoBZqkto0YD45VanJJJ9w5ibeAYmdZn4fSHw8wqP15XGQl5jFpeEGs9B6YQujcVwMSLwCwKcS740g/w8V42WgjhywlPmBVzI/3h4neUmihQMSuxkJ9yah5ESHqdccHdNBSTlrB3i7oaCCtgffkFKkSJEiRYo4+A/lrSvs2xBfZgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0yN1QxNzoyOTozMCswMTowMOx9Ai8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMjdUMTc6Mjk6MzArMDE6MDCdILqTAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==');\n    width: 50px;\n    height: 50px;\n    margin: 0 auto;\n    background-size: 100% 100%;\n}\n.break-icon{\n    background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAhsRHAifyI//AAAEB0lEQVRo3u2YXWgcVRTHf2c3sg39QNtY+2F9qdoKJS0ooha0WFMCBREE+6KIbX0SfBGrL6mgwVrwQcmLL30xQmvaN0OkxIiIX0ilbixEqm0tzZq0pjUmu2lS3R4f5mZ2ZnZmsnNnt6viedmZO/fc85v/OffevSPU2bSNHWyhlUV8x/syU+/xowNn9SF9Xb/VslbsinbdiNBrdbf26e8abvsaG/wpHdZ4K2tn48Lvigh6Tj/Wgnt3rHEABwOBSzqgL+oG83TAtI41DuBBnTNBTunb2qE539NHXLB10WO0pAGQr/VR7qXIcSmEPL7oXi1umAax+mx0FdgY3SvTFLb/Af5JANK4oTXHPeZyROasAPROlgCX5UIztEEPmEl0XZ9uXJS4hWib+RW28kEM6HJ2cVfiarrOT3woV+IAJOSqOvwGPmOV5evv120BAL2fHaxkJXukVBWoi0tc5Kic9T3osQ4Pq+jxB1mmf5q83wz6jbuUvgf6wPxWGwCb1DQ26c/ckho2p+WB+x+t3x9gxA9wCV3QZTxw/04NPlGmvGsAtFXbQf5iYkGnMdCcblKjlRyh2xqgW45kQJfqINOcUMG7h8cpsJ4fKOoh03LaGuC0sxe08xhZbmIF1QKHA9wG5NittwBQtAYoOgC/mNvVNSkwBmbi/cEkAKUFfaKsBBmQgsn86kQKwEnR+igAeSsFTlaGsQdwavkA/cCpmhUYYhz41LRMWwNMGwAZYsg0zf+7jZ7bBZBBBv3vkUIBvZVOsgD8LF/wORdYR/T2MyiXNUuHScIM/TKTTgF0xLMybwfdF7sXPA76gsfjMIBes9oHrgFkWOMhegY4Gkt8HHjW07ImRRKKDsCop2mnZuWcmRNhNiBzejv3eVpGXSntEhAAaGMr0BVRgjO8CTzhq4/R9Ar4T3VvaIt8xGsh3ZXnZFhX8LKvtVBfBeBh3gK6marqfkL6NMNh7vC1plagJQAAL2leelGgjxKbuUqeT0DKKhykI9A7dQ2gO0MmyLHqE71u1q9Ceq4F0F6radgbrgDAk3RqD1/yvYyqsJ4tbOd5s1x5rWyW7hQKtFAIfbiYVwF0ghxLI4cYl3Ilm4nNqQGZ0FkWRXZqix1iXr1Us4AIDWqxpgPMe6ZaiAgtwxuqQHqAlAqkT8G/XQF7gDopYJuCCffLT0oFxilbDVBRLp0CUsbue3YFoGRxQlbnROUcTOyS4HqJWhzPSs65KhN4FzsFbJJgPOoFkLwMi16AlCn4DyjQ9BqwScG0eIM2oQb8qk0l9p/yAMgcv6UEyCf2z3sVsNHA79GfcCkq0e8HOJMYwOch59nLbM2+s+yV88bT+dFN7GdZgvC/8ooE0qZ3s4d2WhfwvMowh8T9tvg3QQIhk/gvBm4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDItMjdUMTc6Mjg6MDgrMDE6MDC+3yCVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAyLTI3VDE3OjI4OjA4KzAxOjAwz4KYKQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');\n    width: 50px;\n    height: 50px;\n    margin: 0 auto;\n    background-size: 100% 100%;\n    margin-bottom: 10px;\n}\n.card.card-only .card-content{\n        padding: 5px 24px;\n\n}\n.card.card-only.red .card-content{\n        padding: 10px 24px;\n\n}\n.card.card-only  .card-content .card-title {\n    display: block;\n    line-height: 20px;\n     margin-bottom: 0; \n}\n.modal {\n    display: none;\n    position: fixed;\n    left: 0;\n    right: 0;\n    background-color: #fafafa;\n    padding: 0;\n    max-height: auto;\n    width:50%;\n    margin: auto;\n    overflow-y: auto;\n    border-radius: 2px;\n    will-change: top, opacity;\n}\n.modal.modal-attend{\n    width: 400px;\n    padding: 5px 0 20px;\n}\n.modal .modal-content {\n    padding: 0;\n}\n.modal .modal-content  h6 {\n\n    text-align: center;\n    width: 100%;\n}\n.modal .modal-content  p {\n    font-size: 14px;\n    font-weight: 300;\n    text-align: center;\n    width: 100%;\n}\n.carousel .carousel-item {\n    width: 250px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #ddd;\n    padding:5px 10px;\n}\n.carousel .carousel-item.active {\n -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n         box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n    top: 0;\n    left: 0;\n    background: #fff;\n    \n}\n.card.ag-list .card-title{\n    border-bottom: 1.2px solid #d5d5d5;\n    display: table;\n}\n.carousel .carousel-item > img {\n    width: 100%;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    margin: 0 auto;\n    display: block;\n}\n.modal .modal-content p{\n    -webkit-margin-before: 0em;\n    -webkit-margin-after:0em;\n    text-align: center;\n    width: 100%;\n}\n.modal .btn-floating {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n.profile-wrapper img {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    border: 2px solid #ededed;\n    margin: 0 auto;\n    display: block;\n    left: 0;\n    right: 0;\n}\n.profile-wrapper h4 {\n    text-align: center;\n    display: block;\n    padding-bottom: 0;\n    border-bottom: none;\n    margin-bottom: 0px;\n    margin-top: 10px;\n    font-size: 1.1rem;\n}\n.profile-wrapper h5 {\n    text-align: center;\n    font-size: 1rem;\n    margin-top: 4px;\n}\n@media only screen and (max-width: 768px){\n    .modal {\n        display: none;\n        position: fixed;\n        left: 0;\n        right: 0;\n        background-color: #fafafa;\n        padding: 0;\n        max-height: auto;\n        width:90%;\n        margin: auto;\n        overflow-y: auto;\n        border-radius: 2px;\n        will-change: top, opacity;\n    }\n    .modal.modal-attend{\n    width: 90%;\n    padding: 5px 0 20px;\n}\n.card .card-content {\n    padding: 0 24px;\n    border-radius: 0 0 2px 2px;\n}\n.grid-example {\n     width: 100% !important; \n    padding: .6rem 1.5rem;\n}\n.ag-list .card{\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border: none;\n}\n.card.blue.darken-2 .card-content{\n    padding: 10px 24px;\n    border-radius: 0 0 2px 2px;\n}       \n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--UST-Client header-->\n<div class=\"row\" style=\"border-bottom: 1px solid #04b1c7\">\n  <div class=\"col s12 m12 12\">\n      <div class=\"card black-text\">\n          <div class=\"col s5 m4 l2 right\"><img class=\"responsive-img\" src=\"https://ust-utc.github.io/new/United_Technologies.png\"></div>\n          <div class=\"col s5 m4 l2 left\"><img class=\"responsive-img\" src=\"https://ust-utc.github.io/new/UST_Global_logo.png\"></div>\n      </div>\n  </div>\n</div>\n\n<!--Client banner-->\n<div class=\"row\" *ngIf=\"visit\">\n  <div class=\"col s12 m12 l12\" (click)=\"openModal();\">\n    <div class=\"card blue darken-2\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">{{visit.title}}</span>\n        <p><i class=\"material-icons tiny\">date_range</i><span style=\"margin-left: 5px;\">{{visit.startDate| date: 'MMM d, y'}}</span></p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"progress\" *ngIf=\"loadingIcon\">\n    <div class=\"indeterminate\"></div>\n</div>\n<span *ngFor=\"let event of events\">\n  <!--Arrival-->\n  <div class=\"row\" *ngIf=\"event.type == 'arrival'\">\n    <div class=\"col s12 m12 l12\">\n      <div class=\"card pink lighten-2 card-only\">\n        <div class=\"card-content white-text center-align\">\n          <div class=\"arrival-icon\"></div>\n          <span class=\"card-title\">Arival</span>\n          <h6>{{event.title}}</h6>\n          <h6>{{event.startTime}}</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Travel   -->\n  <div class=\"row\" *ngIf=\"event.type == 'travel'\">\n    <div class=\"col s12 m12 l12\">\n      <div class=\"card pink lighten-2 card-only\">\n        <div class=\"card-content white-text center-align\">\n          <div class=\"travel-icon\"></div>\n          <span class=\"card-title\">Travel</span>\n          <h6>{{event.title}}</h6>\n          <h6>{{event.startTime}} - {{event.endTime}}</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Events -->\n  <div class=\"row\" *ngIf=\"event.type == 'bay-walk' || event.type == 'corporate presentation' || event.type == 'session'\">\n      <div class=\"col s12 m12 l12\">\n      <div class=\"col s12 grid-example light-blue accent-3 z-depth-2\">\n        <span class=\"white-text\">{{event.title}}</span>\n      </div>       \n      <div class=\"card ag-list\">\n        <div class=\"\">\n          <div class=\"col s12 m12 l4\">\n            <div class=\"card white\">\n              <div class=\"card-content black-text\">\n                <span class=\"card-title\"> <i class=\"material-icons\">location_on</i> Time & Place</span>\n                <p>{{event.startTime}} - {{event.endTime}} ({{event.duration}} minutes)</p>\n                <p>{{event.location}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"\">\n          <div class=\"col s12 m12 l4\">\n            <div class=\"card white\">\n              <div class=\"card-content black-text\">\n                <span class=\"card-title\"> <i class=\"material-icons\">details</i> Details</span>\n                <p>{{event.description}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"\">\n          <div class=\"col s12 m12 l4\">\n            <div class=\"card white\">\n              <div class=\"card-content black-text\">\n                <span class=\"card-title\"> <i class=\"material-icons\">people_outline</i> Attendees</span>\n                <h6 *ngIf=\"event.anchor\"><span>Anchored by : </span><a href=\"javascript:void(0)\" *ngFor=\"let ar of event.anchor; let isLast=last\" (click)=\"openModalPeople(ar.id);\">{{ar.name}}{{isLast ? '' : ', '}}</a></h6>\n                <span *ngIf=\"event.attendees\"><a href=\"javascript:void(0)\" *ngFor=\"let atn of event.attendees; let isLast=last\" (click)=\"openModalPeople(atn.id);\" >{{atn.name}}{{isLast ? '' : ', '}}</a></span> \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Break-->\n  <div class=\"row\" *ngIf=\"event.type == 'break'\">\n    <div class=\"col s12 m12 l12\">\n      <div class=\"card red red lighten-1 card-only\">\n        <div class=\"card-content white-text center-align\">\n          <div class=\"break-icon\"></div>\n          <span class=\"card-title\">Break</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</span>\n\n<!--Client Details carousel popup-->\n<div id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n    <div #carousel class=\"carousel\" [ngClass]=\"{ 'initialized': showInitialized }\" materialize=\"carousel\" [materializeActions]=\"actions\">\n      <a *ngFor=\"let url of imageURLs\" class=\"carousel-item\">\n        <img [src]=\"url.image\">\n        <h6 class=\"black-text\">{{url.name}}</h6>\n        <p class=\"black-text\">{{url.designation}}</p>\n        <p class=\"black-text\">{{url.profile}}</p>\n      </a>\n    </div>\n  </div>\n  <a class=\"btn-floating red\"><i class=\"material-icons\" (click)=\"closeModal();\">close</i></a>\n</div>\n  \n<!--Attendies Model Popup-->\n<div id=\"modal1\" class=\"modal modal-attend\" materialize=\"modal\" [materializeParams]=\"peopleModelParams\" [materializeActions]=\"modalActionDetail\">\n  <div class=\"modal-content\">\n      <div class=\"profile-wrapper\">\n          <div class=\"close\"></div>\n          <img *ngIf=\"peopleModelParams[0]?.people.photo\"  src=\"{{peopleModelParams[0]?.people.photo}}\">\n          <h4 class=\"ng-binding\">{{peopleModelParams[0]?.people.name}}</h4>\n          <h5 class=\"ng-binding\">{{peopleModelParams[0]?.people.designation}}</h5>\n      </div>\n  </div>\n  <a class=\"btn-floating white\"><i class=\"material-icons  black-text\" (click)=\"closeModalPeople();\">close</i></a>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_visit_service__ = __webpack_require__("./src/app/services/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_people_service__ = __webpack_require__("./src/app/services/people.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, eventService, visitService, peopleService) {
        this.route = route;
        this.eventService = eventService;
        this.visitService = visitService;
        this.peopleService = peopleService;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.modalActionDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.showInitialized = true;
        this.peopleModelParams = [];
        this.loadingIcon = true;
        this.actions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.imageURLs = [
            {
                name: "Mark Lalley",
                image: "https://ust-utc.github.io/new/client.jpg",
                designation: "CCS, VP & Chief Information Officer",
                profile: "Otis is a business unit of mutinational conglomerate UTC Otis manufactures and markets elevators, escalators, moving walkways and related equipment. A pioneer in its field, Otis is the world's largest manufacturer of vertical transportation systems, principally focusing on elevators, moving walkways and escalators."
            },
            {
                name: "Brian Galovich",
                image: "https://ust-utc.github.io/new/client.jpg",
                designation: "Corp, VP & Chief Information Officer, Global Business Systems",
                profile: "Otis is a business unit of mutinational conglomerate UTC Otis manufactures and markets elevators, escalators, moving walkways and related equipment. A pioneer in its field, Otis is the world's largest manufacturer of vertical transportation systems, principally focusing on elevators, moving walkways and escalators."
            },
            {
                name: "Venkatesh Iyer",
                image: "https://ust-utc.github.io/new/client.jpg",
                designation: "Corp, VP & Chief Technology Officer",
                profile: "Otis is a business unit of mutinational conglomerate UTC Otis manufactures and markets elevators, escalators, moving walkways and related equipment. A pioneer in its field, Otis is the world's largest manufacturer of vertical transportation systems, principally focusing on elevators, moving walkways and escalators."
            },
            {
                name: "Amarjeet Singh",
                image: "https://ust-utc.github.io/new/client.jpg",
                designation: "Corp VP, Partnerships & Ventures",
                profile: "Otis is a business unit of mutinational conglomerate UTC Otis manufactures and markets elevators, escalators, moving walkways and related equipment. A pioneer in its field, Otis is the world's largest manufacturer of vertical transportation systems, principally focusing on elevators, moving walkways and escalators."
            }
        ];
        // example of a hacky way to add an image to the carousel dynamically
        /*window.setTimeout(() => {
          this.imageURLs = [this.imageURLs[0], ...this.imageURLs]; // duplicate the first iamge
        },1000); */
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id === undefined) {
                _this.id = 'oGmFKEVGZXCLxNdAlLA2';
            }
            _this.eventService.getVisitEvents(_this.id).subscribe(function (events) {
                console.log(events);
                _this.events = events;
                _this.loadingIcon = false;
            });
            _this.visitService.getDetails(_this.id).subscribe(function (visit) {
                _this.visit = visit;
            });
        });
    };
    HomeComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
        this.carouselElement.nativeElement.classList.toggle("initialized");
        this.actions.emit("carousel");
    };
    HomeComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    HomeComponent.prototype.openModalPeople = function (people) {
        var _this = this;
        //this.loadingIcon = true;
        this.peopleService.getDetails(people).subscribe(function (ppl) {
            //this.loadingIcon = false;
            _this.peopleModelParams = [
                {
                    dismissible: false,
                    people: ppl,
                    complete: function () { console.log('closed!!!!!!!!'); }
                }
            ];
            _this.modalActionDetail.emit({ action: "modal", params: ['open'] });
        });
    };
    HomeComponent.prototype.closeModalPeople = function () {
        this.modalActionDetail.emit({ action: "modal", params: ['close'] });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('carousel'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "carouselElement", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_3__services_visit_service__["a" /* VisitService */], __WEBPACK_IMPORTED_MODULE_4__services_people_service__["a" /* PeopleService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(afs) {
        this.afs = afs;
        // this.items = this.afs.collection('items').valueChanges();
        this.itemsCollection = this.afs.collection('items', function (ref) { return ref.orderBy('title', 'asc'); });
        this.items = this.itemsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        this.visitsCollection = this.afs.collection('Visits', function (ref) { return ref.orderBy('title', 'asc'); });
        this.visits = this.visitsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    AppService.prototype.getItem = function () {
        return this.items;
    };
    AppService.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    AppService.prototype.deleteItem = function (item) {
        alert('inside service .. delete item method');
        // this.itemDoc = this.afs.doc('items/' + item.id);
        this.itemDoc = this.afs.doc("items/" + item.id);
        this.itemDoc.delete();
    };
    AppService.prototype.updateItem = function (item) {
        this.itemDoc = this.afs.doc("items/" + item.id);
        this.itemDoc.update(item);
    };
    AppService.prototype.addVisit = function (visit) {
        this.visitsCollection.add(visit);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService(afs) {
        this.afs = afs;
        // this.eventsCollection = this.afs.collection('events');
        // //this.events = this.eventsCollection.valueChanges();
        // this.events = this.eventsCollection.snapshotChanges().map(changes => {
        //   return changes.map(a => {
        //     const data = a.payload.doc.data() as Event;
        //     data.id = a.payload.doc.id;
        //     return data;
        //   });
        // });
    }
    EventService.prototype.get = function () {
        //return this.events;
    };
    EventService.prototype.getVisitEvents = function (visit) {
        this.eventsCollection = this.afs.collection('items', function (ref) {
            return ref.where('visitId', '==', visit).orderBy('orderby', 'asc');
        });
        return this.eventsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    };
    EventService.prototype.add = function (event) {
        this.eventsCollection.add(event);
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/people.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleService = /** @class */ (function () {
    function PeopleService(afs) {
        this.afs = afs;
    }
    PeopleService.prototype.get = function () {
        this.peopleCollection = this.afs.collection('people');
        return this.peopleCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    };
    PeopleService.prototype.add = function (people) {
        this.peopleCollection.add(people);
    };
    PeopleService.prototype.delete = function (people) {
        this.peopleDoc = this.afs.doc("people/" + people.id);
        this.peopleDoc.delete();
    };
    PeopleService.prototype.getDetails = function (peopleId) {
        console.log('PeopleService>>>', peopleId);
        return this.afs.doc("people/" + peopleId).valueChanges();
    };
    PeopleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/app/services/visit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisitService = /** @class */ (function () {
    function VisitService(afs) {
        this.afs = afs;
    }
    VisitService.prototype.get = function () {
        this.visitsCollection = this.afs.collection('visits');
        //this.visits = this.visitsCollection.valueChanges();
        return this.visitsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    };
    VisitService.prototype.add = function (visit) {
        this.visitsCollection.add(visit);
    };
    VisitService.prototype.delete = function (visit) {
        this.visitDoc = this.afs.doc("visits/" + visit.id);
        this.visitDoc.delete();
    };
    VisitService.prototype.getVisitDetails = function (visitID) {
        // this.visitsCollection = this.afs.collection('visits', ref => {
        //   return ref.where('id', '==', visitID);
        // });
        // return this.visitsCollection.snapshotChanges().map(changes => {
        //   return changes.map(a => {
        //     const data = a.payload.doc.data() as visit;
        //     data.id = a.payload.doc.id;
        //     return data;
        //   });
        // });
        this.visit = this.afs.collection('visits').doc(visitID).valueChanges();
        // return this.visitsCollection.snapshotChanges().map(changes => {
        //   return changes.map(a => {
        //     const data = a.payload.doc.data() as Visit;
        //     data.id = a.payload.doc.id;
        //     console.log(data);
        //     return data;
        //   });      
        // });    
    };
    VisitService.prototype.getVisit = function () {
        return this.visit;
    };
    ;
    VisitService.prototype.getDetails = function (visitId) {
        console.log('PeopleService>>>', visitId);
        return this.afs.doc("Visits/" + visitId).valueChanges();
    };
    VisitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], VisitService);
    return VisitService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBTrT2MUF0nutn8PTVuGFdpMLYlsOGiTic",
        authDomain: "utc-vist.firebaseapp.com",
        databaseURL: "https://utc-vist.firebaseio.com",
        projectId: "utc-vist",
        storageBucket: "utc-vist.appspot.com",
        messagingSenderId: "573791561636"
    }
};
/*

ustutc

apiKey: "AIzaSyBTrT2MUF0nutn8PTVuGFdpMLYlsOGiTic",
authDomain: "utc-vist.firebaseapp.com",
databaseURL: "https://utc-vist.firebaseio.com",
projectId: "utc-vist",
storageBucket: "utc-vist.appspot.com",
messagingSenderId: "573791561636"


arunmankad

apiKey: 'AIzaSyCYPJFw_gq2VFDPoRDKdYs0ZKeGtY_7lwM',
authDomain: 'testpro-88462.firebaseapp.com',
databaseURL: 'https://testpro-88462.firebaseio.com',
projectId: 'testpro-88462',
storageBucket: 'testpro-88462.appspot.com',
messagingSenderId: '266482963402'

*/ 


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map