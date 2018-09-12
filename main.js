(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span routerLink=\"/\" class=\"fill-space\">Offline Demo</span>\n  <span></span>\n  <span *ngIf=\"!status\">You are offline!</span>\n  <span *ngIf=\"status\">You are online!</span>\n</mat-toolbar>\n\n\n<div class=\"btnToggleGrp\">\n\n  <mat-button-toggle-group name=\"fontStyle\">\n    <mat-button-toggle value=\"queue\" routerLink=\"/queue\" routerLinkActive=\"active\">Queue</mat-button-toggle>\n    <mat-button-toggle value=\"task\" routerLink=\"/task\" routerLinkActive=\"active\">Task</mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _datasharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasharing.service */ "./src/app/datasharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(dataSharingService) {
        this.dataSharingService = dataSharingService;
        this.online$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(false)));
        this.networkStatus();
    }
    AppComponent.prototype.networkStatus = function () {
        var _this = this;
        this.online$.subscribe(function (value) {
            _this.status = value;
            //let update = this.status.toString();
            _this.dataSharingService.changeNetworkStatus(_this.status);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_datasharing_service__WEBPACK_IMPORTED_MODULE_3__["DatasharingService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _queue_component_queue_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue-component/queue-component.component */ "./src/app/queue-component/queue-component.component.ts");
/* harmony import */ var _task_component_task_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-component/task-component.component */ "./src/app/task-component/task-component.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'queue', component: _queue_component_queue_component_component__WEBPACK_IMPORTED_MODULE_5__["QueueComponentComponent"] },
    { path: 'task', component: _task_component_task_component_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponentComponent"] },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _queue_component_queue_component_component__WEBPACK_IMPORTED_MODULE_5__["QueueComponentComponent"],
                _task_component_task_component_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponentComponent"],
                _task_component_task_component_component__WEBPACK_IMPORTED_MODULE_6__["EditingDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
            ],
            entryComponents: [_task_component_task_component_component__WEBPACK_IMPORTED_MODULE_6__["EditingDialogComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datasharing.service.ts":
/*!****************************************!*\
  !*** ./src/app/datasharing.service.ts ***!
  \****************************************/
/*! exports provided: DatasharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasharingService", function() { return DatasharingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasharingService = /** @class */ (function () {
    function DatasharingService() {
        this.statusSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.networkStatus = this.statusSource.asObservable();
    }
    DatasharingService.prototype.changeNetworkStatus = function (stats) {
        this.statusSource.next(stats);
    };
    DatasharingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatasharingService);
    return DatasharingService;
}());



/***/ }),

/***/ "./src/app/manageprograms.service.ts":
/*!*******************************************!*\
  !*** ./src/app/manageprograms.service.ts ***!
  \*******************************************/
/*! exports provided: ManageprogramsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageprogramsService", function() { return ManageprogramsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageprogramsService = /** @class */ (function () {
    function ManageprogramsService(http) {
        this.http = http;
        this.programsUrl = "https://offline-demo-160ec.firebaseio.com/programs.json?orderBy=%22claimed%22&equalTo=true";
        this.allProgramsUrl = "https://offline-demo-160ec.firebaseio.com/programs.json?orderBy=%22claimed%22&equalTo=false";
        this.baseProgramUrl = "https://offline-demo-160ec.firebaseio.com/programs";
        var config = {
            apiKey: "AIzaSyDV7k2PMGjP0NidIVtAlpW-uapBJXZr0kE",
            authDomain: "offline-demo-160ec.firebaseapp.com",
            databaseURL: "https://offline-demo-160ec.firebaseio.com",
            projectId: "offline-demo-160ec",
            storageBucket: "offline-demo-160ec.appspot.com",
            messagingSenderId: "817878925518"
        };
        this.app = firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
        console.log(this.app.name);
        this.database = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]();
    }
    ManageprogramsService.prototype.getPrograms = function () {
        var self = this;
        //return this.database.ref('/programs').orderByChild("claimed").equalTo(false).once('value');
        return this.http.get(this.programsUrl);
    };
    ManageprogramsService.prototype.getAllPrograms = function () {
        var self = this;
        //return this.database.ref('/programs').orderByChild("claimed").equalTo(false).once('value');
        return this.http.get(this.allProgramsUrl);
    };
    ManageprogramsService.prototype.updateProgram = function (programId, program) {
        var url = this.baseProgramUrl + "/" + programId + ".json";
        return this.http.put(url, program);
    };
    ManageprogramsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManageprogramsService);
    return ManageprogramsService;
}());



/***/ }),

