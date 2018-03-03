webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_item_item_component__ = __webpack_require__("../../../../../src/app/components/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_visits_visits_component__ = __webpack_require__("../../../../../src/app/components/visits/visits.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'visits', component: __WEBPACK_IMPORTED_MODULE_3__components_visits_visits_component__["a" /* VisitsComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_2__components_item_item_component__["a" /* ItemComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_visits_visits_component__["a" /* VisitsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n<!--\n<div class=\"fixed-action-btn toolbar\">\n    <a class=\"btn-floating btn-large red\">\n      <i class=\"fa fa-bars\"></i>\n    </a>\n    <ul>\n      <li class=\"waves-effect waves-light\"><a href=\"/visits#\"><i class=\"material-icons\">Visit Settings</i></a></li>\n      <li class=\"waves-effect waves-light\"><a href=\"/events#\"><i class=\"material-icons\">Events</i></a></li>\n      <li class=\"waves-effect waves-light\"><a href=\"#!\"><i class=\"material-icons\">Guest Profile</i></a></li>\n      <li class=\"waves-effect waves-light\"><a href=\"#!\"><i class=\"material-icons\">UST Global</i></a></li>\n    </ul>\n  </div>\n-->\n<footer class=\"page-footer\">\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n      © 2018 Copyright UST Global\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n      </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        var now = __WEBPACK_IMPORTED_MODULE_1_moment__(); // add this 2 of 4
        console.log('hello world', now.format()); // add this 3 of 4
        console.log(now.add(7, 'days').format());
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular2_ui_switch_src__ = __webpack_require__("../../../../angular2-ui-switch/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_item_item_component__ = __webpack_require__("../../../../../src/app/components/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_visits_service__ = __webpack_require__("../../../../../src/app/services/visits.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_item_add_item_component__ = __webpack_require__("../../../../../src/app/components/add-item/add-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_visits_visits_component__ = __webpack_require__("../../../../../src/app/components/visits/visits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_visit_add_visit_component__ = __webpack_require__("../../../../../src/app/components/add-visit/add-visit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { MomentModule } from 'angular2-moment';














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_add_item_add_item_component__["a" /* AddItemComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_visits_visits_component__["a" /* VisitsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_add_visit_add_visit_component__["a" /* AddVisitComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_dragula_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_8__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_sortablejs__["SortablejsModule"].forRoot({
                animation: 200,
            }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_14__services_visits_service__["a" /* VisitsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input type=\"text\" placeholder=\"add title\" [(ngModel)]=\"item.title\" name=\"title\" >\n          <label>Title</label>\n        </div>\n        <div class=\"input-field col s6\">\n            <input type=\"text\" placeholder=\"add description\" [(ngModel)]=\"item.description\" name=\"description\" >\n            <label>Description</label>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input type=\"text\" placeholder=\"add attendees\" [(ngModel)]=\"item.attendees\" name=\"attendees\" >\n            <label>Attendees</label>\n          </div>\n          <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"add type\" [(ngModel)]=\"item.type\" name=\"type\" >\n              <label>Type</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s3\">\n                <input type=\"text\" placeholder=\"add duration\" [(ngModel)]=\"item.duration\" name=\"duration\" >\n                <label>Duration</label>\n            </div>\n            <div class=\"input-field col s3\">\n                <input type=\"text\" placeholder=\"order by\" [(ngModel)]=\"item.orderby\" name=\"orderby\" >\n                <label>orderby</label>\n            </div>\n            <div class=\"input-field col s6\">\n                <input type=\"text\" placeholder=\"location\" [(ngModel)]=\"item.location\" name=\"location\" >\n                <label>Location</label>\n            </div>\n          </div>\n      \n      <div class=\"row\">\n        <!--\n          <div class=\"input-field col s6\">\n              <a class='dropdown-button btn' data-activates='dropdown1'>{{visitName}}</a>\n              <ul id='dropdown1' class='dropdown-content'>\n                <li *ngFor=\"let visit of visits\" ><a (click)=\"selectVisit($event,visit)\">{{visit.title}}</a></li>\n              </ul>\n            </div>\n        -->\n            <input type=\"submit\" value=\"Submit\" class=\"btn\">\n      </div>\n    \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-item/add-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_visits_service__ = __webpack_require__("../../../../../src/app/services/visits.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddItemComponent = (function () {
    function AddItemComponent(itemService, visitsService) {
        this.itemService = itemService;
        this.visitsService = visitsService;
        this.item = {
            title: '',
            description: '',
            visitId: '',
            attendees: '',
            duration: 0,
            orderby: 0,
            type: '',
            location: '',
            startTime: '',
            endTime: ''
        };
        this.visitName = 'Select Visit';
        this.visitId = '';
    }
    AddItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visitsService.getVisits().subscribe(function (visits) {
            console.log(visits);
            _this.visits = visits;
        });
        this.visitsService.currentMessage.subscribe(function (message) { return _this.message = message; });
    };
    AddItemComponent.prototype.onSubmit = function () {
        console.log('**********************' + this.message.id + '+' + this.item);
        if (this.item.title !== '' && this.item.description !== '' && this.message.id !== '') {
            alert('success - ' + this.item.visitId);
            this.item.visitId = this.message.id;
            this.itemService.addItem(this.item);
            this.item.title = '';
            this.item.description = '';
            this.item.visitId = '';
            this.item.type = '';
            this.item.location = '';
            this.item.attendees = '';
            this.item.duration = 0;
            this.item.orderby = 0;
        }
    };
    AddItemComponent.prototype.selectVisit = function (event, visit) {
        console.log(visit);
        this.visitName = visit.title;
        this.visitId = visit.id;
        this.item.visitId = this.visitId;
    };
    return AddItemComponent;
}());
AddItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-item',
        template: __webpack_require__("../../../../../src/app/components/add-item/add-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-item/add-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_visits_service__["a" /* VisitsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_visits_service__["a" /* VisitsService */]) === "function" && _b || Object])
], AddItemComponent);

