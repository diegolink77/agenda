webpackJsonp([8],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    HomePage.prototype.cerrarSesion = function () {
        this.auth.logout();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agenda Electrónica</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Sobre la App</h1>\n    <p>Aplicación que permite manejar una agenda de\n    contactos.</p>\n    <h2>Sobre el desarrollador</h2>\n    <p>Grupo 6</p>\n    <p>https://github.com/100055143/ejercicio_optativo/</p>\n  <button ion-button block (click)="cerrarSesion()">Cerrar Sesión</button>\n  <h3>Agenda Electrónica</h3>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.user = { email: '', password: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.auth.registerUser(this.user.email, this.user.password)
            .then(function (user) {
            // El usuario se ha creado correctamente
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.auth.loginUser(this.user.email, this.user.password).then(function (user) {
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n    <form>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input\n          [(ngModel)]="user.email"\n          name="email"\n          type="text"\n          autocapitalize="off"\n          required\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input\n          [(ngModel)]="user.password"\n          name="password"\n          type="password"\n          required\n        >\n        </ion-input>\n      </ion-item>\n      <div padding>\n        <button\n            ion-button \n            (click)="login()"\n            type="submit"\n            color="primary"\n            block\n        >\n          Login\n        </button>\n\n        <button\n          ion-button \n          (click)="signin()"\n          type="submit"\n          color="secondary"\n          block\n        >\n          Dar de alta\n        </button>\n      </div>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		449,
		7
	],
	"../pages/libreta/libreta.module": [
		450,
		6
	],
	"../pages/login/login.module": [
		451,
		5
	],
	"../pages/nuevo-contacto/nuevo-contacto.module": [
		452,
		4
	],
	"../pages/nuevo-todo/nuevo-todo.module": [
		454,
		3
	],
	"../pages/todo/todo.module": [
		453,
		2
	],
	"../pages/ver-contacto/ver-contacto.module": [
		455,
		1
	],
	"../pages/ver-todo/ver-todo.module": [
		456,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibretaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contacts_service__ = __webpack_require__(74);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LibretaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibretaPage = /** @class */ (function () {
    function LibretaPage(navCtrl, navParams, ContactService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ContactService = ContactService;
        this.alertCtrl = alertCtrl;
    }
    LibretaPage.prototype.ionViewWillEnter = function () {
        //this.contacts=this.ContactService.getContacts();
        this.contacts$ = this.ContactService
            .getContacts() //Retorna la DB
            .snapshotChanges() //retorna los cambios en la DB (key and value)
            .map(
        /*
        Estas líneas retornan un array de  objetos con el id del registro y su contenido
        {
          "key":"value",
          contact.name,
          contact.organization,
          ...
        }
        */
        function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    LibretaPage.prototype.onLoadNewPage = function () {
        // Reset the content nav to have just this page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* NuevoContactoPage */]);
    };
    LibretaPage.prototype.onItemTapped = function ($event, contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["e" /* VerContactoPage */], contact);
    };
    LibretaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-libreta',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\libreta\libreta.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agenda Electrónica</ion-title>\n  </ion-navbar>\n\n  <ion-navbar>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="onLoadNewPage()">\n            <ion-icon name="add"></ion-icon>\n         </button>\n    </ion-buttons>\n    <ion-title>Contactos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let contact of contacts$ | async" (click)="onItemTapped($event, contact)">\n     <p><strong>Nombre: </strong>{{contact.nombre}}</p> \n     <p><strong>Organización: </strong>{{contact.organizacion}}</p>\n     <p><strong>Móvil: </strong>{{contact.numero}}</p>\n     <p><strong>Correo: </strong>{{contact.correo}}</p>\n    </button>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\libreta\libreta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_contacts_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LibretaPage);
    return LibretaPage;
}());

//# sourceMappingURL=libreta.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_todo_service__ = __webpack_require__(66);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodoPage = /** @class */ (function () {
    function TodoPage(navCtrl, navParams, TodoService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TodoService = TodoService;
        this.alertCtrl = alertCtrl;
    }
    TodoPage.prototype.ionViewWillEnter = function () {
        //this.contacts=this.ContactService.getContacts();
        this.tareas$ = this.TodoService
            .getTarea() //Retorna la DB
            .snapshotChanges() //retorna los cambios en la DB (key and value)
            .map(
        /*
        Estas líneas retornan un array de  objetos con el id del registro y su contenido
        {
          "key":"value",
          contact.name,
          contact.organization,
          ...
        }
        */
        function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    TodoPage.prototype.onLoadNewPage = function () {
        // Reset the content nav to have just this page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["c" /* NuevoTodoPage */]);
    };
    TodoPage.prototype.onItemTappedtarea = function ($event, tareap) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* VerTodoPage */], tareap);
    };
    TodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todo',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\todo\todo.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Agenda Electrónica</ion-title>\n  </ion-navbar>\n\n  <ion-navbar>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="onLoadNewPage()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title>Tareas Pendientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let tarea of tareas$ | async" (click)="onItemTappedtarea($event, tareap)">\n     <p><strong>Evento: </strong>{{tarea.Evento}}</p> \n     <p><strong>Fecha: </strong>{{tarea.Fecha}}</p>\n     <p><strong>Lugar: </strong>{{tarea.Lugar}}</p>\n     <p><strong>Prioridad: </strong>{{tarea.Prioridad}}</p>\n    </button>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\todo\todo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_todo_service__["a" /* TodoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], TodoPage);
    return TodoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoContactoPage = /** @class */ (function () {
    function NuevoContactoPage(navCtrl, contactService) {
        this.navCtrl = navCtrl;
        this.contactService = contactService;
    }
    NuevoContactoPage.prototype.onAddContact = function (value) {
        this.contactService.addContact(value).then(function (ref) {
            console.log(ref.key);
        });
        this.navCtrl.pop();
    };
    NuevoContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-contacto',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\nuevo-contacto\nuevo-contacto.html"*/'\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Agenda Electrónica</ion-title>\n    </ion-navbar>\n  \n    <ion-navbar>\n      <ion-title>Nuevo Contacto</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <form (ngSubmit)="onAddContact(f.value)" #f="ngForm">\n      <ion-list>\n          <ion-item>\n            <ion-label>Nombre</ion-label>\n            <ion-input type="text" placeholder="Texto" name="nombre" ngModel required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Organización</ion-label>\n            <ion-input type="text" placeholder="Texto" name="organizacion" ngModel required></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label>Numero</ion-label>\n              <ion-input type="text" placeholder="666666666" name="numero" ngModel></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Correo</ion-label>\n            <ion-input type="text" placeholder="name@example.com" name="correo" ngModel></ion-input>\n        </ion-item>\n\n      </ion-list>\n  \n       <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n\n  </form>\n\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\nuevo-contacto\nuevo-contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__["a" /* ContactService */]])
    ], NuevoContactoPage);
    return NuevoContactoPage;
}());

//# sourceMappingURL=nuevo-contacto.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerContactoPage = /** @class */ (function () {
    function VerContactoPage(navCtrl, navParams, contactService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactService = contactService;
        this.contact = this.navParams.data;
        console.log(this.contact.key);
    }
    VerContactoPage.prototype.onUpdateContact = function (value) {
        this.contactService.updateContact(value);
        this.navCtrl.pop();
    };
    VerContactoPage.prototype.onRemoveContact = function (value) {
        this.contactService.removeContact(value);
        this.navCtrl.pop();
    };
    VerContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-contacto',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\ver-contacto\ver-contacto.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Agenda Electrónica</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n\n            <ion-item>\n              <ion-label>Nombre</ion-label>\n              <ion-input type="text" [(ngModel)]="contact.nombre" name="nombre" ngModel required></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label>Organización</ion-label>\n              <ion-input type="text" [(ngModel)]="contact.organizacion" name="organizacion" ngModel required></ion-input>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Numero</ion-label>\n                <ion-input type="text" [(ngModel)]="contact.numero" name="numero" ngModel></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label>Correo</ion-label>\n              <ion-input type="text" [(ngModel)]="contact.correo" name="correo" ngModel></ion-input>\n          </ion-item>\n  \n    \n         <button ion-button block (click)="onUpdateContact($event, contact)">Modificar</button>\n\n         <button ion-button block (click)="onRemoveContact($event, contact)">Eliminar</button>\n \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\ver-contacto\ver-contacto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_contacts_service__["a" /* ContactService */]) === "function" && _c || Object])
    ], VerContactoPage);
    return VerContactoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=ver-contacto.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NuevoTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoTodoPage = /** @class */ (function () {
    function NuevoTodoPage(navCtrl, TodoService) {
        this.navCtrl = navCtrl;
        this.TodoService = TodoService;
    }
    NuevoTodoPage.prototype.onAddTarea = function (value) {
        this.TodoService.addTarea(value).then(function (ref) {
            console.log(ref.key);
        });
        this.navCtrl.pop();
    };
    NuevoTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-todo',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\nuevo-todo\nuevo-todo.html"*/'<!--\n  Generated template for the NuevoTodoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agenda Electrónica</ion-title>\n  </ion-navbar>\n\n  <ion-navbar>\n    <ion-title>Nueva Tarea</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form (ngSubmit)="onAddTarea(f.value)" #f="ngForm">\n    <ion-list>\n        <ion-item>\n          <ion-label>Evento</ion-label>\n          <ion-input type="text" placeholder="Tarea" name="Evento" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Fecha</ion-label>\n          <ion-input type="text" placeholder="Date" name="Fecha" ngModel required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label>Lugar</ion-label>\n            <ion-input type="text" placeholder="Lugar" name="Lugar" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Prioridad</ion-label>\n          <ion-input type="text" placeholder="Alto/medio/bajo" name="Prioridad" ngModel></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n     <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\nuevo-todo\nuevo-todo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]])
    ], NuevoTodoPage);
    return NuevoTodoPage;
}());

