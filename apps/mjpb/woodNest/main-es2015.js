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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"pt-5 pb-3 text-center\">\n\t\t<h2>woodNest Labels</h2>\n\t\t<p class=\"lead\">Opret labels via woodNest data</p>\n\t</div>\n\n\t<div class=\"row justify-content-center\">\n\t\t<div class=\"col-md-8 mb-5\">\n\t\t\t<ng-container *ngIf=\"isSupported === false\">\n\t\t\t\t<div class=\"alert alert-danger mb-5\" role=\"alert\">\n\t\t\t\t\tDin browser understøtter desværre ikke de nødvendige funktioner.\n\t\t\t\t\tBenyt venligst Google Chrome.\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\n\t\t\t<ng-container *ngIf=\"isSupported\">\n\t\t\t\t<label for=\"inputGroupFile\">Vælg fil</label>\n\t\t\t\t<div class=\"input-group mb-5\">\n\t\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\ttype=\"file\"\n\t\t\t\t\t\t\t\tclass=\"custom-file-input\"\n\t\t\t\t\t\t\t\tid=\"inputGroupFile\"\n\t\t\t\t\t\t\t\taria-describedby=\"inputGroupFileAddon\"\n\t\t\t\t\t\t\t\t(change)=\"onFileChange($event)\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<label class=\"custom-file-label\" for=\"inputGroupFile\">\n\t\t\t\t\t\t\t{{ currentFile ? currentFile.name : 'Ingen fil valgt' }}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"currentFile && !labels.length && !reading\" class=\"alert alert-danger mb-5\" role=\"alert\">\n\t\t\t\t\tFilen kunne ikke læses. Vær sikker på at du har valgt en html fil.\n\t\t\t\t</div>\n\n\t\t\t\t<ng-container *ngIf=\"labels.length\" class=\"mb-5\">\n\t\t\t\t\t<button class=\"btn btn-outline-info btn-sm mb-3\" (click)=\"toggleAll();\">Vælg/fravælg alle</button>\n\n\t\t\t\t\t<div class=\"table-responsive mb-2\">\n\t\t\t\t\t\t<table class=\"table table-bordered table-striped table-sm\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Print</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">{{ columnHeaders.number }}</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">{{ columnHeaders.subject }}</th>\n\t\t\t\t\t\t\t\t<th scope=\"col\">Antal</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let label of labels\">\n\t\t\t\t\t\t\t\t<td><input type=\"checkbox\" [(ngModel)]=\"label.print\"></td>\n\t\t\t\t\t\t\t\t<td>{{ label.number }}</td>\n\t\t\t\t\t\t\t\t<td>{{ label.subject }}</td>\n\t\t\t\t\t\t\t\t<td>{{ label.amount }} stk.</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<label for=\"label-width\">Label bredde</label>\n\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"label-width\" aria-describedby=\"label-width-addon\" [(ngModel)]=\"labelOptions.width\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\" id=\"label-width-addon\">mm</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<label for=\"label-height\">Label længde</label>\n\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"label-height\" aria-describedby=\"label-height-addon\" [(ngModel)]=\"labelOptions.height\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\" id=\"label-height-addon\">mm</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<label for=\"label-orientation\">Label retning</label>\n\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t<select id=\"label-orientation\" class=\"form-control\" [(ngModel)]=\"labelOptions.orientation\">\n\t\t\t\t\t\t\t\t\t<option value=\"portrait\">Stående</option>\n\t\t\t\t\t\t\t\t\t<option value=\"landscape\">Liggende</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<label for=\"label-font-size-subject\">Skriftstørrelse (Emne)</label>\n\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"label-font-size-subject\" aria-describedby=\"label-font-size-subject-addon\" [(ngModel)]=\"labelOptions.subject_size\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\" id=\"label-font-size-subject-addon\">px</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<label for=\"label-font-size-other\">Skriftstørrelse (Andet)</label>\n\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"label-font-size-other\" aria-describedby=\"label-font-size-other-addon\" [(ngModel)]=\"labelOptions.other_size\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\" id=\"label-font-size-other-addon\">px</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-12 mb-4\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"print();\" [disabled]=\"getLabelsWithPositions().length === 0\">Print ({{ getLabelsWithPositions().length }})</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"labels labels-preview mb-5\">\n\t\t\t\t\t\t<h3 class=\"text-center mb-3\">Forhåndsvisning</h3>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tclass=\"label label-{{ labelOptions.orientation }} mx-auto\"\n\t\t\t\t\t\t\t\t[style.width.px]=\"labelOptions.width * 0.55\"\n\t\t\t\t\t\t\t\t[style.height.px]=\"labelOptions.height * 0.55\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div class=\"number-container\">\n\t\t\t\t\t\t\t\t<div class=\"number\" [style.font-size.px]=\"labelOptions.other_size\">1</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"subject-container\">\n\t\t\t\t\t\t\t\t<div class=\"subject\" [style.font-size.px]=\"labelOptions.subject_size\">test_3_5stk</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"pos-container\">\n\t\t\t\t\t\t\t\t<div class=\"pos\" [style.font-size.px]=\"labelOptions.other_size\">1/5</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<a href=\"https://edbguiden.dk/\" target=\"_blank\">\n\t\t\t\t\t<img src=\"assets/img/edbguiden_logo.png\" alt=\"EDB-Guiden ApS\">\n\t\t\t\t</a><br>\n\t\t\t\t<small>Udviklet af EDB-Guiden ApS</small>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div *ngIf=\"labels.length\" class=\"labels\">\n\t<div\n\t\t\t*ngFor=\"let labelPos of getLabelsWithPositions()\"\n\t\t\tclass=\"label label-{{ labelOptions.orientation }}\"\n\t\t\t[style.width.px]=\"labelOptions.width * 0.55\"\n\t\t\t[style.height.px]=\"labelOptions.height * 0.55\"\n\t>\n\t\t<div class=\"number-container\">\n\t\t\t<div class=\"number\" [style.font-size.px]=\"labelOptions.other_size\">{{ labelPos.label.number }}</div>\n\t\t</div>\n\t\t<div class=\"subject-container\">\n\t\t\t<div class=\"subject\" [style.font-size.px]=\"labelOptions.subject_size\">{{ labelPos.label.subject }}</div>\n\t\t</div>\n\t\t<div class=\"pos-container\">\n\t\t\t<div class=\"pos\" [style.font-size.px]=\"labelOptions.other_size\">{{ labelPos.pos }}/{{ labelPos.label.amount }}</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root {\n  /**\n   * Hide everything on the print page, except the label elements\n   * Hide the labels elemenet if not on print page\n   */\n}\napp-root .labels.labels-preview .label {\n  border: 1px solid black;\n  background: #fff;\n  border-radius: 8px;\n}\napp-root .labels:not(.labels-preview) {\n  display: none;\n}\napp-root .labels .label {\n  position: relative;\n  page-break-after: always;\n}\napp-root .labels .label .number-container {\n  position: absolute;\n  bottom: 50px;\n  left: 50px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\napp-root .labels .label .number-container .number {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  line-height: 100%;\n}\napp-root .labels .label .subject-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\napp-root .labels .label .subject-container .subject {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\napp-root .labels .label .pos-container {\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\napp-root .labels .label .pos-container .pos {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  line-height: 100%;\n}\napp-root .labels .label.label-landscape > * {\n  display: inline-block;\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n}\napp-root .labels .label.label-landscape .number-container {\n  top: 50px;\n  bottom: unset;\n}\napp-root .labels .label.label-landscape .pos-container {\n  left: 50px;\n  right: unset;\n}\n@media print {\n  app-root .container {\n    display: none;\n  }\n  app-root .labels.labels-preview {\n    display: none;\n  }\n  app-root .labels:not(.labels-preview) {\n    display: unset;\n  }\n}\n@media print {\n  @page {\n    size: auto;\n    /* auto is the initial value */\n    margin: 0;\n    /* this affects the margin in the printer settings */\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtaWNoYWVsXFxEb2N1bWVudHNcXENvZGluZ1xcRURCIEd1aWRlbiBBcFNcXE1pZHRqeXNrIFBsYWRlYmVhcmJlamRuaW5nIEFwU1xcd29vZG5lc3QtbGFiZWxzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDOzs7SUFBQTtBQ0lEO0FERUc7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRElFO0VBQ0MsYUFBQTtBQ0ZIO0FES0U7RUFDQyxrQkFBQTtFQUNBLHdCQUFBO0FDSEg7QURLRztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDSEo7QURLSTtFQUNDLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0hMO0FET0c7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0xKO0FET0k7RUFDQyxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNMTDtBRFNHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNQSjtBRFNJO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDUEw7QURZSTtFQUNDLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDVkw7QURhSTtFQUNDLFNBQUE7RUFDQSxhQUFBO0FDWEw7QURjSTtFQUNDLFVBQUE7RUFDQSxZQUFBO0FDWkw7QURrQkM7RUFDQztJQUNDLGFBQUE7RUNoQkQ7RURvQkM7SUFDQyxhQUFBO0VDbEJGO0VEcUJDO0lBQ0MsY0FBQTtFQ25CRjtBQUNGO0FEd0JBO0VBQ0M7SUFDQyxVQUFBO0lBQWEsOEJBQUE7SUFDYixTQUFBO0lBQVcsb0RBQUE7RUNuQlg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yb290IHtcclxuXHQvKipcclxuXHQgKiBIaWRlIGV2ZXJ5dGhpbmcgb24gdGhlIHByaW50IHBhZ2UsIGV4Y2VwdCB0aGUgbGFiZWwgZWxlbWVudHNcclxuXHQgKiBIaWRlIHRoZSBsYWJlbHMgZWxlbWVuZXQgaWYgbm90IG9uIHByaW50IHBhZ2VcclxuXHQgKi9cclxuXHQubGFiZWxzIHtcclxuXHRcdCYubGFiZWxzLXByZXZpZXcge1xyXG5cdFx0XHQubGFiZWwge1xyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Jjpub3QoLmxhYmVscy1wcmV2aWV3KSB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmxhYmVsIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XHJcblxyXG5cdFx0XHQubnVtYmVyLWNvbnRhaW5lciB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTogNTBweDtcclxuXHRcdFx0XHRsZWZ0OiA1MHB4O1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuXHRcdFx0XHQubnVtYmVyIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5zdWJqZWN0LWNvbnRhaW5lciB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcblx0XHRcdFx0LnN1YmplY3Qge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucG9zLWNvbnRhaW5lciB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTogNTBweDtcclxuXHRcdFx0XHRyaWdodDogNTBweDtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcblx0XHRcdFx0LnBvcyB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ji5sYWJlbC1sYW5kc2NhcGUge1xyXG5cdFx0XHRcdD4gKiB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0XHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHRcdFx0XHRcdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm51bWJlci1jb250YWluZXIge1xyXG5cdFx0XHRcdFx0dG9wOiA1MHB4O1xyXG5cdFx0XHRcdFx0Ym90dG9tOiB1bnNldDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wb3MtY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwcHg7XHJcblx0XHRcdFx0XHRyaWdodDogdW5zZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgcHJpbnQge1xyXG5cdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmxhYmVscyB7XHJcblx0XHRcdCYubGFiZWxzLXByZXZpZXcge1xyXG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCY6bm90KC5sYWJlbHMtcHJldmlldykge1xyXG5cdFx0XHRcdGRpc3BsYXk6IHVuc2V0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG5cdEBwYWdlIHtcclxuXHRcdHNpemU6IGF1dG87ICAvKiBhdXRvIGlzIHRoZSBpbml0aWFsIHZhbHVlICovXHJcblx0XHRtYXJnaW46IDA7IC8qIHRoaXMgYWZmZWN0cyB0aGUgbWFyZ2luIGluIHRoZSBwcmludGVyIHNldHRpbmdzICovXHJcblx0fVxyXG59XHJcbiIsImFwcC1yb290IHtcbiAgLyoqXG4gICAqIEhpZGUgZXZlcnl0aGluZyBvbiB0aGUgcHJpbnQgcGFnZSwgZXhjZXB0IHRoZSBsYWJlbCBlbGVtZW50c1xuICAgKiBIaWRlIHRoZSBsYWJlbHMgZWxlbWVuZXQgaWYgbm90IG9uIHByaW50IHBhZ2VcbiAgICovXG59XG5hcHAtcm9vdCAubGFiZWxzLmxhYmVscy1wcmV2aWV3IC5sYWJlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5hcHAtcm9vdCAubGFiZWxzOm5vdCgubGFiZWxzLXByZXZpZXcpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmFwcC1yb290IC5sYWJlbHMgLmxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XG59XG5hcHAtcm9vdCAubGFiZWxzIC5sYWJlbCAubnVtYmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiA1MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmFwcC1yb290IC5sYWJlbHMgLmxhYmVsIC5udW1iZXItY29udGFpbmVyIC5udW1iZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5hcHAtcm9vdCAubGFiZWxzIC5sYWJlbCAuc3ViamVjdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuYXBwLXJvb3QgLmxhYmVscyAubGFiZWwgLnN1YmplY3QtY29udGFpbmVyIC5zdWJqZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmFwcC1yb290IC5sYWJlbHMgLmxhYmVsIC5wb3MtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmFwcC1yb290IC5sYWJlbHMgLmxhYmVsIC5wb3MtY29udGFpbmVyIC5wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuYXBwLXJvb3QgLmxhYmVscyAubGFiZWwubGFiZWwtbGFuZHNjYXBlID4gKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5hcHAtcm9vdCAubGFiZWxzIC5sYWJlbC5sYWJlbC1sYW5kc2NhcGUgLm51bWJlci1jb250YWluZXIge1xuICB0b3A6IDUwcHg7XG4gIGJvdHRvbTogdW5zZXQ7XG59XG5hcHAtcm9vdCAubGFiZWxzIC5sYWJlbC5sYWJlbC1sYW5kc2NhcGUgLnBvcy1jb250YWluZXIge1xuICBsZWZ0OiA1MHB4O1xuICByaWdodDogdW5zZXQ7XG59XG5AbWVkaWEgcHJpbnQge1xuICBhcHAtcm9vdCAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGFwcC1yb290IC5sYWJlbHMubGFiZWxzLXByZXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYXBwLXJvb3QgLmxhYmVsczpub3QoLmxhYmVscy1wcmV2aWV3KSB7XG4gICAgZGlzcGxheTogdW5zZXQ7XG4gIH1cbn1cblxuQG1lZGlhIHByaW50IHtcbiAgQHBhZ2Uge1xuICAgIHNpemU6IGF1dG87XG4gICAgLyogYXV0byBpcyB0aGUgaW5pdGlhbCB2YWx1ZSAqL1xuICAgIG1hcmdpbjogMDtcbiAgICAvKiB0aGlzIGFmZmVjdHMgdGhlIG1hcmdpbiBpbiB0aGUgcHJpbnRlciBzZXR0aW5ncyAqL1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