/***/ "./src/app/queue-component/queue-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/queue-component/queue-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"fill-space\">All Programs</span>\n  <span></span>\n  <button mat-raised-button color=\"primary\" (click)=\"downloadData()\">Download</button>\n</mat-toolbar>\n<table mat-table [dataSource]=\"dataSource\">\n\n  <ng-container matColumnDef=\"programId\">\n    <th mat-header-cell *matHeaderCellDef>\n      Program ID\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.programId}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"programName\">\n    <th mat-header-cell *matHeaderCellDef>\n      Original Title\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.programName}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"language\">\n    <th mat-header-cell *matHeaderCellDef>\n      Language\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.language}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"keyword\">\n    <th mat-header-cell *matHeaderCellDef>\n      Keyword\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.keyword}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"claimed\">\n    <th mat-header-cell *matHeaderCellDef>\n      Claim\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      <mat-checkbox [checked]=\"program.claimed\" (change)=\"valueChange(program, $event)\"></mat-checkbox>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\">\n\n  </tr>\n\n</table>\n"

/***/ }),

/***/ "./src/app/queue-component/queue-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/queue-component/queue-component.component.ts ***!
  \**************************************************************/
/*! exports provided: QueueComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueComponentComponent", function() { return QueueComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manageprograms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manageprograms.service */ "./src/app/manageprograms.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueueComponentComponent = /** @class */ (function () {
    function QueueComponentComponent(manageprogramsService, snackBar) {
        this.manageprogramsService = manageprogramsService;
        this.snackBar = snackBar;
        this.programs = [];
        this.downloadedData = [];
        this.columnsToDisplay = ['programId', 'programName', 'language', 'keyword', 'claimed'];
        //dataSource = PROGRAMS;
        this.dataSource = [];
    }
    QueueComponentComponent.prototype.downloadData = function () {
        //console.log(this.dataSource);
        if (this.downloadedData.length > 0) {
            var modifiedPrograms = [];
            var newObj = void 0;
            for (var i = 0; i < this.downloadedData.length; i++) {
                var obj = this.downloadedData[i];
                var programId = parseInt(obj.programId);
                programId = programId - 1;
                //let str: string = "{\""+programId+"\":{\"claimed\": true}}";
                //newObj = JSON.parse(str);
                //console.log(newObj);
                //modifiedPrograms.push(newObj);
                this.manageprogramsService.database.ref("/programs").child(programId).update({ "claimed": true });
            }
            this.snackBar.open('Programs downloaded successfully!', '', { duration: 2000 });
            console.log(modifiedPrograms);
            this.getAllPrograms();
        }
        // this.manageprogramsService.updateProgram(this.dataSource).subscribe(response => {
        //   console.log(response);
        //   //this.getAllPrograms();
        // });
    };
    QueueComponentComponent.prototype.valueChange = function (prg, event) {
        //console.log(prg);
        //console.log(event.checked);
        //if program checked
        if (event.checked) {
            //prg.claimed = true;
            this.downloadedData.push(prg);
            prg.claimed = true;
            console.log(this.dataSource);
        }
        else {
            for (var i = 0; i < this.downloadedData.length; i++) {
                if (prg.programId === this.downloadedData[i].programId) {
                    //console.log("prg to remove : "+this.downloadedData[i].programName);
                    this.downloadedData.splice(i, 1);
                    break;
                }
            }
        }
        //console.log(this.downloadedData);
    };
    QueueComponentComponent.prototype.getAllPrograms = function () {
        var _this = this;
        //let _this = this;
        this.manageprogramsService.getAllPrograms().subscribe(function (response) {
            var objKey = Object.keys(response);
            //console.log(objKey);
            for (var i = 0; i < objKey.length; i++) {
                var obj = response[objKey[i]];
                //console.log(obj);
                _this.programs.push(obj);
            }
            //console.log(this.dataSource);
            _this.dataSource = _this.programs;
        }, function (error) {
        });
    };
    QueueComponentComponent.prototype.ngOnInit = function () {
        this.getAllPrograms();
    };
    QueueComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-queue-component',
            template: __webpack_require__(/*! ./queue-component.component.html */ "./src/app/queue-component/queue-component.component.html")
        }),
        __metadata("design:paramtypes", [_manageprograms_service__WEBPACK_IMPORTED_MODULE_1__["ManageprogramsService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], QueueComponentComponent);
    return QueueComponentComponent;
}());



/***/ }),

