(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sales Counter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const order_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showOrderDetails(order_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "Span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const order_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showOrderDetails(order_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Detail No. ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.deliveryType);
} }
class AppComponent {
    constructor() {
        // let newOrder = gqlService.subscribe()
        this.orders = [
            {
                id: 2,
                customerId: 4,
                deliveryType: "Is the Open Air case in proper temperature clean and sanitized (interior and exterior)"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are 3 Bottle Wash/Rinse/Sanitize bottles available?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Is the Hot Beverage bar equipment available and working, free of spills, with clean/disinfected/sanitized coffee area counters?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are 3 Bottle Wash/Rinse/Sanitize bottles available?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are there 3 hand sanitizer stands on the sales floor for customer use, and are the dispensers filled with gel sanitizer solution?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are 3 Bottle Wash/Rinse/Sanitize bottles available?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are floors clean, to include edges and corners?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are 3 Bottle Wash/Rinse/Sanitize bottles available?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are all vault shelves fronted and faced and have proper shelf tags and POP tags?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are 3 Bottle Wash/Rinse/Sanitize bottles available?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are promotional items in-stock with POP tags?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "Are 3 Bottle Wash/Rinse/Sanitize bottles available?"
            },
            {
                id: 2,
                customerId: 4,
                deliveryType: "48 Is landscaping well manicured and free of debris?"
            },
        ];
    }
    ngOnInit() {
        this.orders.push({
            id: 2,
            customerId: 4,
            deliveryType: "Was the Franchisee/Store Leader at the store during the store walk?"
        });
        // this.subscribeToNewComments({})
    }
    showOrderDetails(orderId) {
        // console.log(orderId)
        let id = orderId;
    }
    ngOnDestroy() {
    }
    subscribeToNewComments(params) {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "container"], ["class", " row", 4, "ngFor", "ngForOf"], [1, "floating-btn"], [1, "row"], [1, "col"], [1, "course-preview"], [1, "course-info"], ["type", "button", 1, "btn", 3, "click"], [2, "width", "20px"], ["type", "button", 1, "btn-no", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 16, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Image\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');\n\n*[_ngcontent-%COMP%] {\n\tbox-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n\tbackground-image: linear-gradient(45deg, #7175da, #9790F2);\n\tfont-family: 'Muli', sans-serif;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tmin-height: 100vh;\n\tmargin: 0;\n}\n\n.orders-container[_ngcontent-%COMP%] {\n\tmargin: auto;\n    width: 50%;\n    padding: 10px;\n}\n\n.course[_ngcontent-%COMP%] {\n\tbackground-color: #fff;\n    border-radius: 10px;\n    border-color: green;\n\tbox-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);\n\tdisplay: flex;\n\tmax-width: 100%;\n\tmargin: 4px;\n\toverflow: hidden;\n\t\n}\n\n.row[_ngcontent-%COMP%] {\n    margin: 5px;\n    margin-top: 20px;\n    \n\toverflow: hidden;\n\tbackground-color: #fff;\n    border-radius: 10px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: green;\n\tbox-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);\n}\n\n.course[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n\topacity: 0.6;\n\tmargin: 0;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n}\n\n.course[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n\tletter-spacing: 1px;\n\tmargin: 10px 0;\n}\n\n.course-preview[_ngcontent-%COMP%] {\n\tbackground-color: green;\n\tcolor: #fff;\n\tpadding: 10px;\n\tmax-width: 250px;\n}\n\n.course-preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tfont-size: 12px;\n\topacity: 0.6;\n\tmargin-top: 30px;\n\ttext-decoration: none;\n}\n\n.course-info[_ngcontent-%COMP%] {\n\tpadding: 30px;\n\tposition: relative;\n\twidth: 100%;\n}\n\n.course-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: large;\n}\n\n.progress-container[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 30px;\n\tright: 30px;\n\ttext-align: right;\n\twidth: 150px;\n}\n\n.progress[_ngcontent-%COMP%] {\n\tbackground-color: #ddd;\n\tborder-radius: 3px;\n\theight: 5px;\n\twidth: 100%;\n}\n\n.progress[_ngcontent-%COMP%]::after {\n\tborder-radius: 3px;\n\tbackground-color: #2A265F;\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 5px;\n\twidth: 66%;\n}\n\n.progress-text[_ngcontent-%COMP%] {\n\tfont-size: 10px;\n\topacity: 0.6;\n\tletter-spacing: 1px;\n}\n\n.btn[_ngcontent-%COMP%] {\n\tbackground-color: #228B22;\n\tborder: 0;\n\tborder-radius: 50px;\n\tbox-shadow: 0 10px 10px rgba(70, 245, 35, 0.2);\n\tcolor: #fff;\n\tfont-size: 16px;\n\tpadding: 12px 25px;\n\t\n\tbottom: 30px;\n\tright: 30px;\n\tletter-spacing: 1px;\n}\n\n.btn-no[_ngcontent-%COMP%] {\n\tbackground-color: red;\n\tborder: 0;\n\tborder-radius: 50px;\n\tbox-shadow: 0 10px 10px rgba(70, 245, 35, 0.2);\n\tcolor: #fff;\n\tfont-size: 16px;\n\tpadding: 12px 25px;\n\t\n\tbottom: 30px;\n\tright: 30px;\n\tletter-spacing: 1px;\n}\n\n\n\n.social-panel-container[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tright: 0;\n\tbottom: 80px;\n\ttransform: translateX(100%);\n\ttransition: transform 0.4s ease-in-out;\n}\n\n.social-panel-container.visible[_ngcontent-%COMP%] {\n\ttransform: translateX(-10px);\n}\n\n.social-panel[_ngcontent-%COMP%] {\t\n\tbackground-color: #fff;\n\tborder-radius: 16px;\n\tbox-shadow: 0 16px 31px -17px rgba(0,31,97,0.6);\n\tborder: 5px solid #001F61;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: 'Muli';\n\tposition: relative;\n\theight: 169px;\t\n\twidth: 370px;\n\tmax-width: calc(100% - 10px);\n}\n\n.social-panel[_ngcontent-%COMP%]   button.close-btn[_ngcontent-%COMP%] {\n\tborder: 0;\n\tcolor: #97A5CE;\n\tcursor: pointer;\n\tfont-size: 20px;\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.social-panel[_ngcontent-%COMP%]   button.close-btn[_ngcontent-%COMP%]:focus {\n\toutline: none;\n}\n\n.social-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tbackground-color: #001F61;\n\tborder-radius: 0 0 10px 10px;\n\tcolor: #fff;\n\tfont-size: 14px;\n\tline-height: 18px;\n\tpadding: 2px 17px 6px;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 50%;\n\tmargin: 0;\n\ttransform: translateX(-50%);\n\ttext-align: center;\n\twidth: 235px;\n}\n\n.social-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n\tmargin: 0 5px;\n}\n\n.social-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #FF7500;\n\ttext-decoration: none;\n}\n\n.social-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n\tmargin: 20px 0;\n\tcolor: #97A5CE;\t\n\tfont-family: 'Muli';\t\n\tfont-size: 14px;\t\n\tline-height: 18px;\n\ttext-transform: uppercase;\n}\n\n.social-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n\n.social-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tmargin: 0 10px;\n}\n\n.social-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tborder: 1px solid #DCE1F2;\n\tborder-radius: 50%;\n\tcolor: #001F61;\n\tfont-size: 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 50px;\n\twidth: 50px;\n\ttext-decoration: none;\n}\n\n.social-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\tborder-color: #FF6A00;\n\tbox-shadow: 0 9px 12px -9px #FF6A00;\n}\n\n.floating-btn[_ngcontent-%COMP%] {\n\tborder-radius: 26.5px;\n\tbackground-color: #001F61;\n\tborder: 1px solid #001F61;\n\tbox-shadow: 0 16px 22px -17px #03153B;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tpadding: 12px 20px;\n\tposition: fixed;\n\tbottom: 20px;\n\tright: 20px;\n\tz-index: 999;\n}\n\n.floating-btn[_ngcontent-%COMP%]:hover {\n\tbackground-color: #ffffff;\n\tcolor: #001F61;\n}\n\n.floating-btn[_ngcontent-%COMP%]:focus {\n\toutline: none;\n}\n\n.floating-text[_ngcontent-%COMP%] {\n\tbackground-color: #001F61;\n\tborder-radius: 10px 10px 0 0;\n\tcolor: #fff;\n\tfont-family: 'Muli';\n\tpadding: 7px 15px;\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\ttext-align: center;\n\tz-index: 998;\n}\n\n.floating-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #FF7500;\n\ttext-decoration: none;\n}\n\n@media screen and (max-width: 480px) {\n\n\t.social-panel-container.visible[_ngcontent-%COMP%] {\n\t\ttransform: translateX(0px);\n\t}\n\t\n\t.floating-btn[_ngcontent-%COMP%] {\n\t\tright: 10px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOztBQUV4RTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFHQTtDQUNDLDBEQUEwRDtDQUMxRCwrQkFBK0I7Q0FDL0IsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxZQUFZO0lBQ1QsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7Q0FDQyxzQkFBc0I7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QiwwQ0FBMEM7Q0FDMUMsYUFBYTtDQUNiLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7O0NBRW5CLGdCQUFnQjtDQUNoQixzQkFBc0I7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCLDBDQUEwQztBQUMzQzs7QUFFQTtDQUNDLFlBQVk7Q0FDWixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsV0FBVztDQUNYLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixrQkFB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Q0FDWjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU11bGkmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbmJvZHkge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM3MTc1ZGEsICM5NzkwRjIpO1xuXHRmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdG1hcmdpbjogMDtcbn1cblxuLm9yZGVycy1jb250YWluZXIge1xuXHRtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY291cnNlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG5cdGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0ZGlzcGxheTogZmxleDtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IDRweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Lyogd2lkdGg6IDcwMHB4OyAqL1xufVxuLnJvdyB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcblx0Ym94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY291cnNlIGg2IHtcblx0b3BhY2l0eTogMC42O1xuXHRtYXJnaW46IDA7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb3Vyc2UgaDIge1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRtYXJnaW46IDEwcHggMDtcbn1cblxuLmNvdXJzZS1wcmV2aWV3IHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cdGNvbG9yOiAjZmZmO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4uY291cnNlLXByZXZpZXcgYSB7XG5cdGNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0b3BhY2l0eTogMC42O1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb3Vyc2UtaW5mbyB7XG5cdHBhZGRpbmc6IDMwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5jb3Vyc2UtaW5mbyBwIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDMwcHg7XG5cdHJpZ2h0OiAzMHB4O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0d2lkdGg6IDE1MHB4O1xufVxuXG4ucHJvZ3Jlc3Mge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGhlaWdodDogNXB4O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnByb2dyZXNzOjphZnRlciB7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzJBMjY1Rjtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRoZWlnaHQ6IDVweDtcblx0d2lkdGg6IDY2JTtcbn1cblxuLnByb2dyZXNzLXRleHQge1xuXHRmb250LXNpemU6IDEwcHg7XG5cdG9wYWNpdHk6IDAuNjtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMjhCMjI7XG5cdGJvcmRlcjogMDtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Ym94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSg3MCwgMjQ1LCAzNSwgMC4yKTtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0cGFkZGluZzogMTJweCAyNXB4O1xuXHQvKnBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cblx0Ym90dG9tOiAzMHB4O1xuXHRyaWdodDogMzBweDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJ0bi1ubyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0Ym9yZGVyOiAwO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRib3gtc2hhZG93OiAwIDEwcHggMTBweCByZ2JhKDcwLCAyNDUsIDM1LCAwLjIpO1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRwYWRkaW5nOiAxMnB4IDI1cHg7XG5cdC8qcG9zaXRpb246IGFic29sdXRlOyAqL1xuXHRib3R0b206IDMwcHg7XG5cdHJpZ2h0OiAzMHB4O1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4vKiBTT0NJQUwgUEFORUwgQ1NTICovXG4uc29jaWFsLXBhbmVsLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogODBweDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcbn1cblxuLnNvY2lhbC1wYW5lbC1jb250YWluZXIudmlzaWJsZSB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG59XG5cbi5zb2NpYWwtcGFuZWwge1x0XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGJveC1zaGFkb3c6IDAgMTZweCAzMXB4IC0xN3B4IHJnYmEoMCwzMSw5NywwLjYpO1xuXHRib3JkZXI6IDVweCBzb2xpZCAjMDAxRjYxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6ICdNdWxpJztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IDE2OXB4O1x0XG5cdHdpZHRoOiAzNzBweDtcblx0bWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbn1cblxuLnNvY2lhbC1wYW5lbCBidXR0b24uY2xvc2UtYnRuIHtcblx0Ym9yZGVyOiAwO1xuXHRjb2xvcjogIzk3QTVDRTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1cHg7XG5cdHJpZ2h0OiA1cHg7XG59XG5cbi5zb2NpYWwtcGFuZWwgYnV0dG9uLmNsb3NlLWJ0bjpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5zb2NpYWwtcGFuZWwgcCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDFGNjE7XG5cdGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRwYWRkaW5nOiAycHggMTdweCA2cHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiA1MCU7XG5cdG1hcmdpbjogMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAyMzVweDtcbn1cblxuLnNvY2lhbC1wYW5lbCBwIGkge1xuXHRtYXJnaW46IDAgNXB4O1xufVxuXG4uc29jaWFsLXBhbmVsIHAgYSB7XG5cdGNvbG9yOiAjRkY3NTAwO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zb2NpYWwtcGFuZWwgaDQge1xuXHRtYXJnaW46IDIwcHggMDtcblx0Y29sb3I6ICM5N0E1Q0U7XHRcblx0Zm9udC1mYW1pbHk6ICdNdWxpJztcdFxuXHRmb250LXNpemU6IDE0cHg7XHRcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zb2NpYWwtcGFuZWwgdWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cblxuLnNvY2lhbC1wYW5lbCB1bCBsaSB7XG5cdG1hcmdpbjogMCAxMHB4O1xufVxuXG4uc29jaWFsLXBhbmVsIHVsIGxpIGEge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjRENFMUYyO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGNvbG9yOiAjMDAxRjYxO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiA1MHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zb2NpYWwtcGFuZWwgdWwgbGkgYTpob3ZlciB7XG5cdGJvcmRlci1jb2xvcjogI0ZGNkEwMDtcblx0Ym94LXNoYWRvdzogMCA5cHggMTJweCAtOXB4ICNGRjZBMDA7XG59XG5cbi5mbG9hdGluZy1idG4ge1xuXHRib3JkZXItcmFkaXVzOiAyNi41cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDFGNjE7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDFGNjE7XG5cdGJveC1zaGFkb3c6IDAgMTZweCAyMnB4IC0xN3B4ICMwMzE1M0I7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdHBhZGRpbmc6IDEycHggMjBweDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDIwcHg7XG5cdHJpZ2h0OiAyMHB4O1xuXHR6LWluZGV4OiA5OTk7XG59XG5cbi5mbG9hdGluZy1idG46aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRjb2xvcjogIzAwMUY2MTtcbn1cblxuLmZsb2F0aW5nLWJ0bjpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5mbG9hdGluZy10ZXh0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMUY2MTtcblx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtZmFtaWx5OiAnTXVsaSc7XG5cdHBhZGRpbmc6IDdweCAxNXB4O1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0ei1pbmRleDogOTk4O1xufVxuXG4uZmxvYXRpbmctdGV4dCBhIHtcblx0Y29sb3I6ICNGRjc1MDA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuXHQuc29jaWFsLXBhbmVsLWNvbnRhaW5lci52aXNpYmxlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcblx0fVxuXHRcblx0LmZsb2F0aW5nLWJ0biB7XG5cdFx0cmlnaHQ6IDEwcHg7XG5cdH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zararcompany/Documents/XCode Projects/Personal Apps/Questions/ques/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map