;
let AppComponent = class AppComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.isSupported = true;
        this.labels = [];
        this.labelOptions = {
            width: 1000,
            height: 1500,
            orientation: 'landscape',
            subject_size: 56,
            other_size: 32,
        };
        this.reading = false;
        this.columnHeaders = {
            number: 'Nr.',
            subject: 'Emne ID',
            filename: 'Filnavn',
        };
        // Check for the various File API support.
        if (File && FileReader && FileList && window.Blob && window['chrome']) {
            // Great success! All the File APIs are supported.
        }
        else {
            this.isSupported = false;
        }
    }
    onFileChange(f) {
        this.currentFile = f.target.files[0];
        this.readFile();
    }
    readFile() {
        if (!this.currentFile) {
            return;
        }
        // Reset vars
        this.reading = true;
        this.currentFileContent = undefined;
        this.labels = [];
        const reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (e) => {
            this.currentFileContent = new DOMParser().parseFromString(e.target.result, 'text/html');
            Array.from(this.currentFileContent.querySelectorAll('table')).forEach(table => {
                const columnIndexes = {};
                Array.from(table.rows).forEach((row, index) => {
                    const cells = Array.from(row.cells);
                    if (index === 0) {
                        for (const ctmKey in this.columnHeaders) {
                            const ctm = this.columnHeaders[ctmKey];
                            columnIndexes[ctm] = cells.indexOf(cells.find(cell => cell.innerText === ctm));
                        }
                    }
                    else {
                        /**
                         * If any column indexes are missing, we skip it (essentially skipping the entire table)
                         */
                        for (const ctmKey in this.columnHeaders) {
                            const ctm = this.columnHeaders[ctmKey];
                            if (columnIndexes[ctm] === -1) {
                                return;
                            }
                        }
                        const label = {
                            print: true,
                            number: parseInt(cells[columnIndexes[this.columnHeaders.number]].innerText),
                            subject: cells[columnIndexes[this.columnHeaders.subject]].innerText,
                            amount: null,
                        };
                        const amount = label.subject.match(/_([0-9]+)stk$/);
                        if (amount && amount[1] && parseInt(amount[1])) {
                            label.amount = parseInt(amount[1]);
                        }
                        else {
                            label.amount = 1;
                        }
                        this.labels.push(label);
                    }
                });
            });
            this.reading = false;
        };
        // Read in the image file as a data URL.
        reader.readAsText(this.currentFile);
    }
    getLabelsWithPositions() {
        const labelsWithPos = [];
        for (const label of this.labels) {
            if (label.print === false) {
                continue;
            }
            for (let i = 1; i <= label.amount; i++) {
                labelsWithPos.push({
                    label: label,
                    pos: i,
                });
            }
        }
        return labelsWithPos;
    }
    print() {
        window.print();
    }
    toggleAll() {
        const toggleTo = this.labels.length ? !this.labels[0].print : false;
        for (const label of this.labels) {
            label.print = toggleTo;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");









let AppModule = class AppModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"]);
    }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        ],
        entryComponents: [],
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
})
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\michael\Documents\Coding\EDB Guiden ApS\Midtjysk Pladebearbejdning ApS\woodnest-labels\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map