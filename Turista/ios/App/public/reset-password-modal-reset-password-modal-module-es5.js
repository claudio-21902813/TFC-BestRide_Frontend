(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-modal-reset-password-modal-module"], {
    /***/
    "1EsG":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recover_account/code-verification/reset-password-modal/reset-password-modal.page.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Reset Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Password</ion-label>\r\n      <ion-input formControlName=\"pass\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Repita a Password</ion-label>\r\n      <ion-input formControlName=\"pass_repeat\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "DAAo":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/recover_account/code-verification/reset-password-modal/reset-password-modal.page.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ResetPasswordModalPage */

    /***/
    function DAAo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordModalPage", function () {
        return ResetPasswordModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_password_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset-password-modal.page.html */
      "1EsG");
      /* harmony import */


      var _reset_password_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password-modal.page.scss */
      "pFk1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _code_verification_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../code-verification-api.service */
      "Uj3r");

      var ResetPasswordModalPage = /*#__PURE__*/function () {
        function ResetPasswordModalPage(formBuilder, alertController, codeVerificationApi, modalCtr) {
          _classCallCheck(this, ResetPasswordModalPage);

          this.formBuilder = formBuilder;
          this.alertController = alertController;
          this.codeVerificationApi = codeVerificationApi;
          this.modalCtr = modalCtr;
          this.isSubmitted = false;
        }

        _createClass(ResetPasswordModalPage, [{
          key: "alert",
          value: function alert(msg, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: msg,
                        message: body,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.ionicForm.valid) {
              this.alert('Erro', 'Valide Corretamente os Dados');
              return false;
            } else {
              var pass = this.ionicForm.get('pass').value;
              var pass_new = this.ionicForm.get('pass_repeat').value;

              if (pass != pass_new) {
                this.alert('Erro', 'As Password nao coincidem!');
              } else {
                //atualiza password
                //this.codeVerificationApi.atualizaPassword(pass_new);
                this.alert('Sucesso', 'Password alterada !');
                this.modalCtr.dismiss();
              }
            }

            return true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ionicForm = this.formBuilder.group({
              pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
              pass_repeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
            });
          }
        }]);

        return ResetPasswordModalPage;
      }();

      ResetPasswordModalPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _code_verification_api_service__WEBPACK_IMPORTED_MODULE_6__["CodeVerificationApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      ResetPasswordModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password-modal',
        template: _raw_loader_reset_password_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ResetPasswordModalPage);
      /***/
    },

    /***/
    "DOuP":
    /*!**************************************************************************************!*\
      !*** ./src/app/user_tab/reset-password-modal/reset-password-modal-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ResetPasswordModalPageRoutingModule */

    /***/
    function DOuP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordModalPageRoutingModule", function () {
        return ResetPasswordModalPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reset_password_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-password-modal.page */
      "cHgQ");

      var routes = [{
        path: '',
        component: _reset_password_modal_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordModalPage"]
      }];

      var ResetPasswordModalPageRoutingModule = function ResetPasswordModalPageRoutingModule() {
        _classCallCheck(this, ResetPasswordModalPageRoutingModule);
      };

      ResetPasswordModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetPasswordModalPageRoutingModule);
      /***/
    },

    /***/
    "ZXJ5":
    /*!******************************************************************************!*\
      !*** ./src/app/user_tab/reset-password-modal/reset-password-modal.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ResetPasswordModalPageModule */

    /***/
    function ZXJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordModalPageModule", function () {
        return ResetPasswordModalPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _reset_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reset-password-modal-routing.module */
      "DOuP");
      /* harmony import */


      var _reset_password_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset-password-modal.page */
      "cHgQ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      var ResetPasswordModalPageModule = function ResetPasswordModalPageModule() {
        _classCallCheck(this, ResetPasswordModalPageModule);
      };

      ResetPasswordModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _reset_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordModalPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_reset_password_modal_page__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordModalPage"]]
      })], ResetPasswordModalPageModule);
      /***/
    },

    /***/
    "jbL6":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/recover_account/code-verification/reset-password-modal/reset-password-modal.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ResetPasswordModalPageModule */

    /***/
    function jbL6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordModalPageModule", function () {
        return ResetPasswordModalPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _reset_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reset-password-modal-routing.module */
      "lJhd");
      /* harmony import */


      var _reset_password_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset-password-modal.page */
      "DAAo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ResetPasswordModalPageModule = function ResetPasswordModalPageModule() {
        _classCallCheck(this, ResetPasswordModalPageModule);
      };

      ResetPasswordModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _reset_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordModalPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
        declarations: [_reset_password_modal_page__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordModalPage"]]
      })], ResetPasswordModalPageModule);
      /***/
    },

    /***/
    "lJhd":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/recover_account/code-verification/reset-password-modal/reset-password-modal-routing.module.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: ResetPasswordModalPageRoutingModule */

    /***/
    function lJhd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordModalPageRoutingModule", function () {
        return ResetPasswordModalPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reset_password_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-password-modal.page */
      "DAAo");

      var routes = [{
        path: '',
        component: _reset_password_modal_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordModalPage"]
      }];

      var ResetPasswordModalPageRoutingModule = function ResetPasswordModalPageRoutingModule() {
        _classCallCheck(this, ResetPasswordModalPageRoutingModule);
      };

      ResetPasswordModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetPasswordModalPageRoutingModule);
      /***/
    },

    /***/
    "pFk1":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/recover_account/code-verification/reset-password-modal/reset-password-modal.page.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pFk1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC1tb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=reset-password-modal-reset-password-modal-module-es5.js.map