var _a, _b;
//# sourceMappingURL=add-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-visit/add-visit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-visit/add-visit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-content\">\n      <span class=\"card-title\">Add Visit</span>\n      <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input type=\"text\" placeholder=\"add title\" [(ngModel)]=\"visit.title\" name=\"title\" >\n            <label>Title</label>\n          </div>\n          <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"add description\" [(ngModel)]=\"visit.description\" name=\"description\" >\n              <label>Description</label>\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"YYYY-MM-DD\" [(ngModel)]=\"visit.startDate\" name=\"title\" >\n              <label>Start Date</label>\n            </div>\n            <div class=\"input-field col s6\">\n                <input type=\"text\" placeholder=\"Hrs:Mins(24 hr format)\" [(ngModel)]=\"visit.startTime\" name=\"description\" >\n                <label>Time</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"Logo url\" [(ngModel)]=\"visit.logo\" name=\"title\" >\n              <label>Logo</label>\n            </div>\n            <div class=\"input-field col s6\">\n                <input type=\"text\" placeholder=\"Hrs:Mins(24 hr format)\" [(ngModel)]=\"visit.notes\" name=\"description\" >\n                <label>Notes</label>\n            </div>\n        </div>\n        <input type=\"submit\" value=\"Submit\" class=\"btn\">\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/add-visit/add-visit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVisitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_visits_service__ = __webpack_require__("../../../../../src/app/services/visits.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddVisitComponent = (function () {
    function AddVisitComponent(visitsService) {
        this.visitsService = visitsService;
        this.visit = {
            title: '',
            description: '',
            startDate: '',
            startTime: '',
            logo: '',
            notes: ''
        };
    }
    AddVisitComponent.prototype.ngOnInit = function () {
    };
    AddVisitComponent.prototype.onSubmit = function () {
        // tslint:disable-next-line:max-line-length
        if (this.visit.title !== '' && this.visit.description !== '' && this.visit.startDate !== '' && this.visit.startTime !== '' && this.visit.logo !== '' && this.visit.notes !== '') {
            alert('success');
            this.visitsService.addVisit(this.visit);
            this.visit.title = '';
            this.visit.description = '';
        }
    };
    return AddVisitComponent;
}());
AddVisitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-visit',
        template: __webpack_require__("../../../../../src/app/components/add-visit/add-visit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-visit/add-visit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_visits_service__["a" /* VisitsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_visits_service__["a" /* VisitsService */]) === "function" && _a || Object])
], AddVisitComponent);

