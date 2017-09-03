webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039BE5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #09BE5\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>NCounter</h1>\n<app-encounter></app-encounter>\n<app-combatant></app-combatant>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__encounter_encounter_component__ = __webpack_require__("../../../../../src/app/encounter/encounter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__encounter_encounter_service__ = __webpack_require__("../../../../../src/app/encounter/encounter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__combatant_combatant_component__ = __webpack_require__("../../../../../src/app/combatant/combatant.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__encounter_encounter_component__["a" /* EncounterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__combatant_combatant_component__["a" /* CombatantComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__encounter_encounter_service__["a" /* EncounterService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/combatant/combatant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/combatant/combatant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\n  <h1>Add a Combatant!</h1>\n  <form>\n    <table>\n      <tr>\n        <td><label for=\"initiative\">Init: </label></td>\n        <td><input [(ngModel)]=\"combatant.initiative\" name=\"initiative\" /></td>\n      </tr>\n      <tr>\n        <td><label for=\"name\">Name: </label></td>\n        <td><input [(ngModel)]=\"combatant.name\" name=\"name\" /></td>\n      </tr>\n    </table>\n    <button (click)=\"addCombatant()\">Add</button>\n    <button (click)=\"reset()\">Reset</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/combatant/combatant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encounter_encounter_service__ = __webpack_require__("../../../../../src/app/encounter/encounter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combatant_model__ = __webpack_require__("../../../../../src/app/combatant/combatant.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CombatantComponent = (function () {
    function CombatantComponent(encounterService) {
        this.encounterService = encounterService;
    }
    CombatantComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    CombatantComponent.prototype.addCombatant = function () {
        this.encounterService.getCurrentEncounter().add(this.combatant);
        this.reset();
    };
    CombatantComponent.prototype.reset = function () {
        this.combatant = new __WEBPACK_IMPORTED_MODULE_2__combatant_model__["a" /* Combatant */]("", 0);
    };
    return CombatantComponent;
}());
CombatantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-combatant',
        template: __webpack_require__("../../../../../src/app/combatant/combatant.component.html"),
        styles: [__webpack_require__("../../../../../src/app/combatant/combatant.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__encounter_encounter_service__["a" /* EncounterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__encounter_encounter_service__["a" /* EncounterService */]) === "function" && _a || Object])
], CombatantComponent);

var _a;
//# sourceMappingURL=combatant.component.js.map

/***/ }),

/***/ "../../../../../src/app/combatant/combatant.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMBATANTS; });
var COMBATANTS = [
    { name: "Goblin", initiative: 5 },
    { name: "Billy Barbarian", initiative: 3 },
    { name: "Orc #7", initiative: 17 },
    { name: "Jill Wildwinder", initiative: 22 },
    { name: "Orc #2", initiative: 13 },
    { name: "Orc #1", initiative: 7 }
];
//# sourceMappingURL=combatant.mock.js.map

/***/ }),

/***/ "../../../../../src/app/combatant/combatant.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Combatant; });
var Combatant = (function () {
    function Combatant(name, initiative) {
        this.name = name;
        this.initiative = initiative;
    }
    return Combatant;
}());

;
//# sourceMappingURL=combatant.model.js.map

/***/ }),

/***/ "../../../../../src/app/encounter/encounter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: collapse;\n}\n\ntr {\n  border: 1px solid #CCC;\n}\n\ntr.selected {\n  background-color: #ACC;\n}\n\ntd {\n  padding: 4px 12px 4px 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/encounter/encounter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\n  <table>\n    <thead>\n      <tr><td>Init</td><td>Name</td><td></td></tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let combatant of currentEncounter.combatants\"\n        [ngClass]=\"{'selected': currentEncounter.currentCombatant == combatant }\">\n        <td>{{combatant.initiative}}</td>\n        <td>{{combatant.name}}</td>\n        <td><button (click)=\"currentEncounter.remove( combatant )\">X</button></td>\n      </tr>\n    </tbody>\n  </table>\n  <button (click)=\"currentEncounter.advance()\">Next</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/encounter/encounter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encounter_service__ = __webpack_require__("../../../../../src/app/encounter/encounter.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncounterComponent = (function () {
    function EncounterComponent(encounterService) {
        this.encounterService = encounterService;
    }
    Object.defineProperty(EncounterComponent.prototype, "currentEncounter", {
        get: function () {
            return this.encounterService.getCurrentEncounter();
        },
        enumerable: true,
        configurable: true
    });
    return EncounterComponent;
}());
EncounterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-encounter',
        template: __webpack_require__("../../../../../src/app/encounter/encounter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/encounter/encounter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__encounter_service__["a" /* EncounterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__encounter_service__["a" /* EncounterService */]) === "function" && _a || Object])
], EncounterComponent);

var _a;
//# sourceMappingURL=encounter.component.js.map

/***/ }),

/***/ "../../../../../src/app/encounter/encounter.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Encounter; });
var Encounter = (function () {
    function Encounter(combatants) {
        this._combatants = combatants;
        this.sort();
        this._currentIndex = 0;
    }
    Encounter.prototype.advance = function () {
        this._currentIndex = (this._currentIndex + 1) % this._combatants.length;
    };
    Encounter.prototype.remove = function (combatant) {
        this._combatants = this._combatants.filter(function (c) { return c != combatant; });
        if (this._currentIndex >= this._combatants.length)
            this._currentIndex = 0;
    };
    Encounter.prototype.add = function (combatant) {
        this._combatants.push(combatant);
        this.sort();
    };
    Encounter.prototype.sort = function () {
        this._combatants.sort(function (a, b) { return b.initiative - a.initiative; });
    };
    Object.defineProperty(Encounter.prototype, "currentCombatant", {
        get: function () {
            return this._combatants[this._currentIndex] || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encounter.prototype, "combatants", {
        get: function () {
            return this._combatants;
        },
        enumerable: true,
        configurable: true
    });
    return Encounter;
}());

//# sourceMappingURL=encounter.model.js.map

/***/ }),

/***/ "../../../../../src/app/encounter/encounter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encounter_model__ = __webpack_require__("../../../../../src/app/encounter/encounter.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combatant_combatant_mock__ = __webpack_require__("../../../../../src/app/combatant/combatant.mock.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncounterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EncounterService = (function () {
    function EncounterService() {
        this.currentEncounter = new __WEBPACK_IMPORTED_MODULE_1__encounter_model__["a" /* Encounter */](__WEBPACK_IMPORTED_MODULE_2__combatant_combatant_mock__["a" /* COMBATANTS */]);
    }
    EncounterService.prototype.getCurrentEncounter = function () {
        return this.currentEncounter;
    };
    return EncounterService;
}());
EncounterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], EncounterService);

//# sourceMappingURL=encounter.service.js.map

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
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map