/***/ "./src/app/task-component/editing-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/task-component/editing-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Program Details</h3>\r\n<mat-dialog-content>\r\n  <form class=\"editingForm fullwidth\" name=\"editingForm\">\r\n    <table>\r\n\r\n    <tr>\r\n      <td>\r\n        <mat-form-field>\r\n          <mat-label>Program Id</mat-label>\r\n          <input matInput placeholder=\"program id\" value=\"{{data.programId}}\" disabled=\"true\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td></td>\r\n      <td>\r\n        <mat-form-field>\r\n          <mat-label>Program Title</mat-label>\r\n          <input matInput placeholder=\"title\" value=\"{{data.programName}}\" disabled=\"true\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>\r\n        <mat-form-field>\r\n          <mat-label>Language</mat-label>\r\n          <input matInput placeholder=\"language\" value=\"{{data.language}}\" disabled=\"true\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td></td>\r\n      <td>\r\n        <mat-form-field>\r\n          <mat-label>Keyword</mat-label>\r\n          <input matInput placeholder=\"keyword\" value=\"{{data.keyword}}\" disabled=\"true\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colSpan=\"10\">\r\n        <mat-form-field class=\"fullwidth\">\r\n          <mat-label>Copy Description</mat-label>\r\n          <textarea matInput placeholder=\"\"   [(ngModel)]=\"data.copyDesc\" name=\"copyDesc\"></textarea>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n\r\n    </table>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-raised-button color=\"warn\" (click)=\"closeDialog()\">Save</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/task-component/task-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/task-component/task-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"fill-space\">Downloaded Programs</span>\n  <span *ngIf=\"networkStatus && dataToSync\">You have data to be synced to server. <button mat-button color=\"warn\" (click)=\"syncData()\">Sync Now</button> </span>\n\n  <button mat-raised-button color=\"primary\" (click)=\"getPrograms()\">Refresh</button>\n\n</mat-toolbar>\n<div class=\"dark-overlay\" *ngIf=\"syncInProgress\">\n  <mat-spinner style=\"margin:0 auto;\" mode=\"indeterminate\" color=\"warn\"></mat-spinner>\n</div>\n\n<table mat-table [dataSource]=\"dataSource\">\n\n  <ng-container matColumnDef=\"programId\">\n    <th mat-header-cell *matHeaderCellDef>\n      Program ID\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.programId}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"programName\">\n    <th mat-header-cell *matHeaderCellDef>\n      Original Title\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.programName}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"language\">\n    <th mat-header-cell *matHeaderCellDef>\n      Language\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.language}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"keyword\">\n    <th mat-header-cell *matHeaderCellDef>\n      Keyword\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.keyword}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"copyDesc\">\n    <th mat-header-cell *matHeaderCellDef>\n      Copy\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      {{program.copyDesc}}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef>\n      Action\n    </th>\n    <td mat-cell *matCellDef=\"let program\">\n      <button mat-button (click)=\"openDialog(program)\">Edit</button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\">\n\n  </tr>\n\n</table>\n"

/***/ }),

/***/ "./src/app/task-component/task-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/task-component/task-component.component.ts ***!
  \************************************************************/