//# sourceMappingURL=nuevo-todo.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todo_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VerTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerTodoPage = /** @class */ (function () {
    function VerTodoPage(navCtrl, navParams, TodoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TodoService = TodoService;
        this.tareap = this.navParams.data;
        console.log(this.tareap.key);
    }
    VerTodoPage.prototype.onUpdateTarea = function (value) {
        this.TodoService.updateTarea(value);
        this.navCtrl.pop();
    };
    VerTodoPage.prototype.onRemoveTarea = function (value) {
        this.TodoService.removeTarea(value);
        this.navCtrl.pop();
    };
    VerTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-todo',template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\ver-todo\ver-todo.html"*/'<!--\n  Generated template for the VerTodoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Agenda Electrónica</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Evento</ion-label>\n    <ion-input type="text" [(ngModel)]="tareap.Evento" name="Evento" ngModel required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Fecha</ion-label>\n    <ion-input type="text" [(ngModel)]="tareap.Fecha" name="Fecha" ngModel required></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Lugar</ion-label>\n      <ion-input type="text" [(ngModel)]="tareap.Lugar" name="Lugar" ngModel></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Prioridad</ion-label>\n    <ion-input type="text" [(ngModel)]="tareap.Prioridad" name="Prioridad" ngModel></ion-input>\n</ion-item>\n\n\n<button ion-button block (click)="onUpdateTarea($event, tareap)">Modificar</button>\n\n<button ion-button block (click)="onRemoveTarea($event, tareap)">Eliminar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\pages\ver-todo\ver-todo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_todo_service__["a" /* TodoService */]])
    ], VerTodoPage);
    return VerTodoPage;
}());