var _a;
//# sourceMappingURL=add-visit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"col s6\">\n<div class=\"row\">\n    <div class=\"input-field col s6\">\n      <label>Visit:{{message.title}}</label>\n    </div>\n    <div class=\"input-field col s6\">\n        <label>logo: {{message.logo}}</label>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"input-field col s6\">\n      <label>Description: {{message.description}}</label>\n    </div>\n    <div class=\"input-field col s6\">\n        <label>Date: {{message.startDate}}, {{message.startTime}}</label>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"input-field col s6\">\n      \n    </div>\n    <div class=\"input-field col s6\">\n        \n    </div>\n</div>\n</div> \n\n<button  (click)=\"filterEvents()\"  class=\"btn blue\">filter</button>\n<!-- \n<form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input type=\"text\" placeholder=\"add date\" [(ngModel)]=\"dateTime.date\" name=\"date\" >\n        <label>Date</label>\n      </div>\n      <div class=\"input-field col s6\">\n          <input type=\"text\" placeholder=\"add time\" [(ngModel)]=\"dateTime.time\" name=\"time\" >\n          <label>Time</label>\n      </div>\n      <div class=\"input-field col s6\">\n          <input type=\"text\" placeholder=\"add duration\" [(ngModel)]=\"dateTime.duration\" name=\"duration\" >\n          <label>Duration</label>\n      </div>\n    </div>\n    <input type=\"submit\" value=\"Submit\" class=\"btn\">\n  </form> \n-->\n<div *ngIf=\"items?.length >0; else noItems\">\n  <form class=\"row\">\n      <div class=\"col s6\">\n        <label>Enable re-ordering</label>\n        <ui-switch [(ngModel)]=\"enableDrag\" name=\"enableDrag\"></ui-switch>\n      </div>\n      <div class=\"col s6\">\n          <button *ngIf=\"reorderState\" (click)=\"saveTheOrder()\"  class=\"btn blue\">Save this order</button> \n      </div>\n  </form>\n  <div [dragula]='\"bag-items\"' [dragulaModel]='items'  >\n      <ul  *ngFor=\"let item of items\" class=\"collection\" [ngClass]=\"{'CLASS_HERE':!enableDrag}\" >\n          <li  class=\"collection-item\">\n              <strong>#{{item.orderby}}. </strong><strong>{{item.title}} :</strong>Starts at:  {{item.startTime}} Ends at:  {{item.endTime}} Duration:  {{item.duration}}\n            <a  class=\"secondary-content\">\n              <i (click)=\"editItem($event, item)\" class=\"fa fa-pencil\"></i>\n              <i *ngIf=\"editState && itemToEdit.id == item.id\" (click)=\"clearState()\" class=\"fa fa-compress\"></i>\n            </a>\n            <div *ngIf=\"editState && itemToEdit.id == item.id\">\n              <form (ngSubmit)=\"updateItem(item)\">\n                  <div class=\"row\">\n                      <div class=\"input-field col s6\">\n                        <input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"item.title\" name=\"title\" >\n                      </div>\n                      <div class=\"input-field col s6\">\n                          <input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"item.description\" name=\"description\" >\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"input-field col s6\">\n                        <input type=\"text\" placeholder=\"Attendees\" [(ngModel)]=\"item.attendees\" name=\"attendees\" >\n                      </div>\n                      <div class=\"input-field col s6\">\n                          <input type=\"text\" placeholder=\"Type\" [(ngModel)]=\"item.type\" name=\"type\" >\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"input-field col s3\">\n                        <input type=\"text\" placeholder=\"Duration\" [(ngModel)]=\"item.duration\" name=\"duration\" >\n                      </div>\n                      <div class=\"input-field col s3\">\n                          <input type=\"text\" placeholder=\"Orderby\" [(ngModel)]=\"item.orderby\" name=\"orderby\" >\n                      </div>\n                      <div class=\"input-field col s6\">\n                          <input type=\"text\" placeholder=\"Location\" [(ngModel)]=\"item.location\" name=\"location\" >\n                      </div>\n                  </div>\n                  <input type=\"submit\" value=\"Update Item\" class=\"btn orange\">\n                  <button (click)=\"deleteItem($event, item)\"  class=\"btn red\">Delete Item</button>\n              </form>\n            </div>\n          </li>\n        </ul>\n  </div>\n</div>\n\n<div class=\"fixed-action-btn\">\n    <a class=\"btn-floating btn-large red\">\n      <i class=\"fa fa-bars\"></i>\n    </a>\n    <ul>\n      <li><a class=\"btn-floating purple\"><i class=\"fa fa-plus\"></i></a></li>\n      <li><a class=\"btn-floating yellow darken-1\"><i class=\"fa fa-check\"></i></a></li>\n      <li><a class=\"btn-floating green\"><i class=\"fa fa-cloud\"></i></a></li>\n      <li><a class=\"btn-floating blue\"><i class=\"fa fa-code\"></i></a></li>\n    </ul>\n  </div>\n\n \n  \n<a href=\"#modal1\" class=\"waves-effect waves-light btn modal-trigger\" (click)=\"openModal()\">Modal</a>\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n    <h4>Add Events</h4>\n    <app-add-item></app-add-item>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close</a>\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat\">Agree</a>\n  </div>\n</div>\n\n<ng-template #noItems>\n  <hr>\n  <h5>There are no items to list</h5>\n  <div class=\"progress\">\n      <div class=\"indeterminate\"></div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_visits_service__ = __webpack_require__("../../../../../src/app/services/visits.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function ItemComponent(router, iteSmervice, visitsService, dragula, domSanitizer) {
        this.router = router;
        this.iteSmervice = iteSmervice;
        this.visitsService = visitsService;
        this.dragula = dragula;
        this.domSanitizer = domSanitizer;
        this.editState = false;
        this.reorderState = false;
        this.dateTime = {
            date: '',
            time: '',
            duration: ''
        };
        this.displayTime = {
            startTime: '',
            endTime: '',
            date: ''
        };
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var bag = this.dragula.find('bag-items');
        if (bag !== undefined) {
            this.dragula.destroy('bag-items');
        }
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit ran!' + this.message);
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 100);
        this.subscription = timer.subscribe(function (t) {
            console.log('+++++++++++++++++++' + t);
            if (t === 10) {
                _this.subscription.unsubscribe();
                if (_this.message.id === undefined) {
                    _this.router.navigate(['visits']);
                }
            }
        });
        this.visitsService.getVisits().subscribe(function (visits) {
            console.log(visits);
            _this.visits = visits;
        });
        this.visitsService.currentMessage.subscribe(function (message) { return _this.message = message; });
        // this.visitsService.getVisitDetailsById(this.message);
        this.iteSmervice.getItemByVisitId(this.message.id);
        this.iteSmervice.getItem().subscribe(function (items) {
            console.log(items);
            _this.items = items;
            // this.processReordering(this.items);
        });
        this.dragula
            .drag
            .subscribe(function (value) {
            console.log("Dragging the " + value[1].innerText + "!");
        });
        this.dragula
            .drop
            .subscribe(function (value) {
            // console.log(`Dropped the ${ value[1].innerText }!`);
            console.log(_this.items);
            _this.reorderState = true;
        });
        this.dragula.setOptions('bag-items', {
            revertOnSpill: true,
            moves: function (el, container, handle) {
                // debugger
                console.log(el.classList);
                if (el.classList.contains('CLASS_HERE')) {
                    return false;
                }
                return true;
            }
        });
    };
    ItemComponent.prototype.deleteItem = function (event, item) {
        alert('dbl click');
        this.clearState();
        this.iteSmervice.deleteItem(item);
    };
    ItemComponent.prototype.editItem = function (event, item) {
        this.editState = true;
        this.itemToEdit = item;
    };
    ItemComponent.prototype.updateItem = function (item) {
        this.iteSmervice.updateItem(item);
        this.clearState();
    };
    ItemComponent.prototype.clearState = function () {
        this.editState = false;
        this.itemToEdit = null;
    };
    ItemComponent.prototype.saveTheOrder = function () {
        this.processReordering(this.items);
    };
    ItemComponent.prototype.processReordering = function (items) {
        var temp = 0;
        // tslint:disable-next-line:no-unused-expression
        for (var i = 0; i < items.length; i++) {
            temp = i + 1;
            // alert(i + ', ' + items[i].orderby);
            // if (temp !== Number(items[i].orderby)) {
            this.items[i].orderby = i + 1;
            if (i === 0) {
                this.displayTime = this.timeFormater(this.message.startDate, this.message.startTime, items[i].duration);
                items[i].startTime = this.displayTime.startTime;
                items[i].endTime = this.displayTime.endTime;
                alert(items[i].startTime + '' + items[i].endTime);
            }
            else {
                this.displayTime = this.timeFormater(this.displayTime.date, this.displayTime.endTime, items[i].duration);
                items[i].startTime = this.displayTime.startTime;
                items[i].endTime = this.displayTime.endTime;
            }
            this.updateItem(this.items[i]);
            // }
        }
        this.reorderState = false;
    };
    ItemComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    ItemComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    ItemComponent.prototype.filterEvents = function () {
        var _this = this;
        alert('cool');
        // ls7fhCjlKou2inpMPW7t
        // C3Qy1RYc6ol349pHbkS5
        // visit: Visit = this.message
        this.iteSmervice.getItemByVisitId(this.message.id);
        this.iteSmervice.getItem().subscribe(function (items) {
            console.log(items);
            _this.items = items;
        });
    };
    ItemComponent.prototype.onSubmit = function () {
        // const a = moment(moment(this.dateTime.date + ' ' + this.dateTime.time)).add('minutes', 7);
        // alert(moment(a).format('hh:mm A'));
        // alert(a.hour() + ':' + a.minutes() + ':' + a.seconds());
        // tslint:disable-next-line:radix
        var myObject = this.timeFormater(this.dateTime.date, this.dateTime.time, parseInt(this.dateTime.duration));
        alert(myObject.startTime + ',' + myObject.endTime);
    };
    ItemComponent.prototype.timeFormater = function (date, time, duration) {
        // tslint:disable-next-line:label-position
        var displayTime = {
            startTime: '',
            endTime: '',
            date: ''
        };
        var originalTime = __WEBPACK_IMPORTED_MODULE_5_moment__(date + ' ' + time);
        var modifiedTime = __WEBPACK_IMPORTED_MODULE_5_moment__(__WEBPACK_IMPORTED_MODULE_5_moment__(date + ' ' + time)).add(duration, 'minutes');
        displayTime.startTime = __WEBPACK_IMPORTED_MODULE_5_moment__(originalTime).format('hh:mm A');
        displayTime.endTime = __WEBPACK_IMPORTED_MODULE_5_moment__(modifiedTime).format('hh:mm A');
        displayTime.date = __WEBPACK_IMPORTED_MODULE_5_moment__(modifiedTime).format('YYYY-MM-DD');
        alert('cool' + __WEBPACK_IMPORTED_MODULE_5_moment__(modifiedTime).format('YYYY-MM-DD'));
        return displayTime;
    };
    ItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/components/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_item_service__["a" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_item_service__["a" /* ItemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_visits_service__["a" /* VisitsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_visits_service__["a" /* VisitsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], ItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper black\">\n      <a href=\"#\" class=\"brand-logo right\">Logo</a>\n      <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n        <li><a href=\"#\">Visits</a></li>\n        <li><a href=\"#\">Events</a></li>\n        <li><a href=\"#\">People</a></li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visits/visits.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visits/visits.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"visits?.length >0; else noItems\">\n  <form class=\"row\">\n      <div class=\"col s6\">\n        <label>Enable re-ordering</label>\n        <ui-switch [(ngModel)]=\"enableDrag\" name=\"enableDrag\"></ui-switch>\n      </div>\n      <div class=\"col s6\">\n          <button *ngIf=\"reorderState\" (click)=\"saveTheOrder()\"  class=\"btn blue\">Save this order</button> \n      </div>\n  </form>\n    \n  <div [dragula]='\"bag-items\"' [dragulaModel]='items'  >\n      <ul  *ngFor=\"let visit of visits\" class=\"collection\" [ngClass]=\"{'CLASS_HERE':!enableDrag}\" >\n          <li  class=\"collection-item\">\n            <strong>{{visit.title}} :</strong> {{visit.description}}\n            <button (click)=\"showVisitDetails($event, visit)\"  class=\"btn green\">Detail</button>\n            <a href=\"#\" class=\"secondary-content\">\n              <i (click)=\"editVisit($event, visit)\" class=\"fa fa-pencil\"></i>\n              <i *ngIf=\"editState && visitToEdit.id == visit.id\" (click)=\"clearState()\" class=\"fa fa-compress\"></i>\n            </a>\n            <div *ngIf=\"editState && visitToEdit.id == visit.id\">\n              <form (ngSubmit)=\"updateVisit(visit)\">\n                  <div class=\"row\">\n                      <div class=\"input-field col s6\">\n                        <input type=\"text\" placeholder=\"add title\" [(ngModel)]=\"visit.title\" name=\"title\" >\n                      </div>\n                      <div class=\"input-field col s6\">\n                          <input type=\"text\" placeholder=\"add description\" [(ngModel)]=\"visit.description\" name=\"description\" >\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"input-field col s6\">\n                        <input type=\"text\" placeholder=\"YYYY-MM-DD\" [(ngModel)]=\"visit.startDate\" name=\"startDate\" >\n                      </div>\n                      <div class=\"input-field col s6\">\n                          <input type=\"text\" placeholder=\"Hrs:Mins(24 hr format)\" [(ngModel)]=\"visit.startTime\" name=\"startTime\" >\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"input-field col s6\">\n                        <input type=\"text\" placeholder=\"add logo\" [(ngModel)]=\"visit.logo\" name=\"logo\" >\n                      </div>\n                      <div class=\"input-field col s6\">\n                          <input type=\"text\" placeholder=\"add notes\" [(ngModel)]=\"visit.notes\" name=\"notes\" >\n                      </div>\n                  </div>\n                  <input type=\"submit\" value=\"Update Item\" class=\"btn orange\">\n                  <button (click)=\"deleteItem($event, item)\"  class=\"btn red\">Delete Item</button>\n              </form>\n            </div>\n          </li>\n        </ul>\n  </div>\n</div>\n\n<a href=\"#modal1\" class=\"waves-effect waves-light btn modal-trigger\" (click)=\"openModal()\">Modal</a>\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n  <div class=\"modal-content\">\n    <h4>Add Visits</h4>\n    <app-add-visit></app-add-visit>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close</a>\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat\">Agree</a>\n  </div>\n</div>\n\n<ng-template #noItems>\n  <hr>\n  <h5>There are no items to list</h5>\n  <div class=\"progress\">\n      <div class=\"indeterminate\"></div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/visits/visits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_visits_service__ = __webpack_require__("../../../../../src/app/services/visits.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitsComponent = (function () {
    function VisitsComponent(router, visitService) {
        this.router = router;
        this.visitService = visitService;
        this.editState = false;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VisitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visitService.getVisits().subscribe(function (visits) {
            console.log(visits);
            _this.visits = visits;
        });
    };
    VisitsComponent.prototype.editVisit = function (event, visit) {
        this.editState = true;
        this.visitToEdit = visit;
    };
    VisitsComponent.prototype.updateVisit = function (visit) {
        this.visitService.updateVisit(visit);
        this.clearState();
    };
    VisitsComponent.prototype.clearState = function () {
        this.editState = false;
        this.visitToEdit = null;
    };
    VisitsComponent.prototype.showVisitDetails = function (event, visit) {
        alert(visit.id);
        // this.router = Router;
        // this.router.parent.navigate(['/events']);
        this.visitService.selectedVisit(visit);
        this.router.navigate(['events']);
        return '';
    };
    VisitsComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    VisitsComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    return VisitsComponent;
}());
VisitsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-visits',
        template: __webpack_require__("../../../../../src/app/components/visits/visits.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visits/visits.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_visits_service__["a" /* VisitsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_visits_service__["a" /* VisitsService */]) === "function" && _b || Object])
], VisitsComponent);

