// ==UserScript==
// @name    Community Lib
// @namespace   https://path.com/your/lib/namespace
// @version 1.0.0
// @author  Your Name
// @match https://neal.fun/infinite-craft/*
// @description Your lib description
// @include https://www.example.com/*
// @copyright   2024, Your Org
// ==/UserScript==
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Community"] = factory();
	else
		root["Community"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ColorPicker.ts":
/*!****************************!*\
  !*** ./src/ColorPicker.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ColorPicker = void 0;
var ColorPicker = /** @class */ (function () {
    function ColorPicker() {
    }
    ColorPicker.prototype.makeColorPicker = function (localColback, debug) {
        if (debug === void 0) { debug = false; }
        if (localColback != null)
            this.callback = localColback;
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;
        var isMobile = ua.indexOf("android") > -1;
        var isWebOs = ua.indexOf("webos") > -1;
        var isIphone = ua.indexOf("iphone") > -1;
        var isIpad = ua.indexOf("ipad") > -1;
        var isLinux = ua.indexOf("linux") > -1;
        var parent = document.querySelector(".container");
        if ((isAndroid || isMobile || isLinux || isWebOs || isIphone || isIpad) || debug) {
            var diag_1 = document.createElement("dialog");
            var lr = document.createElement("label");
            lr.innerText = "R (0-255)";
            lr.style.color = "red";
            var lg = document.createElement("label");
            lg.innerText = "G (0-255)";
            lg.style.color = "green";
            var lb = document.createElement("label");
            lb.innerText = "B (0-255)";
            lb.style.color = "blue";
            var Previews = document.createElement("label");
            Previews.innerText = "Preview color";
            var previewDiv_1 = document.createElement("div");
            previewDiv_1.style.width = "100px";
            previewDiv_1.style.height = "100px";
            var ri_1 = document.createElement("input");
            ri_1.type = "number";
            ri_1.min = "0";
            ri_1.max = "255";
            ri_1.value = "0";
            var gi_1 = document.createElement("input");
            gi_1.type = "number";
            gi_1.min = "0";
            gi_1.max = "255";
            gi_1.value = "0";
            var bi_1 = document.createElement("input");
            bi_1.type = "number";
            bi_1.min = "0";
            bi_1.max = "255";
            bi_1.value = "0";
            var rgb2Hex_1 = function (s) { return s.match(/[0-9]+/g).reduce(function (a, b) { return a + (b | 256).toString(16).slice(1); }, '#'); };
            previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
            ri_1.addEventListener("input", function (event) {
                // console.log("ri:",ri.value,"something");
                if (ri_1.value == "") {
                    ri_1.value = "0";
                }
                if (Number.parseInt(ri_1.value) < 0)
                    ri_1.value = "0";
                if (Number.parseInt(ri_1.value) > 255)
                    ri_1.value = "255";
                previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
                this.pickedColor = rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")");
                console.log("oneColor:", this.pickedColor);
                this.callback(this.pickedColor);
            }.bind(this));
            gi_1.addEventListener("input", function (even) {
                console.log("gi:", gi_1.value, "something");
                if (gi_1.value == "") {
                    gi_1.value = "0";
                }
                if (Number.parseInt(gi_1.value) < 0)
                    gi_1.value = "0";
                if (Number.parseInt(gi_1.value) > 255)
                    gi_1.value = "255";
                previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
                localStorage.setItem("saved_color", rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")"));
                this.pickedColor = rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")");
                console.log("oneColor:", this.pickedColor);
                this.callback(this.pickedColor);
            }.bind(this));
            bi_1.addEventListener("input", function (event) {
                console.log("bi:", bi_1.value, "something");
                if (bi_1.value == "") {
                    bi_1.value = "0";
                }
                if (Number.parseInt(bi_1.value) < 0)
                    bi_1.value = "0";
                if (Number.parseInt(bi_1.value) > 255)
                    bi_1.value = "255";
                previewDiv_1.style.background = "rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")";
                this.pickedColor = rgb2Hex_1("rgb(" + ri_1.value + "," + gi_1.value + "," + bi_1.value + ")");
                console.log("oneColor:", this.pickedColor);
                this.callback(this.pickedColor);
            }.bind(this));
            var closeButton = document.createElement("button");
            closeButton.appendChild(document.createTextNode("Close"));
            closeButton.addEventListener("click", function () {
                diag_1.close();
            });
            var inputDiv = document.createElement("div");
            var previewsDiv = document.createElement("div");
            var mainLogic = document.createElement("div");
            inputDiv.appendChild(lr);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(ri_1);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(lg);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(gi_1);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(lb);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.appendChild(bi_1);
            inputDiv.appendChild(document.createElement("br"));
            inputDiv.style.float = "left";
            inputDiv.style.margin = "10px";
            mainLogic.appendChild(inputDiv);
            previewsDiv.appendChild(Previews);
            previewsDiv.appendChild(document.createElement("br"));
            previewsDiv.appendChild(previewDiv_1);
            previewsDiv.appendChild(document.createElement("br"));
            previewsDiv.style.float = "right";
            mainLogic.appendChild(previewsDiv);
            diag_1.appendChild(mainLogic);
            diag_1.appendChild(closeButton);
            diag_1.style.position = "absolute";
            diag_1.style.top = "33%";
            diag_1.style.left = "25%";
            diag_1.style.background = "var(--background-color)";
            diag_1.style.color = ("var(--text-color)").trim();
            if (parent)
                parent.appendChild(diag_1);
            diag_1.showModal();
        }
        else {
            var input = document.createElement("input");
            input.setAttribute("type", "color");
            input.addEventListener("click", function (event) {
                event.stopPropagation();
            });
            input.addEventListener("input", function (event) {
                this.pickedColor = event.target.value;
                this.callback(this.pickedColor);
            }.bind(this));
            if (parent)
                parent.appendChild(input);
            // hidden=0;
            input.click();
        }
    };
    return ColorPicker;
}());
exports.ColorPicker = ColorPicker;


/***/ }),

/***/ "./src/ContextMenu.ts":
/*!****************************!*\
  !*** ./src/ContextMenu.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ContextMenu = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType[ActionType["button"] = 0] = "button";
    ActionType[ActionType["checkbox"] = 1] = "checkbox";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ContextMenu = /** @class */ (function () {
    function ContextMenu() {
        this.triggerTypeVisible = "mouseover";
        this.triggerTypeInvisible = "mouseleave";
        this.complexTriggerIn = false;
        this.complexTriggerOut = false;
        this.contextMenuQuery = ".contextMenu";
        this.actions = [];
    }
    ContextMenu.prototype.setComplexTriggerIn = function (complex) {
        this.complexTriggerInCondition = complex;
        this.complexTriggerIn = true;
    };
    ContextMenu.prototype.setComplexTriggerOut = function (complex) {
        this.complexTriggerOutCondition = complex;
        this.complexTriggerOut = true;
    };
    ContextMenu.prototype.addAction = function (action) {
        this.actions.push(action);
    };
    ContextMenu.prototype.addActions = function (actions) {
        var _a;
        (_a = this.actions).push.apply(_a, actions);
    };
    ContextMenu.prototype.defaultBuildItem = function (item, options) {
        var _this = this;
        var timeout = null;
        item.addEventListener("mouseover", function (e) {
            timeout = setTimeout(function () { this.buildContextMenuWhenVisible(item, { clientX: item.getBoundingClientRect().x, clientY: item.getBoundingClientRect().y }, options); }.bind(_this), 1000);
        });
        item.addEventListener("mouseout", function (e) {
            clearTimeout(timeout);
        });
    };
    ContextMenu.prototype.defaultBuild = function (options, zIndex) {
        var _this = this;
        if (options === void 0) { options = {
            colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50,
            heightButton: 20, borderWidthButton: 1, radius: 4,
            minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
        }; }
        if (zIndex === void 0) { zIndex = 1000; }
        for (var _i = 0, _a = Array.from(document.querySelectorAll(".item")); _i < _a.length; _i++) {
            var item = _a[_i];
            this.defaultBuildItem(item, options);
        }
        var itemsObserver = new MutationObserver(function (mutations) { return __awaiter(_this, void 0, void 0, function () {
            var _i, mutations_1, mutation, _a, _b, node;
            return __generator(this, function (_c) {
                for (_i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    mutation = mutations_1[_i];
                    if (mutation.addedNodes.length > 0)
                        for (_a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                            node = _b[_a];
                            if (node.classList.contains("item"))
                                this.defaultBuildItem(node, options);
                        }
                }
                return [2 /*return*/];
            });
        }); });
        itemsObserver.observe(document.getElementsByClassName("items-inner")[0], {
            childList: true,
            subtree: true
        });
    };
    ContextMenu.prototype.buildContextMenuWhenVisible = function (item, e, options, zIndex) {
        var _this = this;
        if (options === void 0) { options = {
            colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50,
            heightButton: 20, borderWidthButton: 1, radius: 4,
            minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
        }; }
        if (zIndex === void 0) { zIndex = 1000; }
        var parent = document.querySelector(".container");
        if (parent) {
            var conMenu_1 = parent.querySelector(this.contextMenuQuery);
            if (conMenu_1 == null) {
                conMenu_1 = document.createElement("div");
                conMenu_1.classList.add(this.contextMenuQuery.slice(1));
                parent.appendChild(conMenu_1);
            }
            else {
                conMenu_1.innerHTML = "";
                conMenu_1.style.opacity = "1";
            }
            conMenu_1.style.height = "fit-content";
            conMenu_1.style.overflow = "auto";
            conMenu_1.style.zIndex = zIndex.toString();
            conMenu_1.style.position = "absolute";
            // (<HTMLElement>conMenu).style.height = options.height.toString() + "px";
            conMenu_1.style.minWidth = options.minWidth + "px";
            conMenu_1.style.top = e.clientY.toString() + "px";
            conMenu_1.style.left = (e.clientX - options.xOffset).toString() + "px";
            conMenu_1.style.border = options.borderWidth.toString() + "px solid " + window.getComputedStyle(parent).getPropertyValue("--text-color").trim();
            conMenu_1.style.borderRadius = options.radius.toString() + "px";
            conMenu_1.style.backgroundColor = "var(--background-color)";
            this.actions.forEach(function (action, i) {
                var _a, _b, _c, _d, _e;
                var span = document.createElement("span");
                var textSpan = document.createElement("label");
                if (action.type == ActionType.checkbox) {
                    var actionCheckbox_1 = document.createElement("input");
                    var label_1 = document.createElement("label");
                    actionCheckbox_1.id = "actionId" + i;
                    actionCheckbox_1.style.opacity = "0";
                    actionCheckbox_1.type = "checkbox";
                    label_1.htmlFor = "actionId" + i;
                    textSpan.htmlFor = "actionId" + i;
                    span.style.backgroundColor = "var(--text-color)";
                    label_1.style.width = options.widthButton.toString() + "px";
                    label_1.style.height = options.heightButton.toString() + "px";
                    label_1.style.border = "1px solid currentColor";
                    label_1.style.padding = options.paddingButton.toString() + "px";
                    label_1.style.marginTop = ((options.height - options.heightButton) / 2).toString() + "px";
                    label_1.style.marginRight = ((options.height - options.heightButton) / 2).toString() + "px";
                    span.textContent = " ";
                    span.style.borderRadius = options.radius.toString() + "px";
                    span.style.height = (options.heightButton - 2 * options.paddingButton).toString() + "px";
                    span.style.width = (options.widthButton / 2).toString() + "px";
                    span.style.display = "inline-block";
                    label_1.style.display = "inline-block";
                    span.style.transform = options.duration.toString() + "s";
                    label_1.appendChild(span);
                    var isOn = action.initHandler ? action.initHandler(item) : false;
                    actionCheckbox_1.checked = isOn;
                    if (isOn) {
                        span.style.translate = options.xOffsetButton.toString() + "px 0px";
                        span.style.backgroundColor = options.colorB;
                        textSpan.style.color = options.colorB;
                        label_1.style.borderColor = options.colorB;
                        textSpan.textContent = (_a = action.emojiOn) !== null && _a !== void 0 ? _a : "" + action.textOn;
                    }
                    else {
                        span.style.translate = "0px 0px";
                        span.style.backgroundColor = "currentColor";
                        textSpan.style.color = "currentColor";
                        label_1.style.borderColor = "currentColor";
                        textSpan.textContent = (_d = (_c = (_b = action.emojiOff) !== null && _b !== void 0 ? _b : action.emojiOn) !== null && _c !== void 0 ? _c : "" + action.textOff) !== null && _d !== void 0 ? _d : action.textOn;
                    }
                    actionCheckbox_1.addEventListener("change", function () {
                        var _a, _b, _c, _d;
                        action.handler(item, e, actionCheckbox_1.checked);
                        if (actionCheckbox_1.checked) {
                            span.style.translate = options.xOffsetButton.toString() + "px 0px";
                            span.style.backgroundColor = options.colorB;
                            textSpan.style.color = options.colorB;
                            label_1.style.borderColor = options.colorB;
                            textSpan.textContent = (_a = action.emojiOn) !== null && _a !== void 0 ? _a : "" + action.textOn;
                        }
                        else {
                            span.style.translate = "0px 0px";
                            span.style.backgroundColor = "currentColor";
                            textSpan.style.color = "currentColor";
                            label_1.style.borderColor = "currentColor";
                            textSpan.textContent = (_d = (_c = (_b = action.emojiOff) !== null && _b !== void 0 ? _b : action.emojiOn) !== null && _c !== void 0 ? _c : "" + action.textOff) !== null && _d !== void 0 ? _d : action.textOn;
                        }
                    });
                    //  checkZombie.style,display="none";
                    conMenu_1.appendChild(actionCheckbox_1);
                    conMenu_1.appendChild(label_1);
                    conMenu_1.appendChild(textSpan);
                }
                else {
                    var actionButton_1 = document.createElement("button");
                    actionButton_1.style.width = "100%";
                    actionButton_1.textContent = (_e = action.emojiOn) !== null && _e !== void 0 ? _e : "" + action.textOn;
                    if (action.initHandler) {
                        action.initHandler(conMenu_1);
                    }
                    actionButton_1.style.backgroundColor = "var(--background-color)";
                    actionButton_1.style.color = "var(--text-color)";
                    actionButton_1.addEventListener("mousedown", function () {
                        var _a, _b, _c;
                        actionButton_1.style.backgroundColor = options.colorB;
                        actionButton_1.textContent = (_c = ((_b = (_a = action.emojiOff) !== null && _a !== void 0 ? _a : action.emojiOn) !== null && _b !== void 0 ? _b : "") + action.textOff) !== null && _c !== void 0 ? _c : action.textOn;
                    });
                    actionButton_1.addEventListener("mouseup", function () {
                        var _a;
                        actionButton_1.style.backgroundColor = "var(--background-color)";
                        actionButton_1.textContent = ((_a = action.emojiOn) !== null && _a !== void 0 ? _a : "") + action.textOn;
                    });
                    actionButton_1.addEventListener("click", function () { return action.handler(); });
                    conMenu_1.appendChild(actionButton_1);
                }
                conMenu_1.appendChild(document.createElement("br"));
            });
            if (this.complexTriggerOut == false) {
                conMenu_1.addEventListener(this.triggerTypeInvisible, function (e) {
                    setTimeout(function () {
                        parent.querySelectorAll(_this.contextMenuQuery).forEach(function (elem) {
                            return elem.style.opacity = "0";
                        });
                    }, 500);
                });
            }
            else {
                this.complexTriggerOutCondition(conMenu_1);
            }
        }
    };
    return ContextMenu;
}());
exports.ContextMenu = ContextMenu;