/*! exports provided: TaskComponentComponent, EditingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponentComponent", function() { return TaskComponentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditingDialogComponent", function() { return EditingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manageprograms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manageprograms.service */ "./src/app/manageprograms.service.ts");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _datasharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datasharing.service */ "./src/app/datasharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var TaskComponentComponent = /** @class */ (function () {
    function TaskComponentComponent(manageprogramsService, dialog, snackBar, dataSharingService) {
        this.manageprogramsService = manageprogramsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.dataSharingService = dataSharingService;
        this.programs = [];
        this.dataSource = [];
        this.downloadedData = [];
        this.columnsToDisplay = ['programId', 'programName', 'language', 'keyword', 'copyDesc', 'action'];
        this.networkStatus = true;
        this.dataToSync = false;
        this.syncInProgress = false;
        this.baseProgramUrl = "https://offline-demo-160ec.firebaseio.com/programs";
        this.isOffline = false;
    }
    TaskComponentComponent.prototype.getPrograms = function () {
        var _this = this;
        //let _this = this;
        this.manageprogramsService.getPrograms().subscribe(function (response) {
            _this.programs = [];
            /*if(response && response.val() == null) {
              console.log("no data retrieved");
              return;
            }
            let objKey = Object.keys(response.val());
            console.log(response.val());
            for(let i = 0; i<response.val().length; i++) {
              let obj = response.val()[i];
              //console.log(obj);
              _this.programs.push(obj);
            }
            _this.dataSource = _this.programs;
            localforage.setItem("userPrograms", _this.dataSource);
          });*/
            var objKey = Object.keys(response);
            //console.log(objKey);
            for (var i = 0; i < objKey.length; i++) {
                var obj = response[objKey[i]];
                //console.log(obj);
                _this.programs.push(obj);
            }
            //console.log(this.dataSource);
            _this.dataSource = _this.programs;
            localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"]("userPrograms", function () {
                localforage__WEBPACK_IMPORTED_MODULE_2__["removeItem"]('userProgrms', function () {
                    localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"]("userPrograms", response);
                });
            });
            //localforage.setItem("userPrograms", this.dataSource);
        });
    };
    TaskComponentComponent.prototype.openDialog = function (prg, event) {
        var _this = this;
        var dialogRef = this.dialog.open(EditingDialogComponent, {
            width: 'auto',
            data: prg
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log('The dialog was closed');
            _this.program = result;
            //console.log(this.program);
            if (_this.program && _this.program.copyDesc && _this.program.copyDesc != "") {
                _this.saveData(_this.program);
            }
        });
    };
    TaskComponentComponent.prototype.saveData = function (prg) {
        var _this = this;
        //let newObj: object;
        var programId = parseInt(prg.programId);
        programId = programId - 1;
        //let description = prg.copyDesc;
        this.updateLocalDS(prg);
        this.manageprogramsService.updateProgram(programId, prg).subscribe(function (response) {
            console.log("Program updated successfully in server!");
            //console.log(response);
            _this.snackBar.open('Program Updated Successfully on server!', '', { duration: 2000 });
        }, function (error) {
            console.log("Error while updating data to the server");
            _this.snackBar.open('Program Updated Successfully on Local Data Store!', '', { duration: 2000 });
            var queuedReq = [];
            var qObj = {
                "url": _this.baseProgramUrl + "/" + programId + ".json",
                "data": prg,
                "position": programId
            };
            localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"]("queuedReq").then(function (value) {
                if (value) {
                    queuedReq = value;
                }
                queuedReq.push(qObj);
                localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"]("queuedReq", queuedReq).then(function (value) {
                    console.log("Updated Q requests!");
                });
            });
        });
    };
    TaskComponentComponent.prototype.updateLocalDS = function (prg) {
        localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"]("userPrograms").then(function (value) {
            //console.log("Existing obj");
            //console.log(value);
            var objKey = Object.keys(value);
            //console.log(objKey);
            for (var i = 0; i < objKey.length; i++) {
                if (value[objKey[i]].programId == prg.programId) {
                    value[objKey[i]].copyDesc = prg.copyDesc;
                    break;
                }
            }
            localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"]("userPrograms", value).then(function (value) {
                console.log("Updated data in Local DS");
            }).catch(function (error) {
                console.log("Failed to update data in Local DS");
            });
        });
    };
    TaskComponentComponent.prototype.isDataToSync = function () {
        var _self = this;
        if (this.networkStatus) {
            localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"]("queuedReq").then(function (value) {
                if (value != null && value.length > 0) {
                    _self.dataToSync = true;
                }
                else {
                    _self.dataToSync = false;
                }
            })
                .catch(function (error) {
                console.log(error);
                _self.dataToSync = false;
            });
        }
    };
    TaskComponentComponent.prototype.syncData = function () {
        if (this.networkStatus && this.isDataToSync) {
            var _self_1 = this;
            var queuedReq_1 = [];
            localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"]("queuedReq").then(function (value) {
                queuedReq_1 = value;
                _self_1.updateQData(queuedReq_1, 0);
            })
                .catch(function (error) {
                console.log("Error while retrieving queued data!");
                console.log(error);
            });
        }
    };
    TaskComponentComponent.prototype.updateQData = function (queuedReq, position) {
        var _this = this;
        if (queuedReq && queuedReq.length > 0) {
            var qLength_1 = queuedReq.length;
            var reqObj_1 = queuedReq[position];
            this.syncInProgress = true;
            this.manageprogramsService.updateProgram(reqObj_1.position, reqObj_1.data).subscribe(function (response) {
                console.log(reqObj_1.position + " position synced to the server!");
                position = position + 1;
                if (qLength_1 === position) {
                    _this.syncInProgress = false;
                    var _self_2 = _this;
                    console.log("All Q request synced");
                    localforage__WEBPACK_IMPORTED_MODULE_2__["removeItem"]("queuedReq", function (response) {
                        _self_2.updateSyncFlag();
                        console.log("All Q requests removed from Local DS");
                        //_self.snackBar.open('All data updated to the server!', '', {duration: 2000});
                    });
                }
                else {
                    _this.updateQData(queuedReq, position);
                }
            }, function (error) {
                console.log(reqObj_1.position + "position failed to sync to the server!");
                if (qLength_1 === position) {
                    _this.syncInProgress = false;
                    var _self_3 = _this;
                    console.log("All Q request synced");
                    localforage__WEBPACK_IMPORTED_MODULE_2__["removeItem"]("queuedReq", function (response) {
                        _self_3.updateSyncFlag();
                        console.log("All Q requests removed from Local DS");
                        //_self.snackBar.open('All data updated to the server!', '', {duration: 2000});
                    });
                }
                else {
                    _this.updateQData(queuedReq, position + 1);
                }
            });
        }
    };
    TaskComponentComponent.prototype.updateSyncFlag = function () {
        this.dataToSync = false;
        this.snackBar.open('Offline data updated to the server!', '', { duration: 2000 });
    };
    TaskComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPrograms();
        this.dataSharingService.networkStatus.subscribe(function (status) {
            _this.networkStatus = status;
            _this.isDataToSync();
            //console.log("Status Updated: " +this.networkStatus);
        });
        this.isDataToSync();
    };
    TaskComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-component',
            template: __webpack_require__(/*! ./task-component.component.html */ "./src/app/task-component/task-component.component.html")
        }),
        __metadata("design:paramtypes", [_manageprograms_service__WEBPACK_IMPORTED_MODULE_1__["ManageprogramsService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _datasharing_service__WEBPACK_IMPORTED_MODULE_4__["DatasharingService"]])
    ], TaskComponentComponent);
    return TaskComponentComponent;
}());

var EditingDialogComponent = /** @class */ (function () {
    function EditingDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditingDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(this.data);
    };
    EditingDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditingDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'editing-dialog',
            template: __webpack_require__(/*! ./editing-dialog.component.html */ "./src/app/task-component/editing-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditingDialogComponent);
    return EditingDialogComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My Data\Site\checkout\codeyourpassion\development\cyp-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map