var _a, _b;
//# sourceMappingURL=visits.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(afs) {
        this.afs = afs;
        // this.items = this.afs.collection('items').valueChanges();
        /*
        this.itemsCollection = this.afs.collection('items', ref => ref.where('visitId', '==', 'C3Qy1RYc6ol349pHbkS5').orderBy('title', 'asc'));
        this.items = this.itemsCollection.snapshotChanges().map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Item;
            data.id = a.payload.doc.id;
            return data;
          });
        }); */
        // this.getItemByVisitId();
    }
    ItemService.prototype.getItem = function () {
        return this.items;
    };
    ItemService.prototype.getItemByVisitId = function (visitId) {
        this.itemsCollection = this.afs.collection('items', function (ref) { return ref.where('visitId', '==', visitId).orderBy('orderby', 'asc'); });
        this.items = this.itemsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                console.log(data);
                return data;
            });
        });
        alert('mmmm');
        // return this.items;
    };
    ItemService.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    ItemService.prototype.deleteItem = function (item) {
        alert('inside service .. delete item method');
        // this.itemDoc = this.afs.doc('items/' + item.id);
        this.itemDoc = this.afs.doc("items/" + item.id);
        this.itemDoc.delete();
    };
    ItemService.prototype.updateItem = function (item) {
        this.itemDoc = this.afs.doc("items/" + item.id);
        this.itemDoc.update(item);
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/visits.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitsService = (function () {
    function VisitsService(afs) {
        this.afs = afs;
        this.visit = {
            title: '',
            description: '',
            startDate: '',
            startTime: '',
            logo: '',
            notes: ''
        };
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](this.visit);
        this.currentMessage = this.messageSource.asObservable();
        // this.items = this.afs.collection('items').valueChanges();
        /*
          this.visitsCollection = this.afs.collection('Visits', ref => ref.orderBy('title', 'asc'));
          this.visits = this.visitsCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Visit;
              data.id = a.payload.doc.id;
              return data;
            });
          });
          console.log('krishna raj');
          */
    }
    VisitsService.prototype.getVisits = function () {
        this.visitsCollection = this.afs.collection('Visits', function (ref) { return ref.orderBy('title', 'asc'); });
        this.visits = this.visitsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.visits;
    };
    VisitsService.prototype.addVisit = function (visit) {
        this.visitsCollection.add(visit);
    };
    VisitsService.prototype.deleteVisit = function (visit) {
        alert('inside service .. delete item method');
        // this.itemDoc = this.afs.doc('items/' + item.id);
        this.visitDoc = this.afs.doc("Visits/" + visit.id);
        this.visitDoc.delete();
    };
    VisitsService.prototype.updateVisit = function (visit) {
        this.visitDoc = this.afs.doc("Visits/" + visit.id);
        this.visitDoc.update(visit);
    };
    VisitsService.prototype.selectedVisit = function (visit) {
        this.messageSource.next(visit);
    };
    VisitsService.prototype.getVisitDetailsById = function (id) {
        console.log('~~~~~~~~~~~~~~~~~~' + this.visitsCollection.doc(id).valueChanges());
    };
    return VisitsService;
}());
VisitsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
], VisitsService);

var _a;
//# sourceMappingURL=visits.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCYPJFw_gq2VFDPoRDKdYs0ZKeGtY_7lwM',
        authDomain: 'testpro-88462.firebaseapp.com',
        databaseURL: 'https://testpro-88462.firebaseio.com',
        projectId: 'testpro-88462',
        storageBucket: 'testpro-88462.appspot.com',
        messagingSenderId: '266482963402'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map