/***/ }),

/***/ "./src/MenuButton.ts":
/*!***************************!*\
  !*** ./src/MenuButton.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.MenuButton = void 0;
var MenuButton = /** @class */ (function () {
    function MenuButton(menuText, menuEmoji, initAction, options) {
        var _a;
        if (options === void 0) { options = []; }
        this.parentQuery = ".settings-content";
        this.menuText = "Click On Me";
        this.menuEmoji = "";
        this.options = [];
        this.hiddenObject = true;
        this.buttonClass = "setting";
        this.initAction = function () { return 0; };
        this.menuText = menuText;
        this.initAction = initAction;
        this.menuEmoji = menuEmoji;
        (_a = this.options).push.apply(_a, options);
    }
    MenuButton.prototype.setOptions = function (options) {
        this.options = options;
    };
    MenuButton.prototype.addOption = function (option) {
        this.options.push(option);
    };
    MenuButton.prototype.buildButton = function (otherParent) {
        var parentDiv = document.querySelector(otherParent !== null && otherParent !== void 0 ? otherParent : this.parentQuery);
        var buttonDiv = document.createElement("div");
        buttonDiv.classList.add("menu-button");
        buttonDiv.appendChild(document.createTextNode(this.menuText + " " + (this.menuEmoji == null ? "" : this.menuEmoji)));
        buttonDiv.style.height = "fit-content";
        var selectionDiv = document.createElement("div");
        var selectedP = document.createElement("p");
        var optionsDiv = document.createElement("div");
        optionsDiv.classList.add("menu-button-options");
        optionsDiv.style.overflowY = "scroll";
        optionsDiv.style.height = "100px";
        buttonDiv.classList.add(this.buttonClass);
        var css = "\n .menu-button-option:hover\n     {\n       background:gray;\n\n     }\n\n.menu-button\n{\n\nscrollbar-width: none;\n\n}\n.menu-button-options {\n    overflow-y: scroll;\n    scrollbar-width: none; /* Firefox */\n    -ms-overflow-style: none;  /* Internet Explorer 10+ */}\n .menu-button-options::-webkit-scrollbar { /* WebKit */\n    width: 0;\n    height: 0;}\n";
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var indexOption = 0;
        if (this.initAction)
            indexOption = this.initAction();
        console.log("indexOption:", indexOption, "options:", this.options);
        selectedP.textContent = this.options[indexOption].optionText + " " + (this.options[indexOption].optionEmoji == null ? "" : this.options[indexOption].optionEmoji);
        this.options.forEach(function (option) {
            var optionDiv = document.createElement("div");
            optionDiv.classList.add("menu-button-option");
            optionDiv.appendChild(document.createTextNode(option.optionText + " " + (option.optionEmoji == null ? "" : option.optionEmoji)));
            optionDiv.style.whiteSpace = "nowrap";
            optionDiv.style.overflow = "hidden";
            optionDiv.addEventListener("mouseenter", function () { optionDiv.style.backgroundColor = "gray"; });
            optionDiv.addEventListener("mouseleave", function () { optionDiv.style.backgroundColor = "var(--background-color)"; });
            optionDiv.addEventListener("click", function () {
                option.handler();
                selectedP.textContent = option.optionText + " " + (option.optionEmoji == null ? "" : option.optionEmoji);
                ;
            });
            optionsDiv.appendChild(optionDiv);
        });
        selectedP.addEventListener("click", function () {
            selectionDiv.appendChild(optionsDiv);
            this.hiddenObject = true;
        }.bind(this), false);
        selectionDiv.appendChild(selectedP);
        selectionDiv.appendChild(document.createElement("hr"));
        buttonDiv.addEventListener("click", function () {
            if (this.hiddenObject == true) {
                console.log("got here");
                if (!buttonDiv.contains(selectionDiv))
                    buttonDiv.appendChild(selectionDiv);
                this.hiddenObject = false;
            }
            else {
                if (selectionDiv.contains(optionsDiv))
                    selectionDiv.removeChild(optionsDiv);
                if (buttonDiv.contains(selectionDiv))
                    buttonDiv.removeChild(selectionDiv);
                this.hiddenObject = true;
            }
        }.bind(this), false);
        parentDiv.appendChild(buttonDiv);
        return buttonDiv;
    };
    return MenuButton;
}());
exports.MenuButton = MenuButton;


/***/ }),

/***/ "./src/ToggleButton.ts":
/*!*****************************!*\
  !*** ./src/ToggleButton.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ToggleButton = exports.ToggleButtonOptions = void 0;
var ToggleButtonOptions = /** @class */ (function () {
    function ToggleButtonOptions() {
    }
    return ToggleButtonOptions;
}());
exports.ToggleButtonOptions = ToggleButtonOptions;
var ToggleButton = /** @class */ (function () {
    function ToggleButton() {
        this.color = "#70b565";
        this.optionalText = "";
        this.size = 22;
        this.innerRadius = "50%";
        this.outerRadius = "15px";
    }
    ToggleButton.prototype.buildButton = function (options) {
        if (options === void 0) { options = {}; }
        if (options.handler != null)
            this.handler = options.handler;
        if (options.color != null) {
            this.color = options.color;
        }
        if (options.size != null) {
            this.size = options.size;
        }
        if (options.innerRadius != null) {
            this.innerRadius = options.innerRadius;
        }
        if (options.outerRadius != null) {
            this.outerRadius = options.outerRadius;
        }
        var css = "\n.setting-block {\n\tcolor: var(--text-color);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7px;\n\tfont-size: 16.4px;\n}\n\n.setting-block h1 {\n\tfont-size: 20px;\n\tfont-family: Roboto, sans-serif;\n\tline-height: 35px;\n\tcolor: var(--text-color);\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.setting-block label[for*=\"input\"] {\n\tfloat: left;\n\tmargin-right: 7px;\n\tmargin-top: 5px;\n}\n\n.checkbox-container {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: ".concat(this.size + 28, "px;\n\theight: ").concat(this.size + 8, "px;\n\tcursor: pointer;\n    margin-left:5px;\n}\n\n.checkbox-container input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n\n.checkbox-slider {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--border-color);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n\tborder-radius: ").concat(this.outerRadius, "px;\n\tz-index: 2000;\n}\n\n.checkbox-slider:before {\n\tposition: absolute;\n\tcontent: \"\";\n\theight: ").concat(this.size, "px;\n\twidth: ").concat(this.size, "px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: var(--background-color);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n\tborder-radius: ").concat(this.innerRadius, ";\n\tz-index: 1999;\n}\n\n.dark-mode .checkbox-slider:before {\n\tbackground-color: var(--text-color);\n}\n\ninput:checked + .checkbox-slider {\n\tbackground-color: ").concat(this.color, ";\n}\n\ninput:checked + .checkbox-slider:before {\n\ttransform: translateX(19px);\n}\n\n.input-wrapper {\n\ttransition: 0.4s;\n}\n\n");
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var block = document.createElement("div");
        block.classList.add("setting-block");
        var name = document.createElement("h1");
        if (options.optionalText != null) {
            name.appendChild(document.createTextNode(options.optionalText));
        }
        block.appendChild(name);
        var checkboxContainer = document.createElement("label");
        checkboxContainer.classList.add("checkbox-container");
        var checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        checkbox.setAttribute("type", "checkbox");
        checkboxContainer.appendChild(checkbox);
        checkbox.addEventListener("change", function () {
            this.handler(checkbox.checked);
        }.bind(this));
        var slider = document.createElement("span");
        slider.classList.add("checkbox-slider");
        checkboxContainer.appendChild(slider);
        name.appendChild(checkboxContainer);
        if (options.parent)
            options.parent.appendChild(block);
        return block;
    };
    return ToggleButton;
}());
exports.ToggleButton = ToggleButton;


/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.UI = void 0;
var ContextMenu_1 = __webpack_require__(/*! ./ContextMenu */ "./src/ContextMenu.ts");
var MenuButton_1 = __webpack_require__(/*! ./MenuButton */ "./src/MenuButton.ts");
var ColorPicker_1 = __webpack_require__(/*! ./ColorPicker */ "./src/ColorPicker.ts");
var ToggleButton_1 = __webpack_require__(/*! ./ToggleButton */ "./src/ToggleButton.ts");
var UI = /** @class */ (function () {
    function UI() {
        this.contextMenus = [new ContextMenu_1.ContextMenu()];
        this.contextMenu = this.contextMenus[0];
        this.toggleButtons = [];
        this.menuButtons = [];
        this.colorPicker = new ColorPicker_1.ColorPicker();
        this.defaultContextMenuQuery = "";
        this.defaultModalQuery = "";
        this.instancesClass = "instances";
        this.itemsClass = "items-inner";
        this.defaultModalQuery = ".modal:nth-child(3)";
        this.defaultSettingsButtonQuery = ".settings-content";
    }
    UI.prototype.makeToggleButton = function (options) {
        var toggleButton = new ToggleButton_1.ToggleButton();
        this.toggleButtons.push(toggleButton);
        return toggleButton.buildButton(options);
    };
    UI.prototype.injectCSS = function (css) {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
    };
    UI.prototype.addAndBuildMenuButton = function (menuText, menuEmoji, initAction, options) {
        if (options === void 0) { options = []; }
        var mButton = new MenuButton_1.MenuButton(menuText, menuEmoji, initAction, options);
        this.menuButtons.push(mButton);
        return mButton.buildButton();
    };
    UI.prototype.onObservingInstance = function (applyOnOneElement) {
        var instanceObserver = new MutationObserver(function (mutations) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                if (mutation.addedNodes.length > 0) {
                    for (var _a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                        var node = _b[_a];
                        if (node.id != "instance-0") {
                            applyOnOneElement(node);
                        }
                    }
                }
            }
        });
        instanceObserver.observe(document.getElementsByClassName(this.instancesClass)[0], {
            childList: true,
            subtree: true
        });
    };
    UI.prototype.onObservingItems = function (applyOnOneElement) {
        var instanceObserver = new MutationObserver(function (mutations) {
            for (var _i = 0, mutations_2 = mutations; _i < mutations_2.length; _i++) {
                var mutation = mutations_2[_i];
                if (mutation.addedNodes.length > 0) {
                    for (var _a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                        var node = _b[_a];
                        {
                            applyOnOneElement(node);
                        }
                    }
                }
            }
        });
        instanceObserver.observe(document.getElementsByClassName(this.instancesClass)[0], {
            childList: true,
            subtree: true
        });
    };
    return UI;
}());
exports.UI = UI;
;


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.data = void 0;
//source must be initiated with unsafeWindow
var data = /** @class */ (function () {
    function data() {
        this.source = null;
        this.expF = null;
    }
    //uW=unsafeWindow must be done from userscript
    //expF=exportFunction
    data.prototype.addDataSource = function (expF, uW) {
        if (uW === void 0) { uW = self; }
        this.source = uW.$nuxt.$root.$children[2].$children[0].$children[0];
        this.expF = expF;
    };
    data.prototype.getElements = function () {
        return this.source._data.elements;
    };
    data.prototype.getInstances = function () {
        return this.source._data.instances;
    };
    data.prototype.onSorting = function (methodName, newSvg, addSortingMethod, addStyleChanges) {
        var _this = this;
        if (addSortingMethod === void 0) { addSortingMethod = function (x) { return x; }; }
        var before = this.source._computedWatchers.sortedElements.getter;
        this.source._computedWatchers.sortedElements.getter = this.expF(function () {
            if (_this.source.$nuxt.$root.$children[2].$children[0].$children[0]._data.sortBy === methodName) {
                var previous = __spreadArray([], before(), true);
                return addSortingMethod(previous, _this.getElements());
            }
            else {
                return before();
            }
        }, unsafeWindow);
        this.source.$nuxt.$root.$children[2].$children[0].$children[0].sorts.push(methodName);
        var sortButtonObserver = new MutationObserver(function (mutations) {
            if (_this.source.$nuxt.$root.$children[2].$children[0].$children[0]._data.sortBy === methodName) {
                var img_1 = document.querySelector(".sidebar-sort > img");
                if (img_1.src.trim() == "https://neal.fun/infinite-craft/" + methodName + ".svg") {
                    img_1.src = newSvg;
                    if (addStyleChanges != null) {
                        addStyleChanges(img_1, true);
                    }
                    //img.style.filter="none";
                }
            }
            else {
                addStyleChanges(img, false);
            }
        });
        var img = document.querySelector(".sidebar-sort > img");
        console.log(img, img.textContent);
        var config = { characterData: false, attributes: true, childList: false, subtree: false };
        sortButtonObserver.observe(img, config);
    };
    data.prototype.onFiltering = function (addFilterMethodOnQuery) {
        var _this = this;
        if (addFilterMethodOnQuery === void 0) { addFilterMethodOnQuery = function (x, y) { return y(); }; }
        var before = this.source._computedWatchers.searchResults.getter;
        this.source._computedWatchers.searchResults.getter = this.expF(function () {
            var query = _this.source.searchQuery;
            return addFilterMethodOnQuery(query, before);
        }, unsafeWindow);
    };
    data.prototype.addInToolTipsAsync = function (callback) {
        var _this = this;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(".item.instance::before {text-align: center;}".trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var instanceObserver = new MutationObserver(function (mutations) { return __awaiter(_this, void 0, void 0, function () {
            var _i, mutations_1, mutation, _a, _b, node, text, nodeText, _c, _d, n, emoji;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _i = 0, mutations_1 = mutations;
                        _e.label = 1;
                    case 1:
                        if (!(_i < mutations_1.length)) return [3 /*break*/, 6];
                        mutation = mutations_1[_i];
                        if (!(mutation.addedNodes.length > 0)) return [3 /*break*/, 5];
                        _a = 0, _b = Array.from(mutation.addedNodes);
                        _e.label = 2;
                    case 2:
                        if (!(_a < _b.length)) return [3 /*break*/, 5];
                        node = _b[_a];
                        if (!node.classList.contains("instance")) return [3 /*break*/, 4];
                        text = node.getAttribute("tooltip");
                        nodeText = "";
                        console.log("exist", node.childNodes);
                        for (_c = 0, _d = Array.from(node.childNodes); _c < _d.length; _c++) {
                            n = _d[_c];
                            if (n.nodeType == 3 && n.length != 0) {
                                console.log("n:", n, "node-type:", n.nodeType);
                                nodeText += n.textContent.trim();
                            }
                        }
                        emoji = node.querySelector(".instance-emoji");
                        return [4 /*yield*/, callback(nodeText, emoji.textContent)];
                    case 3:
                        nodeText = _e.sent();
                        if (text == null)
                            text = "";
                        text = text + "\n" + nodeText;
                        node.setAttribute("tooltip", text);
                        _e.label = 4;
                    case 4:
                        _a++;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        instanceObserver.observe(document.getElementsByClassName("instances")[0], {
            childList: true,
            subtree: true
        });
    };
    data.prototype.addInToolTips = function (callback) {
        var _this = this;
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(".item.instance::before {text-align: center;}".trim()));
        document.getElementsByTagName('head')[0].appendChild(style);
        var instanceObserver = new MutationObserver(function (mutations) { return __awaiter(_this, void 0, void 0, function () {
            var _i, mutations_2, mutation, _a, _b, node, text, nodeText, _c, _d, n, emoji;
            return __generator(this, function (_e) {
                for (_i = 0, mutations_2 = mutations; _i < mutations_2.length; _i++) {
                    mutation = mutations_2[_i];
                    if (mutation.addedNodes.length > 0)
                        for (_a = 0, _b = Array.from(mutation.addedNodes); _a < _b.length; _a++) {
                            node = _b[_a];
                            if (node.classList.contains("instance")) {
                                text = node.getAttribute("tooltip");
                                nodeText = "";
                                console.log("exist", node.childNodes);
                                for (_c = 0, _d = Array.from(node.childNodes); _c < _d.length; _c++) {
                                    n = _d[_c];
                                    if (n.nodeType == 3 && n.length != 0) {
                                        nodeText += n.textContent.trim();
                                    }
                                }
                                emoji = node.querySelector(".instance-emoji");
                                if (emoji)
                                    nodeText = callback(nodeText, emoji.textContent);
                                else
                                    nodeText = callback(nodeText, "");
                                if (text == null)
                                    text = "";
                                text = text + "\n" + nodeText;
                                node.setAttribute("tooltip", text);
                            }
                        }
                }
                return [2 /*return*/];
            });
        }); });
        instanceObserver.observe(document.getElementsByClassName("instances")[0], {
            childList: true,
            subtree: true
        });
    };
    return data;
}());
exports.data = data;
;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.utils = void 0;
var utils = /** @class */ (function () {
    function utils() {
        this.userAddedMethods = [];
        this.ExportSaveButtonQuery = ".setting[for=import-save] + .setting";
        this.saveFileName = "infinitecraft.json";
    }
    utils.prototype.saveSaveFileOnPC = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var handleClick = HTMLElement.prototype.click;
            HTMLElement.prototype.click = function () { HTMLElement.prototype.click = handleClick; };
            var bodyObserver = new MutationObserver(function (mutations, observer) {
                for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    var mutation = mutations_1[_i];
                    if (mutation.type !== "childList")
                        continue;
                    var anchor = Array.from(mutation.addedNodes).find(function (node) {
                        node.download === _this.saveFileName;
                    });
                    if (anchor)
                        return fetch(anchor.href).then(resolve);
                }
            });
            bodyObserver.observe(document.body, { childList: true, subtree: true });
            handleClick.call(document.querySelector(_this.ExportSaveButtonQuery));
            setTimeout(function () {
                bodyObserver.disconnect();
                reject("Timed out");
            }, 1500);
        });
    };
    utils.prototype.addFunction = function (name, callback) {
        this.userAddedMethods.push({ name: name, handler: callback });
    };
    return utils;
}());
exports.utils = utils;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/