//# sourceMappingURL=ver-todo.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_contacts_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_todo_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_firebase_credentials__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* LibretaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["d" /* TodoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["b" /* NuevoContactoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["e" /* VerContactoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["c" /* NuevoTodoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["f" /* VerTodoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/libreta/libreta.module#LibretaPageModule', name: 'LibretaPage', segment: 'libreta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-contacto/nuevo-contacto.module#NuevoContactoPageModule', name: 'NuevoContactoPage', segment: 'nuevo-contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todo/todo.module#TodoPageModule', name: 'TodoPage', segment: 'todo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-todo/nuevo-todo.module#NuevoTodoPageModule', name: 'NuevoTodoPage', segment: 'nuevo-todo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-contacto/ver-contacto.module#VerContactoPageModule', name: 'VerContactoPage', segment: 'ver-contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-todo/ver-todo.module#VerTodoPageModule', name: 'VerTodoPage', segment: 'ver-todo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__app_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                //  AngularFireModule.initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* LibretaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["d" /* TodoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["b" /* NuevoContactoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["e" /* VerContactoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["c" /* NuevoTodoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pages__["f" /* VerTodoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__services_contacts_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_7__services_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Contactos', component: __WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* LibretaPage */] },
            { title: 'Tareas Pendientes', component: __WEBPACK_IMPORTED_MODULE_4__pages_pages__["d" /* TodoPage */] },
            { title: 'Acerca de', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.auth.Session.subscribe(function (session) {
                if (session) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Diego\Desktop\Agendaprofesor\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Diego\Desktop\Agendaprofesor\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyC3GpCaX5BX1h1C8L5mpbgBfcidwT88eCc",
    authDomain: "agendaprofesor-a8988.firebaseapp.com",
    databaseURL: "https://agendaprofesor-a8988.firebaseio.com",
    projectId: "agendaprofesor-a8988",
    storageBucket: "agendaprofesor-a8988.appspot.com",
    messagingSenderId: "640588255756"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
        console.log('Hello AuthProvider Provider');
    }
    // Registro de usuario
    AuthProvider.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            // El usuario se ha creado correctamente.
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    // Login de usuario
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.reject(err); });
    };
    // Logout de usuario
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut().then(function () {
            // hemos salido
        });
    };
    Object.defineProperty(AuthProvider.prototype, "Session", {
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_libreta_libreta__ = __webpack_require__(285);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_libreta_libreta__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_todo_todo__ = __webpack_require__(286);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__pages_todo_todo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_nuevo_contacto_nuevo_contacto__ = __webpack_require__(287);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__pages_nuevo_contacto_nuevo_contacto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_ver_contacto_ver_contacto__ = __webpack_require__(288);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__pages_ver_contacto_ver_contacto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_nuevo_todo_nuevo_todo__ = __webpack_require__(289);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__pages_nuevo_todo_nuevo_todo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ver_todo_ver_todo__ = __webpack_require__(290);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__pages_ver_todo_ver_todo__["a"]; });






//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(db) {
        this.db = db;
        this.tareasRef = this.db.list('TareasPendientes');
    }
    TodoService.prototype.addTarea = function (value) {
        return this.tareasRef.push(value);
    };
    TodoService.prototype.updateTarea = function (value) {
        return this.tareasRef.update(value.key, value);
    };
    TodoService.prototype.removeTarea = function (value) {
        return this.tareasRef.remove(value.key);
    };
    TodoService.prototype.getTarea = function () {
        return this.tareasRef;
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TodoService);
    return TodoService;
}());

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = /** @class */ (function () {
    function ContactService(db) {
        this.db = db;
        this.contactsRef = this.db.list('Contacto');
    }
    ContactService.prototype.addContact = function (value) {
        return this.contactsRef.push(value);
    };
    ContactService.prototype.updateContact = function (value) {
        return this.contactsRef.update(value.key, value);
    };
    ContactService.prototype.removeContact = function (value) {
        return this.contactsRef.remove(value.key);
    };
    ContactService.prototype.getContacts = function () {
        return this.contactsRef;
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactService);
    return ContactService;
}());

//# sourceMappingURL=contacts.service.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map