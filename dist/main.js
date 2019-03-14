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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/checkout\" routerLinkActive=\"active\">Checkout</a>\n      </li>\n      </ul>\n    </div>\n  </nav>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angulartics2_gtm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angulartics2/gtm */ "./node_modules/angulartics2/gtm/fesm5/angulartics2-gtm.js");


//import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

var AppComponent = /** @class */ (function () {
    function AppComponent(angulartics2GoogleTagManager) {
        this.title = 'Google Analytics and Tag Manager Demo';
        angulartics2GoogleTagManager.startTracking();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angulartics2_gtm__WEBPACK_IMPORTED_MODULE_2__["Angulartics2GoogleTagManager"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");








//import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
var analyticsRoutes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"] },
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(analyticsRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                angulartics2__WEBPACK_IMPORTED_MODULE_7__["Angulartics2Module"].forRoot(),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5 text-center\">\n\t<img class=\"d-block mx-auto mb-4\" src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg\" alt=\"\"\n\t\twidth=\"72\" height=\"72\">\n\t<h2>Checkout form</h2>\n\t<p class=\"lead\">Below is an example form built entirely with Bootstrap's form controls. Each required form group has\n\t\ta validation state that can be triggered by attempting to submit the form without completing it.</p>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-md-4 order-md-2 mb-4\">\n\t\t<h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n\t\t\t<span class=\"text-muted\">Your cart</span>\n\t\t\t<span class=\"badge badge-secondary badge-pill\">3</span>\n\t\t</h4>\n\t\t<ul class=\"list-group mb-3\">\n\t\t\t<li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n\t\t\t\t<div>\n\t\t\t\t\t<h6 class=\"my-0\">Product name</h6>\n\t\t\t\t\t<small class=\"text-muted\">Brief description</small>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"text-muted\">$12</span>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n\t\t\t\t<div>\n\t\t\t\t\t<h6 class=\"my-0\">Second product</h6>\n\t\t\t\t\t<small class=\"text-muted\">Brief description</small>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"text-muted\">$8</span>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n\t\t\t\t<div>\n\t\t\t\t\t<h6 class=\"my-0\">Third item</h6>\n\t\t\t\t\t<small class=\"text-muted\">Brief description</small>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"text-muted\">$5</span>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item d-flex justify-content-between bg-light\">\n\t\t\t\t<div class=\"text-success\">\n\t\t\t\t\t<h6 class=\"my-0\">Promo code</h6>\n\t\t\t\t\t<small>EXAMPLECODE</small>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"text-success\">-$5</span>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item d-flex justify-content-between\">\n\t\t\t\t<span>Total (USD)</span>\n\t\t\t\t<strong>$20</strong>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<form class=\"card p-2\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t<div class=\"col-md-8 order-md-1\">\n\t\t<h4 class=\"mb-3\">Billing address</h4>\n\t\t<form class=\"needs-validation\" novalidate=\"\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 mb-3\">\n\t\t\t\t\t<label for=\"firstName\">First name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required=\"\">\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tValid first name is required.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 mb-3\">\n\t\t\t\t\t<label for=\"lastName\">Last name</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required=\"\">\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tValid last name is required.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t<span class=\"input-group-text\">@</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required=\"\">\n\t\t\t\t\t<div class=\"invalid-feedback\" style=\"width: 100%;\">\n\t\t\t\t\t\tYour username is required.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\tPlease enter a valid email address for shipping updates.\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label for=\"address\">Address</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required=\"\">\n\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\tPlease enter your shipping address.\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-3\">\n\t\t\t\t<label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-5 mb-3\">\n\t\t\t\t\t<label for=\"country\">Country</label>\n\t\t\t\t\t<select class=\"custom-select d-block w-100\" id=\"country\" required=\"\">\n\t\t\t\t\t\t<option value=\"\">Choose...</option>\n\t\t\t\t\t\t<option>United States</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tPlease select a valid country.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 mb-3\">\n\t\t\t\t\t<label for=\"state\">State</label>\n\t\t\t\t\t<select class=\"custom-select d-block w-100\" id=\"state\" required=\"\">\n\t\t\t\t\t\t<option value=\"\">Choose...</option>\n\t\t\t\t\t\t<option>California</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tPlease provide a valid state.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 mb-3\">\n\t\t\t\t\t<label for=\"zip\">Zip</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required=\"\">\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tZip code required.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr class=\"mb-4\">\n\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n\t\t\t\t<label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing\n\t\t\t\t\taddress</label>\n\t\t\t</div>\n\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n\t\t\t\t<label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n\t\t\t</div>\n\t\t\t<hr class=\"mb-4\">\n\n\t\t\t<h4 class=\"mb-3\">Payment</h4>\n\n\t\t\t<div class=\"d-block my-3\">\n\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t<input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\"\n\t\t\t\t\t\trequired=\"\">\n\t\t\t\t\t<label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t<input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n\t\t\t\t\t<label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t\t<input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required=\"\">\n\t\t\t\t\t<label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 mb-3\">\n\t\t\t\t\t<label for=\"cc-name\">Name on card</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\">\n\t\t\t\t\t<small class=\"text-muted\">Full name as displayed on card</small>\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tName on card is required\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 mb-3\">\n\t\t\t\t\t<label for=\"cc-number\">Credit card number</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required=\"\">\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tCredit card number is required\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 mb-3\">\n\t\t\t\t\t<label for=\"cc-expiration\">Expiration</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required=\"\">\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tExpiration date required\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 mb-3\">\n\t\t\t\t\t<label for=\"cc-expiration\">CVV</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\">\n\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\tSecurity code required\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr class=\"mb-4\">\n\t\t\t<button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t\t<div class=\"row\">\n\t\t  <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n\t\t\t<div class=\"sidebar-sticky\">\n\t\t\t  <ul class=\"nav flex-column\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link active\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg>\n\t\t\t\t\tDashboard <span class=\"sr-only\">(current)</span>\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\"><path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline></svg>\n\t\t\t\t\tOrders\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg>\n\t\t\t\t\tProducts\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n\t\t\t\t\tCustomers\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line></svg>\n\t\t\t\t\tReports\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline></svg>\n\t\t\t\t\tIntegrations\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t  </ul>\n  \n\t\t\t  <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n\t\t\t\t<span>Saved reports</span>\n\t\t\t\t<a class=\"d-flex align-items-center text-muted\" href=\"#\">\n\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>\n\t\t\t\t</a>\n\t\t\t  </h6>\n\t\t\t  <ul class=\"nav flex-column mb-2\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n\t\t\t\t\tCurrent month\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n\t\t\t\t\tLast quarter\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n\t\t\t\t\tSocial engagement\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t  <a class=\"nav-link\" href=\"#\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n\t\t\t\t\tYear-end sale\n\t\t\t\t  </a>\n\t\t\t\t</li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t  </nav>\n  \n\t\t  <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\n\t\t\t<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n\t\t\t  <h1 class=\"h2\">Dashboard</h1>\n\t\t\t  <div class=\"btn-toolbar mb-2 mb-md-0\">\n\t\t\t\t<div class=\"btn-group mr-2\">\n\t\t\t\t  <button class=\"btn btn-sm btn-outline-secondary\" id=\"share\">Share</button>\n\t\t\t\t  <button class=\"btn btn-sm btn-outline-secondary\" id=\"export\">Export</button>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" id=\"thisWeek\">\n\t\t\t\t  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>\n\t\t\t\t  This week\n\t\t\t\t</button>\n\t\t\t  </div>\n\t\t\t</div>\n  \n\t\t\t<canvas class=\"my-4 chartjs-render-monitor\" id=\"myChart\" width=\"2290\" height=\"966\" style=\"display: block; height: 483px; width: 1145px;\"></canvas>\n  \n\t\t\t<h2>Section title</h2>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t  <table class=\"table table-striped table-sm\">\n\t\t\t\t<thead>\n\t\t\t\t  <tr>\n\t\t\t\t\t<th>#</th>\n\t\t\t\t\t<th>Header</th>\n\t\t\t\t\t<th>Header</th>\n\t\t\t\t\t<th>Header</th>\n\t\t\t\t\t<th>Header</th>\n\t\t\t\t  </tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,001</td>\n\t\t\t\t\t<td>Lorem</td>\n\t\t\t\t\t<td>ipsum</td>\n\t\t\t\t\t<td>dolor</td>\n\t\t\t\t\t<td>sit</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,002</td>\n\t\t\t\t\t<td>amet</td>\n\t\t\t\t\t<td>consectetur</td>\n\t\t\t\t\t<td>adipiscing</td>\n\t\t\t\t\t<td>elit</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,003</td>\n\t\t\t\t\t<td>Integer</td>\n\t\t\t\t\t<td>nec</td>\n\t\t\t\t\t<td>odio</td>\n\t\t\t\t\t<td>Praesent</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,003</td>\n\t\t\t\t\t<td>libero</td>\n\t\t\t\t\t<td>Sed</td>\n\t\t\t\t\t<td>cursus</td>\n\t\t\t\t\t<td>ante</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,004</td>\n\t\t\t\t\t<td>dapibus</td>\n\t\t\t\t\t<td>diam</td>\n\t\t\t\t\t<td>Sed</td>\n\t\t\t\t\t<td>nisi</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,005</td>\n\t\t\t\t\t<td>Nulla</td>\n\t\t\t\t\t<td>quis</td>\n\t\t\t\t\t<td>sem</td>\n\t\t\t\t\t<td>at</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,006</td>\n\t\t\t\t\t<td>nibh</td>\n\t\t\t\t\t<td>elementum</td>\n\t\t\t\t\t<td>imperdiet</td>\n\t\t\t\t\t<td>Duis</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,007</td>\n\t\t\t\t\t<td>sagittis</td>\n\t\t\t\t\t<td>ipsum</td>\n\t\t\t\t\t<td>Praesent</td>\n\t\t\t\t\t<td>mauris</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,008</td>\n\t\t\t\t\t<td>Fusce</td>\n\t\t\t\t\t<td>nec</td>\n\t\t\t\t\t<td>tellus</td>\n\t\t\t\t\t<td>sed</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,009</td>\n\t\t\t\t\t<td>augue</td>\n\t\t\t\t\t<td>semper</td>\n\t\t\t\t\t<td>porta</td>\n\t\t\t\t\t<td>Mauris</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,010</td>\n\t\t\t\t\t<td>massa</td>\n\t\t\t\t\t<td>Vestibulum</td>\n\t\t\t\t\t<td>lacinia</td>\n\t\t\t\t\t<td>arcu</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,011</td>\n\t\t\t\t\t<td>eget</td>\n\t\t\t\t\t<td>nulla</td>\n\t\t\t\t\t<td>Class</td>\n\t\t\t\t\t<td>aptent</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,012</td>\n\t\t\t\t\t<td>taciti</td>\n\t\t\t\t\t<td>sociosqu</td>\n\t\t\t\t\t<td>ad</td>\n\t\t\t\t\t<td>litora</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,013</td>\n\t\t\t\t\t<td>torquent</td>\n\t\t\t\t\t<td>per</td>\n\t\t\t\t\t<td>conubia</td>\n\t\t\t\t\t<td>nostra</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,014</td>\n\t\t\t\t\t<td>per</td>\n\t\t\t\t\t<td>inceptos</td>\n\t\t\t\t\t<td>himenaeos</td>\n\t\t\t\t\t<td>Curabitur</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td>1,015</td>\n\t\t\t\t\t<td>sodales</td>\n\t\t\t\t\t<td>ligula</td>\n\t\t\t\t\t<td>in</td>\n\t\t\t\t\t<td>libero</td>\n\t\t\t\t  </tr>\n\t\t\t\t</tbody>\n\t\t\t  </table>\n\t\t\t</div>\n\t\t  </main>\n\t\t</div>\n\t  </div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! /Users/pip/Documents/www/analytics-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map