exports.__esModule = true;
exports.objectSource = exports.Main = void 0;
var message = 'Hello, World!';
console.log(message);
var UI_1 = __webpack_require__(/*! ./UI */ "./src/UI.ts");
var data_1 = __webpack_require__(/*! ./data */ "./src/data.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Main = /** @class */ (function () {
    function Main() {
        this.$ui = new UI_1.UI();
        this.$data = new data_1.data();
        this.$utils = new utils_1.utils();
    }
    return Main;
}());
exports.Main = Main;
exports.objectSource = new Main();

})();

__webpack_exports__ = __webpack_exports__.objectSource;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLnVzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZBO0lBQUE7SUFpT0EsQ0FBQztJQTVORCxxQ0FBZSxHQUFmLFVBQWdCLFlBQWlCLEVBQUMsS0FBbUI7UUFBbkIscUNBQW1CO1FBRWxELElBQUcsWUFBWSxJQUFFLElBQUk7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBQyxZQUFZLENBQUM7UUFFM0IsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxJQUFLLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUssUUFBUSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFLLFFBQVEsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLE1BQU0sR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUcsQ0FBQyxTQUFTLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFDN0U7WUFFRyxJQUFJLE1BQUksR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLElBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBQyxXQUFXLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1lBQ3JCLElBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBQyxXQUFXLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsT0FBTyxDQUFDO1lBQ3ZCLElBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBQyxXQUFXLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDO1lBQ3RCLElBQUksUUFBUSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLFNBQVMsR0FBQyxlQUFlLENBQUM7WUFDbkMsSUFBSSxZQUFVLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUM7WUFDL0IsWUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDO1lBTW5DLElBQUksSUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsSUFBRSxDQUFDLElBQUksR0FBQyxRQUFRLENBQUM7WUFDakIsSUFBRSxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7WUFDWCxJQUFFLENBQUMsR0FBRyxHQUFDLEtBQUssQ0FBQztZQUNiLElBQUUsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO1lBQ2QsSUFBSSxJQUFFLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxJQUFFLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQztZQUNqQixJQUFFLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztZQUNYLElBQUUsQ0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7WUFDYixJQUFJLElBQUUsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLElBQUUsQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDO1lBQ2pCLElBQUUsQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1lBQ1gsSUFBRSxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUM7WUFDYixJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztZQUNiLElBQUksU0FBTyxHQUFHLFVBQUMsQ0FBSyxJQUFLLFFBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBSyxFQUFFLENBQUssSUFBSyxRQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFBRSxHQUFHLENBQUMsRUFBakYsQ0FBaUYsQ0FBQztZQUMzRyxZQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxNQUFNLEdBQUMsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7WUFHeEUsSUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxVQUFTLEtBQVM7Z0JBRzlDLDJDQUEyQztnQkFFMUMsSUFBRyxJQUFFLENBQUMsS0FBSyxJQUFFLEVBQUUsRUFDZDtvQkFFRSxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztpQkFDZDtnQkFHSCxJQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUM7b0JBQzFCLElBQUUsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO2dCQUdqQixJQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFDLEdBQUc7b0JBQzVCLElBQUUsQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO2dCQUluQixZQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxNQUFNLEdBQUMsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUMsU0FBTyxDQUFDLE1BQU0sR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBUyxJQUFRO2dCQUU3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxJQUFFLENBQUMsS0FBSyxFQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUV4QyxJQUFHLElBQUUsQ0FBQyxLQUFLLElBQUUsRUFBRSxFQUNiO29CQUVFLElBQUUsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO2lCQUNkO2dCQUlILElBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFFLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQztvQkFDMUIsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7Z0JBRWpCLElBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFFLENBQUMsS0FBSyxDQUFDLEdBQUMsR0FBRztvQkFDNUIsSUFBRSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7Z0JBS25CLFlBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztnQkFDMUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsU0FBTyxDQUFDLE1BQU0sR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLElBQUksQ0FBQyxXQUFXLEdBQUMsU0FBTyxDQUFDLE1BQU0sR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVkLElBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBUyxLQUFTO2dCQUU3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxJQUFFLENBQUMsS0FBSyxFQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4QyxJQUFHLElBQUUsQ0FBQyxLQUFLLElBQUUsRUFBRSxFQUNkO29CQUVFLElBQUUsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO2lCQUNkO2dCQUdELElBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFFLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQztvQkFDM0IsSUFBRSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7Z0JBRWhCLElBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFFLENBQUMsS0FBSyxDQUFDLEdBQUMsR0FBRztvQkFDOUIsSUFBRSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7Z0JBS25CLFlBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxJQUFFLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBQyxTQUFPLENBQUMsTUFBTSxHQUFDLElBQUUsQ0FBQyxLQUFLLEdBQUMsR0FBRyxHQUFDLElBQUUsQ0FBQyxLQUFLLEdBQUMsR0FBRyxHQUFDLElBQUUsQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBT2YsSUFBSSxXQUFXLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxRCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUN0QyxNQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksUUFBUSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLFNBQVMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFFLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBRSxDQUFDLENBQUM7WUFDekIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUUsQ0FBQyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQztZQUM1QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDL0IsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVoQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RELFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBVSxDQUFDLENBQUM7WUFDcEMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsT0FBTyxDQUFDO1lBQ2hDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsTUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU1QixNQUFJLENBQUMsV0FBVyxDQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQy9CLE1BQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLFVBQVUsQ0FBQztZQUMvQixNQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUM7WUFDckIsTUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDO1lBQ3RCLE1BQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLHlCQUF5QixDQUFDO1lBQ2hELE1BQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxJQUFHLE1BQU07Z0JBQ1IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFJLENBQUMsQ0FBQztZQUN6QixNQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDeEI7YUFDRDtZQUdFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFcEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxVQUFTLEtBQUs7Z0JBQ25CLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztZQUtKLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBUyxLQUFTO2dCQUVoRCxJQUFJLENBQUMsV0FBVyxHQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFHLE1BQU07Z0JBQ1IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixZQUFZO1lBQ1gsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBR2hCO0lBTUQsQ0FBQztJQU1ELGtCQUFDO0FBQUQsQ0FBQztBQWpPWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEIsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ25CLCtDQUFRO0lBQUUsbURBQVU7QUFDdkIsQ0FBQyxFQUZXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBRXJCO0FBb0NEO0lBQUE7UUFDVSx1QkFBa0IsR0FBVyxXQUFXLENBQUM7UUFDekMseUJBQW9CLEdBQVcsWUFBWSxDQUFDO1FBQzVDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFJbkMscUJBQWdCLEdBQVcsY0FBYyxDQUFDO1FBQzFDLFlBQU8sR0FBaUIsRUFBRSxDQUFDO0lBaVFyQyxDQUFDO0lBOVBFLHlDQUFtQixHQUFuQixVQUFvQixPQUFZO1FBQzdCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0QsMENBQW9CLEdBQXBCLFVBQXFCLE9BQVk7UUFDOUIsSUFBSSxDQUFDLDBCQUEwQixHQUFHLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsTUFBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELGdDQUFVLEdBQVYsVUFBVyxPQUFxQjs7UUFDN0IsVUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLFdBQUksT0FBTyxFQUFFO0lBQ2pDLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBUyxFQUFFLE9BQTZCO1FBQXpELGlCQXFCQztRQXBCRSxJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUM7UUFDVixJQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBUTtZQUV4RCxPQUFPLEdBQUcsVUFBVSxDQUFDLGNBQWMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFJakwsSUFBSSxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUlILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFRO1lBRXhDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUd6QixDQUFDLENBQUMsQ0FBQztJQUdOLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsT0FJWixFQUFFLE1BQWE7UUFKaEIsaUJBK0JDO1FBL0JZO1lBQ1YsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUU7WUFDNUQsWUFBWSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDbkQsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUMvRTtRQUFFLHNDQUFhO1FBQ2IsS0FBaUIsVUFBOEMsRUFBOUMsVUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBOUMsY0FBOEMsRUFBOUMsSUFBOEMsRUFBRTtZQUE1RCxJQUFJLElBQUk7WUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBTSxhQUFhLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFPLFNBQVM7OztnQkFDeEQsV0FBZ0MsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUyxFQUFFO29CQUF2QixRQUFRO29CQUNoQixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQy9CLFdBQWtELEVBQS9CLFVBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUEvQixjQUErQixFQUEvQixJQUErQixFQUFFOzRCQUF6QyxJQUFJOzRCQUVaLElBQWtCLElBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQ0FDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFHMUM7aUJBRU47OzthQUNILENBQUMsQ0FBQztRQUdILGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUk7U0FFZixDQUFDLENBQUM7SUFHTixDQUFDO0lBV0QsaURBQTJCLEdBQTNCLFVBQTRCLElBQVMsRUFBRSxDQUFNLEVBQUUsT0FJOUMsRUFBRSxNQUFhO1FBSmhCLGlCQTRLQztRQTVLOEM7WUFDNUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUU7WUFDNUQsWUFBWSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDbkQsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUMvRTtRQUFFLHNDQUFhO1FBSWIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsRCxJQUFJLE1BQU0sRUFBRTtZQUNULElBQUksU0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFMUQsSUFBSSxTQUFPLElBQUksSUFBSSxFQUFFO2dCQUNsQixTQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsU0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQU8sQ0FBQyxDQUFDO2FBQzlCO2lCQUNJO2dCQUNGLFNBQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNULFNBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUM3QztZQUNhLFNBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztZQUN0QyxTQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDakMsU0FBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFDLFNBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUNuRCwwRUFBMEU7WUFDNUQsU0FBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDbEQsU0FBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDakQsU0FBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDdEUsU0FBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9JLFNBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQy9ELFNBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLHlCQUF5QixDQUFDO1lBR3pFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsTUFBTSxFQUFFLENBQUM7O2dCQUdyQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUcvQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDckMsSUFBSSxnQkFBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JELElBQUksT0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLGdCQUFjLENBQUMsRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ25DLGdCQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQ25DLGdCQUFjLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDakMsT0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixRQUFRLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLG1CQUFtQixDQUFDO29CQUNqRCxPQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDMUQsT0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQzVELE9BQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDO29CQUM5QyxPQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDOUQsT0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDeEYsT0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDMUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ3pGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztvQkFDcEMsT0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztvQkFDekQsT0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNqRSxnQkFBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBRTlCLElBQUksSUFBSSxFQUFFO3dCQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDO3dCQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUN0QyxPQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUN6QyxRQUFRLENBQUMsV0FBVyxHQUFHLFlBQU0sQ0FBQyxPQUFPLG1DQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUM5RDt5QkFBTTt3QkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQzt3QkFDNUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO3dCQUN0QyxPQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7d0JBQ3pDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsd0JBQU0sQ0FBQyxRQUFRLG1DQUFJLE1BQU0sQ0FBQyxPQUFPLG1DQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxtQ0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUVuRztvQkFNRCxnQkFBYyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTs7d0JBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxnQkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxJQUFJLGdCQUFjLENBQUMsT0FBTyxFQUFFOzRCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQzs0QkFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDNUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDdEMsT0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDekMsUUFBUSxDQUFDLFdBQVcsR0FBRyxZQUFNLENBQUMsT0FBTyxtQ0FBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzt5QkFDOUQ7NkJBQU07NEJBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzRCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7NEJBQzVDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQzs0QkFDdEMsT0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsY0FBYzs0QkFDeEMsUUFBUSxDQUFDLFdBQVcsR0FBRyx3QkFBTSxDQUFDLFFBQVEsbUNBQUksTUFBTSxDQUFDLE9BQU8sbUNBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLG1DQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7eUJBRW5HO29CQUlKLENBQUMsQ0FBQyxDQUFDO29CQUlILHFDQUFxQztvQkFDckMsU0FBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBYyxDQUFDLENBQUM7b0JBQ3BDLFNBQU8sQ0FBQyxXQUFXLENBQUMsT0FBSyxDQUFDLENBQUM7b0JBQzNCLFNBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBRWhDO3FCQUFNO29CQUNKLElBQUksY0FBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BELGNBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztvQkFDbEMsY0FBWSxDQUFDLFdBQVcsR0FBRyxZQUFNLENBQUMsT0FBTyxtQ0FBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDaEUsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO3dCQUNyQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQU8sQ0FBQyxDQUFDO3FCQUM5QjtvQkFDRCxjQUFZLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyx5QkFBeUIsQ0FBQztvQkFDL0QsY0FBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7b0JBQy9DLGNBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7O3dCQUV4QyxjQUFZLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNwRCxjQUFZLENBQUMsV0FBVyxHQUFHLE9BQUMsa0JBQU0sQ0FBQyxRQUFRLG1DQUFJLE1BQU0sQ0FBQyxPQUFPLG1DQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLG1DQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBSTFHLENBQUMsQ0FBQyxDQUFDO29CQUNILGNBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7O3dCQUN0QyxjQUFZLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyx5QkFBeUI7d0JBQzlELGNBQVksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxZQUFNLENBQUMsT0FBTyxtQ0FBSSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO29CQUNyRSxDQUFDLENBQUMsQ0FBQztvQkFFSCxjQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQU0sYUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7b0JBRS9ELFNBQU8sQ0FBQyxXQUFXLENBQUMsY0FBWSxDQUFDLENBQUM7aUJBRXBDO2dCQUVELFNBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1lBSUgsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSyxFQUFFO2dCQUNsQyxTQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsQ0FBQztvQkFFbkQsVUFBVSxDQUFDO3dCQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJOzRCQUN6RCxPQUFjLElBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUc7d0JBQXZDLENBQXVDLENBQUMsQ0FBQztvQkFFL0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUtYLENBQUMsQ0FBQyxDQUFDO2FBQ0w7aUJBQ0k7Z0JBQ0YsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQU8sQ0FBQyxDQUFDO2FBQzNDO1NBT0g7SUFDSixDQUFDO0lBQ0osa0JBQUM7QUFBRCxDQUFDO0FBMVFZLGtDQUFXOzs7Ozs7Ozs7Ozs7OztBQzFCeEI7SUFvQkMsb0JBQVksUUFBWSxFQUFDLFNBQWMsRUFBQyxVQUFlLEVBQUMsT0FBdUI7O1FBQXZCLHNDQUF1QjtRQWxCeEUsZ0JBQVcsR0FBUSxtQkFBbUIsQ0FBQztRQUM5QyxhQUFRLEdBQVEsYUFBYSxDQUFDO1FBQzlCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFTLElBQUksQ0FBQztRQUNuQixnQkFBVyxHQUFRLFNBQVMsQ0FBQztRQUM3QixlQUFVLEdBQVksY0FBSyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFjMUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBQyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBQyxTQUFTLENBQUM7UUFDekIsVUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLFdBQUksT0FBTyxFQUFFO0lBRWpDLENBQUM7SUFqQkYsK0JBQVUsR0FBVixVQUFXLE9BQW9CO1FBRTlCLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCw4QkFBUyxHQUFULFVBQVUsTUFBaUI7UUFFMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQWNELGdDQUFXLEdBQVgsVUFBWSxXQUFtQjtRQUU5QixJQUFJLFNBQVMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsYUFBWCxXQUFXLGNBQVgsV0FBVyxHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxJQUFJLFNBQVMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxFQUFDLEdBQUUsRUFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLGFBQWEsQ0FBQztRQUdyQyxJQUFJLFlBQVksR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksU0FBUyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxVQUFVLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLFFBQVEsQ0FBQztRQUNwQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUM7UUFHaEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRzNDLElBQUksR0FBRyxHQUFHLDhXQW9CVjtRQUdELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUc1RCxJQUFJLFdBQVcsR0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBRyxJQUFJLENBQUMsVUFBVTtZQUNoQixXQUFXLEdBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLEdBQUMsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLElBQUUsSUFBSSxFQUFDLEdBQUUsRUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJKLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLFVBQUMsTUFBTTtZQUc1QixJQUFJLFNBQVMsR0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDOUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUMsR0FBRyxHQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBRSxJQUFJLEVBQUMsR0FBRSxFQUFDLE9BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkgsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUMsUUFBUSxDQUFDO1lBQ3BDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztZQUNsQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFDLGNBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztZQUN0RixTQUFTLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFDLGNBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUMseUJBQXlCLEdBQUMsQ0FBQyxDQUFDO1lBRXpHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsU0FBUyxDQUFDLFdBQVcsR0FBQyxNQUFNLENBQUMsVUFBVSxHQUFDLEdBQUcsR0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUUsSUFBSSxFQUFDLEdBQUUsRUFBQyxPQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNGLENBQUM7WUFBQSxDQUFDLENBQUMsQ0FBQztZQUVOLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHbkMsQ0FBQyxDQUFDLENBQUM7UUFFRixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDO1lBQ25DLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUM7UUFJM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUVwQixZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBR3ZELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUM7WUFFbkMsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFFLElBQUksRUFDeEI7Z0JBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFekIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO29CQUNyQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUVwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUU1QjtpQkFDQztnQkFBSSxJQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO29CQUNoQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUUxQyxJQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO29CQUNoQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtRQUdMLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFHckIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQyxPQUFPLFNBQVMsQ0FBQztJQUNqQixDQUFDO0lBT0QsaUJBQUM7QUFBRCxDQUFDO0FBeEpZLGdDQUFVOzs7Ozs7Ozs7Ozs7OztBQ1h2QjtJQUFBO0lBV0EsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQztBQVhZLGtEQUFtQjtBQWlCaEM7SUFBQTtRQUlPLFVBQUssR0FBUSxTQUFTLENBQUM7UUFDdkIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQVEsS0FBSyxDQUFDO1FBQ3pCLGdCQUFXLEdBQVEsTUFBTSxDQUFDO0lBMkpqQyxDQUFDO0lBdEpELGtDQUFXLEdBQVgsVUFBWSxPQUE4QjtRQUE5QixzQ0FBOEI7UUFHekMsSUFBRyxPQUFPLENBQUMsT0FBTyxJQUFFLElBQUk7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRTNCLElBQUcsT0FBTyxDQUFDLEtBQUssSUFBRSxJQUFJLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzVCO1FBQ0QsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFFLElBQUksRUFDakI7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDMUI7UUFDSixJQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUUsSUFBSSxFQUNyQjtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUN4QztRQUNSLElBQUcsT0FBTyxDQUFDLFdBQVcsSUFBRSxJQUFJLEVBQ3pCO1lBQ1ksSUFBSSxDQUFDLFdBQVcsR0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ2xEO1FBRUYsSUFBSSxHQUFHLEdBQ04saWxCQThCUSxJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsNEJBQ1gsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLHVWQW9CSixJQUFJLENBQUMsV0FBVyx1SEFPdkIsSUFBSSxDQUFDLElBQUksMkJBQ1YsSUFBSSxDQUFDLElBQUksaUtBTUQsSUFBSSxDQUFDLFdBQVcsa0xBU2IsSUFBSSxDQUFDLEtBQUsseUlBVzlCLENBQUM7UUFDRixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFJbkQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLElBQUcsT0FBTyxDQUFDLFlBQVksSUFBRSxJQUFJLEVBQzVCO1lBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDMUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFMUIsSUFBRyxPQUFPLENBQUMsTUFBTTtZQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixPQUFPLEtBQUssQ0FBQztJQUUxQixDQUFDO0lBS0osbUJBQUM7QUFBRCxDQUFDO0FBbktZLG9DQUFZOzs7Ozs7Ozs7Ozs7OztBQ2pCekIscUZBQStEO0FBQy9ELGtGQUFrRDtBQUNsRCxxRkFBeUM7QUFDekMsd0ZBQWdFO0FBQ2hFO0lBWUc7UUFWTyxpQkFBWSxHQUFlLENBQUMsSUFBSSx5QkFBVyxFQUFFLENBQUMsQ0FBQztRQUMvQyxnQkFBVyxHQUFhLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0Msa0JBQWEsR0FBZ0IsRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQWEsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFFMUMsNEJBQXVCLEdBQVcsRUFBRSxDQUFDO1FBQ3JDLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixtQkFBYyxHQUFXLFdBQVcsQ0FBQztRQUNyQyxlQUFVLEdBQVcsYUFBYSxDQUFDO1FBRXZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsbUJBQW1CLENBQUM7SUFDekQsQ0FBQztJQUVGLDZCQUFnQixHQUFoQixVQUFpQixPQUEyQjtRQUUzQyxJQUFJLFlBQVksR0FBQyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxzQkFBUyxHQUFULFVBQVUsR0FBVTtRQUVuQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHL0QsQ0FBQztJQUdDLGtDQUFxQixHQUFyQixVQUFzQixRQUFZLEVBQUMsU0FBYyxFQUFDLFVBQWUsRUFBQyxPQUF1QjtRQUF2QixzQ0FBdUI7UUFDbkYsSUFBSSxPQUFPLEdBQUMsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixPQUFRLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBRUEsZ0NBQW1CLEdBQW5CLFVBQW9CLGlCQUFzQjtRQUN2QyxJQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQyxTQUFTO1lBQ3JELEtBQXVCLFVBQVMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUyxFQUFFO2dCQUE3QixJQUFNLFFBQVE7Z0JBQ2hCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNqQyxLQUFtQixVQUErQixFQUEvQixVQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBL0IsY0FBK0IsRUFBL0IsSUFBK0IsRUFBRTt3QkFBL0MsSUFBTSxJQUFJO3dCQUdaLElBQWtCLElBQUssQ0FBQyxFQUFFLElBQUksWUFBWSxFQUFFOzRCQUN6QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFFMUI7cUJBQ0g7aUJBQ0g7YUFDSDtRQUlKLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0UsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtTQUVmLENBQUMsQ0FBQztJQUdOLENBQUM7SUFDRCw2QkFBZ0IsR0FBaEIsVUFBaUIsaUJBQXNCO1FBQ3BDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFDLFNBQVM7WUFDckQsS0FBdUIsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTLEVBQUU7Z0JBQTdCLElBQU0sUUFBUTtnQkFDaEIsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2pDLEtBQW1CLFVBQStCLEVBQS9CLFVBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUEvQixjQUErQixFQUEvQixJQUErQixFQUFFO3dCQUEvQyxJQUFNLElBQUk7d0JBQ1o7NEJBQ0csaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBRTFCO3FCQUNIO2lCQUNIO2FBQ0g7UUFJSixDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9FLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUk7U0FFZixDQUFDLENBQUM7SUFHTixDQUFDO0lBS0osU0FBQztBQUFELENBQUM7QUFoR1ksZ0JBQUU7QUFnR2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0YsNENBQTRDO0FBQzVDO0lBcU5FO1FBbk5TLFdBQU0sR0FBSyxJQUFJLENBQUM7UUFDaEIsU0FBSSxHQUFLLElBQUksQ0FBQztJQW9OdEIsQ0FBQztJQWhORiw4Q0FBOEM7SUFDOUMscUJBQXFCO0lBRWhCLDRCQUFhLEdBQXBCLFVBQXFCLElBQVEsRUFBQyxFQUFXO1FBQVgsOEJBQVc7UUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUdRLDBCQUFXLEdBQWxCO1FBRUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUNDLDJCQUFZLEdBQVo7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Usd0JBQVMsR0FBVCxVQUFVLFVBQWlCLEVBQUMsTUFBYSxFQUFDLGdCQUF3QyxFQUFDLGVBQW9CO1FBQXZHLGlCQW9ERjtRQXBENEMsZ0VBQW9DLENBQUMsSUFBRSxRQUFDLEVBQUQsQ0FBQztRQUVyRixJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFHL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFN0QsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQzVGO2dCQUNDLElBQUksUUFBUSxxQkFBSyxNQUFNLEVBQUUsT0FBQyxDQUFDO2dCQUMzQixPQUFPLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUNyRDtpQkFDRDtnQkFDRSxPQUFPLE1BQU0sRUFBRSxDQUFDO2FBRWpCO1FBRUosQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RGLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFDLFNBQVM7WUFHakQsSUFBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQzNGO2dCQUFLLElBQUksS0FBRyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFFekQsSUFBdUIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBRSxrQ0FBa0MsR0FBQyxVQUFVLEdBQUMsTUFBTSxFQUMxRjtvQkFFcUIsS0FBSSxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUM7b0JBQ25DLElBQUcsZUFBZSxJQUFFLElBQUksRUFDdkI7d0JBQ0csZUFBZSxDQUFDLEtBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztxQkFDNUI7b0JBQ0YsMEJBQTBCO2lCQUUzQjthQUNKO2lCQUNLO2dCQUNDLGVBQWUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFHYixDQUFDLENBQUMsQ0FBQztRQUVELElBQUksR0FBRyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzFGLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFJNUMsQ0FBQztJQUVHLDBCQUFXLEdBQVgsVUFBWSxzQkFBNEQ7UUFBeEUsaUJBWUg7UUFaZSw0RUFBMkMsQ0FBSyxFQUFDLENBQUssSUFBRyxRQUFDLEVBQUUsRUFBSCxDQUFHO1FBRTVFLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3RCxJQUFJLEtBQUssR0FBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFJbEMsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFHNUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFFO0lBQ2pCLENBQUM7SUFHSCxpQ0FBa0IsR0FBbEIsVUFBbUIsUUFBcUQ7UUFBeEUsaUJBeURDO1FBdERDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLDhDQUE4QyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSTVELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBRSxVQUFPLFNBQVM7Ozs7OzhCQUM3QixFQUFULHVCQUFTOzs7NkJBQVQsd0JBQVM7d0JBQXJCLFFBQVE7NkJBQ2QsU0FBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUE5Qix3QkFBOEI7OEJBQ2tCLEVBQS9CLFVBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzs7OzZCQUEvQixlQUErQjt3QkFBdkMsSUFBSTs2QkFHVSxJQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBbEQsd0JBQWtEO3dCQUU3QyxJQUFJLEdBQWdCLElBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2pELFFBQVEsR0FBQyxFQUFFO3dCQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBRXhDLFdBQXVELEVBQTFDLFVBQUssQ0FBQyxJQUFJLENBQWUsSUFBSyxDQUFDLFVBQVUsQ0FBQyxFQUExQyxjQUEwQyxFQUExQyxJQUEwQyxFQUN2RDs0QkFEUSxDQUFDOzRCQUdQLElBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBRSxDQUFDLElBQVcsQ0FBRSxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQ3JDO2dDQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQ0FDM0MsUUFBUSxJQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBRWhDO3lCQUVKO3dCQUVJLEtBQUssR0FBZSxJQUFLLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ3ZELHFCQUFNLFFBQVEsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7d0JBQW5ELFFBQVEsR0FBQyxTQUEwQyxDQUFDO3dCQUNwRCxJQUFHLElBQUksSUFBRSxJQUFJOzRCQUNULElBQUksR0FBQyxFQUFFLENBQUM7d0JBRVgsSUFBSSxHQUFDLElBQUksR0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDO3dCQUNWLElBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDOzs7d0JBNUI3QyxJQUErQjs7O3dCQUY5QixJQUFTOzs7OzthQXNDbkMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0RSxTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBSSxJQUFJO1NBRWxCLENBQUMsQ0FBQztJQUdILENBQUM7SUFDRCw0QkFBYSxHQUFiLFVBQWMsUUFBNEM7UUFBMUQsaUJBd0RLO1FBcERILElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLDhDQUE4QyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBRSxVQUFPLFNBQVM7OztnQkFDN0QsV0FBZ0MsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUyxFQUFFO29CQUF2QixRQUFRO29CQUNsQixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQ2hDLFdBQWtELEVBQS9CLFVBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUEvQixjQUErQixFQUEvQixJQUErQixFQUFDOzRCQUF4QyxJQUFJOzRCQUdQLElBQWlCLElBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUNuRDtnQ0FDTSxJQUFJLEdBQWdCLElBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0NBQ2pELFFBQVEsR0FBQyxFQUFFO2dDQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0NBRXhDLFdBQXVELEVBQTFDLFVBQUssQ0FBQyxJQUFJLENBQWUsSUFBSyxDQUFDLFVBQVUsQ0FBQyxFQUExQyxjQUEwQyxFQUExQyxJQUEwQyxFQUN2RDtvQ0FEUSxDQUFDO29DQUdQLElBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBRSxDQUFDLElBQVcsQ0FBRSxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQ3JDO3dDQUVFLFFBQVEsSUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO3FDQUVoQztpQ0FFSjtnQ0FFSSxLQUFLLEdBQWUsSUFBSyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dDQUNoRSxJQUFHLEtBQUs7b0NBQ1IsUUFBUSxHQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztvQ0FFN0MsUUFBUSxHQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0NBRWhDLElBQUcsSUFBSSxJQUFFLElBQUk7b0NBQ1QsSUFBSSxHQUFDLEVBQUUsQ0FBQztnQ0FFWCxJQUFJLEdBQUMsSUFBSSxHQUFDLElBQUksR0FBQyxRQUFRLENBQUM7Z0NBQ1YsSUFBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ3JEO3lCQUVIO2lCQUFDOzs7YUFDSCxDQUFDLENBQUM7UUFFSCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFJLElBQUk7U0FFbEIsQ0FBQyxDQUFDO0lBR1gsQ0FBQztJQVNMLFdBQUM7QUFBRCxDQUFDO0FBMU5ZLG9CQUFJO0FBME5oQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQzdORjtJQW1DQTtRQS9CVyxxQkFBZ0IsR0FBTyxFQUFFLENBQUM7UUFDMUIsMEJBQXFCLEdBQVMsc0NBQXNDLENBQUM7UUFDckUsaUJBQVksR0FBUSxvQkFBb0IsQ0FBQztJQWdDcEQsQ0FBQztJQTdCRyxnQ0FBZ0IsR0FBaEI7UUFBQSxpQkF5Qkg7UUF4QkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2hELFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFDO1lBQy9FLElBQU0sWUFBWSxHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQyxTQUFTLEVBQUUsUUFBUTtnQkFDMUQsS0FBdUIsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTLEVBQUU7b0JBQTdCLElBQU0sUUFBUTtvQkFDZixJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVzt3QkFBRSxTQUFTO29CQUM1QyxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO3dCQUluRCxJQUFLLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxZQUFZO29CQUFBLENBQUMsQ0FBQyxDQUFDO29CQUk3QyxJQUFJLE1BQU07d0JBQUUsT0FBTyxLQUFLLENBQXFCLE1BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzVFO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLFVBQVUsQ0FBQztnQkFDUCxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBS0QsMkJBQVcsR0FBWCxVQUFZLElBQVcsRUFBQyxRQUFZO1FBRWhDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxZQUFDO0FBQUQsQ0FBQztBQTVDWSxzQkFBSzs7Ozs7OztVQ0FsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBLElBQUksT0FBTyxHQUFXLGVBQWUsQ0FBQztBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLDBEQUF3QjtBQUN4QixnRUFBNEI7QUFDNUIsbUVBQThCO0FBQzlCO0lBS0M7UUFFQyxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksT0FBRSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR0YsV0FBQztBQUFELENBQUM7QUFiWSxvQkFBSTtBQWdCTixvQkFBWSxHQUFNLElBQUksSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db21tdW5pdHkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0NvbW11bml0eS8uL3NyYy9Db2xvclBpY2tlci50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvQ29udGV4dE1lbnUudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL01lbnVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL1RvZ2dsZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvVUkudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vQ29tbXVuaXR5Ly4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL0NvbW11bml0eS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db21tdW5pdHkvLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb21tdW5pdHlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ29tbXVuaXR5XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBjbGFzcyBDb2xvclBpY2tlclxyXG57XHJcbiBwdWJsaWMgIGNhbGxiYWNrOmFueTtcclxuIHB1YmxpYyAgcGlja2VkQ29sb3I6c3RyaW5nO1xyXG5cclxubWFrZUNvbG9yUGlja2VyKGxvY2FsQ29sYmFjaz86YW55LGRlYnVnOmJvb2xlYW49ZmFsc2UpXHJcbntcclxuICAgaWYobG9jYWxDb2xiYWNrIT1udWxsKVxyXG4gICAgdGhpcy5jYWxsYmFjaz1sb2NhbENvbGJhY2s7XHJcbiAgICAgIFxyXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFyICBpc0FuZHJvaWQgPSB1YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IC0xO1xyXG4gICAgdmFyICBpc01vYmlsZSA9IHVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzV2ViT3MgPSB1YS5pbmRleE9mKFwid2Vib3NcIikgPiAtMTtcclxuICAgIHZhciAgaXNJcGhvbmUgPSB1YS5pbmRleE9mKFwiaXBob25lXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzSXBhZCA9IHVhLmluZGV4T2YoXCJpcGFkXCIpID4gLTE7XHJcbiAgICB2YXIgIGlzTGludXggPSB1YS5pbmRleE9mKFwibGludXhcIikgPiAtMTtcclxuICAgIGxldCBwYXJlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgaWYoKGlzQW5kcm9pZCB8fCBpc01vYmlsZSB8fCBpc0xpbnV4IHx8IGlzV2ViT3MgfHwgaXNJcGhvbmUgfHwgaXNJcGFkKSB8fCBkZWJ1ZylcclxuICAgIHtcclxuICAgICAgXHJcbiAgICAgICBsZXQgZGlhZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG5cclxuICAgICAgIGxldCBscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBsci5pbm5lclRleHQ9XCJSICgwLTI1NSlcIjtcclxuICAgICAgIGxyLnN0eWxlLmNvbG9yPVwicmVkXCI7XHJcbiAgICAgICBsZXQgbGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbGcuaW5uZXJUZXh0PVwiRyAoMC0yNTUpXCI7XHJcbiAgICAgICBsZy5zdHlsZS5jb2xvcj1cImdyZWVuXCI7XHJcbiAgICAgICBsZXQgbGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgbGIuaW5uZXJUZXh0PVwiQiAoMC0yNTUpXCI7XHJcbiAgICAgICBsYi5zdHlsZS5jb2xvcj1cImJsdWVcIjtcclxuICAgICAgIGxldCBQcmV2aWV3cz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICBQcmV2aWV3cy5pbm5lclRleHQ9XCJQcmV2aWV3IGNvbG9yXCI7XHJcbiAgICAgICBsZXQgcHJldmlld0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS53aWR0aD1cIjEwMHB4XCI7XHJcbiAgICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmhlaWdodD1cIjEwMHB4XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgIGxldCByaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcmkudHlwZT1cIm51bWJlclwiO1xyXG4gICAgICAgIHJpLm1pbj1cIjBcIjtcclxuICAgICAgICByaS5tYXg9XCIyNTVcIjtcclxuICAgICAgICByaS52YWx1ZT1cIjBcIjtcclxuICAgICAgIGxldCBnaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICBnaS50eXBlPVwibnVtYmVyXCI7XHJcbiAgICAgICBnaS5taW49XCIwXCI7XHJcbiAgICAgICBnaS5tYXg9XCIyNTVcIjtcclxuICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgbGV0IGJpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgIGJpLnR5cGU9XCJudW1iZXJcIjtcclxuICAgICAgIGJpLm1pbj1cIjBcIjtcclxuICAgICAgIGJpLm1heD1cIjI1NVwiO1xyXG4gICAgICAgYmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICBsZXQgcmdiMkhleCA9IChzOmFueSkgPT4gcy5tYXRjaCgvWzAtOV0rL2cpLnJlZHVjZSgoYTphbnksIGI6YW55KSA9PiBhKyhifDI1NikudG9TdHJpbmcoMTYpLnNsaWNlKDEpLCAnIycpO1xyXG4gICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG5cclxuXHJcbiAgICAgICAgIHJpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSl7XHJcblxyXG5cclxuICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyaTpcIixyaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuXHJcbiAgICAgICAgICBpZihyaS52YWx1ZT09XCJcIilcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIwXCI7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChyaS52YWx1ZSk8MClcclxuICAgICAgICAgICAgIHJpLnZhbHVlPVwiMFwiO1xyXG5cclxuXHJcbiAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChyaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgcmkudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgcHJldmlld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kPVwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiO1xyXG4gICAgICAgICB0aGlzLnBpY2tlZENvbG9yPXJnYjJIZXgoXCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCIpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIm9uZUNvbG9yOlwiLHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICBnaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVuOmFueSl7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImdpOlwiLGdpLnZhbHVlLFwic29tZXRoaW5nXCIpO1xyXG5cclxuICAgICAgICAgaWYoZ2kudmFsdWU9PVwiXCIpXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMFwiO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgaWYoTnVtYmVyLnBhcnNlSW50KGdpLnZhbHVlKTwwKVxyXG4gICAgICAgICAgICAgZ2kudmFsdWU9XCIwXCI7XHJcblxyXG4gICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoZ2kudmFsdWUpPjI1NSlcclxuICAgICAgICAgICAgIGdpLnZhbHVlPVwiMjU1XCI7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICBwcmV2aWV3RGl2LnN0eWxlLmJhY2tncm91bmQ9XCJyZ2IoXCIrcmkudmFsdWUrXCIsXCIrZ2kudmFsdWUrXCIsXCIrYmkudmFsdWUrXCIpXCI7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRfY29sb3JcIixyZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKSk7XHJcbiAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgIGJpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKGV2ZW50OmFueSl7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiaTpcIixiaS52YWx1ZSxcInNvbWV0aGluZ1wiKTtcclxuICAgICAgICAgIGlmKGJpLnZhbHVlPT1cIlwiKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICBiaS52YWx1ZT1cIjBcIjtcclxuICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoYmkudmFsdWUpPDApXHJcbiAgICAgICAgICAgICAgYmkudmFsdWU9XCIwXCI7XHJcblxyXG4gICAgICAgICAgIGlmKE51bWJlci5wYXJzZUludChiaS52YWx1ZSk+MjU1KVxyXG4gICAgICAgICAgICAgYmkudmFsdWU9XCIyNTVcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgIHByZXZpZXdEaXYuc3R5bGUuYmFja2dyb3VuZD1cInJnYihcIityaS52YWx1ZStcIixcIitnaS52YWx1ZStcIixcIitiaS52YWx1ZStcIilcIjtcclxuICAgICAgICAgdGhpcy5waWNrZWRDb2xvcj1yZ2IySGV4KFwicmdiKFwiK3JpLnZhbHVlK1wiLFwiK2dpLnZhbHVlK1wiLFwiK2JpLnZhbHVlK1wiKVwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJvbmVDb2xvcjpcIix0aGlzLnBpY2tlZENvbG9yKTtcclxuICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnBpY2tlZENvbG9yKTtcclxuXHJcbiAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ2xvc2VcIikpO1xyXG4gICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIGRpYWcuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICBsZXQgaW5wdXREaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgIGxldCBwcmV2aWV3c0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgbGV0IG1haW5Mb2dpYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQobHIpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKHJpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChsZyk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZ2kpO1xyXG4gICAgICAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxiKTtcclxuICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChiaSk7XHJcbiAgICAgICBpbnB1dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgaW5wdXREaXYuc3R5bGUuZmxvYXQ9XCJsZWZ0XCI7XHJcbiAgICAgICBpbnB1dERpdi5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgICAgIG1haW5Mb2dpYy5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcblxyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoUHJldmlld3MpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIHByZXZpZXdzRGl2LmFwcGVuZENoaWxkKHByZXZpZXdEaXYpO1xyXG4gICAgICAgcHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgIHByZXZpZXdzRGl2LnN0eWxlLmZsb2F0PVwicmlnaHRcIjtcclxuICAgICAgIG1haW5Mb2dpYy5hcHBlbmRDaGlsZChwcmV2aWV3c0Rpdik7XHJcbiAgICAgICBkaWFnLmFwcGVuZENoaWxkKG1haW5Mb2dpYyk7XHJcblxyXG4gICAgICAgZGlhZy5hcHBlbmRDaGlsZCggY2xvc2VCdXR0b24pO1xyXG4gICAgICAgZGlhZy5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLnRvcD1cIjMzJVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5sZWZ0PVwiMjUlXCI7XHJcbiAgICAgICBkaWFnLnN0eWxlLmJhY2tncm91bmQ9XCJ2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKVwiO1xyXG4gICAgICAgZGlhZy5zdHlsZS5jb2xvcj0oXCJ2YXIoLS10ZXh0LWNvbG9yKVwiKS50cmltKCk7XHJcbiAgICAgICBpZihwYXJlbnQpXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpYWcpO1xyXG4gICAgICAgIGRpYWcuc2hvd01vZGFsKCk7XHJcbn1lbHNlXHJcbntcclxuXHJcblxyXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY29sb3JcIik7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldmVudDphbnkpXHJcbntcclxuICAgdGhpcy5waWNrZWRDb2xvcj0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gIHRoaXMuY2FsbGJhY2sodGhpcy5waWNrZWRDb2xvcik7XHJcblxyXG4gICB9LmJpbmQodGhpcykpO1xyXG4gICBpZihwYXJlbnQpXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gIC8vIGhpZGRlbj0wO1xyXG4gICBpbnB1dC5jbGljaygpO1xyXG4gXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIEFjdGlvblR5cGUge1xyXG4gICBcImJ1dHRvblwiLCBcImNoZWNrYm94XCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Gb3JtIHtcclxuICAgdGV4dE9uOiBzdHJpbmc7XHJcbiAgIHRleHRPZmY/OiBzdHJpbmc7XHJcbiAgIGVtb2ppT24/OiBzdHJpbmc7XHJcbiAgIGVtb2ppT2ZmPzogc3RyaW5nO1xyXG4gICBoYW5kbGVyOiBhbnk7XHJcbiAgIGluaXRIYW5kbGVyPzogKHg6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dE1lbnVVaU9wdGlvbnMge1xyXG4gICBjb2xvckI6IFwiIzU0QzU3MVwiLFxyXG4gICBoZWlnaHQ6IDQwLFxyXG4gICBib3JkZXJXaWR0aDogMixcclxuICAgd2lkdGhCdXR0b246IDUwXHJcbiAgICwgaGVpZ2h0QnV0dG9uOiAyMCxcclxuICAgYm9yZGVyV2lkdGhCdXR0b246IDEsXHJcbiAgIHJhZGl1czogNCxcclxuICAgbWluV2lkdGg6IDEwMCxcclxuICAgeE9mZnNldDogMTIwLFxyXG4gICB4T2Zmc2V0QnV0dG9uOiAyMCxcclxuICAgcGFkZGluZ0J1dHRvbjogMSxcclxuICAgZHVyYXRpb246IDFcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnUge1xyXG4gICBwdWJsaWMgdHJpZ2dlclR5cGVWaXNpYmxlOiBzdHJpbmcgPSBcIm1vdXNlb3ZlclwiO1xyXG4gICBwdWJsaWMgdHJpZ2dlclR5cGVJbnZpc2libGU6IHN0cmluZyA9IFwibW91c2VsZWF2ZVwiO1xyXG4gICBwdWJsaWMgY29tcGxleFRyaWdnZXJJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBwdWJsaWMgY29tcGxleFRyaWdnZXJPdXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcHVibGljIGNvbXBsZXhUcmlnZ2VySW5Db25kaXRpb246IGFueTtcclxuICAgcHVibGljIGNvbXBsZXhUcmlnZ2VyT3V0Q29uZGl0aW9uOiBhbnk7XHJcblxyXG4gICBwdWJsaWMgY29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCIuY29udGV4dE1lbnVcIjtcclxuICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbkZvcm1bXSA9IFtdO1xyXG5cclxuXHJcbiAgIHNldENvbXBsZXhUcmlnZ2VySW4oY29tcGxleDogYW55KSB7XHJcbiAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbkNvbmRpdGlvbiA9IGNvbXBsZXg7XHJcbiAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJJbiA9IHRydWU7XHJcbiAgIH1cclxuICAgc2V0Q29tcGxleFRyaWdnZXJPdXQoY29tcGxleDogYW55KSB7XHJcbiAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24gPSBjb21wbGV4O1xyXG4gICAgICB0aGlzLmNvbXBsZXhUcmlnZ2VyT3V0ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgYWRkQWN0aW9uKGFjdGlvbjogQWN0aW9uRm9ybSkge1xyXG4gICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICB9XHJcbiAgIGFkZEFjdGlvbnMoYWN0aW9uczogQWN0aW9uRm9ybVtdKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKC4uLmFjdGlvbnMpO1xyXG4gICB9XHJcblxyXG4gICBkZWZhdWx0QnVpbGRJdGVtKGl0ZW06IGFueSwgb3B0aW9uczogQ29udGV4dE1lbnVVaU9wdGlvbnMpIHtcclxuICAgICAgbGV0IHRpbWVvdXQ6IGFueSA9IG51bGw7XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+aXRlbSkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZTogRXZlbnQpID0+IHsgLy9jb25zb2xlLmxvZyhcIm1vdXNlIG92ZXJcIik7XHJcblxyXG4gICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHRoaXMuYnVpbGRDb250ZXh0TWVudVdoZW5WaXNpYmxlKGl0ZW0sIHsgY2xpZW50WDogaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54LCBjbGllbnRZOiBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgfSwgb3B0aW9ucyk7IH0uYmluZCh0aGlzKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAsIDEwMDApO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGU6IEV2ZW50KSA9PiB7IC8vY29uc29sZS5sb2coXCJtb3VzZSBvdmVyXCIpO1xyXG5cclxuICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgIH1cclxuXHJcbiAgIGRlZmF1bHRCdWlsZChvcHRpb25zOiBDb250ZXh0TWVudVVpT3B0aW9ucyA9IHtcclxuICAgICAgY29sb3JCOiBcIiM1NEM1NzFcIiwgaGVpZ2h0OiA0MCwgYm9yZGVyV2lkdGg6IDIsIHdpZHRoQnV0dG9uOiA1MFxyXG4gICAgICAsIGhlaWdodEJ1dHRvbjogMjAsIGJvcmRlcldpZHRoQnV0dG9uOiAxLCByYWRpdXM6IDQsXHJcbiAgICAgIG1pbldpZHRoOiAxMDAsIHhPZmZzZXQ6IDEyMCwgeE9mZnNldEJ1dHRvbjogMjAsIHBhZGRpbmdCdXR0b246IDEsIGR1cmF0aW9uOiAxXHJcbiAgIH0sIHpJbmRleCA9IDEwMDApIHtcclxuICAgICAgZm9yIChsZXQgaXRlbSBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKSkpIHtcclxuICAgICAgICAgdGhpcy5kZWZhdWx0QnVpbGRJdGVtKGl0ZW0sIG9wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpdGVtc09ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoYXN5bmMgKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgQXJyYXkuZnJvbShtdXRhdGlvbi5hZGRlZE5vZGVzKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKCg8SFRNTEVsZW1lbnQ+bm9kZSkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXRlbVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0QnVpbGRJdGVtKG5vZGUsIG9wdGlvbnMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgaXRlbXNPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtcy1pbm5lclwiKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICBidWlsZENvbnRleHRNZW51V2hlblZpc2libGUoaXRlbTogYW55LCBlOiBhbnksIG9wdGlvbnM6IENvbnRleHRNZW51VWlPcHRpb25zID0ge1xyXG4gICAgICBjb2xvckI6IFwiIzU0QzU3MVwiLCBoZWlnaHQ6IDQwLCBib3JkZXJXaWR0aDogMiwgd2lkdGhCdXR0b246IDUwXHJcbiAgICAgICwgaGVpZ2h0QnV0dG9uOiAyMCwgYm9yZGVyV2lkdGhCdXR0b246IDEsIHJhZGl1czogNCxcclxuICAgICAgbWluV2lkdGg6IDEwMCwgeE9mZnNldDogMTIwLCB4T2Zmc2V0QnV0dG9uOiAyMCwgcGFkZGluZ0J1dHRvbjogMSwgZHVyYXRpb246IDFcclxuICAgfSwgekluZGV4ID0gMTAwMCkge1xyXG5cclxuXHJcblxyXG4gICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcblxyXG4gICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgIGxldCBjb25NZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250ZXh0TWVudVF1ZXJ5KTtcclxuXHJcbiAgICAgICAgIGlmIChjb25NZW51ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbk1lbnUuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbnRleHRNZW51UXVlcnkuc2xpY2UoMSkpO1xyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29uTWVudSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbk1lbnUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XHJcbiAgICAgICAgICg8SFRNTEVsZW1lbnQ+Y29uTWVudSkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS56SW5kZXggPSB6SW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgLy8gKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLm1pbldpZHRoID0gb3B0aW9ucy5taW5XaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS50b3AgPSBlLmNsaWVudFkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIG9wdGlvbnMueE9mZnNldCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5ib3JkZXIgPSBvcHRpb25zLmJvcmRlcldpZHRoLnRvU3RyaW5nKCkgKyBcInB4IHNvbGlkIFwiICsgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS10ZXh0LWNvbG9yXCIpLnRyaW0oKTtcclxuICAgICAgICAgKDxIVE1MRWxlbWVudD5jb25NZW51KS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBvcHRpb25zLnJhZGl1cy50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAoPEhUTUxFbGVtZW50PmNvbk1lbnUpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tYmFja2dyb3VuZC1jb2xvcilcIjtcclxuXHJcblxyXG4gICAgICAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgbGV0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24udHlwZSA9PSBBY3Rpb25UeXBlLmNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgICAgIGxldCBhY3Rpb25DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICBhY3Rpb25DaGVja2JveC5pZCA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgYWN0aW9uQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgICAgbGFiZWwuaHRtbEZvciA9IFwiYWN0aW9uSWRcIiArIGk7XHJcbiAgICAgICAgICAgICAgIHRleHRTcGFuLmh0bWxGb3IgPSBcImFjdGlvbklkXCIgKyBpO1xyXG4gICAgICAgICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgICAgbGFiZWwuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoQnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0QnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5wYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nQnV0dG9uLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLm1hcmdpblRvcCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5tYXJnaW5SaWdodCA9ICgob3B0aW9ucy5oZWlnaHQgLSBvcHRpb25zLmhlaWdodEJ1dHRvbikgLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCIgXCI7XHJcbiAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gb3B0aW9ucy5yYWRpdXMudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHRCdXR0b24gLSAyICogb3B0aW9ucy5wYWRkaW5nQnV0dG9uKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICBzcGFuLnN0eWxlLndpZHRoID0gKG9wdGlvbnMud2lkdGhCdXR0b24gLyAyKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2Zvcm0gPSBvcHRpb25zLmR1cmF0aW9uLnRvU3RyaW5nKCkgKyBcInNcIjtcclxuICAgICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICAgIGxldCBpc09uID0gYWN0aW9uLmluaXRIYW5kbGVyID8gYWN0aW9uLmluaXRIYW5kbGVyKGl0ZW0pIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmNoZWNrZWQgPSBpc09uO1xyXG5cclxuICAgICAgICAgICAgICAgaWYgKGlzT24pIHtcclxuICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT24gPz8gXCJcIiArIGFjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT2ZmID8/IGFjdGlvbi5lbW9qaU9uID8/IFwiXCIgKyBhY3Rpb24udGV4dE9mZiA/PyBhY3Rpb24udGV4dE9uO1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIGFjdGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb24uaGFuZGxlcihpdGVtLCBlLCBhY3Rpb25DaGVja2JveC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS50cmFuc2xhdGUgPSBvcHRpb25zLnhPZmZzZXRCdXR0b24udG9TdHJpbmcoKSArIFwicHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnN0eWxlLmNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0eWxlLmJvcmRlckNvbG9yID0gb3B0aW9ucy5jb2xvckI7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT24gPz8gXCJcIiArIGFjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUudHJhbnNsYXRlID0gXCIwcHggMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjdXJyZW50Q29sb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4uc3R5bGUuY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSBhY3Rpb24uZW1vamlPZmYgPz8gYWN0aW9uLmVtb2ppT24gPz8gXCJcIiArIGFjdGlvbi50ZXh0T2ZmID8/IGFjdGlvbi50ZXh0T247XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAvLyAgY2hlY2tab21iaWUuc3R5bGUsZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25DaGVja2JveCk7XHJcbiAgICAgICAgICAgICAgIGNvbk1lbnUuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICBjb25NZW51LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGxldCBhY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gYWN0aW9uLmVtb2ppT24gPz8gXCJcIiArIGFjdGlvbi50ZXh0T247XHJcbiAgICAgICAgICAgICAgIGlmIChhY3Rpb24uaW5pdEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uLmluaXRIYW5kbGVyKGNvbk1lbnUpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCI7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5jb2xvciA9IFwidmFyKC0tdGV4dC1jb2xvcilcIjtcclxuICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuY29sb3JCO1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSAoYWN0aW9uLmVtb2ppT2ZmID8/IGFjdGlvbi5lbW9qaU9uID8/IFwiXCIpICsgYWN0aW9uLnRleHRPZmYgPz8gYWN0aW9uLnRleHRPbjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWJhY2tncm91bmQtY29sb3IpXCJcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gKGFjdGlvbi5lbW9qaU9uID8/IFwiXCIpICsgYWN0aW9uLnRleHRPbjtcclxuICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICBhY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGlvbi5oYW5kbGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uTWVudS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgaWYgKHRoaXMuY29tcGxleFRyaWdnZXJPdXQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uTWVudS5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJpZ2dlclR5cGVJbnZpc2libGUsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250ZXh0TWVudVF1ZXJ5KS5mb3JFYWNoKChlbGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50PmVsZW0pLnN0eWxlLm9wYWNpdHkgPSBcIjBcIik7XHJcblxyXG4gICAgICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxleFRyaWdnZXJPdXRDb25kaXRpb24oY29uTWVudSk7XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJcclxuZXhwb3J0IGludGVyZmFjZSBNZW51T3B0aW9uXHJcbntcclxuIFxyXG4gICAgb3B0aW9uVGV4dDpzdHJpbmc7XHJcbiAgICBvcHRpb25FbW9qaT86c3RyaW5nO1xyXG4gICAgaGFuZGxlcjphbnk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uXHJcbntcclxuIHB1YmxpYyBwYXJlbnRRdWVyeTpzdHJpbmc9XCIuc2V0dGluZ3MtY29udGVudFwiO1xyXG4gbWVudVRleHQ6c3RyaW5nPVwiQ2xpY2sgT24gTWVcIjtcclxuIG1lbnVFbW9qaTpzdHJpbmc9XCJcIjtcclxuIG9wdGlvbnM6TWVudU9wdGlvbltdPVtdO1xyXG4gaGlkZGVuT2JqZWN0OmJvb2xlYW49dHJ1ZTtcclxuIHB1YmxpYyBidXR0b25DbGFzczpzdHJpbmc9XCJzZXR0aW5nXCI7XHJcbiBwdWJsaWMgaW5pdEFjdGlvbjooKT0+bnVtYmVyPSgpPT57cmV0dXJuIDA7fTtcclxuIFxyXG5zZXRPcHRpb25zKG9wdGlvbnM6TWVudU9wdGlvbltdKVxyXG57XHJcbiB0aGlzLm9wdGlvbnM9b3B0aW9ucztcclxufVxyXG5hZGRPcHRpb24ob3B0aW9uOk1lbnVPcHRpb24pXHJcbntcclxuIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbik7XHJcbn1cclxuXHJcblxyXG4gY29uc3RydWN0b3IobWVudVRleHQ6YW55LG1lbnVFbW9qaT86YW55LGluaXRBY3Rpb24/OmFueSxvcHRpb25zOk1lbnVPcHRpb25bXT1bXSlcclxuIHsgXHJcbiAgICB0aGlzLm1lbnVUZXh0PW1lbnVUZXh0O1xyXG4gICAgdGhpcy5pbml0QWN0aW9uPWluaXRBY3Rpb247XHJcbiAgICB0aGlzLm1lbnVFbW9qaT1tZW51RW1vamk7XHJcbiAgICB0aGlzLm9wdGlvbnMucHVzaCguLi5vcHRpb25zKTtcclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbmJ1aWxkQnV0dG9uKG90aGVyUGFyZW50PzpzdHJpbmcpXHJcbntcclxuIGxldCBwYXJlbnREaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdGhlclBhcmVudD8/dGhpcy5wYXJlbnRRdWVyeSk7XHJcbiBsZXQgYnV0dG9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBidXR0b25EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uXCIpO1xyXG4gYnV0dG9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubWVudVRleHQrXCIgXCIrKHRoaXMubWVudUVtb2ppPT1udWxsP1wiXCI6dGhpcy5tZW51RW1vamkpKSk7XHJcbiBidXR0b25EaXYuc3R5bGUuaGVpZ2h0PVwiZml0LWNvbnRlbnRcIjtcclxuXHJcblxyXG4gbGV0IHNlbGVjdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gbGV0IHNlbGVjdGVkUD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuIGxldCBvcHRpb25zRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvbi1vcHRpb25zXCIpO1xyXG4gb3B0aW9uc0Rpdi5zdHlsZS5vdmVyZmxvd1k9XCJzY3JvbGxcIjtcclxuIG9wdGlvbnNEaXYuc3R5bGUuaGVpZ2h0PVwiMTAwcHhcIjtcclxuXHJcblxyXG4gYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQgKHRoaXMuYnV0dG9uQ2xhc3MpO1xyXG5cclxuXHJcbiBsZXQgY3NzID0gYFxyXG4gLm1lbnUtYnV0dG9uLW9wdGlvbjpob3ZlclxyXG4gICAgIHtcclxuICAgICAgIGJhY2tncm91bmQ6Z3JheTtcclxuXHJcbiAgICAgfVxyXG5cclxuLm1lbnUtYnV0dG9uXHJcbntcclxuXHJcbnNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbn1cclxuLm1lbnUtYnV0dG9uLW9wdGlvbnMge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi99XHJcbiAubWVudS1idXR0b24tb3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXIgeyAvKiBXZWJLaXQgKi9cclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO31cclxuYFxyXG5cclxuXHJcbmxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcy50cmltKCkpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblxyXG5cclxubGV0IGluZGV4T3B0aW9uPTA7XHJcbmlmKHRoaXMuaW5pdEFjdGlvbilcclxuICBpbmRleE9wdGlvbj10aGlzLmluaXRBY3Rpb24oKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiaW5kZXhPcHRpb246XCIsaW5kZXhPcHRpb24sXCJvcHRpb25zOlwiLHRoaXMub3B0aW9ucyk7XHJcbnNlbGVjdGVkUC50ZXh0Q29udGVudD10aGlzLm9wdGlvbnNbaW5kZXhPcHRpb25dLm9wdGlvblRleHQrXCIgXCIrKHRoaXMub3B0aW9uc1tpbmRleE9wdGlvbl0ub3B0aW9uRW1vamk9PW51bGw/XCJcIjp0aGlzLm9wdGlvbnNbaW5kZXhPcHRpb25dLm9wdGlvbkVtb2ppKTtcclxuXHJcbiB0aGlzLm9wdGlvbnMuZm9yRWFjaCggKG9wdGlvbik9PntcclxuXHJcblxyXG4gIGxldCBvcHRpb25EaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBvcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnV0dG9uLW9wdGlvblwiKTtcclxuICBvcHRpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob3B0aW9uLm9wdGlvblRleHQrXCIgXCIrKG9wdGlvbi5vcHRpb25FbW9qaT09bnVsbD9cIlwiOm9wdGlvbi5vcHRpb25FbW9qaSkpKTtcclxuICBvcHRpb25EaXYuc3R5bGUud2hpdGVTcGFjZT1cIm5vd3JhcFwiO1xyXG4gIG9wdGlvbkRpdi5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO1xyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCgpPT57b3B0aW9uRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImdyYXlcIn0pO1xyXG4gIG9wdGlvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCgpPT57b3B0aW9uRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInZhcigtLWJhY2tncm91bmQtY29sb3IpXCJ9KTtcclxuXHJcbiAgb3B0aW9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgb3B0aW9uLmhhbmRsZXIoKTtcclxuICBzZWxlY3RlZFAudGV4dENvbnRlbnQ9b3B0aW9uLm9wdGlvblRleHQrXCIgXCIrKG9wdGlvbi5vcHRpb25FbW9qaT09bnVsbD9cIlwiOm9wdGlvbi5vcHRpb25FbW9qaSk7XHJcbiAgICA7fSk7XHJcblxyXG4gIG9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KTtcclxuXHJcblxyXG4gfSk7XHJcblxyXG4gIHNlbGVjdGVkUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gIHNlbGVjdGlvbkRpdi5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTtcclxuICAgICAgdGhpcy5oaWRkZW5PYmplY3Q9dHJ1ZTtcclxuXHJcblxyXG5cclxuICB9LmJpbmQodGhpcyksZmFsc2UpO1xyXG5cclxuICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRQKTtcclxuICBzZWxlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpKTtcclxuXHJcblxyXG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgaWYodGhpcy5oaWRkZW5PYmplY3Q9PXRydWUpXHJcbiAgICB7ICAgIGNvbnNvbGUubG9nKFwiZ290IGhlcmVcIik7XHJcblxyXG4gICAgICAgIGlmKCFidXR0b25EaXYuY29udGFpbnMoc2VsZWN0aW9uRGl2KSlcclxuICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzZWxlY3Rpb25EaXYpO1xyXG5cclxuICAgICAgIHRoaXMuaGlkZGVuT2JqZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgfWVsc2VcclxuICAgICAgeyAgIGlmKHNlbGVjdGlvbkRpdi5jb250YWlucyhvcHRpb25zRGl2KSlcclxuICAgICAgICAgICAgICBzZWxlY3Rpb25EaXYucmVtb3ZlQ2hpbGQob3B0aW9uc0Rpdik7XHJcblxyXG4gICAgICAgICBpZihidXR0b25EaXYuY29udGFpbnMoc2VsZWN0aW9uRGl2KSlcclxuICAgICAgICAgICAgYnV0dG9uRGl2LnJlbW92ZUNoaWxkKHNlbGVjdGlvbkRpdik7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5PYmplY3QgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG5cclxuICB9LmJpbmQodGhpcyksZmFsc2UpO1xyXG5cclxuXHJcbiBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcclxuXHJcbnJldHVybiBidXR0b25EaXY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlQnV0dG9uT3B0aW9uc1xyXG57XHJcbmhhbmRsZXI/OihjaGVja2VkOmJvb2xlYW4pPT52b2lkO1xyXG5vcHRpb25hbFRleHQ/OnN0cmluZztcclxuY29sb3I/OnN0cmluZztcclxucGFyZW50Pzphbnk7XHJcbnNpemU/Om51bWJlcjtcclxuaW5uZXJSYWRpdXM/OmFueTtcclxub3V0ZXJSYWRpdXM/OmFueTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUJ1dHRvblxyXG57XHJcblxyXG5wdWJsaWMgaGFuZGxlcjooY2hlY2tlZDpib29sZWFuLGFyZ3M6YW55KT0+dm9pZDtcclxucHVibGljIGNvbG9yOnN0cmluZz1cIiM3MGI1NjVcIjtcclxucHVibGljIG9wdGlvbmFsVGV4dDpzdHJpbmc9XCJcIjtcclxucHVibGljIHNpemU6bnVtYmVyPTIyO1xyXG5wdWJsaWMgaW5uZXJSYWRpdXM6c3RyaW5nPVwiNTAlXCI7XHJcbnB1YmxpYyBvdXRlclJhZGl1czpzdHJpbmc9XCIxNXB4XCI7XHJcblxyXG5cclxuXHJcblxyXG5idWlsZEJ1dHRvbihvcHRpb25zOlRvZ2dsZUJ1dHRvbk9wdGlvbnM9e30pXHJcbntcclxuXHJcbiBpZihvcHRpb25zLmhhbmRsZXIhPW51bGwpXHJcbiAgdGhpcy5oYW5kbGVyPW9wdGlvbnMuaGFuZGxlcjtcclxuXHJcbiAgICBpZihvcHRpb25zLmNvbG9yIT1udWxsKVxyXG57XHJcbiAgICB0aGlzLmNvbG9yPW9wdGlvbnMuY29sb3I7XHJcbn1cclxuaWYob3B0aW9ucy5zaXplIT1udWxsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2l6ZT1vcHRpb25zLnNpemU7XHJcbiAgICB9XHJcbiBpZihvcHRpb25zLmlubmVyUmFkaXVzIT1udWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclJhZGl1cz1vcHRpb25zLmlubmVyUmFkaXVzO1xyXG4gICAgICAgIH1cclxuIGlmKG9wdGlvbnMub3V0ZXJSYWRpdXMhPW51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyUmFkaXVzPW9wdGlvbnMub3V0ZXJSYWRpdXM7XHJcbiAgfVxyXG4gXHJcbiBsZXQgY3NzPVxyXG4gIGBcclxuLnNldHRpbmctYmxvY2sge1xyXG5cdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiA3cHg7XHJcblx0Zm9udC1zaXplOiAxNi40cHg7XHJcbn1cclxuXHJcbi5zZXR0aW5nLWJsb2NrIGgxIHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuXHRsaW5lLWhlaWdodDogMzVweDtcclxuXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2V0dGluZy1ibG9jayBsYWJlbFtmb3IqPVwiaW5wdXRcIl0ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1yaWdodDogN3B4O1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogJHt0aGlzLnNpemUrMjh9cHg7XHJcblx0aGVpZ2h0OiAke3RoaXMuc2l6ZSs4fXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jaGVja2JveC1zbGlkZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxuXHRib3JkZXItcmFkaXVzOiAke3RoaXMub3V0ZXJSYWRpdXN9cHg7XHJcblx0ei1pbmRleDogMjAwMDtcclxufVxyXG5cclxuLmNoZWNrYm94LXNsaWRlcjpiZWZvcmUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogJHt0aGlzLnNpemV9cHg7XHJcblx0d2lkdGg6ICR7dGhpcy5zaXplfXB4O1xyXG5cdGxlZnQ6IDRweDtcclxuXHRib3R0b206IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcblx0dHJhbnNpdGlvbjogMC40cztcclxuXHRib3JkZXItcmFkaXVzOiAke3RoaXMuaW5uZXJSYWRpdXN9O1xyXG5cdHotaW5kZXg6IDE5OTk7XHJcbn1cclxuXHJcbi5kYXJrLW1vZGUgLmNoZWNrYm94LXNsaWRlcjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LXNsaWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLmNvbG9yfTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1zbGlkZXI6YmVmb3JlIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTlweCk7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG5gO1xyXG5sZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcblxyXG5cdCAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRibG9jay5jbGFzc0xpc3QuYWRkKFwic2V0dGluZy1ibG9ja1wiKTtcclxuXHRcdFx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcblx0XHRcdGlmKG9wdGlvbnMub3B0aW9uYWxUZXh0IT1udWxsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob3B0aW9ucy5vcHRpb25hbFRleHQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGJsb2NrLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cdFxyXG5cdFx0XHRcdGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1jb250YWluZXJcIik7XHJcblx0XHRcdFx0Y29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblx0XHRcdFx0Y2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHRcdFx0XHRjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMuaGFuZGxlcihjaGVja2JveC5jaGVja2VkKTtcclxuXHRcdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0XHRcdGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRcdHNsaWRlci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3gtc2xpZGVyXCIpO1xyXG5cdFx0XHRcdGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XHJcblx0XHRcdFx0bmFtZS5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgIGlmKG9wdGlvbnMucGFyZW50KVxyXG5cdFx0XHRcdG9wdGlvbnMucGFyZW50LmFwcGVuZENoaWxkKGJsb2NrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcclxuXHJcblx0XHRcdH1cclxuXHRcdFxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IHtDb250ZXh0TWVudSxBY3Rpb25UeXBlLEFjdGlvbkZvcm19IGZyb20gXCIuL0NvbnRleHRNZW51XCJcclxuaW1wb3J0IHtNZW51QnV0dG9uLE1lbnVPcHRpb259IGZyb20gXCIuL01lbnVCdXR0b25cIlxyXG5pbXBvcnQge0NvbG9yUGlja2VyfSBmcm9tIFwiLi9Db2xvclBpY2tlclwiXHJcbmltcG9ydCB7VG9nZ2xlQnV0dG9uLFRvZ2dsZUJ1dHRvbk9wdGlvbnN9IGZyb20gXCIuL1RvZ2dsZUJ1dHRvblwiO1xyXG5leHBvcnQgY2xhc3MgVUkge1xyXG5cclxuICAgcHVibGljIGNvbnRleHRNZW51czpDb250ZXh0TWVudVtdPVtuZXcgQ29udGV4dE1lbnUoKV07XHJcbiAgIHB1YmxpYyBjb250ZXh0TWVudTpDb250ZXh0TWVudT10aGlzLmNvbnRleHRNZW51c1swXTtcclxuICAgcHVibGljIHRvZ2dsZUJ1dHRvbnM6VG9nZ2xlQnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBtZW51QnV0dG9uczpNZW51QnV0dG9uW109W107XHJcbiAgIHB1YmxpYyBjb2xvclBpY2tlcjpDb2xvclBpY2tlcj1uZXcgQ29sb3JQaWNrZXIoKTtcclxuICAgcHVibGljIGRlZmF1bHRTZXR0aW5nc0J1dHRvblF1ZXJ5OiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBkZWZhdWx0Q29udGV4dE1lbnVRdWVyeTogc3RyaW5nID0gXCJcIjtcclxuICAgcHVibGljIGRlZmF1bHRNb2RhbFF1ZXJ5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICBwdWJsaWMgaW5zdGFuY2VzQ2xhc3M6IHN0cmluZyA9IFwiaW5zdGFuY2VzXCI7XHJcbiAgIHB1YmxpYyBpdGVtc0NsYXNzOiBzdHJpbmcgPSBcIml0ZW1zLWlubmVyXCI7XHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRNb2RhbFF1ZXJ5ID0gXCIubW9kYWw6bnRoLWNoaWxkKDMpXCI7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzQnV0dG9uUXVlcnkgPSBcIi5zZXR0aW5ncy1jb250ZW50XCI7XHJcbiAgIH1cclxuXHJcbiAgbWFrZVRvZ2dsZUJ1dHRvbihvcHRpb25zOlRvZ2dsZUJ1dHRvbk9wdGlvbnMpXHJcbiAge1xyXG4gICBsZXQgdG9nZ2xlQnV0dG9uPW5ldyBUb2dnbGVCdXR0b24oKTtcclxuICAgdGhpcy50b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlQnV0dG9uKTtcclxuICAgcmV0dXJuIHRvZ2dsZUJ1dHRvbi5idWlsZEJ1dHRvbihvcHRpb25zKVxyXG4gIH1cclxuICBpbmplY3RDU1MoY3NzOnN0cmluZylcclxue1xyXG4gICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MudHJpbSgpKSk7XHJcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4gIGFkZEFuZEJ1aWxkTWVudUJ1dHRvbihtZW51VGV4dDphbnksbWVudUVtb2ppPzphbnksaW5pdEFjdGlvbj86YW55LG9wdGlvbnM6TWVudU9wdGlvbltdPVtdKVxyXG4gIHsgICAgIGxldCBtQnV0dG9uPW5ldyBNZW51QnV0dG9uKG1lbnVUZXh0LG1lbnVFbW9qaSxpbml0QWN0aW9uLG9wdGlvbnMpXHJcbiAgICB0aGlzLm1lbnVCdXR0b25zLnB1c2gobUJ1dHRvbik7XHJcbiAgICByZXR1cm4gIG1CdXR0b24uYnVpbGRCdXR0b24oKTtcclxuXHJcbiAgfVxyXG5cclxuICAgb25PYnNlcnZpbmdJbnN0YW5jZShhcHBseU9uT25lRWxlbWVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ub2RlKS5pZCAhPSBcImluc3RhbmNlLTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICBhcHBseU9uT25lRWxlbWVudChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpbnN0YW5jZU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluc3RhbmNlc0NsYXNzKVswXSwge1xyXG4gICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcblxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICB9XHJcbiAgIG9uT2JzZXJ2aW5nSXRlbXMoYXBwbHlPbk9uZUVsZW1lbnQ6IGFueSkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYXBwbHlPbk9uZUVsZW1lbnQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnN0YW5jZXNDbGFzcylbMF0sIHtcclxuICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxufTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIEdNIGZyb20gXCJncmVhc2Vtb25rZXlcIjtcclxuLy9zb3VyY2UgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB1bnNhZmVXaW5kb3dcclxuZXhwb3J0IGNsYXNzIGRhdGFcclxue1xyXG4gICBwdWJsaWMgIHNvdXJjZTphbnk9bnVsbDtcclxuICAgcHVibGljICBleHBGOmFueT1udWxsO1xyXG5cclxuXHJcblxyXG4gIC8vdVc9dW5zYWZlV2luZG93IG11c3QgYmUgZG9uZSBmcm9tIHVzZXJzY3JpcHRcclxuICAvL2V4cEY9ZXhwb3J0RnVuY3Rpb25cclxuXHJcbnB1YmxpYyBhZGREYXRhU291cmNlKGV4cEY6YW55LHVXOmFueT1zZWxmKVxyXG57IFxyXG4gICB0aGlzLnNvdXJjZT11Vy4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXVxyXG4gICB0aGlzLmV4cEY9ZXhwRjtcclxuXHJcbn1cclxuXHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50cygpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5zb3VyY2UuX2RhdGEuZWxlbWVudHM7XHJcbiAgfVxyXG4gICAgZ2V0SW5zdGFuY2VzKClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLnNvdXJjZS5fZGF0YS5pbnN0YW5jZXM7XHJcbiAgfVxyXG4gICAgIG9uU29ydGluZyhtZXRob2ROYW1lOnN0cmluZyxuZXdTdmc6c3RyaW5nLGFkZFNvcnRpbmdNZXRob2Q6KHg6YW55LHk6YW55KT0+YW55PXg9PngsYWRkU3R5bGVDaGFuZ2VzPzphbnkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyO1xyXG5cclxuXHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc29ydGVkRWxlbWVudHMuZ2V0dGVyPXRoaXMuZXhwRigoKSA9PiB7XHJcblxyXG4gICBpZiAodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgIHtcclxuICAgICAgbGV0IHByZXZpb3VzPVsuLi5iZWZvcmUoKV07XHJcbiAgICAgIHJldHVybiBhZGRTb3J0aW5nTWV0aG9kKHByZXZpb3VzLHRoaXMuZ2V0RWxlbWVudHMoKSk7XHJcbiAgICAgfWVsc2VcclxuICAgICB7XHJcbiAgICAgICByZXR1cm4gYmVmb3JlKCk7XHJcblxyXG4gICAgIH1cclxuXHJcbiAgfSx1bnNhZmVXaW5kb3cpO1xyXG4gIFxyXG50aGlzLnNvdXJjZS4kbnV4dC4kcm9vdC4kY2hpbGRyZW5bMl0uJGNoaWxkcmVuWzBdLiRjaGlsZHJlblswXS5zb3J0cy5wdXNoKG1ldGhvZE5hbWUpO1xyXG5jb25zdCBzb3J0QnV0dG9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgIFxyXG5cclxuICAgICAgICAgaWYodGhpcy5zb3VyY2UuJG51eHQuJHJvb3QuJGNoaWxkcmVuWzJdLiRjaGlsZHJlblswXS4kY2hpbGRyZW5bMF0uX2RhdGEuc29ydEJ5ID09PSBtZXRob2ROYW1lKVxyXG4gICAgICAgICAgIHsgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICBpZiggKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjLnRyaW0oKT09XCJodHRwczovL25lYWwuZnVuL2luZmluaXRlLWNyYWZ0L1wiK21ldGhvZE5hbWUrXCIuc3ZnXCIpXHJcbiAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PmltZykuc3JjPW5ld1N2ZztcclxuICAgICAgICAgICAgICAgICBpZihhZGRTdHlsZUNoYW5nZXMhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC8vaW1nLnN0eWxlLmZpbHRlcj1cIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYWRkU3R5bGVDaGFuZ2VzKGltZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgICAgbGV0IGltZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItc29ydCA+IGltZ1wiKTtcclxuICAgICAgIGNvbnNvbGUubG9nKGltZyxpbWcudGV4dENvbnRlbnQpXHJcbiAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcclxuICAgICAgIHNvcnRCdXR0b25PYnNlcnZlci5vYnNlcnZlKGltZyxjb25maWcpO1xyXG5cclxuXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gICAgICBvbkZpbHRlcmluZyhhZGRGaWx0ZXJNZXRob2RPblF1ZXJ5Oih4OmFueSx5OmFueSk9PmFueT0oeDphbnkseTphbnkpPT55KCkpXHJcbiAge1xyXG4gIGxldCBiZWZvcmU9dGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI7XHJcbiAgdGhpcy5zb3VyY2UuX2NvbXB1dGVkV2F0Y2hlcnMuc2VhcmNoUmVzdWx0cy5nZXR0ZXI9dGhpcy5leHBGKCgpID0+IHtcclxuICBsZXQgcXVlcnk9IHRoaXMuc291cmNlLnNlYXJjaFF1ZXJ5XHJcbiBcclxuIFxyXG4gXHJcbiAgcmV0dXJuIGFkZEZpbHRlck1ldGhvZE9uUXVlcnkocXVlcnksYmVmb3JlKTtcclxuICBcclxuICBcclxuICB9LHVuc2FmZVdpbmRvdykgO1xyXG4gIH1cclxuICBcclxuICBcclxuYWRkSW5Ub29sVGlwc0FzeW5jKGNhbGxiYWNrOih0ZXh0OnN0cmluZyxlbW9qaTpzdHJpbmcpPT4gUHJvbWlzZTxzdHJpbmc+KVxyXG57ICAgIFxyXG4gIFxyXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYC5pdGVtLmluc3RhbmNlOjpiZWZvcmUge3RleHQtYWxpZ246IGNlbnRlcjt9YC50cmltKCkpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoIGFzeW5jIChtdXRhdGlvbnMpID0+IHtcclxuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMClcclxuICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKXtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgaWYoKDxIVE1MRWxlbWVudD5ub2RlKS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnN0YW5jZVwiKSlcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdGV4dD0gKDxIVE1MRWxlbWVudD5ub2RlKS5nZXRBdHRyaWJ1dGUoXCJ0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlVGV4dD1cIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGlzdFwiLG5vZGUuY2hpbGROb2RlcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgbiBvZiBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+bm9kZSkuY2hpbGROb2RlcykpXHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYobi5ub2RlVHlwZT09MyAmJiAoPFRleHQ+bikubGVuZ3RoIT0wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm46XCIsbixcIm5vZGUtdHlwZTpcIixuLm5vZGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVGV4dCs9bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgbGV0ICBlbW9qaT0oPEhUTUxFbGVtZW50Pm5vZGUpLnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdGFuY2UtZW1vamlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgIG5vZGVUZXh0PWF3YWl0IGNhbGxiYWNrKG5vZGVUZXh0LGVtb2ppLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYodGV4dD09bnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXRleHQrXCJcXG5cIitub2RlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+bm9kZSkuc2V0QXR0cmlidXRlKFwidG9vbHRpcFwiLHRleHQpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfX1cclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnN0YW5jZXNcIilbMF0sIHtcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWUgIDogdHJ1ZSxcclxuXHJcbn0pO1xyXG5cclxuXHJcbn1cclxuYWRkSW5Ub29sVGlwcyhjYWxsYmFjazoodGV4dDpzdHJpbmcsZW1vamk6c3RyaW5nKT0+IHN0cmluZylcclxue1xyXG5cclxuXHJcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgLml0ZW0uaW5zdGFuY2U6OmJlZm9yZSB7dGV4dC1hbGlnbjogY2VudGVyO31gLnRyaW0oKSkpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cclxuICBjb25zdCBpbnN0YW5jZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoIGFzeW5jIChtdXRhdGlvbnMpID0+IHtcclxuICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgaWYgKG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMClcclxuICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKG11dGF0aW9uLmFkZGVkTm9kZXMpKXtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgaWYoKDxIVE1MRWxlbWVudD5ub2RlKS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnN0YW5jZVwiKSlcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgdGV4dD0gKDxIVE1MRWxlbWVudD5ub2RlKS5nZXRBdHRyaWJ1dGUoXCJ0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlVGV4dD1cIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGlzdFwiLG5vZGUuY2hpbGROb2RlcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgbiBvZiBBcnJheS5mcm9tKCg8SFRNTEVsZW1lbnQ+bm9kZSkuY2hpbGROb2RlcykpXHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYobi5ub2RlVHlwZT09MyAmJiAoPFRleHQ+bikubGVuZ3RoIT0wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVGV4dCs9bi50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgbGV0ICBlbW9qaT0oPEhUTUxFbGVtZW50Pm5vZGUpLnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdGFuY2UtZW1vamlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKGVtb2ppKVxyXG4gICAgICAgICAgICAgICAgICAgICBub2RlVGV4dD1jYWxsYmFjayhub2RlVGV4dCxlbW9qaS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICBub2RlVGV4dD1jYWxsYmFjayhub2RlVGV4dCxcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRleHQ9PW51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD10ZXh0K1wiXFxuXCIrbm9kZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50Pm5vZGUpLnNldEF0dHJpYnV0ZShcInRvb2x0aXBcIix0ZXh0KTtcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFuY2VPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnN0YW5jZXNcIilbMF0sIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWUgIDogdHJ1ZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgIH1cclxuXHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyB1dGlsc1xyXG57XHJcblxyXG5cclxuICAgIHB1YmxpYyB1c2VyQWRkZWRNZXRob2RzOmFueVtdPVtdO1xyXG4gICAgcHVibGljIEV4cG9ydFNhdmVCdXR0b25RdWVyeTpzdHJpbmcgPVwiLnNldHRpbmdbZm9yPWltcG9ydC1zYXZlXSArIC5zZXR0aW5nXCI7XHJcbiAgICBwdWJsaWMgc2F2ZUZpbGVOYW1lOnN0cmluZz1cImluZmluaXRlY3JhZnQuanNvblwiO1xyXG5cclxuXHJcbiAgICBzYXZlU2F2ZUZpbGVPblBDKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVDbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcclxuICAgICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2sgPSAoKSA9PiB7SFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrID0gaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgY29uc3QgYm9keU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlICE9PSBcImNoaWxkTGlzdFwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvciA9IEFycmF5LmZyb20obXV0YXRpb24uYWRkZWROb2RlcykuZmluZCgobm9kZSkgPT57XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgKDxhbnk+bm9kZSkuZG93bmxvYWQgPT09IHRoaXMuc2F2ZUZpbGVOYW1lfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGFuY2hvcikgcmV0dXJuIGZldGNoKCg8SFRNTEFuY2hvckVsZW1lbnQ+YW5jaG9yKS5ocmVmKS50aGVuKHJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYm9keU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XHJcbiAgICAgICAgaGFuZGxlQ2xpY2suY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuRXhwb3J0U2F2ZUJ1dHRvblF1ZXJ5KSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHlPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHJlamVjdChcIlRpbWVkIG91dFwiKVxyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3RydWN0b3IoKVxyXG57XHJcblxyXG59XHJcbmFkZEZ1bmN0aW9uKG5hbWU6c3RyaW5nLGNhbGxiYWNrOmFueSlcclxue1xyXG4gICAgdGhpcy51c2VyQWRkZWRNZXRob2RzLnB1c2goe25hbWU6bmFtZSxoYW5kbGVyOmNhbGxiYWNrfSk7XHJcbn1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwibGV0IG1lc3NhZ2U6IHN0cmluZyA9ICdIZWxsbywgV29ybGQhJztcclxuY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbmltcG9ydCB7VUl9IGZyb20gIFwiLi9VSVwiXHJcbmltcG9ydCB7ZGF0YX0gZnJvbSAgXCIuL2RhdGFcIlxyXG5pbXBvcnQge3V0aWxzfSBmcm9tICBcIi4vdXRpbHNcIlxyXG5leHBvcnQgY2xhc3MgTWFpblxyXG57XHJcbiBwdWJsaWMgJHVpOlVJO1xyXG4gcHVibGljICRkYXRhOmRhdGE7XHJcbiBwdWJsaWMgJHV0aWxzOnV0aWxzO1xyXG4gY29uc3RydWN0b3IoKVxyXG4ge1xyXG4gIHRoaXMuJHVpPW5ldyBVSSgpO1xyXG4gIHRoaXMuJGRhdGE9bmV3IGRhdGEoKTtcclxuICB0aGlzLiR1dGlscz1uZXcgdXRpbHMoKTtcclxuIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBvYmplY3RTb3VyY2U6TWFpbj1uZXcgTWFpbigpOyBcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9