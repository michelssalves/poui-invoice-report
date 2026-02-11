import {
  resolveRuntimeEnvironment
} from "./chunk-GA3HLPZQ.js";
import {
  ANIMATION_MODULE_TYPE,
  AUTO_STYLE,
  ActivatedRoute,
  AnimationGroupPlayer,
  AnimationMetadataType,
  BrowserModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DatePipe,
  Directive,
  DomRendererFactory2,
  EMPTY,
  ElementRef,
  EventEmitter,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  HTTP_INTERCEPTORS,
  HostBinding,
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  I18N_CONFIG,
  Inject,
  Injectable,
  Injector,
  Input,
  IterableDiffers,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  NgZone,
  NoopAnimationPlayer,
  Observable,
  Output,
  PoBreadcrumbComponent,
  PoBreadcrumbModule,
  PoButtonComponent,
  PoButtonModule,
  PoCheckboxGroupComponent,
  PoComboComponent,
  PoComponentInjectorService,
  PoContainerComponent,
  PoContainerModule,
  PoDatepickerComponent,
  PoDialogModule,
  PoDialogService,
  PoDividerComponent,
  PoDividerModule,
  PoDynamicFieldType,
  PoDynamicFormComponent,
  PoDynamicModule,
  PoDynamicViewComponent,
  PoEmailComponent,
  PoFieldModule,
  PoGridComponent,
  PoGridModule,
  PoHttpRequestModule,
  PoI18nModule,
  PoI18nPipe,
  PoI18nService,
  PoIconComponent,
  PoIconModule,
  PoInfoComponent,
  PoInfoModule,
  PoInfoOrientation,
  PoInputComponent,
  PoLanguageModule,
  PoLanguageService,
  PoLoginComponent,
  PoLogoComponent,
  PoLogoModule,
  PoLookupComponent,
  PoMenuComponent,
  PoMenuModule,
  PoModalComponent,
  PoModalModule,
  PoModule,
  PoNotificationModule,
  PoNotificationService,
  PoNumberComponent,
  PoPageDefaultComponent,
  PoPageListComponent,
  PoPageModule,
  PoPasswordComponent,
  PoRadioGroupComponent,
  PoSelectComponent,
  PoStepperComponent,
  PoStepperModule,
  PoStepperOrientation,
  PoStepperStatus,
  PoSwitchComponent,
  PoTableColumnSortType,
  PoTableComponent,
  PoTableModule,
  PoTagComponent,
  PoTagModule,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  PoToasterOrientation,
  PoToolbarModule,
  PoTooltipDirective,
  PoTooltipModule,
  PoWidgetComponent,
  PoWidgetModule,
  ReactiveFormsModule,
  RendererFactory2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  RuntimeError,
  Subject,
  Subscription,
  TemplateRef,
  UntypedFormBuilder,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  catchError,
  concat,
  concatMap,
  delay,
  filter,
  finalize,
  from,
  importProvidersFrom,
  inject,
  map,
  merge,
  of,
  poLanguageDefault,
  poLocaleDefault,
  poLocales,
  poThemeDefaultActions,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  retry,
  sequence,
  setClassMetadata,
  style,
  switchMap,
  take,
  tap,
  throwError,
  withHashLocation,
  withInterceptorsFromDi,
  ɵNgNoValidate,
  ɵPRE_STYLE,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BH3N7IE2.js";

// node_modules/@angular/animations/fesm2022/browser.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay2, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay2);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay2 = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay2 = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay2 < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay: delay2,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay2) {
  return duration === 0 || delay2 === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay2, easing) {
  return {
    duration,
    delay: delay2,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay2, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay: delay2,
    totalTime: duration + delay2,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay2);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay2, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay2 = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay2);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay2 = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay2);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay2 = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay2 = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay2 && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay2) {
        innerContext.delayNextStep(delay2);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay2 = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay2 = maxTime - delay2;
        break;
      case "full":
        delay2 = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay2) {
      timeline.delayNextStep(delay2);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay2) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay2 != null ? delay2 : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay2) {
    if (delay2 > 0) {
      this.currentTimeline.delayNextStep(delay2);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay2) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay2);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay2;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay: delay2,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay2) {
      const newKeyframes = [];
      const totalTime = duration + delay2;
      const startingGap = delay2 / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay2 + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay2 = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay2, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay2, easing, previousPlayers = []) {
    const fill = delay2 == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay: delay2,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay2)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  { path: "", pathMatch: "full", redirectTo: "relatorio-rcap" },
  {
    path: "relatorio-rcap",
    loadComponent: () => import("./chunk-GLEF3FZ7.js").then((m) => m.RelatorioRcapComponent)
  }
];

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  intercept(req, next) {
    const runtimeEnvironment = resolveRuntimeEnvironment();
    if (!req.url.startsWith(runtimeEnvironment.apiUrl)) {
      return next.handle(req);
    }
    const basicAuth = btoa(`${runtimeEnvironment.auth.user}:${runtimeEnvironment.auth.password}`);
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/json",
        "x-erp-module": runtimeEnvironment.erpModule
      }
    });
    return next.handle(authReq);
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};

// src/app/app.config.ts
var i18nConfig = {
  default: {
    language: "pt-BR",
    context: "general",
    cache: true
  },
  contexts: {
    general: {
      "pt-BR": {
        hello: "Ol\xE1",
        welcome: "Bem-vindo"
      }
    }
  }
};
var appConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom([
      BrowserAnimationsModule,
      PoHttpRequestModule,
      PoModule
    ]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: I18N_CONFIG, useValue: i18nConfig },
    PoI18nService,
    // ✅ registra explicitamente o serviço
    { provide: "Window", useValue: window },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};

// src/app/app.component.service.ts
var AppComponentService = class _AppComponentService {
  http;
  url = "https://po-sample-api.onrender.com/v1/menus";
  constructor(http) {
    this.http = http;
  }
  getFilteredData(search) {
    const params = { search };
    return this.http.get(this.url, { params }).pipe(map((response) => response.items));
  }
  static \u0275fac = function AppComponentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppComponentService, factory: _AppComponentService.\u0275fac, providedIn: "root" });
};

// node_modules/subsink/dist/es2015/subsink.js
var isFunction = function(fn) {
  return typeof fn === "function";
};
var SubSink = (
  /** @class */
  function() {
    function SubSink2() {
      this._subs = [];
    }
    SubSink2.prototype.add = function() {
      var subscriptions = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        subscriptions[_i] = arguments[_i];
      }
      this._subs = this._subs.concat(subscriptions);
    };
    Object.defineProperty(SubSink2.prototype, "sink", {
      /**
       * Assign subscription to this sink to add it to the tracked subscriptions
       * @example
       *  this.subs.sink = observable$.subscribe(...);
       */
      set: function(subscription) {
        this._subs.push(subscription);
      },
      enumerable: true,
      configurable: true
    });
    SubSink2.prototype.unsubscribe = function() {
      this._subs.forEach(function(sub) {
        return sub && isFunction(sub.unsubscribe) && sub.unsubscribe();
      });
      this._subs = [];
    };
    return SubSink2;
  }()
);

// node_modules/@po-ui/ng-templates/fesm2022/po-ui-ng-templates.mjs
var _c0 = ["emailForm"];
var _c1 = ["recoveryModal"];
var _c2 = ["smsCodeForm"];
function PoModalPasswordRecoveryComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "po-radio-group", 18);
    \u0275\u0275twoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.chosenTypeFormOption, $event) || (ctx_r1.chosenTypeFormOption = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change", function PoModalPasswordRecoveryComponent_div_3_div_6_Template_po_radio_group_p_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.getInputType($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.chosenTypeFormOption);
    \u0275\u0275property("p-options", ctx_r1.typeFormOptions)("p-size", ctx_r1.componentsSize);
  }
}
function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-email", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_email_8_Template_po_email_p_change_model_0_listener() {
      \u0275\u0275restoreView(_r3);
      \u0275\u0275nextContext();
      const emailForm_r4 = \u0275\u0275reference(5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formModelChangesCheck(emailForm_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275property("p-label", ctx_r1.literals.insertEmail)("p-size", ctx_r1.componentsSize);
  }
}
function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.phone, $event) || (ctx_r1.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change-model", function PoModalPasswordRecoveryComponent_div_3_po_input_9_Template_po_input_p_change_model_0_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const emailForm_r4 = \u0275\u0275reference(5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formModelChangesCheck(emailForm_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.phone);
    \u0275\u0275property("p-label", ctx_r1.literals.insertPhone)("p-mask", ctx_r1.phoneMask)("p-maxlength", ctx_r1.maxLength)("p-minlength", ctx_r1.minLength)("p-size", ctx_r1.componentsSize);
  }
}
function PoModalPasswordRecoveryComponent_div_3_po_modal_password_recovery_error_message_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-modal-password-recovery-error-message", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("p-text", ctx_r1.type === "sms" ? ctx_r1.literals.phoneErrorMessagePhrase : ctx_r1.literals.emailErrorMessagePhrase);
  }
}
function PoModalPasswordRecoveryComponent_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.literals.prepositionIn, " ");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("href", "mailto:", ctx_r1.contactEmail, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.contactEmail, " ");
  }
}
function PoModalPasswordRecoveryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "form", null, 1);
    \u0275\u0275template(6, PoModalPasswordRecoveryComponent_div_3_div_6_Template, 2, 3, "div", 11);
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275template(8, PoModalPasswordRecoveryComponent_div_3_po_email_8_Template, 1, 3, "po-email", 13)(9, PoModalPasswordRecoveryComponent_div_3_po_input_9_Template, 1, 6, "po-input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275template(11, PoModalPasswordRecoveryComponent_div_3_po_modal_password_recovery_error_message_11_Template, 1, 1, "po-modal-password-recovery-error-message", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275text(13);
    \u0275\u0275template(14, PoModalPasswordRecoveryComponent_div_3_span_14_Template, 4, 4, "span", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emailModalPhrases.firstPhrase, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.modalPasswordRecoveryTypeAll);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.type === "email" || ctx_r1.type === "all");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.type === "sms");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.invalidEmail && ctx_r1.control.dirty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emailModalPhrases.secondPhrase, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.contactEmail);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.endpoint, " ");
  }
}
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-modal-password-recovery-error-message", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("p-text", ctx_r1.smsCodeErrorMessage || ctx_r1.literals.smsCodeErrorMessagePhrase);
  }
}
function PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-modal-password-recovery-error-message", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("p-text", ctx_r1.codeError);
  }
}
function PoModalPasswordRecoveryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8, 2)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "form", null, 3)(7, "po-input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PoModalPasswordRecoveryComponent_div_4_Template_po_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode, $event) || (ctx_r1.smsCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change-model", function PoModalPasswordRecoveryComponent_div_4_Template_po_input_p_change_model_7_listener() {
      \u0275\u0275restoreView(_r6);
      const smsCodeForm_r7 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formModelChangesCheck(smsCodeForm_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275template(9, PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_9_Template, 1, 1, "po-modal-password-recovery-error-message", 16)(10, PoModalPasswordRecoveryComponent_div_4_po_modal_password_recovery_error_message_10_Template, 1, 1, "po-modal-password-recovery-error-message", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 24);
    \u0275\u0275listener("click", function PoModalPasswordRecoveryComponent_div_4_Template_span_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendSmsCode());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.literals.sentSmsCodePhrase);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode);
    \u0275\u0275property("p-label", ctx_r1.literals.insertCode)("p-mask", ctx_r1.codeMask)("p-size", ctx_r1.componentsSize);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.invalidEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCustomCodeError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.literals.sendAgainPhrase, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.literals.sendAgain);
  }
}
function PoModalPasswordRecoveryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8, 4);
    \u0275\u0275element(2, "img", 25);
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.literals.emailSentConfirmationPhrase, " ");
  }
}
var _c3 = ["*"];
function PoPageBackgroundComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-logo", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-link", false)("p-logo", ctx_r0.logo)("p-logo-alt", ctx_r0.logoAlt);
  }
}
function PoPageBackgroundComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "po-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageBackgroundComponent_Conditional_10_Template_po_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedLanguageOption, $event) || (ctx_r0.selectedLanguageOption = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change", function PoPageBackgroundComponent_Conditional_10_Template_po_select_p_change_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onChangeLanguage());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedLanguageOption);
    \u0275\u0275property("p-options", ctx_r0.selectLanguageOptions)("p-size", ctx_r0.componentsSize);
  }
}
function PoPageBackgroundComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-logo", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-link", false)("p-logo", ctx_r0.secondaryLogo);
  }
}
function PoPageBackgroundComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.background + ")");
    \u0275\u0275property("ngClass", ctx_r0.background ? "po-page-login-highlight-image" : "po-page-login-highlight-image-off");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.highlightInfo);
  }
}
var _c4 = ["contactGroup"];
var _c5 = ["mailItem"];
var _c6 = ["phoneItem"];
function PoPageBlockedUserReasonComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.literals == null ? null : ctx_r0.literals.thirdPhrase);
  }
}
var _c7 = ["pageChangePassword"];
var _c8 = ["passwordForm"];
var _c9 = (a0) => ({
  "po-offset-md-3 po-offset-lg-3 po-offset-xl-3": a0
});
function PoPageChangePasswordComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "po-password", 29);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageChangePasswordComponent_Conditional_13_Template_po_password_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentPassword, $event) || (ctx_r2.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentPassword);
    \u0275\u0275property("p-label", ctx_r2.literals.currentPassword)("p-no-autocomplete", ctx_r2.noAutocompletePassword)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageChangePasswordComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r2.recovery);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.literals.forgotPassword, " ");
  }
}
function PoPageChangePasswordComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r2.recovery, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.literals.forgotPassword, " ");
  }
}
function PoPageChangePasswordComponent_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275listener("click", function PoPageChangePasswordComponent_Conditional_14_Conditional_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onForgotPasswordClick(ctx_r2.recovery));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.literals.forgotPassword, " ");
  }
}
function PoPageChangePasswordComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, PoPageChangePasswordComponent_Conditional_14_Conditional_1_Template, 2, 2, "a", 30)(2, PoPageChangePasswordComponent_Conditional_14_Conditional_2_Template, 2, 2, "a", 31)(3, PoPageChangePasswordComponent_Conditional_14_Conditional_3_Template, 2, 1, "a", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.recoveryUrlType === "internalLink" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.recoveryUrlType === "externalLink" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.recoveryUrlType ? 3 : -1);
  }
}
function PoPageChangePasswordComponent_Conditional_19_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35);
    \u0275\u0275element(1, "po-icon", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const requirement_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("p-icon", ctx_r2.validateRequirement(requirement_r5) ? "ICON_OK po-page-change-password-required-ok" : "ICON_MINUS po-page-change-password-required-minus");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", requirement_r5.requirement, " ");
  }
}
function PoPageChangePasswordComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "po-container")(2, "ul", 34)(3, "li", 35)(4, "p", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, PoPageChangePasswordComponent_Conditional_19_For_7_Template, 4, 2, "li", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.literals == null ? null : ctx_r2.literals.requirements, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.requirements);
  }
}
function PoPageChangePasswordComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-button", 39);
    \u0275\u0275listener("p-click", function PoPageChangePasswordComponent_Conditional_38_Template_po_button_p_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateTo(ctx_r2.urlBack));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("p-label", ctx_r2.literals.backButton)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageDynamicDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-dynamic-view", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-components-size", ctx_r0.componentsSize)("p-fields", ctx_r0.fields)("p-value", ctx_r0.model);
  }
}
function PoPageDynamicDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "po-widget", 2);
    \u0275\u0275element(1, "po-icon", 3);
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-size", ctx_r0.componentsSize);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.literals.registerNotFound, " ");
  }
}
var _c10 = ["dynamicForm"];
var _c11 = ["gridDetail"];
function PoPageDynamicEditComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "po-divider", 6);
    \u0275\u0275elementStart(2, "div", 7)(3, "po-button", 8);
    \u0275\u0275listener("p-click", function PoPageDynamicEditComponent_Conditional_1_Conditional_2_Template_po_button_p_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.detailActionNew());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "po-grid", 9, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("p-label", ctx_r1.detailFields[0].divider);
    \u0275\u0275advance(2);
    \u0275\u0275property("p-size", ctx_r1.componentsSize)("p-label", ctx_r1.literals.detailActionNew);
    \u0275\u0275advance();
    \u0275\u0275property("p-row-actions", ctx_r1.detailActions)("p-columns", ctx_r1.detailFields[0].detail.columns)("p-data", ctx_r1.model[ctx_r1.detailFields[0].property]);
  }
}
function PoPageDynamicEditComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-dynamic-form", 4, 0);
    \u0275\u0275template(2, PoPageDynamicEditComponent_Conditional_1_Conditional_2_Template, 6, 6, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("p-components-size", ctx_r1.componentsSize)("p-fields", ctx_r1.controlFields)("p-value", ctx_r1.model);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.detailFields.length > 0 ? 2 : -1);
  }
}
function PoPageDynamicEditComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "po-widget", 3);
    \u0275\u0275element(1, "po-icon", 10);
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("p-size", ctx_r1.componentsSize);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.literals.registerNotFound, " ");
  }
}
var _c12 = ["formExecution"];
var _c13 = ["dailyTemplate"];
var _c14 = ["monthlyTemplate"];
var _c15 = ["weeklyTemplate"];
function PoPageJobSchedulerExecutionComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-lookup", 12);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Conditional_3_Conditional_0_Template_po_lookup_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.value.processID, $event) || (ctx_r2.value.processID = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.processID);
    \u0275\u0275property("p-disabled", ctx_r2.isEdit)("p-filter-service", ctx_r2.poPageJobSchedulerLookup)("p-label", ctx_r2.literals.process)("p-placeholder", ctx_r2.literals.enterProcess)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageJobSchedulerExecutionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PoPageJobSchedulerExecutionComponent_Conditional_3_Conditional_0_Template, 1, 6, "po-lookup", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.noParameters && ctx_r2.noCustomParamsComponent ? 0 : -1);
  }
}
function PoPageJobSchedulerExecutionComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Conditional_4_Template_po_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.value.processID, $event) || (ctx_r2.value.processID = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.processID);
    \u0275\u0275property("p-disabled", ctx_r2.isEdit)("p-label", ctx_r2.literals.process)("p-placeholder", ctx_r2.literals.enterProcess)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageJobSchedulerExecutionComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-radio-group", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Conditional_12_Conditional_2_Template_po_radio_group_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.value.frequency.type, $event) || (ctx_r2.value.frequency.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change", function PoPageJobSchedulerExecutionComponent_Conditional_12_Conditional_2_Template_po_radio_group_p_change_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onChangeFrequencyOptions());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "po-number", 18);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Conditional_12_Conditional_2_Template_po_number_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.value.frequency.value, $event) || (ctx_r2.value.frequency.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.frequency.type);
    \u0275\u0275property("p-columns", 3)("p-options", ctx_r2.frequencyOptions)("p-size", ctx_r2.componentsSize);
    \u0275\u0275advance();
    \u0275\u0275property("p-size", ctx_r2.componentsSize);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.frequency.value);
  }
}
function PoPageJobSchedulerExecutionComponent_Conditional_12_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "po-switch", 14);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Conditional_12_Template_po_switch_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.containsFrequency, $event) || (ctx_r2.containsFrequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change", function PoPageJobSchedulerExecutionComponent_Conditional_12_Template_po_switch_p_change_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangeContainsFrequency($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, PoPageJobSchedulerExecutionComponent_Conditional_12_Conditional_2_Template, 2, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275element(4, "po-divider", 7);
    \u0275\u0275template(5, PoPageJobSchedulerExecutionComponent_Conditional_12_ng_container_5_Template, 1, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "po-switch", 16);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Conditional_12_Template_po_switch_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.value.recurrent, $event) || (ctx_r2.value.recurrent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.containsFrequency);
    \u0275\u0275property("p-label", ctx_r2.literals.frequency)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes)("p-size", ctx_r2.componentsSize);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.containsFrequency ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("p-label", ctx_r2.literals.periodicityData);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.periodicityTemplates[ctx_r2.value.periodicity]);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.recurrent);
    \u0275\u0275property("p-label", ctx_r2.literals.recurrent)("p-label-off", ctx_r2.literals.no)("p-label-on", ctx_r2.literals.yes)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PoPageJobSchedulerExecutionComponent_ng_template_13_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const inputHourTemplate_r7 = \u0275\u0275reference(20);
    \u0275\u0275property("ngTemplateOutlet", inputHourTemplate_r7);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, PoPageJobSchedulerExecutionComponent_ng_template_15_ng_container_1_Template, 1, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "po-checkbox-group", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_15_Template_po_checkbox_group_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.value.daysOfWeek, $event) || (ctx_r2.value.daysOfWeek = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const inputHourTemplate_r7 = \u0275\u0275reference(20);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", inputHourTemplate_r7);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.daysOfWeek);
    \u0275\u0275property("p-label", ctx_r2.literals.weekDays)("p-options", ctx_r2.weekDays)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-number", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_17_Conditional_1_Template_po_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.value.rangeLimitDay, $event) || (ctx_r2.value.rangeLimitDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.rangeLimitDay);
    \u0275\u0275property("p-error-pattern", "Dia inv\xE1lido")("p-label", ctx_r2.literals.endDay)("p-max", 31)("p-pattern", ctx_r2.dayPattern)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-number", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_17_Template_po_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.value.dayOfMonth, $event) || (ctx_r2.value.dayOfMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, PoPageJobSchedulerExecutionComponent_ng_template_17_Conditional_1_Template, 1, 6, "po-number", 21)(2, PoPageJobSchedulerExecutionComponent_ng_template_17_ng_container_2_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const inputHourTemplate_r7 = \u0275\u0275reference(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.dayOfMonth);
    \u0275\u0275property("p-error-pattern", "Dia inv\xE1lido")("p-label", ctx_r2.dayLabel)("p-max", 31)("p-pattern", ctx_r2.dayPattern)("p-size", ctx_r2.componentsSize);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.containsFrequency ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", inputHourTemplate_r7);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_19_Conditional_1_Template_po_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.value.rangeLimitHour, $event) || (ctx_r2.value.rangeLimitHour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.rangeLimitHour);
    \u0275\u0275property("p-label", ctx_r2.literals.endTime)("p-pattern", ctx_r2.timePattern)("p-size", ctx_r2.componentsSize);
  }
}
function PoPageJobSchedulerExecutionComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_ng_template_19_Template_po_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.value.hour, $event) || (ctx_r2.value.hour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, PoPageJobSchedulerExecutionComponent_ng_template_19_Conditional_1_Template, 1, 4, "po-input", 24);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.value.hour);
    \u0275\u0275property("p-label", ctx_r2.hourLabel)("p-pattern", ctx_r2.timePattern)("p-size", ctx_r2.componentsSize);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.containsFrequency && ctx_r2.value.frequency.type !== "day" ? 1 : -1);
  }
}
var _c16 = ["parametersForm"];
function PoPageJobSchedulerParametersComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", null, 0);
    \u0275\u0275element(2, "po-dynamic-form", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("p-components-size", ctx_r0.componentsSize)("p-fields", ctx_r0.parameters)("p-value", ctx_r0.value);
  }
}
function PoPageJobSchedulerParametersComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "po-icon", 3);
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.literals.parametersNotFound, " ");
  }
}
function PoPageJobSchedulerSummaryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-info", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-label", ctx_r0.literals.process)("p-orientation", ctx_r0.infoOrientation)("p-size", ctx_r0.componentsSize)("p-value", ctx_r0.value.processID);
  }
}
function PoPageJobSchedulerSummaryComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-info", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-label", ctx_r0.literals.frequency)("p-orientation", ctx_r0.infoOrientation)("p-size", ctx_r0.componentsSize)("p-value", ctx_r0.frequencyValue);
  }
}
function PoPageJobSchedulerSummaryComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-info", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-label", ctx_r0.literals.execution)("p-orientation", ctx_r0.infoOrientation)("p-size", ctx_r0.componentsSize)("p-value", ctx_r0.executionValue);
  }
}
function PoPageJobSchedulerSummaryComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "po-widget", 2);
    \u0275\u0275element(1, "po-dynamic-view", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("p-size", ctx_r0.componentsSize)("p-title", ctx_r0.literals.parameters);
    \u0275\u0275advance();
    \u0275\u0275property("p-components-size", ctx_r0.componentsSize)("p-fields", ctx_r0.parameters)("p-value", ctx_r0.value.executionParameter);
  }
}
function PoPageJobSchedulerSummaryComponent_Conditional_8_ng_template_1_Template(rf, ctx) {
}
function PoPageJobSchedulerSummaryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, PoPageJobSchedulerSummaryComponent_Conditional_8_ng_template_1_Template, 0, 0, "ng-template", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.jobSchedulerSummaryTemplate == null ? null : ctx_r0.jobSchedulerSummaryTemplate.templateRef);
  }
}
var _c17 = ["schedulerExecution"];
var _c18 = ["schedulerParameters"];
var _c19 = () => [];
function PoPageJobSchedulerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-page-job-scheduler-parameters", 11, 2);
    \u0275\u0275twoWayListener("p-valueChange", function PoPageJobSchedulerComponent_Conditional_9_Template_po_page_job_scheduler_parameters_p_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.model.executionParameter, $event) || (ctx_r2.model.executionParameter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", ctx_r2.step !== ctx_r2.stepParameters)("p-components-size", ctx_r2.componentsSize)("p-literals", ctx_r2.literals)("p-parameters", ctx_r2.parameters || \u0275\u0275pureFunction0(5, _c19));
    \u0275\u0275twoWayProperty("p-value", ctx_r2.model.executionParameter);
  }
}
function PoPageJobSchedulerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-page-job-scheduler-summary", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("p-no-parameters", !ctx_r2.parameters.length)("p-summary-template", ctx_r2.jobSchedulerSummaryTemplate)("p-components-size", ctx_r2.componentsSize)("p-literals", ctx_r2.literals)("p-parameters", ctx_r2.parameters)("p-value", ctx_r2.publicValues);
  }
}
function PoPageJobSchedulerComponent_For_12_ng_template_1_Template(rf, ctx) {
}
function PoPageJobSchedulerComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, PoPageJobSchedulerComponent_For_12_ng_template_1_Template, 0, 0, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r4 = ctx.$implicit;
    const \u0275$index_21_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", ctx_r2.step !== \u0275$index_21_r5 + (ctx_r2._stepExecutionLast ? 1 : 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", template_r4 == null ? null : template_r4.templateRef);
  }
}
function PoPageLoginPopoverComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.recovery);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.literals == null ? null : ctx_r0.literals.iForgotMyPassword, " ");
  }
}
function PoPageLoginPopoverComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.recovery, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.literals == null ? null : ctx_r0.literals.iForgotMyPassword, " ");
  }
}
function PoPageLoginPopoverComponent_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275listener("click", function PoPageLoginPopoverComponent_Conditional_17_Conditional_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onForgotPasswordClick(ctx_r0.recovery));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.literals == null ? null : ctx_r0.literals.iForgotMyPassword, " ");
  }
}
function PoPageLoginPopoverComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, PoPageLoginPopoverComponent_Conditional_17_Conditional_1_Template, 2, 2, "a", 8)(2, PoPageLoginPopoverComponent_Conditional_17_Conditional_2_Template, 2, 2, "a", 9)(3, PoPageLoginPopoverComponent_Conditional_17_Conditional_3_Template, 2, 1, "a", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.recoveryType === "internalLink" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.recoveryType === "externalLink" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.recoveryType ? 3 : -1);
  }
}
var _c20 = ["loginForm"];
var _c21 = ["pageLogin"];
function PoPageLoginComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-tag", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("p-value", ctx_r1.environment);
  }
}
function PoPageLoginComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-icon", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("p-tooltip", ctx_r1.pageLoginLiterals.loginHint);
  }
}
function PoPageLoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, PoPageLoginComponent_Conditional_19_Conditional_1_Template, 1, 1, "po-icon", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("po-page-login-info-icon-container-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pageLoginLiterals.loginHint ? 1 : -1);
  }
}
function PoPageLoginComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "po-icon", 29);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(error_r4);
  }
}
function PoPageLoginComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-page-login-popover", 32);
    \u0275\u0275listener("p-forgot-password", function PoPageLoginComponent_Conditional_26_Conditional_1_Template_po_page_login_popover_p_forgot_password_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openUrl($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("p-literals", ctx_r1.pageLoginLiterals)("p-recovery", ctx_r1.recovery)("p-remaining-attempts", ctx_r1.exceededAttemptsWarning);
  }
}
function PoPageLoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, PoPageLoginComponent_Conditional_26_Conditional_1_Template, 1, 3, "po-page-login-popover", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showExceededAttemptsWarning && ctx_r1.exceededAttemptsWarning ? 1 : -1);
  }
}
function PoPageLoginComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "po-icon", 29);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(error_r6);
  }
}
function PoPageLoginComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageLoginComponent_Conditional_30_Template_po_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customFieldObject.value, $event) || (ctx_r1.customFieldObject.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function PoPageLoginComponent_Conditional_30_Template_po_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      const loginForm_r3 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(loginForm_r3.valid && ctx_r1.onLoginSubmit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("po-page-login-field-size-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customFieldObject.value);
    \u0275\u0275property("p-error-pattern", ctx_r1.customFieldObject.errorPattern || ctx_r1.pageLoginLiterals.customFieldErrorPattern)("p-pattern", ctx_r1.customFieldObject.pattern)("p-placeholder", ctx_r1.customFieldObject.placeholder || ctx_r1.pageLoginLiterals.customFieldPlaceholder)("p-size", ctx_r1.componentsSize);
  }
}
function PoPageLoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-combo", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageLoginComponent_Conditional_31_Template_po_combo_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customFieldObject.value, $event) || (ctx_r1.customFieldObject.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("po-page-login-field-size-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customFieldObject.value);
    \u0275\u0275property("p-field-value", ctx_r1.customFieldObject.fieldValue)("p-filter-service", ctx_r1.customFieldObject.url)("p-placeholder", ctx_r1.customFieldObject.placeholder || ctx_r1.pageLoginLiterals.customFieldPlaceholder)("p-size", ctx_r1.componentsSize);
  }
}
function PoPageLoginComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageLoginComponent_Conditional_32_Template_po_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customFieldObject.value, $event) || (ctx_r1.customFieldObject.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("po-page-login-field-size-dynamic", !ctx_r1.pageLoginLiterals.loginHint && !ctx_r1.pageLoginLiterals.rememberUserHint);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customFieldObject.value);
    \u0275\u0275property("p-placeholder", ctx_r1.customFieldObject.placeholder || ctx_r1.pageLoginLiterals.customFieldPlaceholder)("p-options", ctx_r1.customFieldObject.options)("p-size", ctx_r1.componentsSize);
  }
}
function PoPageLoginComponent_Conditional_34_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-icon", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("p-tooltip", ctx_r1.pageLoginLiterals.rememberUserHint);
  }
}
function PoPageLoginComponent_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, PoPageLoginComponent_Conditional_34_Conditional_2_Conditional_1_Template, 1, 1, "po-icon", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("po-page-login-info-icon-container-dynamic", !ctx_r1.pageLoginLiterals.rememberUserHint);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pageLoginLiterals.rememberUserHint ? 1 : -1);
  }
}
function PoPageLoginComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "po-switch", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PoPageLoginComponent_Conditional_34_Template_po_switch_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rememberUser, $event) || (ctx_r1.rememberUser = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function PoPageLoginComponent_Conditional_34_Template_po_switch_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      const loginForm_r3 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(loginForm_r3.valid && ctx_r1.onLoginSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, PoPageLoginComponent_Conditional_34_Conditional_2_Template, 2, 3, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rememberUser);
    \u0275\u0275property("p-label-off", ctx_r1.pageLoginLiterals.rememberUser)("p-label-on", ctx_r1.pageLoginLiterals.rememberUser)("p-size", ctx_r1.componentsSize)("p-hide-label-status", ctx_r1.hideLabelStatus);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pageLoginLiterals.loginHint || ctx_r1.pageLoginLiterals.rememberUserHint ? 2 : -1);
  }
}
function PoPageLoginComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "a", 39);
    \u0275\u0275listener("click", function PoPageLoginComponent_Conditional_36_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl(ctx_r1.recovery));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pageLoginLiterals.forgotPassword);
  }
}
function PoPageLoginComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "a", 39);
    \u0275\u0275listener("click", function PoPageLoginComponent_Conditional_37_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl(ctx_r1.registerUrl));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pageLoginLiterals.registerUrl);
  }
}
var PoPageComponentsSize;
(function(PoPageComponentsSize2) {
  PoPageComponentsSize2["Small"] = "small";
  PoPageComponentsSize2["Medium"] = "medium";
})(PoPageComponentsSize || (PoPageComponentsSize = {}));
function getBrowserLanguage() {
  return navigator.language || navigator["userLanguage"];
}
function getShortBrowserLanguage() {
  const language = (getBrowserLanguage() || poLocaleDefault).toLowerCase().substring(0, 2);
  if (!poLocales.includes(language)) {
    return poLocaleDefault;
  }
  return language;
}
function convertToBoolean(val) {
  if (typeof val === "string") {
    val = val.toLowerCase().trim();
    return val === "true" || val === "on" || val === "";
  }
  if (typeof val === "number") {
    return val === 1;
  }
  return !!val;
}
function convertToInt(value, valueDefault) {
  const validNumber = parseInt(value, 10);
  const validDefaultValue = parseInt(valueDefault, 10);
  const defaultValue = validDefaultValue || validDefaultValue === 0 ? validDefaultValue : void 0;
  return validNumber || validNumber === 0 ? validNumber : defaultValue;
}
function isTypeof(object, type) {
  return typeof object === type;
}
function convertDateToISOExtended(date, time) {
  if (date) {
    const getMonth = date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month = getMonth < 10 ? "0" + getMonth : getMonth;
    const year = formatYear(date.getFullYear());
    const dateString = date.toString();
    if (time) {
      return year + "-" + month + "-" + day + time;
    } else {
      return year + "-" + month + "-" + day + "T" + dateString.substring(16, 24) + dateString.substring(28, 31) + ":" + dateString.substring(31, 33);
    }
  } else {
    return null;
  }
}
function formatYear(year) {
  if (year >= 1e3) {
    return year.toString();
  }
  if (year > 99 && year < 1e3) {
    return `0${year}`;
  }
  if (year > 9 && year < 100) {
    return `00${year}`;
  }
  if (year >= 0 && year < 10) {
    return `000${year}`;
  }
}
function getDefaultSizeFn() {
  return getA11yDefaultSize() === "small" ? PoPageComponentsSize.Small : PoPageComponentsSize.Medium;
}
function isExternalLink(url) {
  return url ? url.startsWith("http") : false;
}
function openExternalLink(url) {
  window.open(url, "_blank");
}
function capitalizeFirstLetter(text) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}
function mapArrayByProperties(items = [], properties = []) {
  return items.map((item) => mapObjectByProperties(item, properties));
}
function mapObjectByProperties(object = {}, properties = []) {
  const getSelectedProperties = (selectedProperties, property) => __spreadProps(__spreadValues({}, selectedProperties), {
    [property]: object[property]
  });
  return properties.reduce(getSelectedProperties, {});
}
function valuesFromObject(object = {}) {
  return Object.keys(object).map((property) => object[property]);
}
function addZero(time) {
  if (!time) {
    return "00";
  }
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}
function removeKeysProperties(keys, newItemValue) {
  keys.forEach((key) => delete newItemValue[key]);
  return newItemValue;
}
function removeDuplicateItemsWithArrayKey(item, item2, keys) {
  const newKey = keys.length ? keys : ["id"];
  const combinedArray = item.concat(item2);
  return combinedArray.filter((obj, index) => index === combinedArray.findIndex((innerObj) => newKey.every((key) => innerObj[key] === obj[key])));
}
function sortArrayOfObjects(items, key, isAscendingOrder) {
  return items.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];
    if (typeof valueA === "number" && typeof valueB === "number") {
      return isAscendingOrder ? valueA - valueB : valueB - valueA;
    } else {
      const compareResult = valueA.toString().localeCompare(valueB.toString());
      return isAscendingOrder ? compareResult : -compareResult;
    }
  });
}
function validateSizeFn(value) {
  if (value && Object.values(PoPageComponentsSize).includes(value)) {
    if (value === PoPageComponentsSize.Small && getA11yLevel() !== "AA") {
      return PoPageComponentsSize.Medium;
    }
    return value;
  }
  return getDefaultSizeFn();
}
function getA11yDefaultSize() {
  const defaultSize = localStorage.getItem("po-default-size");
  const a11yLevel = document.documentElement.getAttribute("data-a11y");
  return defaultSize === "small" && a11yLevel === "AA" ? "small" : "medium";
}
function getA11yLevel() {
  const a11yLevel = document.documentElement.getAttribute("data-a11y");
  return a11yLevel === "AA" ? PoThemeA11yEnum.AA : PoThemeA11yEnum.AAA;
}
var PoModalPasswordRecoveryModalContent;
(function(PoModalPasswordRecoveryModalContent2) {
  PoModalPasswordRecoveryModalContent2["Email"] = "email";
  PoModalPasswordRecoveryModalContent2["SMSCode"] = "smsCode";
  PoModalPasswordRecoveryModalContent2["Confirmation"] = "confirmation";
})(PoModalPasswordRecoveryModalContent || (PoModalPasswordRecoveryModalContent = {}));
var PoModalPasswordRecoveryType;
(function(PoModalPasswordRecoveryType2) {
  PoModalPasswordRecoveryType2["All"] = "all";
  PoModalPasswordRecoveryType2["Email"] = "email";
  PoModalPasswordRecoveryType2["SMS"] = "sms";
})(PoModalPasswordRecoveryType || (PoModalPasswordRecoveryType = {}));
var poModalPasswordRecoveryLiterals = {
  en: {
    cancelButton: "Cancel",
    closeButton: "Close",
    continueButton: "Continue",
    email: "e-mail",
    emailErrorMessagePhrase: "Invalid e-mail format",
    emailSentConfirmationPhrase: `We have sent the instructions and new password creation link to your e-mail.
    If you did not receive it after a few minutes, check your spam box or click Resend.`,
    emailSentTitle: "E-mail sent",
    forgotPasswordTitle: "Forgot your password?",
    insertCode: "Type the code",
    insertEmail: "Enter your e-mail",
    insertPhone: "Enter your mobile number",
    phoneErrorMessagePhrase: "Invalid phone number",
    prepositionIn: "in",
    prepositionOr: "or",
    recoveryPasswordPhrase: "To recover your password we will send you a {0} with instructions.",
    resendEmailButton: "Resend",
    resendSmsCodePhrase: "If the code does not arrive within a few minutes, please send it again.",
    sendAgainPhrase: "If the code does not arrive within a few minutes",
    sendAgain: "send again.",
    sendButton: "Submit",
    sentSmsCodePhrase: "We sent a code for your mobile phone.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "Invalid code. Please re-enter or contact support",
    supportContact: "If you do not have access to {0} contact support",
    telephone: "telephone",
    typeCodeTitle: "Enter sent code"
  },
  es: {
    cancelButton: "Cancelar",
    closeButton: "Cerrar",
    continueButton: "Continuar",
    email: "e-mail",
    emailErrorMessagePhrase: "Formato de correo electr\xF3nico no v\xE1lido",
    emailSentConfirmationPhrase: `Enviamos las instrucciones y enlace de creaci\xF3n de nueva contrase\xF1a para su correo electr\xF3nico.
    Si no ha recibido despu\xE9s de unos minutos, compruebe su caja de spam o haga clic en Reenviar`,
    emailSentTitle: "E-mail enviado",
    forgotPasswordTitle: "Olvidaste tu contrase\xF1a?",
    insertCode: "Introduzca el c\xF3digo",
    insertEmail: "Introduce tu e-mail",
    insertPhone: "Introduce tu n\xFAmero de celular",
    phoneErrorMessagePhrase: "N\xFAmero de tel\xE9fono no v\xE1lido",
    prepositionIn: "en",
    prepositionOr: "u",
    recoveryPasswordPhrase: "Para recuperar su contrase\xF1a vamos a enviar un {0} con instrucciones.",
    resendEmailButton: "Reenviar",
    resendSmsCodePhrase: "Si el c\xF3digo no llega dentro de unos minutos, vuelva a enviar.",
    sendAgain: "env\xEDe de nuevo.",
    sendAgainPhrase: "Si el c\xF3digo no llega dentro de unos minutos",
    sendButton: "Enviar",
    sentSmsCodePhrase: "Enviamos un c\xF3digo para su celular.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "C\xF3digo no v\xE1lido. Escriba de nuevo o p\xF3ngase en contacto con el soporte",
    supportContact: "Si no tiene acceso a {0} p\xF3ngase en contacto con el soporte",
    telephone: "tel\xE9fono",
    typeCodeTitle: "Escribir c\xF3digo enviado"
  },
  pt: {
    cancelButton: "Cancelar",
    closeButton: "Fechar",
    continueButton: "Continuar",
    email: "e-mail",
    emailErrorMessagePhrase: "Formato de e-mail inv\xE1lido",
    emailSentConfirmationPhrase: `Enviamos as instru\xE7\xF5es e link de cria\xE7\xE3o de nova senha para o seu e-mail.
    Caso n\xE3o tenha recebido ap\xF3s alguns minutos, verifique sua caixa de spam ou clique em Reenviar.`,
    emailSentTitle: "E-mail enviado",
    forgotPasswordTitle: "Esqueceu sua senha?",
    insertCode: "Digite o c\xF3digo",
    insertEmail: "Insira seu e-mail",
    insertPhone: "Insira seu n\xFAmero de celular",
    phoneErrorMessagePhrase: "N\xFAmero de telefone inv\xE1lido",
    prepositionIn: "em",
    prepositionOr: "ou",
    recoveryPasswordPhrase: "Para recuperar sua senha vamos enviar um {0} com instru\xE7\xF5es.",
    resendEmailButton: "Reenviar",
    resendSmsCodePhrase: "Se o c\xF3digo n\xE3o chegar dentro de alguns minutos envie novamente",
    sendAgain: "envie novamente.",
    sendAgainPhrase: "Se o c\xF3digo n\xE3o chegar dentro de alguns minutos",
    sendButton: "Enviar",
    sentSmsCodePhrase: "Enviamos um c\xF3digo para seu celular cadastrado.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "C\xF3digo inv\xE1lido. Digite novamente ou contacte o suporte",
    supportContact: "Se n\xE3o tiver acesso ao {0} contacte o suporte",
    telephone: "telefone",
    typeCodeTitle: "Digitar c\xF3digo enviado"
  },
  ru: {
    cancelButton: "\u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
    closeButton: "\u0431\u043B\u0438\u0437\u043A\u043E",
    continueButton: "\u0431\u043B\u0438\u0437\u043A\u043E",
    email: "\u043F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435",
    emailErrorMessagePhrase: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
    emailSentConfirmationPhrase: `\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0438 \u043D\u043E\u0432\u0443\u044E \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0430\u0440\u043E\u043B\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.
\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0435\u0433\u043E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043C\u0438\u043D\u0443\u0442, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0444\u043B\u0430\u0436\u043E\u043A \u0421\u043F\u0430\u043C \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0414\u0430\u043B\u0435\u0435.`,
    emailSentTitle: "\u041F\u0438\u0441\u044C\u043C\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E",
    forgotPasswordTitle: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
    insertCode: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434",
    insertEmail: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
    insertPhone: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    phoneErrorMessagePhrase: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    prepositionIn: "\u0432",
    prepositionOr: "\u0438\u043B\u0438",
    recoveryPasswordPhrase: "\u0414\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F \u043C\u044B \u0432\u044B\u0448\u043B\u0435\u043C {0} \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F\u043C\u0438.",
    resendEmailButton: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437",
    resendSmsCodePhrase: "\u0415\u0441\u043B\u0438 \u043A\u043E\u0434 \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
    sendAgain: "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043D\u043E\u0432\u0430.",
    sendAgainPhrase: "\u0415\u0441\u043B\u0438 \u043A\u043E\u0434 \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442",
    sendButton: "\u043F\u043E\u0441\u043B\u0430\u0442\u044C",
    sentSmsCodePhrase: "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u043A\u043E\u0434 \u043D\u0430 \u0432\u0430\u0448 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.",
    sms: "SMS",
    smsCodeErrorMessagePhrase: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0438\u043B\u0438 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438",
    supportContact: "\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A {0}, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438",
    telephone: "\u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    typeCodeTitle: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0434"
  }
};
var PoModalPasswordRecoveryDefaultMaxLength = 15;
var PoModalPasswordRecoveryDefaultMinLength = 15;
var PoModalPasswordRecoveryDefaultPhone = "(99) 99999-9999";
var PoModalPasswordRecoveryTypeDefault = PoModalPasswordRecoveryType.Email;
var PoModalPasswordRecoveryBaseComponent = class _PoModalPasswordRecoveryBaseComponent {
  /**
   * @optional
   *
   * @description
   *
   * Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.
   */
  codeError;
  /**
   * @optional
   *
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso. Quando preenchido,
   * o métodos `p-submit` e `p-submit-code` serão ignorados e o componente adquirirá automatização
   * para o processo de solicitação de troca de senha.
   *
   * ### Processos
   * Ao digitar um valor válido no campo de email/telefone e pressionar **enviar**,
   * o componente fará uma requisição `POST` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.
   *
   * ```
   * body {
   *  email: email,
   *  retry?: retry
   * }
   * ```
   *
   *
   * #### Recuperação por email
   * Para a recuperação de senha por **email**, o código de resposta HTTP de status esperado é `204`.
   *
   * Em caso de **sucesso**, será exibida a modal de confirmação de e-mail para o usuário.
   *
   *
   * > A ação **Reenviar** na tela de confirmação efetua uma nova requisição
   * passando-se o objeto com incremento para o valor da propriedade **retry**.
   *
   * *Processo finalizado.*
   *
   *
   * #### Recuperação por SMS
   * Se a opção de recuperação for por **SMS**, o código de status de sucesso deve ser `200`.
   * Em caso de **sucesso**, abre-se a modal de digitação de código SMS e a resposta
   * desta requisição deve retornar uma definição de dados abaixo:
   *
   * ```
   * 200:
   *  {
   *    hash: hash,
   *    urlValidationCode?: url
   *  }
   * ```
   *
   *
   * - O **hash** será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;
   * - **urlValidationCode** é a url usada para validação do código enviado por SMS.
   *
   *
   * > Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `<p-url-recovery>/validation`.
   *
   *
   * #### Validação do código SMS
   * Ao digitar um valor válido no campo de código SMS e pressionar **continuar**, o componente fará uma requisição `POST` contendo:
   *
   * ```
   * POST /<p-url-recovery>/validation OU /<urlValidationCode>
   * Body {
   *  hash: hash,
   *  code: code
   * }
   * ```
   *
   *
   * O código de resposta HTTP de status esperado é `200`.
   *
   * Em caso de **erro** na validação do código SMS, a modal se mantém com o campo para digitação
   * de código SMS
   *
   *
   * > Pode-se atribuir a mensagem de erro (message) para o atributo `p-code-error` conforme retorno abaixo:
   *
   * ```
   * 400
   *  {
   *    error {
   *      message: 'Error Message'
   *    }
   *  }
   * ```
   *
   *
   * Em caso de **sucesso**, espera-se a resposta desta requisição retornando a seguinte definição:
   *
   * ```
   * 200:
   *  {
   *    token: token,
   *    urlChangePassword?: url
   *  }
   * ```
   *
   *
   * - **token**: Token de alteração de senha;
   * - **urlChangePassword**: url para o formulário de alteração de senha.
   *
   *
   * O componente está configurado para redirecionar para a url estabelecida em `urlChangePassword`.
   *
   * > Caso não seja passado valor para urlChangePassword,
   * a url usada para validação será a `<p-url-recovery>/changePassword?token=<token>`.
   *
   * *Processo finalizado.*
   */
  urlRecovery;
  /**
   * @optional
   *
   * @description
   *
   * Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
   */
  codeSubmit = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
   */
  submit = new EventEmitter();
  email;
  maxLength = PoModalPasswordRecoveryDefaultMaxLength;
  minLength = PoModalPasswordRecoveryDefaultMinLength;
  modalPasswordRecoveryTypeAll;
  phone;
  smsCode;
  smsCodeErrorMessage;
  literals = poModalPasswordRecoveryLiterals[poLocaleDefault];
  _componentsSize;
  _contactEmail;
  _phoneMask = PoModalPasswordRecoveryDefaultPhone;
  _type = PoModalPasswordRecoveryTypeDefault;
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no modal:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * @optional
   *
   * @description
   *
   * Definição do e-mail que é exibido na mensagem para contato de suporte.
   */
  set contactEmail(value) {
    this._contactEmail = value;
    this.smsCodeErrorMessage = this.concatenateSMSErrorMessage(value);
  }
  get contactEmail() {
    return this._contactEmail;
  }
  /**
   * @optional
   *
   * @description
   *
   * Definição da mascara do campo de telefone.
   *
   * @default `(99) 99999-9999`
   */
  set phoneMask(value) {
    this._phoneMask = value || PoModalPasswordRecoveryDefaultPhone;
    this.minLength = this.maxLength = this._phoneMask.length;
  }
  get phoneMask() {
    return this._phoneMask;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define o tipo de recuperação de senha que será exibido.
   *
   * @default `PoModalPasswordRecoveryType.Email`
   *
   */
  set type(value) {
    this._type = Object.values(PoModalPasswordRecoveryType).includes(value) ? value : PoModalPasswordRecoveryTypeDefault;
  }
  get type() {
    return this._type;
  }
  constructor(languageService) {
    this.literals = __spreadValues(__spreadValues({}, this.literals), poModalPasswordRecoveryLiterals[languageService.getShortLanguage()]);
  }
  concatenateSMSErrorMessage(value) {
    const literalCodeErrorMessage = this.literals.smsCodeErrorMessagePhrase;
    return value && value !== "" ? `${literalCodeErrorMessage} ${this.literals.prepositionIn} ${value}.` : literalCodeErrorMessage;
  }
  static \u0275fac = function PoModalPasswordRecoveryBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoModalPasswordRecoveryBaseComponent)(\u0275\u0275directiveInject(PoLanguageService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoModalPasswordRecoveryBaseComponent,
    inputs: {
      codeError: [0, "p-code-error", "codeError"],
      urlRecovery: [0, "p-url-recovery", "urlRecovery"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      contactEmail: [0, "p-contact-email", "contactEmail"],
      phoneMask: [0, "p-phone-mask", "phoneMask"],
      type: [0, "p-type", "type"]
    },
    outputs: {
      codeSubmit: "p-code-submit",
      submit: "p-submit"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoLanguageService
  }], {
    codeError: [{
      type: Input,
      args: ["p-code-error"]
    }],
    urlRecovery: [{
      type: Input,
      args: ["p-url-recovery"]
    }],
    codeSubmit: [{
      type: Output,
      args: ["p-code-submit"]
    }],
    submit: [{
      type: Output,
      args: ["p-submit"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    contactEmail: [{
      type: Input,
      args: ["p-contact-email"]
    }],
    phoneMask: [{
      type: Input,
      args: ["p-phone-mask"]
    }],
    type: [{
      type: Input,
      args: ["p-type"]
    }]
  });
})();
var PoModalPasswordRecoveryService = class _PoModalPasswordRecoveryService {
  http = inject(HttpClient);
  post(urlRecovery, item, params) {
    return this.http.post(urlRecovery, item, {
      observe: "response",
      params
    });
  }
  static \u0275fac = function PoModalPasswordRecoveryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoModalPasswordRecoveryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoModalPasswordRecoveryService,
    factory: _PoModalPasswordRecoveryService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PoModalPasswordRecoveryErrorMessageComponent = class _PoModalPasswordRecoveryErrorMessageComponent {
  /** Texto exibido na mensagem de erro. */
  text;
  static \u0275fac = function PoModalPasswordRecoveryErrorMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoModalPasswordRecoveryErrorMessageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoModalPasswordRecoveryErrorMessageComponent,
    selectors: [["po-modal-password-recovery-error-message"]],
    inputs: {
      text: [0, "p-text", "text"]
    },
    standalone: false,
    decls: 4,
    vars: 1,
    consts: [[1, "po-field-container-bottom-text-error", "po-field-container-error-item"], ["p-icon", "ICON_EXCLAMATION"], [1, "po-field-error-message"]],
    template: function PoModalPasswordRecoveryErrorMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "po-icon", 1);
        \u0275\u0275elementStart(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.text);
      }
    },
    dependencies: [PoIconComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryErrorMessageComponent, [{
    type: Component,
    args: [{
      selector: "po-modal-password-recovery-error-message",
      standalone: false,
      template: '<div class="po-field-container-bottom-text-error po-field-container-error-item">\n  <po-icon p-icon="ICON_EXCLAMATION"></po-icon>\n  <span class="po-field-error-message">{{ text }}</span>\n</div>\n'
    }]
  }], null, {
    text: [{
      type: Input,
      args: ["p-text"]
    }]
  });
})();
var PoModalPasswordRecoveryComponent = class _PoModalPasswordRecoveryComponent extends PoModalPasswordRecoveryBaseComponent {
  router = inject(Router);
  poI18nPipe = inject(PoI18nPipe);
  poModalPasswordRecoveryService = inject(PoModalPasswordRecoveryService);
  emailForm;
  recoveryModalElement;
  smsCodeForm;
  chosenTypeFormOption = PoModalPasswordRecoveryType.Email;
  codeMask = "9 9 9 9 9 9";
  control;
  emailModal = true;
  emailModalPhrases = {
    firstPhrase: null,
    secondPhrase: null
  };
  endpoint = ".";
  invalidCode = false;
  invalidEmail = false;
  modalTitle;
  modalType = PoModalPasswordRecoveryModalContent.Email;
  showCustomCodeError;
  smsCodeErrorMessagePhrase;
  submittedCodeValue = {};
  submittedContactValue = {};
  primaryAction = {
    label: void 0,
    action: () => {
    }
  };
  secondaryAction = {
    label: void 0,
    action: () => {
    }
  };
  typeFormOptions = [{
    label: "e-mail",
    value: PoModalPasswordRecoveryType.Email
  }, {
    label: "SMS",
    value: PoModalPasswordRecoveryType.SMS
  }];
  passwordRecoverySubscription;
  smsBodyResponse;
  smsCodeSubscription;
  constructor() {
    const poLanguageService = inject(PoLanguageService);
    super(poLanguageService);
  }
  ngOnDestroy() {
    if (this.passwordRecoverySubscription) {
      this.passwordRecoverySubscription.unsubscribe();
    }
    if (this.smsCodeSubscription) {
      this.smsCodeSubscription.unsubscribe();
    }
  }
  completed() {
    this.cancelAction();
  }
  formModelChangesCheck(form) {
    const invalidForm = form.invalid;
    this.invalidEmail = invalidForm && form.dirty;
    this.primaryAction.disabled = invalidForm;
    if (this.modalType === PoModalPasswordRecoveryModalContent.SMSCode) {
      const codeError = this.codeError !== void 0 && this.codeError !== "";
      this.showCustomCodeError = codeError && form.pristine;
    }
  }
  getInputType(type) {
    this.type = type;
    this.pipeModalPhrases();
    setTimeout(() => {
      this.control = this.emailForm.controls[type];
      this.formModelChangesCheck(this.emailForm);
      this.resetFormFields(this.control);
    });
  }
  open() {
    const control = this.checkFormType(this.type);
    this.control = this.emailForm.controls[control];
    this.setEmailModalPhrasesAndActions();
    this.formModelChangesCheck(this.emailForm);
    this.recoveryModalElement.open();
  }
  openConfirmation() {
    this.modalTitle = this.literals.emailSentTitle;
    this.modalType = PoModalPasswordRecoveryModalContent.Confirmation;
    this.setActions(this.cancelAction, this.literals.closeButton, this.submitAction, this.literals.resendEmailButton, this.componentsSize, false);
  }
  openSmsCode() {
    this.modalTitle = this.literals.typeCodeTitle;
    this.modalType = PoModalPasswordRecoveryModalContent.SMSCode;
    this.setActions(this.submitSmsCodeAction, this.literals.continueButton, this.cancelAction, this.literals.cancelButton, this.componentsSize, true);
    setTimeout(() => {
      this.control = this.smsCodeForm.controls["sms"];
      this.formModelChangesCheck(this.smsCodeForm);
    });
  }
  resendSmsCode() {
    this.incrementRetryAttempts();
    if (this.urlRecovery) {
      this.submitActionRequest(this.submittedContactValue, this.type);
    } else {
      this.submit.emit(this.submittedContactValue);
    }
  }
  assignSmsResponse(responseObj) {
    this.smsBodyResponse = Object.assign({}, {
      hash: responseObj.hash
    });
    if (responseObj.urlValidationCode) {
      this.smsBodyResponse = Object.assign(this.smsBodyResponse, {
        urlValidationCode: responseObj.urlValidationCode
      });
    }
  }
  cancelAction() {
    this.resetFormFields(this.control);
    this.submittedContactValue = {};
    this.chosenTypeFormOption = PoModalPasswordRecoveryType.Email;
    this.modalType = PoModalPasswordRecoveryModalContent.Email;
    this.type = this.modalPasswordRecoveryTypeAll ? PoModalPasswordRecoveryType.All : this.type;
    this.recoveryModalElement.close();
  }
  checkFormType(type) {
    return type !== PoModalPasswordRecoveryType.All ? type : PoModalPasswordRecoveryType.Email;
  }
  formReset(control) {
    control.markAsPristine();
    control.markAsUntouched();
    control.updateValueAndValidity();
  }
  getEmitValue(type) {
    return type === PoModalPasswordRecoveryType.SMS ? this.phone : this.email;
  }
  incrementRetryAttempts() {
    this.submittedContactValue.retry = this.submittedContactValue.retry + 1 || 1;
  }
  openExternalLink(url, queryParam) {
    window.open(`${url}?token=${queryParam}`, "_self");
  }
  openInternalLink(url, endpoint, queryParam) {
    this.router.navigate([`${url}/${endpoint}`], {
      queryParams: {
        token: queryParam
      }
    });
  }
  pipeModalPhrases() {
    if (this.type === PoModalPasswordRecoveryType.SMS) {
      this.emailModalPhrases.firstPhrase = this.setPipeArguments(this.literals.recoveryPasswordPhrase, this.literals.sms);
      this.emailModalPhrases.secondPhrase = this.setPipeArguments(this.literals.supportContact, this.literals.telephone);
    } else {
      this.emailModalPhrases.firstPhrase = this.setPipeArguments(this.literals.recoveryPasswordPhrase, this.literals.email);
      this.emailModalPhrases.secondPhrase = this.setPipeArguments(this.literals.supportContact, this.literals.email);
    }
  }
  redirectToChangePassword(recoveryToken) {
    const urlChangePassword = recoveryToken.urlChangePassword;
    if (urlChangePassword) {
      isExternalLink(urlChangePassword) ? this.openExternalLink(urlChangePassword, recoveryToken.token) : this.openInternalLink(this.urlRecovery, urlChangePassword, recoveryToken.token);
    } else {
      const changePasswordEndpoint = "changePassword";
      this.openInternalLink(this.urlRecovery, changePasswordEndpoint, recoveryToken.token);
    }
  }
  resetFormFields(control) {
    this.formReset(control);
    this.email = void 0;
    this.phone = void 0;
    this.smsCode = void 0;
  }
  setActions(primaryAction, primarylabel, secondaryAction, secondaryLabel, componentsSize, disabled) {
    this.primaryAction.action = () => primaryAction.call(this);
    this.primaryAction.label = primarylabel;
    this.secondaryAction.action = () => secondaryAction.call(this);
    this.secondaryAction.label = secondaryLabel;
    this.componentsSize = componentsSize;
    this.primaryAction.disabled = disabled;
  }
  setEmailModalPhrasesAndActions() {
    this.modalTitle = this.literals.forgotPasswordTitle;
    this.pipeModalPhrases();
    this.modalPasswordRecoveryTypeAll = this.type === PoModalPasswordRecoveryType.All;
    this.setActions(this.submitAction, this.literals.sendButton, this.cancelAction, this.literals.cancelButton, this.componentsSize, true);
  }
  setRequestEndpoint(urlValidationCode) {
    const endpoint = urlValidationCode || "validation";
    return `${this.urlRecovery}/${endpoint}`;
  }
  setPipeArguments(literalAttr, arg) {
    return this.poI18nPipe.transform(literalAttr, arg);
  }
  submitAction() {
    this.modalType === PoModalPasswordRecoveryModalContent.Confirmation ? this.incrementRetryAttempts() : this.formReset(this.control);
    this.submittedContactValue[this.checkFormType(this.type)] = this.getEmitValue(this.type);
    if (this.urlRecovery) {
      this.submitActionRequest(this.submittedContactValue, this.type);
    } else {
      this.submit.emit(this.submittedContactValue);
    }
  }
  submitActionRequest(data, modalType) {
    const params = modalType === PoModalPasswordRecoveryType.SMS ? {
      type: "sms"
    } : void 0;
    this.passwordRecoverySubscription = this.poModalPasswordRecoveryService.post(this.urlRecovery, data, params).subscribe((response) => {
      if ((modalType === PoModalPasswordRecoveryType.Email || modalType === PoModalPasswordRecoveryType.All) && response.status === 204) {
        this.openConfirmation();
      } else if (modalType === PoModalPasswordRecoveryType.SMS && response.status === 200) {
        this.assignSmsResponse(response.body);
        this.openSmsCode();
      }
    });
  }
  submitSmsCodeAction() {
    this.submittedCodeValue.code = this.smsCode;
    if (this.urlRecovery) {
      this.submittedCodeValue = Object.assign(this.submittedCodeValue, {
        hash: this.smsBodyResponse.hash
      });
      this.submitSmsCodeRequest(this.submittedCodeValue);
    } else {
      this.codeSubmit.emit(this.submittedCodeValue);
    }
    this.resetFormFields(this.control);
  }
  submitSmsCodeRequest(data) {
    this.smsCodeSubscription = this.poModalPasswordRecoveryService.post(this.setRequestEndpoint(this.smsBodyResponse.urlValidationCode), data).subscribe((response) => {
      const successStatus = response.status === 200;
      if (successStatus) {
        this.completed();
        this.redirectToChangePassword(response.body);
      }
    }, (error) => {
      this.codeError = error.error.message;
      this.openSmsCode();
    });
  }
  static \u0275fac = function PoModalPasswordRecoveryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoModalPasswordRecoveryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoModalPasswordRecoveryComponent,
    selectors: [["po-modal-password-recovery"]],
    viewQuery: function PoModalPasswordRecoveryComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 7);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emailForm = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.recoveryModalElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.smsCodeForm = _t.first);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 8,
    consts: [["recoveryModal", ""], ["emailForm", "ngForm"], ["smsCodeModal", ""], ["smsCodeForm", "ngForm"], ["confirmationModal", ""], ["p-hide-close", "", "p-size", "auto", 3, "ngSwitch", "p-components-size", "p-primary-action", "p-secondary-action", "p-title"], [1, "po-modal-password-recovery-wrapper"], ["class", "po-modal-password-recovery-content po-row", 4, "ngSwitchCase"], [1, "po-modal-password-recovery-content", "po-row"], [1, "po-modal-password-recovery-text", "po-md-12", "po-mb-1"], [1, "po-mb-2", "po-md-12"], [4, "ngIf"], [1, "po-mt-1"], ["name", "email", "p-required", "", 3, "ngModel", "p-label", "p-size", "ngModelChange", "p-change-model", 4, "ngIf"], ["name", "sms", "p-icon", "ICON_TELEPHONE", "p-required", "", 3, "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength", "p-size", "ngModelChange", "p-change-model", 4, "ngIf"], [1, "po-field-container-bottom", "po-field-container-error-container"], [3, "p-text", 4, "ngIf"], [1, "po-modal-password-recovery-text", "po-md-12"], ["name", "type", 3, "ngModelChange", "p-change", "ngModel", "p-options", "p-size"], ["name", "email", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label", "p-size"], ["name", "sms", "p-icon", "ICON_TELEPHONE", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label", "p-mask", "p-maxlength", "p-minlength", "p-size"], [3, "p-text"], ["target", "_self", 1, "po-modal-password-recovery-link", 3, "href"], ["name", "sms", "p-maxlength", "11", "p-minlength", "11", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label", "p-mask", "p-size"], [1, "po-modal-password-recovery-link", 3, "click"], ["src", "./assets/images/email-sent.svg", 1, "po-modal-password-recovery-user-image", "po-mb-2"], [1, "po-modal-password-recovery-text"]],
    template: function PoModalPasswordRecoveryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "po-modal", 5, 0)(2, "div", 6);
        \u0275\u0275template(3, PoModalPasswordRecoveryComponent_div_3_Template, 16, 8, "div", 7)(4, PoModalPasswordRecoveryComponent_div_4_Template, 15, 9, "div", 7)(5, PoModalPasswordRecoveryComponent_div_5_Template, 5, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngSwitch", ctx.modalType)("p-components-size", ctx.componentsSize)("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-title", ctx.modalTitle);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngSwitchCase", "email");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "smsCode");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "confirmation");
      }
    },
    dependencies: [NgIf, NgSwitch, NgSwitchCase, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PoRadioGroupComponent, PoEmailComponent, PoInputComponent, PoModalComponent, PoModalPasswordRecoveryErrorMessageComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryComponent, [{
    type: Component,
    args: [{
      selector: "po-modal-password-recovery",
      standalone: false,
      template: `<po-modal
  #recoveryModal
  p-hide-close
  p-size="auto"
  [ngSwitch]="modalType"
  [p-components-size]="componentsSize"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryAction"
  [p-title]="modalTitle"
>
  <div class="po-modal-password-recovery-wrapper">
    <div *ngSwitchCase="'email'" class="po-modal-password-recovery-content po-row">
      <div class="po-modal-password-recovery-text po-md-12 po-mb-1">
        {{ emailModalPhrases.firstPhrase }}
      </div>
      <div class="po-mb-2 po-md-12">
        <form #emailForm="ngForm">
          <div *ngIf="modalPasswordRecoveryTypeAll">
            <po-radio-group
              name="type"
              [(ngModel)]="chosenTypeFormOption"
              [p-options]="typeFormOptions"
              [p-size]="componentsSize"
              (p-change)="getInputType($event)"
            >
            </po-radio-group>
          </div>

          <div class="po-mt-1">
            <po-email
              *ngIf="type === 'email' || type === 'all'"
              name="email"
              [(ngModel)]="email"
              p-required
              [p-label]="literals.insertEmail"
              [p-size]="componentsSize"
              (p-change-model)="formModelChangesCheck(emailForm)"
            >
            </po-email>

            <po-input
              *ngIf="type === 'sms'"
              name="sms"
              [(ngModel)]="phone"
              p-icon="ICON_TELEPHONE"
              p-required
              [p-label]="literals.insertPhone"
              [p-mask]="phoneMask"
              [p-maxlength]="maxLength"
              [p-minlength]="minLength"
              [p-size]="componentsSize"
              (p-change-model)="formModelChangesCheck(emailForm)"
            >
            </po-input>
          </div>

          <div class="po-field-container-bottom po-field-container-error-container">
            <po-modal-password-recovery-error-message
              *ngIf="invalidEmail && control.dirty"
              [p-text]="type === 'sms' ? literals.phoneErrorMessagePhrase : literals.emailErrorMessagePhrase"
            >
            </po-modal-password-recovery-error-message>
          </div>
        </form>
      </div>
      <div class="po-modal-password-recovery-text po-md-12">
        {{ emailModalPhrases.secondPhrase }}
        <span *ngIf="contactEmail">
          {{ literals.prepositionIn }}
          <a class="po-modal-password-recovery-link" href="mailto:{{ contactEmail }}" target="_self">
            {{ contactEmail }}
          </a>
        </span>
        {{ endpoint }}
      </div>
    </div>

    <div #smsCodeModal *ngSwitchCase="'smsCode'" class="po-modal-password-recovery-content po-row">
      <div class="po-modal-password-recovery-text po-md-12 po-mb-1">{{ literals.sentSmsCodePhrase }}</div>
      <div class="po-mb-2 po-md-12">
        <form #smsCodeForm="ngForm">
          <po-input
            name="sms"
            [(ngModel)]="smsCode"
            p-maxlength="11"
            p-minlength="11"
            p-required
            [p-label]="literals.insertCode"
            [p-mask]="codeMask"
            [p-size]="componentsSize"
            (p-change-model)="formModelChangesCheck(smsCodeForm)"
          >
          </po-input>
          <div class="po-field-container-bottom po-field-container-error-container">
            <po-modal-password-recovery-error-message
              *ngIf="invalidEmail"
              [p-text]="smsCodeErrorMessage || this.literals.smsCodeErrorMessagePhrase"
            >
            </po-modal-password-recovery-error-message>
            <po-modal-password-recovery-error-message *ngIf="showCustomCodeError" [p-text]="codeError">
            </po-modal-password-recovery-error-message>
          </div>
        </form>
      </div>
      <div class="po-modal-password-recovery-text po-md-12">
        {{ literals.sendAgainPhrase }}
        <span class="po-modal-password-recovery-link" (click)="resendSmsCode()">{{ literals.sendAgain }}</span>
      </div>
    </div>

    <div #confirmationModal *ngSwitchCase="'confirmation'" class="po-modal-password-recovery-content po-row">
      <img class="po-modal-password-recovery-user-image po-mb-2" src="./assets/images/email-sent.svg" />
      <div class="po-modal-password-recovery-text">
        {{ literals.emailSentConfirmationPhrase }}
      </div>
    </div>
  </div>
</po-modal>
`
    }]
  }], () => [], {
    emailForm: [{
      type: ViewChild,
      args: ["emailForm"]
    }],
    recoveryModalElement: [{
      type: ViewChild,
      args: ["recoveryModal", {
        static: true
      }]
    }],
    smsCodeForm: [{
      type: ViewChild,
      args: ["smsCodeForm"]
    }]
  });
})();
var PoModalPasswordRecoveryModule = class _PoModalPasswordRecoveryModule {
  static \u0275fac = function PoModalPasswordRecoveryModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoModalPasswordRecoveryModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoModalPasswordRecoveryModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [PoI18nPipe, PoModalPasswordRecoveryService],
    imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule, PoIconModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoModalPasswordRecoveryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PoFieldModule, PoModalModule, PoIconModule],
      declarations: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
      exports: [PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryErrorMessageComponent],
      providers: [PoI18nPipe, PoModalPasswordRecoveryService]
    }]
  }], null, null);
})();
var PoPageBackgroundComponent = class _PoPageBackgroundComponent {
  poLanguageService = inject(PoLanguageService);
  /** Insere uma imagem de destaque ao lado direito do container. */
  background;
  /** Idioma inicial selecionado no combo */
  initialSelectLanguage;
  /** Designa se o logotipo deve desaparecer em resoluções menores. */
  hideLogo;
  /** Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `p-background`. */
  highlightInfo;
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao selecionar alguma opção no seletor de idiomas.
   * Para este evento será passado como parâmetro o valor de idioma selecionado.
   */
  selectedLanguage = new EventEmitter();
  selectedLanguageOption;
  _componentsSize = void 0;
  _showSelectLanguage = false;
  _languagesList;
  _selectLanguageOptions;
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /** Lista de idiomas para o combo box */
  set languagesList(value) {
    this._languagesList = value;
    this.setLanguageOptions();
  }
  get languagesList() {
    if (this._languagesList?.length) {
      return this._languagesList;
    }
    return poLanguageDefault;
  }
  /** Caminho para a logomarca localizada na parte superior. */
  logo;
  /** Texto alternativo para a logomarca. */
  logoAlt;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  /** Define se o seletor de idiomas deve ser exibido. */
  set showSelectLanguage(showSelectLanguage) {
    this._showSelectLanguage = convertToBoolean(showSelectLanguage);
  }
  get showSelectLanguage() {
    return this._showSelectLanguage;
  }
  ngOnInit() {
    this.selectedLanguageOption = this.initialSelectLanguage || this.poLanguageService.getShortLanguage();
  }
  onChangeLanguage() {
    this.selectedLanguage.emit(this.selectedLanguageOption);
  }
  get selectLanguageOptions() {
    return this._selectLanguageOptions;
  }
  setLanguageOptions() {
    this._selectLanguageOptions = this.languagesList.map((language) => ({
      label: language.description,
      value: language.language
    }));
  }
  static \u0275fac = function PoPageBackgroundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageBackgroundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageBackgroundComponent,
    selectors: [["po-page-background"]],
    inputs: {
      background: [0, "p-background", "background"],
      initialSelectLanguage: [0, "p-initial-language", "initialSelectLanguage"],
      hideLogo: [0, "p-hide-logo", "hideLogo"],
      highlightInfo: [0, "p-highlight-info", "highlightInfo"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      languagesList: [0, "p-languages", "languagesList"],
      logo: [0, "p-logo", "logo"],
      logoAlt: [0, "p-logo-alt", "logoAlt"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      showSelectLanguage: [0, "p-show-select-language", "showSelectLanguage"]
    },
    outputs: {
      selectedLanguage: "p-selected-language"
    },
    standalone: false,
    ngContentSelectors: _c3,
    decls: 14,
    vars: 7,
    consts: [[1, "po-page-login-container"], [1, "po-page-login-panel"], [1, "po-page-background-main-logo"], ["p-class", "po-page-background-main-logo-image", 3, "p-link", "p-logo", "p-logo-alt"], [1, "po-page-login-body"], [1, "po-page-login-panel-content"], [1, "po-page-background-footer", "po-sm-12"], [1, "po-page-background-footer-mobile-only"], [1, "po-page-background-footer-content"], [1, "po-page-background-footer-select"], [1, "po-page-background-secondary-logo", 3, "ngClass"], ["p-class", "po-page-background-secondary-logo-image", "p-logo-alt", "secondary-logomarca", 3, "p-link", "p-logo"], [3, "ngClass", "background-image"], ["name", "selectedLanguageOption", 3, "ngModelChange", "p-change", "ngModel", "p-options", "p-size"], [3, "ngClass"], [1, "po-page-login-highlight-text"], [1, "po-font-display"]],
    template: function PoPageBackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, PoPageBackgroundComponent_Conditional_3_Template, 1, 3, "po-logo", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
        \u0275\u0275projection(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "po-divider", 7);
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, PoPageBackgroundComponent_Conditional_10_Template, 2, 3, "div", 9);
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275template(12, PoPageBackgroundComponent_Conditional_12_Template, 1, 2, "po-logo", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(13, PoPageBackgroundComponent_Conditional_13_Template, 4, 4, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("po-page-background-hide-logo", ctx.hideLogo);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.logo ? 3 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.showSelectLanguage ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.showSelectLanguage ? "po-page-background-secondary-logo-right" : "po-page-background-secondary-logo-centered");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.secondaryLogo ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.background ? 13 : -1);
      }
    },
    dependencies: [NgClass, NgControlStatus, NgModel, PoDividerComponent, PoSelectComponent, PoLogoComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBackgroundComponent, [{
    type: Component,
    args: [{
      selector: "po-page-background",
      standalone: false,
      template: `<div class="po-page-login-container">
  <div class="po-page-login-panel">
    <div class="po-page-background-main-logo" [class.po-page-background-hide-logo]="hideLogo">
      @if (logo) {
        <po-logo
          p-class="po-page-background-main-logo-image"
          [p-link]="false"
          [p-logo]="logo"
          [p-logo-alt]="logoAlt"
        ></po-logo>
      }
    </div>

    <div class="po-page-login-body">
      <div class="po-page-login-panel-content">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="po-page-background-footer po-sm-12">
      <po-divider class="po-page-background-footer-mobile-only"></po-divider>

      <div class="po-page-background-footer-content">
        @if (showSelectLanguage) {
          <div class="po-page-background-footer-select">
            <po-select
              name="selectedLanguageOption"
              [(ngModel)]="selectedLanguageOption"
              [p-options]="selectLanguageOptions"
              [p-size]="componentsSize"
              (p-change)="onChangeLanguage()"
            ></po-select>
          </div>
        }

        <div
          class="po-page-background-secondary-logo"
          [ngClass]="
            showSelectLanguage
              ? 'po-page-background-secondary-logo-right'
              : 'po-page-background-secondary-logo-centered'
          "
        >
          @if (secondaryLogo) {
            <po-logo
              p-class="po-page-background-secondary-logo-image"
              [p-link]="false"
              [p-logo]="secondaryLogo"
              p-logo-alt="secondary-logomarca"
            ></po-logo>
          }
        </div>
      </div>
    </div>
  </div>

  @if (background) {
    <div
      [ngClass]="background ? 'po-page-login-highlight-image' : 'po-page-login-highlight-image-off'"
      [style.background-image]="'url(' + background + ')'"
    >
      <div class="po-page-login-highlight-text">
        <div class="po-font-display">{{ highlightInfo }}</div>
      </div>
    </div>
  }
</div>
`
    }]
  }], null, {
    background: [{
      type: Input,
      args: ["p-background"]
    }],
    initialSelectLanguage: [{
      type: Input,
      args: ["p-initial-language"]
    }],
    hideLogo: [{
      type: Input,
      args: ["p-hide-logo"]
    }],
    highlightInfo: [{
      type: Input,
      args: ["p-highlight-info"]
    }],
    selectedLanguage: [{
      type: Output,
      args: ["p-selected-language"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    languagesList: [{
      type: Input,
      args: ["p-languages"]
    }],
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    logoAlt: [{
      type: Input,
      args: ["p-logo-alt"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    showSelectLanguage: [{
      type: Input,
      args: ["p-show-select-language"]
    }]
  });
})();
var PoPageBackgroundModule = class _PoPageBackgroundModule {
  static \u0275fac = function PoPageBackgroundModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageBackgroundModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageBackgroundModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule, PoLogoModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBackgroundModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule, PoLogoModule],
      declarations: [PoPageBackgroundComponent],
      exports: [PoPageBackgroundComponent]
    }]
  }], null, null);
})();
var PoPageBlockedUserReason;
(function(PoPageBlockedUserReason2) {
  PoPageBlockedUserReason2["None"] = "none";
  PoPageBlockedUserReason2["ExceededAttempts"] = "exceededAttempts";
  PoPageBlockedUserReason2["ExpiredPassword"] = "expiredPassword";
})(PoPageBlockedUserReason || (PoPageBlockedUserReason = {}));
var PoPageBlockedUserReasonDefault = PoPageBlockedUserReason.None;
var PoPageBlockedUserParamsDefault = {
  attempts: 5,
  days: 90,
  hours: 24
};
var PoPageBlockedUserBaseComponent = class _PoPageBlockedUserBaseComponent {
  /**
   * @optional
   *
   * @description
   *
   * Valor para o email de contato que deve ser exibido. A ação está de acordo com o protocolo MAILTO e é possível definir
   * tanto rotas internas quanto externas.
   */
  contactEmail;
  /**
   * @optional
   *
   * @description
   *
   * Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.
   *
   * > A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.
   */
  contactPhone;
  /** Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI. */
  logo;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  _componentsSize = void 0;
  _params = __spreadValues({}, PoPageBlockedUserParamsDefault);
  _reason = PoPageBlockedUserReason.None;
  _urlBack = "/";
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * @optional
   *
   * @description
   *
   * Designação de valores usados para a customização da mensagem de bloqueio.
   * Confira abaixo os valores pré-definidos.
   *
   * ```
   *  const customLiterals: PoPageBlockedUserReasonParams = {
   *    attempts: 5,
   *    days: 90,
   *    hours: 24
   *  };
   * ```
   *
   * > Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.
   *
   * > Veja os parâmetros customizáveis na interface `PoPageBlockedUserReasonParams`.
   *
   */
  set params(value) {
    if (value instanceof Object) {
      const keys = Object.keys(value);
      const newParams = __spreadValues({}, PoPageBlockedUserParamsDefault);
      keys.forEach((key) => {
        newParams[key] = value[key];
      });
      this._params = newParams;
    } else {
      this._params = __spreadValues({}, PoPageBlockedUserParamsDefault);
    }
  }
  get params() {
    return this._params;
  }
  /**
   * @optional
   *
   * @description
   *
   * Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.
   *
   * > Veja os valores válidos no *enum* `PoPageBlockedUserReason`.
   *
   * @default `PoPageBlockedUserReason.None`
   */
  set reason(value) {
    this._reason = Object.values(PoPageBlockedUserReason).includes(value) ? value : PoPageBlockedUserReasonDefault;
  }
  get reason() {
    return this._reason;
  }
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação de retorno da página.
   *
   * @default `/`
   */
  set urlBack(url) {
    this._urlBack = url;
  }
  get urlBack() {
    return this._urlBack;
  }
  static \u0275fac = function PoPageBlockedUserBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageBlockedUserBaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoPageBlockedUserBaseComponent,
    inputs: {
      contactEmail: [0, "p-contact-email", "contactEmail"],
      contactPhone: [0, "p-contact-phone", "contactPhone"],
      logo: [0, "p-logo", "logo"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      params: [0, "p-params", "params"],
      reason: [0, "p-reason", "reason"],
      urlBack: [0, "p-url-back", "urlBack"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserBaseComponent, [{
    type: Directive
  }], null, {
    contactEmail: [{
      type: Input,
      args: ["p-contact-email"]
    }],
    contactPhone: [{
      type: Input,
      args: ["p-contact-phone"]
    }],
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    params: [{
      type: Input,
      args: ["p-params"]
    }],
    reason: [{
      type: Input,
      args: ["p-reason"]
    }],
    urlBack: [{
      type: Input,
      args: ["p-url-back"]
    }]
  });
})();
var poPageBlockedUserContactItemMargin = 16;
var PoPageBlockedUserContactsComponent = class _PoPageBlockedUserContactsComponent {
  changeDetector = inject(ChangeDetectorRef);
  contactGroup;
  mailItem;
  phoneItem;
  overflowItem = true;
  _email;
  _phone;
  set email(value) {
    this._email = value;
    this.checkContactItemWidth();
  }
  get email() {
    return this._email;
  }
  set phone(value) {
    this._phone = value;
    this.checkContactItemWidth();
  }
  get phone() {
    return this._phone;
  }
  checkContactItemWidth() {
    this.overflowItem = true;
    if (this.phone && this.email) {
      this.changeDetector.detectChanges();
      const phoneWidth = this.phoneItem.nativeElement.offsetWidth;
      const mailWidth = this.mailItem.nativeElement.offsetWidth;
      const contactGroupHalfWidth = this.contactGroup.nativeElement.offsetWidth / 2 - poPageBlockedUserContactItemMargin;
      this.overflowItem = phoneWidth > contactGroupHalfWidth || mailWidth > contactGroupHalfWidth - poPageBlockedUserContactItemMargin;
    }
  }
  static \u0275fac = function PoPageBlockedUserContactsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageBlockedUserContactsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageBlockedUserContactsComponent,
    selectors: [["po-page-blocked-user-contacts"]],
    viewQuery: function PoPageBlockedUserContactsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c4, 7);
        \u0275\u0275viewQuery(_c5, 7);
        \u0275\u0275viewQuery(_c6, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contactGroup = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mailItem = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneItem = _t.first);
      }
    },
    inputs: {
      email: [0, "p-email", "email"],
      phone: [0, "p-phone", "phone"]
    },
    standalone: false,
    decls: 16,
    vars: 16,
    consts: [["contactGroup", ""], ["phoneItem", ""], ["mailItem", ""], [1, "po-page-blocked-user-contact-group", "po-row", "po-mb-3"], [1, "po-page-blocked-user-contact-item", 3, "ngClass"], ["target", "_self", 1, "po-page-blocked-user-link", "po-clickable", 3, "href"], [1, "po-page-blocked-user-contact-group-item"], ["p-icon", "ICON_TELEPHONE", 1, "po-page-blocked-user-contact-icon", "po-pr-1"], [1, "po-page-blocked-user-contact-text", "po-font-text"], [1, "po-page-blocked-user-contact-item", "po-page-blocked-user-contact-mail", 3, "ngClass"], ["p-icon", "ICON_MAIL", 1, "po-page-blocked-user-contact-icon", "po-pr-1"]],
    template: function PoPageBlockedUserContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3, 0)(2, "div", 4)(3, "a", 5)(4, "div", 6);
        \u0275\u0275element(5, "po-icon", 7);
        \u0275\u0275elementStart(6, "div", 8, 1);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 9)(10, "a", 5)(11, "div", 6);
        \u0275\u0275element(12, "po-icon", 10);
        \u0275\u0275elementStart(13, "div", 8, 2);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("po-invisible", !ctx.phone);
        \u0275\u0275property("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
        \u0275\u0275advance();
        \u0275\u0275classProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
        \u0275\u0275propertyInterpolate1("href", "tel:", ctx.phone, "", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.phone);
        \u0275\u0275advance();
        \u0275\u0275classProp("po-invisible", !ctx.email);
        \u0275\u0275property("ngClass", ctx.overflowItem ? "po-md-12" : "po-md-6");
        \u0275\u0275advance();
        \u0275\u0275classProp("po-page-blocked-user-contact-content-inline", ctx.overflowItem);
        \u0275\u0275propertyInterpolate1("href", "mailto:", ctx.email, "", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.email);
      }
    },
    dependencies: [NgClass, PoIconComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserContactsComponent, [{
    type: Component,
    args: [{
      selector: "po-page-blocked-user-contacts",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div #contactGroup class="po-page-blocked-user-contact-group po-row po-mb-3">
  <div
    class="po-page-blocked-user-contact-item"
    [class.po-invisible]="!phone"
    [ngClass]="overflowItem ? 'po-md-12' : 'po-md-6'"
  >
    <a
      class="po-page-blocked-user-link po-clickable"
      [class.po-page-blocked-user-contact-content-inline]="overflowItem"
      href="tel:{{ phone }}"
      target="_self"
    >
      <div class="po-page-blocked-user-contact-group-item">
        <po-icon class="po-page-blocked-user-contact-icon po-pr-1" p-icon="ICON_TELEPHONE"></po-icon>
        <div #phoneItem class="po-page-blocked-user-contact-text po-font-text">{{ phone }}</div>
      </div>
    </a>
  </div>
  <div
    class="po-page-blocked-user-contact-item po-page-blocked-user-contact-mail"
    [class.po-invisible]="!email"
    [ngClass]="overflowItem ? 'po-md-12' : 'po-md-6'"
  >
    <a
      class="po-page-blocked-user-link po-clickable"
      [class.po-page-blocked-user-contact-content-inline]="overflowItem"
      href="mailto:{{ email }}"
      target="_self"
    >
      <div class="po-page-blocked-user-contact-group-item">
        <po-icon class="po-page-blocked-user-contact-icon po-pr-1" p-icon="ICON_MAIL"></po-icon>
        <div #mailItem class="po-page-blocked-user-contact-text po-font-text">{{ email }}</div>
      </div>
    </a>
  </div>
</div>
`
    }]
  }], null, {
    contactGroup: [{
      type: ViewChild,
      args: ["contactGroup", {
        static: true
      }]
    }],
    mailItem: [{
      type: ViewChild,
      args: ["mailItem", {
        static: true
      }]
    }],
    phoneItem: [{
      type: ViewChild,
      args: ["phoneItem", {
        static: true
      }]
    }],
    email: [{
      type: Input,
      args: ["p-email"]
    }],
    phone: [{
      type: Input,
      args: ["p-phone"]
    }]
  });
})();
var poPageBlockedUserLiterals = {
  none: {
    pt: {
      title: "Opa!",
      firstPhrase: "Tivemos que bloquear essa tela temporariamente.",
      secondPhrase: "Mas n\xE3o se preocupe! Basta fazer seu login novamente."
    },
    en: {
      title: "Oops!",
      firstPhrase: "We had to temporarily block this screen.",
      secondPhrase: "But do not worry! Just sign in again."
    },
    es: {
      title: "Opa!",
      firstPhrase: "Tuvimos que bloquear esta pantalla temporalmente.",
      secondPhrase: "\xA1Pero no se preocupe! S\xF3lo tienes que iniciar sesi\xF3n de nuevo."
    },
    ru: {
      title: "\u041E\u0439!",
      firstPhrase: "\u041D\u0430\u043C \u043F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0440\u0430\u0437\u0434\u0435\u043B.",
      secondPhrase: "\u041D\u043E \u043D\u0435 \u0432\u043E\u043B\u043D\u0443\u0439\u0442\u0435\u0441\u044C! \u041F\u0440\u043E\u0441\u0442\u043E \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0435\u0449\u0435 \u0440\u0430\u0437."
    }
  },
  exceededAttempts: {
    pt: {
      title: "Opa!",
      firstPhrase: `Para sua seguran\xE7a, ap\xF3s {0} tentativa(s) de senha seu usu\xE1rio fica bloqueado e n\xE3o pode ser acessado em {1} hora(s) :( `,
      secondPhrase: "Isso \xE9 para evitar que hackers invadam sua conta.",
      thirdPhrase: "Mas n\xE3o se preocupe! Se voc\xEA for o dono da conta e apenas esqueceu sua senha, basta entrar em contato com o suporte."
    },
    en: {
      title: "Oops!",
      firstPhrase: `For your security, after {0} attempt(s) of password
        your user gets blocked and can not be accessed in {1} hour(s) :(`,
      secondPhrase: "This is to prevent hackers from hacking into your account.",
      thirdPhrase: "But do not worry! If you are the owner of the account and just forgot your password, just contact support."
    },
    es: {
      title: "Opa!",
      firstPhrase: `Para su seguridad, despu\xE9s de {0} intento(s) de contrase\xF1a
        su usuario queda bloqueado y no puede ser accedido en {1} hora(s) :(`,
      secondPhrase: "Esto es para evitar que los hackers invadan su cuenta.",
      thirdPhrase: `\xA1Pero no se preocupe! Si usted es el due\xF1o de la cuenta
        y acaba de olvidar su contrase\xF1a, simplemente p\xF3ngase en contacto con el soporte.`
    },
    ru: {
      title: "\u041E\u0439!",
      firstPhrase: "\u0414\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0441\u043B\u0435 {0} \u043F\u043E\u043F\u044B\u0442\u043E\u043A \u0432\u0432\u043E\u0434\u0430 \u043F\u0430\u0440\u043E\u043B\u044F\r\n\u0432\u0430\u0448 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438 \u043D\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {1} \u0447\u0430\u0441\u0430(\u043E\u0432) :(",
      secondPhrase: "\u042D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0445\u0430\u043A\u0435\u0440\u044B \u043D\u0435 \u043C\u043E\u0433\u043B\u0438 \u0432\u0437\u043B\u043E\u043C\u0430\u0442\u044C \u0432\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.",
      thirdPhrase: "\u041D\u043E \u043D\u0435 \u0432\u043E\u043B\u043D\u0443\u0439\u0442\u0435\u0441\u044C! \u0415\u0441\u043B\u0438 \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u043C \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u0431\u044B\u043B\u0438 \u0441\u0432\u043E\u0439 \u043F\u0430\u0440\u043E\u043B\u044C, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438."
    }
  },
  expiredPassword: {
    pt: {
      title: "Opa! Sua senha expirou",
      firstPhrase: `A cada {0} dia(s) \xE9 preciso criar uma nova senha por quest\xE3o de seguran\xE7a. Ap\xF3s esses {0} dia(s) seu acesso \xE9 bloqueado :(`,
      secondPhrase: "Mas n\xE3o se preocupe! Basta entrar em contato com o administrador do sistema."
    },
    en: {
      title: "Oops! Your Password has expired",
      firstPhrase: `Every {0} day(s) you need to create a new password for security reasons.
        After these {0} day(s) your access is blocked :(`,
      secondPhrase: "But do not worry! Just contact your system administrator."
    },
    es: {
      title: "Opa! Su contrase\xF1a ha caducado",
      firstPhrase: `Cada {0} d\xEDa(s) es necesario crear una nueva contrase\xF1a por razones de seguridad.
        Despu\xE9s de estos {0} d\xEDa(s) su acceso est\xE1 bloqueado :(`,
      secondPhrase: "\xA1Pero no se preocupe! S\xF3lo tienes que ponerse en contacto con el administrador del sistema."
    },
    ru: {
      title: "\u041E\u0439! \u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F \u0438\u0441\u0442\u0435\u043A",
      firstPhrase: "\u041A\u0430\u0436\u0434\u044B\u0435 {0} \u0434\u043D\u0435\u0439 \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0432 \u0446\u0435\u043B\u044F\u0445 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438.\r\n\u041F\u043E\u0441\u043B\u0435 {0} \u0434\u043D\u0435\u0439 \u0432\u0430\u0448 \u0434\u043E\u0441\u0442\u0443\u043F \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D :(",
      secondPhrase: "\u041D\u043E \u043D\u0435 \u0432\u043E\u043B\u043D\u0443\u0439\u0442\u0435\u0441\u044C! \u041F\u0440\u043E\u0441\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0432\u043E\u0435\u043C\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u043C\u0443 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443."
    }
  }
};
var PoPageBlockedUserReasonComponent = class _PoPageBlockedUserReasonComponent {
  changeDetector = inject(ChangeDetectorRef);
  params;
  reason;
  literalParams;
  literals;
  language;
  constructor() {
    const languageService = inject(PoLanguageService);
    this.language = languageService.getShortLanguage();
  }
  ngOnChanges(changes) {
    if (changes.reason || changes.params) {
      this.getLiterals();
    }
  }
  ngOnInit() {
    this.getLiterals();
  }
  getImageByReasonType() {
    let reasonImage;
    switch (this.reason) {
      case "none": {
        reasonImage = "big-lock";
        break;
      }
      case "exceededAttempts": {
        reasonImage = "blocked-user";
        break;
      }
      case "expiredPassword": {
        reasonImage = "expired";
        break;
      }
    }
    return `./assets/images/${reasonImage}.svg`;
  }
  getParams() {
    this.literalParams = this.reason === "expiredPassword" ? [this.params.days, this.params.days] : [this.params.attempts, this.params.hours];
  }
  getLiterals() {
    this.getParams();
    this.literals = __spreadValues(__spreadValues({}, poPageBlockedUserLiterals[this.reason][poLocaleDefault]), poPageBlockedUserLiterals[this.reason][this.language]);
    this.changeDetector.detectChanges();
  }
  static \u0275fac = function PoPageBlockedUserReasonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageBlockedUserReasonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageBlockedUserReasonComponent,
    selectors: [["po-page-blocked-user-reason"]],
    inputs: {
      params: [0, "p-params", "params"],
      reason: [0, "p-reason", "reason"]
    },
    standalone: false,
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 12,
    vars: 8,
    consts: [[1, "po-page-blocked-user-reason-content"], [1, "po-page-blocked-user-image", "po-mb-3", 3, "src"], [1, "po-page-blocked-user-header", "po-mb-md-3", "po-row"], [1, "po-md-12"], [1, "po-page-blocked-user-text", "po-font-text", "po-row"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12", "po-page-blocked-user-text-bold"], [1, "po-mb-sm-2", "po-mb-md-3", "po-md-12"]],
    template: function PoPageBlockedUserReasonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "poI18n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, PoPageBlockedUserReasonComponent_Conditional_11_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.getImageByReasonType(), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.literals == null ? null : ctx.literals.title);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, ctx.literals == null ? null : ctx.literals.firstPhrase, ctx.literalParams), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.literals == null ? null : ctx.literals.secondPhrase);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.literals == null ? null : ctx.literals.thirdPhrase) ? 11 : -1);
      }
    },
    dependencies: [PoI18nPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserReasonComponent, [{
    type: Component,
    args: [{
      selector: "po-page-blocked-user-reason",
      standalone: false,
      template: '<div class="po-page-blocked-user-reason-content">\n  <img class="po-page-blocked-user-image po-mb-3" [src]="getImageByReasonType()" />\n  <div class="po-page-blocked-user-header po-mb-md-3 po-row">\n    <div class="po-md-12">{{ literals?.title }}</div>\n  </div>\n  <div class="po-page-blocked-user-text po-font-text po-row">\n    <div class="po-mb-sm-2 po-mb-md-3 po-md-12 po-page-blocked-user-text-bold">\n      {{ literals?.firstPhrase | poI18n: literalParams }}\n    </div>\n    <div class="po-mb-sm-2 po-mb-md-3 po-md-12">{{ literals?.secondPhrase }}</div>\n    @if (literals?.thirdPhrase) {\n      <div class="po-mb-sm-2 po-mb-md-3 po-md-12">{{ literals?.thirdPhrase }}</div>\n    }\n  </div>\n</div>\n'
    }]
  }], () => [], {
    params: [{
      type: Input,
      args: ["p-params"]
    }],
    reason: [{
      type: Input,
      args: ["p-reason"]
    }]
  });
})();
var poPageBlockedUserButtonLiterals = {
  en: {
    primaryButton: "Back to home screen"
  },
  es: {
    primaryButton: "Volver al inicio"
  },
  pt: {
    primaryButton: "Voltar para o in\xEDcio"
  },
  ru: {
    primaryButton: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043D\u0430\u0447\u0430\u043B\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"
  }
};
var PoPageBlockedUserComponent = class _PoPageBlockedUserComponent extends PoPageBlockedUserBaseComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  literals;
  constructor() {
    const languageService = inject(PoLanguageService);
    super();
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageBlockedUserButtonLiterals[poLocaleDefault]), poPageBlockedUserButtonLiterals[language]);
  }
  ngOnInit() {
    this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
  }
  navigateTo(url) {
    isExternalLink(url) ? window.open(url) : this.router.navigate([url || "/"]);
  }
  checkingForMetadataProperty(object, property) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      return object[property];
    }
  }
  checkingForRouteMetadata(data) {
    if (Object.keys(data).length !== 0) {
      this.contactEmail = this.checkingForMetadataProperty(data, "contactEmail") || this.contactEmail;
      this.contactPhone = this.checkingForMetadataProperty(data, "contactPhone") || this.contactPhone;
      this.reason = this.checkingForMetadataProperty(data, "reason") || this.reason;
      this.urlBack = this.checkingForMetadataProperty(data, "urlBack") || this.urlBack;
    }
  }
  static \u0275fac = function PoPageBlockedUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageBlockedUserComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageBlockedUserComponent,
    selectors: [["po-page-blocked-user"]],
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 8,
    vars: 10,
    consts: [[1, "po-page-blocked-user-wrapper"], [1, "po-page-background-wrap"], [3, "p-hide-logo", "p-logo", "p-secondary-logo", "p-components-size"], [3, "p-params", "p-reason"], [1, "po-page-blocked-user-mobile-bottom-alignment"], [3, "p-email", "p-phone"], [1, "po-row"], ["p-kind", "primary", 1, "po-lg-12", "po-sm-12", "po-page-blocked-user-button", 3, "p-click", "p-label", "p-size"]],
    template: function PoPageBlockedUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "po-page-background", 2);
        \u0275\u0275element(3, "po-page-blocked-user-reason", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "po-page-blocked-user-contacts", 5);
        \u0275\u0275elementStart(6, "div", 6)(7, "po-button", 7);
        \u0275\u0275listener("p-click", function PoPageBlockedUserComponent_Template_po_button_p_click_7_listener() {
          return ctx.navigateTo(ctx.urlBack);
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("p-hide-logo", true)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo)("p-components-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275property("p-params", ctx.params)("p-reason", ctx.reason);
        \u0275\u0275advance(2);
        \u0275\u0275property("p-email", ctx.contactEmail)("p-phone", ctx.contactPhone);
        \u0275\u0275advance(2);
        \u0275\u0275property("p-label", ctx.literals == null ? null : ctx.literals.primaryButton)("p-size", ctx.componentsSize);
      }
    },
    dependencies: [PoButtonComponent, PoPageBackgroundComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserComponent, [{
    type: Component,
    args: [{
      selector: "po-page-blocked-user",
      standalone: false,
      template: '<div class="po-page-blocked-user-wrapper">\n  <div class="po-page-background-wrap">\n    <po-page-background\n      [p-hide-logo]="true"\n      [p-logo]="logo"\n      [p-secondary-logo]="secondaryLogo"\n      [p-components-size]="componentsSize"\n    >\n      <po-page-blocked-user-reason [p-params]="params" [p-reason]="reason"> </po-page-blocked-user-reason>\n\n      <div class="po-page-blocked-user-mobile-bottom-alignment">\n        <po-page-blocked-user-contacts [p-email]="contactEmail" [p-phone]="contactPhone">\n        </po-page-blocked-user-contacts>\n\n        <div class="po-row">\n          <po-button\n            class="po-lg-12 po-sm-12 po-page-blocked-user-button"\n            p-kind="primary"\n            [p-label]="literals?.primaryButton"\n            [p-size]="componentsSize"\n            (p-click)="navigateTo(urlBack)"\n          >\n          </po-button>\n        </div>\n      </div>\n    </po-page-background>\n  </div>\n</div>\n'
    }]
  }], () => [], null);
})();
var PoPageBlockedUserModule = class _PoPageBlockedUserModule {
  static \u0275fac = function PoPageBlockedUserModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageBlockedUserModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageBlockedUserModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageBlockedUserModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, PoModule, PoPageBackgroundModule],
      declarations: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent],
      exports: [PoPageBlockedUserComponent, PoPageBlockedUserContactsComponent, PoPageBlockedUserReasonComponent]
    }]
  }], null, null);
})();
var poPageChangePasswordLiterals = {
  en: {
    backButton: "Back",
    confirmPassword: "Confirm password",
    createNewPassword: "Create new password",
    createNewPasswordPhrase: "Protect your account with a personal password created by you",
    currentPassword: "Current password",
    enterSystemButton: "Enter the system",
    forgotPassword: "Forgot your password?",
    newPassword: "New password",
    passwordSuccessfullyCreated: "Password successfully created!",
    passwordSuccessfullyUpdated: "Password successfully updated!",
    requirements: "Password requirements",
    safetyTips: "Safety tips!",
    safetyTipsFirst: "is used in other accounts;",
    safetyTipsPhrase: "Avoid a password that:",
    safetyTipsSecond: "has personal information like your name, nickname or family names;",
    safetyTipsThird: 'that uses obvious sequences like "123" or obvious words like "password";',
    saveButton: "Save"
  },
  es: {
    backButton: "Volver",
    confirmPassword: "Confirmar se\xF1a",
    createNewPassword: "Crear nueva contrase\xF1a",
    createNewPasswordPhrase: "Proteger su cuenta con una contrase\xF1a personal creada por usted",
    currentPassword: "Contrase\xF1a actual",
    enterSystemButton: "Entrar en el sistema",
    forgotPassword: "\xBFOlvidaste tu contrase\xF1a?",
    newPassword: "Nueva contrase\xF1a",
    passwordSuccessfullyCreated: "Contrase\xF1a creada correctamente!",
    passwordSuccessfullyUpdated: "Contrase\xF1a correctamente actualizada!",
    requirements: "Requisitos de contrase\xF1a",
    safetyTips: "Consejos de seguridad!",
    safetyTipsFirst: "se utilice en otras cuentas;",
    safetyTipsPhrase: "Evite una contrase\xF1a que:",
    safetyTipsSecond: "utiliza informaci\xF3n personal como su nombre, apellido o nombre de familia;",
    safetyTipsThird: 'utilice secuencias muy obvias como "1234" o "abcd" o palabras obvias como "contrase\xF1a";',
    saveButton: "Guardar"
  },
  pt: {
    backButton: "Voltar",
    confirmPassword: "Confirmar senha",
    createNewPassword: "Criar nova senha",
    createNewPasswordPhrase: "Proteja sua conta com uma senha pessoal criada por voc\xEA",
    currentPassword: "Senha atual",
    enterSystemButton: "Entrar no sistema",
    forgotPassword: "Esqueceu sua senha?",
    newPassword: "Nova senha",
    passwordSuccessfullyCreated: "Senha criada com sucesso!",
    passwordSuccessfullyUpdated: "Senha alterada com sucesso!",
    requirements: "Requisitos de senha",
    safetyTips: "Dicas de seguran\xE7a!",
    safetyTipsFirst: "seja usada em outras contas;",
    safetyTipsPhrase: "Evite uma senha que:",
    safetyTipsSecond: "usa informa\xE7\xF5es pessoais como seu nome, apelido ou nome de familiares;",
    safetyTipsThird: 'use sequ\xEAncias muito \xF3bvias como "1234" ou "abcd" ou palavras \xF3bvias como \u201Csenha\u201D;',
    saveButton: "Salvar"
  },
  ru: {
    backButton: "\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435",
    confirmPassword: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
    createNewPassword: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    createNewPasswordPhrase: "\u0417\u0430\u0449\u0438\u0442\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F.",
    currentPassword: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    enterSystemButton: "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443",
    forgotPassword: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
    newPassword: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    passwordSuccessfullyCreated: "\u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D!",
    passwordSuccessfullyUpdated: "\u041F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D!",
    requirements: "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u043F\u0430\u0440\u043E\u043B\u044E",
    safetyTips: "\u0421\u043E\u0432\u0435\u0442\u044B \u043F\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438!",
    safetyTipsFirst: "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0447\u0435\u0442\u0430\u0445;",
    safetyTipsPhrase: "\u0418\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439:",
    safetyTipsSecond: "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043B\u0438\u0447\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u0442\u0430\u043A\u0443\u044E \u200B\u200B\u043A\u0430\u043A \u0432\u0430\u0448\u0435 \u0438\u043C\u044F, \u0444\u0430\u043C\u0438\u043B\u0438\u044E \u0438\u043B\u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044E;",
    safetyTipsThird: '\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043E\u0447\u0435\u043D\u044C \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B\u0435 \u0441\u0442\u0440\u043E\u043A\u0438, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A "1234" \u0438\u043B\u0438 "abcd", \u0438\u043B\u0438 \u0442\u0430\u043A\u0438\u0435 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430, \u043A\u0430\u043A "\u043F\u0430\u0440\u043E\u043B\u044C";',
    saveButton: "\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C"
  }
};
var PoPageChangePasswordBaseComponent = class _PoPageChangePasswordBaseComponent {
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada na parte superior.
   *
   * > Caso seja indefinida o espaço se mantém preservado porém vazio.
   */
  logo;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  /**
   * Token para solicitação de troca/recuperação de senha.
   *
   * > Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.
   */
  token;
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação de retorno da página.
   *
   * > O botão `Voltar` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `p-hide-current-password` for
   * falsa.
   *
   * @default `/`
   */
  urlBack = "/";
  /**
   * Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `p-submit` será ignorado e o componente adquirirá
   * automatização para o processo de cadastro/troca de senha.
   *
   * ### Processo
   * Ao digitar um valor válido nos campos de senha e pressionar **salvar**,
   * o componente fará uma requisição `POST` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
   * usuário.
   *
   * ```
   * body {
   *  token?: token,
   *  oldPassword?: oldPassword,
   *  newPassword: newPassword
   * }
   * ```
   *
   * O código de resposta HTTP de status esperado é `204`.
   *
   * Em caso de **sucesso**, será exibida a modal de confirmação de senha alterada.
   *
   * > O token será informado pela propriedade `p-token`do componente ou por um *query parameter* na URL do template.
   *
   * *Processo finalizado.*
   *
   * _______________
   *
   * #### Praticidade
   * As informações do serviço de autenticação também podem ser transmitidas diretamente pelas configuraçãos de rota e, desta maneira,
   * dispensa-se qualquer menção e/ou importação do componente `po-page-change-password` no restante da aplicação. O exemplo abaixo
   * exemplifica a forma dinâmica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `/change-password`, e
   * também como ele se comunica com o serviço para efetuação do processo de troca de senha do usuário e solicitação de nova senha.
   * Basta definir nas configurações de rota:
   *
   *
   * ```
   *   import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';
   *
   *   ...
   *   const routes: Routes = [
   *     {
   *       path: 'change-password', component: PoPageChangePasswordComponent, data: {
   *         serviceApi: 'https://po-ui.io/sample/api/new-password',
   *         recovery: {
   *           url: 'https://po-ui.io/sample/api/users',
   *           type: PoModalPasswordRecoveryType.All,
   *           contactMail: 'dev.po@po-ui.com',
   *           phoneMask: '9-999-999-9999'
   *         }
   *       }
   *     }
   *     ...
   *   ];
   *
   *   @NgModule({
   *     imports: [RouterModule.forRoot(routes)],
   *     exports: [RouterModule]
   *   })
   *   export class AppRoutingModule { }
   * ```
   *
   *
   * O metadado `serviceApi` deve ser a **url** para requisição dos recursos de troca de senha. E `recovery` é a interface
   * `PoPageChangePasswordRecovery` responsável pelas especificações contidas na modal de recuperação de senha.
   *
   * > É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.
   *
   */
  urlNewPassword;
  /**
   * @optional
   *
   * @description
   *
   * Função executada ao submeter o form pelo botão salvar.
   *
   * Caso definida essa função, a modal de confirmação não aparece, mas pode ser chamada pelo
   * método `openConfirmation`. Exemplo:
   *
   * ```
   * @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;
   *
   * onSubmit() {
   *  this.changePassword.openConfirmation();
   * }
   *
   * ```
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-new-password`.
   */
  submit = new EventEmitter();
  confirmPassword;
  currentPassword;
  modalAction;
  newPassword;
  recoveryUrlType;
  showRequirements;
  validatorChange;
  _componentsSize = void 0;
  _hideCurrentPassword = false;
  _recovery;
  _requirements = [];
  _urlHome = "/";
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * @optional
   *
   * @description
   *
   * Esconde o campo `Senha atual` para que o template seja para criação de senha.
   *
   * @default `false`
   */
  set hideCurrentPassword(value) {
    this._hideCurrentPassword = convertToBoolean(value);
  }
  get hideCurrentPassword() {
    return this._hideCurrentPassword;
  }
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação do link `Esqueceu a senha`.
   *
   * A propriedade aceita os seguintes tipos:
   *
   * - **String**: informe uma url externa ou uma rota válida;
   * - **Function**: pode-se customizar a ação. Para esta possilidade basta atribuir:
   *   ```
   *   <po-page-change-password>
   *     [recovery]="this.myFunc.bind(this)";
   *   </po-page-change-password>
   *   ```
   *
   * - **PoPageChangePasswordRecovery**: cria-se vínculo automático com o template **po-modal-password-recovery**.
   *   O objeto deve conter a **url** para requisição dos recursos e pode-se definir o **tipo** de modal para recuperação de senha,
   *   **email** para contato e **máscara** do campo de telefone.
   *
   * > Caso não tenha valor o link `Esqueceu a senha` desaparece.
   */
  set recovery(value) {
    this._recovery = value;
    if (isTypeof(value, "string")) {
      this.recoveryUrlType = isExternalLink(value) ? "externalLink" : "internalLink";
    }
  }
  get recovery() {
    return this._recovery;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de regras para criação e alteração de senha.
   */
  set requirements(value) {
    this._requirements = value || [];
    this.showRequirements = this._requirements.length > 0;
  }
  get requirements() {
    return this._requirements;
  }
  /**
   * @optional
   *
   * @description
   *
   * URL para a ação do botão `Entrar no sistema` da modal de confirmação que aparece após salvar a senha ou se chamada pelo método
   * `openConfirmation`.
   *
   * @default `/`
   */
  set urlHome(value) {
    this._urlHome = value;
    this.modalAction.action = this.navigateTo.bind(this, this.urlHome);
  }
  get urlHome() {
    return this._urlHome;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define a propriedade nativa `autocomplete` do campo como `off`.
   *
   * > No input de senha(`po-password`) será definido como `new-password`.
   *
   * @default `true`
   */
  noAutocompletePassword = true;
  static \u0275fac = function PoPageChangePasswordBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageChangePasswordBaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoPageChangePasswordBaseComponent,
    inputs: {
      logo: [0, "p-logo", "logo"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      token: [0, "p-token", "token"],
      urlBack: [0, "p-url-back", "urlBack"],
      urlNewPassword: [0, "p-url-new-password", "urlNewPassword"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      hideCurrentPassword: [0, "p-hide-current-password", "hideCurrentPassword"],
      recovery: [0, "p-recovery", "recovery"],
      requirements: [0, "p-requirements", "requirements"],
      urlHome: [0, "p-url-home", "urlHome"],
      noAutocompletePassword: [0, "p-no-autocomplete-password", "noAutocompletePassword"]
    },
    outputs: {
      submit: "p-submit"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordBaseComponent, [{
    type: Directive
  }], null, {
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    token: [{
      type: Input,
      args: ["p-token"]
    }],
    urlBack: [{
      type: Input,
      args: ["p-url-back"]
    }],
    urlNewPassword: [{
      type: Input,
      args: ["p-url-new-password"]
    }],
    submit: [{
      type: Output,
      args: ["p-submit"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    hideCurrentPassword: [{
      type: Input,
      args: ["p-hide-current-password"]
    }],
    recovery: [{
      type: Input,
      args: ["p-recovery"]
    }],
    requirements: [{
      type: Input,
      args: ["p-requirements"]
    }],
    urlHome: [{
      type: Input,
      args: ["p-url-home"]
    }],
    noAutocompletePassword: [{
      type: Input,
      args: ["p-no-autocomplete-password"]
    }]
  });
})();
var PoPageChangePasswordService = class _PoPageChangePasswordService {
  http = inject(HttpClient);
  post(url, item) {
    return this.http.post(url, item, {
      observe: "response"
    });
  }
  static \u0275fac = function PoPageChangePasswordService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageChangePasswordService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageChangePasswordService,
    factory: _PoPageChangePasswordService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PoPageChangePasswordComponent = class _PoPageChangePasswordComponent extends PoPageChangePasswordBaseComponent {
  activatedRoute = inject(ActivatedRoute);
  route = inject(ActivatedRoute);
  router = inject(Router);
  service = inject(PoPageChangePasswordService);
  poComponentInjector = inject(PoComponentInjectorService);
  modal;
  pageChangePassword;
  passwordForm;
  literals = poPageChangePasswordLiterals[poLocaleDefault];
  modalAction = {
    action: this.navigateTo.bind(this, this.urlHome),
    label: this.literals.enterSystemButton
  };
  newPasswordSubscription;
  componentRef = null;
  constructor() {
    const languageService = inject(PoLanguageService);
    super();
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageChangePasswordLiterals[poLocaleDefault]), poPageChangePasswordLiterals[language]);
  }
  ngAfterViewInit() {
    if (this.urlNewPassword) {
      this.subscribeToTokenParameter();
    }
  }
  ngOnDestroy() {
    if (this.newPasswordSubscription) {
      this.newPasswordSubscription.unsubscribe();
    }
  }
  ngOnInit() {
    this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
  }
  navigateTo(url) {
    isExternalLink(url) ? window.open(url) : this.router.navigate([url || "/"]);
  }
  onForgotPasswordClick(recovery) {
    if (isTypeof(recovery, "function")) {
      recovery();
    } else {
      this.createModalPasswordRecoveryComponent(recovery);
    }
  }
  onLoginSubmit() {
    const form = this.getLoginForm();
    if (this.urlNewPassword) {
      this.postUrlNewPassword(form);
    } else if (this.submit && this.submit.observers.length) {
      this.emitSubmit(form);
    }
  }
  /**
   * Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `p-url-home`
   */
  openConfirmation() {
    this.modal.open();
  }
  validatePassword() {
    const controls = this.passwordForm.form.controls;
    const controlConfirmPassword = controls["confirmPassword"];
    const controlNewPassword = controls["newPassword"];
    if (!this.newPassword) {
      this.setFormErrors({
        "required": true
      }, [controlNewPassword]);
    } else if (!this.confirmPassword) {
      this.setFormErrors({
        "required": true
      }, [controlConfirmPassword]);
    } else if (this.newPassword && this.confirmPassword && this.newPassword !== this.confirmPassword) {
      this.setFormErrors({
        "equalPassword": true
      }, [controlNewPassword, controlConfirmPassword]);
    } else {
      this.setFormErrors(null, [controlConfirmPassword, controlNewPassword]);
    }
    if (this.requirements.length && this.requirements.find((requirement) => this.validateRequirement(requirement) === false)) {
      this.setFormErrors({
        "requirement": true
      }, [controlNewPassword]);
    }
  }
  validateRequirement(requirement) {
    return typeof requirement.status === "function" ? requirement.status(this.newPassword) : requirement.status;
  }
  checkingForMetadataProperty(object, property) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      return object[property];
    }
  }
  checkingForRouteMetadata(data) {
    if (Object.keys(data).length !== 0) {
      this.urlNewPassword = this.checkingForMetadataProperty(data, "serviceApi") || this.urlNewPassword;
      this.recovery = this.checkingForMetadataProperty(data, "recovery") || this.recovery;
      this.hideCurrentPassword = this.checkingForMetadataProperty(data, "hideCurrentPassword") || this.hideCurrentPassword;
    }
  }
  createModalPasswordRecoveryComponent(recovery) {
    if (this.componentRef) {
      this.poComponentInjector.destroyComponentInApplication(this.componentRef);
    }
    this.componentRef = this.poComponentInjector.createComponentInApplication(PoModalPasswordRecoveryComponent);
    this.componentRef.instance.recovery = recovery.url;
    this.componentRef.instance.contactEmail = recovery.contactMail;
    this.componentRef.instance.phoneMask = recovery.phoneMask;
    this.componentRef.instance.type = recovery.type || PoModalPasswordRecoveryType.Email;
    this.componentRef.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.componentRef.instance.open();
    });
  }
  emitSubmit(form) {
    this.submit.emit(form);
  }
  getLoginForm() {
    return {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };
  }
  postUrlNewPassword(form) {
    form["token"] = this.token;
    this.service.post(this.urlNewPassword, form).subscribe((response) => {
      if (response.status === 204) {
        this.openConfirmation();
      }
    });
  }
  setFormErrors(error, controls) {
    controls.forEach((control) => {
      control.setErrors(error);
    });
  }
  subscribeToTokenParameter() {
    this.route.queryParams.subscribe((params) => {
      const token = params["token"];
      if (token) {
        this.token = token;
      }
    });
  }
  static \u0275fac = function PoPageChangePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageChangePasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageChangePasswordComponent,
    selectors: [["po-page-change-password"]],
    viewQuery: function PoPageChangePasswordComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(PoModalComponent, 7);
        \u0275\u0275viewQuery(_c7, 7, ViewContainerRef);
        \u0275\u0275viewQuery(_c8, 7, NgForm);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modal = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pageChangePassword = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.passwordForm = _t.first);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 43,
    vars: 32,
    consts: [["pageChangePassword", ""], ["passwordForm", "ngForm"], [1, "po-page-change-password-wrapper"], [1, "po-page-change-password-container"], [1, "po-page-change-password", 3, "p-components-size", "p-logo", "p-secondary-logo"], [1, "po-page-blocked-user-header", "po-row"], [1, "po-md-12"], [1, "po-md-12", "po-text-center", "po-font-text"], [1, "po-row", "po-mt-3", "po-mt-sm-1"], [1, "po-md-6", 3, "ngClass"], [1, "po-text-center", "po-mb-sm-1", "po-mb-2"], ["name", "newPassword", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label", "p-no-autocomplete", "p-size"], ["name", "confirmPassword", "p-required", "", 3, "ngModelChange", "p-change-model", "ngModel", "p-label", "p-no-autocomplete", "p-size"], [1, "po-md-6", "po-page-change-password-required-container"], [1, "po-sm-12"], [1, "po-page-change-password-tips", "po-row"], [1, "po-md-2", "po-mr-3"], ["alt", "Blocked user image", "src", "./assets/images/big-lock.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], [1, "po-md-9", "po-page-change-password-tips-text"], [1, "po-font-text-bold", "po-pb-1"], [1, "po-font-text-small"], [1, "po-row", "po-pb-1"], [1, "po-page-change-password-buttons", "po-row"], [1, "po-sm-12", "po-mobile-only"], [1, "po-sm-6", "po-mb-sm-1", 3, "p-label", "p-size"], ["p-kind", "primary", 3, "p-click", "ngClass", "p-disabled", "p-label", "p-size"], ["p-hide-close", "", "p-size", "auto", 3, "p-primary-action", "p-components-size", "p-title"], [1, "po-text-center"], ["alt", "Blocked user image", "src", "./assets/images/success.svg", 1, "po-page-change-password-lock-image", "po-mb-3"], ["name", "currentPassword", "p-required", "", 3, "ngModelChange", "ngModel", "p-label", "p-no-autocomplete", "p-size"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "routerLink"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", 3, "href"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", "po-clickable"], [1, "po-font-text-bold", "po-page-change-password-forgot-password", "po-clickable", 3, "click"], [1, "po-page-change-password-required-list"], [1, "po-page-change-password-required-item"], [1, "po-mb-1", "po-font-text-bold", "po-page-change-password-required-title"], [1, "po-icon", "po-page-change-password-required-icon", 3, "p-icon"], [1, "po-page-change-password-required-text", "po-font-text"], [1, "po-sm-6", "po-mb-sm-1", 3, "p-click", "p-label", "p-size"]],
    template: function PoPageChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "po-page-background", 4)(4, "div", 5)(5, "div", 6);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "form", null, 1)(11, "div", 8)(12, "div", 9);
        \u0275\u0275template(13, PoPageChangePasswordComponent_Conditional_13_Template, 2, 4, "div")(14, PoPageChangePasswordComponent_Conditional_14_Template, 4, 3, "div", 10);
        \u0275\u0275elementStart(15, "div")(16, "po-password", 11);
        \u0275\u0275twoWayListener("ngModelChange", function PoPageChangePasswordComponent_Template_po_password_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("p-change-model", function PoPageChangePasswordComponent_Template_po_password_p_change_model_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.validatePassword());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "po-password", 12);
        \u0275\u0275twoWayListener("ngModelChange", function PoPageChangePasswordComponent_Template_po_password_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("p-change-model", function PoPageChangePasswordComponent_Template_po_password_p_change_model_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.validatePassword());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(19, PoPageChangePasswordComponent_Conditional_19_Template, 8, 1, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "po-divider", 14);
        \u0275\u0275elementStart(21, "div", 15)(22, "div", 16);
        \u0275\u0275element(23, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 18)(25, "div", 19);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 20)(28, "div", 21);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 21);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 21);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 21);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 22);
        \u0275\u0275element(37, "po-divider", 23);
        \u0275\u0275template(38, PoPageChangePasswordComponent_Conditional_38_Template, 1, 2, "po-button", 24);
        \u0275\u0275elementStart(39, "po-button", 25);
        \u0275\u0275listener("p-click", function PoPageChangePasswordComponent_Template_po_button_p_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onLoginSubmit());
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "po-modal", 26)(41, "div", 27);
        \u0275\u0275element(42, "img", 28);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const passwordForm_r7 = \u0275\u0275reference(10);
        \u0275\u0275advance(3);
        \u0275\u0275property("p-components-size", ctx.componentsSize)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.literals.createNewPassword);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.literals.createNewPasswordPhrase, " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c9, !ctx.showRequirements));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideCurrentPassword ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideCurrentPassword && ctx.recovery ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.newPassword);
        \u0275\u0275property("p-label", ctx.literals.newPassword)("p-no-autocomplete", ctx.noAutocompletePassword)("p-size", ctx.componentsSize);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
        \u0275\u0275property("p-label", ctx.literals.confirmPassword)("p-no-autocomplete", ctx.noAutocompletePassword)("p-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRequirements ? 19 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.literals.safetyTips);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.literals.safetyTipsPhrase);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u2022 ", ctx.literals.safetyTipsFirst, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u2022 ", ctx.literals.safetyTipsSecond, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u2022 ", ctx.literals.safetyTipsThird, "");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.hideCurrentPassword ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.hideCurrentPassword ? "po-md-12" : "po-sm-6")("p-disabled", passwordForm_r7.invalid)("p-label", ctx.literals.saveButton)("p-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275property("p-primary-action", ctx.modalAction)("p-components-size", ctx.componentsSize)("p-title", ctx.hideCurrentPassword ? ctx.literals.passwordSuccessfullyCreated : ctx.literals.passwordSuccessfullyUpdated);
      }
    },
    dependencies: [NgClass, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, PoButtonComponent, PoContainerComponent, PoDividerComponent, PoPasswordComponent, PoIconComponent, PoModalComponent, PoPageBackgroundComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordComponent, [{
    type: Component,
    args: [{
      selector: "po-page-change-password",
      standalone: false,
      template: `<div class="po-page-change-password-wrapper" #pageChangePassword>
  <div class="po-page-change-password-container">
    <po-page-background
      class="po-page-change-password"
      [p-components-size]="componentsSize"
      [p-logo]="logo"
      [p-secondary-logo]="secondaryLogo"
    >
      <div class="po-page-blocked-user-header po-row">
        <div class="po-md-12">{{ literals.createNewPassword }}</div>
        <div class="po-md-12 po-text-center po-font-text">
          {{ literals.createNewPasswordPhrase }}
        </div>
      </div>

      <form #passwordForm="ngForm">
        <div class="po-row po-mt-3 po-mt-sm-1">
          <div class="po-md-6" [ngClass]="{ 'po-offset-md-3 po-offset-lg-3 po-offset-xl-3': !showRequirements }">
            @if (!hideCurrentPassword) {
              <div>
                <po-password
                  name="currentPassword"
                  [(ngModel)]="currentPassword"
                  p-required
                  [p-label]="literals.currentPassword"
                  [p-no-autocomplete]="noAutocompletePassword"
                  [p-size]="componentsSize"
                >
                </po-password>
              </div>
            }
            @if (!hideCurrentPassword && recovery) {
              <div class="po-text-center po-mb-sm-1 po-mb-2">
                @if (recoveryUrlType === 'internalLink') {
                  <a class="po-font-text-bold po-page-change-password-forgot-password" [routerLink]="recovery">
                    {{ literals.forgotPassword }}
                  </a>
                }
                @if (recoveryUrlType === 'externalLink') {
                  <a class="po-font-text-bold po-page-change-password-forgot-password" [href]="recovery">
                    {{ literals.forgotPassword }}
                  </a>
                }
                @if (!recoveryUrlType) {
                  <a
                    class="po-font-text-bold po-page-change-password-forgot-password po-clickable"
                    (click)="onForgotPasswordClick(recovery)"
                  >
                    {{ literals.forgotPassword }}
                  </a>
                }
              </div>
            }
            <div>
              <po-password
                name="newPassword"
                [(ngModel)]="newPassword"
                p-required
                [p-label]="literals.newPassword"
                (p-change-model)="validatePassword()"
                [p-no-autocomplete]="noAutocompletePassword"
                [p-size]="componentsSize"
              >
              </po-password>
            </div>
            <div>
              <po-password
                name="confirmPassword"
                [(ngModel)]="confirmPassword"
                p-required
                [p-label]="literals.confirmPassword"
                (p-change-model)="validatePassword()"
                [p-no-autocomplete]="noAutocompletePassword"
                [p-size]="componentsSize"
              >
              </po-password>
            </div>
          </div>
          @if (showRequirements) {
            <div class="po-md-6 po-page-change-password-required-container">
              <po-container>
                <ul class="po-page-change-password-required-list">
                  <li class="po-page-change-password-required-item">
                    <p class="po-mb-1 po-font-text-bold po-page-change-password-required-title">
                      {{ literals?.requirements }}
                    </p>
                  </li>
                  @for (requirement of requirements; track requirement) {
                    <li class="po-page-change-password-required-item">
                      <po-icon
                        class="po-icon po-page-change-password-required-icon"
                        [p-icon]="
                          validateRequirement(requirement)
                            ? 'ICON_OK po-page-change-password-required-ok'
                            : 'ICON_MINUS po-page-change-password-required-minus'
                        "
                      >
                      </po-icon>
                      <p class="po-page-change-password-required-text po-font-text">
                        {{ requirement.requirement }}
                      </p>
                    </li>
                  }
                </ul>
              </po-container>
            </div>
          }
        </div>
      </form>

      <po-divider class="po-sm-12"></po-divider>

      <div class="po-page-change-password-tips po-row">
        <div class="po-md-2 po-mr-3">
          <img
            class="po-page-change-password-lock-image po-mb-3"
            alt="Blocked user image"
            src="./assets/images/big-lock.svg"
          />
        </div>
        <div class="po-md-9 po-page-change-password-tips-text">
          <div class="po-font-text-bold po-pb-1">{{ literals.safetyTips }}</div>
          <div class="po-font-text-small">
            <div class="po-row po-pb-1">{{ literals.safetyTipsPhrase }}</div>
            <div class="po-row po-pb-1">\u2022 {{ literals.safetyTipsFirst }}</div>
            <div class="po-row po-pb-1">\u2022 {{ literals.safetyTipsSecond }}</div>
            <div class="po-row po-pb-1">\u2022 {{ literals.safetyTipsThird }}</div>
          </div>
        </div>
      </div>

      <div class="po-page-change-password-buttons po-row">
        <po-divider class="po-sm-12 po-mobile-only"></po-divider>

        @if (!hideCurrentPassword) {
          <po-button
            class="po-sm-6 po-mb-sm-1"
            [p-label]="literals.backButton"
            [p-size]="componentsSize"
            (p-click)="navigateTo(urlBack)"
          >
          </po-button>
        }

        <po-button
          [ngClass]="hideCurrentPassword ? 'po-md-12' : 'po-sm-6'"
          p-kind="primary"
          [p-disabled]="passwordForm.invalid"
          [p-label]="literals.saveButton"
          [p-size]="componentsSize"
          (p-click)="onLoginSubmit()"
        >
        </po-button>
      </div>
    </po-page-background>
  </div>
</div>

<po-modal
  [p-primary-action]="modalAction"
  p-hide-close
  p-size="auto"
  [p-components-size]="componentsSize"
  [p-title]="hideCurrentPassword ? literals.passwordSuccessfullyCreated : literals.passwordSuccessfullyUpdated"
>
  <div class="po-text-center">
    <img
      alt="Blocked user image"
      class="po-page-change-password-lock-image po-mb-3"
      src="./assets/images/success.svg"
    />
  </div>
</po-modal>
`
    }]
  }], () => [], {
    modal: [{
      type: ViewChild,
      args: [PoModalComponent, {
        static: true
      }]
    }],
    pageChangePassword: [{
      type: ViewChild,
      args: ["pageChangePassword", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    passwordForm: [{
      type: ViewChild,
      args: ["passwordForm", {
        read: NgForm,
        static: true
      }]
    }]
  });
})();
var PoPageChangePasswordModule = class _PoPageChangePasswordModule {
  static \u0275fac = function PoPageChangePasswordModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageChangePasswordModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageChangePasswordModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [PoPageChangePasswordService],
    imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageChangePasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoModule, PoPageBackgroundModule],
      declarations: [PoPageChangePasswordComponent],
      providers: [PoPageChangePasswordService],
      exports: [PoPageChangePasswordComponent]
    }]
  }], null, null);
})();
var poPageDynamicLiterals = {
  en: {
    errorRenderPage: "Error loading page",
    notPossibleLoadMetadataPage: "The page metadata could not be loaded"
  },
  es: {
    errorRenderPage: "Error al cargar la p\xE1gina",
    notPossibleLoadMetadataPage: "No se pudieron cargar los metadatos de la p\xE1gina."
  },
  pt: {
    errorRenderPage: "Erro ao carregar a p\xE1gina",
    notPossibleLoadMetadataPage: "N\xE3o foi poss\xEDvel carregar os metadados da p\xE1gina"
  },
  ru: {
    errorRenderPage: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
    notPossibleLoadMetadataPage: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"
  }
};
var PoPageDynamicService = class _PoPageDynamicService {
  http = inject(HttpClient);
  notification = inject(PoNotificationService);
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  endpoint = "/";
  language;
  metadata;
  constructor() {
    const languageService = inject(PoLanguageService);
    this.language = languageService.getShortLanguage();
  }
  configServiceApi(config = {}) {
    this.endpoint = config.endpoint;
    this.metadata = config.metadata || this.metadata;
  }
  getMetadata(type = "list") {
    const key = `${this.endpoint}-${type}-metadata`;
    const cache = JSON.parse(localStorage.getItem(key)) || {};
    const metadataUrlBase = this.metadata || `${this.endpoint}/metadata`;
    const url = `${metadataUrlBase}?type=${type}&version=${cache.version || ""}`;
    return this.http.get(url).pipe(map((response) => {
      if (response.version !== void 0 && response.version === cache.version) {
        return cache;
      }
      localStorage.setItem(key, JSON.stringify(response));
      return __spreadValues(__spreadValues({}, cache), response);
    }), catchError((error) => {
      if (Object.keys(cache).length) {
        return of(cache);
      }
      const {
        errorRenderPage,
        notPossibleLoadMetadataPage
      } = poPageDynamicLiterals[this.language];
      this.notification.warning(notPossibleLoadMetadataPage);
      return merge(of({
        title: errorRenderPage
      }), throwError(error));
    }));
  }
  // Deleta um único recurso
  deleteResource(id, endpoint) {
    const localEndPoint = this.getLocalEndPoint(endpoint, true);
    const url = id ? `${localEndPoint}/${id}` : localEndPoint;
    return this.http.delete(url, {
      headers: this.headers
    });
  }
  // Deleta recursos em lote
  deleteResources(ids, endpoint) {
    return this.http.request("delete", `${this.getLocalEndPoint(endpoint)}`, {
      headers: this.headers,
      body: ids
    });
  }
  // Busca uma lista de recursos
  getResources(params, endpoint) {
    return this.http.get(this.getLocalEndPoint(endpoint), {
      headers: this.headers,
      params
    });
  }
  // Busca um único recurso
  getResource(id, endpoint) {
    return this.http.get(`${this.getLocalEndPoint(endpoint, true)}/${id}`, {
      headers: this.headers
    });
  }
  // Cria um recurso
  createResource(resource, endpoint) {
    return this.http.post(`${this.getLocalEndPoint(endpoint)}`, resource, {
      headers: this.headers
    });
  }
  // Atualiza um recurso
  updateResource(id, resource, endpoint) {
    return this.http.put(`${this.getLocalEndPoint(endpoint, true)}/${id}`, resource, {
      headers: this.headers
    });
  }
  getLocalEndPoint(endpoint, checkSingleBar = false) {
    endpoint = endpoint ?? this.endpoint;
    if (checkSingleBar) {
      endpoint = endpoint === "/" ? "" : endpoint;
    }
    return endpoint;
  }
  static \u0275fac = function PoPageDynamicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageDynamicService,
    factory: _PoPageDynamicService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PoPageCustomizationService = class _PoPageCustomizationService {
  http = inject(HttpClient);
  getCustomOptions(origin, originalOption, optionSchema) {
    return this.createObservable(origin).pipe(map((newPageOptions) => this.mergePageOptions(originalOption, newPageOptions, optionSchema)));
  }
  changeOriginalOptionsToNewOptions(objectToChange, newOptions) {
    Object.keys(newOptions).forEach((key) => {
      const value = newOptions[key];
      if (key in objectToChange) {
        if (Array.isArray(value)) {
          objectToChange[key] = [...value];
          return;
        }
        if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") {
          objectToChange[key] = value;
          return;
        }
        if (value !== null && typeof value === "object") {
          objectToChange[key] = __spreadValues({}, value);
        }
      }
    });
  }
  createObservable(origin) {
    if (typeof origin === "string") {
      return this.http.post(origin, {});
    }
    return from(Promise.resolve(origin()));
  }
  mergePageOptions(originalOption, newPageOptions, optionSchema) {
    const mergePageOptions = optionSchema.schema.reduce((objWithNewProp, prop) => __spreadProps(__spreadValues({}, objWithNewProp), {
      [prop.nameProp]: this.createNewProp(prop, originalOption, newPageOptions)
    }), {});
    Object.keys(mergePageOptions).forEach((key) => mergePageOptions[key] === void 0 && delete mergePageOptions[key]);
    return mergePageOptions;
  }
  createNewProp(prop, originalOption, newPageOptions) {
    if (prop.merge) {
      return this.mergeOptions(originalOption[prop.nameProp], newPageOptions[prop.nameProp], prop.keyForMerge);
    } else {
      return newPageOptions[prop.nameProp] ?? originalOption[prop.nameProp];
    }
  }
  mergeOptions(originalOptions, newOptions, filterProp) {
    if (!originalOptions && !newOptions) {
      return;
    }
    if (!newOptions) {
      return originalOptions;
    }
    if (!originalOptions) {
      return newOptions;
    }
    if (originalOptions instanceof Array && newOptions instanceof Array) {
      return this.mergeOptionsArray(originalOptions, newOptions, filterProp);
    }
    return __spreadValues(__spreadValues({}, originalOptions), newOptions);
  }
  mergeOptionsArray(originalOptions, newOptions, filterProp) {
    const deduplicateNewOptions = newOptions.filter((newItem) => !originalOptions.find((originalItem) => originalItem[filterProp] === newItem[filterProp]));
    const mergedOriginalOptions = originalOptions.map((originalItem) => {
      const newItem = newOptions.find((newOptionsItem) => originalItem[filterProp] === newOptionsItem[filterProp]) || originalItem;
      return __spreadValues(__spreadValues({}, originalItem), newItem);
    });
    return [...mergedOriginalOptions, ...deduplicateNewOptions];
  }
  static \u0275fac = function PoPageCustomizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageCustomizationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageCustomizationService,
    factory: _PoPageCustomizationService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageCustomizationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PoPageDynamicDetailActionsService = class _PoPageDynamicDetailActionsService {
  http = inject(HttpClient);
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  beforeBack(action) {
    return this.executeAction({
      action
    });
  }
  beforeEdit(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeRemove(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  executeAction({
    action,
    resource = {},
    id
  }) {
    if (!action) {
      return of({});
    }
    if (typeof action === "string") {
      const url = id ? `${action}/${id}` : action;
      return this.http.post(url, resource, {
        headers: this.headers
      });
    }
    return of(action(id, resource));
  }
  static \u0275fac = function PoPageDynamicDetailActionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicDetailActionsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageDynamicDetailActionsService,
    factory: _PoPageDynamicDetailActionsService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicDetailActionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var poPageDynamicDetailLiteralsDefault = {
  en: {
    pageActionEdit: "Edit",
    pageActionRemove: "Delete",
    pageActionBack: "Back",
    confirmRemoveTitle: "Confirm delete",
    confirmRemoveMessage: "Are you sure you want to delete this record? You can not undo this action.",
    removeNotificationSuccess: "Item deleted successfully.",
    registerNotFound: "Register not found."
  },
  es: {
    pageActionEdit: "Editar",
    pageActionRemove: "Borrar",
    pageActionBack: "Regreso",
    confirmRemoveTitle: "Confirmar la exclusi\xF3n",
    confirmRemoveMessage: "\xBFEst\xE1 seguro de que desea eliminar este registro? No puede deshacer esta acci\xF3n.",
    removeNotificationSuccess: "Elemento eliminado con \xE9xito.",
    registerNotFound: "Registro no encontrado."
  },
  pt: {
    pageActionEdit: "Editar",
    pageActionRemove: "Excluir",
    pageActionBack: "Voltar",
    confirmRemoveTitle: "Confirmar exclus\xE3o",
    confirmRemoveMessage: "Tem certeza de que deseja excluir esse registro? Voc\xEA n\xE3o poder\xE1 desfazer essa a\xE7\xE3o.",
    removeNotificationSuccess: "Item exclu\xEDdo com sucesso.",
    registerNotFound: "Registro n\xE3o encontrado."
  },
  ru: {
    pageActionEdit: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    pageActionRemove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    pageActionBack: "\u041D\u0430\u0437\u0430\u0434",
    confirmRemoveTitle: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F",
    confirmRemoveMessage: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C?  \u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",
    removeNotificationSuccess: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D.",
    registerNotFound: "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430."
  }
};
var PoPageDynamicDetailComponent = class _PoPageDynamicDetailComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  poNotification = inject(PoNotificationService);
  poDialogService = inject(PoDialogService);
  poPageDynamicService = inject(PoPageDynamicService);
  poPageDynamicDetailActionsService = inject(PoPageDynamicDetailActionsService);
  poPageCustomizationService = inject(PoPageCustomizationService);
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicDetailOptions`,
   * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicDetailOptions {
   * return {
   *   actions:
   *     { new: 'new', edit: 'edit/:id', remove: true },
   *   fields: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /** Título da página. */
  title;
  /**
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso que serão exibido.
   *
   * Caso a ação `remove` estiver configurada, será feito uma requisição de exclusão nesse mesmo endpoint passando os campos
   * setados como `key: true`.
   *
   * > `DELETE {end-point}/{keys}`
   *
   * ```
   *  <po-page-dynamic-detail
   *    [p-actions]="{ remove: '/' }"
   *    [p-fields]="[ { property: 'id', key: true } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-detail>
   * ```
   *
   * Resquisição disparada, onde a propriedade `id` é igual a 2:
   *
   * ```
   *  DELETE /api/po-samples/v1/people/2 HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * > Caso esteja usando metadados com o template, será disparado uma requisição na inicialização do template para buscar
   * > os metadados da página passando o tipo do metadado esperado e a versão cacheada pelo browser.
   * >
   * > `GET {end-point}/metadata?type=detail&version={version}`
   */
  serviceApi;
  literals;
  model = {};
  subscriptions = [];
  _actions = {};
  _autoRouter = false;
  _componentsSize = void 0;
  _duplicates = [];
  _fields = [];
  _keys = [];
  _pageActions = [];
  /**
   * @optional
   *
   * @description
   *
   * Define as ações da página de acordo com a interface `PoPageDynamicDetailActions`.
   */
  set actions(value) {
    this._actions = this.isObject(value) ? value : {};
    this._pageActions = this.getPageActions(this._actions);
  }
  get actions() {
    return __spreadValues({}, this._actions);
  }
  /**
   * @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
   *
   * @optional
   *
   * @description
   *
   * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso as ações
   * estejam definidas nas ações.
   *
   * > Para o correto funcionamento não pode haver nenhum rota coringa (`**`) especificada.
   *
   * @default false
   */
  set autoRouter(value) {
    this._autoRouter = convertToBoolean(value);
  }
  get autoRouter() {
    return this._autoRouter;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /** Lista dos campos exibidos na página. */
  set fields(value) {
    this._fields = Array.isArray(value) ? [...value] : [];
    this._keys = this.getKeysByFields(this.fields);
    this._duplicates = this.getDuplicatesByFields(this.fields);
  }
  get fields() {
    return this._fields;
  }
  /* eslint-disable max-params */
  constructor() {
    const languageService = inject(PoLanguageService);
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageDynamicDetailLiteralsDefault[poLocaleDefault]), poPageDynamicDetailLiteralsDefault[language]);
  }
  /* eslint-enable max-params */
  ngOnInit() {
    this.loadDataFromAPI();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }
  get duplicates() {
    return [...this._duplicates];
  }
  get keys() {
    return [...this._keys];
  }
  get pageActions() {
    return [...this._pageActions];
  }
  remove(actionRemove, actionBeforeRemove) {
    const uniqueKey = this.formatUniqueKey(this.model);
    this.subscriptions.push(this.poPageDynamicDetailActionsService.beforeRemove(actionBeforeRemove, uniqueKey, __spreadValues({}, this.model)).pipe(switchMap((beforeRemoveResult) => {
      const newRemoveAction = beforeRemoveResult?.newUrl ?? actionRemove;
      const allowAction = beforeRemoveResult?.allowAction ?? true;
      if (!allowAction) {
        return of({});
      }
      if (typeof newRemoveAction === "string") {
        return this.executeRemove(newRemoveAction, uniqueKey);
      } else {
        newRemoveAction(uniqueKey, __spreadValues({}, this.model));
        return EMPTY;
      }
    })).subscribe());
  }
  confirmRemove(actionRemove, actionBeforeRemove) {
    const confirmOptions = {
      title: this.literals.confirmRemoveTitle,
      message: this.literals.confirmRemoveMessage,
      confirm: this.remove.bind(this, actionRemove, actionBeforeRemove)
    };
    this.poDialogService.confirm(confirmOptions);
  }
  executeRemove(path, uniqueKey) {
    return this.poPageDynamicService.deleteResource(uniqueKey).pipe(map(() => {
      this.poNotification.success(this.literals.removeNotificationSuccess);
      this.navigateTo({
        path
      });
    }));
  }
  formatUniqueKey(item) {
    const keys = mapObjectByProperties(item, this.keys);
    return valuesFromObject(keys).join("|");
  }
  goBack(actionBack) {
    this.subscriptions.push(this.poPageDynamicDetailActionsService.beforeBack(this.actions.beforeBack).subscribe((beforeBackResult) => this.executeBackAction(actionBack, beforeBackResult?.allowAction, beforeBackResult?.newUrl)));
  }
  executeBackAction(actionBack, allowAction, newUrl) {
    const isAllowedAction = typeof allowAction === "boolean" ? allowAction : true;
    if (isAllowedAction) {
      if (actionBack === void 0 || typeof actionBack === "boolean") {
        return window.history.back();
      }
      if (typeof actionBack === "string" || newUrl) {
        return this.router.navigate([newUrl || actionBack]);
      }
      return actionBack();
    }
  }
  loadData(id) {
    return this.poPageDynamicService.getResource(id).pipe(tap((response) => {
      if (!response) {
        this.setUndefinedToModelAndActions();
      } else {
        this.model = response;
      }
    }), catchError((error) => {
      this.setUndefinedToModelAndActions();
      return throwError(error);
    }));
  }
  setUndefinedToModelAndActions() {
    this.model = void 0;
    this.actions = void 0;
  }
  getMetadata(serviceApiFromRoute, onLoad) {
    if (serviceApiFromRoute) {
      return this.poPageDynamicService.getMetadata("detail").pipe(tap((response) => {
        this.autoRouter = response.autoRouter || this.autoRouter;
        this.actions = response.actions || this.actions;
        this.breadcrumb = response.breadcrumb || this.breadcrumb;
        this.fields = response.fields || this.fields;
        this.title = response.title || this.title;
      }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
    }
    return this.loadOptionsOnInitialize(onLoad);
  }
  // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
  navigateTo(route, forceStopAutoRouter = false) {
    this.router.navigate([route.url || route.path], {
      queryParams: route.params
    }).catch(() => {
      if (forceStopAutoRouter || !this.autoRouter) {
        return;
      }
      this.router.config.unshift({
        path: route.path,
        component: route.component,
        data: {
          serviceApi: this.serviceApi,
          autoRouter: true
        }
      });
      this.navigateTo(route, true);
    });
  }
  openEdit(action) {
    const id = this.formatUniqueKey(this.model);
    this.subscriptions.push(this.poPageDynamicDetailActionsService.beforeEdit(this.actions.beforeEdit, id, this.model).pipe(switchMap((beforeEditResult) => this.executeEditAction(action, beforeEditResult, id))).subscribe());
  }
  executeEditAction(action, beforeEditResult, id) {
    const newEditAction = beforeEditResult?.newUrl ?? action;
    const allowAction = beforeEditResult?.allowAction ?? true;
    if (!allowAction) {
      return of({});
    }
    if (typeof newEditAction === "string") {
      this.openEditUrl(newEditAction);
    } else {
      newEditAction(id, __spreadValues({}, this.model));
    }
    return EMPTY;
  }
  openEditUrl(path) {
    const url = this.resolveUrl(this.model, path);
    this.navigateTo({
      path,
      url
    });
  }
  resolveUrl(item, path) {
    const uniqueKey = this.formatUniqueKey(item);
    return path.replace(/:id/g, uniqueKey);
  }
  getPageActions(actions = {}) {
    const pageActions = [];
    if (actions.edit) {
      pageActions.push({
        label: this.literals.pageActionEdit,
        action: this.openEdit.bind(this, actions.edit)
      });
    }
    if (actions.remove) {
      pageActions.push({
        label: this.literals.pageActionRemove,
        action: this.confirmRemove.bind(this, actions.remove, this.actions.beforeRemove),
        type: "danger"
      });
    }
    if (actions.back === void 0 || actions.back) {
      pageActions.push({
        label: this.literals.pageActionBack,
        action: this.goBack.bind(this, actions.back)
      });
    }
    return pageActions;
  }
  getKeysByFields(fields = []) {
    return fields.filter((field) => field.key === true).map((field) => field.property);
  }
  getDuplicatesByFields(fields = []) {
    return fields.filter((field) => field.duplicate === true).map((field) => field.property);
  }
  isObject(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
  }
  loadDataFromAPI() {
    const {
      serviceApi: serviceApiFromRoute,
      serviceMetadataApi,
      serviceLoadApi
    } = this.activatedRoute.snapshot.data;
    const {
      id
    } = this.activatedRoute.snapshot.params;
    const onLoad = serviceLoadApi || this.onLoad;
    this.serviceApi = serviceApiFromRoute || this.serviceApi;
    this.poPageDynamicService.configServiceApi({
      endpoint: this.serviceApi,
      metadata: serviceMetadataApi
    });
    const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
    const data$ = this.loadData(id);
    this.subscriptions.push(concat(metadata$, data$).subscribe());
  }
  loadOptionsOnInitialize(onLoad) {
    if (onLoad) {
      return this.getPoDynamicPageOptions(onLoad).pipe(tap((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
    }
    return EMPTY;
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      fields: this.fields,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      title: this.title
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "fields",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  static \u0275fac = function PoPageDynamicDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageDynamicDetailComponent,
    selectors: [["po-page-dynamic-detail"]],
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      onLoad: [0, "p-load", "onLoad"],
      title: [0, "p-title", "title"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      actions: [0, "p-actions", "actions"],
      autoRouter: [0, "p-auto-router", "autoRouter"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      fields: [0, "p-fields", "fields"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PoPageDynamicService, PoPageDynamicDetailActionsService])],
    decls: 3,
    vars: 5,
    consts: [[3, "p-actions", "p-breadcrumb", "p-components-size", "p-title"], [3, "p-components-size", "p-fields", "p-value"], [3, "p-size"], ["p-icon", "ICON_INFO"], [1, "po-font-text-large"]],
    template: function PoPageDynamicDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "po-page-default", 0);
        \u0275\u0275template(1, PoPageDynamicDetailComponent_Conditional_1_Template, 1, 3, "po-dynamic-view", 1)(2, PoPageDynamicDetailComponent_Conditional_2_Template, 4, 2, "po-widget", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-components-size", ctx.componentsSize)("p-title", ctx.title);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model ? 1 : 2);
      }
    },
    dependencies: [PoDynamicViewComponent, PoIconComponent, PoPageDefaultComponent, PoWidgetComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicDetailComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-detail",
      providers: [PoPageDynamicService, PoPageDynamicDetailActionsService],
      standalone: false,
      template: '<po-page-default\n  [p-actions]="pageActions"\n  [p-breadcrumb]="breadcrumb"\n  [p-components-size]="componentsSize"\n  [p-title]="title"\n>\n  @if (model) {\n    <po-dynamic-view [p-components-size]="componentsSize" [p-fields]="fields" [p-value]="model"> </po-dynamic-view>\n  } @else {\n    <po-widget [p-size]="componentsSize">\n      <po-icon p-icon="ICON_INFO"></po-icon>\n      <span class="po-font-text-large">\n        {{ literals.registerNotFound }}\n      </span>\n    </po-widget>\n  }\n</po-page-default>\n'
    }]
  }], () => [], {
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    autoRouter: [{
      type: Input,
      args: ["p-auto-router"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    fields: [{
      type: Input,
      args: ["p-fields"]
    }]
  });
})();
var PoPageDynamicModule = class _PoPageDynamicModule {
  static \u0275fac = function PoPageDynamicModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageDynamicModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [PoPageDynamicService],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [PoPageDynamicService]
    }]
  }], null, null);
})();
var PoPageDynamicDetailModule = class _PoPageDynamicDetailModule {
  static \u0275fac = function PoPageDynamicDetailModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicDetailModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageDynamicDetailModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoIconModule, PoModalModule, PoPageModule, PoWidgetModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicDetailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoIconModule, PoModalModule, PoPageModule, PoWidgetModule, PoPageDynamicModule],
      declarations: [PoPageDynamicDetailComponent],
      exports: [PoPageDynamicDetailComponent]
    }]
  }], null, null);
})();
var PoPageDynamicEditActionsService = class _PoPageDynamicEditActionsService {
  http = inject(HttpClient);
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  beforeCancel(action) {
    return this.executeAction({
      action
    });
  }
  beforeSave(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeSaveNew(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  executeAction({
    action,
    resource = {},
    id
  }) {
    if (!action) {
      return of({});
    }
    if (typeof action === "string") {
      const url = id ? `${action}/${id}` : action;
      return this.http.post(url, resource, {
        headers: this.headers
      });
    }
    return of(action(resource, id));
  }
  static \u0275fac = function PoPageDynamicEditActionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicEditActionsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageDynamicEditActionsService,
    factory: _PoPageDynamicEditActionsService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicEditActionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var poNotificationType = ["error", "warning"];
var poNotificationTypeDefault = "warning";
var poPageDynamicEditLiteralsDefault = {
  en: {
    cancelConfirmMessage: "Are you sure you want to cancel this operation?",
    detailActionNew: "New",
    pageActionCancel: "Cancel",
    pageActionSave: "Save",
    pageActionSaveNew: "Save and new",
    registerNotFound: "Register not found.",
    saveNotificationError: "Mandatory field(s) not filled.",
    saveNotificationSuccessSave: "Resource successfully saved.",
    saveNotificationSuccessUpdate: "Resource successfully updated.",
    saveNotificationWarning: "Form must be filled out correctly."
  },
  es: {
    cancelConfirmMessage: "Est\xE1 seguro de que desea cancelar esta operaci\xF3n?",
    detailActionNew: "Nuevo",
    pageActionCancel: "Cancelar",
    pageActionSave: "Guardar",
    pageActionSaveNew: "Guardar y nuevo",
    registerNotFound: "Registro no encontrado.",
    saveNotificationError: "Campo(s) obligatorio(s) no completado(s).",
    saveNotificationSuccessSave: "Recurso salvo con \xE9xito.",
    saveNotificationSuccessUpdate: "Recurso actualizado con \xE9xito.",
    saveNotificationWarning: "El formulario debe llenarse correctamente."
  },
  pt: {
    cancelConfirmMessage: "Tem certeza que deseja cancelar esta opera\xE7\xE3o?",
    detailActionNew: "Novo",
    pageActionCancel: "Cancelar",
    pageActionSave: "Salvar",
    pageActionSaveNew: "Salvar e novo",
    registerNotFound: "Registro n\xE3o encontrado.",
    saveNotificationError: "Campo(s) obrigat\xF3rio(s) sem preenchimento.",
    saveNotificationSuccessSave: "Recurso salvo com sucesso.",
    saveNotificationSuccessUpdate: "Recurso atualizado com sucesso.",
    saveNotificationWarning: "Formul\xE1rio precisa ser preenchido corretamente."
  },
  ru: {
    cancelConfirmMessage: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u0443 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E?",
    detailActionNew: "\u041D\u043E\u0432\u044B\u0439",
    pageActionCancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
    pageActionSave: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    pageActionSaveNew: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C",
    registerNotFound: "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",
    saveNotificationError: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435(\u044F) \u043D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E.",
    saveNotificationSuccessSave: "\u0420\u0435\u0441\u0443\u0440\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D.",
    saveNotificationSuccessUpdate: "\u0420\u0435\u0441\u0443\u0440\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.",
    saveNotificationWarning: "\u0424\u043E\u0440\u043C\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E."
  }
};
var PoPageDynamicEditComponent = class _PoPageDynamicEditComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  poNotification = inject(PoNotificationService);
  poDialogService = inject(PoDialogService);
  poPageDynamicService = inject(PoPageDynamicService);
  poPageCustomizationService = inject(PoPageCustomizationService);
  poPageDynamicEditActionsService = inject(PoPageDynamicEditActionsService);
  dynamicForm;
  gridDetail;
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso que será exibido para edição.
   *
   * Para as ações de `save` e `saveNew`, será feito uma requisição de criação nesse mesmo endpoint passando os valores
   * preenchidos pelo usuário via payload.
   *
   * > `POST {end-point}`
   *
   * ```
   *  <po-page-dynamic-edit
   *    [p-actions]="{ save: '/', saveNew: 'new' }"
   *    [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-edit>
   * ```
   *
   * Resquisição disparada, onde a propriedade `name` e `city` foram preenchidas:
   *
   * ```
   *  POST /api/po-samples/v1/people HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Request payload:
   *
   * ```
   * { "name": "Fulano", "city": "Smallville" }
   * ```
   *
   * Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `id`.
   *
   * Exemplo de configuração de rota:
   *
   * ```
   *  RouterModule.forRoot([
   *    ...
   *    { path: 'edit/:id', component: PersonEditComponent },
   *    ...
   *  ],
   * ```
   *
   * Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.
   *
   * > `GET {end-point}/{id}`
   *
   * Nos métodos de `save` e `saveNew`, ao invés de um `POST`, será disparado um `PUT`.
   *
   * Resquisição disparada, onde a propriedade `name` e `city` foram preenchidas / atualizadas, e o `id` da url é 2:
   *
   * ```
   *  PUT /api/po-samples/v1/people/2 HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Request payload:
   *
   * ```
   * { "name": "Fulano", "city": "Metropolis" }
   * ```
   */
  serviceApi;
  /** Título da página. */
  title;
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicEditOptions`,
   * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicEditOptions {
   * return {
   *   actions:
   *     { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
   *   fields: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /**
   * @optional
   *
   * @description
   *
   * Função que será executada após ser realizada a busca dos dados.
   *
   * A propriedade aceita os seguintes tipos:
   * - `function`: Método que será executado.
   *
   * Esta função passa por parâmetro o model e deve recebê-lo de volta com as alterações.
   * Também aceita o retorno de um Observable com o novo model.
   *
   * Por exemplo:
   *
   * ```
   * onLoadCustom(model) {
   *  return { ...model, customField: 'newValue' };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load-data]="onLoadCustom.bind(this)"
   * ```
   */
  onLoadData;
  model = {};
  // beforeSave: return boolean
  // afterSave
  // beforeRemove: return boolean
  // afterRemove
  // beforeInsert: : return boolean
  detailActions = {};
  indexFocus = 0;
  language;
  subscriptions = [];
  _actions = {};
  _componentsSize = void 0;
  _literals;
  _autoRouter = false;
  _controlFields = [];
  _detailFields = [];
  _duplicates = [];
  _fields = [];
  _keys = [];
  _pageActions = [];
  _notificationType = poNotificationTypeDefault;
  /**
   * @optional
   *
   * @description
   *
   * Ações da página.
   */
  set actions(value) {
    this._actions = this.isObject(value) ? value : {};
    this._pageActions = this.getPageActions(this._actions);
  }
  get actions() {
    return __spreadValues({}, this._actions);
  }
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-dynamic-edit`.
   *
   * É possivel customizar passando um objeto com todas as literais disponíveis
   * ou passando apenas as literais que deseja customizar
   *
   * ```
   *  const customLiterals: PoPageDynamicEditLiterals = {
   *    detailActionNew: 'Incluir',
   *    pageActionCancel: 'Descartar',
   *    pageActionSave: 'Gravar',
   *    pageActionSaveNew: 'Gravar e incluir',
   *    registerNotFound: 'Nenhum registro encontrado.',
   *    saveNotificationError: 'Campo(s) obrigatório(s) sem preenchimento.',
   *    saveNotificationSuccessSave: 'Item salvo com sucesso.',
   *    saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
   *    saveNotificationWarning: 'Necessário preencher o formulário corretamente.'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-dynamic-edit
   *   [p-literals]="customLiterals">
   * </po-page-dynamic-edit>
   * ```
   *
   * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
   */
  set literals(value) {
    if (value instanceof Object && !(value instanceof Array)) {
      this._literals = __spreadValues(__spreadValues(__spreadValues({}, poPageDynamicEditLiteralsDefault[poLocaleDefault]), poPageDynamicEditLiteralsDefault[this.language]), value);
    } else {
      this._literals = poPageDynamicEditLiteralsDefault[this.language];
    }
    this._pageActions = this.getPageActions(this._actions);
  }
  get literals() {
    return this._literals || poPageDynamicEditLiteralsDefault[this.language];
  }
  /**
   * @optional
   *
   * @description
   *
   * Tipo da notificação.
   *
   * É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.
   *
   * ```
   * <po-page-dynamic-edit
   *   p-notification-type="warning">
   * </po-page-dynamic-edit>
   * ```
   *
   * > Os valores aceitos são 'warning' e 'error'.
   * @default warning
   */
  set notificationType(value) {
    this._notificationType = poNotificationType.includes(value) ? value : poNotificationTypeDefault;
  }
  get notificationType() {
    return this._notificationType;
  }
  /**
   * @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
   *
   * @optional
   *
   * @description
   *
   * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso as ações
   * estejam definidas nas ações.
   *
   * > Para o correto funcionamento não pode haver nenhum rota coringa (`**`) especificada.
   *
   * @default false
   */
  set autoRouter(value) {
    this._autoRouter = convertToBoolean(value);
  }
  get autoRouter() {
    return this._autoRouter;
  }
  /** Lista dos campos usados na tabela e busca avançada. */
  set fields(value) {
    this._fields = Array.isArray(value) ? [...value] : [];
    this._keys = this.getKeysByFields(this._fields);
    this._duplicates = this.getDuplicatesByFields(this._fields);
    this._controlFields = this.getControlFields(this._fields);
    this._detailFields = this.getDetailFields(this._fields);
  }
  get fields() {
    return this._fields;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /* eslint-disable max-params */
  constructor() {
    const languageService = inject(PoLanguageService);
    this.language = languageService.getShortLanguage();
  }
  /* eslint-enable max-params */
  ngOnInit() {
    this.loadDataFromAPI();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }
  detailActionNew() {
    this.gridDetail.insertRow();
  }
  /**
   * Método que exibe `p-helper` ou executa a ação definida em `p-helper{eventOnClick}` ou em `p-additionalHelp`.
   * Para isso, será necessário configurar uma tecla de atalho utilizando o evento `keydown`.
   *
   * ```
   * import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
   * ...
   * @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;
   *
   * fields: Array<PoPageDynamicEditField> = [
   *  {
   *    property: 'name',
   *    ...
   *    help: 'Mensagem de ajuda.',
   *    helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   *    keydown: this.onKeyDown.bind(this, 'name')
   *  },
   * ]
   *
   * onKeyDown(property: string, event: KeyboardEvent): void {
   *  if (event.code === 'F9') {
   *    this.dynamicEdit.showAdditionalHelp(property);
   *  }
   * }
   * ```
   *
   * @param { string } property Identificador da coluna.
   */
  showAdditionalHelp(property) {
    this.dynamicForm.showAdditionalHelp(property);
  }
  get duplicates() {
    return [...this._duplicates];
  }
  get keys() {
    return [...this._keys];
  }
  get pageActions() {
    return [...this._pageActions];
  }
  get controlFields() {
    return this._controlFields;
  }
  get detailFields() {
    return this._detailFields;
  }
  loadDataFromAPI() {
    const {
      serviceApi: serviceApiFromRoute,
      serviceMetadataApi,
      serviceLoadApi
    } = this.activatedRoute.snapshot.data;
    const {
      id
    } = this.activatedRoute.snapshot.params;
    const {
      duplicate
    } = this.activatedRoute.snapshot.queryParams;
    const onLoad = serviceLoadApi || this.onLoad;
    this.serviceApi = serviceApiFromRoute || this.serviceApi;
    this.poPageDynamicService.configServiceApi({
      endpoint: this.serviceApi,
      metadata: serviceMetadataApi
    });
    const metadata$ = this.getMetadata(serviceApiFromRoute, id, onLoad);
    const data$ = this.loadData(id, duplicate);
    this.subscriptions.push(concat(metadata$, data$).subscribe());
  }
  cancel(actionCancel, actionBeforeCancel) {
    if (this.dynamicForm && this.dynamicForm.form.dirty) {
      this.poDialogService.confirm({
        message: this.literals.cancelConfirmMessage,
        title: this.literals.pageActionCancel,
        confirm: this.goBack.bind(this, actionCancel, actionBeforeCancel)
      });
    } else {
      this.goBack(actionCancel, actionBeforeCancel);
    }
  }
  formatUniqueKey(item) {
    const keys = mapObjectByProperties(item, this.keys);
    return valuesFromObject(keys).join("|");
  }
  goBack(actionCancel, actionBeforeCancel) {
    this.subscriptions.push(this.poPageDynamicEditActionsService.beforeCancel(actionBeforeCancel).subscribe((beforeCancelResult) => {
      this.executeBackAction(actionCancel, beforeCancelResult?.allowAction, beforeCancelResult?.newUrl);
    }));
  }
  executeBackAction(actionCancel, allowAction, newUrl) {
    const isAllowedAction = typeof allowAction === "boolean" ? allowAction : true;
    if (isAllowedAction) {
      if (actionCancel === void 0 || typeof actionCancel === "boolean") {
        return window.history.back();
      }
      if (typeof actionCancel === "string" || newUrl) {
        return this.router.navigate([newUrl || actionCancel]);
      }
      return actionCancel();
    }
  }
  loadData(id, duplicate) {
    if (!id) {
      try {
        this.model = duplicate ? JSON.parse(duplicate) : {};
      } catch {
        this.model = {};
      }
      return EMPTY;
    }
    return this.poPageDynamicService.getResource(id).pipe(tap((response) => {
      this.beforeSetModel(response);
    }), catchError((error) => {
      this.model = void 0;
      this.actions = void 0;
      this._pageActions = [];
      return throwError(error);
    }));
  }
  beforeSetModel(response) {
    if (!this.onLoadData) {
      this.model = response;
      return;
    }
    const onLoadDataExecution = this.onLoadData(response);
    const onLoadData$ = onLoadDataExecution instanceof Observable ? onLoadDataExecution : of(onLoadDataExecution);
    onLoadData$.subscribe({
      next: (customModel) => {
        this.model = customModel;
      },
      error: () => {
        this.model = response;
      }
    });
  }
  loadOptionsOnInitialize(onLoad) {
    if (onLoad) {
      return this.getPoDynamicPageOptions(onLoad).pipe(tap((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
    }
    return EMPTY;
  }
  focusCheckboxInput(control) {
    const checkboxGroup = document.querySelector(`po-checkbox-group[ng-reflect-name=${control}]`);
    if (checkboxGroup) {
      const checkBoxComponent = checkboxGroup.querySelector("po-checkbox[ng-reflect-disabled=false]");
      const labelInput = checkBoxComponent?.querySelector(".po-checkbox-outline");
      if (labelInput) {
        labelInput.focus();
      } else {
        this.indexFocus--;
      }
    }
  }
  focusControl(control) {
    const inputElement = document.querySelector(`[name=${control}]`);
    if (inputElement) {
      if (inputElement.tagName === "INPUT") {
        inputElement.focus();
      } else {
        this.focusRadioInput(inputElement, control);
      }
    } else {
      this.focusCheckboxInput(control);
    }
  }
  focusRadioInput(inputElement, control) {
    const radioComponent = inputElement.querySelector(`po-radio[ng-reflect-name=${control}][ng-reflect-disabled=false]`);
    if (radioComponent) {
      const radioInput = radioComponent.querySelector("input");
      radioInput.focus();
      radioInput.parentElement.parentElement.classList.add("po-radio-focus");
    } else {
      this.indexFocus--;
    }
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      fields: this.fields,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      title: this.title
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "fields",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  getMetadata(serviceApiFromRoute, paramId, onLoad) {
    const typeMetadata = paramId ? "edit" : "create";
    if (serviceApiFromRoute) {
      return this.poPageDynamicService.getMetadata(typeMetadata).pipe(tap((response) => {
        this.autoRouter = response.autoRouter || this.autoRouter;
        this.actions = response.actions || this.actions;
        this.breadcrumb = response.breadcrumb || this.breadcrumb;
        this.fields = response.fields || this.fields;
        this.title = response.title || this.title;
      }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
    }
    return this.loadOptionsOnInitialize(onLoad);
  }
  markControlsAsDirtyAndFocusFirstInvalid() {
    this.indexFocus = 0;
    const controls = Object.keys(this.dynamicForm.form.controls);
    controls.forEach((control) => {
      this.dynamicForm.form.controls[control].markAsDirty();
      if (this.dynamicForm.form.controls[control].hasError("required") && this.indexFocus === 0) {
        this.focusControl(control);
        this.indexFocus++;
      }
    });
  }
  navigateTo(path) {
    if (path) {
      const url = this.resolveUrl(this.model, path);
      this.router.navigate([url]);
    } else {
      window.history.back();
    }
  }
  resolveUniqueKey(item) {
    return this.activatedRoute.snapshot.params["id"] ? this.formatUniqueKey(item) : void 0;
  }
  resolveUrl(item, path) {
    const uniqueKey = this.formatUniqueKey(item);
    return path.replace(/:id/g, uniqueKey);
  }
  executeSave(saveRedirectPath) {
    const saveOperation$ = this.saveOperation();
    return saveOperation$.pipe(tap((message) => {
      this.poNotification.success(message);
      this.navigateTo(saveRedirectPath);
    }));
  }
  updateModel(newResource = {}) {
    if (typeof newResource !== "undefined" && Object.keys(newResource).length !== 0) {
      const dynamicNgForm = this.dynamicForm.form;
      removeKeysProperties(this.keys, newResource);
      this.model = __spreadValues(__spreadValues({}, this.model), newResource);
      dynamicNgForm.form.patchValue(this.model);
    }
  }
  showNotification(type) {
    switch (type) {
      case "warning":
        this.poNotification.warning(this.literals.saveNotificationWarning);
        break;
      case "error":
        this.poNotification.error(this.literals.saveNotificationError);
        break;
    }
  }
  saveOperation() {
    if (this.dynamicForm.form.invalid) {
      this.markControlsAsDirtyAndFocusFirstInvalid();
      this.showNotification(this._notificationType);
      return EMPTY;
    }
    const paramId = this.activatedRoute.snapshot.params["id"];
    const successMsg = paramId ? this.literals.saveNotificationSuccessUpdate : this.literals.saveNotificationSuccessSave;
    const saveOperation$ = paramId ? this.poPageDynamicService.updateResource(paramId, this.model) : this.poPageDynamicService.createResource(this.model);
    return saveOperation$.pipe(map(() => successMsg));
  }
  save(action, before = "beforeSave") {
    const executeOperation = {
      beforeSave: this.executeSave.bind(this),
      beforeSaveNew: this.executeSaveNew.bind(this)
    };
    const uniqueKey = this.resolveUniqueKey(this.model);
    this.subscriptions.push(this.poPageDynamicEditActionsService[before](this.actions[before], uniqueKey, __spreadValues({}, this.model)).pipe(switchMap((returnBefore) => {
      const newAction = returnBefore?.newUrl ?? action;
      const allowAction = returnBefore?.allowAction ?? true;
      this.updateModel(returnBefore?.resource);
      if (!allowAction) {
        return of({});
      }
      if (typeof newAction === "string") {
        return executeOperation[before](newAction);
      } else {
        newAction(__spreadValues({}, this.model), uniqueKey);
        return EMPTY;
      }
    })).subscribe());
  }
  executeSaveNew(path) {
    const paramId = this.activatedRoute.snapshot.params["id"];
    const saveOperation$ = this.saveOperation();
    return saveOperation$.pipe(tap((message) => {
      if (paramId) {
        this.poNotification.success(message);
        this.navigateTo(path);
      } else {
        this.poNotification.success(message);
        this.model = {};
        this.dynamicForm.form.reset();
      }
    }));
  }
  getKeysByFields(fields = []) {
    return fields.filter((field) => field.key === true).map((field) => field.property);
  }
  getControlFields(fields = []) {
    return fields.filter((field) => field.type !== "detail");
  }
  getDetailFields(fields = []) {
    return fields.filter((field) => field.type === "detail");
  }
  getDuplicatesByFields(fields = []) {
    return fields.filter((field) => field.duplicate === true).map((field) => field.property);
  }
  getPageActions(actions = {}) {
    const pageActions = [{
      label: this.literals.pageActionSave,
      action: this.save.bind(this, actions.save)
    }];
    if (actions.saveNew) {
      pageActions.push({
        label: this.literals.pageActionSaveNew,
        action: this.save.bind(this, actions.saveNew, "beforeSaveNew")
      });
    }
    if (actions.cancel === void 0 || actions.cancel) {
      pageActions.push({
        label: this.literals.pageActionCancel,
        action: this.cancel.bind(this, actions.cancel, this.actions.beforeCancel)
      });
    }
    return pageActions;
  }
  isObject(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
  }
  static \u0275fac = function PoPageDynamicEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicEditComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageDynamicEditComponent,
    selectors: [["po-page-dynamic-edit"]],
    viewQuery: function PoPageDynamicEditComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c10, 5);
        \u0275\u0275viewQuery(_c11, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dynamicForm = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gridDetail = _t.first);
      }
    },
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      title: [0, "p-title", "title"],
      onLoad: [0, "p-load", "onLoad"],
      onLoadData: [0, "p-load-data", "onLoadData"],
      actions: [0, "p-actions", "actions"],
      literals: [0, "p-literals", "literals"],
      notificationType: [0, "p-notification-type", "notificationType"],
      autoRouter: [0, "p-auto-router", "autoRouter"],
      fields: [0, "p-fields", "fields"],
      componentsSize: [0, "p-components-size", "componentsSize"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PoPageDynamicService])],
    decls: 3,
    vars: 5,
    consts: [["dynamicForm", ""], ["gridDetail", ""], [3, "p-actions", "p-breadcrumb", "p-components-size", "p-title"], [3, "p-size"], [3, "p-components-size", "p-fields", "p-value"], [1, "po-sm-12"], [3, "p-label"], [1, "po-row", "po-mb-2"], [3, "p-click", "p-size", "p-label"], [3, "p-row-actions", "p-columns", "p-data"], ["p-icon", "ICON_INFO"], [1, "po-font-text-large"]],
    template: function PoPageDynamicEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "po-page-default", 2);
        \u0275\u0275template(1, PoPageDynamicEditComponent_Conditional_1_Template, 3, 4)(2, PoPageDynamicEditComponent_Conditional_2_Template, 4, 2, "po-widget", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-components-size", ctx.componentsSize)("p-title", ctx.title);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model ? 1 : 2);
      }
    },
    dependencies: [PoButtonComponent, PoDividerComponent, PoDynamicFormComponent, PoGridComponent, PoIconComponent, PoPageDefaultComponent, PoWidgetComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicEditComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-edit",
      providers: [PoPageDynamicService],
      standalone: false,
      template: '<po-page-default\n  [p-actions]="pageActions"\n  [p-breadcrumb]="breadcrumb"\n  [p-components-size]="componentsSize"\n  [p-title]="title"\n>\n  @if (model) {\n    <po-dynamic-form #dynamicForm [p-components-size]="componentsSize" [p-fields]="controlFields" [p-value]="model">\n    </po-dynamic-form>\n    @if (detailFields.length > 0) {\n      <div class="po-sm-12">\n        <po-divider [p-label]="detailFields[0].divider"></po-divider>\n        <div class="po-row po-mb-2">\n          <po-button\n            [p-size]="componentsSize"\n            [p-label]="literals.detailActionNew"\n            (p-click)="detailActionNew()"\n          ></po-button>\n        </div>\n        <po-grid\n          #gridDetail\n          [p-row-actions]="detailActions"\n          [p-columns]="detailFields[0].detail.columns"\n          [p-data]="model[detailFields[0].property]"\n        >\n        </po-grid>\n      </div>\n    }\n  } @else {\n    <po-widget [p-size]="componentsSize">\n      <po-icon p-icon="ICON_INFO"></po-icon>\n      <span class="po-font-text-large">\n        {{ literals.registerNotFound }}\n      </span>\n    </po-widget>\n  }\n</po-page-default>\n'
    }]
  }], () => [], {
    dynamicForm: [{
      type: ViewChild,
      args: ["dynamicForm"]
    }],
    gridDetail: [{
      type: ViewChild,
      args: ["gridDetail"]
    }],
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    onLoadData: [{
      type: Input,
      args: ["p-load-data"]
    }],
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    notificationType: [{
      type: Input,
      args: ["p-notification-type"]
    }],
    autoRouter: [{
      type: Input,
      args: ["p-auto-router"]
    }],
    fields: [{
      type: Input,
      args: ["p-fields"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }]
  });
})();
var PoPageDynamicEditModule = class _PoPageDynamicEditModule {
  static \u0275fac = function PoPageDynamicEditModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicEditModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageDynamicEditModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoDividerModule, PoDynamicModule, PoGridModule, PoIconModule, PoPageModule, PoWidgetModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicEditModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoButtonModule, PoDividerModule, PoDynamicModule, PoGridModule, PoIconModule, PoPageModule, PoWidgetModule, PoPageDynamicModule],
      declarations: [PoPageDynamicEditComponent],
      exports: [PoPageDynamicEditComponent]
    }]
  }], null, null);
})();
var PoPageCustomizationModule = class _PoPageCustomizationModule {
  static \u0275fac = function PoPageCustomizationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageCustomizationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageCustomizationModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [PoPageCustomizationService],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageCustomizationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [PoPageCustomizationService]
    }]
  }], null, null);
})();
var poAdvancedFiltersLiteralsDefault = {
  en: {
    title: "Advanced search",
    cancelLabel: "Cancel",
    confirmLabel: "Apply filters"
  },
  es: {
    title: "B\xFAsqueda avanzada",
    cancelLabel: "Cancelar",
    confirmLabel: "Aplicar filtros"
  },
  pt: {
    title: "Busca avan\xE7ada",
    cancelLabel: "Cancelar",
    confirmLabel: "Aplicar filtros"
  },
  ru: {
    title: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A",
    cancelLabel: "\u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
    confirmLabel: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B"
  }
};
var PoAdvancedFilterBaseComponent = class _PoAdvancedFilterBaseComponent {
  poModal;
  /**
   * Mantém na modal de busca avançada os valores preenchidos do último filtro realizado pelo usuário.
   */
  keepFilters = false;
  /** Função que será disparada e receberá os valores do formulário ao ser clicado no botão buscar. */
  searchEvent = new EventEmitter();
  filter = {};
  language = poLocaleDefault;
  primaryAction = {
    action: () => {
      const models = this.getValuesFromForm();
      this.searchEvent.emit(models);
      this.poModal.close();
    },
    label: this.literals.confirmLabel
  };
  secondaryAction = {
    action: () => {
      this.poModal.close();
    },
    label: this.literals.cancelLabel
  };
  optionsServiceChosenOptions = [];
  _componentsSize = void 0;
  _filters = [];
  _literals;
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * Coleção de objetos que implementam a interface PoPageDynamicSearchFilters, para definição dos campos que serão criados
   * dinamicamente.
   */
  set filters(filters) {
    this._filters = Array.isArray(filters) ? [...filters] : [];
  }
  get filters() {
    return this._filters;
  }
  /** Objeto com as literais usadas no `po-advanced-filter`. */
  set literals(value) {
    if (value instanceof Object && !(value instanceof Array)) {
      this._literals = __spreadValues(__spreadValues(__spreadValues({}, poAdvancedFiltersLiteralsDefault[poLocaleDefault]), poAdvancedFiltersLiteralsDefault[this.language]), value);
    } else {
      this._literals = poAdvancedFiltersLiteralsDefault[this.language];
    }
    this.primaryAction.label = this.literals.confirmLabel;
    this.secondaryAction.label = this.literals.cancelLabel;
  }
  get literals() {
    return this._literals || poAdvancedFiltersLiteralsDefault[this.language];
  }
  constructor(languageService) {
    this.language = languageService.getShortLanguage();
  }
  // Retorna os models dos campos preenchidos
  getValuesFromForm() {
    let optionServiceOptions;
    Object.keys(this.filter).forEach((property) => {
      if (this.filter[property] === void 0 || this.filter[property] === "") {
        delete this.filter[property];
      }
    });
    if (this.optionsServiceChosenOptions.length) {
      optionServiceOptions = this.optionsServiceChosenOptions.filter((optionItem) => Object.values(this.filter).includes(optionItem.value));
    }
    return {
      filter: this.filter,
      optionsService: optionServiceOptions
    };
  }
  static \u0275fac = function PoAdvancedFilterBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoAdvancedFilterBaseComponent)(\u0275\u0275directiveInject(PoLanguageService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoAdvancedFilterBaseComponent,
    viewQuery: function PoAdvancedFilterBaseComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(PoModalComponent, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.poModal = _t.first);
      }
    },
    inputs: {
      keepFilters: [2, "p-keep-filters", "keepFilters", convertToBoolean],
      componentsSize: [0, "p-components-size", "componentsSize"],
      filters: [0, "p-filters", "filters"],
      literals: [0, "p-literals", "literals"]
    },
    outputs: {
      searchEvent: "p-search-event"
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoAdvancedFilterBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoLanguageService
  }], {
    poModal: [{
      type: ViewChild,
      args: [PoModalComponent, {
        static: true
      }]
    }],
    keepFilters: [{
      type: Input,
      args: [{
        alias: "p-keep-filters",
        transform: convertToBoolean
      }]
    }],
    searchEvent: [{
      type: Output,
      args: ["p-search-event"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    filters: [{
      type: Input,
      args: ["p-filters"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }]
  });
})();
var PoAdvancedFilterComponent = class _PoAdvancedFilterComponent extends PoAdvancedFilterBaseComponent {
  poDynamicForm;
  subscription = new Subscription();
  constructor() {
    const languageService = inject(PoLanguageService);
    super(languageService);
  }
  ngOnInit() {
    this.optionsServiceSubscribe();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  open() {
    this.filter = this.keepFilters ? this.getInitialValuesFromFilter(this.filters) : {};
    this.poModal.open();
  }
  getOptionsServiceItem(optionServiceObject) {
    const objectItem = this.optionsServiceChosenOptions.map((option) => option.value).indexOf(optionServiceObject.value);
    if (objectItem === -1) {
      this.optionsServiceChosenOptions = [...this.optionsServiceChosenOptions, optionServiceObject];
    }
  }
  getInitialValuesFromFilter(filters) {
    return filters.reduce((result, item) => Object.assign(result, {
      [item.property]: item.initValue
    }), {});
  }
  // Se inscreve para receber valores referentes a campos do tipo combo.
  optionsServiceSubscribe() {
    this.subscription.add(this.poDynamicForm.getObjectValue().subscribe((optionServiceObject) => {
      if (optionServiceObject) {
        this.getOptionsServiceItem(optionServiceObject);
      }
    }));
  }
  static \u0275fac = function PoAdvancedFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoAdvancedFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoAdvancedFilterComponent,
    selectors: [["po-advanced-filter"]],
    viewQuery: function PoAdvancedFilterComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(PoDynamicFormComponent, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.poDynamicForm = _t.first);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 7,
    consts: [["p-hide-close", "", 3, "p-primary-action", "p-secondary-action", "p-components-size", "p-title"], [3, "p-components-size", "p-fields", "p-value"]],
    template: function PoAdvancedFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "po-modal", 0);
        \u0275\u0275element(1, "po-dynamic-form", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("p-primary-action", ctx.primaryAction)("p-secondary-action", ctx.secondaryAction)("p-components-size", ctx.componentsSize)("p-title", ctx.literals.title);
        \u0275\u0275advance();
        \u0275\u0275property("p-components-size", ctx.componentsSize)("p-fields", ctx.filters)("p-value", ctx.filter);
      }
    },
    dependencies: [PoDynamicFormComponent, PoModalComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoAdvancedFilterComponent, [{
    type: Component,
    args: [{
      selector: "po-advanced-filter",
      standalone: false,
      template: '<po-modal\n  p-hide-close\n  [p-primary-action]="primaryAction"\n  [p-secondary-action]="secondaryAction"\n  [p-components-size]="componentsSize"\n  [p-title]="literals.title"\n>\n  <po-dynamic-form [p-components-size]="componentsSize" [p-fields]="filters" [p-value]="filter"> </po-dynamic-form>\n</po-modal>\n'
    }]
  }], () => [], {
    poDynamicForm: [{
      type: ViewChild,
      args: [PoDynamicFormComponent, {
        static: true
      }]
    }]
  });
})();
var poPageDynamicSearchLiteralsDefault = {
  en: {
    disclaimerGroupTitle: "Displaying results filtered by:",
    filterTitle: poAdvancedFiltersLiteralsDefault.en.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.en.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.en.confirmLabel,
    quickSearchLabel: "Quick search:",
    searchPlaceholder: "Search"
  },
  es: {
    disclaimerGroupTitle: "Presentando resultados filtrados por:",
    filterTitle: poAdvancedFiltersLiteralsDefault.es.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.es.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.es.confirmLabel,
    quickSearchLabel: "B\xFAsqueda r\xE1pida:",
    searchPlaceholder: "Buscar"
  },
  pt: {
    disclaimerGroupTitle: "Apresentando resultados filtrados por:",
    filterTitle: poAdvancedFiltersLiteralsDefault.pt.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.pt.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.pt.confirmLabel,
    quickSearchLabel: "Pesquisa r\xE1pida:",
    searchPlaceholder: "Pesquisar"
  },
  ru: {
    disclaimerGroupTitle: "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432, \u043E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E:",
    filterTitle: poAdvancedFiltersLiteralsDefault.ru.title,
    filterCancelLabel: poAdvancedFiltersLiteralsDefault.ru.cancelLabel,
    filterConfirmLabel: poAdvancedFiltersLiteralsDefault.ru.confirmLabel,
    quickSearchLabel: "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u043E\u0438\u0441\u043A:",
    searchPlaceholder: "\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435"
  }
};
var PoPageDynamicSearchBaseComponent = class _PoPageDynamicSearchBaseComponent {
  /** Nesta propriedade deve ser definido um array de objetos que implementam a interface `PoPageAction`. */
  actions = [];
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * @optional
   *
   * @description
   *
   * Mantém na busca avançada os valores preenchidos do último filtro realizado pelo usuário.
   *
   * @default `false`
   */
  keepFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
   *
   * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
   * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
   * rápida também na lista de `disclaimers`.
   *
   * > Os valores que são emitidos no `p-quick-search` e no `p-advanced-search`
   * permanecem separados durante a emissão dos valores alterados. A concatenação
   * é apenas nos `disclaimers`.
   *
   * @default `false`
   */
  concatFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Oculta o botão para remover todos os *disclaimers* do grupo.
   *
   * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
   *
   * @default `false`
   */
  hideRemoveAllDisclaimer = false;
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicSearchOptions`,
   * onde o usuário poderá customizar novos filtros, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicSearchOptions {
   * return {
   *   actions: [
   *     { label: 'Find on Google' },
   *   ],
   *   filters: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /** Título da página. */
  title;
  /**
   * @optional
   *
   * @description
   *
   * Valor padrão na busca rápida ao inicializar o componente
   *
   */
  quickSearchValue;
  _visibleFixedFilters = true;
  /**
   * @optional
   *
   * @description
   *
   * Controla a visibilidade dos filtros fixos na página.
   *
   * - Quando `true` (default), todos os filtros, incluindo os fixos, são exibidos, permitindo que o usuário visualize os filtros aplicados.
   * - Quando `false`, os filtros fixos são ocultados, não sendo exibidos na interface, mas ainda sendo aplicados como filtros nas requisições.
   *
   * Esta propriedade trabalha em conjunto com a propriedade `fixed` dos filtros individuais. Filtros marcados como `fixed: true` não serão exibidos na interface do filtro avançado quando `visibleFixedFilters` for `false`, mas continuarão a ser aplicados de forma transparente ao usuário. Dessa forma, permite-se maior flexibilidade no controle de quais filtros devem ser visíveis ao usuário ou devem ser aplicados permanentemente sem interferência.
   *
   * **Exemplo de uso:**
   * ```html
   * <!-- Para ocultar os filtros fixos -->
   * <po-page-dynamic-table [p-visible-fixed-filters]="false"></po-page-dynamic-table>
   * ```
   */
  set visibleFixedFilters(visible) {
    this._visibleFixedFilters = visible;
  }
  get visibleFixedFilters() {
    return this._visibleFixedFilters;
  }
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao executar a pesquisa avançada, o mesmo irá repassar um objeto com os valores preenchidos no modal de pesquisa.
   *
   * > Campos não preenchidos não irão aparecer no objeto passado por parâmetro.
   */
  advancedSearch = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao remover um ou todos os disclaimers pelo usuário.
   */
  changeDisclaimers = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao realizar uma busca pelo campo de pesquisa rápida, o mesmo será chamado repassando o valor digitado.
   */
  quickSearch = new EventEmitter();
  advancedFilterLiterals;
  _componentsSize = void 0;
  _filters = [];
  _hideCloseDisclaimers = [];
  _literals;
  _quickSearchWidth;
  language;
  previousFilters;
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-dynamic-search`.
   *
   * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    disclaimerGroupTitle: 'Filtros aplicados:',
   *    filterTitle: 'Filtro avançado',
   *    filterCancelLabel: 'Fechar',
   *    filterConfirmLabel: 'Aplicar',
   *    quickSearchLabel: 'Valor pesquisado:',
   *    searchPlaceholder: 'Pesquise aqui'
   *  };
   * ```
   *
   * Ou passando apenas as literais que deseja customizar:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    filterTitle: 'Filtro avançado'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-dynamic-search
   *   [p-literals]="customLiterals">
   * </po-page-dynamic-search>
   * ```
   *
   * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
   */
  set literals(value) {
    if (value instanceof Object && !(value instanceof Array)) {
      this._literals = __spreadValues(__spreadValues(__spreadValues({}, poPageDynamicSearchLiteralsDefault[poLocaleDefault]), poPageDynamicSearchLiteralsDefault[this.language]), value);
    } else {
      this._literals = poPageDynamicSearchLiteralsDefault[this.language];
    }
    this.setAdvancedFilterLiterals(this.literals);
  }
  get literals() {
    return this._literals || poPageDynamicSearchLiteralsDefault[this.language];
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista dos campos usados na busca avançada. Caso o mesmo não seja passado a busca avançada não será exibida.
   */
  set filters(filters) {
    this._filters = Array.isArray(filters) ? [...filters] : [];
  }
  get filters() {
    return this._filters;
  }
  /**
   * @optional
   *
   * @description
   *
   * Largura do campo de busca, utilizando o *Grid System*,
   * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
   * conforme resolução de tela para manter a consistência do layout.
   */
  set quickSearchWidth(value) {
    this._quickSearchWidth = convertToInt(value);
  }
  get quickSearchWidth() {
    return this._quickSearchWidth;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de filtros que terão a opção de fechar ocultada
   * em seu respectivo disclaimer. Utilizar o atributo `property` do filtro.
   *
   * Exemplo de utilização:
   * ```
   * ['city','name'];
   * ```
   */
  set hideCloseDisclaimers(value) {
    this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
  }
  get hideCloseDisclaimers() {
    return this._hideCloseDisclaimers;
  }
  constructor(languageService) {
    this.language = languageService.getShortLanguage();
  }
  setAdvancedFilterLiterals(literals) {
    this.advancedFilterLiterals = {
      cancelLabel: literals.filterCancelLabel,
      confirmLabel: literals.filterConfirmLabel,
      title: literals.filterTitle
    };
  }
  stringify(columns) {
    return JSON.stringify(columns, (key, value) => {
      if (key !== "searchService") {
        return value;
      }
    });
  }
  static \u0275fac = function PoPageDynamicSearchBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicSearchBaseComponent)(\u0275\u0275directiveInject(PoLanguageService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoPageDynamicSearchBaseComponent,
    inputs: {
      actions: [0, "p-actions", "actions"],
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      keepFilters: [2, "p-keep-filters", "keepFilters", convertToBoolean],
      concatFilters: [2, "p-concat-filters", "concatFilters", convertToBoolean],
      hideRemoveAllDisclaimer: [2, "p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer", convertToBoolean],
      onLoad: [0, "p-load", "onLoad"],
      title: [0, "p-title", "title"],
      quickSearchValue: [0, "p-quick-search-value", "quickSearchValue"],
      visibleFixedFilters: [0, "p-visible-fixed-filters", "visibleFixedFilters"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      literals: [0, "p-literals", "literals"],
      filters: [0, "p-filters", "filters"],
      quickSearchWidth: [0, "p-quick-search-width", "quickSearchWidth"],
      hideCloseDisclaimers: [0, "p-hide-close-disclaimers", "hideCloseDisclaimers"]
    },
    outputs: {
      advancedSearch: "p-advanced-search",
      changeDisclaimers: "p-change-disclaimers",
      quickSearch: "p-quick-search"
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicSearchBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoLanguageService
  }], {
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    keepFilters: [{
      type: Input,
      args: [{
        alias: "p-keep-filters",
        transform: convertToBoolean
      }]
    }],
    concatFilters: [{
      type: Input,
      args: [{
        alias: "p-concat-filters",
        transform: convertToBoolean
      }]
    }],
    hideRemoveAllDisclaimer: [{
      type: Input,
      args: [{
        alias: "p-hide-remove-all-disclaimer",
        transform: convertToBoolean
      }]
    }],
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    quickSearchValue: [{
      type: Input,
      args: ["p-quick-search-value"]
    }],
    visibleFixedFilters: [{
      type: Input,
      args: ["p-visible-fixed-filters"]
    }],
    advancedSearch: [{
      type: Output,
      args: ["p-advanced-search"]
    }],
    changeDisclaimers: [{
      type: Output,
      args: ["p-change-disclaimers"]
    }],
    quickSearch: [{
      type: Output,
      args: ["p-quick-search"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    filters: [{
      type: Input,
      args: ["p-filters"]
    }],
    quickSearchWidth: [{
      type: Input,
      args: ["p-quick-search-width"]
    }],
    hideCloseDisclaimers: [{
      type: Input,
      args: ["p-hide-close-disclaimers"]
    }]
  });
})();
var PoPageDynamicSearchComponent = class _PoPageDynamicSearchComponent extends PoPageDynamicSearchBaseComponent {
  languageService;
  poPageCustomizationService = inject(PoPageCustomizationService);
  changeDetector = inject(ChangeDetectorRef);
  poAdvancedFilter;
  poPageList;
  loadSubscription;
  _disclaimerGroup = {
    remove: this.onRemoveDisclaimer.bind(this),
    removeAll: this.onRemoveAllDisclaimers.bind(this),
    disclaimers: [],
    title: this.literals.disclaimerGroupTitle,
    hideRemoveAll: this.hideRemoveAllDisclaimer
  };
  _filterSettings = {
    action: this.onAction.bind(this),
    advancedAction: this.onAdvancedAction.bind(this),
    placeholder: this.literals.searchPlaceholder,
    width: this.quickSearchWidth
  };
  constructor() {
    const languageService = inject(PoLanguageService);
    super(languageService);
    this.languageService = languageService;
  }
  get disclaimerGroup() {
    return Object.assign({}, this._disclaimerGroup, {
      title: this.literals.disclaimerGroupTitle,
      hideRemoveAll: this.hideRemoveAllDisclaimer
    });
  }
  get filterSettings() {
    const thereAreValidFilters = this.filters.length > 0 && this.filters.some((filter2) => filter2.visible === true || filter2.visible === void 0);
    this._filterSettings.advancedAction = thereAreValidFilters ? this.onAdvancedAction.bind(this) : void 0;
    return Object.assign({}, this._filterSettings, {
      placeholder: this.literals.searchPlaceholder,
      width: this.quickSearchWidth
    });
  }
  ngOnInit() {
    this.setAdvancedFilterLiterals(this.literals);
    if (this.onLoad) {
      this.loadOptionsOnInitialize(this.onLoad);
    }
    if (this.quickSearchValue) {
      this.onAction(this.quickSearchValue, true);
    }
  }
  ngOnDestroy() {
    if (this.loadSubscription) {
      this.loadSubscription.unsubscribe();
    }
  }
  ngAfterViewInit() {
    if (this.stringify(this.filters) !== this.stringify(this.previousFilters)) {
      this.onChangeFilters(this.filters);
      this.previousFilters = [...this.filters];
    }
  }
  ngOnChanges(changes) {
    const visibleFixedFilters = changes.visibleFixedFilters;
    if (visibleFixedFilters && visibleFixedFilters.currentValue !== visibleFixedFilters.previousValue && this.filters.some((filter2) => filter2.fixed)) {
      this.onChangeFilters(this.filters);
      this.previousFilters = [...this.filters];
    }
  }
  onChangeFilters(filters) {
    const filterObjectWithValue = filters.filter((filter2) => filter2.initValue).reduce((prev, current) => __spreadValues(__spreadValues({}, prev), {
      [current.property]: current.initValue
    }), {});
    if (Object.keys(filterObjectWithValue).length) {
      this.onAdvancedSearch({
        filter: filterObjectWithValue
      });
    }
  }
  onAction(quickFilter, quickSearchValue) {
    const disclaimerQuickSearchUpdated = {
      property: "search",
      label: `${this.literals.quickSearchLabel} ${quickFilter}`,
      value: quickFilter,
      hideClose: this.hideCloseDisclaimers.some((hideCloseDisclaimer) => hideCloseDisclaimer === "search") || false
    };
    const getDisclaimersWithConcatFilters = () => [...this.getDisclaimersWithoutQuickSearch(), disclaimerQuickSearchUpdated];
    this._disclaimerGroup.disclaimers = this.concatFilters ? getDisclaimersWithConcatFilters() : [disclaimerQuickSearchUpdated];
    if (this.quickSearch.observers && this.quickSearch.observers.length > 0 && !quickSearchValue) {
      this.quickSearch.emit(quickFilter);
    }
    if (this.keepFilters && !this.concatFilters) {
      this.filters.forEach((element) => delete element.initValue);
    }
    this.changeDetector.detectChanges();
  }
  onAdvancedAction() {
    this.poAdvancedFilter.open();
  }
  onAdvancedSearch(filteredItems, isAdvancedSearch) {
    const {
      optionsService
    } = filteredItems;
    let {
      filter: filter2
    } = filteredItems;
    const visibleFilters = this.visibleFixedFilters === false ? this.filters.filter((filter3) => !("fixed" in filter3) || !filter3.fixed) : this.filters;
    this._disclaimerGroup.disclaimers = this.setDisclaimers(filter2, optionsService, visibleFilters);
    this.setFilters(filter2);
    filter2 = this.addComplexFilter(filter2);
    this.advancedSearch.emit(filter2);
    if (isAdvancedSearch) {
      this.poPageList.clearInputSearch();
    }
  }
  getDisclaimersWithoutQuickSearch() {
    const quickSearchProperty = "search";
    return this._disclaimerGroup.disclaimers.filter((item) => item.property !== quickSearchProperty);
  }
  setFilters(filters) {
    const formattedFilters = this.convertToFilters(filters);
    this.filters.forEach((element) => {
      const compatibleObject = formattedFilters.find((item) => item.property === element.property);
      if (compatibleObject) {
        element.initValue = compatibleObject.value;
      } else {
        delete element.initValue;
      }
    });
  }
  convertToFilters(filters) {
    return Object.entries(filters).map(([property, value]) => ({
      property,
      value
    }));
  }
  optionsServiceDisclaimerLabel(value, optionsServiceObjectsList) {
    const optionServiceMatch = optionsServiceObjectsList.find((option) => option.value === value);
    return optionServiceMatch.label || optionServiceMatch.value;
  }
  applyDisclaimerLabelValue(field, filterValue) {
    const values = Array.isArray(filterValue) ? filterValue : [filterValue];
    const labels = values.map((value) => {
      const filteredField = field.options.find((option) => option.value === value || option === value);
      if (filteredField) {
        return filteredField.label || filteredField.value || filteredField;
      }
    });
    return labels.join(", ");
  }
  formatDate(date) {
    const year = parseInt(date.substr(0, 4), 10);
    const month = parseInt(date.substr(5, 2), 10);
    const day = parseInt(date.substr(8, 2), 10);
    return new Date(year, month - 1, day).toLocaleDateString(getBrowserLanguage());
  }
  formatArrayToObjectKeyValue(filters) {
    const formattedObject = filters.reduce((result, item) => Object.assign(result, {
      [item.property]: item.value || item.initValue
    }), {});
    Object.keys(formattedObject).forEach((key) => {
      if (!formattedObject[key]) {
        delete formattedObject[key];
      }
    });
    return formattedObject;
  }
  formatValueToCurrency(field, value) {
    const language = this.languageService.getLanguage();
    return new Intl.NumberFormat(field.locale ? field.locale : language, {
      minimumFractionDigits: 2
    }).format(value);
  }
  getFieldByProperty(fields, fieldName) {
    return fields.find((field) => field.property === fieldName);
  }
  getFilterValueToDisclaimer(field, value, optionsServiceObjectsList) {
    if (field.optionsService && optionsServiceObjectsList) {
      return this.optionsServiceDisclaimerLabel(value, optionsServiceObjectsList);
    }
    if (field.type === PoDynamicFieldType.Currency && value) {
      return this.formatValueToCurrency(field, value);
    }
    if (field.type === PoDynamicFieldType.Date || field.type?.toLowerCase() === PoDynamicFieldType.DateTime) {
      return field.range ? this.formatDate(value.start) + " - " + this.formatDate(value.end) : this.formatDate(value);
    }
    if (field.options && value) {
      return this.applyDisclaimerLabelValue(field, value);
    }
    return value;
  }
  emitChangesDisclaimers(currentDisclaimers) {
    this.changeDisclaimers.emit(currentDisclaimers);
    this.setFilters(this.formatArrayToObjectKeyValue(currentDisclaimers));
  }
  onRemoveAllDisclaimers() {
    const disclaimersToKeep = this.getFixedFiltersDisclaimers();
    this.emitChangesDisclaimers(disclaimersToKeep);
  }
  onRemoveDisclaimer(removeData) {
    const {
      currentDisclaimers
    } = removeData;
    const updatedDisclaimers = [...currentDisclaimers, ...this.getFixedFiltersDisclaimers(currentDisclaimers)];
    this.emitChangesDisclaimers(updatedDisclaimers);
  }
  getFixedFiltersDisclaimers(currentDisclaimers) {
    const fixedFilters = this.filters.filter((filter2) => filter2.fixed === true && filter2.hasOwnProperty("initValue") && filter2.initValue !== void 0 && filter2.initValue !== null);
    return fixedFilters.map((filter2) => ({
      property: filter2.property,
      value: filter2.initValue,
      label: `${filter2.label}: ${filter2.initValue}`,
      hideClose: true
    })).filter((fixedFilter) => !currentDisclaimers || !currentDisclaimers.some((disclaimer) => disclaimer.property === fixedFilter.property));
  }
  setDisclaimers(filters, optionsServiceObjects, visibleFilters) {
    const disclaimers = [];
    const properties = Object.keys(filters);
    const visibleProperties = visibleFilters ? visibleFilters.map((filter2) => filter2.property) : properties;
    properties.forEach((property) => {
      if (visibleProperties.includes(property)) {
        const field = this.getFieldByProperty(this.filters, property);
        const label = field.label || capitalizeFirstLetter(field.property);
        const value = filters[property];
        const hideClose = this.hideCloseDisclaimers.some((hideCloseDisclaimer) => hideCloseDisclaimer === property) || false;
        const valueDisplayedOnTheDisclaimerLabel = this.getFilterValueToDisclaimer(field, value, optionsServiceObjects);
        if (valueDisplayedOnTheDisclaimerLabel !== "") {
          disclaimers.push({
            label: `${label}: ${valueDisplayedOnTheDisclaimerLabel}`,
            property,
            value,
            hideClose
          });
        }
      }
    });
    return disclaimers;
  }
  loadOptionsOnInitialize(onLoad) {
    this.loadSubscription = this.getPoDynamicPageOptions(onLoad).subscribe((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption));
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      title: this.title,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      filters: this.filters,
      keepFilters: this.keepFilters,
      concatFilters: this.concatFilters,
      hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
      hideCloseDisclaimers: this.hideCloseDisclaimers,
      quickSearchWidth: this.quickSearchWidth
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "filters",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true,
        keyForMerge: "label"
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }, {
        nameProp: "keepFilters"
      }, {
        nameProp: "concatFilters"
      }, {
        nameProp: "hideRemoveAllDisclaimer"
      }, {
        nameProp: "hideCloseDisclaimers"
      }, {
        nameProp: "quickSearchWidth"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  addComplexFilter(filter2) {
    let complexFilter;
    Object.keys(filter2).forEach((property) => {
      if (filter2[property].start && filter2[property].end) {
        if (!complexFilter) {
          complexFilter = "";
        } else {
          complexFilter += " and ";
        }
        complexFilter += `${property} ge '${filter2[property].start}' and ${property} le '${filter2[property].end}'`;
        delete filter2[property];
      }
    });
    if (complexFilter) {
      filter2 = Object.assign(filter2, {
        $filter: complexFilter
      });
    }
    return filter2;
  }
  static \u0275fac = function PoPageDynamicSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageDynamicSearchComponent,
    selectors: [["po-page-dynamic-search"]],
    viewQuery: function PoPageDynamicSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(PoAdvancedFilterComponent, 7);
        \u0275\u0275viewQuery(PoPageListComponent, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.poAdvancedFilter = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.poPageList = _t.first);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 11,
    consts: [["poPageList", ""], [3, "p-actions", "p-breadcrumb", "p-components-size", "p-disclaimer-group", "p-filter", "p-title", "p-quick-search-value"], [3, "p-search-event", "p-components-size", "p-filters", "p-keep-filters", "p-literals"]],
    template: function PoPageDynamicSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "po-page-list", 1, 0)(2, "po-advanced-filter", 2);
        \u0275\u0275listener("p-search-event", function PoPageDynamicSearchComponent_Template_po_advanced_filter_p_search_event_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAdvancedSearch($event, true));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("p-actions", ctx.actions)("p-breadcrumb", ctx.breadcrumb)("p-components-size", ctx.componentsSize)("p-disclaimer-group", ctx.disclaimerGroup)("p-filter", ctx.filterSettings)("p-title", ctx.title)("p-quick-search-value", ctx.quickSearchValue);
        \u0275\u0275advance(2);
        \u0275\u0275property("p-components-size", ctx.componentsSize)("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-literals", ctx.advancedFilterLiterals);
      }
    },
    dependencies: [PoPageListComponent, PoAdvancedFilterComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicSearchComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-search",
      standalone: false,
      template: '<po-page-list\n  #poPageList\n  [p-actions]="actions"\n  [p-breadcrumb]="breadcrumb"\n  [p-components-size]="componentsSize"\n  [p-disclaimer-group]="disclaimerGroup"\n  [p-filter]="filterSettings"\n  [p-title]="title"\n  [p-quick-search-value]="quickSearchValue"\n>\n  <po-advanced-filter\n    [p-components-size]="componentsSize"\n    [p-filters]="filters"\n    [p-keep-filters]="keepFilters"\n    [p-literals]="advancedFilterLiterals"\n    (p-search-event)="onAdvancedSearch($event, true)"\n  >\n  </po-advanced-filter>\n\n  <ng-content></ng-content>\n</po-page-list>\n'
    }]
  }], () => [], {
    poAdvancedFilter: [{
      type: ViewChild,
      args: [PoAdvancedFilterComponent, {
        static: true
      }]
    }],
    poPageList: [{
      type: ViewChild,
      args: [PoPageListComponent, {
        static: true
      }]
    }]
  });
})();
var PoPageDynamicSearchModule = class _PoPageDynamicSearchModule {
  static \u0275fac = function PoPageDynamicSearchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicSearchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageDynamicSearchModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoLanguageModule, PoModalModule, PoPageModule, PoPageCustomizationModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicSearchModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoDynamicModule, PoLanguageModule, PoModalModule, PoPageModule, PoPageCustomizationModule],
      declarations: [PoAdvancedFilterComponent, PoPageDynamicSearchComponent],
      exports: [PoPageDynamicSearchComponent]
    }]
  }], null, null);
})();
var PoPageDynamicListBaseComponent = class _PoPageDynamicListBaseComponent {
  /** Objeto com propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /** Endpoint da API dos recursos que serão exibidos. */
  /**
   * @description
   *
   * Endpoint usado pelo template para requisição dos recursos que serão exibidos.
   *
   * Ao realizar requisições de busca, podem ser enviados os parâmetros (caso possuam valor): `page`, `pageSize`, `search` e `order`.
   *
   * Caso a coluna estiver ordenada descendentemente será enviada da seguinte forma: `-name`, se for ordenada
   * ascendentemente será enviada apenas com o nome da coluna, por exemplo: `name`.
   *
   * Exemplo de uma requisição de busca:
   *
   * > `GET {end-point}/{resource}?page=1&pageSize=10&search=components&order=-name`
   *
   * Caso a ação `remove` estiver configurada, será feito uma requisição de exclusão nesse mesmo endpoint passando os campos
   * setados como `key: true`.
   *
   * > `DELETE {end-point}/{keys}`
   *
   * ```
   *  <po-page-dynamic-table
   *    [p-actions]="{ remove: true }"
   *    [p-fields]="[ { property: 'id', key: true } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-table>
   * ```
   *
   * Resquisição disparada, onde a propriedade `id` é igual a 2:
   *
   * ```
   *  DELETE /api/po-samples/v1/people/2 HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Para a ação `removeAll`, será feito uma requisição de exclusão em lote para esse mesmo endpoint passando, uma lista
   * de objetos com os campos setados como `key: true` via `payload`.
   *
   * > `DELETE {end-point}`
   *
   * > `Payload: [ {key}, {key} ... {key} ]`
   *
   * ```
   *  <po-page-dynamic-table
   *    [p-actions]="{ removeAll: true }"
   *    [p-fields]="[ { property: 'id', key: true } ]"
   *    p-service="/api/po-samples/v1/people"
   *    ...>
   *  </po-page-dynamic-table>
   * ```
   *
   * Resquisição disparada, onde foram selecionados 3 itens para serem removidos:
   *
   * ```
   *  DELETE /api/po-samples/v1/people HTTP/1.1
   *  Host: localhost:4000
   *  Connection: keep-alive
   *  Accept: application/json, text/plain
   *  ...
   * ```
   *
   * Request payload:
   *
   * ```
   * [{"id":2},{"id":4},{"id":5}]
   * ```
   *
   * > Caso esteja usando metadados com o template, será disparado uma requisição na inicialização do template para buscar
   * > os metadados da página passando o tipo do metadado esperado e a versão cacheada pelo browser.
   * >
   * > `GET {end-point}/metadata?type=list&version={version}`
   */
  serviceApi;
  /** Título da página. */
  title;
  /**
   * @optional
   *
   * @description
   * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
   *
   * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
   * Por exemplo: ["idCard", "name", "hireStatus", "age"].
   */
  changeVisibleColumns = new EventEmitter();
  /**
   * @optional
   *
   * @description
   * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
   *
   * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
   * Por exemplo: ["idCard", "name", "hireStatus", "age"].
   */
  columnRestoreManager = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento executado ao ordenar colunas da tabela.
   *
   * Recebe um objeto `{ column, type }` onde:
   *
   * - column (`PoTableColumn`): objeto da coluna que foi clicada/ordenada.
   * - type (`PoTableColumnSortType`): tipo da ordenação.
   */
  sortBy = new EventEmitter();
  _autoRouter = false;
  _columns = [];
  _duplicates = [];
  _fields = [];
  _filters = [];
  _keys = [];
  /**
   * @optional
   *
   * @description
   *
   * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `p-actions`
   *
   * As rotas criadas serão baseadas na propriedade `p-actions`.
   *
   * > Para o correto funcionamento não pode haver nenhuma rota coringa (`**`) especificada.
   *
   * @default false
   */
  set autoRouter(value) {
    this._autoRouter = convertToBoolean(value);
  }
  get autoRouter() {
    return this._autoRouter;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista dos campos usados na tabela e busca avançada.
   *
   *
   * > Caso não seja definido fields a tabela assumirá o comportamento padrão.
   */
  set fields(fields) {
    this._fields = Array.isArray(fields) ? [...fields] : [];
    this.setFieldsProperties(this.fields);
  }
  get fields() {
    return this._fields;
  }
  set columns(value) {
    this._columns = [...this._columns = this.sortColumnsByOrder(value)];
  }
  get columns() {
    return this._columns;
  }
  set duplicates(value) {
    this._duplicates = [...value];
  }
  get duplicates() {
    return this._duplicates;
  }
  set filters(value) {
    this._filters = [...value];
  }
  get filters() {
    return this._filters;
  }
  set keys(value) {
    this._keys = [...value];
  }
  get keys() {
    return this._keys;
  }
  setFieldsProperties(fields) {
    let visibleFilter;
    this.filters = fields.filter((field) => field.filter === true).map((filterField) => {
      visibleFilter = !(filterField.initValue && filterField.fixed);
      return __spreadProps(__spreadValues({}, filterField), {
        visible: visibleFilter
      });
    });
    this.columns = fields.filter((field) => field.visible === void 0 || field.visible === true || field.allowColumnsManager === true);
    this.keys = fields.filter((field) => field.key === true).map((field) => field.property);
    this.duplicates = fields.filter((field) => field.duplicate === true).map((field) => field.property);
  }
  /**
   * Ordena um array de colunas com base na propriedade `order` de cada coluna.
   *
   * Este método é utilizado para organizar as colunas de uma tabela ou qualquer coleção similar
   * que necessite de ordenação baseada em um critério numérico definido pela propriedade `order`.
   * A ordenação segue as seguintes regras:
   *
   * 1. Colunas que possuem a propriedade `order` com um valor numérico válido e maior que zero
   *    são ordenadas em ordem crescente de acordo com este valor.
   *
   * 2. Colunas que não possuem a propriedade `order` ou que possuem um valor inválido ou não numérico
   *    para esta propriedade são consideradas iguais em termos de ordenação e mantêm a ordem original
   *    em que apareceram no array fornecido.
   *
   * 3. No caso de duas colunas com valores de `order` válidos e idênticos, a ordem entre essas duas colunas
   *    é determinada pela sua ordem original no array fornecido.
   *
   * @param columns Array de colunas a ser ordenado. Cada coluna é um objeto que pode conter uma propriedade `order`.
   *                O tipo `Array<any>` é utilizado aqui para permitir flexibilidade nos objetos de coluna que podem ser passados,
   *                mas espera-se que cada objeto tenha pelo menos uma propriedade `order` para a ordenação adequada.
   *
   * @returns Um novo array de colunas ordenado com base na propriedade `order`.
   */
  sortColumnsByOrder(columns) {
    return columns.sort((a, b) => {
      const hasValidOrderA = "order" in a && typeof a.order === "number" && a.order > 0;
      const hasValidOrderB = "order" in b && typeof b.order === "number" && b.order > 0;
      if (hasValidOrderA && hasValidOrderB) {
        return a.order - b.order;
      }
      if (hasValidOrderA) {
        return -1;
      }
      if (hasValidOrderB) {
        return 1;
      }
      return 0;
    });
  }
  static \u0275fac = function PoPageDynamicListBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicListBaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoPageDynamicListBaseComponent,
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      title: [0, "p-title", "title"],
      autoRouter: [0, "p-auto-router", "autoRouter"],
      fields: [0, "p-fields", "fields"]
    },
    outputs: {
      changeVisibleColumns: "p-change-visible-columns",
      columnRestoreManager: "p-restore-column-manager",
      sortBy: "p-sort-by"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicListBaseComponent, [{
    type: Directive
  }], null, {
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    changeVisibleColumns: [{
      type: Output,
      args: ["p-change-visible-columns"]
    }],
    columnRestoreManager: [{
      type: Output,
      args: ["p-restore-column-manager"]
    }],
    sortBy: [{
      type: Output,
      args: ["p-sort-by"]
    }],
    autoRouter: [{
      type: Input,
      args: ["p-auto-router"]
    }],
    fields: [{
      type: Input,
      args: ["p-fields"]
    }]
  });
})();
var PoPageDynamicTableActionsService = class _PoPageDynamicTableActionsService {
  http = inject(HttpClient);
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  beforeDuplicate(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeEdit(action, id, body) {
    const resource = body ?? {};
    return this.executeAction({
      action,
      resource,
      id
    });
  }
  beforeNew(action) {
    return this.executeAction({
      action
    });
  }
  beforeRemove(action, id, resource) {
    return this.executeAction({
      action,
      id,
      resource
    });
  }
  beforeRemoveAll(action, resources) {
    return this.executeAction({
      action,
      resource: resources
    });
  }
  beforeDetail(action, id, resource) {
    return this.executeAction({
      action,
      id,
      resource
    });
  }
  customAction(action, resource = []) {
    return this.executeAction({
      action,
      resource
    });
  }
  executeAction({
    action,
    resource = {},
    id
  }) {
    if (!action) {
      return of({});
    }
    if (typeof action === "string") {
      const url = id ? `${action}/${id}` : action;
      return this.http.post(url, resource, {
        headers: this.headers
      });
    }
    if (id) {
      return of(action(id, resource));
    }
    return of(action(resource));
  }
  static \u0275fac = function PoPageDynamicTableActionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicTableActionsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageDynamicTableActionsService,
    factory: _PoPageDynamicTableActionsService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicTableActionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var poPageDynamicTableLiteralsDefault = {
  en: {
    pageAction: "New",
    pageActionRemoveAll: "Delete",
    tableActionView: "View",
    tableActionEdit: "Edit",
    tableActionDuplicate: "Duplicate",
    tableActionDelete: "Delete",
    confirmRemoveTitle: "Confirm delete",
    confirmRemoveMessage: "Are you sure you want to delete this record? You can not undo this action.",
    confirmRemoveAllTitle: "Confirm batch deletion",
    confirmRemoveAllMessage: "Are you sure you want to delete all these records? You can not undo this action.",
    loadDataErrorNotification: "Service not found",
    removeSuccessNotification: "Item deleted successfully",
    removeAllSuccessNotification: "Items deleted successfully"
  },
  es: {
    pageAction: "Nuevo",
    pageActionRemoveAll: "Borrar",
    tableActionView: "Visualizar",
    tableActionEdit: "Editar",
    tableActionDuplicate: "Duplicar",
    tableActionDelete: "Borrar",
    confirmRemoveTitle: "Confirmar la exclusi\xF3n",
    confirmRemoveMessage: "\xBFEst\xE1 seguro de que desea eliminar este registro? No puede deshacer esta acci\xF3n.",
    confirmRemoveAllTitle: "Confirmar la exclusi\xF3n por lotes",
    confirmRemoveAllMessage: "\xBFEst\xE1 seguro de que desea eliminar todos estos registros? No puede deshacer esta acci\xF3n.",
    loadDataErrorNotification: "Servicio no informado.",
    removeSuccessNotification: "Elemento eliminado con \xE9xito",
    removeAllSuccessNotification: "Elementos eliminados con \xE9xito"
  },
  pt: {
    pageAction: "Novo",
    pageActionRemoveAll: "Excluir",
    tableActionView: "Visualizar",
    tableActionEdit: "Editar",
    tableActionDuplicate: "Duplicar",
    tableActionDelete: "Excluir",
    confirmRemoveTitle: "Confirmar exclus\xE3o",
    confirmRemoveMessage: "Tem certeza de que deseja excluir esse registro? Voc\xEA n\xE3o poder\xE1 desfazer essa a\xE7\xE3o.",
    confirmRemoveAllTitle: "Confirmar exclus\xE3o em lote",
    confirmRemoveAllMessage: "Tem certeza de que deseja excluir todos esses registros? Voc\xEA n\xE3o poder\xE1 desfazer essa a\xE7\xE3o.",
    loadDataErrorNotification: "Servi\xE7o n\xE3o informado.",
    removeSuccessNotification: "Item excluido com sucesso",
    removeAllSuccessNotification: "Items excluidos com sucesso"
  },
  ru: {
    pageAction: "\u041D\u043E\u0432\u044B\u0439",
    pageActionRemoveAll: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    tableActionView: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
    tableActionEdit: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    tableActionDuplicate: "\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    tableActionDelete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    confirmRemoveTitle: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F",
    confirmRemoveMessage: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043F\u0438\u0441\u044C?  \u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",
    confirmRemoveAllTitle: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u043A\u0435\u0442\u0430",
    confirmRemoveAllMessage: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u044D\u0442\u0438 \u0437\u0430\u043F\u0438\u0441\u0438? \u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",
    loadDataErrorNotification: "\u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
    removeSuccessNotification: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D",
    removeAllSuccessNotification: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u044B"
  }
};
var PAGE_SIZE_DEFAULT = 10;
var PoPageDynamicTableComponent = class _PoPageDynamicTableComponent extends PoPageDynamicListBaseComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  poDialogService = inject(PoDialogService);
  poNotification = inject(PoNotificationService);
  poPageDynamicService = inject(PoPageDynamicService);
  poPageCustomizationService = inject(PoPageCustomizationService);
  poPageDynamicTableActionsService = inject(PoPageDynamicTableActionsService);
  /**
   * Função ou serviço que será executado na inicialização do componente.
   *
   * A propriedade aceita os seguintes tipos:
   * - `string`: *Endpoint* usado pelo componente para requisição via `POST`.
   * - `function`: Método que será executado.
   *
   * O retorno desta função deve ser do tipo `PoPageDynamicTableOptions`,
   * onde o usuário poderá customizar novos campos, breadcrumb, title e actions
   *
   * Por exemplo:
   *
   * ```
   * getPageOptions(): PoPageDynamicTableOptions {
   * return {
   *   actions:
   *     { new: 'new', edit: 'edit/:id', remove: true },
   *   fields: [
   *     { property: 'idCard', gridColumns: 6 }
   *   ]
   * };
   * }
   *
   * ```
   * Para referenciar a sua função utilize a propriedade `bind`, por exemplo:
   * ```
   *  [p-load]="onLoadOptions.bind(this)"
   * ```
   */
  onLoad;
  /**
   * @optional
   *
   * @description
   *
   * Mantém na modal de `Busca Avançada` os valores preenchidos do último filtro realizado pelo usuário.
   *
   * @default `false`
   */
  keepFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Define que a coluna de ações ficará no lado direito da tabela.
   *
   * @default `false`
   */
  actionRight = false;
  /**
   * @optional
   *
   * @description
   *
   * Permite a utilização da pesquisa rápida junto com a pesquisa avançada.
   *
   * Desta forma, ao ter uma pesquisa avançada estabelecida e ser
   * preenchido a pesquisa rápida, o filtro será concatenado adicionando a pesquisa
   * rápida também na lista de `disclaimers` a aplicando uma nova busca com a concatenação.
   *
   * Por exemplo, com os seguintes filtros aplicados:
   *   - filtro avançado: `{ name: 'Mike', age: '12' }`
   *   - filtro rápido: `{ search: 'paper' }`
   *
   * A requisição dos dados na API ficará com os parâmetros:
   * ```
   * page=1&pageSize=10&name=Mike&age=12&search=paper
   * ```
   *
   * @default `false`
   */
  concatFilters = false;
  /**
   * @optional
   *
   * @description
   *
   * Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.
   *
   * @default `false`
   */
  hideColumnsManager = false;
  /**
   * @optional
   *
   * @description
   *
   * Oculta o botão para remover todos os *disclaimers* do grupo.
   *
   * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
   *
   * @default `false`
   */
  hideRemoveAllDisclaimer = false;
  /**
   * @optional
   *
   * @description
   *
   * Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o botão "Carregar Mais" deixará de ser exibido. Ao chegar no fim da tabela
   * executará a função `p-show-more`.
   *
   * **Regras de utilização:**
   *  - O scroll infinito só funciona para tabelas que utilizam a propriedade `p-height` e que possuem o scroll já na carga inicial dos dados.
   *
   * @default `false`
   */
  infiniteScroll = false;
  hasNext = false;
  items = [];
  literals;
  pageActions = [];
  tableActions = [];
  _actions = {};
  _pageCustomActions = [];
  _height;
  _oldQuickSearchParam;
  _quickSearchParam = "search";
  _quickSearchValue;
  _quickSearchWidth;
  _tableCustomActions = [];
  page = 1;
  currentPage = 1;
  itemSelectedAction;
  params = {};
  sortedColumn;
  subscriptions = new Subscription();
  hasCustomActionWithSelectable = false;
  _componentsSize = void 0;
  _customPageListActions = [];
  _customTableActions = [];
  _defaultPageActions = [];
  _defaultTableActions = [];
  _hideCloseDisclaimers = [];
  _draggable = false;
  _virtualScroll = true;
  set defaultPageActions(value) {
    this._defaultPageActions = value;
    this.updatePageActions();
  }
  set defaultTableActions(value) {
    this._defaultTableActions = value;
    this.updateTableActions();
  }
  set customPageListActions(value) {
    this._customPageListActions = value;
    this.updatePageActions();
  }
  set customTableActions(value) {
    this._customTableActions = value;
    this.updateTableActions();
  }
  /**
   * @optional
   *
   * @description
   *
   * Ações da página e da tabela.
   * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
   */
  set actions(value) {
    this._actions = value && typeof value === "object" && Object.keys(value).length > 0 ? value : {};
    this.setPageActions(this.actions);
    this.setRemoveAllAction();
    this.setTableActions(this.actions);
  }
  get actions() {
    return this._actions;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de ações customizadas da página que serão incorporadas às ações
   * informadas através da propriedade `p-actions`.
   *
   * Essas ações ficam localizadas na parte superior da página em botões com ações.
   *
   * Exemplo de utilização:
   * ```
   * [
   *  { label: 'Export', action: this.export.bind(this) },
   *  { label: 'Print', action: this.print.bind(this) }
   * ];
   * ```
   */
  set pageCustomActions(value) {
    this._pageCustomActions = Array.isArray(value) ? value : [];
    this.customPageListActions = this.transformCustomActionsToPageListAction(this.pageCustomActions);
    this.hasCustomActionWithSelectable = this.pageCustomActions.some((customAction) => customAction.selectable);
  }
  get pageCustomActions() {
    return this._pageCustomActions;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de ações customizadas na tabela da página que serão incorporadas às ações
   * informadas através da propriedade `p-actions`.
   *
   * Exemplo de utilização:
   * ```
   * [
   *  { label: 'Apply discount', action: this.applyDiscount.bind(this) },
   *  { label: 'Details', action: this.details.bind(this) }
   * ];
   * ```
   * > Caso utilizar a ação padrão de excluir, a mesma será exibida por último na tabela.
   */
  set tableCustomActions(value) {
    this._tableCustomActions = Array.isArray(value) ? value : [];
    this.customTableActions = this.transformTableCustomActionsToTableActions(this.tableCustomActions);
  }
  get tableCustomActions() {
    return this._tableCustomActions;
  }
  /**
   * @optional
   *
   * @description
   *
   * Largura do campo de busca, utilizando o *Grid System*,
   * e limitado ao máximo de 6 colunas. O tamanho mínimo é controlado
   * conforme resolução de tela para manter a consistência do layout.
   */
  set quickSearchWidth(value) {
    this._quickSearchWidth = convertToInt(value);
  }
  get quickSearchWidth() {
    return this._quickSearchWidth;
  }
  /**
   * @optional
   *
   * @description
   *
   * Define a altura da tabela em *pixels* e fixa o cabeçalho.
   */
  set height(value) {
    this._height = convertToInt(value);
  }
  get height() {
    return this._height;
  }
  /**
   * @optional
   *
   * @description
   *
   * Lista de filtros que terão a opção de fechar ocultada
   * em seu respectivo disclaimer. Utilizar o atributo `property` do campo.
   *
   * Exemplo de utilização:
   * ```
   * ['city','name'];
   * ```
   */
  set hideCloseDisclaimers(value) {
    this._hideCloseDisclaimers = Array.isArray(value) ? value : [];
  }
  get hideCloseDisclaimers() {
    return this._hideCloseDisclaimers;
  }
  /**
   * @optional
   *
   * @description
   *
   * Identificador do parâmetro enviado ao serviço ao realizar uma busca rápida.
   *
   * @default 'search'
   */
  set quickSearchParam(value) {
    this._quickSearchParam = value ?? "search";
  }
  get quickSearchParam() {
    return this._quickSearchParam;
  }
  /**
   * @optional
   *
   * @description
   *
   * Valor padrão na busca rápida ao inicializar o componente
   *
   */
  set quickSearchValue(value) {
    this._quickSearchValue = value;
  }
  get quickSearchValue() {
    return this._quickSearchValue;
  }
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-dynamic-table`.
   *
   * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    disclaimerGroupTitle: 'Filtros aplicados:',
   *    filterTitle: 'Filtro avançado',
   *    filterCancelLabel: 'Fechar',
   *    filterConfirmLabel: 'Aplicar',
   *    quickSearchLabel: 'Valor pesquisado:',
   *    searchPlaceholder: 'Pesquise aqui'
   *  };
   * ```
   *
   * Ou passando apenas as literais que deseja customizar:
   *
   * ```
   *  const customLiterals: PoPageDynamicSearchLiterals = {
   *    filterTitle: 'Filtro avançado'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-dynamic-table
   *   [p-literals]="customLiterals">
   * </po-page-dynamic-table>
   * ```
   *
   * > O valor padrão será traduzido de acordo com o idioma configurado no [`PoI18nService`](/documentation/po-i18n) ou *browser*.
   */
  searchLiterals;
  /**
   * @optional
   *
   * @description
   *
   * Define o espaçamento interno das células, impactando diretamente na altura das linhas do table. Os valores
   * permitidos são definidos pelo enum **PoTableColumnSpacing**.
   *
   * > Em nível de acessibilidade **AA**, caso o valor de `p-spacing` não seja definido, o valor padrão será
   * > `extraSmall` nos seguintes cenários:
   * > - Quando o valor de `p-components-size` for `small`;
   * > - Quando o valor padrão dos componentes for configurado como `small` no
   * > [serviço de tema](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  spacing;
  /**
   * @optional
   *
   * @description
   *
   * Habilita ou desabilita a quebra automática de texto. Quando ativada, o texto que excede
   * o espaço disponível é transferido para a próxima linha em pontos apropriados para uma
   * leitura clara.
   *
   * > Incompatível com `virtual-scroll`, que requer altura fixa nas linhas.
   *
   * @default `false`
   */
  textWrap = false;
  /**
   * @optional
   *
   * @description
   *
   * Habilita o modo drag and drop para as colunas da tabela.
   *
   */
  set draggable(value) {
    this._draggable = value;
  }
  get draggable() {
    return this._draggable;
  }
  /**
   * @optional
   *
   * @description
   *
   * Habilita o `virtual-scroll` na tabela para melhorar a performance com grandes volumes de dados.
   * Requer altura (`p-height`) para funcionar corretamente.
   *
   * > Incompatível com `p-text-wrap` e `master-detail`, pois o `virtual-scroll` exige altura fixa nas linhas.
   *
   * @default `true`
   */
  set virtualScroll(value) {
    this._virtualScroll = convertToBoolean(value && this.height > 0);
  }
  get virtualScroll() {
    return this._virtualScroll;
  }
  /**
   * @optional
   *
   * @description
   *
   * Controla a visibilidade dos filtros fixos na página.
   *
   * - Quando `true` (default), todos os filtros, incluindo os fixos, são exibidos, permitindo que o usuário visualize os filtros aplicados.
   * - Quando `false`, os filtros fixos são ocultados, não sendo exibidos na interface, mas ainda sendo aplicados como filtros nas requisições.
   *
   * Esta propriedade trabalha em conjunto com a propriedade `fixed` dos filtros individuais. Filtros marcados como `fixed: true` não serão exibidos na interface do filtro avançado quando `visibleFixedFilters` for `false`, mas continuarão a ser aplicados de forma transparente ao usuário. Dessa forma, permite-se maior flexibilidade no controle de quais filtros devem ser visíveis ao usuário ou devem ser aplicados permanentemente sem interferência.
   *
   * **Exemplo de uso:**
   * ```html
   * <!-- Para ocultar os filtros fixos -->
   * <po-page-dynamic-table [p-visible-fixed-filters]="false"></po-page-dynamic-table>
   * ```
   */
  visibleFixedFilters = true;
  /* eslint-disable max-params */
  constructor() {
    const languageService = inject(PoLanguageService);
    super();
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, poPageDynamicTableLiteralsDefault[poLocaleDefault]), poPageDynamicTableLiteralsDefault[language]);
  }
  /* eslint-enable max-params */
  ngOnInit() {
    this.loadDataFromAPI();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  onAdvancedSearch(filter2) {
    this.subscriptions.add(this.loadData(__spreadValues({
      page: 1
    }, filter2)).subscribe());
    this.params = filter2;
    if (this.keepFilters) {
      this.updateFilterValue(filter2);
    }
  }
  onChangeDisclaimers(disclaimers) {
    const filter2 = {};
    disclaimers.forEach((disclaimer) => {
      filter2[disclaimer.property] = disclaimer.value;
    });
    this.onAdvancedSearch(filter2);
  }
  onQuickSearch(termTypedInQuickSearch) {
    const quickSearchParam = termTypedInQuickSearch ? {
      [this.quickSearchParam]: termTypedInQuickSearch
    } : {};
    this.params = this.concatFilters ? __spreadValues(__spreadValues({}, this.params), quickSearchParam) : __spreadValues({}, quickSearchParam);
    if (this._oldQuickSearchParam in this.params && this._oldQuickSearchParam !== this.quickSearchParam) {
      delete this.params[this._oldQuickSearchParam];
    }
    this._oldQuickSearchParam = this.quickSearchParam;
    this.subscriptions.add(this.loadData(termTypedInQuickSearch ? __spreadValues({
      page: 1
    }, this.params) : void 0).subscribe());
  }
  onSort(sortedColumn) {
    if (this.height) {
      const order = sortedColumn.type === "ascending" ? true : false;
      sortArrayOfObjects(this.items, sortedColumn.column.property, order);
    }
    this.sortedColumn = sortedColumn;
  }
  onChangeVisibleColumns(value) {
    this.changeVisibleColumns.emit(value);
  }
  onColumnRestoreManager(value) {
    this.columnRestoreManager.emit(value);
  }
  onSortBy(sortedColumn) {
    this.sortBy.emit(sortedColumn);
  }
  showMore() {
    this.subscriptions.add(this.loadData(__spreadValues({
      page: ++this.page
    }, this.params)).subscribe());
  }
  get enableSelectionTable() {
    return this.hasActionRemoveAll || this.hasCustomActionWithSelectable;
  }
  get hasActionRemoveAll() {
    return !!this.actions.removeAll;
  }
  /**
   * Função que realiza a atualização dos dados da tabela.
   *
   * Para utilizá-la é necessário capturar a instância do `page dynamic table`, como por exemplo:
   *
   * ``` html
   * <po-page-dynamic-table #dynamicTable [p-service-api]="serviceApi"></po-page-dynamic-table>
   * ```
   *
   * ``` javascript
   * import { PoPageDynamicTableComponent, PoDynamicFormField } from '@po-ui/ng-components';
   *
   * ...
   *
   * @ViewChild('dynamicTable', { static: true }) dynamicTable: PoPageDynamicTableComponent;
   *
   * pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
   * {
   *   label: 'Update',
   *   action: this.updateTable.bind(this),
   *   icon: 'an-arrows-clockwise'
   * }]
   *
   * updateTable() {
   *   this.dynamicTable.updateDataTable();
   * }
   * ```
   *
   *
   * @param {{page: number, key: value }} filter Propriedade para envio de um filtro customizado.
   * Exemplo de envio:
   *
   *```
   * this.dynamicTable.updateDataTable({page: 3, search: 'Brasil'});
   * ```
   * Caso não seja passado um filtro customizado para o método `updateDataTable` a tabela será atualizada conforme a página do ultimo item modificado.
   */
  updateDataTable(filter2) {
    const indexItemSelected = this.items.findIndex((item) => item === this.itemSelectedAction);
    const pageNumber = Math.floor(indexItemSelected / PAGE_SIZE_DEFAULT);
    this.currentPage = pageNumber < 0 ? this.currentPage : pageNumber + 1;
    if (this.currentPage === void 0) {
      this.currentPage = 1;
    }
    if (filter2) {
      this.subscriptions.add(this.loadData(filter2).subscribe());
    } else {
      this.subscriptions.add(this.loadData(__spreadValues({
        page: this.currentPage
      }, this.params)).subscribe());
    }
  }
  confirmRemove(actionRemove, actionBeforeRemove, item) {
    const confirmOptions = {
      title: this.literals.confirmRemoveTitle,
      message: this.literals.confirmRemoveMessage,
      componentsSize: this.componentsSize,
      confirm: this.remove.bind(this, item, actionRemove, actionBeforeRemove)
    };
    this.poDialogService.confirm(confirmOptions);
  }
  confirmRemoveAll(actionRemoveAll, actionBeforeRemoveAll) {
    const confirmOptions = {
      title: this.literals.confirmRemoveAllTitle,
      message: this.literals.confirmRemoveAllMessage,
      confirm: this.removeAll.bind(this, actionRemoveAll, actionBeforeRemoveAll)
    };
    this.poDialogService.confirm(confirmOptions);
  }
  formatUniqueKey(item) {
    const keys = mapObjectByProperties(item, this.keys);
    return valuesFromObject(keys).join("|");
  }
  getOrderParam(sortedColumn = {
    type: void 0
  }) {
    const {
      column,
      type
    } = sortedColumn;
    if (!column) {
      return {};
    }
    if (type === PoTableColumnSortType.Descending) {
      return {
        order: `-${column.property}`
      };
    }
    return {
      order: `${column.property}`
    };
  }
  loadData(params = {}) {
    if (!this.serviceApi) {
      this.poNotification.error(this.literals.loadDataErrorNotification);
      return EMPTY;
    }
    const orderParam = this.getOrderParam(this.sortedColumn);
    const defaultParams = {
      page: 1,
      pageSize: PAGE_SIZE_DEFAULT
    };
    const fullParams = __spreadValues(__spreadValues(__spreadValues({}, defaultParams), params), orderParam);
    return this.poPageDynamicService.getResources(fullParams).pipe(tap((response) => {
      let newArray;
      if (fullParams.page === 1) {
        newArray = removeDuplicateItemsWithArrayKey(response.items, response.items, this.keys);
      } else {
        newArray = removeDuplicateItemsWithArrayKey(this.items, response.items, this.keys);
      }
      this.items = newArray ? [...newArray] : this.items;
      this.page = fullParams.page;
      this.hasNext = response.hasNext;
    }));
  }
  getMetadata(serviceApiFromRoute, onLoad) {
    if (serviceApiFromRoute) {
      return this.poPageDynamicService.getMetadata().pipe(tap((response) => {
        this.autoRouter = response.autoRouter || this.autoRouter;
        this.actions = response.actions || this.actions;
        this.breadcrumb = response.breadcrumb || this.breadcrumb;
        this.fields = response.fields || this.fields;
        this.title = response.title || this.title;
        this.pageCustomActions = response.pageCustomActions || this.pageCustomActions;
        this.tableCustomActions = response.tableCustomActions || this.tableCustomActions;
        this.keepFilters = response.keepFilters || this.keepFilters;
        this.concatFilters = response.concatFilters || this.concatFilters;
        this.hideRemoveAllDisclaimer = response.hideRemoveAllDisclaimer || this.hideRemoveAllDisclaimer;
        this.hideCloseDisclaimers = response.hideCloseDisclaimers || this.hideCloseDisclaimers;
        this.quickSearchWidth = response.quickSearchWidth || this.quickSearchWidth;
      }), switchMap(() => this.loadOptionsOnInitialize(onLoad)));
    }
    return this.loadOptionsOnInitialize(onLoad);
  }
  // @todo Validar rotas na mão pois se existir uma rota '**' o catch do navigation não funciona.
  navigateTo(route, forceStopAutoRouter = false) {
    if (isExternalLink(route.path)) {
      return openExternalLink(route.path);
    }
    this.router.navigate([route.url || route.path], {
      queryParams: route.params
    }).catch(() => {
      if (forceStopAutoRouter || !this.autoRouter) {
        return;
      }
      this.router.config.unshift({
        path: route.path,
        component: route.component,
        data: {
          serviceApi: this.serviceApi,
          autoRouter: true
        }
      });
      this.navigateTo(route, true);
    });
  }
  createConcatenatedUrl(concatKeys, url, selectedItem) {
    const keys = this.keys.map((key) => encodeURIComponent(selectedItem[key])).join();
    return concatKeys ? `${url}/${keys}` : url;
  }
  openDetail(action, item) {
    const id = this.formatUniqueKey(item);
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeDetail(this.actions.beforeDetail, id, item).subscribe((beforeDetailResult) => this.executeDetail(action, beforeDetailResult, id, item)));
  }
  executeDetail(action, beforeDetailResult, id, item) {
    const before = beforeDetailResult ?? {};
    const allowAction = typeof before.allowAction === "boolean" ? before.allowAction : true;
    const {
      newUrl
    } = before;
    if (allowAction && action) {
      if (newUrl) {
        const path = this.getPathFromNewUrl(newUrl, id);
        return this.navigateTo({
          path
        });
      }
      if (typeof action === "string") {
        const url = this.resolveUrl(item, action);
        this.navigateTo({
          path: action,
          url,
          component: PoPageDynamicDetailComponent
        });
      } else {
        action(id, item);
      }
    }
  }
  getPathFromNewUrl(newUrl, id) {
    if (newUrl.includes(":id")) {
      return newUrl.replace(/:id/g, id);
    }
    return newUrl;
  }
  openDuplicate(actionDuplicate, item) {
    const id = this.formatUniqueKey(item);
    const duplicates = removeKeysProperties(this.keys, mapObjectByProperties(item, this.duplicates));
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeDuplicate(this.actions.beforeDuplicate, id, duplicates).subscribe((beforeDuplicateResult) => this.executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates)));
  }
  executeDuplicate(actionDuplicate, beforeDuplicateResult, duplicates) {
    const before = beforeDuplicateResult ?? {};
    const allowAction = typeof before.allowAction === "boolean" ? before.allowAction : true;
    const beforeDuplicateResource = before.resource;
    const newAction = before.newUrl ?? actionDuplicate;
    if (allowAction && actionDuplicate) {
      if (typeof beforeDuplicateResource === "object" && beforeDuplicateResource !== null) {
        duplicates = removeKeysProperties(this.keys, beforeDuplicateResource);
      }
      if (typeof newAction === "string") {
        return this.navigateTo({
          path: newAction,
          params: {
            duplicate: JSON.stringify(duplicates)
          }
        });
      }
      return newAction(duplicates);
    }
  }
  openEdit(actionEdit, item) {
    const id = this.formatUniqueKey(item);
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeEdit(this.actions.beforeEdit, id, item).pipe(switchMap((beforeEditResult) => this.executeEditAction(actionEdit, beforeEditResult, item, id))).subscribe());
  }
  executeEditAction(action, beforeEditResult, item, id) {
    const newEditAction = beforeEditResult?.newUrl ?? action;
    const allowAction = beforeEditResult?.allowAction ?? true;
    if (!allowAction) {
      return EMPTY;
    }
    if (typeof newEditAction === "string") {
      this.openEditUrl(newEditAction, item);
    } else {
      const updatedItem = newEditAction(id, item);
      if (typeof updatedItem === "object" && updatedItem !== null) {
        this.modifyUITableItem(item, removeKeysProperties(this.keys, updatedItem));
      }
    }
    return EMPTY;
  }
  openEditUrl(path, item) {
    const url = this.resolveUrl(item, path);
    this.navigateTo({
      path,
      url
    });
  }
  modifyUITableItem(currentItem, newItemValue) {
    const tableItem = this.items.findIndex((item) => item === currentItem);
    this.items[tableItem] = __spreadValues(__spreadValues({}, currentItem), newItemValue);
  }
  openNew(actionNew) {
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeNew(this.actions.beforeNew).subscribe((beforeNewResult) => this.executeNew(actionNew, beforeNewResult)));
  }
  executeNew(actionNew, beforeNewResult) {
    const before = beforeNewResult ?? {};
    const allowAction = typeof before.allowAction === "boolean" ? before.allowAction : true;
    const {
      newUrl
    } = before;
    if (allowAction && actionNew) {
      if (newUrl) {
        return this.navigateTo({
          path: newUrl
        });
      }
      if (typeof actionNew === "string") {
        return this.navigateTo({
          path: actionNew
        });
      }
      return actionNew();
    }
  }
  /**
   * Caso exista mais de um identificador, será concatenado com '|'.
   *
   * Ex: { id: 1, company: 'po' }
   *
   * Para o endpoint /resources/:id será executada a url /resources/1|po
   */
  remove(item, actionRemove, actionBeforeRemove) {
    const uniqueKey = this.formatUniqueKey(item);
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeRemove(actionBeforeRemove, uniqueKey, item).pipe(switchMap((beforeRemove) => this.deleteAction(item, actionRemove, beforeRemove))).subscribe());
  }
  deleteAction(item, actionRemove, beforeRemove) {
    const {
      allowAction,
      newUrl
    } = beforeRemove || {};
    const allow = allowAction ?? true;
    if (allow) {
      let uniqueKey = this.formatUniqueKey(item);
      const resourceToRemoveKey = this.returnResourcesKeys([item]);
      if (typeof actionRemove === "boolean" || newUrl) {
        uniqueKey = newUrl ? void 0 : uniqueKey;
        return this.poPageDynamicService.deleteResource(uniqueKey, newUrl).pipe(map(() => this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification)));
      }
      return of(actionRemove(uniqueKey, item)).pipe(tap((remove) => {
        const removeItem = remove ?? false;
        this.removeFromUI(resourceToRemoveKey, this.literals.removeSuccessNotification, removeItem);
      }));
    }
    return of({});
  }
  removeFromUI(items, message, remove = true) {
    if (remove === true && items?.length) {
      this.removeLocalItems(items);
      this.poNotification.success(message);
    }
  }
  removeAll(actionRemoveAll, actionBeforeRemoveAll) {
    const originalResourcesKeys = this.getSelectedItemsKeys();
    this.subscriptions.add(this.poPageDynamicTableActionsService.beforeRemoveAll(actionBeforeRemoveAll, originalResourcesKeys).pipe(switchMap((beforeRemove) => this.deleteAllAction(actionRemoveAll, beforeRemove, originalResourcesKeys))).subscribe());
  }
  getSelectedItemsKeys() {
    const resources = this.items.filter((item) => item.$selected);
    if (resources.length === 0) {
      return;
    }
    return this.returnResourcesKeys(resources);
  }
  returnResourcesKeys(resources) {
    return mapArrayByProperties(resources, this.keys);
  }
  deleteAllAction(actionRemoveAll, beforeRemoveAll, originalResources) {
    const {
      allowAction,
      newUrl,
      resources
    } = beforeRemoveAll ?? {};
    const allow = allowAction ?? true;
    const resourcestoDelete = resources ?? originalResources;
    if (allow && Array.isArray(resourcestoDelete)) {
      if (typeof actionRemoveAll === "boolean" || newUrl) {
        return this.poPageDynamicService.deleteResources(resourcestoDelete, newUrl).pipe(tap(() => {
          this.removeFromUI(resourcestoDelete, this.literals.removeAllSuccessNotification);
        }));
      }
      return of(actionRemoveAll(resourcestoDelete)).pipe(tap((removeItems) => this.removeFromUI(removeItems, this.literals.removeSuccessNotification)));
    }
    return of({});
  }
  removeLocalItems(itemsKeysToRemove = []) {
    if (itemsKeysToRemove.length) {
      this.items = this.items.filter((item) => {
        const itemKey = this.formatUniqueKey(item);
        return !itemsKeysToRemove.find((itemKeyToRemove) => valuesFromObject(itemKeyToRemove).join("|") === itemKey);
      });
    }
  }
  resolveUrl(item, path) {
    const uniqueKey = this.formatUniqueKey(item);
    return path.replace(/:id/g, uniqueKey);
  }
  setPageActions(actions) {
    if (actions?.new) {
      this.defaultPageActions = [{
        label: this.literals.pageAction,
        action: this.openNew.bind(this, actions.new)
      }];
    }
  }
  transformCustomActionsToPageListAction(customActions) {
    return customActions.map((customAction) => __spreadProps(__spreadValues({
      label: customAction.label,
      action: this.callPageCustomAction.bind(this, customAction),
      disabled: this.isDisablePageCustomAction.bind(this, customAction)
    }, customAction.icon && {
      icon: customAction.icon
    }), {
      visible: customAction.visible
    }));
  }
  transformTableCustomActionsToTableActions(tableCustomActions) {
    return tableCustomActions.map((tableCustomAction) => ({
      label: tableCustomAction.label,
      icon: tableCustomAction.icon,
      action: this.callTableCustomAction.bind(this, tableCustomAction),
      disabled: tableCustomAction.disabled,
      visible: tableCustomAction.visible
    }));
  }
  isDisablePageCustomAction(customAction) {
    return customAction.selectable && !this.getSelectedItemsKeys();
  }
  callPageCustomAction(customAction) {
    if (customAction.action) {
      const selectedItems = customAction.selectable ? this.getSelectedItemsKeys() : void 0;
      const sendCustomActionSubscription = this.poPageDynamicTableActionsService.customAction(customAction.action, selectedItems).subscribe();
      this.subscriptions.add(sendCustomActionSubscription);
    } else if (customAction.url) {
      this.navigateTo({
        path: customAction.url
      });
    }
  }
  callTableCustomAction(customAction, selectedItem) {
    this.itemSelectedAction = selectedItem;
    if (customAction.action) {
      const sendCustomActionSubscription = this.poPageDynamicTableActionsService.customAction(customAction.action, selectedItem).subscribe((updatedItem) => {
        if (typeof updatedItem === "object" && updatedItem !== null) {
          this.modifyUITableItem(selectedItem, removeKeysProperties(this.keys, updatedItem));
        }
      });
      this.subscriptions.add(sendCustomActionSubscription);
    } else if (customAction.url) {
      if (isExternalLink(customAction.url)) {
        openExternalLink(this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem));
      } else {
        this.navigateTo({
          path: this.createConcatenatedUrl(customAction.concatKeys, customAction.url, selectedItem)
        });
      }
    }
  }
  setRemoveAllAction() {
    const action = this._actions;
    if (this.showRemove(action.removeAll)) {
      this.defaultPageActions = [...this._defaultPageActions, {
        label: this.literals.pageActionRemoveAll,
        action: this.confirmRemoveAll.bind(this, action.removeAll, action.beforeRemoveAll),
        disabled: this.disableRemoveAll.bind(this),
        type: "danger"
      }];
    }
  }
  disableRemoveAll() {
    return !this.getSelectedItemsKeys();
  }
  setTableActions(actions) {
    if (actions) {
      const visibleRemove = this.showRemove(actions.remove);
      this.defaultTableActions = [{
        action: this.openDetail.bind(this, actions.detail),
        label: this.literals.tableActionView,
        visible: !!this._actions.detail
      }, {
        action: this.openEdit.bind(this, actions.edit),
        label: this.literals.tableActionEdit,
        visible: !!this._actions.edit
      }, {
        action: this.openDuplicate.bind(this, actions.duplicate),
        label: this.literals.tableActionDuplicate,
        visible: !!this._actions.duplicate
      }, {
        action: this.confirmRemove.bind(this, actions.remove, actions.beforeRemove),
        label: this.literals.tableActionDelete,
        separator: true,
        type: "danger",
        visible: visibleRemove
      }];
    }
  }
  loadDataFromAPI() {
    const {
      serviceApi: serviceApiFromRoute,
      serviceMetadataApi,
      serviceLoadApi
    } = this.activatedRoute.snapshot.data;
    const onLoad = serviceLoadApi || this.onLoad;
    this.serviceApi = serviceApiFromRoute || this.serviceApi;
    this.poPageDynamicService.configServiceApi({
      endpoint: this.serviceApi,
      metadata: serviceMetadataApi
    });
    const metadata$ = this.getMetadata(serviceApiFromRoute, onLoad);
    let data$;
    if (this.quickSearchValue) {
      const paramsQuickSearchValue = {
        [this.quickSearchParam]: this.quickSearchValue
      };
      data$ = this.loadData(paramsQuickSearchValue);
    } else {
      data$ = this.loadData();
    }
    this.subscriptions.add(metadata$.pipe(switchMap(() => {
      const initialFilters = this.getInitialValuesFromFilter();
      if (!Object.keys(initialFilters).length) {
        return data$;
      }
      return EMPTY;
    })).subscribe());
  }
  getInitialValuesFromFilter() {
    const initialFilters = this.filters.reduce((result, item) => Object.assign(result, {
      [item.property]: item.initValue
    }), {});
    Object.keys(initialFilters).forEach((key) => {
      if (!initialFilters[key]) {
        delete initialFilters[key];
      }
    });
    return initialFilters;
  }
  loadOptionsOnInitialize(onLoad) {
    if (onLoad) {
      return this.getPoDynamicPageOptions(onLoad).pipe(tap((responsePoOption) => this.poPageCustomizationService.changeOriginalOptionsToNewOptions(this, responsePoOption)));
    }
    return of(null);
  }
  getPoDynamicPageOptions(onLoad) {
    const originalOption = {
      fields: this.fields,
      actions: this.actions,
      breadcrumb: this.breadcrumb,
      title: this.title,
      keepFilters: this.keepFilters,
      concatFilters: this.concatFilters,
      hideRemoveAllDisclaimer: this.hideRemoveAllDisclaimer,
      hideCloseDisclaimers: this.hideCloseDisclaimers,
      pageCustomActions: this.pageCustomActions,
      tableCustomActions: this.tableCustomActions,
      quickSearchWidth: this.quickSearchWidth
    };
    const pageOptionSchema = {
      schema: [{
        nameProp: "fields",
        merge: true,
        keyForMerge: "property"
      }, {
        nameProp: "actions",
        merge: true
      }, {
        nameProp: "breadcrumb"
      }, {
        nameProp: "title"
      }, {
        nameProp: "keepFilters"
      }, {
        nameProp: "quickSearchWidth"
      }, {
        nameProp: "concatFilters"
      }, {
        nameProp: "hideRemoveAllDisclaimer"
      }, {
        nameProp: "hideCloseDisclaimers"
      }, {
        nameProp: "pageCustomActions",
        merge: true,
        keyForMerge: "label"
      }, {
        nameProp: "tableCustomActions",
        merge: true,
        keyForMerge: "label"
      }]
    };
    return this.poPageCustomizationService.getCustomOptions(onLoad, originalOption, pageOptionSchema);
  }
  showRemove(actionRemove) {
    const action = actionRemove ?? false;
    if (typeof action === "boolean") {
      return action;
    }
    return true;
  }
  updateFilterValue(filter2) {
    return this.fields.map((item) => {
      if (filter2.hasOwnProperty(item.property)) {
        item.initValue = filter2[item.property];
      }
    });
  }
  updatePageActions() {
    this.pageActions = [...this._defaultPageActions, ...this._customPageListActions];
  }
  updateTableActions() {
    const defaultTableActionsWithoutActionDelete = this._defaultTableActions.filter((tableAction) => tableAction.label !== this.literals.tableActionDelete);
    const tableActionDelete = this._defaultTableActions.find((tableAction) => tableAction.label === this.literals.tableActionDelete);
    const newTableActions = [...defaultTableActionsWithoutActionDelete, ...this._customTableActions];
    if (tableActionDelete) {
      newTableActions.push(tableActionDelete);
    }
    this.tableActions = newTableActions;
  }
  static \u0275fac = function PoPageDynamicTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageDynamicTableComponent,
    selectors: [["po-page-dynamic-table"]],
    inputs: {
      onLoad: [0, "p-load", "onLoad"],
      keepFilters: [2, "p-keep-filters", "keepFilters", convertToBoolean],
      actionRight: [2, "p-actions-right", "actionRight", convertToBoolean],
      concatFilters: [2, "p-concat-filters", "concatFilters", convertToBoolean],
      hideColumnsManager: [2, "p-hide-columns-manager", "hideColumnsManager", convertToBoolean],
      hideRemoveAllDisclaimer: [2, "p-hide-remove-all-disclaimer", "hideRemoveAllDisclaimer", convertToBoolean],
      infiniteScroll: [2, "p-infinite-scroll", "infiniteScroll", convertToBoolean],
      actions: [0, "p-actions", "actions"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      pageCustomActions: [0, "p-page-custom-actions", "pageCustomActions"],
      tableCustomActions: [0, "p-table-custom-actions", "tableCustomActions"],
      quickSearchWidth: [0, "p-quick-search-width", "quickSearchWidth"],
      height: [0, "p-height", "height"],
      hideCloseDisclaimers: [0, "p-hide-close-disclaimers", "hideCloseDisclaimers"],
      quickSearchParam: [0, "p-quick-search-param", "quickSearchParam"],
      quickSearchValue: [0, "p-quick-search-value", "quickSearchValue"],
      searchLiterals: [0, "p-literals", "searchLiterals"],
      spacing: [0, "p-spacing", "spacing"],
      textWrap: [2, "p-text-wrap", "textWrap", convertToBoolean],
      draggable: [0, "p-draggable", "draggable"],
      virtualScroll: [0, "p-virtual-scroll", "virtualScroll"],
      visibleFixedFilters: [0, "p-visible-fixed-filters", "visibleFixedFilters"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PoPageDynamicService]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 28,
    consts: [[3, "p-advanced-search", "p-change-disclaimers", "p-quick-search", "p-actions", "p-breadcrumb", "p-components-size", "p-hide-close-disclaimers", "p-filters", "p-keep-filters", "p-literals", "p-concat-filters", "p-hide-remove-all-disclaimer", "p-quick-search-width", "p-title", "p-visible-fixed-filters", "p-quick-search-value"], [3, "p-show-more", "p-sort-by", "p-change-visible-columns", "p-restore-column-manager", "p-sort", "p-actions", "p-actions-right", "p-selectable", "p-columns", "p-components-size", "p-items", "p-height", "p-hide-columns-manager", "p-infinite-scroll", "p-show-more-disabled", "p-text-wrap", "p-draggable", "p-spacing", "p-virtual-scroll"]],
    template: function PoPageDynamicTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "po-page-dynamic-search", 0);
        \u0275\u0275listener("p-advanced-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_advanced_search_0_listener($event) {
          return ctx.onAdvancedSearch($event);
        })("p-change-disclaimers", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_change_disclaimers_0_listener($event) {
          return ctx.onChangeDisclaimers($event);
        })("p-quick-search", function PoPageDynamicTableComponent_Template_po_page_dynamic_search_p_quick_search_0_listener($event) {
          return ctx.onQuickSearch($event);
        });
        \u0275\u0275elementStart(1, "po-table", 1);
        \u0275\u0275listener("p-show-more", function PoPageDynamicTableComponent_Template_po_table_p_show_more_1_listener() {
          return ctx.showMore();
        })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) {
          return ctx.onSort($event);
        })("p-change-visible-columns", function PoPageDynamicTableComponent_Template_po_table_p_change_visible_columns_1_listener($event) {
          return ctx.onChangeVisibleColumns($event);
        })("p-restore-column-manager", function PoPageDynamicTableComponent_Template_po_table_p_restore_column_manager_1_listener($event) {
          return ctx.onColumnRestoreManager($event);
        })("p-sort-by", function PoPageDynamicTableComponent_Template_po_table_p_sort_by_1_listener($event) {
          return ctx.onSortBy($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("p-actions", ctx.pageActions)("p-breadcrumb", ctx.breadcrumb)("p-components-size", ctx.componentsSize)("p-hide-close-disclaimers", ctx.hideCloseDisclaimers)("p-filters", ctx.filters)("p-keep-filters", ctx.keepFilters)("p-literals", ctx.searchLiterals)("p-concat-filters", ctx.concatFilters)("p-hide-remove-all-disclaimer", ctx.hideRemoveAllDisclaimer)("p-quick-search-width", ctx.quickSearchWidth)("p-title", ctx.title)("p-visible-fixed-filters", ctx.visibleFixedFilters)("p-quick-search-value", ctx.quickSearchValue || "");
        \u0275\u0275advance();
        \u0275\u0275property("p-sort", true)("p-actions", ctx.tableActions)("p-actions-right", ctx.actionRight)("p-selectable", ctx.enableSelectionTable)("p-columns", ctx.columns)("p-components-size", ctx.componentsSize)("p-items", ctx.items)("p-height", ctx.height)("p-hide-columns-manager", ctx.hideColumnsManager)("p-infinite-scroll", ctx.infiniteScroll)("p-show-more-disabled", !ctx.hasNext)("p-text-wrap", ctx.textWrap)("p-draggable", ctx.draggable)("p-spacing", ctx.spacing)("p-virtual-scroll", ctx.virtualScroll);
      }
    },
    dependencies: [PoTableComponent, PoPageDynamicSearchComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicTableComponent, [{
    type: Component,
    args: [{
      selector: "po-page-dynamic-table",
      providers: [PoPageDynamicService],
      standalone: false,
      template: `<po-page-dynamic-search
  [p-actions]="pageActions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-hide-close-disclaimers]="hideCloseDisclaimers"
  [p-filters]="filters"
  [p-keep-filters]="keepFilters"
  [p-literals]="searchLiterals"
  [p-concat-filters]="concatFilters"
  [p-hide-remove-all-disclaimer]="hideRemoveAllDisclaimer"
  [p-quick-search-width]="quickSearchWidth"
  [p-title]="title"
  [p-visible-fixed-filters]="visibleFixedFilters"
  (p-advanced-search)="onAdvancedSearch($event)"
  (p-change-disclaimers)="onChangeDisclaimers($event)"
  (p-quick-search)="onQuickSearch($event)"
  [p-quick-search-value]="quickSearchValue || ''"
>
  <po-table
    [p-sort]="true"
    [p-actions]="tableActions"
    [p-actions-right]="actionRight"
    [p-selectable]="enableSelectionTable"
    [p-columns]="columns"
    [p-components-size]="componentsSize"
    [p-items]="items"
    [p-height]="height"
    [p-hide-columns-manager]="hideColumnsManager"
    [p-infinite-scroll]="infiniteScroll"
    [p-show-more-disabled]="!hasNext"
    (p-show-more)="showMore()"
    (p-sort-by)="onSort($event)"
    (p-change-visible-columns)="onChangeVisibleColumns($event)"
    (p-restore-column-manager)="onColumnRestoreManager($event)"
    (p-sort-by)="onSortBy($event)"
    [p-text-wrap]="textWrap"
    [p-draggable]="draggable"
    [p-spacing]="spacing"
    [p-virtual-scroll]="virtualScroll"
  >
  </po-table>
</po-page-dynamic-search>
`
    }]
  }], () => [], {
    onLoad: [{
      type: Input,
      args: ["p-load"]
    }],
    keepFilters: [{
      type: Input,
      args: [{
        alias: "p-keep-filters",
        transform: convertToBoolean
      }]
    }],
    actionRight: [{
      type: Input,
      args: [{
        alias: "p-actions-right",
        transform: convertToBoolean
      }]
    }],
    concatFilters: [{
      type: Input,
      args: [{
        alias: "p-concat-filters",
        transform: convertToBoolean
      }]
    }],
    hideColumnsManager: [{
      type: Input,
      args: [{
        alias: "p-hide-columns-manager",
        transform: convertToBoolean
      }]
    }],
    hideRemoveAllDisclaimer: [{
      type: Input,
      args: [{
        alias: "p-hide-remove-all-disclaimer",
        transform: convertToBoolean
      }]
    }],
    infiniteScroll: [{
      type: Input,
      args: [{
        alias: "p-infinite-scroll",
        transform: convertToBoolean
      }]
    }],
    actions: [{
      type: Input,
      args: ["p-actions"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    pageCustomActions: [{
      type: Input,
      args: ["p-page-custom-actions"]
    }],
    tableCustomActions: [{
      type: Input,
      args: ["p-table-custom-actions"]
    }],
    quickSearchWidth: [{
      type: Input,
      args: ["p-quick-search-width"]
    }],
    height: [{
      type: Input,
      args: ["p-height"]
    }],
    hideCloseDisclaimers: [{
      type: Input,
      args: ["p-hide-close-disclaimers"]
    }],
    quickSearchParam: [{
      type: Input,
      args: ["p-quick-search-param"]
    }],
    quickSearchValue: [{
      type: Input,
      args: ["p-quick-search-value"]
    }],
    searchLiterals: [{
      type: Input,
      args: ["p-literals"]
    }],
    spacing: [{
      type: Input,
      args: ["p-spacing"]
    }],
    textWrap: [{
      type: Input,
      args: [{
        alias: "p-text-wrap",
        transform: convertToBoolean
      }]
    }],
    draggable: [{
      type: Input,
      args: ["p-draggable"]
    }],
    virtualScroll: [{
      type: Input,
      args: ["p-virtual-scroll"]
    }],
    visibleFixedFilters: [{
      type: Input,
      args: ["p-visible-fixed-filters"]
    }]
  });
})();
var PoPageDynamicTableModule = class _PoPageDynamicTableModule {
  static \u0275fac = function PoPageDynamicTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageDynamicTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageDynamicTableModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, FormsModule, RouterModule, PoTableModule, PoPageDynamicSearchModule, PoPageCustomizationModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageDynamicTableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoTableModule, PoPageDynamicSearchModule, PoPageCustomizationModule, PoPageDynamicModule],
      declarations: [PoPageDynamicTableComponent],
      exports: [PoPageDynamicTableComponent]
    }]
  }], null, null);
})();
var PoPageJobSchedulerInternal = class {
  periodicity = "single";
  firstExecution = /* @__PURE__ */ new Date();
  firstExecutionHour = this.getCurrentHour(this.firstExecution);
  recurrent = true;
  frequency = {};
  getCurrentHour(date) {
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes}`;
  }
};
var PoPageJobSchedulerService = class _PoPageJobSchedulerService {
  http = inject(HttpClient);
  headers = new HttpHeaders({
    "X-PO-SCREEN-LOCK": "true"
  });
  endpoint = "/";
  configServiceApi(config = {}) {
    this.endpoint = config.endpoint;
  }
  // Cria um recurso
  createResource(resource) {
    const newResouce = this.convertToJobScheduler(resource);
    return this.http.post(`${this.endpoint}`, newResouce, {
      headers: this.headers
    });
  }
  getHeadProcesses() {
    const headers = {
      "X-PO-No-Error": "true"
    };
    return this.http.head(`${this.endpoint}/processes`, {
      headers
    });
  }
  // Busca parametros pelo processo id
  getParametersByProcess(processId) {
    return this.http.get(`${this.endpoint}/processes/${processId}/parameters`, {
      headers: this.headers
    }).pipe(map((resource) => resource.items));
  }
  // Busca um único recurso
  getProcess(id) {
    return this.http.get(`${this.endpoint}/processes/${id}`, {
      headers: this.headers
    });
  }
  // Busca uma lista de processos
  getProcesses(params = {}) {
    return this.http.get(`${this.endpoint}/processes`, {
      params
    });
  }
  // Busca um único recurso
  getResource(id) {
    return this.http.get(`${this.endpoint}/${id}`, {
      headers: this.headers
    }).pipe(map((resource) => this.convertToJobSchedulerInternal(resource)));
  }
  // Atualiza um recurso
  updateResource(id, resource) {
    const newResouce = this.convertToJobScheduler(resource);
    return this.http.put(`${this.endpoint}/${id}`, newResouce, {
      headers: this.headers
    });
  }
  convertToJobScheduler(jobSchedulerInternal) {
    const jobScheduler = __spreadValues({}, jobSchedulerInternal);
    if (jobSchedulerInternal.periodicity) {
      if (jobSchedulerInternal.periodicity === "single") {
        jobScheduler.recurrent = false;
      } else {
        Object.assign(jobScheduler, this.convertToPeriodicity(jobSchedulerInternal));
      }
    }
    if (jobSchedulerInternal.firstExecutionHour) {
      jobScheduler.firstExecution = this.replaceHourFirstExecution(jobSchedulerInternal.firstExecution, jobSchedulerInternal.firstExecutionHour);
    }
    if (jobSchedulerInternal.frequency && jobSchedulerInternal.frequency.type) {
      jobScheduler.rangeExecutions = {
        frequency: __spreadValues({}, jobSchedulerInternal.frequency)
      };
      if (jobSchedulerInternal.rangeLimitHour) {
        const splitRangeLimitHour = jobSchedulerInternal.rangeLimitHour.split(":");
        jobScheduler.rangeExecutions.rangeLimit = {
          hour: parseInt(splitRangeLimitHour[0], 10),
          minute: parseInt(splitRangeLimitHour[1], 10)
        };
      }
      if (jobSchedulerInternal.rangeLimitDay) {
        jobScheduler.rangeExecutions.rangeLimit = __spreadProps(__spreadValues({}, jobScheduler.rangeExecutions.rangeLimit), {
          day: jobSchedulerInternal.rangeLimitDay
        });
      }
    }
    if (!Object.keys(this.returnValidExecutionParameter(jobScheduler.executionParameter)).length) {
      delete jobScheduler.executionParameter;
    }
    this.removeInvalidKeys(jobScheduler);
    return jobScheduler;
  }
  convertToJobSchedulerInternal(jobScheduler = {}) {
    const jobSchedulerInternal = __spreadValues({}, jobScheduler);
    if (jobScheduler.firstExecution) {
      jobSchedulerInternal.firstExecutionHour = this.getHourFirstExecution(jobScheduler.firstExecution);
    }
    Object.assign(jobSchedulerInternal, this.convertToPeriodicityInternal(jobScheduler));
    if (jobScheduler.rangeExecutions) {
      jobSchedulerInternal.rangeLimitHour = `${jobScheduler.rangeExecutions.rangeLimit.hour < 10 ? "0" + jobScheduler.rangeExecutions.rangeLimit.hour : jobScheduler.rangeExecutions.rangeLimit.hour}:${jobScheduler.rangeExecutions.rangeLimit.minute < 10 ? "0" + jobScheduler.rangeExecutions.rangeLimit.minute : jobScheduler.rangeExecutions.rangeLimit.minute}`;
      jobSchedulerInternal.rangeLimitDay = jobScheduler.rangeExecutions.rangeLimit.day;
      jobSchedulerInternal.frequency = {
        type: jobScheduler.rangeExecutions.frequency.type,
        value: jobScheduler.rangeExecutions.frequency.value
      };
    }
    this.removeInvalidKeys(jobSchedulerInternal, ["weekly", "monthly", "daily"]);
    return jobSchedulerInternal;
  }
  convertToPeriodicity(value) {
    const newValue = {};
    const valuePeriodicity = value.periodicity;
    if (valuePeriodicity) {
      newValue[valuePeriodicity] = {};
      if (valuePeriodicity === "monthly") {
        newValue[valuePeriodicity].day = value.dayOfMonth ? parseInt(value.dayOfMonth, 10) : 0;
      } else if (valuePeriodicity === "weekly") {
        newValue[valuePeriodicity].daysOfWeek = value.daysOfWeek;
      }
      newValue[valuePeriodicity].hour = value.hour ? parseInt(value.hour.split(":")[0], 10) : 0;
      newValue[valuePeriodicity].minute = value.hour ? parseInt(value.hour.split(":")[1], 10) : 0;
    }
    return newValue;
  }
  convertToPeriodicityInternal(value = {}) {
    if (value.monthly) {
      return {
        periodicity: "monthly",
        hour: `${addZero(value.monthly.hour)}:${addZero(value.monthly.minute)}`,
        dayOfMonth: value.monthly.day
      };
    } else if (value.daily) {
      return {
        periodicity: "daily",
        hour: `${addZero(value.daily.hour)}:${addZero(value.daily.minute)}`
      };
    } else if (value.weekly) {
      return {
        periodicity: "weekly",
        hour: `${addZero(value.weekly.hour)}:${addZero(value.weekly.minute)}`,
        daysOfWeek: [...value.weekly.daysOfWeek]
      };
    } else {
      return {
        periodicity: "single"
      };
    }
  }
  getCurrentHour(date) {
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }
  getHourFirstExecution(firstExecutionDate) {
    return this.getCurrentHour(new Date(firstExecutionDate));
  }
  removeInvalidKeys(value, keys) {
    const invalidKeys = keys || ["periodicity", "hour", "minute", "day", "daysOfWeek", "dayOfMonth", "firstExecutionHour", "frequency", "rangeLimitHour", "rangeLimitDay"];
    Object.keys(value).forEach((key) => {
      if (invalidKeys.includes(key)) {
        delete value[key];
      } else if (key === "rangeExecutions" && value["periodicity"] === "single") {
        delete value[key];
      }
    });
  }
  replaceHourFirstExecution(date, time) {
    try {
      if (!date) {
        return date;
      }
      const dateSplited = date.split("-");
      const timeSplited = time.split(":");
      if (dateSplited.length < 2 || timeSplited.length < 1) {
        return date;
      }
      const year = parseInt(dateSplited[0]);
      const monthIndex = parseInt(dateSplited[1]) - 1;
      const day = parseInt(dateSplited[2]);
      const hours = parseInt(timeSplited[0], 10);
      const minutes = parseInt(timeSplited[1], 10);
      const firstExecutionDate = new Date(year, monthIndex, day, hours, minutes);
      if (!(firstExecutionDate instanceof Date && !isNaN(firstExecutionDate.getTime()))) {
        return date;
      }
      return convertDateToISOExtended(firstExecutionDate);
    } catch {
      return date;
    }
  }
  returnValidExecutionParameter(parameter) {
    const newParameter = __spreadValues({}, parameter);
    for (const key in newParameter) {
      if (newParameter.hasOwnProperty(key) && newParameter[key] === void 0) {
        delete newParameter[key];
      }
    }
    return newParameter;
  }
  static \u0275fac = function PoPageJobSchedulerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageJobSchedulerService,
    factory: _PoPageJobSchedulerService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PoPageJobSchedulerBaseComponent = class _PoPageJobSchedulerBaseComponent {
  poPageJobSchedulerService;
  _componentsSize = void 0;
  /** Objeto com as propriedades do breadcrumb. */
  breadcrumb = {
    items: []
  };
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.
   *
   * #### Processos
   *
   * Os processos são as tarefas que estarão disponíveis para o usuário poder fazer os agendamentos.
   * Ao inicializar o componente, será feito uma requisição `GET` para o endpoint `{service-api}/processes`, para buscar
   * essa lista de processos.
   *
   * Este endpoint `{service-api}/processes` deve retornar uma lista de objetos que seguem a definição de dados abaixo:
   *
   * ```
   * GET {service-api}/processes
   * ```
   *
   * ```
   * {
   *   items: [
   *     { "processID": "ac4f", "description": "Gerar folha de pagamento" },
   *     { "processID": "df6l", "description": "Relatório de imposto a recolher" },
   *     { "processID": "dk3p", "description": "Títulos em aberto" },
   *   ]
   * }
   * ```
   *
   * Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.
   *
   * Para realizar o filtro de busca do processo, será feita uma requisição enviando o conteúdo digitado na busca através do
   * parâmetro `search`. Da seguinte forma:
   *
   * ```
   * GET {service-api}/processes?search=relatorio
   * ```
   *
   * > Veja mais sobre paginação e filtros no [Guia de implementação de APIs](guides/api).
   * Caso seja informada a propriedade `p-parameters` não serão realizadas as requisições de processos e nem de parametros automaticamente.
   *
   * Também é possível fazer um agendamento de um processo específico, sem que seja necessário um endpoint para busca desses
   * processos. Então, caso o endpoint `{service-api}/processes` não seja válido, será apresentado um campo de entrada de
   * texto para o usuário informar diretamente
   * o **identificador do processo - `processID`** e ao salvar será enviado um `POST` para o endpoint difinido `serviceApi` conforme abaixo:
   *
   * ```
   * POST {service-api}
   * ```
   *
   * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
   *
   * ```
   * {
   *   "daily": { "hour": 10, "minute": 12 },
   *   "firstExecution": "2018-12-07T00:00:01-00:00",
   *   "recurrent": true,
   *   "processID": "ac0405"
   *   ...
   * }
   * ```
   *
   * Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `GET`
   * como exemplificado abaixo. Os parâmetros devem retornar uma lista de objetos que seguem a interface
   * [PoDynamicFormField](/documentation/po-dynamic-form). Porém, caso utilizar a propriedade `p-parameters` o componente não
   * realizará a busca automática e o campo de processos não será exibido.
   *
   * ```
   * GET {service-api}/processes/:id/parameters
   * ...
   * {
   *   items: [
   *     { "property": "vencimento", type: "date" },
   *     { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
   *   ]
   * }
   * ```
   *
   * #### Salvar e Atualizar
   *
   * Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via *payload*.
   * Abaixo uma requisição `POST` disparada, onde as propriedades do *Job Scheduler* foram preenchidas:
   *
   * ```
   *  POST {service-api}
   * ```
   *
   * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
   *
   * ```
   * {
   *   "firstExecution": "2018-12-07T00:00:01-00:00",
   *   "recurrent": true,
   *   "monthly": { "day": 1, "hour": 10, "minute": 0 },
   *   "processID": "ac0405",
   *   "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
   * }
   * ```
   *
   * Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `id`.
   *
   * Exemplo de configuração de rota:
   *
   * ```
   *  RouterModule.forRoot([
   *    ...
   *    { path: 'edit/:id', component: ExampleJobSchedulerComponent },
   *    ...
   *  ],
   * ```
   *
   * Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.
   *
   * ```
   * GET {service-api}/{id}
   * ```
   *
   * Ao atualizar o agendamento, será disparado um `PUT` com os dados preenchidos.
   * Veja abaixo uma requisição `PUT` disparada, onde a propriedade *recurrent* e *daily* foram atualizadas:
   *
   * ```
   *  PUT {service-api}/{id}
   * ```
   *
   * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
   *
   * ```
   * {
   *   "firstExecution": "2018-12-07T00:00:01-00:00",
   *   "recurrent": true,
   *   "processID": "ac0405",
   *   "monthly": { "day": 1, "hour": 10, "minute": 0 },
   *   "processID": "ac0405",
   *   "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
   * }
   * ```
   */
  serviceApi;
  /** Título da página. */
  title;
  /**
   * Parâmetros que serão utilizados para criação e edição dos agendamentos.
   *
   * Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.
   *
   */
  parameters = [];
  set value(value) {
    this.model = this.poPageJobSchedulerService.convertToJobSchedulerInternal(value);
  }
  /**
   * @optional
   *
   * @description
   *
   * Define a orientação de exibição do `po-stepper`.
   *
   * > Quando não utilizada, segue o comportamento com base nas dimensões da tela.
   *
   * > Veja os valores válidos no *enum* [PoStepperOrientation](documentation/po-stepper#stepperOrientation).
   *
   */
  set stepperDefaultOrientation(value) {
    this._orientation = Object.values(PoStepperOrientation).includes(value) ? value : void 0;
  }
  get stepperDefaultOrientation() {
    return this._orientation;
  }
  /**
   * @optional
   *
   * @description
   *
   * Função chamada após realizar a confirmação da execução no PoPageJobScheduler.
   * Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.
   *
   * > Deve retornar um objeto do tipo `PoPageJobScheduler` para ser adicionado ao model do PoPageJobScheduler.
   *
   * > Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `PoJobSchedulerInternal`.
   *
   * O contexto da função que será chamada, será o mesmo que o do `PoPageJobScheduler`, então para poder alterar
   * para o contexto do componente que o está utilizando, pode ser utilizado a propriedade `bind` do Javascript.
   * Por exemplo, para a função `beforeSend`:
   *
   * ```
   * <po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
   * ...
   * </po-page-job-scheduler>
   * ```
   */
  beforeSendAction;
  /**
   * @optional
   *
   * @description
   *
   * Define se o step `Agendamento` deve ser exibido como o último na sequência de steps
   *
   * > Aplicável apenas quando utilizado `PoJobSchedulerParametersTemplateDirective`
   */
  stepExecutionLast;
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao concluir o processo de agendamento com sucesso.
   */
  success = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado ao ocorrer um erro impossibilitando a conclusão do agendamento.
   * Para este evento será passado como parâmetro os detalhes do erro.
   */
  error = new EventEmitter();
  model = new PoPageJobSchedulerInternal();
  _subscription = new Subscription();
  _orientation;
  constructor(poPageJobSchedulerService) {
    this.poPageJobSchedulerService = poPageJobSchedulerService;
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  loadData(id) {
    if (!id) {
      this.model = this.model || new PoPageJobSchedulerInternal();
      return;
    }
    this._subscription.add(this.poPageJobSchedulerService.getResource(id).subscribe((response) => {
      this.model = response;
    }, () => {
      this.model = new PoPageJobSchedulerInternal();
    }));
  }
  markAsDirtyInvalidControls(controls) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];
        if (control.invalid) {
          control.markAsDirty();
        }
      }
    }
  }
  static \u0275fac = function PoPageJobSchedulerBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerBaseComponent)(\u0275\u0275directiveInject(PoPageJobSchedulerService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoPageJobSchedulerBaseComponent,
    inputs: {
      breadcrumb: [0, "p-breadcrumb", "breadcrumb"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      serviceApi: [0, "p-service-api", "serviceApi"],
      title: [0, "p-title", "title"],
      parameters: [0, "p-parameters", "parameters"],
      value: [0, "p-value", "value"],
      stepperDefaultOrientation: [0, "p-orientation", "stepperDefaultOrientation"],
      beforeSendAction: [0, "p-before-send", "beforeSendAction"],
      stepExecutionLast: [0, "p-step-execution-last", "stepExecutionLast"]
    },
    outputs: {
      success: "p-success",
      error: "p-error"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoPageJobSchedulerService
  }], {
    breadcrumb: [{
      type: Input,
      args: ["p-breadcrumb"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    serviceApi: [{
      type: Input,
      args: ["p-service-api"]
    }],
    title: [{
      type: Input,
      args: ["p-title"]
    }],
    parameters: [{
      type: Input,
      args: ["p-parameters"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }],
    stepperDefaultOrientation: [{
      type: Input,
      args: ["p-orientation"]
    }],
    beforeSendAction: [{
      type: Input,
      args: ["p-before-send"]
    }],
    stepExecutionLast: [{
      type: Input,
      args: ["p-step-execution-last"]
    }],
    success: [{
      type: Output,
      args: ["p-success"]
    }],
    error: [{
      type: Output,
      args: ["p-error"]
    }]
  });
})();
var poPageJobSchedulerLiteralsDefault = {
  en: {
    at: "at",
    back: "Back",
    next: "Next",
    periodicity: "Periodicity",
    execution: "Execution",
    process: "Process",
    enterProcess: "Enter a process",
    recurrent: "Recurrent",
    single: "Single",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    scheduling: "Scheduling",
    parameterization: "Parameterization",
    conclude: "Conclude",
    firstExecution: "First Execution",
    startTime: "Start time",
    endTime: "End time",
    time: "Time",
    hour: "Hour",
    minute: "Minute",
    day: "Day",
    endDay: "End day",
    startDay: "Start day",
    weekDays: "Week days",
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    parameters: "Parameters",
    yes: "Yes",
    no: "No",
    notReported: "Not reported",
    periodicityData: "Periodicity data",
    confirmation: "Confirmation",
    confirmSaveMessage: "Are you sure you want to complete this schedule?",
    confirmUpdateMessage: "Are you sure you want to update this schedule?",
    saveNotificationSuccessUpdate: "Successfully updated scheduling",
    saveNotificationSuccessSave: "Successfully saved scheduling",
    parametersNotFound: "Parameters not found.",
    frequency: "Frequency",
    to: "to",
    from: "from"
  },
  es: {
    at: "a las",
    back: "Volver",
    next: "Avanzar",
    periodicity: "Periodicidad",
    execution: "Ejecuci\xF3n",
    process: "Proceso",
    enterProcess: "Informe un proceso",
    recurrent: "Recurrente",
    single: "\xDAnica",
    daily: "Diaria",
    weekly: "Semanal",
    monthly: "Mensual",
    scheduling: "Programaci\xF3n",
    parameterization: "Parametrizaci\xF3n",
    conclude: "Completar",
    firstExecution: "Primera ejecuci\xF3n",
    startTime: "Hora de inicio",
    endTime: "Hora de finalizaci\xF3n",
    time: "Hor\xE1rio",
    hour: "Hora",
    minute: "Minute",
    day: "D\xEDa",
    endDay: "\xDAltimo D\xEDa",
    startDay: "D\xEDa de inicio",
    weekDays: "Dias de la semana",
    sunday: "Domingo",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Mi\xE9rcoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "S\xE1bado",
    parameters: "Par\xE1metros",
    yes: "S\xED",
    no: "No",
    notReported: "No informado",
    periodicityData: "Dados da periodicidade",
    confirmation: "Confirmaci\xF3n",
    confirmSaveMessage: "\xBFEst\xE1 seguro de que desea completar esta programaci\xF3n de proceso?",
    confirmUpdateMessage: "\xBFEst\xE1 seguro de que desea cambiar esta programaci\xF3n de proceso?",
    saveNotificationSuccessUpdate: "Programaci\xF3n de proceso actualizada con \xE9xito.",
    saveNotificationSuccessSave: "Programaci\xF3n de proceso salvo con \xE9xito.",
    parametersNotFound: "No se encontraron par\xE1metros.",
    frequency: "Frecuencia",
    to: "de",
    from: "a"
  },
  pt: {
    at: "\xE0s",
    back: "Voltar",
    next: "Avan\xE7ar",
    periodicity: "Periodicidade",
    execution: "Execu\xE7\xE3o",
    process: "Processo",
    enterProcess: "Informe um processo",
    recurrent: "Recorrente",
    single: "\xDAnica",
    daily: "Di\xE1ria",
    weekly: "Semanal",
    monthly: "Mensal",
    scheduling: "Agendamento",
    parameterization: "Parametriza\xE7\xE3o",
    conclude: "Concluir",
    firstExecution: "Primeira execu\xE7\xE3o",
    startTime: "Hor\xE1rio inicial",
    endTime: "Hor\xE1rio final",
    time: "Hor\xE1rio",
    hour: "Hora",
    minute: "Minuto",
    day: "Dia",
    endDay: "Dia final",
    startDay: "Dia inicial",
    weekDays: "Dias de semana",
    sunday: "Domingo",
    monday: "Segunda-feira",
    tuesday: "Ter\xE7a-feira",
    wednesday: "Quarta-feira",
    thursday: "Quinta-feira",
    friday: "Sexta-feira",
    saturday: "S\xE1bado",
    parameters: "Par\xE2metros",
    yes: "Sim",
    no: "N\xE3o",
    notReported: "N\xE3o informado",
    periodicityData: "Dados da periodicidade",
    confirmation: "Confirma\xE7\xE3o",
    confirmSaveMessage: "Tem certeza que deseja concluir este agendamento de processo?",
    confirmUpdateMessage: "Tem certeza que deseja alterar este agendamento de processo?",
    saveNotificationSuccessUpdate: "Agendamento de processo atualizado com sucesso.",
    saveNotificationSuccessSave: "Agendamento de processo salvo com sucesso.",
    parametersNotFound: "Par\xE2metros n\xE3o foram encontrados.",
    frequency: "Frequ\xEAncia",
    to: "das",
    from: "at\xE9"
  },
  ru: {
    at: "\u0432",
    back: "\u041D\u0430\u0437\u0430\u0434",
    next: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439",
    periodicity: "\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u044C",
    execution: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",
    process: "\u041F\u0440\u043E\u0446\u0435\u0441\u0441",
    enterProcess: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441",
    recurrent: "\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438",
    single: "\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u044B\u0439",
    daily: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E",
    weekly: "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u043E",
    monthly: "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E",
    scheduling: "\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
    parameterization: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u044F",
    conclude: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C",
    firstExecution: "\u041F\u0435\u0440\u0432\u0438\u0447\u043D\u043E\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",
    startTime: "\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",
    endTime: "\u0432\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
    time: "\u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    hour: "\u0427\u0430\u0441",
    day: "\u0414\u0435\u043D\u044C",
    minute: "\u043C\u0438\u043D\u0443\u0442\u0430",
    endDay: "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0434\u0435\u043D\u044C",
    startDay: "\u0434\u0435\u043D\u044C \u043D\u0430\u0447\u0430\u043B\u0430",
    weekDays: "\u0420\u0430\u0431\u043E\u0447\u0438\u0435 \u0434\u043D\u0438",
    sunday: "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
    monday: "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
    tuesday: "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
    wednesday: "\u0421\u0440\u0435\u0434\u0430",
    thursday: "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
    friday: "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
    saturday: "\u0421\u0443\u0431\u0431\u043E\u0442\u0430",
    parameters: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",
    yes: "\u0414\u0430",
    no: "\u041D\u0435\u0442",
    notReported: "\u041D\u0435 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442\u0441\u044F",
    periodicityData: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u0438",
    confirmation: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435",
    confirmSaveMessage: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u044D\u0442\u043E \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435?",
    confirmUpdateMessage: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u044D\u0442\u043E \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435?",
    saveNotificationSuccessUpdate: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
    saveNotificationSuccessSave: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E ",
    parametersNotFound: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
    frequency: "\u0427\u0430\u0441\u0442\u043E\u0442\u0430",
    to: "\u0441",
    from: "\u0434\u043E"
  }
};
var PoPageJobSchedulerLookupService = class _PoPageJobSchedulerLookupService {
  poPageJobSchedulerService = inject(PoPageJobSchedulerService);
  getFilteredItems({
    filter: filter2,
    page,
    pageSize
  }) {
    const params = {
      page,
      pageSize,
      search: filter2
    };
    return this.poPageJobSchedulerService.getProcesses(params);
  }
  getObjectByValue(processId) {
    return this.poPageJobSchedulerService.getProcess(processId);
  }
  static \u0275fac = function PoPageJobSchedulerLookupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerLookupService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageJobSchedulerLookupService,
    factory: _PoPageJobSchedulerLookupService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PoJobSchedulerParametersTemplateDirective = class _PoJobSchedulerParametersTemplateDirective {
  templateRef;
  /**
   * @optional
   *
   * @description
   *
   * Objeto que deve conter as alterações feitas pelo componente de template que serão repassadas dentro do atributo
   * `executionParameter` para envio na api.
   *
   * > O componente deve manter essa propriedade atualizada. É chamada após o avançar da etapa de parametrização.
   */
  executionParameter;
  /**
   * @optional
   *
   * @default false
   *
   * @description
   *
   * Determina se deve desabilitar o botão de avançar para a próxima etapa
   *
   * > Pode ser utilizado para validar campos antes de avançar.
   */
  disabledAdvance = false;
  /**
   * @optional
   *
   * @description
   *
   * Determina o label do step
   */
  title;
  // Necessário manter templateRef para o funcionamento do row template.
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function PoJobSchedulerParametersTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoJobSchedulerParametersTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoJobSchedulerParametersTemplateDirective,
    selectors: [["", "p-job-scheduler-parameters-template", ""]],
    inputs: {
      executionParameter: [0, "p-execution-parameter", "executionParameter"],
      disabledAdvance: [0, "p-disable-advance", "disabledAdvance"],
      title: [0, "p-label-step", "title"]
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoJobSchedulerParametersTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[p-job-scheduler-parameters-template]",
      standalone: false
    }]
  }], () => [{
    type: TemplateRef
  }], {
    executionParameter: [{
      type: Input,
      args: ["p-execution-parameter"]
    }],
    disabledAdvance: [{
      type: Input,
      args: ["p-disable-advance"]
    }],
    title: [{
      type: Input,
      args: ["p-label-step"]
    }]
  });
})();
var PoJobSchedulerSummaryTemplateDirective = class _PoJobSchedulerSummaryTemplateDirective {
  templateRef;
  // Necessário manter templateRef para o funcionamento do row template.
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static \u0275fac = function PoJobSchedulerSummaryTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoJobSchedulerSummaryTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoJobSchedulerSummaryTemplateDirective,
    selectors: [["", "p-job-scheduler-summary-template", ""]],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoJobSchedulerSummaryTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[p-job-scheduler-summary-template]",
      standalone: false
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var PoPageJobSchedulerExecutionComponent = class _PoPageJobSchedulerExecutionComponent {
  poPageJobSchedulerService = inject(PoPageJobSchedulerService);
  poPageJobSchedulerLookup = inject(PoPageJobSchedulerLookupService);
  form;
  // templates
  dailyTemplate;
  monthlyTemplate;
  weeklyTempalte;
  componentsSize;
  isEdit = false;
  literals = {};
  noParameters = true;
  noCustomParamsComponent = true;
  changeProcess = new EventEmitter();
  dayPattern = "^(3[0-1]|[0-2][0-9]|[1-9]|0[1-9])$";
  existProcessAPI = true;
  minDateFirstExecution = /* @__PURE__ */ new Date();
  periodicityOptions = [];
  periodicityTemplates;
  timePattern = "^(2[0-3]|[01][0-9]):?([0-5][0-9])$";
  weekDays = [];
  frequencyOptions = [];
  containsFrequency = false;
  frequency = "hour";
  rangeLimitHour;
  _value = {};
  set value(value) {
    this._value = value && isTypeof(value, "object") ? value : {};
    this.containsFrequency = this._value.frequency && this._value.frequency.value ? true : false;
  }
  get value() {
    return this._value;
  }
  get startDateFirstExecution() {
    return this.isEdit ? void 0 : this.minDateFirstExecution;
  }
  get hourLabel() {
    return this.containsFrequency ? this.literals.startTime : this.literals.time;
  }
  get dayLabel() {
    return this.containsFrequency ? this.literals.startDay : this.literals.day;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.subscribeProcessIdValueChanges();
      if (this.value.periodicity) {
        this.frequencyOptions = this.frequencyOptions.map((frequencyOption) => __spreadProps(__spreadValues({}, frequencyOption), {
          disabled: frequencyOption.value === "day" && this.value.periodicity !== "monthly"
        }));
      }
    });
  }
  ngOnInit() {
    this.periodicityTemplates = {
      daily: this.dailyTemplate,
      monthly: this.monthlyTemplate,
      weekly: this.weeklyTempalte
    };
    if (this.noParameters && this.noCustomParamsComponent) {
      this.checkExistsProcessesAPI();
    }
    this.periodicityOptions = this.getPeriodicityOptions();
    this.weekDays = this.getWeekDays();
    this.frequencyOptions = this.getFrequencyOptions();
  }
  onChangeContainsFrequency(containsFrequency) {
    if (containsFrequency) {
      this.value.frequency = {
        type: "hour",
        value: null
      };
    } else {
      this.value.frequency = {};
    }
    this.value.rangeLimitHour = null;
    this.value.rangeLimitDay = null;
    this.value.dayOfMonth = null;
  }
  onChangePeriodicityOptions(periodicity) {
    this.frequencyOptions = this.frequencyOptions.map((frequencyOption) => __spreadProps(__spreadValues({}, frequencyOption), {
      disabled: frequencyOption.value === "day" && periodicity !== "monthly"
    }));
    this.value.frequency.type = null;
  }
  onChangeFrequencyOptions() {
    this.value.rangeLimitHour = null;
  }
  checkExistsProcessesAPI() {
    this.poPageJobSchedulerService.getHeadProcesses().subscribe(void 0, (error) => {
      this.existProcessAPI = false;
    });
  }
  getPeriodicityOptions() {
    return [{
      label: this.literals.single,
      value: "single"
    }, {
      label: this.literals.daily,
      value: "daily"
    }, {
      label: this.literals.weekly,
      value: "weekly"
    }, {
      label: this.literals.monthly,
      value: "monthly"
    }];
  }
  getFrequencyOptions() {
    return [{
      label: this.literals.day,
      value: "day"
    }, {
      label: this.literals.hour,
      value: "hour"
    }, {
      label: this.literals.minute,
      value: "minute"
    }];
  }
  getWeekDays() {
    return [{
      label: this.literals.sunday,
      value: "Sunday"
    }, {
      label: this.literals.monday,
      value: "Monday"
    }, {
      label: this.literals.tuesday,
      value: "Tuesday"
    }, {
      label: this.literals.wednesday,
      value: "Wednesday"
    }, {
      label: this.literals.thursday,
      value: "Thursday"
    }, {
      label: this.literals.friday,
      value: "Friday"
    }, {
      label: this.literals.saturday,
      value: "Saturday"
    }];
  }
  subscribeProcessIdValueChanges() {
    this.form.controls["processID"]?.valueChanges.subscribe((processId) => {
      this.changeProcess.emit({
        processId,
        existAPI: this.existProcessAPI
      });
    });
  }
  static \u0275fac = function PoPageJobSchedulerExecutionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerExecutionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageJobSchedulerExecutionComponent,
    selectors: [["po-page-job-scheduler-execution"]],
    viewQuery: function PoPageJobSchedulerExecutionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 7);
        \u0275\u0275viewQuery(_c13, 7);
        \u0275\u0275viewQuery(_c14, 7);
        \u0275\u0275viewQuery(_c15, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.form = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dailyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthlyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.weeklyTempalte = _t.first);
      }
    },
    inputs: {
      componentsSize: [0, "p-components-size", "componentsSize"],
      isEdit: [0, "p-is-edit", "isEdit"],
      literals: [0, "p-literals", "literals"],
      noParameters: [0, "p-no-parameters", "noParameters"],
      noCustomParamsComponent: [0, "p-no-custom-params-component", "noCustomParamsComponent"],
      value: [0, "p-value", "value"]
    },
    outputs: {
      changeProcess: "p-change-process"
    },
    standalone: false,
    decls: 21,
    vars: 17,
    consts: [["formExecution", "ngForm"], ["dailyTemplate", ""], ["weeklyTemplate", ""], ["monthlyTemplate", ""], ["inputHourTemplate", ""], [1, "po-row"], ["name", "processID", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-disabled", "p-label", "p-placeholder", "p-size"], [1, "po-md-12", 3, "p-label"], ["name", "firstExecution", "p-placeholder", "dd/mm/aaaa", "p-required", "", 1, "po-md-4", 3, "ngModelChange", "ngModel", "p-disabled", "p-label", "p-min-date", "p-size"], ["name", "firstExecutionHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "ngModel", "p-disabled", "p-label", "p-pattern", "p-size"], ["name", "periodicity", "p-columns", "4", "p-required", "", 1, "po-sm-12", 3, "ngModelChange", "p-change", "ngModel", "p-label", "p-options", "p-size"], ["name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 1, "po-md-12", 3, "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder", "p-size"], ["name", "processID", "p-field-label", "description", "p-field-value", "processID", "p-required", "", 1, "po-md-12", 3, "ngModelChange", "ngModel", "p-disabled", "p-filter-service", "p-label", "p-placeholder", "p-size"], ["name", "processID", "p-required", "", 1, "po-md-12", 3, "ngModelChange", "ngModel", "p-disabled", "p-label", "p-placeholder", "p-size"], ["name", "containsFrequency", 1, "po-md-12", 3, "ngModelChange", "p-change", "ngModel", "p-label", "p-label-off", "p-label-on", "p-size"], [4, "ngTemplateOutlet"], ["name", "recurrent", 1, "po-md-3", 3, "ngModelChange", "ngModel", "p-label", "p-label-off", "p-label-on", "p-size"], ["name", "frequencyType", "p-required", "", 1, "po-md-10", 3, "ngModelChange", "p-change", "ngModel", "p-columns", "p-options", "p-size"], ["name", "frequencyValue", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "p-size", "ngModel"], ["name", "daysOfWeek", "p-columns", "4", "p-required", "", 1, "po-md-12", 3, "ngModelChange", "ngModel", "p-label", "p-options", "p-size"], ["name", "dayOfMonth", "p-required", "", 1, "po-md-3", 3, "ngModelChange", "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "p-size"], ["name", "rangeLimitDay", "p-required", "", 1, "po-md-3", 3, "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "p-size"], ["name", "rangeLimitDay", "p-required", "", 1, "po-md-3", 3, "ngModelChange", "ngModel", "p-error-pattern", "p-label", "p-max", "p-pattern", "p-size"], ["name", "hour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "ngModel", "p-label", "p-pattern", "p-size"], ["name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModel", "p-label", "p-pattern", "p-size"], ["name", "rangeLimitHour", "p-mask", "99:99", "p-mask-format-model", "", "p-placeholder", "HH:mm", "p-required", "", 1, "po-md-2", 3, "ngModelChange", "ngModel", "p-label", "p-pattern", "p-size"]],
    template: function PoPageJobSchedulerExecutionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "form", null, 0)(2, "div", 5);
        \u0275\u0275template(3, PoPageJobSchedulerExecutionComponent_Conditional_3_Template, 1, 1)(4, PoPageJobSchedulerExecutionComponent_Conditional_4_Template, 1, 5, "po-input", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "po-divider", 7);
        \u0275\u0275elementStart(7, "po-datepicker", 8);
        \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_datepicker_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value.firstExecution, $event) || (ctx.value.firstExecution = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "po-input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_input_ngModelChange_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value.firstExecutionHour, $event) || (ctx.value.firstExecutionHour = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "hr");
        \u0275\u0275elementStart(10, "div", 5)(11, "po-radio-group", 10);
        \u0275\u0275twoWayListener("ngModelChange", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_ngModelChange_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value.periodicity, $event) || (ctx.value.periodicity = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("p-change", function PoPageJobSchedulerExecutionComponent_Template_po_radio_group_p_change_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChangePeriodicityOptions($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, PoPageJobSchedulerExecutionComponent_Conditional_12_Template, 8, 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, PoPageJobSchedulerExecutionComponent_ng_template_13_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, PoPageJobSchedulerExecutionComponent_ng_template_15_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(17, PoPageJobSchedulerExecutionComponent_ng_template_17_Template, 3, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(19, PoPageJobSchedulerExecutionComponent_ng_template_19_Template, 2, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.existProcessAPI ? 3 : 4);
        \u0275\u0275advance(3);
        \u0275\u0275property("p-label", ctx.literals.firstExecution);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.value.firstExecution);
        \u0275\u0275property("p-disabled", ctx.isEdit)("p-label", ctx.literals.day)("p-min-date", ctx.startDateFirstExecution)("p-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.value.firstExecutionHour);
        \u0275\u0275property("p-disabled", ctx.isEdit)("p-label", ctx.literals.time)("p-pattern", ctx.timePattern)("p-size", ctx.componentsSize);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.value.periodicity);
        \u0275\u0275property("p-label", ctx.literals.periodicity)("p-options", ctx.periodicityOptions)("p-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value.periodicity !== "single" ? 12 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PoDividerComponent, PoCheckboxGroupComponent, PoRadioGroupComponent, PoDatepickerComponent, PoInputComponent, PoLookupComponent, PoNumberComponent, PoSwitchComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerExecutionComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler-execution",
      standalone: false,
      template: `<form #formExecution="ngForm">
  <div class="po-row">
    @if (existProcessAPI) {
      @if (noParameters && noCustomParamsComponent) {
        <po-lookup
          class="po-md-12"
          name="processID"
          [(ngModel)]="value.processID"
          p-field-label="description"
          p-field-value="processID"
          p-required
          [p-disabled]="isEdit"
          [p-filter-service]="poPageJobSchedulerLookup"
          [p-label]="literals.process"
          [p-placeholder]="literals.enterProcess"
          [p-size]="componentsSize"
        >
        </po-lookup>
      }
    } @else {
      <po-input
        class="po-md-12"
        name="processID"
        [(ngModel)]="value.processID"
        p-required
        [p-disabled]="isEdit"
        [p-label]="literals.process"
        [p-placeholder]="literals.enterProcess"
        [p-size]="componentsSize"
      >
      </po-input>
    }
  </div>

  <div class="po-row">
    <po-divider class="po-md-12" [p-label]="literals.firstExecution"></po-divider>

    <po-datepicker
      class="po-md-4"
      name="firstExecution"
      [(ngModel)]="value.firstExecution"
      p-placeholder="dd/mm/aaaa"
      p-required
      [p-disabled]="isEdit"
      [p-label]="literals.day"
      [p-min-date]="startDateFirstExecution"
      [p-size]="componentsSize"
    >
    </po-datepicker>

    <po-input
      class="po-md-2"
      name="firstExecutionHour"
      [(ngModel)]="value.firstExecutionHour"
      p-mask="99:99"
      p-mask-format-model
      p-placeholder="HH:mm"
      p-required
      [p-disabled]="isEdit"
      [p-label]="literals.time"
      [p-pattern]="timePattern"
      [p-size]="componentsSize"
    >
    </po-input>
  </div>

  <hr />

  <div class="po-row">
    <po-radio-group
      class="po-sm-12"
      name="periodicity"
      [(ngModel)]="value.periodicity"
      p-columns="4"
      p-required
      [p-label]="literals.periodicity"
      [p-options]="periodicityOptions"
      [p-size]="componentsSize"
      (p-change)="onChangePeriodicityOptions($event)"
    >
    </po-radio-group>

    @if (value.periodicity !== 'single') {
      <div class="po-row">
        <po-switch
          class="po-md-12"
          name="containsFrequency"
          [(ngModel)]="containsFrequency"
          [p-label]="literals.frequency"
          [p-label-off]="literals.no"
          [p-label-on]="literals.yes"
          [p-size]="componentsSize"
          (p-change)="onChangeContainsFrequency($event)"
        >
        </po-switch>
        @if (containsFrequency) {
          <po-radio-group
            class="po-md-10"
            name="frequencyType"
            p-required
            [(ngModel)]="value.frequency.type"
            [p-columns]="3"
            [p-options]="frequencyOptions"
            [p-size]="componentsSize"
            (p-change)="onChangeFrequencyOptions()"
          >
          </po-radio-group>
          <po-number
            class="po-md-2"
            name="frequencyValue"
            p-required
            [p-size]="componentsSize"
            [(ngModel)]="value.frequency.value"
          >
          </po-number>
        }
      </div>
      <div class="po-row">
        <po-divider class="po-md-12" [p-label]="literals.periodicityData"> </po-divider>
        <ng-container *ngTemplateOutlet="periodicityTemplates[value.periodicity]"> </ng-container>
      </div>
      <div class="po-row">
        <po-switch
          class="po-md-3"
          name="recurrent"
          [(ngModel)]="value.recurrent"
          [p-label]="literals.recurrent"
          [p-label-off]="literals.no"
          [p-label-on]="literals.yes"
          [p-size]="componentsSize"
        >
        </po-switch>
      </div>
    }
  </div>

  <ng-template #dailyTemplate>
    <ng-container *ngTemplateOutlet="inputHourTemplate"> </ng-container>
  </ng-template>

  <ng-template #weeklyTemplate>
    <div class="po-row">
      <ng-container *ngTemplateOutlet="inputHourTemplate"> </ng-container>
    </div>

    <po-checkbox-group
      class="po-md-12"
      name="daysOfWeek"
      [(ngModel)]="value.daysOfWeek"
      p-columns="4"
      p-required
      [p-label]="literals.weekDays"
      [p-options]="weekDays"
      [p-size]="componentsSize"
    >
    </po-checkbox-group>
  </ng-template>

  <ng-template #monthlyTemplate>
    <po-number
      class="po-md-3"
      name="dayOfMonth"
      [(ngModel)]="value.dayOfMonth"
      p-required
      [p-error-pattern]="'Dia inv\xE1lido'"
      [p-label]="dayLabel"
      [p-max]="31"
      [p-pattern]="dayPattern"
      [p-size]="componentsSize"
    >
    </po-number>

    @if (containsFrequency) {
      <po-number
        class="po-md-3"
        name="rangeLimitDay"
        [(ngModel)]="value.rangeLimitDay"
        p-required
        [p-error-pattern]="'Dia inv\xE1lido'"
        [p-label]="literals.endDay"
        [p-max]="31"
        [p-pattern]="dayPattern"
        [p-size]="componentsSize"
      >
      </po-number>
    }

    <ng-container *ngTemplateOutlet="inputHourTemplate"> </ng-container>
  </ng-template>

  <ng-template #inputHourTemplate>
    <po-input
      class="po-md-2"
      name="hour"
      [(ngModel)]="value.hour"
      p-mask="99:99"
      p-mask-format-model
      p-placeholder="HH:mm"
      p-required
      [p-label]="hourLabel"
      [p-pattern]="timePattern"
      [p-size]="componentsSize"
    >
    </po-input>

    @if (containsFrequency && value.frequency.type !== 'day') {
      <po-input
        class="po-md-2"
        name="rangeLimitHour"
        [(ngModel)]="value.rangeLimitHour"
        p-mask="99:99"
        p-mask-format-model
        p-placeholder="HH:mm"
        p-required
        [p-label]="literals.endTime"
        [p-pattern]="timePattern"
        [p-size]="componentsSize"
      >
      </po-input>
    }
  </ng-template>
</form>
`
    }]
  }], null, {
    form: [{
      type: ViewChild,
      args: ["formExecution", {
        static: true
      }]
    }],
    dailyTemplate: [{
      type: ViewChild,
      args: ["dailyTemplate", {
        static: true
      }]
    }],
    monthlyTemplate: [{
      type: ViewChild,
      args: ["monthlyTemplate", {
        static: true
      }]
    }],
    weeklyTempalte: [{
      type: ViewChild,
      args: ["weeklyTemplate", {
        static: true
      }]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    isEdit: [{
      type: Input,
      args: ["p-is-edit"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    noParameters: [{
      type: Input,
      args: ["p-no-parameters"]
    }],
    noCustomParamsComponent: [{
      type: Input,
      args: ["p-no-custom-params-component"]
    }],
    changeProcess: [{
      type: Output,
      args: ["p-change-process"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }]
  });
})();
var PoPageJobSchedulerParametersComponent = class _PoPageJobSchedulerParametersComponent {
  form;
  componentsSize;
  literals = {};
  parameters = [];
  value;
  valueChange = new EventEmitter();
  ngAfterViewInit() {
    if (this.form) {
      setTimeout(() => {
        this.form.valueChanges.subscribe((value) => {
          this.valueChange.emit(value);
        });
      });
    }
  }
  static \u0275fac = function PoPageJobSchedulerParametersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerParametersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageJobSchedulerParametersComponent,
    selectors: [["po-page-job-scheduler-parameters"]],
    viewQuery: function PoPageJobSchedulerParametersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c16, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.form = _t.first);
      }
    },
    inputs: {
      componentsSize: [0, "p-components-size", "componentsSize"],
      literals: [0, "p-literals", "literals"],
      parameters: [0, "p-parameters", "parameters"],
      value: [0, "p-value", "value"]
    },
    outputs: {
      valueChange: "p-valueChange"
    },
    standalone: false,
    decls: 2,
    vars: 1,
    consts: [["parametersForm", "ngForm"], [1, "po-text-center"], ["p-group-form", "", 3, "p-components-size", "p-fields", "p-value"], ["p-icon", "ICON_INFO"], [1, "po-font-text-large"]],
    template: function PoPageJobSchedulerParametersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PoPageJobSchedulerParametersComponent_Conditional_0_Template, 3, 3, "form")(1, PoPageJobSchedulerParametersComponent_Conditional_1_Template, 4, 1, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.parameters && ctx.parameters.length ? 0 : 1);
      }
    },
    dependencies: [\u0275NgNoValidate, NgControlStatusGroup, NgForm, PoDynamicFormComponent, PoIconComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerParametersComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler-parameters",
      standalone: false,
      template: '@if (parameters && parameters.length) {\n  <form #parametersForm="ngForm">\n    <po-dynamic-form p-group-form [p-components-size]="componentsSize" [p-fields]="parameters" [p-value]="value">\n    </po-dynamic-form>\n  </form>\n} @else {\n  <div class="po-text-center">\n    <po-icon p-icon="ICON_INFO"></po-icon>\n    <span class="po-font-text-large">\n      {{ literals.parametersNotFound }}\n    </span>\n  </div>\n}\n'
    }]
  }], null, {
    form: [{
      type: ViewChild,
      args: ["parametersForm"]
    }],
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    parameters: [{
      type: Input,
      args: ["p-parameters"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }],
    valueChange: [{
      type: Output,
      args: ["p-valueChange"]
    }]
  });
})();
var PoPageJobSchedulerSummaryComponent = class _PoPageJobSchedulerSummaryComponent {
  datePipe = inject(DatePipe);
  componentsSize;
  literals = {};
  parameters = [];
  value = {};
  noParameters = true;
  jobSchedulerSummaryTemplate;
  executionValue = "";
  firstExecutionValue = "";
  infoOrientation = PoInfoOrientation.Horizontal;
  periodicityValue = "";
  frequencyValue = "";
  rangeLimitHour = "";
  rangeLimitDay = "";
  recurrentValue = "";
  ngOnInit() {
    const {
      periodicity,
      hour,
      dayOfMonth,
      daysOfWeek,
      recurrent,
      firstExecution,
      firstExecutionHour,
      frequency,
      rangeLimitHour,
      rangeLimitDay
    } = this.value;
    this.periodicityValue = this.getPeriodicityLabel(periodicity);
    if (frequency) {
      this.frequencyValue = this.getFrequencyValue(frequency, periodicity);
    }
    this.executionValue = this.getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay);
    this.firstExecutionValue = this.getFirstExecutionLabel(firstExecution, firstExecutionHour);
    this.recurrentValue = this.getRecurrentValue(recurrent);
  }
  getFrequencyValue(frequency, periodicity) {
    return frequency["value"] && frequency["type"] && periodicity !== "single" ? `${frequency["value"]} - ${frequency["type"]}` : "";
  }
  getExecutionValue(periodicity, hour, daysOfWeek, dayOfMonth, rangeLimitHour, rangeLimitDay) {
    switch (periodicity) {
      case "daily":
        return this.getHourLabel(hour, rangeLimitHour);
      case "monthly":
        return this.getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay);
      case "weekly":
        return this.getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour);
      default:
        return this.literals.notReported;
    }
  }
  getFirstExecutionLabel(firstExecution, firstExecutionHour) {
    if (firstExecution) {
      const date = this.datePipe.transform(firstExecution, "dd/MM/yyyy", "-0200");
      return `${date} ${this.getHourLabel(firstExecutionHour)}`;
    } else {
      return this.literals.notReported;
    }
  }
  getHourLabel(hour, rangeLimitHour) {
    return `${rangeLimitHour ? this.literals.from : this.literals.at} ${hour || "00:00"} ${rangeLimitHour ? this.literals.to + " " + rangeLimitHour : ""}`;
  }
  getMonthlyLabelExecution(dayOfMonth, hour, rangeLimitHour, rangeLimitDay) {
    const hourLabel = this.getHourLabel(hour, rangeLimitHour);
    return `${rangeLimitDay ? this.literals.from : ""} ${dayOfMonth} ${rangeLimitDay ? this.literals.to : ""} ${rangeLimitDay ? rangeLimitDay : ""} ${hourLabel}`;
  }
  getPeriodicityLabel(periodicity) {
    switch (periodicity) {
      case "daily":
        return this.literals.daily;
      case "monthly":
        return this.literals.monthly;
      case "weekly":
        return this.literals.weekly;
      default:
        return this.literals.single;
    }
  }
  getRecurrentValue(recurrent) {
    return recurrent ? this.literals.yes : this.literals.no;
  }
  getSorterWeekDays() {
    return {
      "sunday": 0,
      "monday": 1,
      "tuesday": 2,
      "wednesday": 3,
      "thursday": 4,
      "friday": 5,
      "saturday": 6
    };
  }
  getTranslateWeekDay(day) {
    const days = {
      Sunday: this.literals.sunday,
      Monday: this.literals.monday,
      Tuesday: this.literals.tuesday,
      Wednesday: this.literals.wednesday,
      Thursday: this.literals.thursday,
      Friday: this.literals.friday,
      Saturday: this.literals.saturday
    };
    return days[day] || "";
  }
  getWeekDaysLabel(days = []) {
    const weekDaysSorted = this.sortWeekDays(days);
    return weekDaysSorted.map((day) => this.getTranslateWeekDay(day)).join(", ");
  }
  getWeeklyLabelExecution(daysOfWeek, hour, rangeLimitHour) {
    if (daysOfWeek && Array.isArray(daysOfWeek)) {
      return `${this.getWeekDaysLabel(daysOfWeek)} ${this.getHourLabel(hour, rangeLimitHour)}`;
    } else {
      return this.literals.notReported;
    }
  }
  sortWeekDays(days = []) {
    const sorterWeekDays = this.getSorterWeekDays();
    return days.sort((a, b) => {
      const currDay = a.toLowerCase();
      const nextDay = b.toLowerCase();
      return sorterWeekDays[currDay] > sorterWeekDays[nextDay] ? 1 : -1;
    });
  }
  static \u0275fac = function PoPageJobSchedulerSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerSummaryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageJobSchedulerSummaryComponent,
    selectors: [["po-page-job-scheduler-summary"]],
    inputs: {
      componentsSize: [0, "p-components-size", "componentsSize"],
      literals: [0, "p-literals", "literals"],
      parameters: [0, "p-parameters", "parameters"],
      value: [0, "p-value", "value"],
      noParameters: [0, "p-no-parameters", "noParameters"],
      jobSchedulerSummaryTemplate: [0, "p-summary-template", "jobSchedulerSummaryTemplate"]
    },
    standalone: false,
    decls: 9,
    vars: 17,
    consts: [[1, "po-md-12"], [3, "p-label", "p-orientation", "p-size", "p-value"], [1, "po-pt-1", "po-pb-1", "po-md-12", 3, "p-size", "p-title"], [1, "po-pt-1", "po-pb-1", "po-md-12"], [3, "p-components-size", "p-fields", "p-value"], [3, "ngTemplateOutlet"]],
    template: function PoPageJobSchedulerSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PoPageJobSchedulerSummaryComponent_Conditional_1_Template, 1, 4, "po-info", 1);
        \u0275\u0275element(2, "po-info", 1);
        \u0275\u0275template(3, PoPageJobSchedulerSummaryComponent_Conditional_3_Template, 1, 4, "po-info", 1)(4, PoPageJobSchedulerSummaryComponent_Conditional_4_Template, 1, 4, "po-info", 1);
        \u0275\u0275element(5, "po-info", 1)(6, "po-info", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, PoPageJobSchedulerSummaryComponent_Conditional_7_Template, 2, 5, "po-widget", 2)(8, PoPageJobSchedulerSummaryComponent_Conditional_8_Template, 2, 1, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.noParameters ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("p-label", ctx.literals.periodicity)("p-orientation", ctx.infoOrientation)("p-size", ctx.componentsSize)("p-value", ctx.periodicityValue);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.frequencyValue !== "" ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value.periodicity !== "single" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("p-label", ctx.literals.recurrent)("p-orientation", ctx.infoOrientation)("p-size", ctx.componentsSize)("p-value", ctx.recurrentValue);
        \u0275\u0275advance();
        \u0275\u0275property("p-label", ctx.literals.firstExecution)("p-orientation", ctx.infoOrientation)("p-size", ctx.componentsSize)("p-value", ctx.firstExecutionValue);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.parameters && ctx.parameters.length && !ctx.jobSchedulerSummaryTemplate ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.jobSchedulerSummaryTemplate ? 8 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, PoDynamicViewComponent, PoInfoComponent, PoWidgetComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerSummaryComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler-summary",
      standalone: false,
      template: `<div class="po-md-12">
  @if (!noParameters) {
    <po-info
      [p-label]="literals.process"
      [p-orientation]="infoOrientation"
      [p-size]="componentsSize"
      [p-value]="value.processID"
    >
    </po-info>
  }

  <po-info
    [p-label]="literals.periodicity"
    [p-orientation]="infoOrientation"
    [p-size]="componentsSize"
    [p-value]="periodicityValue"
  >
  </po-info>

  @if (frequencyValue !== '') {
    <po-info
      [p-label]="literals.frequency"
      [p-orientation]="infoOrientation"
      [p-size]="componentsSize"
      [p-value]="frequencyValue"
    >
    </po-info>
  }

  @if (value.periodicity !== 'single') {
    <po-info
      [p-label]="literals.execution"
      [p-orientation]="infoOrientation"
      [p-size]="componentsSize"
      [p-value]="executionValue"
    >
    </po-info>
  }

  <po-info
    [p-label]="literals.recurrent"
    [p-orientation]="infoOrientation"
    [p-size]="componentsSize"
    [p-value]="recurrentValue"
  >
  </po-info>

  <po-info
    [p-label]="literals.firstExecution"
    [p-orientation]="infoOrientation"
    [p-size]="componentsSize"
    [p-value]="firstExecutionValue"
  >
  </po-info>
</div>
@if (parameters && parameters.length && !jobSchedulerSummaryTemplate) {
  <po-widget class="po-pt-1 po-pb-1 po-md-12" [p-size]="componentsSize" [p-title]="literals.parameters">
    <po-dynamic-view [p-components-size]="componentsSize" [p-fields]="parameters" [p-value]="value.executionParameter">
    </po-dynamic-view>
  </po-widget>
}
@if (jobSchedulerSummaryTemplate) {
  <div class="po-pt-1 po-pb-1 po-md-12">
    <ng-template [ngTemplateOutlet]="jobSchedulerSummaryTemplate?.templateRef"></ng-template>
  </div>
}
`
    }]
  }], null, {
    componentsSize: [{
      type: Input,
      args: ["p-components-size"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    parameters: [{
      type: Input,
      args: ["p-parameters"]
    }],
    value: [{
      type: Input,
      args: ["p-value"]
    }],
    noParameters: [{
      type: Input,
      args: ["p-no-parameters"]
    }],
    jobSchedulerSummaryTemplate: [{
      type: Input,
      args: ["p-summary-template"]
    }]
  });
})();
var PoPageJobSchedulerComponent = class _PoPageJobSchedulerComponent extends PoPageJobSchedulerBaseComponent {
  poPageDynamicLookupService = inject(PoPageJobSchedulerLookupService);
  activatedRoute = inject(ActivatedRoute);
  poDialogService = inject(PoDialogService);
  poNotification = inject(PoNotificationService);
  schedulerExecution;
  schedulerParameters;
  parametersTemplate;
  jobSchedulerSummaryTemplate;
  isEdit = false;
  literals = __spreadValues({}, poPageJobSchedulerLiteralsDefault[poLocaleDefault]);
  publicValues;
  saveOperation;
  step = 1;
  parametersEmpty = true;
  stepParametersInitialized = false;
  steps = [];
  backPageAction = {
    label: this.literals.back,
    action: this.nextStepOperation.bind(this, "back"),
    disabled: this.isDisabledBack.bind(this)
  };
  concludePageAction = {
    label: this.literals.conclude,
    action: this.confirmJobScheduler.bind(this)
  };
  nextPageAction = {
    label: this.literals.next,
    action: this.nextStepOperation.bind(this, "next"),
    disabled: this.isDisabledAdvance.bind(this)
  };
  concludePageActions = [this.concludePageAction, this.backPageAction];
  nextPageActions = [this.nextPageAction, this.backPageAction];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  jobSchedulerActions = [...this.nextPageActions];
  stepExecution = 1;
  stepParameters = 2;
  stepSummary = 3;
  _stepExecutionLast;
  constructor() {
    const poPageJobSchedulerService = inject(PoPageJobSchedulerService);
    const languageService = inject(PoLanguageService);
    super(poPageJobSchedulerService);
    this.poPageJobSchedulerService = poPageJobSchedulerService;
    const language = languageService.getShortLanguage();
    this.literals = __spreadValues(__spreadValues({}, this.literals), poPageJobSchedulerLiteralsDefault[language]);
    this.backPageAction.label = this.literals.back;
    this.concludePageAction.label = this.literals.conclude;
    this.nextPageAction.label = this.literals.next;
  }
  get stepperOrientation() {
    return this.stepperDefaultOrientation || (window.innerWidth > 481 && window.innerWidth < 960 ? "horizontal" : "vertical");
  }
  ngOnInit() {
    const paramId = this.activatedRoute.snapshot.params["id"];
    this.isEdit = !!paramId;
    this.poPageJobSchedulerService.configServiceApi({
      endpoint: this.serviceApi
    });
    if (this.parameters.length) {
      this.parametersEmpty = false;
    }
    this.loadData(paramId);
  }
  ngAfterContentInit() {
    this.checkStepExecutionLast();
    this.getSteps();
  }
  changePageActionsBySteps(currentStep, nextStep) {
    const stepsLength = this.steps.length;
    if (nextStep === stepsLength) {
      this.jobSchedulerActions = [...this.concludePageActions];
    } else if (currentStep === stepsLength && nextStep < currentStep) {
      this.jobSchedulerActions = [...this.nextPageActions];
    }
  }
  nextStep(stepNumber) {
    const operation = stepNumber > this.step ? "next" : "back";
    const jumpStep = (stepNumber - this.step) * (operation === "back" ? -1 : 1);
    if (jumpStep > 1) {
      return;
    }
    if (!this.validateStepExecution()) {
      return;
    }
    if (operation === "next" && !this.validateStepSchedulerParameters()) {
      return;
    }
    if (operation === "next" && !this.validateStepTemplateParameters()) {
      return;
    }
    if (this.step === this.stepExecution) {
      this.setModelRecurrent();
    }
    this.setPropertiesFromTemplate();
    if (stepNumber === this.steps.length) {
      const model = JSON.parse(JSON.stringify(this.model));
      this.publicValues = this.hidesSecretValues(model);
    }
    this.steps[this.step - 1].status = operation === "next" ? PoStepperStatus.Done : PoStepperStatus.Default;
    this.changePageActionsBySteps(this.step, stepNumber);
    this.step = stepNumber;
    this.stepParametersInitialized = this.stepParametersInitialized || stepNumber === this.stepParameters;
  }
  onChangeProcess(process) {
    if (process.existAPI && process.processId && this.parametersEmpty && !this.parametersTemplate.length) {
      this.getParametersByProcess(process.processId);
      if (!this.isEdit) {
        this.model.executionParameter = {};
      }
    }
  }
  checkStepExecutionLast() {
    if (!this.parametersTemplate.length) {
      this._stepExecutionLast = false;
      return;
    }
    this._stepExecutionLast = this.stepExecutionLast;
  }
  confirmJobScheduler() {
    const paramId = this.activatedRoute.snapshot.params["id"];
    const confirmMessage = paramId ? this.literals.confirmUpdateMessage : this.literals.confirmSaveMessage;
    this.poDialogService.confirm({
      title: this.literals.confirmation,
      message: confirmMessage,
      confirm: () => {
        const beforeSendModel = this.beforeSendAction ? this.beforeSendAction(this.model) : void 0;
        const model = __spreadValues({}, beforeSendModel || this.model);
        this.save(model, paramId);
      }
    });
  }
  emitSuccessMessage(msgSuccess, saveOperation) {
    saveOperation.subscribe({
      next: () => {
        this.success.emit();
        this.poNotification.success(msgSuccess);
        this.resetJobSchedulerForm();
      },
      error: (e) => this.error.emit(e)
    });
  }
  getParametersByProcess(process) {
    this.poPageJobSchedulerService.getParametersByProcess(process).subscribe((parameters) => {
      this.parameters = parameters;
    });
  }
  hidesSecretValues(model) {
    const hiddenSecretValue = "**********";
    this.parameters.forEach((parameter) => {
      if (this.isSecretParameter(model, parameter)) {
        model.executionParameter[parameter.property] = hiddenSecretValue;
      }
    });
    return model;
  }
  getSteps() {
    const templateArray = [];
    this.parametersTemplate.toArray().forEach((value, index, array) => {
      templateArray.push({
        label: value.title || `${this.literals.parameterization} ${array.length > 1 ? index + 1 : ""}`
      });
    });
    let _steps = [];
    if (!this._stepExecutionLast) {
      _steps.push({
        label: this.literals.scheduling
      });
    }
    if (!templateArray.length) {
      _steps.push({
        label: this.literals.parameterization
      });
    } else {
      _steps = [..._steps, ...templateArray];
    }
    if (this._stepExecutionLast) {
      _steps.push({
        label: this.literals.scheduling
      });
    }
    _steps.push({
      label: this.literals.conclude
    });
    this.steps = _steps;
    this.stepSummary = this.steps.length;
    if (this._stepExecutionLast) {
      this.stepExecution = this.stepSummary - 1;
    }
  }
  getTemplateCurrent() {
    const indexTemplate = this.step - (this.stepExecutionLast ? 1 : 2);
    return this.parametersTemplate.toArray()[indexTemplate];
  }
  templateHasDisable() {
    const template = this.getTemplateCurrent();
    return !template?.disabledAdvance;
  }
  isDisabledAdvance() {
    if (this.step === this.stepExecution) {
      return this.schedulerExecution?.form?.invalid;
    }
    if (this.schedulerParameters) {
      return this.schedulerParameters?.form?.invalid;
    }
    const templateCurrent = this.getTemplateCurrent();
    if (templateCurrent) {
      return templateCurrent.disabledAdvance;
    }
    return false;
  }
  isDisabledBack() {
    return this.step === 1;
  }
  isSecretParameter(model, parameter) {
    return model.executionParameter && parameter.hasOwnProperty("secret") && parameter["secret"] === true && model.executionParameter.hasOwnProperty(parameter.property);
  }
  nextStepOperation(operation) {
    const stepNumber = operation === "back" ? this.step - 1 : this.step + 1;
    this.nextStep(stepNumber);
  }
  resetJobSchedulerForm() {
    this.schedulerExecution.form.reset();
    setTimeout(() => {
      this.model = new PoPageJobSchedulerInternal();
      this.step = 1;
      this.steps.forEach((step) => {
        step.status = PoStepperStatus.Default;
      });
      this.jobSchedulerActions = [...this.nextPageActions];
    });
  }
  save(model, paramId) {
    const saveOperation = paramId ? this.poPageJobSchedulerService.updateResource(paramId, model) : this.poPageJobSchedulerService.createResource(model);
    const msgSuccess = paramId ? this.literals.saveNotificationSuccessUpdate : this.literals.saveNotificationSuccessSave;
    this.emitSuccessMessage(msgSuccess, saveOperation);
  }
  setModelRecurrent() {
    this.model.recurrent = this.model.periodicity === "single" ? false : this.model.recurrent;
  }
  setPropertiesFromTemplate() {
    const templateCurrent = this.getTemplateCurrent();
    if (!templateCurrent) {
      return;
    }
    this.model = __spreadProps(__spreadValues({}, this.model), {
      executionParameter: __spreadValues(__spreadValues({}, this.model.executionParameter), templateCurrent.executionParameter)
    });
  }
  validateStepExecution() {
    const stepCurrent = this.step;
    if (stepCurrent == this.stepExecution && this.schedulerExecution.form.invalid) {
      this.markAsDirtyInvalidControls(this.schedulerExecution.form.controls);
      return false;
    }
    return true;
  }
  validateStepSchedulerParameters() {
    if (this.step === this.stepExecution || this.step === this.stepSummary) {
      return true;
    }
    if (this.schedulerParameters && this.schedulerParameters.form && this.schedulerParameters.form.invalid) {
      this.markAsDirtyInvalidControls(this.schedulerParameters.form.controls);
      return false;
    }
    return true;
  }
  validateStepTemplateParameters() {
    if (this.step === this.stepExecution || this.step === this.stepSummary) {
      return true;
    }
    if (!this.parametersTemplate.length) {
      return true;
    }
    return this.templateHasDisable();
  }
  static \u0275fac = function PoPageJobSchedulerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageJobSchedulerComponent,
    selectors: [["po-page-job-scheduler"]],
    contentQueries: function PoPageJobSchedulerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PoJobSchedulerSummaryTemplateDirective, 5);
        \u0275\u0275contentQuery(dirIndex, PoJobSchedulerParametersTemplateDirective, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.jobSchedulerSummaryTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.parametersTemplate = _t);
      }
    },
    viewQuery: function PoPageJobSchedulerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c17, 7);
        \u0275\u0275viewQuery(_c18, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.schedulerExecution = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.schedulerParameters = _t.first);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 13,
    vars: 18,
    consts: [["formScheduler", "ngForm"], ["schedulerExecution", ""], ["schedulerParameters", ""], [3, "p-actions", "p-breadcrumb", "p-components-size", "p-title"], [1, "po-row"], ["p-sequential", "true", 3, "p-change-step", "ngClass", "p-orientation", "p-step", "p-steps"], [3, "ngClass"], [1, "po-md-12", 3, "p-change-process", "p-no-parameters", "p-no-custom-params-component", "hidden", "p-components-size", "p-is-edit", "p-literals", "p-value"], [1, "po-md-12", 3, "hidden", "p-components-size", "p-literals", "p-parameters", "p-value"], [1, "po-md-12", 3, "p-no-parameters", "p-summary-template", "p-components-size", "p-literals", "p-parameters", "p-value"], [3, "hidden"], [1, "po-md-12", 3, "p-valueChange", "hidden", "p-components-size", "p-literals", "p-parameters", "p-value"], [3, "ngTemplateOutlet"]],
    template: function PoPageJobSchedulerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "po-page-default", 3)(1, "div", 4)(2, "po-stepper", 5);
        \u0275\u0275listener("p-change-step", function PoPageJobSchedulerComponent_Template_po_stepper_p_change_step_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.nextStep($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "po-container", 6)(4, "form", null, 0)(6, "div", 4)(7, "po-page-job-scheduler-execution", 7, 1);
        \u0275\u0275listener("p-change-process", function PoPageJobSchedulerComponent_Template_po_page_job_scheduler_execution_p_change_process_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChangeProcess($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, PoPageJobSchedulerComponent_Conditional_9_Template, 2, 6, "po-page-job-scheduler-parameters", 8)(10, PoPageJobSchedulerComponent_Conditional_10_Template, 1, 6, "po-page-job-scheduler-summary", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(11, PoPageJobSchedulerComponent_For_12_Template, 2, 2, "div", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("p-actions", ctx.jobSchedulerActions)("p-breadcrumb", ctx.breadcrumb)("p-components-size", ctx.componentsSize)("p-title", ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.stepperDefaultOrientation === "horizontal" ? "po-lg-12 po-xl-12" : "po-lg-3 po-xl-2")("p-orientation", ctx.stepperOrientation)("p-step", ctx.step)("p-steps", ctx.steps);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.stepperDefaultOrientation === "horizontal" ? "po-lg-12 po-xl-12" : "po-lg-8 po-xl-6");
        \u0275\u0275advance(4);
        \u0275\u0275property("p-no-parameters", ctx.parametersEmpty)("p-no-custom-params-component", !ctx.parametersTemplate.length)("hidden", ctx.step !== ctx.stepExecution)("p-components-size", ctx.componentsSize)("p-is-edit", ctx.isEdit)("p-literals", ctx.literals)("p-value", ctx.model);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.stepParametersInitialized && !ctx.parametersTemplate.length ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === ctx.stepSummary ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.parametersTemplate);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, \u0275NgNoValidate, NgControlStatusGroup, NgForm, PoContainerComponent, PoPageDefaultComponent, PoStepperComponent, PoPageJobSchedulerExecutionComponent, PoPageJobSchedulerParametersComponent, PoPageJobSchedulerSummaryComponent],
    styles: ["po-container .po-container{overflow-y:unset}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerComponent, [{
    type: Component,
    args: [{
      selector: "po-page-job-scheduler",
      encapsulation: ViewEncapsulation.None,
      standalone: false,
      template: `<po-page-default
  [p-actions]="jobSchedulerActions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-title]="title"
>
  <div class="po-row">
    <po-stepper
      [ngClass]="stepperDefaultOrientation === 'horizontal' ? 'po-lg-12 po-xl-12' : 'po-lg-3 po-xl-2'"
      p-sequential="true"
      [p-orientation]="stepperOrientation"
      [p-step]="step"
      [p-steps]="steps"
      (p-change-step)="nextStep($event)"
    >
    </po-stepper>

    <po-container [ngClass]="stepperDefaultOrientation === 'horizontal' ? 'po-lg-12 po-xl-12' : 'po-lg-8 po-xl-6'">
      <form #formScheduler="ngForm">
        <div class="po-row">
          <po-page-job-scheduler-execution
            [p-no-parameters]="parametersEmpty"
            [p-no-custom-params-component]="!parametersTemplate.length"
            [hidden]="step !== stepExecution"
            #schedulerExecution
            class="po-md-12"
            [p-components-size]="componentsSize"
            [p-is-edit]="isEdit"
            [p-literals]="literals"
            [p-value]="model"
            (p-change-process)="onChangeProcess($event)"
          >
          </po-page-job-scheduler-execution>

          @if (stepParametersInitialized && !parametersTemplate.length) {
            <po-page-job-scheduler-parameters
              [hidden]="step !== stepParameters"
              #schedulerParameters
              class="po-md-12"
              [p-components-size]="componentsSize"
              [p-literals]="literals"
              [p-parameters]="parameters || []"
              [(p-value)]="model.executionParameter"
            >
            </po-page-job-scheduler-parameters>
          }

          @if (step === stepSummary) {
            <po-page-job-scheduler-summary
              [p-no-parameters]="!parameters.length"
              [p-summary-template]="jobSchedulerSummaryTemplate"
              class="po-md-12"
              [p-components-size]="componentsSize"
              [p-literals]="literals"
              [p-parameters]="parameters"
              [p-value]="publicValues"
            >
            </po-page-job-scheduler-summary>
          }
        </div>
      </form>

      @for (template of parametersTemplate; track template; let index = $index) {
        <div [hidden]="step !== index + (_stepExecutionLast ? 1 : 2)">
          <ng-template [ngTemplateOutlet]="template?.templateRef"></ng-template>
        </div>
      }
    </po-container>
  </div>
</po-page-default>
`,
      styles: ["po-container .po-container{overflow-y:unset}\n"]
    }]
  }], () => [], {
    schedulerExecution: [{
      type: ViewChild,
      args: ["schedulerExecution", {
        static: true
      }]
    }],
    schedulerParameters: [{
      type: ViewChild,
      args: ["schedulerParameters"]
    }],
    parametersTemplate: [{
      type: ContentChildren,
      args: [PoJobSchedulerParametersTemplateDirective]
    }],
    jobSchedulerSummaryTemplate: [{
      type: ContentChild,
      args: [PoJobSchedulerSummaryTemplateDirective]
    }]
  });
})();
var PoPageJobSchedulerModule = class _PoPageJobSchedulerModule {
  static \u0275fac = function PoPageJobSchedulerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageJobSchedulerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageJobSchedulerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService],
    imports: [CommonModule, FormsModule, PoButtonModule, PoContainerModule, PoDialogModule, PoDividerModule, PoDynamicModule, PoFieldModule, PoIconModule, PoInfoModule, PoPageModule, PoStepperModule, PoWidgetModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageJobSchedulerModule, [{
    type: NgModule,
    args: [{
      declarations: [PoPageJobSchedulerComponent, PoPageJobSchedulerExecutionComponent, PoPageJobSchedulerParametersComponent, PoPageJobSchedulerSummaryComponent, PoJobSchedulerParametersTemplateDirective, PoJobSchedulerSummaryTemplateDirective],
      exports: [PoPageJobSchedulerComponent, PoJobSchedulerParametersTemplateDirective, PoJobSchedulerSummaryTemplateDirective],
      imports: [CommonModule, FormsModule, PoButtonModule, PoContainerModule, PoDialogModule, PoDividerModule, PoDynamicModule, PoFieldModule, PoIconModule, PoInfoModule, PoPageModule, PoStepperModule, PoWidgetModule],
      providers: [PoPageJobSchedulerService, PoPageJobSchedulerLookupService]
    }]
  }], null, null);
})();
var PoPageLoginAuthenticationType;
(function(PoPageLoginAuthenticationType2) {
  PoPageLoginAuthenticationType2["Basic"] = "Basic";
  PoPageLoginAuthenticationType2["Bearer"] = "Bearer";
})(PoPageLoginAuthenticationType || (PoPageLoginAuthenticationType = {}));
var PoPageLoginService = class _PoPageLoginService {
  http;
  constructor(http) {
    this.http = http;
  }
  onLogin(url, type, loginForm) {
    if (type === PoPageLoginAuthenticationType.Bearer) {
      loginForm.password = btoa(loginForm.password);
      return this.http.post(url, loginForm);
    } else {
      const user = `(${loginForm.login}:${loginForm.password})`;
      const headers = new HttpHeaders({
        "Authorization": `${type} ` + btoa(user)
      });
      delete loginForm.login;
      delete loginForm.password;
      return this.http.post(url, loginForm, {
        headers
      });
    }
  }
  static \u0275fac = function PoPageLoginService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageLoginService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PoPageLoginService,
    factory: _PoPageLoginService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var poPageLoginContentMaxLength = 40;
var poPageLoginLiteralsDefault = {
  en: {
    title: "Welcome",
    loginErrorPattern: "Invalid Login",
    loginHint: `Your login user was given to you at your first day.
    If you don't have this information contact support`,
    loginPlaceholder: "Insert your e-mail",
    passwordErrorPattern: "Invalid Password",
    passwordPlaceholder: "Insert your password",
    customFieldErrorPattern: "Invalid value",
    customFieldPlaceholder: "Please enter a value",
    rememberUser: "Automatic login",
    rememberUserHint: "You can disable this option in system configuration",
    submitLabel: "Enter",
    submittedLabel: "Loading...",
    forgotPassword: "Forgot your Password?",
    highlightInfo: "",
    registerUrl: "New register",
    titlePopover: "Oops!",
    forgotYourPassword: "Forgot your password?",
    ifYouTryHarder: "If you try ",
    attempts: "{0} more time(s) ",
    yourUserWillBeBlocked: "without success your user will be blocked and you will be left 24 hours without being able to access :(",
    createANewPasswordNow: "Better create a new password now! You will be able to log into the system right away.",
    iForgotMyPassword: "I forgot my password",
    welcome: "Welcome",
    support: "Support"
  },
  es: {
    title: "Bienvenido",
    loginErrorPattern: "Login inv\xE1lido",
    loginHint: `Su usuario ha sido entregado para usted en su primer d\xEDa.
    Si no tiene esta informaci\xF3n, p\xF3ngase en contacto con el soporte t\xE9cnico`,
    loginPlaceholder: "Inserte su e-mail",
    passwordErrorPattern: "Contrase\xF1a inv\xE1lida",
    passwordPlaceholder: "Inserte su contrase\xF1a",
    customFieldErrorPattern: "Valor no v\xE1lido.",
    customFieldPlaceholder: "Por favor introduzca un valor",
    rememberUser: "Inicio de sesi\xF3n autom\xE1ticamente",
    rememberUserHint: "Puede deshabilitar esta opci\xF3n en el men\xFA del sistema.",
    submitLabel: "Entrar",
    submittedLabel: "Cargando...",
    forgotPassword: "Olvidaste tu contrase\xF1a?",
    highlightInfo: "",
    registerUrl: "Nuevo registro",
    titlePopover: "Opa!",
    forgotYourPassword: "Olvidaste tu contrase\xF1a?",
    ifYouTryHarder: "Si intenta m\xE1s ",
    attempts: "{0} vez/veces ",
    yourUserWillBeBlocked: "sin \xE9xito su usuario sera bloqueado y usted v\xE1s permanecer 24 horas sin poder acceder a :(",
    createANewPasswordNow: "\xA1Mejor crear una nueva contrase\xF1a ahora! Usted podr\xE1 entrar en el sistema inmediatamente despu\xE9s.",
    iForgotMyPassword: "Olvide mi contrase\xF1a",
    welcome: "Bienvenido",
    support: "Soporte"
  },
  pt: {
    title: "Bem-vindo",
    loginErrorPattern: "Login inv\xE1lido",
    loginHint: `Seu usu\xE1rio foi entregue a voc\xEA no seu primeiro dia.
    Caso n\xE3o tenha mais essa informa\xE7\xE3o contacte o suporte`,
    loginPlaceholder: "Insira seu e-mail",
    passwordErrorPattern: "Senha inv\xE1lida",
    passwordPlaceholder: "Insira sua senha",
    customFieldErrorPattern: "Valor inv\xE1lido.",
    customFieldPlaceholder: "Por favor insira um valor",
    rememberUser: "Logar automaticamente",
    rememberUserHint: "Voc\xEA pode desabilitar essa op\xE7\xE3o no menu do sistema",
    submitLabel: "Entrar",
    submittedLabel: "Carregando...",
    forgotPassword: "Esqueceu sua senha?",
    highlightInfo: "",
    registerUrl: "Novo registro",
    titlePopover: "Opa!",
    forgotYourPassword: "Esqueceu sua senha?",
    ifYouTryHarder: "Se tentar mais ",
    attempts: "{0} vez(es) ",
    yourUserWillBeBlocked: "sem sucesso seu usu\xE1rio ser\xE1 bloqueado e voc\xEA fica 24 horas sem poder acessar :(",
    createANewPasswordNow: "Melhor criar uma senha nova agora! Voc\xEA vai poder entrar no sistema logo em seguida.",
    iForgotMyPassword: "Esqueci minha senha",
    welcome: "Boas-vindas",
    support: "Suporte"
  },
  ru: {
    title: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!",
    loginErrorPattern: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D",
    loginHint: `\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D \u0431\u044B\u043B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u0432\u0430\u043C \u0432 \u043F\u0435\u0440\u0432\u044B\u0439 \u0434\u0435\u043D\u044C.
    \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u044D\u0442\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438`,
    loginPlaceholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
    passwordErrorPattern: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    passwordPlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    customFieldErrorPattern: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
    customFieldPlaceholder: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    rememberUser: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0432\u0445\u043E\u0434",
    rememberUserHint: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u0442\u0443 \u043E\u043F\u0446\u0438\u044E \u0432 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B",
    submitLabel: "\u0412\u043E\u0439\u0442\u0438",
    submittedLabel: "3\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
    forgotPassword: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
    highlightInfo: "",
    registerUrl: "\u041D\u043E\u0432\u044B\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440",
    titlePopover: "\u041E\u0439!",
    forgotYourPassword: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
    ifYouTryHarder: "\u0415\u0441\u043B\u0438 \u0432\u044B \u0431\u0435\u0437\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u043F\u044B\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u0432\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 ",
    attempts: "{0} \u0440\u0430\u0437(\u0430) ",
    yourUserWillBeBlocked: "\u0412\u0430\u0448 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D, \u0438 \u0412\u044B \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0435\u0441\u044C \u043D\u0430 24 \u0447\u0430\u0441\u0430 \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 :(",
    createANewPasswordNow: "\u041B\u0443\u0447\u0448\u0435 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0441\u0435\u0439\u0447\u0430\u0441!\xA0\u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0440\u0430\u0437\u0443 \u0432\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443.",
    iForgotMyPassword: "\u042F \u0437\u0430\u0431\u044B\u043B \u0441\u0432\u043E\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    welcome: "\u0434\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C",
    support: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430"
  }
};
var poPageLoginLiteralIn = {
  en: "in",
  es: "en",
  pt: "em",
  ru: "\u0432"
};
var PoPageLoginBaseComponent = class _PoPageLoginBaseComponent {
  loginService;
  router;
  poLanguageService;
  /**
   * O `p-background` permite inserir uma imagem de destaque ao lado direito do formulário de login, caso a propriedade
   * não seja preenchida o formulário será centralizado no espaço disponível.
   *
   * A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.
   *
   * Além da imagem, é possível adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
   * um valor para a literal `highlightInfo`.
   *
   * > Veja mais sobre as literais na propriedade `p-literals`.
   *
   * Exemplos de valores válidos:
   * - **local**: `./assets/images/login-background.png`
   * - **url externa**: `https://po-ui.io/assets/images/login-background.png`
   *
   * > Essa propriedade é ignorada para aplicações mobile.
   */
  background;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada na parte superior.
   *
   * > Caso seja indefinida o espaço se mantém preservado porém vazio.
   */
  logo;
  /**
   * @optional
   *
   * @description
   *
   * Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `loginErrorPattern`
   * será exibida.
   *
   * Exemplos de valores válidos:
   * - email: `[expressao-regular-email]`
   * - cpf: `[expressao-regular-cpf]`
   *
   * > Veja a propriedade `p-literals` para customizar a literal `loginErrorPattern`.
   */
  loginPattern;
  /**
   * @optional
   *
   * @description
   *
   * Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `passwordErrorPattern`
   * será exibida.
   *
   * Exemplos de valores válidos:
   * - Apenas números: `\d?`
   * - Letras mínusculas: `\z?`
   *
   * > Veja a propriedade `p-literals` para customizar a literal `passwordErrorPattern`.
   */
  passwordPattern;
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  secondaryLogo;
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado quando o usuário alterar o input do campo login.
   *
   * Esse evento receberá como parâmetro uma variável do tipo `string` com o texto informado no campo.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-authentication-url`.
   */
  loginChange = new EventEmitter();
  /**
   * Evento disparado ao submeter o formulário de login (apertando `Enter` dentro dos campos ou pressionando o botão de confirmação).
   *
   * Esse evento receberá como parâmetro um objeto do tipo `PoPageLogin` com os dados informados no formulário.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-url-recovery`.
   *
   * > Para mais detalhes consulte a documentação sobre a interface `PoPageLogin` mais abaixo.
   */
  loginSubmit = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado quando o usuário alterar o input do campo password.
   *
   * Esse evento receberá como parâmetro uma variável do tipo `string` com o texto informado no campo.
   *
   * > Esta propriedade será ignorada se for definido valor para a propriedade `p-authentication-url`.
   */
  passwordChange = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Evento disparado quando o usuário alterar o idioma da página.
   *
   * Esse evento receberá como parâmetro um objeto do tipo `PoLanguage` com a linguagem selecionada.
   *
   */
  languageChange = new EventEmitter();
  /**
   * @optional
   *
   * @description
   *
   * Define a propriedade nativa `autocomplete` do campo como `off`.
   *
   * @default `true`
   */
  noAutocompleteLogin = true;
  /**
   * @optional
   *
   * @description
   *
   * Define a propriedade nativa `autocomplete` do campo como `off`.
   *
   * > No componente `po-password` será definido como `new-password`.
   *
   * @default `true`
   */
  noAutocompletePassword = true;
  /**
   * @optional
   *
   * @description
   *
   * Indica se o status do `model` do switch de lembrar o usuário será escondido visualmente.
   *
   * > Por padrão será atribuído `false`.
   * @default `false`
   */
  hideLabelStatus = false;
  /**
   * @optional
   *
   * @description
   *
   * Permite esconder a função de espiar a senha digitada.
   *
   * @default `false`
   */
  hidePasswordPeek;
  allLoginErrors = [];
  allPasswordErrors = [];
  customFieldObject;
  customFieldType;
  loginSubscription;
  password;
  rememberUser = false;
  selectedLanguage;
  showExceededAttemptsWarning = false;
  _authenticationType = PoPageLoginAuthenticationType.Basic;
  _authenticationUrl;
  _blockedUrl;
  _componentsSize = void 0;
  _contactEmail;
  _customField;
  _environment;
  _exceededAttemptsWarning;
  _hideRememberUser = false;
  _literals;
  _loading = false;
  _login;
  _loginErrors = [];
  _passwordErrors = [];
  _productName;
  _recovery;
  _registerUrl;
  _support;
  _languagesList;
  /**
   * @optional
   *
   * @description
   *
   * Define o tamanho dos componentes de formulário no template:
   * - `small`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).
   * - `medium`: aplica a medida medium de cada componente.
   *
   * > Caso a acessibilidade AA não esteja configurada, o tamanho `medium` será mantido.
   * Para mais detalhes, consulte a documentação do [po-theme](https://po-ui.io/documentation/po-theme).
   *
   * @default `medium`
   */
  set componentsSize(value) {
    this._componentsSize = validateSizeFn(value);
  }
  get componentsSize() {
    return this._componentsSize ?? getDefaultSizeFn();
  }
  /**
   * @optional
   *
   * @description
   *
   * Ao informar um valor do tipo `string`, o mesmo será aplicado como a chave do campo customizado e utilizará
   * os valores padrões contidos na propriedade `literals` como `customFieldErrorPattern` e `customFieldPlaceholder`.
   *
   * Existe a possibilidade de informar um objeto que segue a definição da interface `PoPageLoginCustomField`, onde
   * através dos parâmetros enviados pode gerar um `po-input`, `po-combo` especificamente para serviços
   * ou `po-select` para valores fixos.
   *
   * Abaixo seguem os exemplos de cada tipo de campo.
   *
   * `po-input`:
   *
   * ```
   * {
   *   property: 'domain',
   *   value: 'jv01',
   *   placeholder: 'Enter your domain',
   *   pattern: '[a-z]',
   *   errorPattern: 'Invalid value'
   * }
   * ```
   *
   * `po-combo`:
   *
   * ```
   * {
   *   property: 'domain',
   *   value: 'jv01',
   *   placeholder: 'Enter your domain',
   *   url: 'https://po-ui.io/sample/api/comboOption/domains',
   *   fieldValue: 'nickname'
   * }
   * ```
   *
   * `po-select`:
   *
   * ```
   * {
   *   property: 'domain',
   *   value: 'jv01',
   *   placeholder: 'Enter your domain',
   *   options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
   * }
   * ```
   *
   * Caso o customField possua options, url e fieldValue preenchidos, será priorizado o po-select
   * utilizando o options.
   *
   */
  set customField(value) {
    if (value) {
      if (isTypeof(value, "string")) {
        this.customFieldType = "input";
        this._customField = value;
        this.customFieldObject = this.getDefaultCustomFieldObject(value);
        return;
      }
      if (isTypeof(value, "object") && !Array.isArray(value) && value["property"]) {
        this._customField = value;
        this.customFieldObject = value;
        if (!this.customFieldObject.options && !this.customFieldObject.url) {
          this.customFieldType = "input";
        } else {
          this.customFieldType = this.customFieldObject.options ? "select" : "combo";
        }
        return;
      }
    }
    this._customField = void 0;
    this.customFieldObject = void 0;
  }
  get customField() {
    return this._customField;
  }
  /**
   * @optional
   *
   * @description
   *
   * Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.
   */
  set contactEmail(value) {
    this._contactEmail = value;
  }
  get contactEmail() {
    return this._contactEmail;
  }
  /**
   * @optional
   *
   * @description
   *
   * Texto customizado que fica entre a logo e a mensagem de boas-vindas.
   */
  set productName(value) {
    this._productName = value;
  }
  get productName() {
    return this._productName;
  }
  /**
   * @optional
   *
   * @description
   * Adiciona uma `tag` abaixo do título que especifica o ambiente que o usuário está fazendo o login.
   *
   * > Essa propriedade limita o texto em 40 caracteres.
   */
  set environment(environment2) {
    if (environment2 && environment2.length > poPageLoginContentMaxLength) {
      this._environment = environment2.substring(0, poPageLoginContentMaxLength);
    } else {
      this._environment = environment2;
    }
  }
  get environment() {
    return this._environment;
  }
  /**
   * @optional
   *
   * @description
   * Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
   * O aviso será exibido somente se a quantidade for maior que zero.
   *
   * > Caso tenha algum valor atribuído para o atributo `p-authentication-url` e o retorno da requisição estiver atribuindo valor
   * para o `p-exceeded-attempts-warning`, o valor considerado será o do retorno da requisição.
   *
   * @default `0`
   */
  set exceededAttemptsWarning(value) {
    this._exceededAttemptsWarning = convertToInt(value);
    this.showExceededAttemptsWarning = this.exceededAttemptsWarning > 0;
  }
  get exceededAttemptsWarning() {
    return this._exceededAttemptsWarning;
  }
  /**
   * @optional
   *
   * @description
   *
   * Esconde a função "Lembrar usuário" do formulário de login.
   *
   * Quando essa propriedade é setada com `true` a propriedade `rememberUser` enviada no evento `p-login-submit` será sempre
   * `false`.
   *
   * > Veja a propriedade `p-literals` para customizar a literal `rememberUser`.
   *
   * @default `false`
   */
  set hideRememberUser(value) {
    this._hideRememberUser = value === "" ? true : convertToBoolean(value);
    if (this._hideRememberUser) {
      this.rememberUser = false;
    }
  }
  get hideRememberUser() {
    return this._hideRememberUser;
  }
  /**
   * @optional
   *
   * @description
   *
   * Objeto com as literais usadas no `po-page-login`.
   *
   * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
   *
   * ```
   *  const customLiterals: PoPageLoginLiterals = {
   *    attempts: '{0} vez(es) ',
   *    createANewPasswordNow: 'Melhor criar uma senha nova agora! Você vai poder entrar no sistema logo em seguida.',
   *    forgotPassword: 'Esqueceu sua senha?',
   *    forgotYourPassword: 'Esqueceu sua senha?',
   *    highlightInfo: '',
   *    iForgotMyPassword: 'Esqueci minha senha',
   *    ifYouTryHarder: 'Se tentar mais ',
   *    welcome: 'Boas-vindas',
   *    loginErrorPattern: 'Login obrigatório',
   *    loginHint: 'Caso não possua usuário entre em contato com o suporte',
   *    loginLabel: 'Insira seu usuário',
   *    loginPlaceholder: 'Insira seu usuário de acesso',
   *    passwordErrorPattern: 'Senha obrigatória',
   *    passwordLabel: 'Insira sua senha',
   *    passwordPlaceholder: 'Insira sua senha de acesso',
   *    customFieldErrorPattern: 'Campo customizado inválido',
   *    customFieldPlaceholder: 'Por favor insira um valor',
   *    registerUrl: 'Novo registro',
   *    rememberUser: 'Lembrar usuário',
   *    rememberUserHint: 'Esta opção pode ser desabilitada nas configurações do sistema',
   *    submitLabel: 'Acessar sistema',
   *    submittedLabel: 'Carregando...',
   *    titlePopover: 'Opa!',
   *    yourUserWillBeBlocked: 'sem sucesso seu usuário será bloqueado e você fica 24 horas sem poder acessar :('
   *  };
   * ```
   *
   * Ou passando apenas as literais que deseja customizar:
   *
   * ```
   *  const customLiterals: PoPageLoginLiterals = {
   *    loginPlaceholder: 'Insira seu usuário de acesso',
   *    passwordPlaceholder: 'Insira sua senha de acesso',
   *    submitLabel: 'Acessar sistema'
   *  };
   * ```
   *
   * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
   *
   * ```
   * <po-page-login
   *   [p-literals]="customLiterals">
   * </po-page-login>
   * ```
   *
   *  > O objeto padrão de literais será traduzido de acordo com o idioma do browser (pt, en, es).
   *  > É também possível alternar o objeto padrão de literais através do seletor de idiomas localizado na parte inferior do template,
   * nesse caso, há também a opção do idioma russo.
   */
  set literals(value) {
    this._literals = value;
  }
  get literals() {
    return this._literals;
  }
  /**
   * @optional
   *
   * @description
   *
   * Habilita um estado de carregamento ao botão de *login*.
   *
   * > É necessário atribuir `true` à esta propriedade na função definida em `p-login-submit`.
   *
   * @default `false`
   */
  set loading(value) {
    this._loading = convertToBoolean(value);
  }
  get loading() {
    return this._loading;
  }
  /**
   * @optional
   *
   * @description
   *
   * Valor do modelo do campo de login.
   */
  set login(value) {
    this._login = value;
    if (!this.authenticationUrl) {
      this.loginChange.emit(this._login);
    }
  }
  get login() {
    return this._login;
  }
  /**
   * @optional
   *
   * @description
   *
   * Atributo que recebe uma lista de erros e exibe abaixo do campo de login.
   */
  set loginErrors(value) {
    this._loginErrors = value || [];
    this.setLoginErrors(this._loginErrors);
  }
  get loginErrors() {
    return this._loginErrors;
  }
  /**
   * @optional
   *
   * @description
   *
   * Atributo que recebe uma lista de erros e exibe abaixo do campo de password.
   */
  set passwordErrors(value) {
    this._passwordErrors = value || [];
    this.setPasswordErrors(this._passwordErrors);
  }
  get passwordErrors() {
    return this._passwordErrors;
  }
  /**
   * @optional
   *
   * @description
   *
   * Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.
   *
   * A propriedade aceita os seguintes tipos:
   *
   * - **String**: informe uma url externa ou uma rota válida;
   * - **Function**: pode-se customizar a ação. Para esta possilidade basta atribuir:
   *   ```
   *   <po-page-login>
   *     [recovery]="this.myRecovery.bind(this)">
   *   </po-page-login>
   *   ```
   *
   * - **PoPageLoginRecovery**: cria-se vínculo automático com o template **po-modal-password-recovery**.
   *   O objeto deve conter a **url** para requisição dos recursos e pode-se definir o **tipo** de modal para recuperação de senha,
   *   **email** para contato e **máscara** do campo de telefone.
   */
  set recovery(value) {
    this._recovery = value;
  }
  get recovery() {
    return this._recovery;
  }
  /**
   * @optional
   *
   * @description
   *
   * Caso a aplicação tenha um link para novos cadastros, informe uma url externa ou uma rota válida, dessa
   * forma será exibido um link abaixo do formulário de login para os usuários da aplicação.
   *
   * Exemplos de valores válidos:
   * - **local**: `/home`
   * - **url externa**: `https://po-ui.io`
   *
   * > Veja a propriedade `p-literals` para customizar a literal `registerUrl`.
   */
  set registerUrl(value) {
    this._registerUrl = isTypeof(value, "string") ? value : void 0;
  }
  get registerUrl() {
    return this._registerUrl;
  }
  /**
   * @optional
   *
   * @description
   *
   * Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `Basic` e `Bearer`.
   *
   * > Caso o tipo definido seja `Basic`, o componente fará uma requisição `POST` contendo:
   *
   * ```
   * headers {
   *  Authorization: Basic base64(login:password)
   * }
   *
   * body {
   *  rememberUser: rememberUser
   * }
   * ```
   *
   * > Caso o tipo definido seja `Bearer`, o componente fará uma requisição `POST` contendo:
   *
   * ```
   * body {
   *  login: login,
   *  password: base64(password),
   *  rememberUser: rememberUser
   * }
   * ```
   *
   * @default `PoPageLoginAuthenticationType.Basic`
   */
  set authenticationType(value) {
    this._authenticationType = Object.values(PoPageLoginAuthenticationType).includes(value) ? value : PoPageLoginAuthenticationType.Basic;
  }
  get authenticationType() {
    return this._authenticationType;
  }
  /**
   * @optional
   *
   * @description
   *
   * Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `p-login-submit` será ignorado e o
   * componente adquirirá automatização para o processo de autenticação.
   *
   * ### Processos
   * Ao digitar um valor válido no campo de login/password e pressionar **Enter**, o componente fará uma requisição `POST`
   * na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário:
   *
   * ```
   * headers {
   *  Authorization: Basic base64(login:password)
   * }
   *
   * body {
   *  rememberUser: rememberUser
   * }
   * ```
   *
   * Em caso de **sucesso**, o objeto de retorno é armazenado no `sessionStorage` e o usuário é redirecionado para a página inicial da
   * aplicação `/`.
   *
   * ```
   * 200:
   *  {
   *    user: user
   *  }
   * ```
   *
   * Em caso de **erro** na autenticação, espera-se o seguinte retorno:
   *
   * ```
   * 400/401
   *  {
   *    code: 400/401,
   *    message: message,
   *    detailedMessage: detailedMessage,
   *    helpUrl?: helpUrl
   *  }
   * ```
   *
   * > Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `p-exceeded-attempts-warning`,
   * assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `p-login-errors` e
   * `p-password-errors` conforme retorno abaixo:
   *
   * ```
   * 400
   *  {
   *    code: 400/401,
   *    message: message,
   *    detailedMessage: detailedMessage,
   *    helpUrl?: helpUrl,
   *    maxAttemptsRemaining?: maxAttemptsRemaining,
   *    loginWarnings?: [loginWarnings],
   *    passwordWarnings?: [passwordWarnings]
   *  }
   * ```
   *
   * > Caso o valor atribuído para `p-exceeded-attempts-warning` seja igual a 0(zero), poderá ser passado um valor para o
   * atributo `p-blocked-url` e o usuário será redirecionado para uma tela de bloqueio.
   *
   * *Processo finalizado.*
   *
   * _______________
   *
   * #### Praticidade
   * As informações do serviço de autenticação também podem ser transmitidas diretamente pelas configuraçãos de rota e, desta maneira,
   * dispensa-se qualquer menção e/ou importação do componente `po-page-login` no restante da aplicação. O exemplo abaixo exemplifica
   * a forma dinâmica com a qual o template de tela de login pode ser gerado ao navegar para rota `/login`, e também como ele se comunica
   * com o serviço para efetuação do processo de autenticação do usuário e solicitação de nova senha.
   * Basta definir nas configurações de rota:
   *
   *
   * ```
   *   import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';
   *
   *   ...
   *   const routes: Routes = [
   *     {
   *       path: 'login', component: PoPageLoginComponent, data: {
   *         serviceApi: 'https://po-ui.io/sample/api/users/authentication',
   *         environment: 'development',
   *         recovery: {
   *           url: 'https://po-ui.io/sample/api/users',
   *           type: PoModalPasswordRecoveryType.All,
   *           contactMail: 'dev.po@po-ui.com',
   *           phoneMask: '9-999-999-9999'
   *         },
   *         registerUrl: '/new-password',
   *         authenticationType: PoPageLoginAthenticationType.Basic
   *       }
   *     }
   *     ...
   *   ];
   *
   *   @NgModule({
   *     imports: [RouterModule.forRoot(routes)],
   *     exports: [RouterModule]
   *   })
   *   export class AppRoutingModule { }
   * ```
   *
   *
   * O metadado `serviceApi` deve ser a **url** para requisição dos recursos de autenticação, o `environment` alimenta a propriedade
   * `p-environment`, `recovery` é a interface `PoPageLoginRecovery` responsável pelas especificações contidas na modal de recuperação de
   * senha, `registerUrl` alimenta a propriedade `p-register-url` e `authenticationType` que define a propriedade `p-authentication-type`.
   *
   * > É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.
   *
   */
  set authenticationUrl(value) {
    this._authenticationUrl = isTypeof(value, "string") ? value : void 0;
  }
  get authenticationUrl() {
    return this._authenticationUrl;
  }
  /**
   * @optional
   *
   * @description
   *
   * Caso o valor atribuído para `p-exceeded-attempts-warning` seja igual a 0(zero) e a aplicação tenha um link de bloqueio de usuário,
   * informe uma url externa ou uma rota válida, dessa forma em caso de bloqueio o usuário será redirecionado.
   */
  set blockedUrl(value) {
    this._blockedUrl = isTypeof(value, "string") ? value : void 0;
  }
  get blockedUrl() {
    return this._blockedUrl;
  }
  /**
   * @optional
   *
   * @description
   *
   * Exibe um botão para suporte.
   *
   * A propriedade aceita os seguintes tipos:
   *
   * - **String**: URL externa ou uma rota válida;
   * - **Function**: Função a ser disparada ao clicar no botão de suporte;
   *   ```
   *   <po-page-login>
   *     [p-support]="this.mySupport.bind(this)">
   *   </po-page-login>
   *   ```
   *
   */
  set support(value) {
    this._support = value;
  }
  get support() {
    return this._support;
  }
  /**
   * @optional
   *
   * @description
   *
   * Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.
   *
   * Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.
   *
   * Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.
   *
   * Caso seja passado um array vazio, a página terá o idioma configurado no `i18n` e não mostrará o combo de seleção.
   *
   * > Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `p-literals`.
   *
   *
   */
  set languagesList(languagesList) {
    if (languagesList) {
      if (languagesList.length) {
        this._languagesList = languagesList;
      } else {
        this._languagesList = poLanguageDefault.filter((language) => language.language === this.language);
      }
    }
  }
  get languagesList() {
    if (this._languagesList) {
      return this._languagesList;
    }
    return poLanguageDefault;
  }
  get showLanguage() {
    return this.languagesList.length > 1;
  }
  get language() {
    return this.selectedLanguage || getShortBrowserLanguage();
  }
  get pageLoginLiterals() {
    const loginHintWithContactEmail = this.contactEmail ? this.concatenateLoginHintWithContactEmail(this.contactEmail) : void 0;
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, poPageLoginLiteralsDefault[poLocaleDefault]), poPageLoginLiteralsDefault[this.language]), loginHintWithContactEmail), this.literals);
  }
  constructor(loginService, router, poLanguageService) {
    this.loginService = loginService;
    this.router = router;
    this.poLanguageService = poLanguageService;
    this.selectedLanguage = this.poLanguageService.getShortLanguage();
  }
  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
  closePopover() {
    this.showExceededAttemptsWarning = false;
  }
  onLoginSubmit() {
    const loginForm = {
      login: this.login,
      password: this.password,
      rememberUser: this.rememberUser
    };
    if (this.customField) {
      loginForm[this.customFieldObject.property] = this.customFieldObject.value;
    }
    if (this.authenticationUrl) {
      this.loading = true;
      this.loginSubscription = this.loginService.onLogin(this.authenticationUrl, this.authenticationType, loginForm).subscribe((data) => {
        this.setValuesToProperties();
        sessionStorage.setItem("PO_USER_LOGIN", JSON.stringify(data));
        this.openInternalLink("/");
        this.loading = false;
      }, (error) => {
        if (error.error.code === "400" || error.error.code === "401") {
          this.setValuesToProperties(error);
          this.redirectBlockedUrl(this.exceededAttemptsWarning, this.blockedUrl);
        }
        this.loading = false;
      });
    } else {
      this.loginSubmit.emit(loginForm);
      this.showExceededAttemptsWarning = this.exceededAttemptsWarning > 0;
    }
  }
  getDefaultCustomFieldObject(property) {
    return {
      property
    };
  }
  openExternalLink(url) {
    window.open(url, "_blank");
  }
  openInternalLink(url) {
    this.router.navigate([url]);
  }
  redirectBlockedUrl(attempts, blockedUrl) {
    if (attempts === 0 && blockedUrl) {
      this.showExceededAttemptsWarning = false;
      isExternalLink(blockedUrl) ? this.openExternalLink(blockedUrl) : this.openInternalLink(blockedUrl);
    }
  }
  setValuesToProperties(result) {
    if (result) {
      this.exceededAttemptsWarning = result.error.maxAttemptsRemaining;
      this.loginErrors = result.error.loginWarnings;
      this.passwordErrors = result.error.passwordWarnings;
      this.blockedUrl = result.error.blockedUrl;
    } else {
      this.exceededAttemptsWarning = 0;
      this.loginErrors = [];
      this.passwordErrors = [];
      this.blockedUrl = "";
    }
  }
  static \u0275fac = function PoPageLoginBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageLoginBaseComponent)(\u0275\u0275directiveInject(PoPageLoginService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PoLanguageService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PoPageLoginBaseComponent,
    hostVars: 1,
    hostBindings: function PoPageLoginBaseComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("p-components-size", ctx.componentsSize);
      }
    },
    inputs: {
      background: [0, "p-background", "background"],
      logo: [0, "p-logo", "logo"],
      loginPattern: [0, "p-login-pattern", "loginPattern"],
      passwordPattern: [0, "p-password-pattern", "passwordPattern"],
      secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
      noAutocompleteLogin: [0, "p-no-autocomplete-login", "noAutocompleteLogin"],
      noAutocompletePassword: [0, "p-no-autocomplete-password", "noAutocompletePassword"],
      hideLabelStatus: [2, "p-hide-label-status", "hideLabelStatus", convertToBoolean],
      hidePasswordPeek: [0, "p-hide-password-peek", "hidePasswordPeek"],
      componentsSize: [0, "p-components-size", "componentsSize"],
      customField: [0, "p-custom-field", "customField"],
      contactEmail: [0, "p-contact-email", "contactEmail"],
      productName: [0, "p-product-name", "productName"],
      environment: [0, "p-environment", "environment"],
      exceededAttemptsWarning: [0, "p-exceeded-attempts-warning", "exceededAttemptsWarning"],
      hideRememberUser: [0, "p-hide-remember-user", "hideRememberUser"],
      literals: [0, "p-literals", "literals"],
      loading: [0, "p-loading", "loading"],
      login: [0, "p-login", "login"],
      loginErrors: [0, "p-login-errors", "loginErrors"],
      passwordErrors: [0, "p-password-errors", "passwordErrors"],
      recovery: [0, "p-recovery", "recovery"],
      registerUrl: [0, "p-register-url", "registerUrl"],
      authenticationType: [0, "p-authentication-type", "authenticationType"],
      authenticationUrl: [0, "p-authentication-url", "authenticationUrl"],
      blockedUrl: [0, "p-blocked-url", "blockedUrl"],
      support: [0, "p-support", "support"],
      languagesList: [0, "p-languages", "languagesList"]
    },
    outputs: {
      loginChange: "p-login-change",
      loginSubmit: "p-login-submit",
      passwordChange: "p-password-change",
      languageChange: "p-language-change"
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginBaseComponent, [{
    type: Directive
  }], () => [{
    type: PoPageLoginService
  }, {
    type: Router
  }, {
    type: PoLanguageService
  }], {
    background: [{
      type: Input,
      args: ["p-background"]
    }],
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    loginPattern: [{
      type: Input,
      args: ["p-login-pattern"]
    }],
    passwordPattern: [{
      type: Input,
      args: ["p-password-pattern"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    loginChange: [{
      type: Output,
      args: ["p-login-change"]
    }],
    loginSubmit: [{
      type: Output,
      args: ["p-login-submit"]
    }],
    passwordChange: [{
      type: Output,
      args: ["p-password-change"]
    }],
    languageChange: [{
      type: Output,
      args: ["p-language-change"]
    }],
    noAutocompleteLogin: [{
      type: Input,
      args: ["p-no-autocomplete-login"]
    }],
    noAutocompletePassword: [{
      type: Input,
      args: ["p-no-autocomplete-password"]
    }],
    hideLabelStatus: [{
      type: Input,
      args: [{
        alias: "p-hide-label-status",
        transform: convertToBoolean
      }]
    }],
    hidePasswordPeek: [{
      type: Input,
      args: ["p-hide-password-peek"]
    }],
    componentsSize: [{
      type: HostBinding,
      args: ["attr.p-components-size"]
    }, {
      type: Input,
      args: ["p-components-size"]
    }],
    customField: [{
      type: Input,
      args: ["p-custom-field"]
    }],
    contactEmail: [{
      type: Input,
      args: ["p-contact-email"]
    }],
    productName: [{
      type: Input,
      args: ["p-product-name"]
    }],
    environment: [{
      type: Input,
      args: ["p-environment"]
    }],
    exceededAttemptsWarning: [{
      type: Input,
      args: ["p-exceeded-attempts-warning"]
    }],
    hideRememberUser: [{
      type: Input,
      args: ["p-hide-remember-user"]
    }],
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    loading: [{
      type: Input,
      args: ["p-loading"]
    }],
    login: [{
      type: Input,
      args: ["p-login"]
    }],
    loginErrors: [{
      type: Input,
      args: ["p-login-errors"]
    }],
    passwordErrors: [{
      type: Input,
      args: ["p-password-errors"]
    }],
    recovery: [{
      type: Input,
      args: ["p-recovery"]
    }],
    registerUrl: [{
      type: Input,
      args: ["p-register-url"]
    }],
    authenticationType: [{
      type: Input,
      args: ["p-authentication-type"]
    }],
    authenticationUrl: [{
      type: Input,
      args: ["p-authentication-url"]
    }],
    blockedUrl: [{
      type: Input,
      args: ["p-blocked-url"]
    }],
    support: [{
      type: Input,
      args: ["p-support"]
    }],
    languagesList: [{
      type: Input,
      args: ["p-languages"]
    }]
  });
})();
var PoPageLoginPopoverComponent = class _PoPageLoginPopoverComponent {
  literals;
  /** exibe o link de 'esqueci minha senha' e verifica se o valor é um link interno ou externo */
  set recovery(value) {
    this._recovery = value;
    if (isTypeof(value, "string")) {
      this.recoveryType = isExternalLink(value) ? "externalLink" : "internalLink";
    }
  }
  get recovery() {
    return this._recovery;
  }
  /** define se a mensagem deverá ser exibida caso seja maior que 0(zero) */
  remainingAttempts;
  /** se 'p-recovery' for do tipo Function ou PoPageLoginRecovery, emite para o método 'openUrl' do componente 'po-page-login' */
  forgotPassword = new EventEmitter();
  recoveryType;
  _recovery;
  onForgotPasswordClick(recovery) {
    this.forgotPassword.emit(recovery);
  }
  static \u0275fac = function PoPageLoginPopoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageLoginPopoverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageLoginPopoverComponent,
    selectors: [["po-page-login-popover"]],
    inputs: {
      literals: [0, "p-literals", "literals"],
      recovery: [0, "p-recovery", "recovery"],
      remainingAttempts: [0, "p-remaining-attempts", "remainingAttempts"]
    },
    outputs: {
      forgotPassword: "p-forgot-password"
    },
    standalone: false,
    decls: 18,
    vars: 10,
    consts: [[1, "po-page-login-popover-container"], [1, "po-page-login-popover"], [1, "po-page-login-popover-arrow"], [1, "po-page-login-popover-content"], [1, "po-font-text-bold", "po-page-login-popover-title"], [1, "po-font-text"], [1, "po-font-text-bold", "po-page-login-popover-attempts"], [1, "po-font-text-bold", "po-mt-1", "po-page-login-popover-link-container"], [1, "po-page-login-popover-link", 3, "routerLink"], ["target", "_blank", 1, "po-page-login-popover-link", 3, "href"], [1, "po-page-login-popover-link"], [1, "po-page-login-popover-link", 3, "click"]],
    template: function PoPageLoginPopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementStart(10, "span", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "poI18n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "br");
        \u0275\u0275elementStart(15, "p", 5);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, PoPageLoginPopoverComponent_Conditional_17_Template, 4, 3, "div", 7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.literals == null ? null : ctx.literals.titlePopover, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.literals == null ? null : ctx.literals.forgotYourPassword, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.literals == null ? null : ctx.literals.ifYouTryHarder, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, ctx.literals == null ? null : ctx.literals.attempts, ctx.remainingAttempts), " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.literals == null ? null : ctx.literals.yourUserWillBeBlocked, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.literals == null ? null : ctx.literals.createANewPasswordNow, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.recovery ? 17 : -1);
      }
    },
    dependencies: [RouterLink, PoI18nPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginPopoverComponent, [{
    type: Component,
    args: [{
      selector: "po-page-login-popover",
      standalone: false,
      template: `<div class="po-page-login-popover-container">
  <div class="po-page-login-popover">
    <div class="po-page-login-popover-arrow"></div>
    <div class="po-page-login-popover-content">
      <p class="po-font-text-bold po-page-login-popover-title">
        {{ literals?.titlePopover }}
      </p>
      <p class="po-font-text">
        {{ literals?.forgotYourPassword }}
      </p>
      <p class="po-font-text">
        {{ literals?.ifYouTryHarder }}
        <span class="po-font-text-bold po-page-login-popover-attempts">
          {{ literals?.attempts | poI18n: remainingAttempts }} </span
        >{{ literals?.yourUserWillBeBlocked }}
      </p>
      <br />
      <p class="po-font-text">
        {{ literals?.createANewPasswordNow }}
      </p>
      @if (recovery) {
        <div class="po-font-text-bold po-mt-1 po-page-login-popover-link-container">
          @if (recoveryType === 'internalLink') {
            <a class="po-page-login-popover-link" [routerLink]="recovery">
              {{ literals?.iForgotMyPassword }}
            </a>
          }
          @if (recoveryType === 'externalLink') {
            <a class="po-page-login-popover-link" [href]="recovery" target="_blank">
              {{ literals?.iForgotMyPassword }}
            </a>
          }
          @if (!recoveryType) {
            <a class="po-page-login-popover-link" (click)="onForgotPasswordClick(recovery)">
              {{ literals?.iForgotMyPassword }}
            </a>
          }
        </div>
      }
    </div>
  </div>
</div>
`
    }]
  }], null, {
    literals: [{
      type: Input,
      args: ["p-literals"]
    }],
    recovery: [{
      type: Input,
      args: ["p-recovery"]
    }],
    remainingAttempts: [{
      type: Input,
      args: ["p-remaining-attempts"]
    }],
    forgotPassword: [{
      type: Output,
      args: ["p-forgot-password"]
    }]
  });
})();
var PoPageLoginComponent = class _PoPageLoginComponent extends PoPageLoginBaseComponent {
  changeDetector = inject(ChangeDetectorRef);
  activatedRoute = inject(ActivatedRoute);
  poComponentInjector = inject(PoComponentInjectorService);
  loginForm;
  pageLogin;
  initialSelectLanguage;
  componentRef = null;
  differ;
  customPasswordError = {
    custom: false
  };
  constructor() {
    const differs = inject(IterableDiffers);
    const loginService = inject(PoPageLoginService);
    const router = inject(Router);
    const poLanguageService = inject(PoLanguageService);
    super(loginService, router, poLanguageService);
    this.differ = differs.find([]).create(null);
  }
  ngAfterViewChecked() {
    if (this.differ) {
      this.validateArrayChanges(this.differ, [{
        array: this.loginErrors,
        callback: this.generateLoginError.bind(this)
      }, {
        array: this.passwordErrors,
        callback: this.generatePasswordError.bind(this)
      }]);
    }
  }
  ngOnInit() {
    this.checkingForRouteMetadata(this.activatedRoute.snapshot.data);
    this.selectedLanguage = this.initializeLanguage();
    this.initialSelectLanguage = this.selectedLanguage;
  }
  activateSupport() {
    switch (typeof this.support) {
      case "string": {
        this.setUrlRedirect(this.support);
        break;
      }
      case "function": {
        this.support();
        break;
      }
    }
  }
  changeLoginModel() {
    if (this.authenticationUrl) {
      this.loginErrors = [];
    } else {
      this.setLoginErrors(this.loginErrors);
      this.loginChange.emit(this.login);
    }
  }
  changePasswordModel() {
    if (this.authenticationUrl) {
      this.passwordErrors = [];
    } else {
      this.setPasswordErrors(this.passwordErrors);
      this.passwordChange.emit(this.password);
    }
  }
  onSelectedLanguage(language) {
    this.languageChange.emit(this.languagesList.find((languageItem) => languageItem.language === language));
    this.selectedLanguage = language;
  }
  openUrl(recovery) {
    switch (typeof recovery) {
      case "string": {
        this.setUrlRedirect(recovery);
        break;
      }
      case "function": {
        recovery();
        break;
      }
      case "object": {
        this.createModalPasswordRecoveryComponent(recovery);
        break;
      }
    }
  }
  concatenateLoginHintWithContactEmail(contactEmail) {
    const defaultLoginHintLiteral = poPageLoginLiteralsDefault[this.language].loginHint;
    const prepositionLiteral = poPageLoginLiteralIn[this.language];
    return this.concatenateLiteral(contactEmail, "loginHint", defaultLoginHintLiteral, prepositionLiteral);
  }
  setLoginErrors(errors) {
    const control = this.loginForm.form.controls["login"];
    this.setControlErrors("allLoginErrors", control, errors, this.pageLoginLiterals.loginErrorPattern);
  }
  setPasswordErrors(errors) {
    const control = this.loginForm.form.controls["password"];
    this.setControlErrors("allPasswordErrors", control, errors, this.pageLoginLiterals.passwordErrorPattern);
  }
  checkingForMetadataProperty(object, property) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      return object[property];
    }
  }
  checkingForRouteMetadata(data) {
    if (Object.keys(data).length !== 0) {
      this.authenticationUrl = this.checkingForMetadataProperty(data, "serviceApi") || this.authenticationUrl;
      this.authenticationType = this.checkingForMetadataProperty(data, "authenticationType") || this.authenticationType;
      this.environment = this.checkingForMetadataProperty(data, "environment") || this.environment;
      this.recovery = this.checkingForMetadataProperty(data, "recovery") || this.recovery;
      this.registerUrl = this.checkingForMetadataProperty(data, "registerUrl") || this.registerUrl;
    }
  }
  concatenate(defaultLiteral, prefixLiteral, value) {
    return `${defaultLiteral} ${prefixLiteral} ${value}`;
  }
  concatenateLiteral(value, literal, defaultLiteral, prepositionLiteral) {
    return {
      [literal]: this.concatenate(defaultLiteral, prepositionLiteral, value)
    };
  }
  createModalPasswordRecoveryComponent(poPageLoginRecovery) {
    if (this.componentRef) {
      this.poComponentInjector.destroyComponentInApplication(this.componentRef);
    }
    this.componentRef = this.poComponentInjector.createComponentInApplication(PoModalPasswordRecoveryComponent);
    this.componentRef.instance.urlRecovery = poPageLoginRecovery.url;
    this.componentRef.instance.contactEmail = poPageLoginRecovery.contactMail;
    this.componentRef.instance.phoneMask = poPageLoginRecovery.phoneMask;
    this.componentRef.instance.type = poPageLoginRecovery.type || PoModalPasswordRecoveryType.Email;
    this.componentRef.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.componentRef.instance.open();
    });
  }
  generateLoginError() {
    if (this.loginErrors && this.loginErrors.length) {
      this.setLoginErrors(this.loginErrors);
    } else {
      const control = this.loginForm.form.controls["login"];
      if (control) {
        this.resetControl(control);
      }
    }
  }
  generatePasswordError() {
    if (this.passwordErrors && this.passwordErrors.length) {
      this.setPasswordErrors(this.passwordErrors);
    } else {
      const control = this.loginForm.form.controls["password"];
      if (control) {
        this.resetControl(control);
      }
    }
  }
  resetControl(control) {
    control.markAsPristine();
    control.markAsUntouched();
    control.updateValueAndValidity();
  }
  setControlErrors(allErrors, control, errors, patternError) {
    if (control) {
      this[allErrors] = control.hasError("pattern") ? [...errors, ...[patternError]] : [...errors];
      if (errors && errors.length && (control.valid || control.pristine)) {
        control.markAsTouched();
        control.markAsDirty();
        control.setErrors(this.customPasswordError);
      }
    }
  }
  setUrlRedirect(url) {
    isExternalLink(url) ? window.open(url, "_blank") : this.router.navigate([url]);
  }
  validateArrayChanges(differ, array) {
    array.forEach((element) => {
      const changes = differ.diff(element.array);
      if (changes) {
        element.callback();
        this.changeDetector.detectChanges();
      }
    });
  }
  initializeLanguage() {
    const language = this.languagesList.find((languageItem) => languageItem.language === this.language);
    return language?.language || this.languagesList[0].language;
  }
  static \u0275fac = function PoPageLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageLoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PoPageLoginComponent,
    selectors: [["po-page-login"]],
    viewQuery: function PoPageLoginComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c20, 7, NgForm);
        \u0275\u0275viewQuery(_c21, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loginForm = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pageLogin = _t.first);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 38,
    vars: 44,
    consts: [["pageLogin", ""], ["loginForm", "ngForm"], [1, "po-page-login-support", 3, "click", "hidden"], ["p-icon", "ICON_HELP"], [3, "p-selected-language", "p-components-size", "p-show-select-language", "p-languages", "p-initial-language", "p-background", "p-highlight-info", "p-logo", "p-secondary-logo"], [1, "po-page-login-header"], [1, "po-page-login-header-product-name"], [1, "po-page-login-header-product-environment", "po-mb-md-4", "po-mb-sm-1"], ["p-type", "warning", 3, "p-value"], [1, "po-page-login-header-welcome", "po-mb-md-4", "po-mb-sm-2"], [1, "po-page-login-form"], [1, "po-row"], [1, "po-lg-12"], [1, "po-page-login-hint", "po-page-login-info-container"], ["name", "login", "p-auto-focus", "", "p-required", "", 1, "po-page-login-info-field", 3, "ngModelChange", "click", "keyup.enter", "p-change-model", "ngModel", "p-label", "p-no-autocomplete", "p-pattern", "p-placeholder", "p-size"], [1, "po-page-login-info-icon-container", 3, "po-page-login-info-icon-container-dynamic"], [1, "po-field-container-bottom", "po-field-container-error-container"], [1, "po-field-container-bottom-text-error", "po-field-container-error-item"], [1, "po-page-login-password-container"], ["name", "password", "p-required", "", 1, "po-page-login-field-size", "po-page-login-password-item", 3, "ngModelChange", "click", "keyup.enter", "p-change-model", "ngModel", "p-hide-password-peek", "p-label", "p-no-autocomplete", "p-pattern", "p-placeholder", "p-size"], [1, "po-page-login-password-item", "po-page-login-password-popover-container"], ["name", "customFieldInput", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "po-page-login-field-size-dynamic", "ngModel", "p-error-pattern", "p-pattern", "p-placeholder", "p-size"], ["name", "customFieldCombo", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "po-page-login-field-size-dynamic", "ngModel", "p-field-value", "p-filter-service", "p-placeholder", "p-size"], ["name", "customFieldSelect", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "po-page-login-field-size-dynamic", "ngModel", "p-placeholder", "p-options", "p-size"], ["p-kind", "primary", 1, "po-lg-12", "po-page-login-button", "po-page-login-field-size", 3, "p-click", "p-disabled", "p-label", "p-loading", "p-size"], [1, "po-page-login-recovery-link"], [1, "po-page-login-register-link"], [1, "po-page-login-info-icon-container"], ["p-icon", "ICON_INFO po-field-icon", "p-tooltip-position", "right", 3, "p-tooltip"], ["p-icon", "ICON_EXCLAMATION"], [1, "po-field-error-message"], [3, "p-literals", "p-recovery", "p-remaining-attempts"], [3, "p-forgot-password", "p-literals", "p-recovery", "p-remaining-attempts"], ["name", "customFieldInput", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModelChange", "keyup.enter", "ngModel", "p-error-pattern", "p-pattern", "p-placeholder", "p-size"], ["name", "customFieldCombo", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModelChange", "ngModel", "p-field-value", "p-filter-service", "p-placeholder", "p-size"], ["name", "customFieldSelect", "p-required", "", 1, "po-page-login-field-size", "po-lg-12", 3, "ngModelChange", "ngModel", "p-placeholder", "p-options", "p-size"], ["name", "rememberUser", "p-label-position", "1", 1, "po-page-login-info-field", "po-lg-7", "po-offset-lg-5", "po-offset-xl-5", 3, "ngModelChange", "keyup.enter", "ngModel", "p-label-off", "p-label-on", "p-size", "p-hide-label-status"], [1, "po-page-login-info-icon-container", "po-page-login-info-icon-remember-user", 3, "po-page-login-info-icon-container-dynamic"], [1, "po-page-login-info-icon-container", "po-page-login-info-icon-remember-user"], [1, "po-font-text-large-bold", 3, "click"]],
    template: function PoPageLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "button", 2);
        \u0275\u0275listener("click", function PoPageLoginComponent_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.activateSupport());
        });
        \u0275\u0275element(1, "po-icon", 3);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "po-page-background", 4, 0);
        \u0275\u0275listener("p-selected-language", function PoPageLoginComponent_Template_po_page_background_p_selected_language_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSelectedLanguage($event));
        });
        \u0275\u0275elementStart(5, "header", 5)(6, "div", 6)(7, "h1");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275template(10, PoPageLoginComponent_Conditional_10_Template, 1, 1, "po-tag", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "form", 10, 1)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "po-login", 14);
        \u0275\u0275twoWayListener("ngModelChange", function PoPageLoginComponent_Template_po_login_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.login, $event) || (ctx.login = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("click", function PoPageLoginComponent_Template_po_login_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closePopover());
        })("keyup.enter", function PoPageLoginComponent_Template_po_login_keyup_enter_18_listener() {
          \u0275\u0275restoreView(_r1);
          const loginForm_r3 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(loginForm_r3.valid && ctx.onLoginSubmit());
        })("p-change-model", function PoPageLoginComponent_Template_po_login_p_change_model_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeLoginModel());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, PoPageLoginComponent_Conditional_19_Template, 2, 3, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 16);
        \u0275\u0275repeaterCreate(21, PoPageLoginComponent_For_22_Template, 4, 1, "div", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 12)(24, "div", 18)(25, "po-password", 19);
        \u0275\u0275twoWayListener("ngModelChange", function PoPageLoginComponent_Template_po_password_ngModelChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("click", function PoPageLoginComponent_Template_po_password_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closePopover());
        })("keyup.enter", function PoPageLoginComponent_Template_po_password_keyup_enter_25_listener() {
          \u0275\u0275restoreView(_r1);
          const loginForm_r3 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(loginForm_r3.valid && ctx.onLoginSubmit());
        })("p-change-model", function PoPageLoginComponent_Template_po_password_p_change_model_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changePasswordModel());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, PoPageLoginComponent_Conditional_26_Template, 2, 1, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 16);
        \u0275\u0275repeaterCreate(28, PoPageLoginComponent_For_29_Template, 4, 1, "div", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, PoPageLoginComponent_Conditional_30_Template, 1, 7, "po-input", 21)(31, PoPageLoginComponent_Conditional_31_Template, 1, 7, "po-combo", 22)(32, PoPageLoginComponent_Conditional_32_Template, 1, 6, "po-select", 23);
        \u0275\u0275elementStart(33, "div", 12);
        \u0275\u0275template(34, PoPageLoginComponent_Conditional_34_Template, 3, 6, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "po-button", 24);
        \u0275\u0275listener("p-click", function PoPageLoginComponent_Template_po_button_p_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onLoginSubmit());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, PoPageLoginComponent_Conditional_36_Template, 3, 1, "div", 25)(37, PoPageLoginComponent_Conditional_37_Template, 3, 1, "div", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const loginForm_r3 = \u0275\u0275reference(14);
        \u0275\u0275property("hidden", !ctx.support);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.pageLoginLiterals == null ? null : ctx.pageLoginLiterals.support, "\n");
        \u0275\u0275advance();
        \u0275\u0275property("p-components-size", ctx.componentsSize)("p-show-select-language", ctx.showLanguage)("p-languages", ctx.languagesList)("p-initial-language", ctx.initialSelectLanguage)("p-background", ctx.background)("p-highlight-info", ctx.pageLoginLiterals.highlightInfo)("p-logo", ctx.logo)("p-secondary-logo", ctx.secondaryLogo);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.productName);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.environment ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.pageLoginLiterals.welcome);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("po-page-login-info-field-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        \u0275\u0275twoWayProperty("ngModel", ctx.login);
        \u0275\u0275property("p-label", ctx.pageLoginLiterals.loginLabel)("p-no-autocomplete", ctx.noAutocompleteLogin)("p-pattern", ctx.loginPattern)("p-placeholder", ctx.pageLoginLiterals.loginPlaceholder)("p-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.pageLoginLiterals.loginHint || ctx.pageLoginLiterals.rememberUserHint ? 19 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.allLoginErrors);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("po-page-login-field-size-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("p-hide-password-peek", ctx.hidePasswordPeek)("p-label", ctx.pageLoginLiterals.passwordLabel)("p-no-autocomplete", ctx.noAutocompletePassword)("p-pattern", ctx.passwordPattern)("p-placeholder", ctx.pageLoginLiterals.passwordPlaceholder)("p-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.pageLoginLiterals.loginHint || ctx.pageLoginLiterals.rememberUserHint ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.allPasswordErrors);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.customField && ctx.customFieldType === "input" ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.customField && ctx.customFieldType === "combo" ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.customField && ctx.customFieldType === "select" ? 32 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hideRememberUser ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("po-page-login-button-dynamic", !ctx.pageLoginLiterals.loginHint && !ctx.pageLoginLiterals.rememberUserHint);
        \u0275\u0275property("p-disabled", loginForm_r3.invalid)("p-label", ctx.loading ? ctx.pageLoginLiterals.submittedLabel : ctx.pageLoginLiterals.submitLabel)("p-loading", ctx.loading)("p-size", ctx.componentsSize);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.recovery ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.registerUrl ? 37 : -1);
      }
    },
    dependencies: [\u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, PoPageBackgroundComponent, PoButtonComponent, PoComboComponent, PoInputComponent, PoLoginComponent, PoPasswordComponent, PoSelectComponent, PoSwitchComponent, PoTagComponent, PoIconComponent, PoTooltipDirective, PoPageLoginPopoverComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginComponent, [{
    type: Component,
    args: [{
      selector: "po-page-login",
      standalone: false,
      template: `<button class="po-page-login-support" (click)="activateSupport()" [hidden]="!support">
  <po-icon p-icon="ICON_HELP"></po-icon>
  {{ pageLoginLiterals?.support }}
</button>

<po-page-background
  #pageLogin
  [p-components-size]="componentsSize"
  [p-show-select-language]="showLanguage"
  [p-languages]="languagesList"
  [p-initial-language]="initialSelectLanguage"
  [p-background]="background"
  [p-highlight-info]="pageLoginLiterals.highlightInfo"
  [p-logo]="logo"
  [p-secondary-logo]="secondaryLogo"
  (p-selected-language)="onSelectedLanguage($event)"
>
  <header class="po-page-login-header">
    <div class="po-page-login-header-product-name">
      <h1>{{ productName }}</h1>
    </div>

    <div class="po-page-login-header-product-environment po-mb-md-4 po-mb-sm-1">
      @if (environment) {
        <po-tag p-type="warning" [p-value]="environment"> </po-tag>
      }
    </div>
    <div class="po-page-login-header-welcome po-mb-md-4 po-mb-sm-2">{{ pageLoginLiterals.welcome }}</div>
  </header>

  <form #loginForm="ngForm" class="po-page-login-form">
    <div class="po-row">
      <div class="po-lg-12">
        <div class="po-page-login-hint po-page-login-info-container">
          <po-login
            class="po-page-login-info-field"
            [class.po-page-login-info-field-dynamic]="
              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint
            "
            name="login"
            [(ngModel)]="login"
            p-auto-focus
            p-required
            [p-label]="pageLoginLiterals.loginLabel"
            [p-no-autocomplete]="noAutocompleteLogin"
            [p-pattern]="loginPattern"
            [p-placeholder]="pageLoginLiterals.loginPlaceholder"
            [p-size]="componentsSize"
            (click)="closePopover()"
            (keyup.enter)="loginForm.valid && onLoginSubmit()"
            (p-change-model)="changeLoginModel()"
          >
          </po-login>

          @if (pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint) {
            <div
              class="po-page-login-info-icon-container"
              [class.po-page-login-info-icon-container-dynamic]="
                !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint
              "
            >
              @if (pageLoginLiterals.loginHint) {
                <po-icon
                  p-icon="ICON_INFO po-field-icon"
                  p-tooltip-position="right"
                  [p-tooltip]="pageLoginLiterals.loginHint"
                >
                </po-icon>
              }
            </div>
          }
        </div>

        <div class="po-field-container-bottom po-field-container-error-container">
          @for (error of allLoginErrors; track error) {
            <div class="po-field-container-bottom-text-error po-field-container-error-item">
              <po-icon p-icon="ICON_EXCLAMATION"></po-icon>
              <span class="po-field-error-message">{{ error }}</span>
            </div>
          }
        </div>
      </div>

      <div class="po-lg-12">
        <div class="po-page-login-password-container">
          <po-password
            class="po-page-login-field-size po-page-login-password-item"
            [class.po-page-login-field-size-dynamic]="
              !pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint
            "
            name="password"
            [(ngModel)]="password"
            p-required
            [p-hide-password-peek]="hidePasswordPeek"
            [p-label]="pageLoginLiterals.passwordLabel"
            [p-no-autocomplete]="noAutocompletePassword"
            [p-pattern]="passwordPattern"
            [p-placeholder]="pageLoginLiterals.passwordPlaceholder"
            [p-size]="componentsSize"
            (click)="closePopover()"
            (keyup.enter)="loginForm.valid && onLoginSubmit()"
            (p-change-model)="changePasswordModel()"
          >
          </po-password>
          @if (pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint) {
            <div class="po-page-login-password-item po-page-login-password-popover-container">
              @if (showExceededAttemptsWarning && exceededAttemptsWarning) {
                <po-page-login-popover
                  [p-literals]="pageLoginLiterals"
                  [p-recovery]="recovery"
                  [p-remaining-attempts]="exceededAttemptsWarning"
                  (p-forgot-password)="openUrl($event)"
                >
                </po-page-login-popover>
              }
            </div>
          }
        </div>
        <div class="po-field-container-bottom po-field-container-error-container">
          @for (error of allPasswordErrors; track error) {
            <div class="po-field-container-bottom-text-error po-field-container-error-item">
              <po-icon p-icon="ICON_EXCLAMATION"></po-icon>
              <span class="po-field-error-message">{{ error }}</span>
            </div>
          }
        </div>
      </div>

      @if (customField && customFieldType === 'input') {
        <po-input
          [class.po-page-login-field-size-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
          class="po-page-login-field-size po-lg-12"
          name="customFieldInput"
          [(ngModel)]="customFieldObject.value"
          p-required
          [p-error-pattern]="customFieldObject.errorPattern || pageLoginLiterals.customFieldErrorPattern"
          [p-pattern]="customFieldObject.pattern"
          [p-placeholder]="customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder"
          [p-size]="componentsSize"
          (keyup.enter)="loginForm.valid && onLoginSubmit()"
        >
        </po-input>
      }

      @if (customField && customFieldType === 'combo') {
        <po-combo
          [class.po-page-login-field-size-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
          class="po-page-login-field-size po-lg-12"
          name="customFieldCombo"
          [(ngModel)]="customFieldObject.value"
          p-required
          [p-field-value]="customFieldObject.fieldValue"
          [p-filter-service]="customFieldObject.url"
          [p-placeholder]="customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder"
          [p-size]="componentsSize"
        >
        </po-combo>
      }

      @if (customField && customFieldType === 'select') {
        <po-select
          [class.po-page-login-field-size-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
          class="po-page-login-field-size po-lg-12"
          name="customFieldSelect"
          [(ngModel)]="customFieldObject.value"
          p-required
          [p-placeholder]="customFieldObject.placeholder || pageLoginLiterals.customFieldPlaceholder"
          [p-options]="customFieldObject.options"
          [p-size]="componentsSize"
        >
        </po-select>
      }

      <div class="po-lg-12">
        @if (!hideRememberUser) {
          <div class="po-page-login-hint po-page-login-info-container">
            <po-switch
              class="po-page-login-info-field po-lg-7 po-offset-lg-5 po-offset-xl-5"
              name="rememberUser"
              [(ngModel)]="rememberUser"
              p-label-position="1"
              [p-label-off]="pageLoginLiterals.rememberUser"
              [p-label-on]="pageLoginLiterals.rememberUser"
              [p-size]="componentsSize"
              (keyup.enter)="loginForm.valid && onLoginSubmit()"
              [p-hide-label-status]="hideLabelStatus"
            >
            </po-switch>
            @if (pageLoginLiterals.loginHint || pageLoginLiterals.rememberUserHint) {
              <div
                class="po-page-login-info-icon-container po-page-login-info-icon-remember-user"
                [class.po-page-login-info-icon-container-dynamic]="!pageLoginLiterals.rememberUserHint"
              >
                @if (pageLoginLiterals.rememberUserHint) {
                  <po-icon
                    p-icon="ICON_INFO po-field-icon"
                    p-tooltip-position="right"
                    [p-tooltip]="pageLoginLiterals.rememberUserHint"
                  >
                  </po-icon>
                }
              </div>
            }
          </div>
        }
      </div>

      <po-button
        [class.po-page-login-button-dynamic]="!pageLoginLiterals.loginHint && !pageLoginLiterals.rememberUserHint"
        class="po-lg-12 po-page-login-button po-page-login-field-size"
        p-kind="primary"
        [p-disabled]="loginForm.invalid"
        [p-label]="loading ? pageLoginLiterals.submittedLabel : pageLoginLiterals.submitLabel"
        [p-loading]="loading"
        [p-size]="componentsSize"
        (p-click)="onLoginSubmit()"
      >
      </po-button>

      @if (recovery) {
        <div class="po-page-login-recovery-link">
          <a class="po-font-text-large-bold" (click)="openUrl(recovery)">{{ pageLoginLiterals.forgotPassword }}</a>
        </div>
      }

      @if (registerUrl) {
        <div class="po-page-login-register-link">
          <a class="po-font-text-large-bold" (click)="openUrl(registerUrl)">{{ pageLoginLiterals.registerUrl }}</a>
        </div>
      }
    </div>
  </form>
</po-page-background>
`
    }]
  }], () => [], {
    loginForm: [{
      type: ViewChild,
      args: ["loginForm", {
        read: NgForm,
        static: true
      }]
    }],
    pageLogin: [{
      type: ViewChild,
      args: ["pageLogin", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var PoPageLoginModule = class _PoPageLoginModule {
  static \u0275fac = function PoPageLoginModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoPageLoginModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoPageLoginModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [PoPageLoginService],
    imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoPageLoginModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoPageBackgroundModule, PoModule],
      declarations: [PoPageLoginComponent, PoPageLoginPopoverComponent],
      exports: [PoPageLoginComponent],
      providers: [PoPageLoginService]
    }]
  }], null, null);
})();
var PoComponentsModule = class _PoComponentsModule {
  static \u0275fac = function PoComponentsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoComponentsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoComponentsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule, PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule],
      exports: [PoModalPasswordRecoveryModule, PoPageBackgroundModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageDynamicDetailModule, PoPageDynamicEditModule, PoPageDynamicSearchModule, PoPageDynamicTableModule, PoPageJobSchedulerModule, PoPageLoginModule]
    }]
  }], null, null);
})();
var PoServicesModule = class _PoServicesModule {
  static \u0275fac = function PoServicesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoServicesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoServicesModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [PoPageCustomizationModule, PoPageDynamicModule, PoPageCustomizationModule, PoPageDynamicModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoServicesModule, [{
    type: NgModule,
    args: [{
      imports: [PoPageCustomizationModule, PoPageDynamicModule],
      exports: [PoPageCustomizationModule, PoPageDynamicModule]
    }]
  }], null, null);
})();
var PoTemplatesModule = class _PoTemplatesModule {
  static \u0275fac = function PoTemplatesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoTemplatesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PoTemplatesModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [PoComponentsModule, PoServicesModule, PoComponentsModule, PoServicesModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoTemplatesModule, [{
    type: NgModule,
    args: [{
      imports: [PoComponentsModule, PoServicesModule],
      exports: [PoComponentsModule, PoServicesModule]
    }]
  }], null, null);
})();

// node_modules/@totvs/protheus-lib-core/fesm2022/totvs-protheus-lib-core.mjs
var _c02 = "@media (min-width: 1367px){.tooltip-bigscreen-adjust[_ngcontent-%COMP%]{padding-left:0}}";
var _c110 = ["*"];
function ProPageBackgroundComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("po-page-background-hide-logo-image", ctx_r0.hideLogo);
    \u0275\u0275property("src", ctx_r0.logo, \u0275\u0275sanitizeUrl);
  }
}
function ProPageBackgroundComponent_div_9_po_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "po-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ProPageBackgroundComponent_div_9_po_select_1_Template_po_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedLanguageOption, $event) || (ctx_r0.selectedLanguageOption = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("p-change", function ProPageBackgroundComponent_div_9_po_select_1_Template_po_select_p_change_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onChangeLanguage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedLanguageOption);
    \u0275\u0275property("p-options", ctx_r0.selectLanguageOptions);
  }
}
function ProPageBackgroundComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ProPageBackgroundComponent_div_9_po_select_1_Template, 1, 2, "po-select", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectLanguageOptions);
  }
}
function ProPageBackgroundComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.secondaryLogo, \u0275\u0275sanitizeUrl);
  }
}
function ProPageBackgroundComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.background + ")");
    \u0275\u0275property("ngClass", ctx_r0.background ? "po-page-login-highlight-image" : "po-page-login-highlight-image-off");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.highlightInfo);
  }
}
var _c22 = (a0) => [a0];
function ProSessionSettingsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "span", 4);
    \u0275\u0275elementStart(2, "po-switch", 5);
    \u0275\u0275listener("p-change", function ProSessionSettingsComponent_Conditional_4_Template_po_switch_p_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChangeDarkSwitchValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getDarkSwitchClass());
    \u0275\u0275advance();
    \u0275\u0275property("p-tooltip", ctx_r1.getDarkTooltipValue())("p-value", ctx_r1.darkSwitchValue)("p-disabled", ctx_r1.isLoadingDark)("p-hide-label-status", true);
  }
}
function ProSessionSettingsComponent_Conditional_5_po_tag_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "po-tag", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("p-value", ctx_r1.environment);
  }
}
function ProSessionSettingsComponent_Conditional_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "po-switch", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("p-label-off", ctx_r1.literals == null ? null : ctx_r1.literals.str0005)("p-label-on", ctx_r1.literals == null ? null : ctx_r1.literals.str0005);
  }
}
function ProSessionSettingsComponent_Conditional_5_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "po-switch", 30)(2, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("p-label-off", ctx_r1.literals == null ? null : ctx_r1.literals.str0023)("p-label-on", ctx_r1.literals == null ? null : ctx_r1.literals.str0023);
    \u0275\u0275advance();
    \u0275\u0275property("p-tooltip", ctx_r1.literals == null ? null : ctx_r1.literals.str0003);
  }
}
function ProSessionSettingsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "pro-page-background", 6);
    \u0275\u0275listener("p-selected-language", function ProSessionSettingsComponent_Conditional_5_Template_pro_page_background_p_selected_language_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectedLanguage($event));
    });
    \u0275\u0275elementStart(1, "header", 7)(2, "div", 8)(3, "div", 9)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProSessionSettingsComponent_Conditional_5_po_tag_6_Template, 1, 1, "po-tag", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "poI18n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 12)(11, "div", 13)(12, "div", 14);
    \u0275\u0275element(13, "po-datepicker", 15);
    \u0275\u0275elementStart(14, "div", 16);
    \u0275\u0275element(15, "span", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "pro-company-lookup", 18);
    \u0275\u0275listener("companySetted", function ProSessionSettingsComponent_Conditional_5_Template_pro_company_lookup_companySetted_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeBranchColumns($event));
    })("branchSetted", function ProSessionSettingsComponent_Conditional_5_Template_pro_company_lookup_branchSetted_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.branchSettedEvent());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "pro-branch-lookup", 19)(18, "pro-system-module-lookup", 20)(19, "pro-role-lookup", 21);
    \u0275\u0275template(20, ProSessionSettingsComponent_Conditional_5_div_20_Template, 2, 2, "div", 22)(21, ProSessionSettingsComponent_Conditional_5_div_21_Template, 3, 3, "div", 22);
    \u0275\u0275elementStart(22, "div", 23)(23, "po-button", 24);
    \u0275\u0275listener("p-click", function ProSessionSettingsComponent_Conditional_5_Template_po_button_p_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSessionSettingBack());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "po-button", 25);
    \u0275\u0275listener("p-click", function ProSessionSettingsComponent_Conditional_5_Template_po_button_p_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSessionSettingSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "div", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("p-background", ctx_r1.background)("p-highlight-info", ctx_r1.highlightInfo)("p-logo", ctx_r1.logo)("p-secondary-logo", ctx_r1.secondaryLogo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.productName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.environment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayName ? \u0275\u0275pipeBind2(9, 35, ctx_r1.literals == null ? null : ctx_r1.literals.str0009, \u0275\u0275pureFunction1(38, _c22, ctx_r1.displayName)) : ctx_r1.literals == null ? null : ctx_r1.literals.str0006, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.settingForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("p-format", ctx_r1.dateFormat)("p-label", ctx_r1.literals == null ? null : ctx_r1.literals.str0018);
    \u0275\u0275advance(2);
    \u0275\u0275property("p-tooltip", ctx_r1.literals == null ? null : ctx_r1.literals.str0002);
    \u0275\u0275advance();
    \u0275\u0275property("parent", ctx_r1.settingForm)("p-label", ctx_r1.literals == null ? null : ctx_r1.literals.str0010)("p-hint", ctx_r1.literals == null ? null : ctx_r1.literals.str0011)("pro-columns", ctx_r1.companyColumns);
    \u0275\u0275advance();
    \u0275\u0275property("p-label", ctx_r1.literals == null ? null : ctx_r1.literals.str0012)("p-hint", ctx_r1.literals == null ? null : ctx_r1.literals.str0013)("pro-columns", ctx_r1.branchColumns)("parent", ctx_r1.settingForm);
    \u0275\u0275advance();
    \u0275\u0275property("p-label", ctx_r1.literals == null ? null : ctx_r1.literals.str0014)("p-disabled", ctx_r1.fixedModule)("p-hint", ctx_r1.literals == null ? null : ctx_r1.literals.str0015)("pro-columns", ctx_r1.moduleColumns)("parent", ctx_r1.settingForm);
    \u0275\u0275advance();
    \u0275\u0275property("p-label", ctx_r1.literals == null ? null : ctx_r1.literals.str0016)("p-disabled", ctx_r1.fixedRole)("p-hint", ctx_r1.literals == null ? null : ctx_r1.literals.str0017)("parent", ctx_r1.settingForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showGoEmpFil);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showMDIMenuInfo);
    \u0275\u0275advance(2);
    \u0275\u0275property("p-disabled", ctx_r1.isLoading || ctx_r1.disableBackButton)("p-label", ctx_r1.literals == null ? null : ctx_r1.literals.str0008);
    \u0275\u0275advance();
    \u0275\u0275property("p-disabled", !(ctx_r1.settingForm.get("company_code").value && ctx_r1.settingForm.get("branch_code").value && ctx_r1.settingForm.get("environment_code").value))("p-label", ctx_r1.isLoading ? ctx_r1.literals == null ? null : ctx_r1.literals.str0006 : ctx_r1.literals == null ? null : ctx_r1.literals.str0007)("p-loading", ctx_r1.isLoading);
  }
}
var environment = {
  production: false,
  useHTTP: false
  // Alterar apenas para DESENVOLVIMENTO!
};
function valueIsNull(value) {
  return value === null || value === void 0;
}
function convertToBoolean2(val) {
  if (typeof val === "string") {
    val = val.toLowerCase().trim();
    return val === "true" || val === "on" || val === "";
  }
  if (typeof val === "number") {
    return val === 1;
  }
  return !!val;
}
function isTypeof2(object, type) {
  return typeof object === type;
}
function isExternalLink2(url) {
  return url ? url.startsWith("http") : false;
}
function generateRandomId() {
  return Math.floor(Math.random() * 1e5 * (/* @__PURE__ */ new Date()).getMilliseconds());
}
function blockBackAction(url, name, proJsToAdvpl) {
  const location2 = window.location.href;
  window.history.pushState(null, url, location2);
  window.onpopstate = function() {
    proJsToAdvpl.jsToAdvpl("sendLogRedirect", name);
    window.history.pushState(null, url, location2);
  };
}
var ProJsToAdvplService = class _ProJsToAdvplService {
  constructor() {
  }
  hasDialog() {
    return typeof dialog !== "undefined" && typeof dialog.jsToAdvpl === "function";
  }
  hasWebChannel() {
    return typeof twebchannel !== "undefined" && typeof twebchannel.jsToAdvpl === "function";
  }
  getWebChannel() {
    if (this.hasWebChannel()) {
      return twebchannel;
    }
    if (this.hasDialog()) {
      return dialog;
    }
  }
  jsToAdvpl(type, content) {
    const webChannel = this.getWebChannel();
    if (valueIsNull(webChannel)) {
      return false;
    } else {
      webChannel.jsToAdvpl(type, content);
      return true;
    }
  }
  /**
   * @description Método responsável por fechar app na camada advpl
   *
   * @param {string} value Valor que será enviado a camada advpl, sendo vazia ou force
   */
  AdvplCloseApp(value = "") {
    this.jsToAdvpl("close", value);
  }
  buildListener(id, callBack) {
    const webChannel = this.getWebChannel();
    if (webChannel && webChannel["eventTarget"]) {
      webChannel["eventTarget"].addEventListener(id, callBack);
    }
  }
  buildObservable(callBack, options) {
    if (!options.receiveId && options.sendInfo && !options.sendInfo.content) {
      options.receiveId = options.sendInfo.type + "-" + this.generateEventId();
    }
    const buildedObservable = new Observable((subscriber) => {
      const webChannel = this.getWebChannel();
      webChannel[options.receiveId] = {};
      webChannel[options.receiveId]["subscriber"] = subscriber;
      if (options.autoDestruct) {
        webChannel[options.receiveId]["autoDestruct"] = this.buildAutoDestruct(options.receiveId, callBack);
        webChannel["eventTarget"].addEventListener(options.receiveId, webChannel[options.receiveId]["autoDestruct"]);
      } else {
        webChannel["eventTarget"].addEventListener(options.receiveId, callBack);
      }
    });
    if (options.sendInfo) {
      this.connectedJsToAdvpl(options.sendInfo.type, options.sendInfo.content ? options.sendInfo.content : options.receiveId);
    }
    return buildedObservable;
  }
  /**
   * @description Remove e apaga o evento
   * @param id ID do evento
   * @param callBack callback do evento
   * @returns
   */
  buildAutoDestruct(id, callBack) {
    return ({
      protheusResponse,
      subscriber
    }) => {
      const webChannel = this.getWebChannel();
      callBack({
        protheusResponse,
        subscriber
      });
      if (webChannel[id]) {
        webChannel["eventTarget"].removeEventListener(id, webChannel[id]["autoDestruct"]);
        delete webChannel[id];
      }
    };
  }
  protheusConnected() {
    const webChannel = this.getWebChannel();
    return !valueIsNull(webChannel) && webChannel["gotConnection"];
  }
  connectedJsToAdvpl(type, value, retryCounter = 99, timeout = 50) {
    if (this.protheusConnected()) {
      this.jsToAdvpl(type, value);
    } else {
      if (retryCounter > 0) {
        retryCounter--;
        setTimeout(() => {
          this.connectedJsToAdvpl(type, value, retryCounter, timeout);
        }, timeout);
      } else {
        console.log("jsToAdvpl type " + type + " not executed!");
      }
    }
  }
  generateEventId() {
    return generateRandomId();
  }
  static {
    this.\u0275fac = function ProJsToAdvplService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProJsToAdvplService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProJsToAdvplService,
      factory: _ProJsToAdvplService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProJsToAdvplService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var ProJsToAdvplModule = class _ProJsToAdvplModule {
  static {
    this.\u0275fac = function ProJsToAdvplModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProJsToAdvplModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProJsToAdvplModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProJsToAdvplModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule]
    }]
  }], null, null);
})();
var ProSessionInfoService = class _ProSessionInfoService {
  /**
   * @description Atribui as informações de sessão.
   */
  setSessionInfo() {
    this.setCompany(JSON.parse(sessionStorage["ProCompany"]));
    this.setBranch(JSON.parse(sessionStorage["ProBranch"]));
    this.setModule(sessionStorage["ProModule"]);
    this.setAppName(sessionStorage["appName"]);
    this.setSystemModule(sessionStorage["ProSystemModule"]);
    this.setDataBase(sessionStorage["ProDatabase"]);
    this.setRemoteType(parseInt(sessionStorage["RemoteType"]));
    this.setSocketPort(parseInt(sessionStorage["SocketPort"]));
    this.setAppConfig(JSON.parse(sessionStorage["ProAppConfig"]));
    this.setIdiom(sessionStorage["ProIdiom"]);
    this.setRole(sessionStorage["ProRole"]);
    this.setToken(JSON.parse(sessionStorage["TOKEN"]));
    this.setErpAppConfig(JSON.parse(sessionStorage["ERPAPPCONFIG"]));
    this.setUser(sessionStorage["ProUser"]);
    this.setErpToken(JSON.parse(sessionStorage["ERPTOKEN"]));
    this.setTheme(JSON.parse(localStorage.getItem("ProTheme")));
  }
  /**
   * @description Retorna o nome do ambiente a partir da URL.
   * @returns string com o nome do ambiente
   */
  getLocationPathNameEnvironment() {
    return location.pathname.split("/")[2];
  }
  /**
   * @description Retorna objeto com informações gerais da sessão.
   * @returns ProSessionInfo
   */
  getSessionInfo() {
    return {
      proCompany: this.getCompany(),
      proBranch: this.getBranch(),
      proModule: this.getModule(),
      appName: this.getAppName(),
      proSystemModule: this.getSystemModule(),
      proDatabase: this.getDataBase(),
      remoteRype: this.getRemoteType(),
      socketPort: this.getSocketPort(),
      proAppConfig: this.getAppConfig(),
      proIdiom: this.getIdiom(),
      proRole: this.getRole(),
      token: this.getToken(),
      erpAppConfig: this.getErpAppConfig(),
      proUser: this.getUser(),
      erpToken: this.getErpToken()
    };
  }
  /**
   * @description Retorna as informações da empresa.
   * @returns ProCompany
   */
  getCompany() {
    const session = sessionStorage["ProCompany"];
    let company;
    if (session) {
      company = JSON.parse(session);
    }
    ;
    return this.proCompany ?? company;
  }
  /**
   * @description Retorna as informações da filial.
   * @returns ProBranch
   */
  getBranch() {
    const session = sessionStorage["ProBranch"];
    let branch;
    if (session) {
      branch = JSON.parse(session);
    }
    ;
    return this.proBranch ?? branch;
  }
  /**
   * @description Retorna o módulo.
   * @returns string
   */
  getModule() {
    return this.proModule ?? sessionStorage["ProModule"];
  }
  /**
   * @description Retorna as informações o nome do app.
   * @returns string
   */
  getAppName() {
    return this.appName ?? sessionStorage["appName"];
  }
  /**
   * @description Retorna as informações do módulo.
   * @returns ProSystemModules
   */
  getSystemModule() {
    const session = sessionStorage["ProSystemModule"];
    let systemModule;
    if (session) {
      systemModule = JSON.parse(session);
    }
    ;
    return this.proSystemModule ?? systemModule;
  }
  /**
   * @description Retorna a database.
   * @returns string
   */
  getDataBase() {
    return this.proDataBase ?? sessionStorage["ProDatabase"];
    ;
  }
  /**
   * @description Retorna tipo do remote.
   * @returns number
   */
  getRemoteType() {
    const session = sessionStorage["RemoteType"];
    let remoteType;
    if (session) {
      remoteType = parseInt(session);
    }
    ;
    return this.remoteType ?? remoteType;
  }
  /**
   * @description Retorna porta de conexão do socket.
   * @returns number
   */
  getSocketPort() {
    const session = sessionStorage["SocketPort"];
    let socketPort;
    if (session) {
      socketPort = parseInt(session);
    }
    ;
    return this.socketPort ?? socketPort;
  }
  /**
   * @description Retorna as informações do app.
   * @returns ProAppConfig
   */
  getAppConfig() {
    const session = sessionStorage["ProAppConfig"];
    let appConfig2;
    if (session) {
      appConfig2 = JSON.parse(session);
    }
    ;
    return this.proAppConfig ?? appConfig2;
  }
  /**
   * @description Retorna idioma.
   * @returns string
   */
  getIdiom() {
    return this.proIdiom ?? sessionStorage["ProIdiom"];
  }
  /**
   * @description Retorna as informações de papel de usuário.
   * @returns ProRole
   */
  getRole() {
    const session = sessionStorage["ProRole"];
    let role;
    if (session) {
      role = JSON.parse(session);
    }
    ;
    return this.proRole ?? role;
  }
  /**
   * @description Retorna as do token do usuário.
   * @returns ProAuthToken
   */
  getToken() {
    const session = sessionStorage["TOKEN"];
    let token;
    if (session) {
      token = JSON.parse(session);
    }
    ;
    return this.token ?? token;
  }
  /**
   * @description Retorna as informações do app.
   * @returns ProAppConfig
   */
  getErpAppConfig() {
    const session = sessionStorage["ERPAPPCONFIG"];
    let appConfig2;
    if (session) {
      appConfig2 = JSON.parse(session);
    }
    ;
    return this.erpAppConfig ?? appConfig2;
  }
  /**
   * @description Retorna as informações do usuário.
   * @returns ProUser
   */
  getUser() {
    const session = sessionStorage["ProUser"];
    let user;
    if (session) {
      user = JSON.parse(session);
    }
    ;
    return this.proUser ?? user;
  }
  /**
   * @description Retorna as informações do token do usuário.
   * @returns ProAuthToken
   */
  getErpToken() {
    const session = sessionStorage["ERPTOKEN"];
    let token;
    if (session) {
      token = JSON.parse(session);
    }
    ;
    return this.erpToken ?? token;
  }
  /**
  * @description Retorna o tema selecionado.
  * @returns ProThemeConfiguration
  */
  getTheme() {
    const session = localStorage.getItem("ProTheme");
    let theme;
    if (session) {
      theme = JSON.parse(session);
    }
    ;
    return this.theme ?? theme;
  }
  /**
   * @description Atribui as informações da empresa.
   */
  setCompany(company) {
    this.proCompany = company;
  }
  /**
   * @description Atribui as informações da filial.
   */
  setBranch(branch) {
    this.proBranch = branch;
  }
  /**
   * @description Atribui o módulo.
   */
  setModule(module) {
    this.proModule = module;
  }
  /**
   * @description Atribui o nome do app.
   */
  setAppName(appName) {
    this.appName = appName;
  }
  /**
   * @description Atribui as informações do módulo.
   */
  setSystemModule(systemModule) {
    if (systemModule) {
      this.proSystemModule = JSON.parse(systemModule);
    }
  }
  /**
   * @description Atribui a database.
   */
  setDataBase(dataBase) {
    this.proDataBase = dataBase;
  }
  /**
   * @description Atribui o tipo de remote.
   */
  setRemoteType(remoteType) {
    this.remoteType = remoteType;
  }
  /**
   * @description Atribui a porta de conexão do socket.
   */
  setSocketPort(socketPort) {
    this.socketPort = socketPort;
  }
  /**
   * @description Atribui as informações do app.
   */
  setAppConfig(appConfig2) {
    this.proAppConfig = appConfig2;
  }
  /**
   * @description Atribui o idioma.
   */
  setIdiom(idiom) {
    this.proIdiom = idiom;
  }
  /**
   * @description Atribui as informações do papel de usuário.
   */
  setRole(role) {
    if (role) {
      this.proRole = JSON.parse(role);
    }
  }
  /**
   * @description Atribui as informações dao token do usuário.
   */
  setToken(token) {
    this.token = token;
  }
  /**
   * @description Atribui as informações do app.
   */
  setErpAppConfig(appConfig2) {
    this.erpAppConfig = appConfig2;
  }
  /**
   * @description Atribui as informações do usuário.
   */
  setUser(user) {
    if (user) {
      this.proUser = JSON.parse(user);
    }
  }
  /**
   * @description Atribui as informações do token do usuário.
   */
  setErpToken(erpToken) {
    this.erpToken = erpToken;
  }
  /**
  * @description Atribui o tema utilizado
  */
  setTheme(theme) {
    this.theme = theme;
  }
  static {
    this.\u0275fac = function ProSessionInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSessionInfoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSessionInfoService,
      factory: _ProSessionInfoService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSessionInfoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CACHE_KEY$4 = "ProCompany";
var ProCompanyService = class _ProCompanyService {
  constructor(http, advplService, sessionInfoService) {
    this.http = http;
    this.advplService = advplService;
    this.sessionInfoService = sessionInfoService;
    this.url = "/api/framework/environment/v1/companies";
    this.useHTTP = true;
    this.EVENT_GET_LIST_ID = "getCompaniesList";
    this.EVENT_SET_LIST_ID = "setCompaniesList";
    this.EVENT_GET_ONE_ID = "getCompanyInfo";
    this.EVENT_SET_ONE_ID = "setCompanyInfo";
  }
  getListOfCompanies(CorporateName = "", page = 1, _pageSize = 100) {
    const pageSize = 100;
    if (this.useHTTP) {
      return this.getListOfCompaniesFromApi(CorporateName, page, pageSize);
    }
    return this.getListOfCompaniesFromAdvpl(CorporateName, page, pageSize);
  }
  /**
   * @description Retorna as empresas do usuário
   * @param corporateName string, nome da empresa
   * @param page number, número da página
   * @param pageSize number, número de registros da página
   * @returns ProCompanyList, lista de empresas do usuário
   */
  getUserCompanies(corporateName = "", page = 1, pageSize = 10) {
    return this.getListOfCompaniesFromApi(corporateName, page, pageSize);
  }
  getListOfCompaniesFromApi(CorporateName, page, pageSize) {
    let params = new HttpParams().append("page", page.toString()).append("pageSize", pageSize.toString());
    if (CorporateName !== "") {
      params = params.append("CorporateName", CorporateName);
    }
    const headers = new HttpHeaders().append("Accept", "application/json; charset=utf-8");
    return this.http.get(this.url, {
      headers,
      params
    });
  }
  getListOfCompaniesFromAdvpl(CorporateName, page, pageSize) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    const stringContent = JSON.stringify({
      CorporateName,
      page,
      pageSize
    });
    const observableParameters = {
      sendInfo: {
        type: this.EVENT_GET_LIST_ID,
        content: stringContent
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_LIST_ID
    };
    const observableCallback = ({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: `company ${CorporateName} could not be found`
        });
      } else {
        const companiesData = JSON.parse(protheusResponse);
        subscriber.next(companiesData);
      }
      subscriber.complete();
    };
    return this.advplService.buildObservable(observableCallback, observableParameters);
  }
  getCompany(company) {
    if (this.useHTTP) {
      return this.getCompanyFromApi(company);
    }
    return this.getCompanyFromAdvpl(company);
  }
  getCompanyFromApi(company) {
    const headers = new HttpHeaders().append("Accept", "application/json; charset=utf-8");
    return this.http.get(`${this.url}/${company}`, {
      headers
    });
  }
  getCompanyFromAdvpl(company) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    return this.advplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: `company ${company} could not be found`
        });
      } else {
        const companyData = JSON.parse(protheusResponse);
        subscriber.next(companyData);
      }
      subscriber.complete();
    }, {
      sendInfo: {
        type: this.EVENT_GET_ONE_ID,
        content: company
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_ONE_ID
    });
  }
  /**
   * @description Retorna a empresa logada.
   * @returns ProCompany
   */
  get company() {
    const company = this.sessionInfoService.getCompany();
    if (company) {
      return company;
    } else {
      return {
        Code: "",
        CorporateName: "",
        InternalId: ""
      };
    }
  }
  set company(company) {
    sessionStorage[CACHE_KEY$4] = JSON.stringify(company);
  }
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProCompanyService"
      });
      subscriber.complete();
    });
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
  }
  static {
    this.\u0275fac = function ProCompanyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProCompanyService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProCompanyService,
      factory: _ProCompanyService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProCompanyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProSessionInfoService
  }], null);
})();
var CACHE_KEY$3 = "ProBranch";
var ProBranchService = class _ProBranchService {
  constructor(http, advplService, proCompanyService, sessionInfoService) {
    this.http = http;
    this.advplService = advplService;
    this.proCompanyService = proCompanyService;
    this.sessionInfoService = sessionInfoService;
    this.url = "/api/framework/environment/v1/branches";
    this.useHTTP = true;
    this.EVENT_SET_LIST_ID = "setBranchesList";
    this.EVENT_GET_LIST_ID = "getBranchesList";
    this.EVENT_SET_ONE_ID = "setBranchInfo";
    this.EVENT_GET_ONE_ID = "getBranchInfo";
  }
  getListOfBranches(Description = "", page = 1, _pageSize = 100) {
    const pageSize = 100;
    if (this.useHTTP) {
      return this.getListOfBranchesFromApi(Description, page, pageSize);
    }
    return this.getListOfBranchesFromAdvpl(Description, page, pageSize);
  }
  /**
   * @description Retorna as filiais do usuário
   * @param description string, descrição da filial
   * @param page number, número da página
   * @param pageSize number, número de registros da página
   * @returns ProBranchList, lista de filiais do usuário
   */
  getUserBranches(description = "", page = 1, pageSize = 10) {
    return this.getListOfBranchesFromApi(description, page, pageSize, false);
  }
  /**
   * @description Retorna as filiais do usuário via requisição http
   * @param description string, descrição da filial
   * @param page number, número da página
   * @param pageSize number, número de registros da página
   * @param isToFilterEnterpriseGroup boolean, indica se as filiais devem ser filtradas por empresa
   * @returns ProBranchList, lista de filiais do usuário
   */
  getListOfBranchesFromApi(Description, page, pageSize, isToFilterEnterpriseGroup = true) {
    let params = new HttpParams().append("page", page.toString()).append("pageSize", pageSize.toString());
    const company = this.proCompanyService.company;
    if (Description !== "") {
      params = params.append("Description", Description);
    }
    if (isToFilterEnterpriseGroup) {
      params = params.append("EnterpriseGroup", company.Code);
    }
    const headers = new HttpHeaders().append("Accept", "application/json; charset=utf-8");
    return this.http.get(this.url, {
      headers,
      params
    });
  }
  getListOfBranchesFromAdvpl(Description, page, pageSize) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    const company = this.proCompanyService.company;
    const stringContent = JSON.stringify({
      Description,
      EnterpriseGroup: company.Code,
      page,
      pageSize
    });
    const observableParams = {
      sendInfo: {
        type: this.EVENT_GET_LIST_ID,
        content: stringContent
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_LIST_ID
    };
    const observableCallback = ({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: `branch ${Description} could not be found`
        });
      } else {
        const branchesData = JSON.parse(protheusResponse);
        subscriber.next(branchesData);
      }
      subscriber.complete();
    };
    return this.advplService.buildObservable(observableCallback, observableParams);
  }
  getBranch(branch, company = "") {
    if (this.useHTTP) {
      return this.getBranchFromApi(branch, company);
    }
    return this.getBranchFromAdvpl(branch, company);
  }
  getBranchFromApi(branch, company) {
    if (company === "") {
      company = this.proCompanyService.company.Code;
    }
    const headers = new HttpHeaders().append("Accept", "application/json; charset=utf-8");
    return this.http.get(`${this.url}/${company}|${branch}`, {
      headers
    });
  }
  getBranchFromAdvpl(branch, company) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    if (company === "") {
      company = this.proCompanyService.company.Code;
    }
    const stringContent = JSON.stringify({
      branch,
      company
    });
    const observableParams = {
      sendInfo: {
        type: this.EVENT_GET_ONE_ID,
        content: stringContent
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_ONE_ID
    };
    const observableCallback = ({
      protheusResponse,
      subscriber
    }) => {
      let isOk = protheusResponse.length > 0;
      const response = isOk ? JSON.parse(protheusResponse) : {};
      isOk = isOk && response && response.success;
      if (!isOk) {
        subscriber.error({
          status: 400,
          description: `branch ${branch} could not be found`
        });
      } else {
        const branchData = JSON.parse(response.payload);
        subscriber.next(branchData);
      }
      subscriber.complete();
    };
    return this.advplService.buildObservable(observableCallback, observableParams);
  }
  /**
   * @description Retorna a filial logada.
   * @returns ProBranch
   */
  get branch() {
    const branch = this.sessionInfoService.getBranch();
    if (branch) {
      return branch;
    } else {
      return {
        Code: "",
        EnterpriseGroup: "",
        Description: ""
      };
    }
  }
  set branch(branch) {
    sessionStorage[CACHE_KEY$3] = JSON.stringify(branch);
  }
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProBranchService"
      });
      subscriber.complete();
    });
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
  }
  static {
    this.\u0275fac = function ProBranchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProBranchService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProCompanyService), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProBranchService,
      factory: _ProBranchService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBranchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProCompanyService
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProBranchLookupService = class _ProBranchLookupService {
  constructor(proBranchService) {
    this.proBranchService = proBranchService;
    this.useHTTP = environment.useHTTP;
    this.changeServiceChannel();
  }
  getFilteredItems(params) {
    return this.proBranchService.getListOfBranches(params.filter, params.page, params.pageSize);
  }
  getObjectByValue(value) {
    return this.proBranchService.getBranch(value);
  }
  setBranch(branch) {
    this.proBranchService.branch = branch;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
    this.changeServiceChannel();
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  changeServiceChannel() {
    this.proBranchService.setChannelAsHTTP(this.useHTTP);
  }
  static {
    this.\u0275fac = function ProBranchLookupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProBranchLookupService)(\u0275\u0275inject(ProBranchService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProBranchLookupService,
      factory: _ProBranchLookupService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBranchLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProBranchService
  }], null);
})();
var ProBranchLookupComponent = class _ProBranchLookupComponent {
  constructor(service) {
    this.service = service;
    this.branchSetted = new EventEmitter();
  }
  fieldFormat(value) {
    return value.Code;
  }
  /**
   * @description metodo para setar o foco no lookup de branch
   */
  setBranchFocus() {
    this.lookup.focus();
  }
  /*
  trecho para mostrar a consulta pelo atalho do F3
  mantido aqui para servir de base caso venha a ser necessário utilizar isso no futuro.
     // Registre o HostListener para a tecla F3
  @HostListener('document:keydown.F3', ['$event'])
  handleF3Key(event: KeyboardEvent): void {
    console.log("f3 branch out");
    if (this.lookup.inputEl.nativeElement == document.activeElement){
      console.log("f3 branch in");
      event.preventDefault(); // Isso impede que a ação padrão da tecla F3 (geralmente abrir a busca) seja executada
      this.lookup.openLookup();
    }
  } */
  setBranch(branch) {
    if (Object.keys(branch).length > 0) {
      this.parent.patchValue({
        branch_description: branch.Description
      });
      this.service.setBranch(branch);
      this.branchSetted.emit(branch);
    }
  }
  static {
    this.\u0275fac = function ProBranchLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProBranchLookupComponent)(\u0275\u0275directiveInject(ProBranchLookupService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProBranchLookupComponent,
      selectors: [["pro-branch-lookup"]],
      viewQuery: function ProBranchLookupComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(PoLookupComponent, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lookup = _t.first);
        }
      },
      inputs: {
        parent: "parent",
        pLabel: [0, "p-label", "pLabel"],
        pHint: [0, "p-hint", "pHint"],
        columns: [0, "pro-columns", "columns"]
      },
      outputs: {
        branchSetted: "branchSetted"
      },
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [[1, "po-page-login-info-container", 3, "formGroup"], ["name", "branch_code", "formControlName", "branch_code", "p-field-label", "Code", "p-field-value", "Code", 1, "po-md-6", 3, "p-selected", "p-label", "p-columns", "p-field-format", "p-filter-service"], ["name", "branch_description", "formControlName", "branch_description", "p-label", "\xA0", "p-disabled", "true", 1, "po-md-6"], [1, "po-page-login-info-icon-container", "tooltip-bigscreen-adjust"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", 3, "p-tooltip"]],
      template: function ProBranchLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "po-lookup", 1);
          \u0275\u0275listener("p-selected", function ProBranchLookupComponent_Template_po_lookup_p_selected_1_listener($event) {
            return ctx.setBranch($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(2, "po-input", 2);
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("formGroup", ctx.parent);
          \u0275\u0275advance();
          \u0275\u0275property("p-label", ctx.pLabel)("p-columns", ctx.columns)("p-field-format", ctx.fieldFormat)("p-filter-service", ctx.service);
          \u0275\u0275advance(3);
          \u0275\u0275property("p-tooltip", ctx.pHint);
        }
      },
      dependencies: [NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PoInputComponent, PoLookupComponent, PoTooltipDirective],
      styles: ["@media (min-width: 1367px){.tooltip-bigscreen-adjust[_ngcontent-%COMP%]{padding-left:0}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBranchLookupComponent, [{
    type: Component,
    args: [{
      selector: "pro-branch-lookup",
      standalone: false,
      template: '<div [formGroup]="parent" class="po-page-login-info-container">\r\n  <po-lookup\r\n    class="po-md-6"\r\n    name="branch_code"\r\n    formControlName="branch_code"\r\n    p-field-label="Code"\r\n    p-field-value="Code"\r\n    [p-label]="pLabel"\r\n    [p-columns]="columns"\r\n    [p-field-format]="fieldFormat"\r\n    [p-filter-service]="service"\r\n    (p-selected)="setBranch($event)"\r\n  >\r\n  </po-lookup>\r\n  <po-input\r\n    class="po-md-6"\r\n    name="branch_description"\r\n    formControlName="branch_description"\r\n    p-label="&nbsp;"\r\n    p-disabled="true"\r\n  >\r\n  </po-input>\r\n  <div class="po-page-login-info-icon-container tooltip-bigscreen-adjust">\r\n    <span\r\n      class="po-icon po-field-icon po-icon-info"\r\n      [p-tooltip]="pHint"\r\n      p-tooltip-position="right"\r\n    >\r\n    </span>\r\n  </div>\r\n</div>\r\n',
      styles: ["@media (min-width: 1367px){.tooltip-bigscreen-adjust{padding-left:0}}\n"]
    }]
  }], () => [{
    type: ProBranchLookupService
  }], {
    parent: [{
      type: Input
    }],
    branchSetted: [{
      type: Output
    }],
    pLabel: [{
      type: Input,
      args: ["p-label"]
    }],
    pHint: [{
      type: Input,
      args: ["p-hint"]
    }],
    columns: [{
      type: Input,
      args: ["pro-columns"]
    }],
    lookup: [{
      type: ViewChild,
      args: [PoLookupComponent, {
        static: true
      }]
    }]
  });
})();
var ProBranchLookupModule = class _ProBranchLookupModule {
  static {
    this.\u0275fac = function ProBranchLookupModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProBranchLookupModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProBranchLookupModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBranchLookupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule],
      declarations: [ProBranchLookupComponent],
      exports: [ProBranchLookupComponent]
    }]
  }], null, null);
})();
var ProCompanyLookupService = class _ProCompanyLookupService {
  constructor(proCompanyService) {
    this.proCompanyService = proCompanyService;
    this.useHTTP = environment.useHTTP;
    this.changeServiceChannel();
  }
  getFilteredItems(params) {
    return this.proCompanyService.getListOfCompanies(params.filter, params.page, params.pageSize);
  }
  getObjectByValue(value) {
    return this.proCompanyService.getCompany(value);
  }
  setCompany(company) {
    this.proCompanyService.company = company;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
    this.changeServiceChannel();
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  changeServiceChannel() {
    this.proCompanyService.setChannelAsHTTP(this.useHTTP);
  }
  static {
    this.\u0275fac = function ProCompanyLookupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProCompanyLookupService)(\u0275\u0275inject(ProCompanyService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProCompanyLookupService,
      factory: _ProCompanyLookupService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProCompanyLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProCompanyService
  }], null);
})();
var ProCompanyLookupComponent = class _ProCompanyLookupComponent {
  /**
   * @description Construtor da classe
   * @param service Serviço de Lookup do grupo de empresas
   */
  constructor(service) {
    this.service = service;
    this.companySetted = new EventEmitter();
    this.branchSetted = new EventEmitter();
    this.started = false;
    this.firstPass = true;
  }
  fieldFormat(value) {
    return value.Code;
  }
  setCompanyFocus() {
    this.lookup.focus();
  }
  setStarted(started) {
    this.started = started;
  }
  /*
  trecho para mostrar a consulta pelo atalho do F3
  mantido aqui para servir de base caso venha a ser necessário utilizar isso no futuro.
     // Registre o HostListener para a tecla F3
  @HostListener('document:keydown.F3', ['$event'])
  handleF3Key(event: KeyboardEvent): void {
    console.log("f3 out");
    if (this.lookup.inputEl.nativeElement == document.activeElement){
      console.log("f3 in");
      event.preventDefault(); // Isso impede que a ação padrão da tecla F3 (geralmente abrir a busca) seja executada
      this.lookup.openLookup();
    }
  } */
  /**
   * @description Efetua o set do grupo de empresas para o serviço, atualiza o parent e disparada o evento
   * @param company Objeto do grupo de empresas
   */
  setCompany(company) {
    if (Object.keys(company).length > 0) {
      this.parent.patchValue({
        company_description: company.CorporateName,
        branch_code: "",
        branch_description: "",
        companyLayout: company.Layout
      });
      this.service.setCompany(company);
      this.companySetted.emit(company);
      const hasBranch = !!company.FirstBranchCode && !!company.FirstBranchDescription;
      if (this.started && hasBranch && !this.firstPass) {
        this.parent.patchValue({
          branch_code: company.FirstBranchCode,
          branch_description: company.FirstBranchDescription
        });
        setTimeout(() => {
          this.branchSetted.emit();
        }, 200);
      }
      if (this.firstPass) {
        this.firstPass = false;
      }
    }
  }
  static {
    this.\u0275fac = function ProCompanyLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProCompanyLookupComponent)(\u0275\u0275directiveInject(ProCompanyLookupService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProCompanyLookupComponent,
      selectors: [["pro-company-lookup"]],
      viewQuery: function ProCompanyLookupComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(PoLookupComponent, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lookup = _t.first);
        }
      },
      inputs: {
        parent: "parent",
        pLabel: [0, "p-label", "pLabel"],
        pHint: [0, "p-hint", "pHint"],
        columns: [0, "pro-columns", "columns"]
      },
      outputs: {
        companySetted: "companySetted",
        branchSetted: "branchSetted"
      },
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [[1, "po-page-login-info-container", 3, "formGroup"], ["name", "company_code", "formControlName", "company_code", "p-field-label", "Code", "p-field-value", "Code", 1, "po-md-6", 3, "p-selected", "p-label", "p-columns", "p-field-format", "p-filter-service"], ["name", "company_description", "formControlName", "company_description", "p-label", "\xA0", "p-disabled", "true", 1, "po-md-6"], [1, "po-page-login-info-icon-container", "tooltip-bigscreen-adjust"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", 3, "p-tooltip"]],
      template: function ProCompanyLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "po-lookup", 1);
          \u0275\u0275listener("p-selected", function ProCompanyLookupComponent_Template_po_lookup_p_selected_1_listener($event) {
            return ctx.setCompany($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(2, "po-input", 2);
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("formGroup", ctx.parent);
          \u0275\u0275advance();
          \u0275\u0275property("p-label", ctx.pLabel)("p-columns", ctx.columns)("p-field-format", ctx.fieldFormat)("p-filter-service", ctx.service);
          \u0275\u0275advance(3);
          \u0275\u0275property("p-tooltip", ctx.pHint);
        }
      },
      dependencies: [NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PoInputComponent, PoLookupComponent, PoTooltipDirective],
      styles: [_c02]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProCompanyLookupComponent, [{
    type: Component,
    args: [{
      selector: "pro-company-lookup",
      standalone: false,
      template: '<div [formGroup]="parent" class="po-page-login-info-container">\r\n  <po-lookup\r\n    class="po-md-6"\r\n    name="company_code"\r\n    formControlName="company_code"\r\n    p-field-label="Code"\r\n    p-field-value="Code"\r\n    [p-label]="pLabel"\r\n    [p-columns]="columns"\r\n    [p-field-format]="fieldFormat"\r\n    [p-filter-service]="service"\r\n    (p-selected)="setCompany($event)"\r\n  >\r\n  </po-lookup>\r\n  <po-input\r\n    class="po-md-6"\r\n    name="company_description"\r\n    formControlName="company_description"\r\n    p-label="&nbsp;"\r\n    p-disabled="true"\r\n  >\r\n  </po-input>\r\n  <div class="po-page-login-info-icon-container tooltip-bigscreen-adjust">\r\n    <span\r\n      class="po-icon po-field-icon po-icon-info"\r\n      [p-tooltip]="pHint"\r\n      p-tooltip-position="right"\r\n    >\r\n    </span>\r\n  </div>\r\n</div>\r\n',
      styles: ["@media (min-width: 1367px){.tooltip-bigscreen-adjust{padding-left:0}}\n"]
    }]
  }], () => [{
    type: ProCompanyLookupService
  }], {
    parent: [{
      type: Input
    }],
    companySetted: [{
      type: Output
    }],
    branchSetted: [{
      type: Output
    }],
    pLabel: [{
      type: Input,
      args: ["p-label"]
    }],
    pHint: [{
      type: Input,
      args: ["p-hint"]
    }],
    columns: [{
      type: Input,
      args: ["pro-columns"]
    }],
    lookup: [{
      type: ViewChild,
      args: [PoLookupComponent, {
        static: true
      }]
    }]
  });
})();
var ProCompanyLookupModule = class _ProCompanyLookupModule {
  static {
    this.\u0275fac = function ProCompanyLookupModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProCompanyLookupModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProCompanyLookupModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProCompanyLookupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule],
      declarations: [ProCompanyLookupComponent],
      exports: [ProCompanyLookupComponent]
    }]
  }], null, null);
})();
var CACHE_KEY$2 = "ProRole";
var ProRoleService = class _ProRoleService {
  constructor(advplService, sessionInfoService) {
    this.advplService = advplService;
    this.sessionInfoService = sessionInfoService;
  }
  getListofRoles(description = "", page = 1, pageSize = 10) {
    pageSize = 100;
    if (this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (protheusResponse.length === 0) {
          subscriber.next({
            hasNext: false,
            items: []
          });
        } else {
          const roleList = JSON.parse(protheusResponse).map((role) => {
            return {
              Code: role[0],
              Description: role[1]
            };
          }).filter((role) => {
            return role.Description.includes(description);
          });
          subscriber.next({
            hasNext: roleList.length > page * pageSize,
            items: roleList.slice((page - 1) * pageSize, page * pageSize)
          });
        }
        subscriber.complete();
      }, {
        autoDestruct: true,
        receiveId: "setRoleList",
        sendInfo: {
          type: "getRoleList"
        }
      });
    } else {
      return new Observable((subscriber) => {
        subscriber.next({
          hasNext: false,
          items: []
        });
        subscriber.complete();
      });
    }
  }
  getRoleByCode(roleCode) {
    if (this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        const role = JSON.parse(protheusResponse);
        const response = {
          Code: role[0],
          Description: role[1]
        };
        subscriber.next(response);
        subscriber.complete();
      }, {
        autoDestruct: true,
        receiveId: "setRoleItem",
        sendInfo: {
          type: "getRoleItem",
          content: roleCode
        }
      });
    } else {
      return new Observable((subscriber) => {
        subscriber.next({
          Code: "",
          Description: ""
        });
        subscriber.complete();
      });
    }
  }
  /**
   * @description Retorna as informações de papel de trabalho do usuário.
   */
  get role() {
    const role = this.sessionInfoService.getRole();
    if (role) {
      return role;
    } else {
      return {
        Code: "",
        Description: ""
      };
    }
  }
  set role(role) {
    sessionStorage[CACHE_KEY$2] = JSON.stringify(role);
  }
  static {
    this.\u0275fac = function ProRoleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProRoleService)(\u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProRoleService,
      factory: _ProRoleService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProRoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProJsToAdvplService
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProRoleLookupService = class _ProRoleLookupService {
  constructor(proRoleService) {
    this.proRoleService = proRoleService;
  }
  getFilteredItems(params) {
    return this.proRoleService.getListofRoles(params.filter, params.page, params.pageSize);
  }
  getObjectByValue(code) {
    return this.proRoleService.getRoleByCode(code);
  }
  setRole(role) {
    this.proRoleService.role = role;
  }
  static {
    this.\u0275fac = function ProRoleLookupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProRoleLookupService)(\u0275\u0275inject(ProRoleService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProRoleLookupService,
      factory: _ProRoleLookupService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProRoleLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProRoleService
  }], null);
})();
var ProRoleLookupComponent = class _ProRoleLookupComponent {
  constructor(service) {
    this.service = service;
    this.roleSetted = new EventEmitter();
  }
  fieldFormat(value) {
    return value.Code;
  }
  setRole(role) {
    this.parent.patchValue({
      role_description: role.Description
    });
    this.service.setRole(role);
    this.roleSetted.emit(role);
  }
  static {
    this.\u0275fac = function ProRoleLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProRoleLookupComponent)(\u0275\u0275directiveInject(ProRoleLookupService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProRoleLookupComponent,
      selectors: [["pro-role-lookup"]],
      inputs: {
        parent: "parent",
        pLabel: [0, "p-label", "pLabel"],
        pHint: [0, "p-hint", "pHint"],
        columns: [0, "pro-columns", "columns"],
        pDisabled: [0, "p-disabled", "pDisabled"]
      },
      outputs: {
        roleSetted: "roleSetted"
      },
      standalone: false,
      decls: 5,
      vars: 7,
      consts: [[1, "po-page-login-info-container", 3, "formGroup"], ["name", "role_code", "formControlName", "role_code", "p-field-label", "Code", "p-field-value", "Code", 1, "po-md-6", 3, "p-selected", "p-label", "p-columns", "p-field-format", "p-filter-service", "p-disabled"], ["name", "role_description", "formControlName", "role_description", "p-label", "\xA0", "p-disabled", "true", 1, "po-md-6"], [1, "po-page-login-info-icon-container", "tooltip-bigscreen-adjust"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", 3, "p-tooltip"]],
      template: function ProRoleLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "po-lookup", 1);
          \u0275\u0275listener("p-selected", function ProRoleLookupComponent_Template_po_lookup_p_selected_1_listener($event) {
            return ctx.setRole($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(2, "po-input", 2);
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("formGroup", ctx.parent);
          \u0275\u0275advance();
          \u0275\u0275property("p-label", ctx.pLabel)("p-columns", ctx.columns)("p-field-format", ctx.fieldFormat)("p-filter-service", ctx.service)("p-disabled", ctx.pDisabled);
          \u0275\u0275advance(3);
          \u0275\u0275property("p-tooltip", ctx.pHint);
        }
      },
      dependencies: [NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PoInputComponent, PoLookupComponent, PoTooltipDirective],
      styles: [_c02]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProRoleLookupComponent, [{
    type: Component,
    args: [{
      selector: "pro-role-lookup",
      standalone: false,
      template: '<div [formGroup]="parent" class="po-page-login-info-container">\r\n  <po-lookup\r\n    class="po-md-6"\r\n    name="role_code"\r\n    formControlName="role_code"\r\n    p-field-label="Code"\r\n    p-field-value="Code"\r\n    [p-label]="pLabel"\r\n    [p-columns]="columns"\r\n    [p-field-format]="fieldFormat"\r\n    [p-filter-service]="service"\r\n    (p-selected)="setRole($event)"\r\n    [p-disabled]="pDisabled"\r\n  >\r\n  </po-lookup>\r\n  <po-input\r\n    class="po-md-6"\r\n    name="role_description"\r\n    formControlName="role_description"\r\n    p-label="&nbsp;"\r\n    p-disabled="true"\r\n  >\r\n  </po-input>\r\n  <div class="po-page-login-info-icon-container tooltip-bigscreen-adjust">\r\n    <span\r\n      class="po-icon po-field-icon po-icon-info"\r\n      [p-tooltip]="pHint"\r\n      p-tooltip-position="right"\r\n    >\r\n    </span>\r\n  </div>\r\n</div>\r\n',
      styles: ["@media (min-width: 1367px){.tooltip-bigscreen-adjust{padding-left:0}}\n"]
    }]
  }], () => [{
    type: ProRoleLookupService
  }], {
    parent: [{
      type: Input
    }],
    roleSetted: [{
      type: Output
    }],
    pLabel: [{
      type: Input,
      args: ["p-label"]
    }],
    pHint: [{
      type: Input,
      args: ["p-hint"]
    }],
    columns: [{
      type: Input,
      args: ["pro-columns"]
    }],
    pDisabled: [{
      type: Input,
      args: ["p-disabled"]
    }]
  });
})();
var ProRoleLookupModule = class _ProRoleLookupModule {
  static {
    this.\u0275fac = function ProRoleLookupModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProRoleLookupModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProRoleLookupModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProRoleLookupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule],
      declarations: [ProRoleLookupComponent],
      exports: [ProRoleLookupComponent]
    }]
  }], null, null);
})();
var CACHE_KEY$1 = "ProSystemModule";
var ProSystemModuleService = class _ProSystemModuleService {
  constructor(http, advplService, sessionInfoService) {
    this.http = http;
    this.advplService = advplService;
    this.sessionInfoService = sessionInfoService;
    this.url = "/api/framework/v1/systemModules";
    this.useHTTP = true;
    this.EVENT_SET_LIST = "setModulesList";
    this.EVENT_GET_LIST = "getModulesList";
    this.EVENT_SET_ONE = "setModuleInfo";
    this.EVENT_GET_ONE = "getModuleInfo";
  }
  getListOfSystemModules(description = "", page = 1, _pageSize = 10) {
    const pageSize = 100;
    if (this.useHTTP) {
      return this.getListOfSystemModulesFromApi(description, page, pageSize);
    }
    return this.getListOfSystemModulesFromAdvpl(description, page, pageSize);
  }
  getListOfSystemModulesFromApi(description, page, pageSize) {
    let params = new HttpParams().append("page", page.toString()).append("pageSize", pageSize.toString());
    if (description !== "") {
      params = params.append("description", description);
    }
    const headers = new HttpHeaders().append("Accept", "application/json; charset=utf-8");
    return this.http.get(this.url, {
      headers,
      params
    });
  }
  getListOfSystemModulesFromAdvpl(description, page, pageSize) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    const stringContent = JSON.stringify({
      description,
      page,
      pageSize
    });
    return this.advplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: `module ${description} could not be found`
        });
      } else {
        const modulesData = JSON.parse(protheusResponse);
        subscriber.next(modulesData);
      }
      subscriber.complete();
    }, {
      sendInfo: {
        type: this.EVENT_GET_LIST,
        content: stringContent
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_LIST
    });
  }
  getSystemModule(systemModuleId) {
    if (this.useHTTP) {
      return this.getSystemModuleFromAPI(systemModuleId);
    }
    return this.getSystemModuleFromAdvpl(systemModuleId);
  }
  getSystemModuleFromAPI(systemModuleId) {
    const headers = new HttpHeaders().append("Accept", "application/json; charset=utf-8");
    return this.http.get(`${this.url}/${systemModuleId}`, {
      headers
    });
  }
  getSystemModuleFromAdvpl(systemModuleId) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    return this.advplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: `module ${systemModuleId} could not be found`
        });
      } else {
        const moduleData = JSON.parse(protheusResponse);
        subscriber.next(moduleData);
      }
      subscriber.complete();
    }, {
      sendInfo: {
        type: this.EVENT_GET_ONE,
        content: systemModuleId
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_ONE
    });
  }
  /**
   * @description Retorna as informações do módulo logado.
   * @returns ProSystemModules
   */
  get systemModule() {
    const systemModule = this.sessionInfoService.getSystemModule();
    if (systemModule) {
      return systemModule;
    } else {
      return {
        id: "",
        name: "",
        description: ""
      };
    }
  }
  set systemModule(systemModule) {
    sessionStorage[CACHE_KEY$1] = JSON.stringify(systemModule);
  }
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProSystemModuleService"
      });
      subscriber.complete();
    });
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
  }
  static {
    this.\u0275fac = function ProSystemModuleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemModuleService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSystemModuleService,
      factory: _ProSystemModuleService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemModuleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProSystemModuleLookupService = class _ProSystemModuleLookupService {
  constructor(proSystemModuleService) {
    this.proSystemModuleService = proSystemModuleService;
    this.useHTTP = environment.useHTTP;
    this.changeServiceChannel();
  }
  getFilteredItems(params) {
    return this.proSystemModuleService.getListOfSystemModules(params.filter, params.page, params.pageSize);
  }
  getObjectByValue(moduleId) {
    this.setSystemModule({
      id: moduleId
    });
    return this.proSystemModuleService.getSystemModule(moduleId);
  }
  setSystemModule(systemModule) {
    this.proSystemModuleService.systemModule = systemModule;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
    this.changeServiceChannel();
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  changeServiceChannel() {
    this.proSystemModuleService.setChannelAsHTTP(this.useHTTP);
  }
  static {
    this.\u0275fac = function ProSystemModuleLookupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemModuleLookupService)(\u0275\u0275inject(ProSystemModuleService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSystemModuleLookupService,
      factory: _ProSystemModuleLookupService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemModuleLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProSystemModuleService
  }], null);
})();
var ProSystemModuleLookupComponent = class _ProSystemModuleLookupComponent {
  constructor(service) {
    this.service = service;
    this.systeModuleSetted = new EventEmitter();
  }
  fieldFormat(value) {
    return `${value.id}`;
  }
  setSystemModule(systemModule) {
    this.parent.patchValue({
      environment_description: systemModule.description
    });
    this.service.setSystemModule(systemModule);
    this.systeModuleSetted.emit(systemModule);
  }
  static {
    this.\u0275fac = function ProSystemModuleLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemModuleLookupComponent)(\u0275\u0275directiveInject(ProSystemModuleLookupService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProSystemModuleLookupComponent,
      selectors: [["pro-system-module-lookup"]],
      inputs: {
        parent: "parent",
        pLabel: [0, "p-label", "pLabel"],
        pDisabled: [0, "p-disabled", "pDisabled"],
        pHint: [0, "p-hint", "pHint"],
        columns: [0, "pro-columns", "columns"]
      },
      outputs: {
        systeModuleSetted: "systeModuleSetted"
      },
      standalone: false,
      decls: 5,
      vars: 7,
      consts: [[1, "po-page-login-info-container", 3, "formGroup"], ["name", "environment_code", "formControlName", "environment_code", "p-field-label", "id", "p-field-value", "id", 1, "po-md-6", 3, "p-selected", "p-label", "p-disabled", "p-columns", "p-field-format", "p-filter-service"], ["name", "environment_description", "formControlName", "environment_description", "p-label", "\xA0", "p-disabled", "true", 1, "po-md-6"], [1, "po-page-login-info-icon-container", "tooltip-bigscreen-adjust"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", 3, "p-tooltip"]],
      template: function ProSystemModuleLookupComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "po-lookup", 1);
          \u0275\u0275listener("p-selected", function ProSystemModuleLookupComponent_Template_po_lookup_p_selected_1_listener($event) {
            return ctx.setSystemModule($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(2, "po-input", 2);
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("formGroup", ctx.parent);
          \u0275\u0275advance();
          \u0275\u0275property("p-label", ctx.pLabel)("p-disabled", ctx.pDisabled)("p-columns", ctx.columns)("p-field-format", ctx.fieldFormat)("p-filter-service", ctx.service);
          \u0275\u0275advance(3);
          \u0275\u0275property("p-tooltip", ctx.pHint);
        }
      },
      dependencies: [NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PoInputComponent, PoLookupComponent, PoTooltipDirective],
      styles: [_c02]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemModuleLookupComponent, [{
    type: Component,
    args: [{
      selector: "pro-system-module-lookup",
      standalone: false,
      template: '<div [formGroup]="parent" class="po-page-login-info-container">\r\n  <po-lookup\r\n    class="po-md-6"\r\n    name="environment_code"\r\n    formControlName="environment_code"\r\n    p-field-label="id"\r\n    p-field-value="id"\r\n    [p-label]="pLabel"\r\n    [p-disabled]="pDisabled"\r\n    [p-columns]="columns"\r\n    [p-field-format]="fieldFormat"\r\n    [p-filter-service]="service"\r\n    (p-selected)="setSystemModule($event)"\r\n  >\r\n  </po-lookup>\r\n  <po-input\r\n    class="po-md-6"\r\n    name="environment_description"\r\n    formControlName="environment_description"\r\n    p-label="&nbsp;"\r\n    p-disabled="true"\r\n  >\r\n  </po-input>\r\n  <div class="po-page-login-info-icon-container tooltip-bigscreen-adjust">\r\n    <span\r\n      class="po-icon po-field-icon po-icon-info"\r\n      [p-tooltip]="pHint"\r\n      p-tooltip-position="right"\r\n    >\r\n    </span>\r\n  </div>\r\n</div>\r\n',
      styles: ["@media (min-width: 1367px){.tooltip-bigscreen-adjust{padding-left:0}}\n"]
    }]
  }], () => [{
    type: ProSystemModuleLookupService
  }], {
    parent: [{
      type: Input
    }],
    systeModuleSetted: [{
      type: Output
    }],
    pLabel: [{
      type: Input,
      args: ["p-label"]
    }],
    pDisabled: [{
      type: Input,
      args: ["p-disabled"]
    }],
    pHint: [{
      type: Input,
      args: ["p-hint"]
    }],
    columns: [{
      type: Input,
      args: ["pro-columns"]
    }]
  });
})();
var ProSystemModuleLookupModule = class _ProSystemModuleLookupModule {
  static {
    this.\u0275fac = function ProSystemModuleLookupModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemModuleLookupModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProSystemModuleLookupModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemModuleLookupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, PoFieldModule, PoTooltipModule],
      declarations: [ProSystemModuleLookupComponent],
      exports: [ProSystemModuleLookupComponent]
    }]
  }], null, null);
})();
var ProFieldsModule = class _ProFieldsModule {
  static {
    this.\u0275fac = function ProFieldsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProFieldsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProFieldsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [ProCompanyLookupModule, ProBranchLookupModule, ProRoleLookupModule, ProSystemModuleLookupModule, ProCompanyLookupModule, ProBranchLookupModule, ProRoleLookupModule, ProSystemModuleLookupModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProFieldsModule, [{
    type: NgModule,
    args: [{
      imports: [ProCompanyLookupModule, ProBranchLookupModule, ProRoleLookupModule, ProSystemModuleLookupModule],
      exports: [ProCompanyLookupModule, ProBranchLookupModule, ProRoleLookupModule, ProSystemModuleLookupModule]
    }]
  }], null, null);
})();
var ProHomeComponent = class _ProHomeComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ProHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProHomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProHomeComponent,
      selectors: [["pro-home"]],
      standalone: false,
      decls: 2,
      vars: 0,
      template: function ProHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "p");
          \u0275\u0275text(1, " home works!\n");
          \u0275\u0275elementEnd();
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProHomeComponent, [{
    type: Component,
    args: [{
      selector: "pro-home",
      standalone: false,
      template: "<p>\r\n  home works!\r\n</p>\r\n"
    }]
  }], () => [], null);
})();
var ProHomeModule = class _ProHomeModule {
  static {
    this.\u0275fac = function ProHomeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProHomeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProHomeModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProHomeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ProHomeComponent],
      exports: [ProHomeComponent]
    }]
  }], null, null);
})();
var CACHE_KEY_USER = "ProUser";
var USER_ENDPOINT = "/api/framework/v1/users";
var ProUserInfoService = class _ProUserInfoService {
  constructor(http, advplService) {
    this.http = http;
    this.advplService = advplService;
    this.useHTTP = true;
    this.EVENT_GET_ID = "getUserInfo";
    this.EVENT_SET_ID = "setUserInfo";
    this.URL_PSWRET = "/api/framework/v1/basicProtheusServices/pswret/";
  }
  /**
   * @description Retorna informações do usuário
   * @param userId string, id do usuário
   * @param isUseHttp boolean, indica se utiliza requisição http
   * @returns Observable de ProUserInfo, dados do usuário
   */
  get(userId, isUseHttp = false) {
    if (this.useHTTP || isUseHttp) {
      return this.getFromApi(userId);
    }
    return this.getFromAdvpl(userId);
  }
  getFromApi(userId) {
    const headers = new HttpHeaders().append("X-Totvs-No-Error", "true").append("Accept", "application/json; charset=utf-8");
    return this.http.get(`${USER_ENDPOINT}/${userId}`, {
      headers
    }).pipe(map((userInfo) => {
      userInfo.complete_name = userInfo.userName;
      return userInfo;
    }), tap((userInfo) => {
      sessionStorage[CACHE_KEY_USER] = JSON.stringify(userInfo);
    }));
  }
  getFromAdvpl(userId) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    const randomEventId = this.advplService.generateEventId();
    const observableParams = {
      sendInfo: {
        type: `${this.EVENT_GET_ID}#id#${randomEventId}`,
        content: userId
      },
      autoDestruct: true,
      receiveId: `${this.EVENT_SET_ID}#id#${randomEventId}`
    };
    const observableCallback = ({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: `user ${userId} could not be found`
        });
      } else {
        const userInfo = JSON.parse(protheusResponse);
        userInfo.complete_name = userInfo.userName;
        sessionStorage[CACHE_KEY_USER] = JSON.stringify(protheusResponse);
        subscriber.next(userInfo);
      }
      subscriber.complete();
    };
    return this.advplService.buildObservable(observableCallback, observableParams);
  }
  removeFromStorage() {
    sessionStorage.removeItem(CACHE_KEY_USER);
  }
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProUserInfoService"
        /**
         * Esse erro está sendo emitido ao utilizar o app com a otimização ligada e a opção de SSO.
         * O que foi percebido é que em determinada situação a conexão AdvPL
         * não fica disponível quando o serviço é solicitado. Foram feitos testes adicionando
         * múltiplas tentativas mas sem sucesso. Utilizando a opção de canal HTTP funciona corretamente,
         * porém interfere na criação de dicionários do lado AdvPL, o que torna a opção inviável.
         */
      });
      subscriber.complete();
    });
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
  }
  /**
   * efetua um get na api referente a função PswRet do protheus
   * a api utiliza o usuário logado para efetuar a busca
   * @returns Observable com o retorno da api
   */
  pswRet() {
    return this.http.get(this.URL_PSWRET);
  }
  static {
    this.\u0275fac = function ProUserInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProUserInfoService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProUserInfoService,
      factory: _ProUserInfoService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProUserInfoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }], null);
})();
var HAS_SECURITY = "/api/framework/mfa/hasSecret";
var VALID_TOKEN = "/api/framework/mfa/tok";
var GET_QRCODE = "/api/framework/mfa/TOTPURI";
var ProMfaService = class _ProMfaService {
  constructor(http, advplService) {
    this.http = http;
    this.advplService = advplService;
    this.isHTTP = true;
    this.hasMFA = false;
    this.isValidToken = false;
    this.isSigaCfg = false;
  }
  /**
   * @description Atribui valor para hasMFA.
   * @param hasMFA boolean, indica se o usuário possui MFA habilitado.
   */
  setHasMFA(hasMFA) {
    this.hasMFA = hasMFA;
  }
  /**
   * @description Retorna o atributo hasMFA.
   * @returns boolean, indica se o usuário possui MFA habilitado.
   */
  getHasMFA() {
    return this.hasMFA;
  }
  /**
   * @description Atribui valor para isValidToken.
   * @param isValid boolean, indica se o token MFA é válido.
   */
  setIsValidToken(isValid) {
    this.isValidToken = isValid;
  }
  /**
   * @description Retorna o atributo isValidToken.
   * @returns boolean, indica se o token MFA é válido.
   */
  getIsValidToken() {
    return this.isValidToken;
  }
  /**
   * @description Atribui valor para isSigaCfg.
   * @param isCfg boolean, indica se o login está sendo feito no módulo SIGACFG.
   */
  setIsSigaCfg(isCfg) {
    this.isSigaCfg = isCfg;
  }
  /**
   * @description Retorna o atributo isSigaCfg.
   * @returns boolean, indica se o login está sendo feito no módulo SIGACFG.
   */
  getIsSigaCfg() {
    return this.isSigaCfg;
  }
  /**
   * @description
   * Serviço que verifica se o usuário já possui MFA registrado.
   * @return Json da interface ProMfaHasSecretInterface
   */
  userHasMfaSecurity() {
    if (!this.isHTTP && this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (this.validResponse(protheusResponse, subscriber)) {
          const hasSecret = JSON.parse(protheusResponse);
          subscriber.next(hasSecret);
        }
        subscriber.complete();
      }, this.getJsToAdvplSend("hasSecret", "", "hasSecret"));
    } else {
      return this.http.get(HAS_SECURITY);
    }
  }
  /**
   * @description
   * Serviço que retorna os dados para geração do Qr Code
   * @return Json da interface ProMfaQrCodeInterface
   */
  getMfaQrCode() {
    if (!this.isHTTP && this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (this.validResponse(protheusResponse, subscriber)) {
          const mfaQrCode = JSON.parse(protheusResponse);
          subscriber.next(mfaQrCode);
        }
        subscriber.complete();
      }, this.getJsToAdvplSend("mfaQrCode", "", "mfaQrCode"));
    } else {
      return this.http.get(GET_QRCODE);
    }
  }
  /**
   * @description
   * Serviço que valida o token informado.
   * @param tokenMfa, token informado pelo usuário
   * @return Json da interface ProMfaValidCodeInterface
   */
  getMfaValid(tokenMfa) {
    if (!this.isHTTP && this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (this.validResponse(protheusResponse, subscriber)) {
          const mfaValidCode = JSON.parse(protheusResponse);
          subscriber.next(mfaValidCode);
        }
        subscriber.complete();
      }, this.getJsToAdvplSend("mfaValidCode", tokenMfa, "mfaValidCode"));
    } else {
      let parameters = new HttpParams().append("token", tokenMfa);
      return this.http.get(VALID_TOKEN, {
        params: parameters
      });
    }
  }
  /**
   * @description Valida se está no módulo SIGACFG.
   * @return Observable boolean
   */
  isSIGACFG() {
    if (!this.isHTTP || this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (this.validResponse(protheusResponse, subscriber)) {
          const mfaIsConfig = JSON.parse(protheusResponse);
          subscriber.next(mfaIsConfig.isConfig);
        }
        subscriber.complete();
      }, this.getJsToAdvplSend("isConfig", "", "isConfig"));
    } else {
      return of(false);
    }
  }
  /**
   * @description Metodo apenas para apoio nos testes automatizados
   * @return Informa se se o Http esta ativo
   */
  isChannelHTTP() {
    return this.isHTTP;
  }
  /**
   * @description Muda o parametro de environment para Http
   * @param value, indica o valor a ser atribuido
   */
  setChannelAsHTTP(value) {
    this.isHTTP = value;
  }
  /**
   * @description Validação do response e disparo do evento de erro
   * @param protheusResponse, Response do JsToAdvpl
   * @param subscriber, Subscriber do JsToAdvpl
   * @return Indica se a resposta foi validada
   */
  validResponse(protheusResponse, subscriber) {
    const isValid = !(protheusResponse.length === 0);
    if (!isValid) {
      subscriber.error({
        status: 401
      });
    }
    return isValid;
  }
  /**
   * @description Retorna o objeto sender
   * @param type, Tipo do Sender
   * @param content, Conteudo a ser enviado
   * @param receiveId, Id do evento
   * @param autoDestruct, Indica se realiza a eliminação automatica do objeto
   * @return Objeto Sender
   */
  getJsToAdvplSend(type, content, receiveId, autoDestruct) {
    const sendInfo = {
      sendInfo: {
        type,
        content
      },
      autoDestruct: autoDestruct ?? true,
      receiveId
    };
    return sendInfo;
  }
  static {
    this.\u0275fac = function ProMfaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProMfaService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProMfaService,
      factory: _ProMfaService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProMfaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }], null);
})();
var CACHE_KEY_TOKEN = "ERPTOKEN";
var TOKEN_ENDPOINT = "/api/oauth2/v1/token";
var ProAuthService = class _ProAuthService {
  constructor(http, proUserInfoService, advplService, sessionInfoService, proMfaService) {
    this.http = http;
    this.proUserInfoService = proUserInfoService;
    this.advplService = advplService;
    this.sessionInfoService = sessionInfoService;
    this.proMfaService = proMfaService;
    this.proUserInfoService.setChannelAsHTTP(environment.useHTTP);
  }
  requestLoginDefaults() {
    if (!valueIsNull(this.advplService.getWebChannel())) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (protheusResponse.length === 0) {
          subscriber.next({
            username: "",
            username_when: true,
            password: "",
            remember_user: false,
            show_remember_user: false
          });
        } else {
          const startKeys = JSON.parse(protheusResponse);
          subscriber.next(startKeys);
        }
        subscriber.complete();
      }, {
        sendInfo: {
          type: "getLoginStart"
        },
        autoDestruct: true
      });
    } else {
      return new Observable((subscriber) => {
        subscriber.next({
          username: "",
          username_when: true,
          password: "",
          remember_user: false,
          show_remember_user: false
        });
        subscriber.complete();
      });
    }
  }
  requestToken(user) {
    if (this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (protheusResponse.length === 0) {
          subscriber.error({
            status: 401
          });
        } else {
          const tokenInside = JSON.parse(protheusResponse);
          subscriber.next(tokenInside);
        }
        subscriber.complete();
      }, {
        sendInfo: {
          type: "loginInside",
          content: btoa(JSON.stringify({
            "usr": user.username,
            "psw": user.password,
            "remember": user.remember_user
          }))
        },
        autoDestruct: true,
        receiveId: "setToken"
      });
    } else {
      const headers = new HttpHeaders().append("X-Totvs-No-Error", "true").set("grant_type", "password").set("username", user.username).set("password", user.password);
      return this.http.post(TOKEN_ENDPOINT, {}, {
        headers
      });
    }
  }
  refreshToken(refresh_token) {
    const params = new HttpParams().set("grant_type", "refresh_token").set("refresh_token", refresh_token);
    return this.http.post(TOKEN_ENDPOINT, {}, {
      params
    });
  }
  login(user) {
    const loginSubject = new Subject();
    this.requestToken(user).subscribe({
      next: (token) => {
        const userId = this.getTokenPayload(token.access_token).userid;
        this.saveToken(token);
        this.saveUserInfo(userId);
        loginSubject.next(token);
      },
      error: (error) => {
        loginSubject.error(error);
      }
    });
    return loginSubject.asObservable();
  }
  passwordRecovery(user) {
    this.advplService.jsToAdvpl("openPasswordRecovery", user);
  }
  saveToken(token) {
    this.sessionInfoService.setErpToken(token);
    sessionStorage[CACHE_KEY_TOKEN] = JSON.stringify(token);
  }
  saveUserInfo(userId) {
    this.proUserInfoService.get(userId).subscribe((userInfo) => {
      this._ProUserInfo = userInfo;
    });
  }
  isTokenValid(now = Date.now()) {
    const date_now = Math.round(now / 1e3);
    const payload = this.getTokenPayload(this.token.access_token);
    return payload.exp - date_now > this.token.expires_in / 10;
  }
  updateToken() {
    return __async(this, null, function* () {
      const token = yield this.refreshToken(this.token.refresh_token).toPromise();
      this.saveToken(token);
      this._token = token;
    });
  }
  get userInfo() {
    return this._ProUserInfo;
  }
  /**
   * @description Retorna o token de autenticação gerado.
   */
  get token() {
    const token_string = this.sessionInfoService.getErpToken();
    if (token_string) {
      this._token = token_string;
    }
    return this._token;
  }
  get isUserAuthenticate() {
    return !valueIsNull(this.token) && !valueIsNull(this.token.access_token);
  }
  /**
   * @description Realiza a limpeza do token ao realizar o logout.
   */
  logout() {
    this.proMfaService.setIsValidToken(false);
    this.sessionInfoService.setErpToken(void 0);
    sessionStorage.removeItem(CACHE_KEY_TOKEN);
    this.proUserInfoService.removeFromStorage();
  }
  getTokenPayload(token = this.token.access_token) {
    return JSON.parse(atob(token.split(".")[1]));
  }
  get userId() {
    return this.getTokenPayload().userid;
  }
  /**
   * @description
   * Exibir a mensagem de confirmação de Autenticação.
   */
  showLoginMessage() {
    if (this.advplService.protheusConnected()) {
      this.advplService.jsToAdvpl("showLoginMessage", "");
    }
  }
  static {
    this.\u0275fac = function ProAuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProUserInfoService), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProSessionInfoService), \u0275\u0275inject(ProMfaService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProAuthService,
      factory: _ProAuthService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProUserInfoService
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProSessionInfoService
  }, {
    type: ProMfaService
  }], null);
})();
var ProLoginDefaultsResolver = class _ProLoginDefaultsResolver {
  constructor(proAuthService) {
    this.proAuthService = proAuthService;
  }
  resolve(_route, _state) {
    return this.proAuthService.requestLoginDefaults();
  }
  static {
    this.\u0275fac = function ProLoginDefaultsResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProLoginDefaultsResolver)(\u0275\u0275inject(ProAuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProLoginDefaultsResolver,
      factory: _ProLoginDefaultsResolver.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProLoginDefaultsResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProAuthService
  }], null);
})();
var ProMessageService = class _ProMessageService {
  constructor(poNotificationService, advplService) {
    this.poNotificationService = poNotificationService;
    this.advplService = advplService;
    if (this.advplService.protheusConnected()) {
      this.advplService.buildListener("showMessage", ({
        protheusResponse
      }) => {
        if (protheusResponse.length === 0) {
          return;
        } else {
          const messageObject = JSON.parse(protheusResponse);
          this.showMessage(messageObject.message, messageObject.type);
        }
      });
    }
  }
  // Método criado para evitar que sejam exibidas duas mensagens para o usuário (uma do Angular e outra do Protheus)
  showOneMessage(message, type = 2) {
    if (!this.advplService.protheusConnected()) {
      this.showMessage(message, type);
    }
  }
  /**
   * @description Exibe uma mensagem via notificação
   * @param message Mensagem
   * @param type Tipo da mensage, como erro, informação etc
   */
  showMessage(message, type = 2) {
    const notification = {
      message,
      orientation: PoToasterOrientation.Top
    };
    if (type === 1) {
      this.poNotificationService.warning(notification);
    }
    if (type === 2) {
      this.poNotificationService.error(notification);
    }
    if (type === 3) {
      this.poNotificationService.information(notification);
    }
  }
  /**
   * @description Executa a mudança do idioma no Protheus via Observable do advplService
   * @param language idioma escolhido via po-select
   * @returns Observable de boolean da confirmação da troca do idioma no BackEnd
   */
  changeLanguage(language) {
    if (this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (protheusResponse !== "true") {
          subscriber.error({
            status: 400,
            description: "language could not be changed"
          });
        } else {
          subscriber.next();
        }
        subscriber.complete();
      }, {
        sendInfo: {
          type: "changeLanguage",
          content: language
        },
        autoDestruct: true,
        receiveId: "changeLanguage"
      });
    }
  }
  static {
    this.\u0275fac = function ProMessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProMessageService)(\u0275\u0275inject(PoNotificationService), \u0275\u0275inject(ProJsToAdvplService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProMessageService,
      factory: _ProMessageService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PoNotificationService
  }, {
    type: ProJsToAdvplService
  }], null);
})();
var ProThemeTotvsLight = {
  "--color-brand-01-lightest": "#d7f0fe",
  "--color-brand-01-lighter": "#9cd8fc",
  "--color-brand-01-light": "#6bc5fa",
  "--color-brand-01-base": "#045b8f",
  "--color-brand-01-dark": "#013f65",
  "--color-brand-01-darker": "#002944",
  "--color-brand-01-darkest": "#00182b",
  "--color-action-default": "#045b8f",
  "--color-action-hover": "#013f65",
  "--color-action-pressed": "#002944",
  "--color-action-disabled": "#b2b2b2",
  "--color-action-focus": "#00182b",
  "--color-neutral-light-00": "#ffffff",
  "--color-neutral-light-05": "#f2f2f2",
  "--color-neutral-light-10": "#e5e5e5",
  "--color-neutral-light-20": "#cccccc",
  "--color-neutral-light-30": "#b2b2b2",
  "--color-neutral-mid-40": "#999999",
  "--color-neutral-mid-60": "#666666",
  "--color-neutral-dark-70": "#4d4d4d",
  "--color-neutral-dark-80": "#363636",
  "--color-neutral-dark-90": "#1a1a1a",
  "--color-neutral-dark-95": "#0d0d0d",
  "--color-brand-02-base": "#045b8f",
  "--color-brand-03-base": "#045b8f",
  "--color-feedback-negative-lightest": "#f6e6e5",
  "--color-feedback-negative-lighter": "#e3aeab",
  "--color-feedback-negative-light": "#d58581",
  "--color-feedback-negative-base": "#be3e37",
  "--color-feedback-negative-dark": "#9b2d27",
  "--color-feedback-negative-darker": "#72211d",
  "--color-feedback-negative-darkerst": "#4a1512",
  "--color-feedback-info-lightest": "#e3e9f7",
  "--color-feedback-info-lighter": "#b0c1e8",
  "--color-feedback-info-light": "#7996d7",
  "--color-feedback-info-base": "#23489f",
  "--color-feedback-info-dark": "#173782",
  "--color-feedback-info-darker": "#0f2557",
  "--color-feedback-info-darkerst": "#081536",
  "--color-feedback-positive-lightest": "#def7ed",
  "--color-feedback-positive-lighter": "#7ecead",
  "--color-feedback-positive-light": "#41b483",
  "--color-feedback-positive-base": "#107048",
  "--color-feedback-positive-dark": "#0f5236",
  "--color-feedback-positive-darker": "#083a25",
  "--color-feedback-positive-darkerst": "#002415",
  "--color-feedback-warning-lightest": "#fcf6e3",
  "--color-feedback-warning-lighter": "#f7dd97",
  "--color-feedback-warning-light": "#f1cd6a",
  "--color-feedback-warning-base": "#efba2a",
  "--color-feedback-warning-dark": "#d8a20e",
  "--color-feedback-warning-darker": "#705200",
  "--color-feedback-warning-darkerst": "#473400"
};
var ProThemeTotvsDark = {
  "--color-brand-01-lightest": "#051f31",
  "--color-brand-01-lighter": "#004064",
  "--color-brand-01-light": "#00659a",
  "--color-brand-01-base": "#0079b8",
  "--color-brand-01-dark": "#3dadfa",
  "--color-brand-01-darker": "#afd3fa",
  "--color-brand-01-darkest": "#e3eefb",
  "--color-action-default": "#3dadfa",
  "--color-action-hover": "#afd3fa",
  "--color-action-pressed": "#e3eefb",
  "--color-action-disabled": "#7c7c7c",
  "--color-action-focus": "#e3eefb",
  "--color-neutral-light-00": "#1c1c1c",
  "--color-neutral-light-05": "#202020",
  "--color-neutral-light-10": "#2b2b2b",
  "--color-neutral-light-20": "#3b3b3b",
  "--color-neutral-light-30": "#5a5a5a",
  "--color-neutral-mid-40": "#7c7c7c",
  "--color-neutral-mid-60": "#a1a1a1",
  "--color-neutral-dark-70": "#c1c1c1",
  "--color-neutral-dark-80": "#d9d9d9",
  "--color-neutral-dark-90": "#eeeeee",
  "--color-neutral-dark-95": "#fbfbfb",
  "--color-brand-02-base": "#3dadfa",
  "--color-brand-03-base": "#3dadfa",
  "--color-feedback-negative-lightest": "#4a1512",
  "--color-feedback-negative-lighter": "#72211d",
  "--color-feedback-negative-light": "#9b2d27",
  "--color-feedback-negative-base": "#be3e37",
  "--color-feedback-negative-dark": "#d58581",
  "--color-feedback-negative-darker": "#e3aeab",
  "--color-feedback-negative-darkerst": "#f6e6e5",
  "--color-feedback-info-lightest": "#081536",
  "--color-feedback-info-lighter": "#0f2557",
  "--color-feedback-info-light": "#173782",
  "--color-feedback-info-base": "#23489f",
  "--color-feedback-info-dark": "#7996d7",
  "--color-feedback-info-darker": "#b0c1e8",
  "--color-feedback-info-darkerst": "#e3e9f7",
  "--color-feedback-positive-lightest": "#002415",
  "--color-feedback-positive-lighter": "#083a25",
  "--color-feedback-positive-light": "#0f5236",
  "--color-feedback-positive-base": "#107048",
  "--color-feedback-positive-dark": "#41b483",
  "--color-feedback-positive-darker": "#7ecead",
  "--color-feedback-positive-darkerst": "#def7ed",
  "--color-feedback-warning-lightest": "#473400",
  "--color-feedback-warning-lighter": "#705200",
  "--color-feedback-warning-light": "#d8a20e",
  "--color-feedback-warning-base": "#efba2a",
  "--color-feedback-warning-dark": "#f1cd6a",
  "--color-feedback-warning-darker": "#f7dd97",
  "--color-feedback-warning-darkerst": "#fcf6e3"
};
var ProThemeSunsetLight = {
  "--color-brand-01-lightest": "#ffebee",
  "--color-brand-01-lighter": "#ef9a9a",
  "--color-brand-01-light": "#ef5350",
  "--color-brand-01-base": "#c20c18",
  "--color-brand-01-dark": "#a5131a",
  "--color-brand-01-darker": "#5d0d11",
  "--color-brand-01-darkest": "#400a08",
  "--color-action-default": "#c20c18",
  "--color-action-hover": "#a5131a",
  "--color-action-pressed": "#5d0d11",
  "--color-action-disabled": "#b2b2b2",
  "--color-action-focus": "#400a08",
  "--color-neutral-light-00": "#ffffff",
  "--color-neutral-light-05": "#f2f2f2",
  "--color-neutral-light-10": "#e5e5e5",
  "--color-neutral-light-20": "#cccccc",
  "--color-neutral-light-30": "#b2b2b2",
  "--color-neutral-mid-40": "#999999",
  "--color-neutral-mid-60": "#666666",
  "--color-neutral-dark-70": "#4d4d4d",
  "--color-neutral-dark-80": "#363636",
  "--color-neutral-dark-90": "#1a1a1a",
  "--color-neutral-dark-95": "#0d0d0d",
  "--color-brand-02-base": "#c20c18",
  "--color-brand-03-base": "#c20c18",
  "--color-feedback-negative-lightest": "#f1e8fd",
  "--color-feedback-negative-lighter": "#d691e1",
  "--color-feedback-negative-light": "#ba6bcd",
  "--color-feedback-negative-base": "#7b1fa2",
  "--color-feedback-negative-dark": "#4a148c",
  "--color-feedback-negative-darker": "#3e166f",
  "--color-feedback-negative-darkerst": "#1e0a36",
  "--color-feedback-info-lightest": "#e3e9f7",
  "--color-feedback-info-lighter": "#b0c1e8",
  "--color-feedback-info-light": "#7996d7",
  "--color-feedback-info-base": "#23489f",
  "--color-feedback-info-dark": "#173782",
  "--color-feedback-info-darker": "#0f2557",
  "--color-feedback-info-darkerst": "#081536",
  "--color-feedback-positive-lightest": "#def7ed",
  "--color-feedback-positive-lighter": "#7ecead",
  "--color-feedback-positive-light": "#41b483",
  "--color-feedback-positive-base": "#107048",
  "--color-feedback-positive-dark": "#0f5236",
  "--color-feedback-positive-darker": "#083a25",
  "--color-feedback-positive-darkerst": "#002415",
  "--color-feedback-warning-lightest": "#fcf6e3",
  "--color-feedback-warning-lighter": "#f7dd97",
  "--color-feedback-warning-light": "#f1cd6a",
  "--color-feedback-warning-base": "#efba2a",
  "--color-feedback-warning-dark": "#d8a20e",
  "--color-feedback-warning-darker": "#705200",
  "--color-feedback-warning-darkerst": "#473400"
};
var ProThemeEnum;
(function(ProThemeEnum2) {
  ProThemeEnum2["proThemeTotvsClassic"] = "proThemeTotvsClassic";
  ProThemeEnum2["proThemeTotvsSunset"] = "proThemeTotvsSunset";
})(ProThemeEnum || (ProThemeEnum = {}));
var ProTheme = class {
  constructor() {
    this._name = "";
    this._type = this.getTypeStructure();
    this._active = PoThemeTypeEnum.light;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get active() {
    return this._active;
  }
  set active(active) {
    this._active = active;
  }
  get type() {
    return this._type;
  }
  set type(type) {
    this._type = type;
  }
  /**
   * @description Método para consultar quais são os temas disponíveis para configuração
   * automática, sendo uma lista de opções do ProThemeEnum
   */
  availableThemes() {
    const themes = Object.values(ProThemeEnum);
    return themes;
  }
  /**
   * @description Método para configurar o tema atual do aplicativo
   *
   */
  setTheme(theme) {
    let _theme;
    switch (theme) {
      case ProThemeEnum.proThemeTotvsClassic:
        _theme = new ProThemeTotvsClassic();
        break;
      case ProThemeEnum.proThemeTotvsSunset:
        _theme = new ProThemeTotvsSunset();
        break;
    }
    this.name = _theme.name;
    this.active = _theme.active;
    this.type = _theme.type;
  }
  /**
   * @description Método para devolver a estrutura solicitada do PoTheme para configuração
   * do aplicativo
   */
  getTypeStructure() {
    return {
      light: {
        color: {
          brand: {
            "01": {
              lightest: "",
              lighter: "",
              light: "",
              base: "",
              dark: "",
              darker: "",
              darkest: ""
            },
            "02": {
              base: ""
            },
            "03": {
              base: ""
            }
          },
          action: __spreadValues({}, poThemeDefaultActions),
          feedback: __spreadProps(__spreadValues({}, poThemeDefaultFeedback), {
            info: __spreadProps(__spreadValues({}, poThemeDefaultFeedback.info), {
              base: ""
            })
          }),
          neutral: __spreadValues({}, poThemeDefaultNeutrals)
        }
      },
      dark: {
        color: {
          brand: {
            "01": {
              lightest: "",
              lighter: "",
              light: "",
              base: "",
              dark: "",
              darker: "",
              darkest: ""
            },
            "02": {
              base: ""
            },
            "03": {
              base: ""
            }
          },
          action: {
            default: "",
            hover: "",
            pressed: "",
            disabled: "",
            focus: ""
          },
          feedback: __spreadProps(__spreadValues({}, poThemeDefaultFeedback), {
            info: __spreadProps(__spreadValues({}, poThemeDefaultFeedback.info), {
              base: ""
            })
          }),
          neutral: {
            light: {
              "00": "",
              "05": "",
              "10": "",
              "20": "",
              "30": ""
            },
            mid: {
              "40": "",
              "60": ""
            },
            dark: {
              "70": "",
              "80": "",
              "90": "",
              "95": ""
            }
          }
        }
      }
    };
  }
};
var ProThemeTotvsClassic = class extends ProTheme {
  constructor() {
    super();
    this.name = "proThemeTotvsClassic";
    this.type = this.getProThemeTotvsClassic();
  }
  getProThemeTotvsClassic() {
    return {
      light: this.getProThemeTotvsClassicTokensDark(),
      dark: this.getProThemeTotvsClassicTokensLight()
    };
  }
  getProThemeTotvsClassicTokensLight() {
    return {
      color: {
        brand: {
          "01": {
            lightest: ProThemeTotvsDark["--color-brand-01-lightest"],
            lighter: ProThemeTotvsDark["--color-brand-01-lighter"],
            light: ProThemeTotvsDark["--color-brand-01-light"],
            base: ProThemeTotvsDark["--color-brand-01-base"],
            dark: ProThemeTotvsDark["--color-brand-01-dark"],
            darker: ProThemeTotvsDark["--color-brand-01-darker"],
            darkest: ProThemeTotvsDark["--color-brand-01-darkest"]
          },
          "02": {
            base: ProThemeTotvsDark["--color-brand-01-dark"]
          },
          "03": {
            base: ProThemeTotvsDark["--color-brand-01-dark"]
          }
        },
        action: {
          default: ProThemeTotvsDark["--color-action-default"],
          hover: ProThemeTotvsDark["--color-action-hover"],
          pressed: ProThemeTotvsDark["--color-action-pressed"],
          disabled: ProThemeTotvsDark["--color-action-disabled"],
          focus: ProThemeTotvsDark["--color-action-focus"]
        },
        neutral: {
          light: {
            "10": ProThemeTotvsDark["--color-neutral-light-10"],
            "20": ProThemeTotvsDark["--color-neutral-light-20"],
            "30": ProThemeTotvsDark["--color-neutral-light-30"],
            "00": ProThemeTotvsDark["--color-neutral-light-00"],
            "05": ProThemeTotvsDark["--color-neutral-light-05"]
          },
          mid: {
            "40": ProThemeTotvsDark["--color-neutral-mid-40"],
            "60": ProThemeTotvsDark["--color-neutral-mid-60"]
          },
          dark: {
            "70": ProThemeTotvsDark["--color-neutral-dark-70"],
            "80": ProThemeTotvsDark["--color-neutral-dark-80"],
            "90": ProThemeTotvsDark["--color-neutral-dark-90"],
            "95": ProThemeTotvsDark["--color-neutral-dark-95"]
          }
        },
        feedback: {
          info: {
            base: ProThemeTotvsDark["--color-feedback-info-base"],
            lightest: ProThemeTotvsDark["--color-feedback-info-lightest"],
            lighter: ProThemeTotvsDark["--color-brand-info-lighter"],
            light: ProThemeTotvsDark["--color-feedback-info-light"],
            dark: ProThemeTotvsDark["--color-feedback-info-dark"],
            darker: ProThemeTotvsDark["--color-feedback-info-darker"],
            darkest: ProThemeTotvsDark["--color-feedback-info-darkerst"]
          },
          negative: {
            base: ProThemeTotvsDark["--color-feedback-negative-base"],
            lightest: ProThemeTotvsDark["--color-feedback-negative-lightest"],
            lighter: ProThemeTotvsDark["--color-brand-negative-lighter"],
            light: ProThemeTotvsDark["--color-feedback-negative-light"],
            dark: ProThemeTotvsDark["--color-feedback-negative-dark"],
            darker: ProThemeTotvsDark["--color-feedback-negative-darker"],
            darkest: ProThemeTotvsDark["--color-feedback-negative-darkerst"]
          },
          positive: {
            base: ProThemeTotvsDark["--color-feedback-positive-base"],
            lightest: ProThemeTotvsDark["--color-feedback-positive-lightest"],
            lighter: ProThemeTotvsDark["--color-brand-positive-lighter"],
            light: ProThemeTotvsDark["--color-feedback-positive-light"],
            dark: ProThemeTotvsDark["--color-feedback-positive-dark"],
            darker: ProThemeTotvsDark["--color-feedback-positive-darker"],
            darkest: ProThemeTotvsDark["--color-feedback-positive-darkerst"]
          },
          warning: {
            base: ProThemeTotvsDark["--color-feedback-warning-base"],
            lightest: ProThemeTotvsDark["--color-feedback-warning-lightest"],
            lighter: ProThemeTotvsDark["--color-brand-warning-lighter"],
            light: ProThemeTotvsDark["--color-feedback-warning-light"],
            dark: ProThemeTotvsDark["--color-feedback-warning-dark"],
            darker: ProThemeTotvsDark["--color-feedback-warning-darker"],
            darkest: ProThemeTotvsDark["--color-feedback-warning-darkerst"]
          }
        }
      },
      onRoot: __spreadProps(__spreadValues({}, poThemeDefaultDarkValues.onRoot), {
        "--color-toolbar-color-default": ProThemeTotvsDark["--color-brand-01-dark"],
        "--color-widget-color-action": ProThemeTotvsDark["--color-brand-01-dark"],
        "--color-neutral": ProThemeTotvsDark["--color-neutral-dark-70"],
        "--color-secondary": ProThemeTotvsDark["--color-action-default"],
        "--color-secondary-light-20": ProThemeTotvsDark["--color-brand-01-lighter"],
        "--color-secondary-light-40": ProThemeTotvsDark["--color-brand-01-light"],
        "--color-secondary-dark-20": ProThemeTotvsDark["--color-brand-01-dark"],
        "--color-secondary-dark-40": ProThemeTotvsDark["--color-brand-01-darker"],
        "--color-secondary-dark-80": ProThemeTotvsDark["--color-brand-01-darkest"],
        "--color-primary": ProThemeTotvsDark["--color-brand-02-base"],
        "--color-primary-light-80": "color-mix(in srgb, " + ProThemeTotvsDark["--color-brand-02-base"] + " 80%, black)",
        "--color-primary-light-95": "color-mix(in srgb, " + ProThemeTotvsDark["--color-brand-02-base"] + " 95%, black)",
        "--color-primary-alpha-50": "color-mix(in srgb, " + ProThemeTotvsDark["--color-brand-02-base"] + " 50%, white)",
        "--color-primary-dark-20": "color-mix(in srgb, " + ProThemeTotvsDark["--color-brand-02-base"] + " 20%, white)",
        "--color-primary-dark-40": "color-mix(in srgb, " + ProThemeTotvsDark["--color-brand-02-base"] + " 40%, white)",
        "--color-secondary-dark-60-alpha-70": "color-mix(in srgb, " + ProThemeTotvsDark["--color-neutral-mid-60"] + " 70%, white)",
        "--color-tertiary-light-90": "color-mix(in srgb, " + ProThemeTotvsDark["--color-brand-03-base"] + " 90%, black)",
        "--color-tertiary-dark-5": "color-mix(in srgb, " + ProThemeTotvsDark["--color-brand-03-base"] + " 5%, white)",
        "--color-calendar-background-color-box-background-range": ProThemeTotvsDark["--color-brand-01-lightest"],
        "--font-family-theme": "NunitoSans, sans-serif",
        "--font-family-theme-bold": "NunitoSans-Bold, sans-serif",
        "--font-family-theme-extra-light": "NunitoSans-ExtraLight, sans-serif",
        "--font-family-heading": "NunitoSans, sans-serif",
        "--font-family-code": "Monospace",
        "--font-family": "NunitoSans, sans-serif"
      }),
      perComponent: __spreadProps(__spreadValues({}, poThemeDefaultDarkValues.perComponent), {
        "po-popup po-item-list": {
          "--color": ProThemeTotvsDark["--color-brand-01-dark"]
        }
      })
    };
  }
  getProThemeTotvsClassicTokensDark() {
    return {
      color: {
        brand: {
          "01": {
            lightest: ProThemeTotvsLight["--color-brand-01-lightest"],
            lighter: ProThemeTotvsLight["--color-brand-01-lighter"],
            light: ProThemeTotvsLight["--color-brand-01-light"],
            base: ProThemeTotvsLight["--color-brand-01-base"],
            dark: ProThemeTotvsLight["--color-brand-01-dark"],
            darker: ProThemeTotvsLight["--color-brand-01-darker"],
            darkest: ProThemeTotvsLight["--color-brand-01-darkest"]
          },
          "02": {
            base: ProThemeTotvsLight["--color-brand-02-base"]
          },
          "03": {
            base: ProThemeTotvsLight["--color-brand-03-base"]
          }
        },
        action: {
          default: ProThemeTotvsLight["--color-action-default"],
          hover: ProThemeTotvsLight["--color-action-hover"],
          pressed: ProThemeTotvsLight["--color-action-pressed"],
          disabled: ProThemeTotvsLight["--color-action-disabled"],
          focus: ProThemeTotvsLight["--color-action-focus"]
        },
        neutral: {
          light: {
            "10": ProThemeTotvsLight["--color-neutral-light-10"],
            "20": ProThemeTotvsLight["--color-neutral-light-20"],
            "30": ProThemeTotvsLight["--color-neutral-light-30"],
            "00": ProThemeTotvsLight["--color-neutral-light-00"],
            "05": ProThemeTotvsLight["--color-neutral-light-05"]
          },
          mid: {
            "40": ProThemeTotvsLight["--color-neutral-mid-40"],
            "60": ProThemeTotvsLight["--color-neutral-mid-60"]
          },
          dark: {
            "70": ProThemeTotvsLight["--color-neutral-dark-70"],
            "80": ProThemeTotvsLight["--color-neutral-dark-80"],
            "90": ProThemeTotvsLight["--color-neutral-dark-90"],
            "95": ProThemeTotvsLight["--color-neutral-dark-95"]
          }
        },
        feedback: {
          info: {
            base: ProThemeTotvsLight["--color-feedback-info-base"],
            lightest: ProThemeTotvsLight["--color-feedback-info-lightest"],
            lighter: ProThemeTotvsLight["--color-brand-info-lighter"],
            light: ProThemeTotvsLight["--color-feedback-info-light"],
            dark: ProThemeTotvsLight["--color-feedback-info-dark"],
            darker: ProThemeTotvsLight["--color-feedback-info-darker"],
            darkest: ProThemeTotvsLight["--color-feedback-info-darkerst"]
          },
          negative: {
            base: ProThemeTotvsLight["--color-feedback-negative-base"],
            lightest: ProThemeTotvsLight["--color-feedback-negative-lightest"],
            lighter: ProThemeTotvsLight["--color-brand-negative-lighter"],
            light: ProThemeTotvsLight["--color-feedback-negative-light"],
            dark: ProThemeTotvsLight["--color-feedback-negative-dark"],
            darker: ProThemeTotvsLight["--color-feedback-negative-darker"],
            darkest: ProThemeTotvsLight["--color-feedback-negative-darkerst"]
          },
          positive: {
            base: ProThemeTotvsLight["--color-feedback-positive-base"],
            lightest: ProThemeTotvsLight["--color-feedback-positive-lightest"],
            lighter: ProThemeTotvsLight["--color-brand-positive-lighter"],
            light: ProThemeTotvsLight["--color-feedback-positive-light"],
            dark: ProThemeTotvsLight["--color-feedback-positive-dark"],
            darker: ProThemeTotvsLight["--color-feedback-positive-darker"],
            darkest: ProThemeTotvsLight["--color-feedback-positive-darkerst"]
          },
          warning: {
            base: ProThemeTotvsLight["--color-feedback-warning-base"],
            lightest: ProThemeTotvsLight["--color-feedback-warning-lightest"],
            lighter: ProThemeTotvsLight["--color-brand-warning-lighter"],
            light: ProThemeTotvsLight["--color-feedback-warning-light"],
            dark: ProThemeTotvsLight["--color-feedback-warning-dark"],
            darker: ProThemeTotvsLight["--color-feedback-warning-darker"],
            darkest: ProThemeTotvsLight["--color-feedback-warning-darkerst"]
          }
        }
      },
      onRoot: __spreadProps(__spreadValues({}, poThemeDefaultLightValues.onRoot), {
        "--color-toolbar-color-default": ProThemeTotvsLight["--color-brand-02-base"],
        "--color-widget-color-action": ProThemeTotvsLight["--color-brand-02-base"],
        "--color-neutral": ProThemeTotvsLight["--color-neutral-dark-70"],
        "--color-secondary": ProThemeTotvsLight["--color-brand-01-base"],
        "--color-secondary-light-20": ProThemeTotvsLight["--color-brand-01-lighter"],
        "--color-secondary-light-40": ProThemeTotvsLight["--color-brand-01-light"],
        "--color-secondary-dark-20": ProThemeTotvsLight["--color-brand-01-dark"],
        "--color-secondary-dark-40": ProThemeTotvsLight["--color-brand-01-darker"],
        "--color-secondary-dark-80": ProThemeTotvsLight["--color-brand-01-darkest"],
        "--color-primary": ProThemeTotvsLight["--color-brand-02-base"],
        "--color-primary-light-80": "color-mix(in srgb, " + ProThemeTotvsLight["--color-brand-02-base"] + " 80%, white)",
        "--color-primary-light-95": "color-mix(in srgb, " + ProThemeTotvsLight["--color-brand-02-base"] + " 95%, white)",
        "--color-primary-alpha-50": "color-mix(in srgb, " + ProThemeTotvsLight["--color-brand-02-base"] + " 50%, black)",
        "--color-primary-dark-20": "color-mix(in srgb, " + ProThemeTotvsLight["--color-brand-02-base"] + " 20%, black)",
        "--color-primary-dark-40": "color-mix(in srgb, " + ProThemeTotvsLight["--color-brand-02-base"] + " 40%, black)",
        "--color-secondary-dark-60-alpha-70": "color-mix(in srgb, " + ProThemeTotvsLight["--color-neutral-mid-60"] + " 70%, black)",
        "--color-tertiary-light-90": "color-mix(in srgb, " + ProThemeTotvsLight["--color-brand-03-base"] + " 90%, white)",
        "--color-tertiary-dark-5": "color-mix(in srgb, " + ProThemeTotvsLight["--color-brand-03-base"] + " 5%, black)",
        "--color-calendar-background-color-box-background-range": ProThemeTotvsLight["--color-brand-01-lightest"],
        "--font-family-theme": "NunitoSans, sans-serif",
        "--font-family-theme-bold": "NunitoSans-Bold, sans-serif",
        "--font-family-theme-extra-light": "NunitoSans-ExtraLight, sans-serif",
        "--font-family-heading": "NunitoSans, sans-serif",
        "--font-family-code": "Monospace",
        "--font-family": "NunitoSans, sans-serif"
      }),
      perComponent: __spreadProps(__spreadValues({}, poThemeDefaultLightValues.perComponent), {
        "po-popup po-item-list": {
          "--color": ProThemeTotvsLight["--color-brand-02-base"]
        }
      })
    };
  }
};
var ProThemeTotvsSunset = class extends ProTheme {
  constructor() {
    super();
    this.name = "proThemeTotvsSunset";
    this.type = this.getProThemeTotvsSunset();
  }
  getProThemeTotvsSunset() {
    return {
      light: this.getProThemeTotvsSunsetTokensLight()
    };
  }
  getProThemeTotvsSunsetTokensLight() {
    return {
      color: {
        brand: {
          "01": {
            lightest: ProThemeSunsetLight["--color-brand-01-lightest"],
            lighter: ProThemeSunsetLight["--color-brand-01-lighter"],
            light: ProThemeSunsetLight["--color-brand-01-light"],
            base: ProThemeSunsetLight["--color-brand-01-base"],
            dark: ProThemeSunsetLight["--color-brand-01-dark"],
            darker: ProThemeSunsetLight["--color-brand-01-darker"],
            darkest: ProThemeSunsetLight["--color-brand-01-darkest"]
          },
          "02": {
            base: ProThemeSunsetLight["--color-brand-02-base"]
          },
          "03": {
            base: ProThemeSunsetLight["--color-brand-03-base"]
          }
        },
        action: {
          default: ProThemeSunsetLight["--color-action-default"],
          hover: ProThemeSunsetLight["--color-action-hover"],
          pressed: ProThemeSunsetLight["--color-action-pressed"],
          disabled: ProThemeSunsetLight["--color-action-disabled"],
          focus: ProThemeSunsetLight["--color-action-focus"]
        },
        neutral: {
          light: {
            "10": ProThemeSunsetLight["--color-neutral-light-10"],
            "20": ProThemeSunsetLight["--color-neutral-light-20"],
            "30": ProThemeSunsetLight["--color-neutral-light-30"],
            "00": ProThemeSunsetLight["--color-neutral-light-00"],
            "05": ProThemeSunsetLight["--color-neutral-light-05"]
          },
          mid: {
            "40": ProThemeSunsetLight["--color-neutral-mid-40"],
            "60": ProThemeSunsetLight["--color-neutral-mid-60"]
          },
          dark: {
            "70": ProThemeSunsetLight["--color-neutral-dark-70"],
            "80": ProThemeSunsetLight["--color-neutral-dark-80"],
            "90": ProThemeSunsetLight["--color-neutral-dark-90"],
            "95": ProThemeSunsetLight["--color-neutral-dark-95"]
          }
        },
        feedback: {
          info: {
            base: ProThemeSunsetLight["--color-feedback-info-base"],
            lightest: ProThemeSunsetLight["--color-feedback-info-lightest"],
            lighter: ProThemeSunsetLight["--color-brand-info-lighter"],
            light: ProThemeSunsetLight["--color-feedback-info-light"],
            dark: ProThemeSunsetLight["--color-feedback-info-dark"],
            darker: ProThemeSunsetLight["--color-feedback-info-darker"],
            darkest: ProThemeSunsetLight["--color-feedback-info-darkerst"]
          },
          negative: {
            base: ProThemeSunsetLight["--color-feedback-negative-base"],
            lightest: ProThemeSunsetLight["--color-feedback-negative-lightest"],
            lighter: ProThemeSunsetLight["--color-brand-negative-lighter"],
            light: ProThemeSunsetLight["--color-feedback-negative-light"],
            dark: ProThemeSunsetLight["--color-feedback-negative-dark"],
            darker: ProThemeSunsetLight["--color-feedback-negative-darker"],
            darkest: ProThemeSunsetLight["--color-feedback-negative-darkerst"]
          },
          positive: {
            base: ProThemeSunsetLight["--color-feedback-positive-base"],
            lightest: ProThemeSunsetLight["--color-feedback-positive-lightest"],
            lighter: ProThemeSunsetLight["--color-brand-positive-lighter"],
            light: ProThemeSunsetLight["--color-feedback-positive-light"],
            dark: ProThemeSunsetLight["--color-feedback-positive-dark"],
            darker: ProThemeSunsetLight["--color-feedback-positive-darker"],
            darkest: ProThemeSunsetLight["--color-feedback-positive-darkerst"]
          },
          warning: {
            base: ProThemeSunsetLight["--color-feedback-warning-base"],
            lightest: ProThemeSunsetLight["--color-feedback-warning-lightest"],
            lighter: ProThemeSunsetLight["--color-brand-warning-lighter"],
            light: ProThemeSunsetLight["--color-feedback-warning-light"],
            dark: ProThemeSunsetLight["--color-feedback-warning-dark"],
            darker: ProThemeSunsetLight["--color-feedback-warning-darker"],
            darkest: ProThemeSunsetLight["--color-feedback-warning-darkerst"]
          }
        }
      },
      onRoot: __spreadProps(__spreadValues({}, poThemeDefaultLightValues.onRoot), {
        "--color-toolbar-color-default": ProThemeSunsetLight["--color-brand-02-base"],
        "--color-widget-color-action": ProThemeSunsetLight["--color-brand-02-base"],
        "--color-neutral": ProThemeSunsetLight["--color-neutral-dark-70"],
        "--color-secondary": ProThemeSunsetLight["--color-brand-01-base"],
        "--color-secondary-light-20": ProThemeSunsetLight["--color-brand-01-lighter"],
        "--color-secondary-light-40": ProThemeSunsetLight["--color-brand-01-light"],
        "--color-secondary-dark-20": ProThemeSunsetLight["--color-brand-01-dark"],
        "--color-secondary-dark-40": ProThemeSunsetLight["--color-brand-01-darker"],
        "--color-secondary-dark-80": ProThemeSunsetLight["--color-brand-01-darkest"],
        "--color-primary": ProThemeSunsetLight["--color-brand-02-base"],
        "--color-primary-light-80": "color-mix(in srgb, " + ProThemeSunsetLight["--color-brand-02-base"] + " 80%, white)",
        "--color-primary-light-95": "color-mix(in srgb, " + ProThemeSunsetLight["--color-brand-02-base"] + " 95%, white)",
        "--color-primary-alpha-50": "color-mix(in srgb, " + ProThemeSunsetLight["--color-brand-02-base"] + " 50%, black)",
        "--color-primary-dark-20": "color-mix(in srgb, " + ProThemeSunsetLight["--color-brand-02-base"] + " 20%, black)",
        "--color-primary-dark-40": "color-mix(in srgb, " + ProThemeSunsetLight["--color-brand-02-base"] + " 40%, black)",
        "--color-secondary-dark-60-alpha-70": "color-mix(in srgb, " + ProThemeSunsetLight["--color-neutral-mid-60"] + " 70%, black)",
        "--color-tertiary-light-90": "color-mix(in srgb, " + ProThemeSunsetLight["--color-brand-03-base"] + " 90%, white)",
        "--color-tertiary-dark-5": "color-mix(in srgb, " + ProThemeSunsetLight["--color-brand-03-base"] + " 5%, black)",
        "--color-calendar-background-color-box-background-range": ProThemeSunsetLight["--color-brand-01-lightest"],
        "--font-family-theme": "NunitoSans, sans-serif",
        "--font-family-theme-bold": "NunitoSans-Bold, sans-serif",
        "--font-family-theme-extra-light": "NunitoSans-ExtraLight, sans-serif",
        "--font-family-heading": "NunitoSans, sans-serif",
        "--font-family-code": "Monospace",
        "--font-family": "NunitoSans, sans-serif"
      }),
      perComponent: __spreadProps(__spreadValues({}, poThemeDefaultLightValues.perComponent), {
        "po-popup po-item-list": {
          "--color": ProThemeSunsetLight["--color-brand-02-base"]
        }
      })
    };
  }
};
var ProUserProfileService = class _ProUserProfileService {
  constructor(http, poI18nService) {
    this.http = http;
    this.poI18nService = poI18nService;
    this.URL_PROFILE = "/api/framework/v1/profileService/";
    this.programName = "";
    this.task = "";
    this.type = "";
    this.isReady = false;
    const language = this.poI18nService.getShortLanguage();
    poI18nService.getLiterals({
      language,
      context: "general"
    }).subscribe((literals) => {
      this.literals = literals;
    });
  }
  /**
   * Metodo para definir o profile a ser utilizado
   * antes de utilizar qualquer metodo de CRUD é necessário definir o profile por esse metodo.
   * @param programName Nome do programa a ser usado no profile
   * @param task Nome da tarefa a ser utilizado no profile
   * @param type Tipo a ser utilizado no profile
   */
  setProfile(programName, task, type) {
    this.programName = programName;
    this.task = task;
    this.type = type;
    this.isReady = true;
  }
  /**
   * Cria um novo registro no profile
   * (profile a ser gravado definido pelo metodo setProfile)
   * @param value Valor a ser gravado no profile
   * @returns Observable com o retorno da api
   */
  create(value) {
    const profileBody = this.getRequisitionBody(value);
    if (this.isReady) {
      return this.http.post(this.URL_PROFILE, profileBody);
    } else {
      return this.profileNotReady();
    }
  }
  /**
   * Busca o valor de uma chave salva no profile
   * (profile a ser gravado definido pelo metodo setProfile)
   * @param defaultValue Valor padrão a ser retornado caso não exista o profile na base
   * @param respType tipo a ser retornado, podendo ser apenas json ou text
   * @returns Observable com o retorno da api
   */
  read(defaultValue = "", respType = "json") {
    if (this.isReady) {
      let acceptHeader = "application/json";
      if (respType != "json") {
        respType = "text";
        acceptHeader = "text/plain";
      }
      const params = new HttpParams().set("defaultValue", defaultValue);
      const headers = new HttpHeaders().set("Accept", acceptHeader);
      return this.http.get(this.getUrlApi(), {
        responseType: respType,
        params,
        headers
      });
    } else {
      return this.profileNotReady();
    }
  }
  /**
   * Atualiza um registro no profile
   * (profile a ser gravado definido pelo metodo setProfile)
   * @param value Valor a ser gravado no profile
   * @returns Observable com o retorno da api
   */
  update(value) {
    const profileBody = this.getRequisitionBody(value);
    if (this.isReady) {
      return this.http.put(this.getUrlApi(), profileBody);
    } else {
      return this.profileNotReady();
    }
  }
  /**
   * Deleta um registro no profile
   * @returns Observable com o retorno da api
   */
  delete() {
    if (this.isReady) {
      return this.http.delete(this.getUrlApi());
    } else {
      return this.profileNotReady();
    }
  }
  /**
   * Deleta e cria um registro no profile
   * esse metodo pode substituir o uso do metodo create e update em alguns casos
   * (profile a ser gravado definido pelo metodo setProfile)
   * @param value Valor a ser gravado no profile
   * @returns Observable com o retorno da api
   */
  deleteThenCreate(value) {
    if (this.isReady) {
      return this.http.delete(this.getUrlApi()).pipe(catchError(() => {
        return of(this.http.post(this.URL_PROFILE, this.getRequisitionBody(value)));
      }), switchMap(() => this.http.post(this.URL_PROFILE, this.getRequisitionBody(value))));
    } else {
      return this.profileNotReady();
    }
  }
  /**
   * Observable para apresentar um erro para o usuário caso utilize algum metodo de CRUD
   * sem utilizar o setProfile antes
   * @returns Observable com erro
   */
  profileNotReady() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        message: this.literals.str0001
        // 'Para utilizar esse serviço é preciso definir o profile a ser utilizado pelo método setProfile'
      });
      subscriber.complete();
    });
  }
  /**
   * retorna a composição da url da api, com os path param necessários
   * @returns url completa da api
   */
  getUrlApi() {
    return `${this.URL_PROFILE}${this.programName}/${this.task}/${this.type}`;
  }
  /**
   * body para ser utilizado no post e update da api de profile
   * @param value Valor a ser gravado no profile
   * @returns o body a ser utilizado
   */
  getRequisitionBody(value) {
    const profileBody = {
      programName: this.programName,
      task: this.task,
      type: this.type,
      value
    };
    return profileBody;
  }
  static {
    this.\u0275fac = function ProUserProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProUserProfileService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(PoI18nService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProUserProfileService,
      factory: _ProUserProfileService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProUserProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: PoI18nService
  }], null);
})();
var literalsEnUS$3 = {
  str0001: "Protheus Line",
  str0002: "User or password not valid.",
  str0003: "Unable to connect with server.",
  str0004: "A problem occurred in Login attempt",
  str0005: "Enter your user",
  str0006: "Ex. sp01\\name.lastname",
  str0007: "Enter your password",
  str0008: "This is an example with domain//user; however, depending on configuration, the user name may have another format.",
  str0009: "Associate Protheus user with Operational System user",
  str0010: "Support"
};
var literalsEsES$3 = {
  str0001: "L\xEDnea Protheus",
  str0002: "Usuario o contrase\xF1a no v\xE1lida.",
  str0003: "No fue posible establecer conexi\xF3n con el servidor.",
  str0004: "Ocurri\xF3 un problema al intentar el Login",
  str0005: "Incluya su usuario",
  str0006: "Ej. sp01\\nombre.apellido",
  str0007: "Incluya su contrase\xF1a",
  str0008: "Este es un ejemplo con dominio\\usuario, sin embargo, dependiendo de la configuraci\xF3n, el nombre del usuario puede tener otro formato.",
  str0009: "Vincule usuario del Protheus al usuario del sistema operativo",
  str0010: "Soporte"
};
var literalsPtBR$3 = {
  str0001: "Linha Protheus",
  str0002: "Usu\xE1rio ou senha inv\xE1lida.",
  str0003: "N\xE3o foi poss\xEDvel estabelecer conex\xE3o com o servidor.",
  str0004: "Ocorreu um problema na tentativa de Login",
  str0005: "Insira seu usu\xE1rio",
  str0006: "Ex. sp01\\nome.sobrenome",
  str0007: "Insira sua senha",
  str0008: "Este \xE9 um exemplo com dominio\\usuario, por\xE9m dependendo da configura\xE7\xE3o, o nome de usu\xE1rio pode ter outro formato.",
  str0009: "Associar usu\xE1rio do Protheus com usu\xE1rio do Sistema Operacional",
  str0010: "Suporte"
};
var literalsRuRU$3 = {
  str0001: "\u041B\u0438\u043D\u0438\u044F #_PRODUCT_#",
  str0002: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B.",
  str0003: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443.",
  str0004: "\u041F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
  str0005: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
  str0006: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, sp01\u0438\u043C\u044F.\u0444\u0430\u043C\u0438\u043B\u0438\u044F",
  str0007: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
  str0008: "\u042D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440 \u0441 \u0434\u043E\u043C\u0435\u043D\u043E\u043C//\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C; \u043E\u0434\u043D\u0430\u043A\u043E, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043C\u043E\u0436\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442.",
  str0009: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F Proteus \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B",
  str0010: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430"
};
var literalsEnUS$2 = {
  str0001: "Checking MFA",
  str0002: "To continue, enter the code generated by the authentication application.",
  str0003: "If you lose your device, contact the system administrator.",
  str0004: "CODE",
  str0005: "1. Scan the QR Code below in the MFA application of your choice:",
  str0006: '2. Enter below the MFA token generated in the application and click "Register"',
  str0007: "Register",
  str0008: "MFA Token not valid. Enter it again or contact the System Administrator.",
  str0009: "MFA Token successfully validated",
  str0010: "MFA Token successfully registered.",
  str0011: "Enter",
  str0012: "Back"
};
var literalsEsES$2 = {
  str0001: "Verificando MFA",
  str0002: "Para continuar es necesario incluir el c\xF3digo generado por la aplicaci\xF3n de autenticaci\xF3n.",
  str0003: "Si perdiera su dispositivo, entre en contacto con el administrador del sistema.",
  str0004: "C\xD3DIGO",
  str0005: "1. Escanear el siguiente QR Code en la aplicaci\xF3n MFA de su preferencia:",
  str0006: '2. Digite a continuaci\xF3n el token MFA generado en la aplicaci\xF3n y haga clic en "Registrar"',
  str0007: "Registrar",
  str0008: "Token MFA no v\xE1lido, digite nuevamente o entre en contacto con el Administrador del Sistema.",
  str0009: "Token MFA validado con \xE9xito",
  str0010: "Token MFA registrado con \xE9xito.",
  str0011: "Entrar",
  str0012: "Volver"
};
var literalsPtBR$2 = {
  str0001: "Verificando MFA",
  str0002: "Para continuar \xE9 necess\xE1rio inserir o c\xF3digo gerado pelo aplicativo de autentica\xE7\xE3o.",
  str0003: "Em caso de perda do dispositivo, entrar em contato com o administrador do sistema.",
  str0004: "C\xD3DIGO",
  str0005: "1. Escanear o QR Code abaixo no aplicativo MFA de sua prefer\xEAncia:",
  str0006: '2. Digite abaixo o token MFA gerado no aplicativo e clique em "Registrar"',
  str0007: "Registrar",
  str0008: "Token MFA inv\xE1lido, digite novamente ou entre em contato com o Administrador do Sistema.",
  str0009: "Token MFA validado com sucesso.",
  str0010: "Token MFA registrado com sucesso.",
  str0011: "Entrar",
  str0012: "Voltar"
};
var literalsRuRU$2 = {
  str0001: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 MFA",
  str0002: "\u0414\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434, \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
  str0003: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u0442\u0435\u0440\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u043C\u0443 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443.",
  str0004: "\u041A\u043E\u0434",
  str0005: "1. \u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0439 \u043D\u0438\u0436\u0435 QR-\u043A\u043E\u0434 \u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u0432\u0430\u043C\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 MFA:",
  str0006: "2. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0442\u043E\u043A\u0435\u043D MFA \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\xBB",
  str0007: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",
  str0008: "\u0422\u043E\u043A\u0435\u043D MFA \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043E \u0435\u0449\u0435 \u0440\u0430\u0437 \u0438\u043B\u0438 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u043C\u0443 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443",
  str0009: "\u0422\u043E\u043A\u0435\u043D MFA \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D",
  str0010: "\u0422\u043E\u043A\u0435\u043D MFA \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D",
  str0011: "\u0412\u043E\u0439\u0442\u0438",
  str0012: "\u041D\u0430\u0437\u0430\u0434"
};
var literalsEnUS$1 = {
  str0001: "Protheus Line",
  str0002: "Choose a system base date.",
  str0003: "After enabling it, you can restore this option on the system menu (Miscellaneous/SingleSignOn Users).",
  str0004: "Support",
  str0005: "Use the information above in all sessions.",
  str0006: "Loading...",
  str0007: "Enter",
  str0008: "Back",
  str0009: "Welcome, {0}.",
  str0010: "Group",
  str0011: "Select Group of Companies.",
  str0012: "Branch",
  str0013: "Select Branch.",
  str0014: "Environment",
  str0015: "Select system module.",
  str0016: "Work role",
  str0017: "Select a work role.",
  str0018: "Base Date",
  str0019: "Form not valid",
  str0020: "Code",
  str0021: "Description",
  str0022: "Name",
  str0023: "Start with last session information.",
  str0024: "Unable to prepare printer. ",
  str0025: "Trade name",
  str0026: "EIN",
  str0027: "Company",
  str0028: "Unit",
  str0029: "Enable dark mode",
  str0030: "Disable dark mode"
};
var literalsEsES$1 = {
  str0001: "L\xEDnea Protheus",
  str0002: "Seleccione la fecha base del sistema.",
  str0003: "Despu\xE9s de habilitar, usted puede restaurar esta opci\xF3n en el men\xFA del sistema (Miscel\xE1nea/Usuarios SingleSignOn).",
  str0004: "Soporte",
  str0005: "Utilizar las informaciones anteriores en todas las sesiones.",
  str0006: "Cargando....",
  str0007: "Entrar",
  str0008: "Volver",
  str0009: "Bienvenida, {0}.",
  str0010: "Grupo",
  str0011: "Seleccione el Grupo de empresas.",
  str0012: "Sucursal",
  str0013: "Seleccione la sucursal.",
  str0014: "Entorno",
  str0015: "Seleccione el m\xF3dulo del sistema.",
  str0016: "Papel de trabajo",
  str0017: "Seleccione un Papel de trabajo.",
  str0018: "Fecha base",
  str0019: "Formulario no v\xE1lido",
  str0020: "C\xF3digo",
  str0021: "Descripci\xF3n",
  str0022: "Nombre",
  str0023: "Iniciar con la informaci\xF3n de la \xFAltima sesi\xF3n.",
  str0024: "No se pudo enviar la requisici\xF3n. Por favor, intente nuevamente.",
  str0025: "Nombre comercial",
  str0026: "RCPJ",
  str0027: "Empresa",
  str0028: "Unidad",
  str0029: "Activar modo escuro",
  str0030: "Desactivar modo escuro"
};
var literalsPtBR$1 = {
  str0001: "Linha Protheus",
  str0002: "Escolha a data base do sistema.",
  str0003: "Ap\xF3s habilitado, voc\xEA pode restaurar essa op\xE7\xE3o no menu do sistema(Miscelanea/Usu\xE1rios SingleSignOn).",
  str0004: "Suporte",
  str0005: "Usar as informa\xE7\xF5es acima em todas as sess\xF5es.",
  str0006: "Carregando...",
  str0007: "Entrar",
  str0008: "Voltar",
  str0009: "Boas-vindas, {0}.",
  str0010: "Grupo",
  str0011: "Selecione o Grupo de Empresas.",
  str0012: "Filial",
  str0013: "Selecione a Filial.",
  str0014: "Ambiente",
  str0015: "Selecione o m\xF3dulo do sistema.",
  str0016: "Papel de trabalho",
  str0017: "Selecione um Papel de trabalho.",
  str0018: "Data base",
  str0019: "Formul\xE1rio inv\xE1lido",
  str0020: "C\xF3digo",
  str0021: "Descri\xE7\xE3o",
  str0022: "Nome",
  str0023: "Iniciar com as informa\xE7\xF5es da \xFAltima sess\xE3o.",
  str0024: "N\xE3o foi poss\xEDvel enviar a requisi\xE7\xE3o. Por favor, tente novamente.",
  str0025: "Nome comercial",
  str0026: "CNPJ",
  str0027: "Empresa",
  str0028: "Unidade",
  str0029: "Ativar modo escuro",
  str0030: "Desativar modo escuro"
};
var literalsRuRU$1 = {
  str0001: "\u041B\u0438\u043D\u0438\u044F Protheus",
  str0002: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u0437\u043E\u0432\u0443\u044E \u0434\u0430\u0442\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.",
  str0003: "After enabling it, you can restore this option on the system menu (Miscellaneous/SingleSignOn Users).",
  str0004: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
  str0005: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u0443\u044E \u0432\u044B\u0448\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0432\u043E \u0432\u0441\u0435\u0445 \u0441\u0435\u0430\u043D\u0441\u0430\u0445.",
  str0006: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
  str0007: "\u0412\u0432\u043E\u0434",
  str0008: "\u041D\u0430\u0437\u0430\u0434",
  str0009: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, {0}.",
  str0010: "\u0413\u0440\u0443\u043F\u043F\u0430",
  str0011: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0413\u0440\u0443\u043F\u043F\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439.",
  str0012: "\u0424\u0438\u043B\u0438\u0430\u043B",
  str0013: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0424\u0438\u043B\u0438\u0430\u043B.",
  str0014: "\u0421\u0440\u0435\u0434\u0430",
  str0015: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C.",
  str0016: "\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u0440\u043E\u043B\u044C",
  str0017: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0447\u0443\u044E \u0440\u043E\u043B\u044C.",
  str0018: "\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0434\u0430\u0442\u0430",
  str0019: "\u0424\u043E\u0440\u043C\u0430 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u0430",
  str0020: "\u041A\u043E\u0434",
  str0021: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
  str0022: "\u0418\u043C\u044F",
  str0023: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C \u0441\u0435\u0430\u043D\u0441\u0435.",
  str0024: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043D\u0442\u0435\u0440.",
  str0025: "\u0422\u043E\u0440\u0433\u043E\u0432\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",
  str0026: "\u0418\u041D\u041D/\u041A\u041F\u041F",
  str0027: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
  str0028: "\u0424\u0438\u043B\u0438\u0430\u043B",
  str0029: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
  str0030: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"
};
var literalsEnUS = {
  str0001: "Para utilizar esse servi\xE7o \xE9 preciso definir o profile a ser utilizado pelo m\xE9todo setProfile"
};
var literalsEsES = {
  str0001: "Para utilizar esse servi\xE7o \xE9 preciso definir o profile a ser utilizado pelo m\xE9todo setProfile"
};
var literalsPtBR = {
  str0001: "Para utilizar esse servi\xE7o \xE9 preciso definir o profile a ser utilizado pelo m\xE9todo setProfile"
};
var literalsRuRU = {
  str0001: ""
};
var i18nConfig2 = {
  default: {
    language: "pt",
    context: "general",
    cache: true
  },
  contexts: {
    login: {
      en: literalsEnUS$3,
      es: literalsEsES$3,
      pt: literalsPtBR$3,
      ru: literalsRuRU$3
    },
    session: {
      en: literalsEnUS$1,
      es: literalsEsES$1,
      pt: literalsPtBR$1,
      ru: literalsRuRU$1
    },
    profileService: {
      en: literalsEnUS,
      es: literalsEsES,
      pt: literalsPtBR,
      ru: literalsRuRU
    },
    mfa: {
      en: literalsEnUS$2,
      es: literalsEsES$2,
      pt: literalsPtBR$2,
      ru: literalsRuRU$2
    },
    general: {}
  }
};
var ProI18nConfigModule = class _ProI18nConfigModule {
  static {
    this.\u0275fac = function ProI18nConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProI18nConfigModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProI18nConfigModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [PoI18nModule.config(i18nConfig2)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProI18nConfigModule, [{
    type: NgModule,
    args: [{
      imports: [PoI18nModule.config(i18nConfig2)]
    }]
  }], null, null);
})();
var ProUserProfileModule = class _ProUserProfileModule {
  static {
    this.\u0275fac = function ProUserProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProUserProfileModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProUserProfileModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, ProI18nConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProUserProfileModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, ProI18nConfigModule]
    }]
  }], null, null);
})();
var ProThemeService = class _ProThemeService {
  constructor(poTheme, proJsToAdvplService, proUserProfileService, proSessionInfoService) {
    this.poTheme = poTheme;
    this.proJsToAdvplService = proJsToAdvplService;
    this.proUserProfileService = proUserProfileService;
    this.proSessionInfoService = proSessionInfoService;
    this.proTheme = new ProTheme();
  }
  /**
   * @description Método para configurar o tema do aplicativo com base
   * na configuração da localStorage - ProTheme
   * @param theme ProThemeEnum, tema a ser aplicado
   * @param type PoThemeTypeEnum, tipo do tema
   */
  setTheme(theme, type) {
    const sessionProtheusTheme = this.getProtheusConfig();
    if (theme) {
      this.proTheme.setTheme(theme);
      this.poTheme.setTheme(this.proTheme, type);
    } else {
      switch (sessionProtheusTheme?.Configuration) {
        case 0:
          this.proTheme.setTheme(ProThemeEnum.proThemeTotvsClassic);
          this.poTheme.setTheme(this.proTheme, PoThemeTypeEnum.light);
          break;
        case 1:
          this.proTheme.setTheme(ProThemeEnum.proThemeTotvsClassic);
          this.poTheme.setTheme(this.proTheme, PoThemeTypeEnum.dark);
          break;
        case 2:
          this.proTheme.setTheme(ProThemeEnum.proThemeTotvsSunset);
          this.poTheme.setTheme(this.proTheme, PoThemeTypeEnum.light);
          break;
        default:
          this.proTheme.setTheme(ProThemeEnum.proThemeTotvsClassic);
          this.poTheme.setTheme(this.proTheme, PoThemeTypeEnum.light);
      }
    }
  }
  getProtheusConfig() {
    return this.proSessionInfoService.getTheme();
  }
  /**
   * @description Retorna se o usuário pode habilitar o tema dark.
   * @returns Observable de boolean
   */
  canUseDarkTheme() {
    if (this.proJsToAdvplService.protheusConnected()) {
      return this.checkDarkFromAdvpl();
    } else {
      return of(true);
    }
  }
  /**
   * @description Consulta se pode utilizar o tema dark fazendo a conexão direta com advpl.
   * @returns Observable de boolean
   */
  checkDarkFromAdvpl() {
    return this.proJsToAdvplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.next(false);
      } else {
        if (protheusResponse === "true") {
          subscriber.next(true);
        } else {
          subscriber.next(false);
        }
      }
      subscriber.complete();
    }, {
      autoDestruct: true,
      receiveId: "canUseDarkTheme",
      sendInfo: {
        type: "canUseDarkTheme"
      }
    });
  }
  /**
   * @description Salva no profile do usuário se ele ativou ou desativou o tema dark.
   * @param value string, valor a ser salvo no profile (true/false)
   * @returns Observable de boolean
   */
  setThemeProfile(value) {
    if (this.proJsToAdvplService.protheusConnected()) {
      return this.setThemeProfileFromAdvpl(value);
    } else {
      return this.setThemeProfileFromApi(value);
    }
    ;
  }
  /**
   * @description Salva no profile fazendo a comunicação direta com o Protheus via JsToAdvpl.
   * @param value string, valor a ser salvo no profile (true/false)
   * @returns Observable de boolean
   */
  setThemeProfileFromAdvpl(value) {
    return this.proJsToAdvplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.next(false);
      } else {
        if (protheusResponse === "true") {
          subscriber.next(true);
        } else {
          subscriber.next(false);
        }
      }
      subscriber.complete();
    }, {
      autoDestruct: true,
      receiveId: "setThemeProfile",
      sendInfo: {
        type: "setThemeProfile",
        content: value
      }
    });
  }
  /**
   * @description Salva no profile via api.
   * @param value string, valor a ser salvo no profile (true/false)
   * @returns Observable de boolean
   */
  setThemeProfileFromApi(value) {
    this.proUserProfileService.setProfile("wAPIpLOGIN", "CONFIG", "DARK");
    return this.proUserProfileService.update(value);
  }
  /**
   * @description Retorna o profile do usuário indicando se ele ativou/desativou o tema dark.
   * @returns Observable de boolean
   */
  getThemeProfile() {
    if (this.proJsToAdvplService.protheusConnected()) {
      return this.getThemeProfileFromAdvpl();
    } else {
      return this.getThemeProfileFromApi();
    }
    ;
  }
  /**
   * @description Retorna o profile realização a comunicação direta com o Protheus via JsToAdvpl.
   * @returns Observable de boolean
   */
  getThemeProfileFromAdvpl() {
    return this.proJsToAdvplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.next(false);
      } else {
        if (protheusResponse === "true") {
          subscriber.next(true);
        } else {
          subscriber.next(false);
        }
      }
      subscriber.complete();
    }, {
      autoDestruct: true,
      receiveId: "getDarkUserProfile",
      sendInfo: {
        type: "getDarkUserProfile"
      }
    });
  }
  /**
   * @description Renotar o profile do usuário via api.
   * @returns Observable de boolean
   */
  getThemeProfileFromApi() {
    this.proUserProfileService.setProfile("wAPIpLOGIN", "CONFIG", "DARK");
    return this.proUserProfileService.read("true", "text").pipe(map((response) => response === "true" ? true : false));
  }
  static {
    this.\u0275fac = function ProThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProThemeService)(\u0275\u0275inject(PoThemeService), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProUserProfileService), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProThemeService,
      factory: _ProThemeService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PoThemeService
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProUserProfileService
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProAuthGuard = class _ProAuthGuard {
  constructor(proAuthService, router) {
    this.proAuthService = proAuthService;
    this.router = router;
  }
  canActivate(next, state) {
    const url = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url) {
    if (this.proAuthService.isUserAuthenticate) {
      return true;
    }
    this.proAuthService.redirectUrl = url;
    this.router.navigate(["/login"]);
    return false;
  }
  canActivateChild(route, state) {
    return this.canActivate(route, state);
  }
  canLoad(route) {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }
  static {
    this.\u0275fac = function ProAuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAuthGuard)(\u0275\u0275inject(ProAuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProAuthGuard,
      factory: _ProAuthGuard.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProAuthService
  }, {
    type: Router
  }], null);
})();
var ProAppConfigInteceptor = class _ProAppConfigInteceptor {
  constructor(injector, sessionInfoService) {
    this.injector = injector;
    this.sessionInfoService = sessionInfoService;
  }
  intercept(original_request, next) {
    let requestResult;
    const proAppConfigService = this.injector.get(ProAppConfigService);
    if (original_request.url.search(/assets/) >= 0) {
      requestResult = this.appendPathNameToUrl(original_request);
    } else {
      const isProtheus = proAppConfigService.isProtheusRender;
      if (isProtheus) {
        requestResult = this.appendDomainToUrl(original_request);
      } else {
        requestResult = original_request;
      }
    }
    return next.handle(requestResult);
  }
  /**
   * @description Altera a URL da requisição para acesso aos assets do app
   * @param request Requisição HTTP original
   * @returns Requisição HTTP com a alteração do path, somente para assets
   */
  appendPathNameToUrl(request) {
    const location2 = window.location;
    let appName = this.sessionInfoService.getAppName();
    let clone;
    if (appName === void 0) {
      clone = request.clone();
    } else {
      const requestUrl = request.url.startsWith("/") ? request.url.substring(1) : request.url;
      const newUrl = `${location2.protocol}//${location2.host}/app-root/${appName}/${requestUrl}`;
      const urlWithPathName = appName.includes("_env_") ? this.appendEnvironmentToUrl(location2, appName, newUrl, requestUrl) : newUrl;
      clone = request.clone({
        url: urlWithPathName
      });
    }
    return clone;
  }
  /**
   * @description Inclui o nome do ambiente na URL da requisição que acessa os assets do app
   * @param location Localização atual do app
   * @param appName Nome do app atual
   * @param newUrl URL base montada
   * @param requestUrl URL da requisição original (caminho do /assets)
   * @returns URL alterada com o nome do ambiente
  */
  appendEnvironmentToUrl(location2, appName, newUrl, requestUrl) {
    let urlWithEnvironment = newUrl;
    const locationPathNameEnvironment = this.sessionInfoService.getLocationPathNameEnvironment();
    const appNameArray = appName.split("_env_");
    if (appNameArray?.length > 1) {
      const environment2 = appNameArray[appNameArray.length - 1];
      if (environment2 && locationPathNameEnvironment === environment2) {
        const root = `${environment2}/${appName}`;
        urlWithEnvironment = `${location2.protocol}//${location2.host}/app-root/${root}/${requestUrl}`;
      }
    }
    return urlWithEnvironment;
  }
  /**
   * @description Altera da URL da requisição conforme regras
   * @param request Requisição HTTP Original
   * @returns Requisição HTTP, podendo ter sua URL alterada
   */
  appendDomainToUrl(request) {
    const proAppConfigService = this.injector.get(ProAppConfigService);
    const domain = proAppConfigService.serverWithApiUrl;
    let urlWithDomain = "";
    const lowerUrl = request.url.toLowerCase();
    if (lowerUrl.startsWith("http://") || lowerUrl.startsWith("https://")) {
      urlWithDomain = request.url;
    } else {
      urlWithDomain = `${domain}${request.url}`;
    }
    return request.clone({
      url: urlWithDomain
    });
  }
  static {
    this.\u0275fac = function ProAppConfigInteceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAppConfigInteceptor)(\u0275\u0275inject(Injector), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProAppConfigInteceptor,
      factory: _ProAppConfigInteceptor.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAppConfigInteceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProAppConfigModule = class _ProAppConfigModule {
  static {
    this.\u0275fac = function ProAppConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAppConfigModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProAppConfigModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ProAppConfigInteceptor,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAppConfigModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ProAppConfigInteceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var ProAuthInteceptor = class _ProAuthInteceptor {
  constructor(injector, advplService) {
    this.injector = injector;
    this.advplService = advplService;
  }
  intercept(original_request, next) {
    let requestResult;
    const proAppConfigService = this.injector.get(ProAppConfigService);
    if (this.isUrlNeedsProAuth(original_request.url)) {
      const isProtheus = proAppConfigService.isProtheusRender;
      if (isProtheus) {
        if (this.doIHaveAToken()) {
          requestResult = this.appendTokenToRequest(original_request);
        } else {
          requestResult = this.callTokenFromADVPL(original_request);
        }
      } else {
        return next.handle(original_request);
      }
    } else {
      requestResult = original_request.clone();
    }
    return next.handle(requestResult).pipe(catchError((error, caught) => {
      if (!this.isAuthError(error)) {
        throw error;
      }
      if (this.isUrlNeedsProAuth(original_request.url) && this.doIHaveAToken()) {
        return from(this.appendTokenOnError(original_request, next));
      } else {
        return next.handle(original_request.clone());
      }
    }));
  }
  isAuthError(error) {
    return error instanceof HttpErrorResponse && error.status === 401;
  }
  doIHaveAToken() {
    const proAuthService = this.injector.get(ProAuthService);
    const token = proAuthService.token;
    return !valueIsNull(token);
  }
  callTokenFromADVPL(request) {
    this.advplService.jsToAdvpl("internalToken", "");
    return request.clone();
  }
  appendTokenToRequest(request) {
    const proAuthService = this.injector.get(ProAuthService);
    if (!proAuthService.isTokenValid()) {
      proAuthService.updateToken();
    }
    return this.cloneAuthRequest(request, proAuthService.token);
  }
  appendTokenOnError(request, next) {
    return __async(this, null, function* () {
      const proAuthService = this.injector.get(ProAuthService);
      if (!proAuthService.isTokenValid()) {
        yield proAuthService.updateToken();
      }
      return next.handle(this.cloneAuthRequest(request, proAuthService.token)).toPromise();
    });
  }
  cloneAuthRequest(request, token) {
    return request.clone({
      headers: request.headers.set("Authorization", `Bearer ${token.access_token}`)
    });
  }
  isUrlNeedsProAuth(url) {
    let needProAuth = true;
    const whiteList = [/token/, /assets/];
    for (const whiteUrl of whiteList) {
      if (url.search(whiteUrl) >= 0) {
        needProAuth = false;
        break;
      }
    }
    return needProAuth;
  }
  static {
    this.\u0275fac = function ProAuthInteceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAuthInteceptor)(\u0275\u0275inject(Injector), \u0275\u0275inject(ProJsToAdvplService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProAuthInteceptor,
      factory: _ProAuthInteceptor.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAuthInteceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ProJsToAdvplService
  }], null);
})();
var ProAuthorizationModule = class _ProAuthorizationModule {
  static {
    this.\u0275fac = function ProAuthorizationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAuthorizationModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProAuthorizationModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProAuthService, ProAuthGuard, ProUserInfoService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProAuthInteceptor,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAuthorizationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [],
      providers: [ProAuthService, ProAuthGuard, ProUserInfoService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProAuthInteceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var ProUserAccessService = class _ProUserAccessService {
  constructor(http) {
    this.http = http;
    this.URL_ALIAS = "/api/framework/v1/accessPrivilegesServices/aliasAccess/";
    this.URL_FUNCTION = "/api/framework/v1/accessPrivilegesServices/functionAccess/";
  }
  /**
   * efetua um get na api referente a função MpUserHasAccess do protheus
   * a api utiliza o usuário logado para efetuar a busca
   * @param cRotina Nome da rotina a ser pesquisada
   * @param nOpc parametro opcional, numero da rotina no menudef a ser pesquisada
   * caso não seja passada a pesquisa será com base apenas na função
   * @returns Observable com o retorno da api
   */
  userHasAccess(cRotina, nOpc = 0) {
    if (nOpc) {
      return this.http.get(`${this.URL_FUNCTION}${cRotina}/${nOpc}`);
    } else {
      return this.http.get(`${this.URL_FUNCTION}${cRotina}`);
    }
  }
  /**
   * efetua um get na api referente a função FWChkTblAccess do protheus
   * a api utiliza o usuário logado para efetuar a busca
   * @param cTabela Tabela a ser pesquisada
   * @param nOpc parametro opcional, numero da rotina no menudef a ser pesquisada
   * caso não seja passada a pesquisa será com base apenas na função
   * @returns Observable com o retorno da api
   */
  aliasHasAccess(cTabela, nOpc = 0) {
    if (nOpc) {
      return this.http.get(`${this.URL_ALIAS}${cTabela}/${nOpc}`);
    } else {
      return this.http.get(`${this.URL_ALIAS}${cTabela}`);
    }
  }
  static {
    this.\u0275fac = function ProUserAccessService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProUserAccessService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProUserAccessService,
      factory: _ProUserAccessService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProUserAccessService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var CACHE_KEY = "ERPAPPCONFIG";
var ProAppConfigService = class _ProAppConfigService {
  constructor(http, advplService, themeService, sessionInfoService, proAuthService) {
    this.http = http;
    this.advplService = advplService;
    this.themeService = themeService;
    this.sessionInfoService = sessionInfoService;
    this.proAuthService = proAuthService;
    this.readyEmitter = new EventEmitter();
    this.themeService.setTheme();
  }
  /**
   * @description Realiza o carregamento do appConfig.json e adiciona as informações de contexto.
   * @returns Promise, ProAppConfig
   */
  loadAppConfig() {
    if (this.isProtheusRender && this.insideProtheus() && this.proAuthService.isUserAuthenticate) {
      this.sessionInfoService.setSessionInfo();
    }
    return this.http.get("assets/data/appConfig.json").toPromise().then((data) => {
      const proAppConfig = data;
      if (sessionStorage[CACHE_KEY] === void 0) {
        sessionStorage[CACHE_KEY] = JSON.stringify(proAppConfig);
      }
      this.readyEmitter.emit();
      return this.proAppConfig;
    });
  }
  /**
   * @description Método para encerrar o aplicativo
   * @param ask Boolean que indica se o sistema deve perguntar antes de fechar o app
   */
  callAppClose(ask = true) {
    if (ask) {
      this.advplService.AdvplCloseApp("force");
    } else {
      this.advplService.AdvplCloseApp();
    }
  }
  insideProtheus() {
    return this.advplService.protheusConnected();
  }
  /**
   * @description Retorna as informações do appConfig.json (ProAppConfig)
   */
  get proAppConfig() {
    if (valueIsNull(this._ProAppConfig)) {
      this._ProAppConfig = this.sessionInfoService.getErpAppConfig();
    }
    return this._ProAppConfig;
  }
  get nameApp() {
    return this.proAppConfig.name;
  }
  get serverWithApiUrl() {
    if (this.proAppConfig) {
      return valueIsNull(this.proAppConfig.api_baseUrl) ? this.proAppConfig.serverBackend + this.proAppConfig.restEntryPoint : this.proAppConfig.api_baseUrl;
    } else {
      return "";
    }
  }
  /**
   * @description Retorna a linha de produto que está sendo utilizada.
   * @returns string
   */
  get productLine() {
    return this.proAppConfig ? this.proAppConfig.productLine : "";
  }
  get isProtheusRender() {
    return this.productLine.toLowerCase() === "protheus";
  }
  freeAppConfig() {
    this._ProAppConfig = null;
  }
  static {
    this.\u0275fac = function ProAppConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAppConfigService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProThemeService), \u0275\u0275inject(ProSessionInfoService), \u0275\u0275inject(ProAuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProAppConfigService,
      factory: _ProAppConfigService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAppConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProThemeService
  }, {
    type: ProSessionInfoService
  }, {
    type: ProAuthService
  }], null);
})();
var ProLanguageService = class _ProLanguageService {
  constructor(http, advplService, proAppConfigService) {
    this.http = http;
    this.advplService = advplService;
    this.proAppConfigService = proAppConfigService;
    this.url = "/api/language/v1/protheus-suported-languages";
    this.useHTTP = true;
    this.EVENT_GET_LANGUAGES = "getLanguages";
    this.EVENT_SET_LANGUAGES = "setLanguages";
  }
  getListOfLanguages() {
    if (this.proAppConfigService.isProtheusRender) {
      if (this.useHTTP) {
        return this.http.get(this.url);
      }
      return this.getAdvplLanguages();
    } else {
      return of([]);
    }
  }
  getAdvplLanguages() {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    return this.advplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: "No language can be found"
        });
      } else {
        const laguages = JSON.parse(protheusResponse);
        subscriber.next(laguages);
      }
      subscriber.complete();
    }, {
      sendInfo: {
        type: this.EVENT_GET_LANGUAGES
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_LANGUAGES
    });
  }
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProLanguageService"
      });
      subscriber.complete();
    });
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
  }
  static {
    this.\u0275fac = function ProLanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProLanguageService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProAppConfigService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProLanguageService,
      factory: _ProLanguageService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProLanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProAppConfigService
  }], null);
})();
var ProBrandService = class _ProBrandService {
  constructor(http, advplService, proAppConfigService) {
    this.http = http;
    this.advplService = advplService;
    this.proAppConfigService = proAppConfigService;
    this.url = "/api/brand/v1/erp-brand";
    this.useHTTP = true;
    this.EVENT_GET_BRANDCONTEXT = "getBrandContext";
    this.EVENT_SET_BRANDCONTEXT = "setBrandContext";
  }
  getERPBrand() {
    if (this.proAppConfigService.isProtheusRender) {
      if (this.useHTTP) {
        return this.http.get(this.url, {
          responseType: "text"
        });
      }
      return this.getAdvplBrandContext();
    } else {
      return of("TOTVS");
    }
  }
  /**
   * @description Cria um observable para a comunicação com o ADVPL
   * @returns Observable de string sobre a marca do ambiente
   */
  getAdvplBrandContext() {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    return this.advplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (subscriber) {
        if (protheusResponse.length === 0) {
          subscriber.error({
            status: 400,
            description: "Brand context not found"
          });
        } else {
          subscriber.next(protheusResponse);
        }
        subscriber.complete();
      }
    }, {
      sendInfo: {
        type: this.EVENT_GET_BRANDCONTEXT
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_BRANDCONTEXT
    });
  }
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProBrandService"
      });
      subscriber.complete();
    });
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
  }
  static {
    this.\u0275fac = function ProBrandService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProBrandService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProAppConfigService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProBrandService,
      factory: _ProBrandService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBrandService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProAppConfigService
  }], null);
})();
var ENDPOINT = "/api/protheus/session/v1/defaults";
var ProSessionSettingsService = class _ProSessionSettingsService {
  constructor(http, advplService, sessionInfoService) {
    this.http = http;
    this.advplService = advplService;
    this.sessionInfoService = sessionInfoService;
  }
  requestSettingsDefaults() {
    if (!valueIsNull(this.advplService.getWebChannel())) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (protheusResponse.length === 0) {
          subscriber.next({
            role_code: "",
            role_description: "",
            role_when: false,
            show_go_emp_fil: false,
            show_mdi_menu_info: false,
            environment_code: "",
            environment_description: "",
            environment_when: true,
            disable_back_button: false
          });
        } else {
          const startKeys = JSON.parse(protheusResponse);
          subscriber.next(startKeys);
        }
        subscriber.complete();
      }, {
        autoDestruct: true,
        receiveId: "setSessionStart",
        sendInfo: {
          type: "getSessionStart"
        }
      });
    } else {
      const headers = new HttpHeaders().append("Accept", "application/json; charset=utf-8");
      return this.http.get(ENDPOINT, {
        headers
      });
    }
  }
  /**
   * @description Realiza a limpeza das informações adicionadas na tela de sessão.
   */
  clearSettingsDefaults() {
    if (this.advplService.protheusConnected()) {
      this.advplService.jsToAdvpl("backButton", "");
    }
    const erpAppConfig = this.sessionInfoService.getErpAppConfig();
    sessionStorage.clear();
    sessionStorage.setItem("ERPAPPCONFIG", JSON.stringify(erpAppConfig));
    if (erpAppConfig) {
      this.sessionInfoService.setErpAppConfig(erpAppConfig);
    }
  }
  saveSettingsDefaults(session) {
    if (this.advplService.protheusConnected()) {
      return this.advplService.buildObservable(({
        protheusResponse,
        subscriber
      }) => {
        if (protheusResponse === "true") {
          subscriber.next({});
        } else {
          subscriber.error({});
        }
        subscriber.complete();
      }, {
        autoDestruct: true,
        receiveId: "submitButtonResponse",
        sendInfo: {
          type: "submitButton",
          content: JSON.stringify(session)
        }
      });
    } else {
      const headers = new HttpHeaders().append("Content-Type", "application/json; charset=utf-8");
      return this.http.post(ENDPOINT, session, {
        headers
      });
    }
  }
  static {
    this.\u0275fac = function ProSessionSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSessionSettingsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSessionSettingsService,
      factory: _ProSessionSettingsService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSessionSettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProSessionSettingsDefaultsResolver = class _ProSessionSettingsDefaultsResolver {
  constructor(sessionSettingsService) {
    this.sessionSettingsService = sessionSettingsService;
  }
  resolve(_route, _state) {
    return this.sessionSettingsService.requestSettingsDefaults();
  }
  static {
    this.\u0275fac = function ProSessionSettingsDefaultsResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSessionSettingsDefaultsResolver)(\u0275\u0275inject(ProSessionSettingsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSessionSettingsDefaultsResolver,
      factory: _ProSessionSettingsDefaultsResolver.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSessionSettingsDefaultsResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProSessionSettingsService
  }], null);
})();
var ProSessionSettingsUserInfoResolver = class _ProSessionSettingsUserInfoResolver {
  constructor(proUserInfoService, proAuthService) {
    this.proUserInfoService = proUserInfoService;
    this.proAuthService = proAuthService;
    this.proUserInfoService.setChannelAsHTTP(environment.useHTTP);
  }
  resolve(_route, _state) {
    const userId = this.proAuthService.userId;
    return this.proUserInfoService.get(userId);
  }
  static {
    this.\u0275fac = function ProSessionSettingsUserInfoResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSessionSettingsUserInfoResolver)(\u0275\u0275inject(ProUserInfoService), \u0275\u0275inject(ProAuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSessionSettingsUserInfoResolver,
      factory: _ProSessionSettingsUserInfoResolver.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSessionSettingsUserInfoResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProUserInfoService
  }, {
    type: ProAuthService
  }], null);
})();
var ProTranslateStringService = class _ProTranslateStringService {
  /**
   * @description Construtor da classe
   * @param http Objeto HttpClient para efetuar as requisições REST
   * @param advplService Serviço ProJsToAdvplService para comunicação via jsToAdvpl
   * @param proAppConfigService Serviço ProAppConfigService para verificação de estado (Advpl/Http)
   */
  constructor(http, advplService, proAppConfigService) {
    this.http = http;
    this.advplService = advplService;
    this.proAppConfigService = proAppConfigService;
    this.url = "/api/framework/v1/FwRestTranslate/";
    this.useHTTP = true;
    this.EVENT_GET_TRANSLATES = "getTranslateStringResource";
    this.EVENT_SET_TRANSLATES = "setTranslateStringResource";
  }
  /**
   * @description Retorna todas as string de um resource de tradução do Protheus
   * @param cTRES string contendo o nome do resource (CH)
   * @returns Retorna um json que pode conter nenhuma ou várias chaves de string, normalmente enumeradas de str0001 até str9999
   */
  getStrList(cTRES) {
    if (this.proAppConfigService.isProtheusRender) {
      if (this.useHTTP) {
        return this.http.get(`${this.url}${cTRES}`);
      }
      return this.getAdvplLanguages();
    } else {
      return of({});
    }
  }
  /**
   * @description Retorna as traduções do resource via ADVPL (jstoadvpl)
   * @returns Observable das traduções do resource do Protheus
   */
  getAdvplLanguages() {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    return this.advplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: "No translate can be found"
        });
      } else {
        const translates = JSON.parse(protheusResponse);
        subscriber.next(translates);
      }
      subscriber.complete();
    }, {
      sendInfo: {
        type: this.EVENT_GET_TRANSLATES,
        content: ""
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_TRANSLATES
    });
  }
  /**
   * @description Retorna um erro da conexão jstoadvpl
   * @returns Observable de exceção
   */
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProTranslateStringService"
      });
      subscriber.complete();
    });
  }
  /**
   * @description Indica o consumo de API via HTTP ou jstoadvpl
   * @returns Informa se a classe fará a requisição via HTTP
   */
  isChannelHTTP() {
    return this.useHTTP;
  }
  /**
   * @description Permite dizer se a requisição será efetuada via HTTP ou jstoadvpl, sempre usar como HTTP, apenas pequenas exceções como jstoadvpl
   * @param value Uso de HTTP para requisição
   */
  setChannelAsHTTP(value) {
    this.useHTTP = value;
  }
  static {
    this.\u0275fac = function ProTranslateStringService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProTranslateStringService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ProJsToAdvplService), \u0275\u0275inject(ProAppConfigService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProTranslateStringService,
      factory: _ProTranslateStringService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProTranslateStringService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ProJsToAdvplService
  }, {
    type: ProAppConfigService
  }], null);
})();
var ProDateService = class _ProDateService {
  /**
   * @description Metodo construtor da classe
   * @param advplService Serviço ProJsToAdvplService para comunicação via jsToAdvpl
   */
  constructor(advplService) {
    this.advplService = advplService;
    this.EVENT_SET_FORMAT = "setDateFormat";
    this.EVENT_GET_FORMAT = "getDateFormat";
  }
  /**
   * @description Retorna o formato da data do sistema protheus com base no idioma.
   * @param language string codigo do idioma.
   * @returns Observable de string
   */
  getDateFormat(language) {
    if (!this.advplService.protheusConnected()) {
      return this.advplNotPrepared();
    }
    return this.advplService.buildObservable(({
      protheusResponse,
      subscriber
    }) => {
      if (protheusResponse.length === 0) {
        subscriber.error({
          status: 400,
          description: `dateFormat for language ${language ? language : ""} could not be found`
        });
      } else {
        subscriber.next(protheusResponse);
      }
      subscriber.complete();
    }, {
      sendInfo: {
        type: this.EVENT_GET_FORMAT,
        content: language
      },
      autoDestruct: true,
      receiveId: this.EVENT_SET_FORMAT
    });
  }
  /**
   * @description Retorna um erro da conexão jstoadvpl
   * @returns Observable de exceção
   */
  advplNotPrepared() {
    return new Observable((subscriber) => {
      subscriber.error({
        status: 400,
        description: "advplService not prepared in ProDateService"
      });
      subscriber.complete();
    });
  }
  static {
    this.\u0275fac = function ProDateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProDateService)(\u0275\u0275inject(ProJsToAdvplService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProDateService,
      factory: _ProDateService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProDateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProJsToAdvplService
  }], null);
})();
var ProMessagesModule = class _ProMessagesModule {
  static {
    this.\u0275fac = function ProMessagesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProMessagesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProMessagesModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, PoNotificationModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProMessagesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PoNotificationModule]
    }]
  }], null, null);
})();
var ProBrandModule = class _ProBrandModule {
  static {
    this.\u0275fac = function ProBrandModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProBrandModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProBrandModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBrandModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule]
    }]
  }], null, null);
})();
var ProSystemIdiomInteceptor = class _ProSystemIdiomInteceptor {
  constructor(injector, sessionInfoService) {
    this.injector = injector;
    this.sessionInfoService = sessionInfoService;
  }
  /**
   * @description Intercept http para tratamento do módulo do Protheus nas requisições
   * @param original_request Requisição http
   * @param next Handler da requisição http
   * @returns Observable da requisição http com o header do módulo caso o ERP seja Protheus
   */
  intercept(original_request, next) {
    let requestResult = original_request;
    const proAppConfigService = this.injector.get(ProAppConfigService);
    if (!(original_request.url.search(/assets/) >= 0)) {
      const isProtheus = proAppConfigService.isProtheusRender;
      if (isProtheus) {
        requestResult = this.appendLanguageToRequest(original_request);
      }
    }
    return next.handle(requestResult);
  }
  /**
   * @description Efetua a validação e adição do header de idioma
   * @param request Requisição HTTP Original
   * @returns HttpRequest, podendo ser alterada com a inclusão do idioma conforme o Protheus
   */
  appendLanguageToRequest(request) {
    const language = this.getLanguage();
    if (language) {
      return request.clone({
        headers: request.headers.set("Accept-Language", language)
      });
    } else {
      return request.clone();
    }
  }
  /**
   * @description Retorna o idioma presente no storage do navegador
   * @returns string contendo o valor de idioma do Protheus
   */
  getLanguage() {
    return this.sessionInfoService.getIdiom();
  }
  static {
    this.\u0275fac = function ProSystemIdiomInteceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemIdiomInteceptor)(\u0275\u0275inject(Injector), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSystemIdiomInteceptor,
      factory: _ProSystemIdiomInteceptor.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemIdiomInteceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProLanguageModule = class _ProLanguageModule {
  static {
    this.\u0275fac = function ProLanguageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProLanguageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProLanguageModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProLanguageService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProSystemIdiomInteceptor,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProLanguageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ProLanguageService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProSystemIdiomInteceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var ProSystemModulesInteceptor = class _ProSystemModulesInteceptor {
  constructor(injector, sessionInfoService) {
    this.injector = injector;
    this.sessionInfoService = sessionInfoService;
  }
  /**
   * @description Intercept http para tratamento do módulo do Protheus nas requisições
   * @param original_request Requisição http
   * @param next Handler da requisição http
   * @returns Observable da requisição http com o header do módulo caso o ERP seja Protheus
   */
  intercept(original_request, next) {
    let requestResult = original_request;
    const proAppConfigService = this.injector.get(ProAppConfigService);
    if (!(original_request.url.search(/assets/) >= 0)) {
      const isProtheus = proAppConfigService.isProtheusRender;
      if (isProtheus) {
        requestResult = this.appendModuleToRequest(original_request);
      }
    }
    return next.handle(requestResult);
  }
  appendModuleToRequest(request) {
    const module = this.getModule();
    if (module) {
      return request.clone({
        headers: request.headers.set("x-erp-module", module)
      });
    } else {
      return request.clone();
    }
  }
  /**
   * @description Retorno o módulo logado
   * @returns string
   */
  getModule() {
    return this.sessionInfoService.getModule();
  }
  static {
    this.\u0275fac = function ProSystemModulesInteceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemModulesInteceptor)(\u0275\u0275inject(Injector), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSystemModulesInteceptor,
      factory: _ProSystemModulesInteceptor.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemModulesInteceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProSystemDatabaseInterceptor = class _ProSystemDatabaseInterceptor {
  constructor(injector, sessionInfoService) {
    this.injector = injector;
    this.sessionInfoService = sessionInfoService;
  }
  /**
   * @description Intercept http para tratamento do database do Protheus nas requisições
   * @param original_request Requisição http
   * @param next Handler da requisição http
   * @returns Observable da requisição http com o header do database caso o ERP seja Protheus
   */
  intercept(original_request, next) {
    let requestResult = original_request;
    const proAppConfigService = this.injector.get(ProAppConfigService);
    if (!(original_request.url.search(/assets/) >= 0)) {
      const isProtheus = proAppConfigService.isProtheusRender;
      if (isProtheus) {
        requestResult = this.appendDataBaseToRequest(original_request);
      }
    }
    return next.handle(requestResult);
  }
  /**
   * @description Adiciona o header da database na requisição caso exista
   * @param request Objeto HttpRequest da requisição
   * @returns HttpRequest da requisição com a database ou apenas um cópia
   */
  appendDataBaseToRequest(request) {
    const database = this.getDatabase();
    if (database) {
      return request.clone({
        headers: request.headers.set("x-erp-database", database)
      });
    } else {
      return request.clone();
    }
  }
  /**
   * @description Verifica o valor da database no SessionStorage
   * @returns Retorna o valor da database no SessionStorage, podendo não ter valor algum
   */
  getDatabase() {
    return this.sessionInfoService.getDataBase();
  }
  static {
    this.\u0275fac = function ProSystemDatabaseInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemDatabaseInterceptor)(\u0275\u0275inject(Injector), \u0275\u0275inject(ProSessionInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProSystemDatabaseInterceptor,
      factory: _ProSystemDatabaseInterceptor.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemDatabaseInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ProSessionInfoService
  }], null);
})();
var ProSystemInfoModule = class _ProSystemInfoModule {
  static {
    this.\u0275fac = function ProSystemInfoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSystemInfoModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProSystemInfoModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProSystemModuleService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProSystemModulesInteceptor,
        multi: true
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProSystemDatabaseInterceptor,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSystemInfoModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ProSystemModuleService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProSystemModulesInteceptor,
        multi: true
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProSystemDatabaseInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var ProTenantInteceptor = class _ProTenantInteceptor {
  constructor(injector) {
    this.injector = injector;
  }
  intercept(original_request, next) {
    let requestResult = original_request;
    const proAppConfigService = this.injector.get(ProAppConfigService);
    if (!(original_request.url.search(/assets/) >= 0)) {
      const isProtheus = proAppConfigService.isProtheusRender;
      if (isProtheus) {
        requestResult = this.appendTenantToRequest(original_request);
      }
    }
    return next.handle(requestResult);
  }
  appendTenantToRequest(request) {
    const tenantid = this.getTenantId();
    if (tenantid) {
      return request.clone({
        headers: request.headers.set("tenantid", tenantid)
      });
    } else {
      return request.clone();
    }
  }
  getTenantId() {
    const proBranchService = this.injector.get(ProBranchService);
    const proCompanyService = this.injector.get(ProCompanyService);
    const companyCode = proCompanyService.company.Code;
    const branchCode = proBranchService.branch.Code;
    let tenantid = "";
    if (companyCode !== "") {
      tenantid += companyCode;
      if (branchCode !== "") {
        tenantid += `,${branchCode},`;
      }
      return tenantid;
    }
  }
  static {
    this.\u0275fac = function ProTenantInteceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProTenantInteceptor)(\u0275\u0275inject(Injector));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProTenantInteceptor,
      factory: _ProTenantInteceptor.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProTenantInteceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }], null);
})();
var ProTenantModule = class _ProTenantModule {
  static {
    this.\u0275fac = function ProTenantModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProTenantModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProTenantModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProCompanyService, ProBranchService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProTenantInteceptor,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProTenantModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ProCompanyService, ProBranchService, {
        provide: HTTP_INTERCEPTORS,
        useClass: ProTenantInteceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var ProThemeModule = class _ProThemeModule {
  static {
    this.\u0275fac = function ProThemeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProThemeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProThemeModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProThemeService, {
        provide: "Window",
        useValue: window
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProThemeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ProThemeService, {
        provide: "Window",
        useValue: window
      }]
    }]
  }], null, null);
})();
var ProThreadInfoService = class _ProThreadInfoService {
  constructor(proAuthService, proUserInfoService) {
    this.proAuthService = proAuthService;
    this.proUserInfoService = proUserInfoService;
  }
  /**
   * @description Retorna um objeto contendo informações do usuário logado no app e na thread do Protheus
   * @returns ProThreadInfo = {userId, userName}
   * userId = ID do usuário
   * userName = Nome (login) do usuário
   */
  get proThreadInfo() {
    const token = this.proAuthService.getTokenPayload();
    const proThreadInfo = {};
    proThreadInfo.userId = token.userid;
    proThreadInfo.userName = token.sub;
    return proThreadInfo;
  }
  /**
   * @description Recupera o ID do usuário logado no app e no Protheus
   * @returns ID do usuário
   */
  get userId() {
    return this.proAuthService.userId;
  }
  /**
   * @description Recupera o nome (login) do usuário logado no app e no Protheus
   * @returns Nome do usuário (login)
   */
  get userName() {
    return this.proThreadInfo.userName;
  }
  /**
   * @description Retorna informações do usuário logado (id, nome de usuário, nome e emails)
   * @returns ProUserInfo = {id, userName, displayName, emails}
   */
  getUserInfoThread() {
    return this.proUserInfoService.get(this.userId, true).pipe(map((user) => ({
      id: user.id,
      userName: user.userName,
      displayName: user.displayName,
      emails: user.emails
    })));
  }
  static {
    this.\u0275fac = function ProThreadInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProThreadInfoService)(\u0275\u0275inject(ProAuthService), \u0275\u0275inject(ProUserInfoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProThreadInfoService,
      factory: _ProThreadInfoService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProThreadInfoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProAuthService
  }, {
    type: ProUserInfoService
  }], null);
})();
var ProThreadInfoModule = class _ProThreadInfoModule {
  static {
    this.\u0275fac = function ProThreadInfoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProThreadInfoModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProThreadInfoModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProThreadInfoService],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProThreadInfoModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ProThreadInfoService]
    }]
  }], null, null);
})();
var ProTranslateStringModule = class _ProTranslateStringModule {
  static {
    this.\u0275fac = function ProTranslateStringModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProTranslateStringModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProTranslateStringModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProTranslateStringService],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProTranslateStringModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ProTranslateStringService]
    }]
  }], null, null);
})();
var ProDateModule = class _ProDateModule {
  static {
    this.\u0275fac = function ProDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProDateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProDateModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [ProDateService],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProDateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [ProDateService]
    }]
  }], null, null);
})();
var ProServicesModule = class _ProServicesModule {
  static {
    this.\u0275fac = function ProServicesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProServicesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProServicesModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, ProAppConfigModule, ProAuthorizationModule, ProJsToAdvplModule, ProMessagesModule, ProTenantModule, ProSystemInfoModule, ProLanguageModule, ProThemeModule, ProBrandModule, ProThreadInfoModule, ProTranslateStringModule, ProUserProfileModule, ProDateModule, ProAppConfigModule, ProAuthorizationModule, ProJsToAdvplModule, ProMessagesModule, ProTenantModule, ProSystemInfoModule, ProLanguageModule, ProBrandModule, ProThreadInfoModule, ProTranslateStringModule, ProUserProfileModule, ProDateModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProServicesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ProAppConfigModule, ProAuthorizationModule, ProJsToAdvplModule, ProMessagesModule, ProTenantModule, ProSystemInfoModule, ProLanguageModule, ProThemeModule, ProBrandModule, ProThreadInfoModule, ProTranslateStringModule, ProUserProfileModule, ProDateModule],
      exports: [ProAppConfigModule, ProAuthorizationModule, ProJsToAdvplModule, ProMessagesModule, ProTenantModule, ProSystemInfoModule, ProLanguageModule, ProBrandModule, ProThreadInfoModule, ProTranslateStringModule, ProUserProfileModule, ProDateModule]
    }]
  }], null, null);
})();
var ProAdapterBaseV2Service = class _ProAdapterBaseV2Service {
  /**
   * @description Retorna parâmetros no formato HttpParams para ser enviado na requisição HTTP.
   *
   * @param page number, número da página
   * @param pageSize number, quantidade de registros da página
   * @param filter string, filtro a ser utilizado na requisição
   * @param fields string, campos a serem retornados pela requisição
   * @param order string, ordenação a ser utilizada no retorno da requisição
   *
   * @return HttpParams, parâmetros
  */
  getHttpParams(page, pageSize, filter2, fields, order) {
    const params = new HttpParams().append("page", page ? page : 1).append("pageSize", pageSize ? pageSize : 20).append("filter", filter2 ? filter2 : "").append("fields", fields ? fields : "").append("order", order ? order : "");
    return params;
  }
  static {
    this.\u0275fac = function ProAdapterBaseV2Service_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProAdapterBaseV2Service)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProAdapterBaseV2Service,
      factory: _ProAdapterBaseV2Service.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProAdapterBaseV2Service, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ProGenericAdapterService = class _ProGenericAdapterService {
  constructor(http) {
    this.http = http;
    this.URL_LIST = "/api/framework/v1/genericList";
    this.URL_QUERY = "/api/framework/v1/genericQuery";
  }
  /**
   * Metodo para devolver uma listagem de registro baseado na api genericList
   * @param searchParams parametros da interface ProAdapterListInterface a ser enviado
   * para api genericList
   * @returns Observable de ProAdapterBaseV2 a ser utilizado em um po-table
   */
  list(searchParams) {
    const params = this.convertSearchParamsToHttpParams(searchParams);
    return this.http.get(this.URL_LIST, {
      params
    });
  }
  /**
   * Metodo para devolver uma listagem de registro baseado na api genericQuery
   * @param searchParams parametros da interface ProAdapterQueryInterface a ser enviado
   * para api genericQuery
   * @returns Observable de ProAdapterBaseV2 a ser utilizado em um po-table
   */
  query(searchParams) {
    const params = this.convertSearchParamsToHttpParams(searchParams);
    return this.http.get(this.URL_QUERY, {
      params
    });
  }
  /**
   * converte uma interface para httpParams
   * cada propriedade vira um parametro http
   * @param searchParams parametro a ser convetido
   * @returns httpParams a ser utilizado em uma requisição
   */
  convertSearchParamsToHttpParams(searchParams) {
    let params = new HttpParams();
    Object.keys(searchParams).forEach((key) => {
      params = params.set(key, searchParams[key]);
    });
    return params;
  }
  static {
    this.\u0275fac = function ProGenericAdapterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProGenericAdapterService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProGenericAdapterService,
      factory: _ProGenericAdapterService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProGenericAdapterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var ProI18nService = class _ProI18nService {
  /**
   * @description
   * Efetua a transformação de um texto de tradução com tokens,
   * os tokens são iniciados com # e um número de 1 a 99.
   * Os valores são convertidos para string via função String do JS,
   * não possuindo um padrão de conversão
   *
   * @param str Texto de internacionalização
   * @param values Lista de tokens, podendo ter de 0 a 99 itens
   * @returns Texto original com a substituição dos tokens (#)
   */
  static getTranslateTokenString(str, values = []) {
    for (let i = values.length - 1; i >= 0; i--) {
      const token = String(values[i]);
      const section = "#" + (i + 1).toString();
      const posSection = str.indexOf(`${section}[`);
      if (posSection >= 0) {
        const hintStart = posSection + section.length;
        const hintEnd = str.substring(hintStart + 1).indexOf("]#");
        if (hintStart >= 0 && hintEnd >= 0) {
          const search = new RegExp(`${section}\\[.*]#`, "g");
          str = str.replace(search, section);
        }
      }
      str = str.replace(section, token);
    }
    return str;
  }
  static {
    this.\u0275fac = function ProI18nService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProI18nService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ProI18nService,
      factory: _ProI18nService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProI18nService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ProPageBackgroundComponent = class _ProPageBackgroundComponent {
  /** Caminho para a logomarca localizada na parte superior. */
  set logo(value) {
    this._logo = isTypeof2(value, "string") && value.trim() ? value : void 0;
  }
  get logo() {
    return this._logo;
  }
  /**
   * @optional
   *
   * @description
   *
   * Caminho para a logomarca localizada no rodapé.
   */
  set secondaryLogo(value) {
    this._secondaryLogo = isTypeof2(value, "string") && value.trim() ? value : void 0;
  }
  get secondaryLogo() {
    return this._secondaryLogo;
  }
  /** Define se o seletor de idiomas deve ser exibido. */
  set showSelectLanguage(showSelectLanguage) {
    this._showSelectLanguage = convertToBoolean2(showSelectLanguage);
  }
  get showSelectLanguage() {
    return this._showSelectLanguage;
  }
  /**
   * @description Construtor do componente
   * @param poLanguageService Serviço de idioma do PO UI
   * @param proLanguageService Serviço de idiomas do Protheus
   */
  constructor(poLanguageService, proLanguageService) {
    this.poLanguageService = poLanguageService;
    this.proLanguageService = proLanguageService;
    this.selectLanguageOptions = [];
    this.selectedLanguage = new EventEmitter();
    this.updateLangs();
  }
  /**
   * @description Atualiza os idiomas disponíveis
   */
  updateLangs() {
    this.proLanguageService.setChannelAsHTTP(environment.useHTTP);
    this.proLanguageService.getListOfLanguages().subscribe({
      next: (langs) => {
        this.selectLanguageOptions = langs.map((language) => {
          return {
            label: language.description,
            value: language.language
          };
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  ngOnInit() {
    this.selectedLanguageOption = this.poLanguageService.getShortLanguage();
  }
  onChangeLanguage() {
    this.selectedLanguage.emit(this.selectedLanguageOption);
  }
  static {
    this.\u0275fac = function ProPageBackgroundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProPageBackgroundComponent)(\u0275\u0275directiveInject(PoLanguageService), \u0275\u0275directiveInject(ProLanguageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProPageBackgroundComponent,
      selectors: [["pro-page-background"]],
      inputs: {
        background: [0, "p-background", "background"],
        hideLogo: [0, "p-hide-logo", "hideLogo"],
        highlightInfo: [0, "p-highlight-info", "highlightInfo"],
        logo: [0, "p-logo", "logo"],
        secondaryLogo: [0, "p-secondary-logo", "secondaryLogo"],
        showSelectLanguage: [0, "p-show-select-language", "showSelectLanguage"]
      },
      outputs: {
        selectedLanguage: "p-selected-language"
      },
      standalone: false,
      ngContentSelectors: _c110,
      decls: 13,
      vars: 5,
      consts: [[1, "po-page-login-container"], [1, "po-page-login-panel"], ["class", "po-page-background-main-logo-image", "alt", "main-logo", 3, "po-page-background-hide-logo-image", "src", 4, "ngIf"], [1, "po-page-login-body"], [1, "po-page-login-panel-content", "pro-bg-component"], [1, "po-page-background-footer", "po-sm-12"], [1, "po-page-background-footer-mobile-only"], [1, "po-page-background-footer-content"], ["class", "po-page-background-footer-select", 4, "ngIf"], [1, "po-page-background-secondary-logo", 3, "ngClass"], ["class", "po-page-background-secondary-logo-image", "alt", "secondary-logo", 3, "src", 4, "ngIf"], [3, "ngClass", "background-image", 4, "ngIf"], ["alt", "main-logo", 1, "po-page-background-main-logo-image", 3, "src"], [1, "po-page-background-footer-select"], ["name", "selectedLanguageOption", 3, "ngModel", "p-options", "ngModelChange", "p-change", 4, "ngIf"], ["name", "selectedLanguageOption", 3, "ngModelChange", "p-change", "ngModel", "p-options"], ["alt", "secondary-logo", 1, "po-page-background-secondary-logo-image", 3, "src"], [3, "ngClass"], [1, "po-page-login-highlight-text"], [1, "po-font-display"]],
      template: function ProPageBackgroundComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275template(2, ProPageBackgroundComponent_img_2_Template, 1, 3, "img", 2);
          \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
          \u0275\u0275projection(5);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(6, "div", 5);
          \u0275\u0275element(7, "po-divider", 6);
          \u0275\u0275elementStart(8, "div", 7);
          \u0275\u0275template(9, ProPageBackgroundComponent_div_9_Template, 2, 1, "div", 8);
          \u0275\u0275elementStart(10, "div", 9);
          \u0275\u0275template(11, ProPageBackgroundComponent_img_11_Template, 1, 1, "img", 10);
          \u0275\u0275elementEnd()()()();
          \u0275\u0275template(12, ProPageBackgroundComponent_div_12_Template, 4, 4, "div", 11);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275property("ngIf", ctx.logo);
          \u0275\u0275advance(7);
          \u0275\u0275property("ngIf", ctx.showSelectLanguage);
          \u0275\u0275advance();
          \u0275\u0275property("ngClass", ctx.showSelectLanguage ? "po-page-background-secondary-logo-right" : "po-page-background-secondary-logo-centered");
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.secondaryLogo);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.background);
        }
      },
      dependencies: [NgClass, NgIf, NgControlStatus, NgModel, PoDividerComponent, PoSelectComponent],
      styles: [".pro-bg-component[_ngcontent-%COMP%]{margin-bottom:2%;padding:8%}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProPageBackgroundComponent, [{
    type: Component,
    args: [{
      selector: "pro-page-background",
      standalone: false,
      template: `<div class="po-page-login-container">\r
  <div\r
    class="po-page-login-panel">\r
    <img\r
      *ngIf="logo"\r
      class="po-page-background-main-logo-image"\r
      [class.po-page-background-hide-logo-image]="hideLogo"\r
      alt="main-logo"\r
      [src]="logo"\r
    />\r
\r
    <div class="po-page-login-body">\r
      <div class="po-page-login-panel-content pro-bg-component">\r
        <ng-content></ng-content>\r
      </div>\r
    </div>\r
    <div class="po-page-background-footer po-sm-12">\r
      <po-divider class="po-page-background-footer-mobile-only"></po-divider>\r
\r
      <div class="po-page-background-footer-content">\r
        <div\r
          *ngIf="showSelectLanguage"\r
          class="po-page-background-footer-select"\r
        >\r
          <po-select\r
            *ngIf="selectLanguageOptions"\r
            name="selectedLanguageOption"\r
            [(ngModel)]="selectedLanguageOption"\r
            [p-options]="selectLanguageOptions"\r
            (p-change)="onChangeLanguage()"\r
          >\r
          </po-select>\r
        </div>\r
\r
        <div\r
          class="po-page-background-secondary-logo"\r
          [ngClass]="\r
            showSelectLanguage\r
              ? 'po-page-background-secondary-logo-right'\r
              : 'po-page-background-secondary-logo-centered'\r
          "\r
        >\r
          <img\r
            *ngIf="secondaryLogo"\r
            class="po-page-background-secondary-logo-image"\r
            alt="secondary-logo"\r
            [src]="secondaryLogo"\r
          />\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div\r
    *ngIf="background"\r
    [ngClass]="\r
      background\r
        ? 'po-page-login-highlight-image'\r
        : 'po-page-login-highlight-image-off'\r
    "\r
    [style.background-image]="'url(' + background + ')'"\r
  >\r
    <div class="po-page-login-highlight-text">\r
      <div class="po-font-display">{{ highlightInfo }}</div>\r
    </div>\r
  </div>\r
</div>\r
`,
      styles: [".pro-bg-component{margin-bottom:2%;padding:8%}\n"]
    }]
  }], () => [{
    type: PoLanguageService
  }, {
    type: ProLanguageService
  }], {
    background: [{
      type: Input,
      args: ["p-background"]
    }],
    hideLogo: [{
      type: Input,
      args: ["p-hide-logo"]
    }],
    highlightInfo: [{
      type: Input,
      args: ["p-highlight-info"]
    }],
    logo: [{
      type: Input,
      args: ["p-logo"]
    }],
    secondaryLogo: [{
      type: Input,
      args: ["p-secondary-logo"]
    }],
    showSelectLanguage: [{
      type: Input,
      args: ["p-show-select-language"]
    }],
    selectedLanguage: [{
      type: Output,
      args: ["p-selected-language"]
    }]
  });
})();
var ProSessionSettingsComponent = class _ProSessionSettingsComponent {
  /**
   * @description metodo chamado na mudança do combox de idioma da tela de parametros da sessão
   * @param language opção de idioma escolhido pelo usuário
   * @returns void
   */
  onSelectedLanguage(language) {
    this.poI18nService.setLanguage(language, false);
    this.poI18nService.getLiterals({
      language,
      context: "session"
    }).subscribe((literals) => {
      this.updLiterals(literals);
      this.updateProductName();
    });
    this.updateDateFormat(language);
    this.messageService.changeLanguage(language).subscribe({
      next: () => {
        this.updateModuleDescription();
      }
    });
  }
  /**
   * @description Atualiza as strings traduzíveis da interface
   * @param literals Objeto de literais, contendo as traduções da interface
   */
  updLiterals(literals) {
    this.literals = literals;
    this.companyColumns[0].label = this.literals.str0020;
    this.companyColumns[1].label = this.literals.str0021;
    this.moduleColumns[0].label = this.literals.str0020;
    this.moduleColumns[1].label = this.literals.str0022;
    this.moduleColumns[2].label = this.literals.str0021;
    this.roleColumns[0].label = this.literals.str0020;
    this.roleColumns[1].label = this.literals.str0021;
    this.updateBranchLiterals();
  }
  /**
   * @description Atualiza as strings de tradução as colunas do Lookup de filial
   */
  updateBranchLiterals() {
    this.branchColumns[0].label = this.literals.str0020;
    this.branchColumns[1].label = this.literals.str0021;
    this.branchColumns[2].label = this.literals.str0026;
    this.branchColumns[3].label = this.literals.str0025;
    this.updateCnpjTitleColumn();
  }
  activateSupport(url = this.getSupportLink()) {
    this.setUrlRedirect(url);
  }
  /**
   * @description Método para obter o link de suporte
   * @returns Retorna uma string contendo o link de suporte do ERP
   */
  getSupportLink() {
    const language = this.poI18nService.getShortLanguage();
    let supportLink = "http://suporte.totvs.com/";
    if (this.brand == "MA3") {
      supportLink = language === "en" ? "https://www.national-platform.com/" : "https://www.national-platform.ru/";
    } else {
      if (language === "es") {
        supportLink = "https://totvscst.zendesk.com/hc/es#home";
      } else if (language === "en") {
        supportLink = "https://totvscst.zendesk.com/hc/en-us#home";
      }
    }
    return supportLink;
  }
  /**
   * @description Efetua o redirect conforme a URL recebida
   * @param url URL que será verificada, podendo abrir uma janela ou mudar a rota
   */
  setUrlRedirect(url) {
    isExternalLink2(url) ? window.open(url, "_blank") : this.router.navigate([url]);
  }
  /**
   * @description Construtor da classe
   * @param formBuilder Objeto FormBuilder para controle do formulário
   * @param router Objeto Router para controle da rota
   * @param messageService Serviço ProMessageService para exibição de notificações
   * @param route Objeto ActivatedRoute para controle da rota atual
   * @param proSessionSettingsService Serviço ProSessionSettingsService para obter os dados de login salvos
   * @param proCompanyService Serviço ProCompanyService para obter dados do grupo de empresas
   * @param proRoleService Serviço ProRoleService para obter dados de papel de trabalho
   * @param proBranchService Serviço ProBranchService para obter dados da filial
   * @param poI18nService Serviço PoI18nService para tradução da interface via dados locais
   * @param proTranslateStringService Serviço ProTranslateStringService para tradução da interface via API do Protheus
   * @param proBrandService Serviço para identificação da marca, MA3 na russia
   * @param proAuthService Serviço para Autenticação
   */
  constructor(formBuilder, router, messageService, route, proSessionSettingsService, proCompanyService, proRoleService, proBranchService, poI18nService, proTranslateStringService, proBrandService, proSystemModuleService, proThemeService, proDateService, proAuthService, proJsToAdvplService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.messageService = messageService;
    this.route = route;
    this.proSessionSettingsService = proSessionSettingsService;
    this.proCompanyService = proCompanyService;
    this.proRoleService = proRoleService;
    this.proBranchService = proBranchService;
    this.poI18nService = poI18nService;
    this.proTranslateStringService = proTranslateStringService;
    this.proBrandService = proBrandService;
    this.proSystemModuleService = proSystemModuleService;
    this.proThemeService = proThemeService;
    this.proDateService = proDateService;
    this.proAuthService = proAuthService;
    this.proJsToAdvplService = proJsToAdvplService;
    this.useHTTP = environment.useHTTP;
    this.darkSwitchValue = false;
    this.isDarkAllowed = false;
    this.isLoadingDark = true;
    this.isTokenValid = true;
    this.subs = new SubSink();
    this.companyColumns = [{
      property: "Code",
      label: ""
    }, {
      property: "CorporateName",
      label: ""
    }];
    this.branchColumns = this.getDefaultBranchColumns();
    this.moduleColumns = [{
      property: "id",
      label: ""
    }, {
      property: "name",
      label: ""
    }, {
      property: "description",
      label: ""
    }];
    this.roleColumns = [{
      property: "Code",
      label: ""
    }, {
      property: "Description",
      label: ""
    }];
    const language = poI18nService.getShortLanguage();
    poI18nService.getLiterals({
      language,
      context: "session"
    }).subscribe((literals) => {
      this.updLiterals(literals);
      this.updateBrand();
    });
    this.updateDateFormat(language);
    this.messageService.changeLanguage(language);
    this.changeServicesChannel();
    blockBackAction("/session-settings", "sessionSettings", this.proJsToAdvplService);
  }
  /**
   * @description Lista de colunas do Lookup de filiais
   * @returns Retorna uma lista de PoLookupColumn, contendo as colunas padrões do Lookup de filiais
   */
  getDefaultBranchColumns() {
    return [{
      property: "Code",
      label: "",
      width: "140px"
    }, {
      property: "Description",
      label: "",
      width: "200px"
    }, {
      property: "Cgc",
      label: "",
      width: "180px"
    }, {
      property: "CommercialName",
      label: "",
      width: "200px"
    }];
  }
  /**
   * @description metodo disparado a partir de um evento no lookup de company
   * utilizado para forçar o foco no lookup de branch
   */
  branchSettedEvent() {
    this.proBranchLookupComponent.setBranchFocus();
  }
  /**
   * @description Método disparado via o evento de troca de grupo de empresas
   * @param event Evento do formulário
   */
  changeBranchColumns(event) {
    this.updateCnpjTitle();
    const layout = event.layout || this.settingForm.value.companyLayout;
    if (layout) {
      this.branchColumns = this.getDefaultBranchColumns();
      this.updateBranchLiterals();
      const company = layout.includes("E");
      const unit = layout.includes("U");
      if (company) {
        this.branchColumns.push({
          property: "CompanyCode",
          label: this.literals.str0027,
          width: "100px"
        });
      }
      if (unit) {
        this.branchColumns.push({
          property: "UnitOfBusiness",
          label: this.literals.str0028,
          width: "100px"
        });
      }
      if ((unit || company) && layout.includes("F")) {
        this.branchColumns.push({
          property: "ParentCode",
          label: this.literals.str0012,
          width: "100px"
        });
      }
    }
  }
  /**
   * @description Método do ciclo de vida do Angular, esse método é chamado após o construtor da classe
   */
  ngOnInit() {
    this.showLoginMessage();
    this.canUseDarkTheme();
    this.showGoEmpFil = false;
    this.showMDIMenuInfo = false;
    this.isLoading = false;
    this.settingForm = this.buildForm();
    this.subs.sink = this.subscribeToResolver();
    this.logo = "./assets/images/totvs/totvs.svg";
    this.secondaryLogo = "./assets/images/totvs/totvs.svg";
    this.updateCnpjTitle();
  }
  /**
   * @description Responda depois que o Angular inicializar as visualizações do componente e as visualizações filhas ou a visualização que contém a diretiva.
   * utilizado aqui para setar o foco no componente de grupo de empresa na abertura da tela
   * e definir a variavel started para true do componente company
   */
  ngAfterViewInit() {
    this.darkSwitchValue = true;
    if (this.isTokenValid) {
      setTimeout(() => {
        this.proCompanyLookupComponent.setCompanyFocus();
        this.proCompanyLookupComponent.setStarted(true);
      }, 500);
    }
  }
  /**
   * @description Atualiza o título da coluna de CNPJ da consulta de filiais conforme API
   */
  updateCnpjTitle() {
    let unsubscribe;
    unsubscribe = this.proTranslateStringService.getStrList("fwfilial").subscribe({
      next: (strs) => {
        if (strs && strs.str0010) {
          this.cnpjTitle = strs.str0010;
          if (this.literals) {
            this.updateCnpjTitleColumn();
          }
        }
      },
      complete: () => unsubscribe ? unsubscribe.unsubscribe() : null
    });
  }
  /**
   * @description Atualiza o título da coluna de CNPJ no objeto da coluna da interface já criada
   */
  updateCnpjTitleColumn() {
    this.cnpjTitle = this.cnpjTitle || this.literals.str0026;
    this.branchColumns[2].label = this.cnpjTitle;
  }
  /**
   * @description Atualiza a descrição do modulo selecionado
   */
  updateModuleDescription() {
    this.proSystemModuleService.getSystemModule(this.settingForm.get("environment_code").value).subscribe((systemModule) => {
      this.settingForm.get("environment_description").patchValue(systemModule.description);
    });
  }
  /**
   * @description Cria e retorna o dados de controle de formulário das configurações de login
   * @returns Retorna o FormGroup do formulário de dados de login
   */
  buildForm() {
    return this.formBuilder.group({
      base_date: [null, [Validators.required]],
      company_code: [null, [Validators.required]],
      company_description: [null, [Validators.required]],
      branch_code: [null, [Validators.required]],
      branch_description: [null, [Validators.required]],
      environment_code: [null, [this.moduleValidator.bind(this), Validators.required]],
      environment_description: [null, [Validators.required]],
      role_code: [null, []],
      role_description: [null, []],
      mdi_menu_info: [false, []],
      go_emp_fil: [false, []],
      companyLayout: [null, []]
    });
  }
  moduleValidator(control) {
    if (!this.fixedModule && parseInt(control.value, 10) === 99) {
      return {
        configurador: this.literals.str0019
      };
    } else {
      return Validators.required(control);
    }
  }
  subscribeToResolver() {
    return this.route.data.subscribe((resultOfResolver) => {
      this.validateResolverData(resultOfResolver);
    });
  }
  validateResolverData(resolveData) {
    if (resolveData.defaultsSettings) {
      this.sessionSettingsDefaults = resolveData.defaultsSettings;
      this.fixedModule = typeof resolveData.defaultsSettings.environment_when === "undefined" ? false : !resolveData.defaultsSettings.environment_when;
      this.fixedRole = !resolveData.defaultsSettings.role_when;
      this.disableBackButton = resolveData.defaultsSettings.disable_back_button;
      this.showMDIMenuInfo = resolveData.defaultsSettings.show_mdi_menu_info;
      this.showGoEmpFil = resolveData.defaultsSettings.show_go_emp_fil;
      this.loadSettingForm();
    }
    if (resolveData.userInfo) {
      this.displayName = resolveData.userInfo.displayName;
    }
    if (!resolveData.userMfa) {
      this.isTokenValid = false;
      this.proSessionSettingsService.clearSettingsDefaults();
      this.router.navigate(["/login"]);
    }
  }
  set sessionSettingsDefaults(defaults) {
    if (defaults.base_date) {
      defaults.base_date = this.convertDateforPoDatePicker(defaults.base_date);
    } else {
      defaults.base_date = /* @__PURE__ */ new Date();
    }
    this._ProSessionSettingsDefaults = defaults;
  }
  get sessionSettingsDefaults() {
    return this._ProSessionSettingsDefaults;
  }
  convertDateforPoDatePicker(base_date) {
    let convertedDate = base_date;
    if (base_date && !(base_date instanceof Date)) {
      convertedDate = `${base_date}T00:00:00-02:00`;
    }
    return convertedDate;
  }
  loadSettingForm() {
    this.settingForm.get("company_code").patchValue(this.sessionSettingsDefaults.company_code);
    this.settingForm.patchValue(this.sessionSettingsDefaults);
    this.proCompanyService.company = {
      Code: this.sessionSettingsDefaults.company_code
    };
    this.proBranchService.branch = {
      Code: this.sessionSettingsDefaults.branch_code
    };
    this.proRoleService.role = {
      Code: this.sessionSettingsDefaults.role_code,
      Description: this.sessionSettingsDefaults.role_description
    };
  }
  onSessionSettingBack() {
    this.proSessionSettingsService.clearSettingsDefaults();
    this.router.navigate(["/login"]);
  }
  onSessionSettingSubmit() {
    this.isLoading = true;
    of(true).pipe(delay(100), tap(() => {
      if (this.settingForm.pending) {
        throw new Error();
      }
    }), retry(25), tap(() => {
      this.submitForm();
    })).subscribe({
      error: () => {
        this.isLoading = false;
        this.onErrorSubmit(this.literals.str0024);
      }
    });
  }
  submitForm() {
    if (this.settingForm.valid) {
      this.subs.sink = this.saveSettings(this.settingForm).subscribe({
        next: () => {
          this.messageService.changeLanguage(this.poI18nService.getShortLanguage());
          this.router.navigate(["/home"]);
        },
        error: () => {
          this.onErrorSubmit();
        }
      });
    } else {
      this.onErrorSubmit(this.literals.str0019);
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  onErrorSubmit(message) {
    this.isLoading = false;
    if (message) {
      this.messageService.showMessage(message, 2);
    }
    this.router.navigate(["/session-settings"]);
  }
  saveSettings(form) {
    const newSession = {
      base_date: form.get("base_date").value,
      company_code: form.get("company_code").value,
      branch_code: form.get("branch_code").value,
      environment_code: form.get("environment_code").value,
      role_code: form.get("role_code").value,
      mdi_menu_info: form.get("mdi_menu_info").value,
      go_emp_fil: form.get("go_emp_fil").value
    };
    return this.proSessionSettingsService.saveSettingsDefaults(newSession);
  }
  setChannelAsHTTP(value) {
    this.useHTTP = value;
    this.changeServicesChannel();
  }
  isChannelHTTP() {
    return this.useHTTP;
  }
  /**
   * @description Atualiza o Canal de comunicação
   * dos serviços utilizados pelo componente
   * @returns void
   */
  changeServicesChannel() {
    this.proCompanyService.setChannelAsHTTP(this.useHTTP);
    this.proBranchService.setChannelAsHTTP(this.useHTTP);
    this.proTranslateStringService.setChannelAsHTTP(this.useHTTP);
    this.proSystemModuleService.setChannelAsHTTP(this.useHTTP);
  }
  /**
   * @description Atualiza as variaveis a partir da marca
   * ma3 na russia e protheus nas demais
   * @returns void
   */
  updateResourceByBrand() {
    if (this.brand == "MA3") {
      this.logo = "./assets/images/nationalplatform/nationalplatform.svg";
      this.secondaryLogo = "./assets/images/nationalplatform/nationalplatform.svg";
      this.productName = "Ma-3 Line";
    } else {
      this.logo = "./assets/images/totvs/totvs.svg";
      this.secondaryLogo = "./assets/images/totvs/totvs.svg";
      this.productName = this.literals.str0001;
    }
  }
  /**
   * @description atualiza a variavel productName.
   * quando não for MA3 precisa atualziar com a literals cada vez que muda o idioma
   * @returns void
   */
  updateProductName() {
    if (this.brand != "MA3") {
      this.productName = this.literals.str0001;
    }
  }
  /**
   * @description atualiza a variavel de marca
   * @returns void
   */
  updateBrand() {
    this.proBrandService.setChannelAsHTTP(environment.useHTTP);
    this.proBrandService.getERPBrand().subscribe({
      next: (brand) => {
        this.brand = brand;
        this.updateResourceByBrand();
      },
      error: () => {
        this.brand = "TOTVS";
        this.updateResourceByBrand();
      }
    });
  }
  /**
   * @description atualiza o formato de data do po-datepicker
   * @param language string codigo do idioma.
   * @returns void
   */
  updateDateFormat(language) {
    this.proDateService.getDateFormat(language).pipe(take(1)).subscribe({
      next: (dateFormat) => this.dateFormat = dateFormat,
      error: () => this.dateFormat = "dd/mm/yyyy"
    });
  }
  /**
   * @description Retorna ícone a ser utilizado no botão de ativar/desativar o dark.
   * @returns string
   */
  getDarkSwitchClass() {
    if (this.isLoadingDark) {
      return "an an-circle-notch session-dark-icon";
    } else {
      return this.darkSwitchValue ? "an an-moon session-dark-icon" : "an an-sun session-dark-icon";
    }
  }
  /**
   * @description Retorna o texto de apoio a ser utilizado no botão de ativar/desativar o dark.
   * @returns string
   */
  getDarkTooltipValue() {
    return this.darkSwitchValue ? this.literals.str0030 : this.literals.str0029;
  }
  /**
   * @description Executa ação ao ativar/desativar o dark.
   * @param value boolean
   */
  onChangeDarkSwitchValue(value) {
    this.isLoadingDark = true;
    this.darkSwitchValue = value;
    this.proThemeService.setThemeProfile(value ? "true" : "false").pipe(finalize(() => this.isLoadingDark = false)).subscribe({
      next: () => {
        if (value) {
          this.proThemeService.setTheme(ProThemeEnum.proThemeTotvsClassic, PoThemeTypeEnum.dark);
        } else {
          this.proThemeService.setTheme();
        }
        ;
      }
    });
  }
  /**
   * @description Consulta se mostra ou não o botão de ativar/desativar o dark.
   */
  canUseDarkTheme() {
    this.isLoadingDark = true;
    this.proThemeService.canUseDarkTheme().pipe(tap((isDarkAllowed) => this.isDarkAllowed = isDarkAllowed), switchMap((isDarkAllowed) => this.getProfileValue(isDarkAllowed))).pipe(finalize(() => this.isLoadingDark = false)).subscribe({
      next: (isDarkEnabled) => {
        this.darkSwitchValue = isDarkEnabled;
        if (isDarkEnabled) {
          this.proThemeService.setTheme(ProThemeEnum.proThemeTotvsClassic, PoThemeTypeEnum.dark);
        } else {
          this.proThemeService.setTheme();
        }
        ;
      }
    });
  }
  /**
   * @description Consulta valor do profile para saber se usuário está com o dark habilitado.
   * @param isDarkAllowed boolean, indica se o usuário pode ativar/desativar o dark.
   * @returns Observable de string
   */
  getProfileValue(isDarkAllowed) {
    if (isDarkAllowed) {
      return this.proThemeService.getThemeProfile();
    } else {
      return of(false);
    }
    ;
  }
  /**
   * @description
   * Notificar o usuário que a autenticação foi bem sucessidade. Utilizada em casos que a página de Autenticação é igorada
   */
  showLoginMessage() {
    this.proAuthService.showLoginMessage();
  }
  static {
    this.\u0275fac = function ProSessionSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSessionSettingsComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProMessageService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProSessionSettingsService), \u0275\u0275directiveInject(ProCompanyService), \u0275\u0275directiveInject(ProRoleService), \u0275\u0275directiveInject(ProBranchService), \u0275\u0275directiveInject(PoI18nService), \u0275\u0275directiveInject(ProTranslateStringService), \u0275\u0275directiveInject(ProBrandService), \u0275\u0275directiveInject(ProSystemModuleService), \u0275\u0275directiveInject(ProThemeService), \u0275\u0275directiveInject(ProDateService), \u0275\u0275directiveInject(ProAuthService), \u0275\u0275directiveInject(ProJsToAdvplService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProSessionSettingsComponent,
      selectors: [["pro-session-settings"]],
      viewQuery: function ProSessionSettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(ProBranchLookupComponent, 5);
          \u0275\u0275viewQuery(ProCompanyLookupComponent, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.proBranchLookupComponent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.proCompanyLookupComponent = _t.first);
        }
      },
      inputs: {
        environment: [0, "p-environment", "environment"],
        background: [0, "p-background", "background"],
        hideLogo: [0, "p-hide-logo", "hideLogo"],
        highlightInfo: [0, "p-highlight-info", "highlightInfo"]
      },
      standalone: false,
      decls: 6,
      vars: 4,
      consts: [[1, "po-page-login-support", 3, "click", "hidden"], [1, "po-icon", "po-icon-help"], [1, "session-dark-switch"], ["p-show-select-language", "", 3, "p-background", "p-highlight-info", "p-logo", "p-secondary-logo"], [3, "ngClass"], ["p-tooltip-position", "bottom-left", 3, "p-change", "p-tooltip", "p-value", "p-disabled", "p-hide-label-status"], ["p-show-select-language", "", 3, "p-selected-language", "p-background", "p-highlight-info", "p-logo", "p-secondary-logo"], [1, "po-page-login-header"], [1, "session-display-top", "session-display-bot"], [1, "po-page-login-header-product-name"], ["p-type", "warning", 3, "p-value", 4, "ngIf"], [1, "po-page-login-header-welcome", "session-display-bot"], [1, "session-settings-form", 3, "formGroup"], [1, "po-row"], [1, "po-md-12", "po-lg-12", "po-xl-12", "po-page-login-info-container", "session-date-container"], ["name", "base_date", "formControlName", "base_date", "p-clean", "", "p-required", "", 1, "po-md-7", "po-lg-7", "po-xl-7", 3, "p-format", "p-label"], [1, "po-page-login-info-icon-container", "session-hint-div"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", 3, "p-tooltip"], [1, "po-md-12", 3, "companySetted", "branchSetted", "parent", "p-label", "p-hint", "pro-columns"], [1, "po-md-12", 3, "p-label", "p-hint", "pro-columns", "parent"], [1, "po-md-12", 3, "p-label", "p-disabled", "p-hint", "pro-columns", "parent"], [1, "po-md-12", 3, "p-label", "p-disabled", "p-hint", "parent"], ["class", "session-reminder-container", 4, "ngIf"], [1, "po-md-12", "po-page-login-info-container", "session-settings-buttons"], ["name", "back", 1, "po-md-6", 3, "p-click", "p-disabled", "p-label"], ["name", "submmit", "p-kind", "primary", 1, "po-md-6", "session-settings-button-enter", 3, "p-click", "p-disabled", "p-label", "p-loading"], [1, "po-page-login-info-icon-container", "session-empty-div"], ["p-type", "warning", 3, "p-value"], [1, "session-reminder-container"], ["name", "mdi_menu_info", "formControlName", "mdi_menu_info", "p-label", " ", 1, "session-remider-switch", 3, "p-label-off", "p-label-on"], ["name", "go_emp_fil", "formControlName", "go_emp_fil", "p-label", " ", 1, "session-remider-switch", 3, "p-label-off", "p-label-on"], ["p-tooltip-position", "right", 1, "po-icon", "po-field-icon", "po-icon-info", "session-reminder-tooltip", 3, "p-tooltip"]],
      template: function ProSessionSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div")(1, "button", 0);
          \u0275\u0275listener("click", function ProSessionSettingsComponent_Template_button_click_1_listener() {
            return ctx.activateSupport();
          });
          \u0275\u0275element(2, "span", 1);
          \u0275\u0275text(3);
          \u0275\u0275elementEnd();
          \u0275\u0275template(4, ProSessionSettingsComponent_Conditional_4_Template, 3, 5, "div", 2);
          \u0275\u0275elementEnd();
          \u0275\u0275template(5, ProSessionSettingsComponent_Conditional_5_Template, 26, 40, "pro-page-background", 3);
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275property("hidden", !(ctx.literals == null ? null : ctx.literals.str0004));
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate1(" ", ctx.literals == null ? null : ctx.literals.str0004, " ");
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isDarkAllowed ? 4 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isTokenValid ? 5 : -1);
        }
      },
      dependencies: [NgClass, NgIf, PoButtonComponent, PoDatepickerComponent, PoSwitchComponent, PoTagComponent, ProPageBackgroundComponent, PoTooltipDirective, ProCompanyLookupComponent, ProBranchLookupComponent, ProRoleLookupComponent, ProSystemModuleLookupComponent, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PoI18nPipe],
      styles: [".session-hint-div[_ngcontent-%COMP%]{padding:37px 0 0}.session-empty-div[_ngcontent-%COMP%]{width:30px}.session-info-diff[_ngcontent-%COMP%]{width:191px}.session-date-container[_ngcontent-%COMP%]{display:inline-block}.session-reminder-container[_ngcontent-%COMP%]{padding:0 16px;display:flex;margin-top:0}.session-reminder-tooltip[_ngcontent-%COMP%]{padding:27px 0 0 20px}.session-display-top[_ngcontent-%COMP%]{padding-top:3%}.session-display-bot[_ngcontent-%COMP%]{padding-bottom:2.2%}.session-settings-buttons[_ngcontent-%COMP%]{padding-top:10px}.session-dark-switch[_ngcontent-%COMP%]{position:absolute;z-index:1;right:24px;top:120px;text-align:center;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:92px}.session-dark-icon[_ngcontent-%COMP%]{margin-right:10px;font-size:22px}@media (min-width: 1367px){.session-empty-div[_ngcontent-%COMP%]{width:33px}.session-info-diff[_ngcontent-%COMP%]{width:187px}}@media (min-width: 768px){.session-settings-form[_ngcontent-%COMP%]{padding-top:0}}@media (max-width: 480px){.session-settings-button-enter[_ngcontent-%COMP%]{padding-top:15px}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSessionSettingsComponent, [{
    type: Component,
    args: [{
      selector: "pro-session-settings",
      standalone: false,
      template: `<div>\r
  <button\r
  class="po-page-login-support"\r
  (click)="activateSupport()"\r
  [hidden]="!literals?.str0004"\r
  >\r
    <span class="po-icon po-icon-help"></span>\r
    {{ literals?.str0004 }}\r
    <!-- Suporte -->\r
  </button>\r
\r
  @if (isDarkAllowed) {\r
    <div class="session-dark-switch">\r
      <span [ngClass]="getDarkSwitchClass()"></span>\r
      <po-switch\r
        [p-tooltip]="getDarkTooltipValue()"\r
        p-tooltip-position="bottom-left"\r
        [p-value]="darkSwitchValue"\r
        (p-change)="onChangeDarkSwitchValue($event)"\r
        [p-disabled]="isLoadingDark"\r
        [p-hide-label-status]="true"\r
      />\r
    </div>\r
  }\r
</div>\r
\r
@if (isTokenValid) {\r
  <pro-page-background\r
    p-show-select-language\r
    [p-background]="background"\r
    [p-highlight-info]="highlightInfo"\r
    [p-logo]="logo"\r
    [p-secondary-logo]="secondaryLogo"\r
    (p-selected-language)="onSelectedLanguage($event)"\r
  >\r
  <header class="po-page-login-header">\r
    <div class="session-display-top session-display-bot">\r
      <div class="po-page-login-header-product-name">\r
        <h1>{{ productName }}</h1>\r
        <!-- Linha Protheus -->\r
      </div>\r
      <po-tag *ngIf="environment" p-type="warning" [p-value]="environment">\r
      </po-tag>\r
    </div>\r
    <div class="po-page-login-header-welcome session-display-bot">\r
      {{\r
        displayName\r
          ? (literals?.str0009 | poI18n: [displayName])\r
          : literals?.str0006\r
      }}<!-- Boas-vindas, {0}. --><!-- Carregando... -->\r
    </div>\r
  </header>\r
  <form class="session-settings-form" [formGroup]="settingForm">\r
    <div class="po-row">\r
      <div class="po-md-12 po-lg-12 po-xl-12 po-page-login-info-container session-date-container">\r
        <po-datepicker\r
          class="po-md-7 po-lg-7 po-xl-7"\r
          name="base_date"\r
          formControlName="base_date"\r
          p-clean\r
          [p-format]="dateFormat"\r
          [p-label]="literals?.str0018"\r
          p-required\r
        ></po-datepicker\r
        ><!-- Data base -->\r
        <div class="po-page-login-info-icon-container session-hint-div">\r
          <span\r
            class="po-icon po-field-icon po-icon-info"\r
            [p-tooltip]="literals?.str0002"\r
            p-tooltip-position="right"\r
            ><!-- Escolha a data base do sistema. -->\r
          </span>\r
        </div>\r
      </div>\r
      <pro-company-lookup\r
        class="po-md-12"\r
        [parent]="settingForm"\r
        [p-label]="literals?.str0010"\r
        [p-hint]="literals?.str0011"\r
        [pro-columns]="companyColumns"\r
        (companySetted)="changeBranchColumns($event)"\r
        (branchSetted)="branchSettedEvent()"\r
      ></pro-company-lookup\r
      ><!-- Grupo --><!-- Selecione o Grupo de Empresas. -->\r
      <pro-branch-lookup\r
        [p-label]="literals?.str0012"\r
        [p-hint]="literals?.str0013"\r
        [pro-columns]="branchColumns"\r
        class="po-md-12"\r
        [parent]="settingForm"\r
        ><!-- Filial --><!-- Selecione a Filial. -->\r
      </pro-branch-lookup>\r
      <pro-system-module-lookup\r
        [p-label]="literals?.str0014"\r
        [p-disabled]="fixedModule"\r
        [p-hint]="literals?.str0015"\r
        [pro-columns]="moduleColumns"\r
        class="po-md-12"\r
        [parent]="settingForm"\r
        ><!-- Ambiente --><!-- Selecione o m\xF3dulo do sistema. -->\r
      </pro-system-module-lookup>\r
      <pro-role-lookup\r
        [p-label]="literals?.str0016"\r
        [p-disabled]="fixedRole"\r
        [p-hint]="literals?.str0017"\r
        class="po-md-12"\r
        [parent]="settingForm"\r
      ></pro-role-lookup\r
      ><!-- Papel de trabalho --><!-- Selecione um Papel de trabalho. -->\r
      <div *ngIf="showGoEmpFil" class="session-reminder-container">\r
        <po-switch\r
          class="session-remider-switch"\r
          name="mdi_menu_info"\r
          formControlName="mdi_menu_info"\r
          p-label=" "\r
          [p-label-off]="literals?.str0005"\r
          [p-label-on]="literals?.str0005"\r
        ></po-switch\r
        ><!-- Usar as informa\xE7\xF5es acima em todas as sess\xF5es. -->\r
      </div>\r
      <div *ngIf="showMDIMenuInfo" class="session-reminder-container">\r
        <po-switch\r
          class="session-remider-switch"\r
          name="go_emp_fil"\r
          formControlName="go_emp_fil"\r
          p-label=" "\r
          [p-label-off]="literals?.str0023"\r
          [p-label-on]="literals?.str0023"\r
        ></po-switch\r
        ><!-- Iniciar com as informa\xE7\xF5es da \xFAltima sess\xE3o. -->\r
        <span\r
          class="po-icon po-field-icon po-icon-info session-reminder-tooltip"\r
          [p-tooltip]="literals?.str0003"\r
          p-tooltip-position="right"\r
          ><!-- Voc\xEA pode desabilitar essa op\xE7\xE3o no menu do sistema. -->\r
        </span>\r
      </div>\r
\r
      <div\r
        class="po-md-12 po-page-login-info-container session-settings-buttons"\r
      >\r
        <po-button\r
          class="po-md-6"\r
          name="back"\r
          [p-disabled]="isLoading || disableBackButton"\r
          [p-label]="literals?.str0008"\r
          (p-click)="onSessionSettingBack()"\r
          ><!-- Voltar -->\r
        </po-button>\r
        <po-button\r
          class="po-md-6 session-settings-button-enter"\r
          name="submmit"\r
          p-kind="primary"\r
          [p-disabled]="\r
            !(\r
              this.settingForm.get('company_code').value &&\r
              this.settingForm.get('branch_code').value &&\r
              this.settingForm.get('environment_code').value\r
            )\r
          "\r
          [p-label]="isLoading ? literals?.str0006 : literals?.str0007"\r
          [p-loading]="isLoading"\r
          (p-click)="onSessionSettingSubmit()"\r
          ><!-- Carregando... --><!-- Entrar -->\r
        </po-button>\r
        <div class="po-page-login-info-icon-container session-empty-div"></div>\r
      </div>\r
    </div>\r
  </form>\r
</pro-page-background>\r
}`,
      styles: [".session-hint-div{padding:37px 0 0}.session-empty-div{width:30px}.session-info-diff{width:191px}.session-date-container{display:inline-block}.session-reminder-container{padding:0 16px;display:flex;margin-top:0}.session-reminder-tooltip{padding:27px 0 0 20px}.session-display-top{padding-top:3%}.session-display-bot{padding-bottom:2.2%}.session-settings-buttons{padding-top:10px}.session-dark-switch{position:absolute;z-index:1;right:24px;top:120px;text-align:center;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:92px}.session-dark-icon{margin-right:10px;font-size:22px}@media (min-width: 1367px){.session-empty-div{width:33px}.session-info-diff{width:187px}}@media (min-width: 768px){.session-settings-form{padding-top:0}}@media (max-width: 480px){.session-settings-button-enter{padding-top:15px}}\n"]
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: Router
  }, {
    type: ProMessageService
  }, {
    type: ActivatedRoute
  }, {
    type: ProSessionSettingsService
  }, {
    type: ProCompanyService
  }, {
    type: ProRoleService
  }, {
    type: ProBranchService
  }, {
    type: PoI18nService
  }, {
    type: ProTranslateStringService
  }, {
    type: ProBrandService
  }, {
    type: ProSystemModuleService
  }, {
    type: ProThemeService
  }, {
    type: ProDateService
  }, {
    type: ProAuthService
  }, {
    type: ProJsToAdvplService
  }], {
    environment: [{
      type: Input,
      args: ["p-environment"]
    }],
    background: [{
      type: Input,
      args: ["p-background"]
    }],
    hideLogo: [{
      type: Input,
      args: ["p-hide-logo"]
    }],
    highlightInfo: [{
      type: Input,
      args: ["p-highlight-info"]
    }],
    proBranchLookupComponent: [{
      type: ViewChild,
      args: [ProBranchLookupComponent]
    }],
    proCompanyLookupComponent: [{
      type: ViewChild,
      args: [ProCompanyLookupComponent]
    }]
  });
})();
var ProPageBackgroundModule = class _ProPageBackgroundModule {
  static {
    this.\u0275fac = function ProPageBackgroundModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProPageBackgroundModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProPageBackgroundModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProPageBackgroundModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, PoDividerModule, PoFieldModule],
      declarations: [ProPageBackgroundComponent],
      exports: [ProPageBackgroundComponent]
    }]
  }], null, null);
})();
var ProSessionSettingsModule = class _ProSessionSettingsModule {
  static {
    this.\u0275fac = function ProSessionSettingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProSessionSettingsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProSessionSettingsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, PoButtonModule, PoFieldModule, ProPageBackgroundModule, PoModule, PoTagModule, PoTooltipModule, ProFieldsModule, ReactiveFormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProSessionSettingsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PoButtonModule, PoFieldModule, ProPageBackgroundModule, PoModule, PoTagModule, PoTooltipModule, ProFieldsModule, ReactiveFormsModule],
      declarations: [ProSessionSettingsComponent],
      exports: [ProSessionSettingsComponent]
    }]
  }], null, null);
})();
var ProLoginComponent = class _ProLoginComponent {
  set nextRoute(value) {
    this._nextRoute = value;
  }
  get nextRoute() {
    return this._nextRoute ? this._nextRoute : "/session-settings";
  }
  constructor(router, route, authService, messageService, poI18nService, elRef, proLanguageService, proBrandService, proMfaService, proSessionSettingsService, proJsToAdvplService) {
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.messageService = messageService;
    this.poI18nService = poI18nService;
    this.elRef = elRef;
    this.proLanguageService = proLanguageService;
    this.proBrandService = proBrandService;
    this.proMfaService = proMfaService;
    this.proSessionSettingsService = proSessionSettingsService;
    this.proJsToAdvplService = proJsToAdvplService;
    this.subs = new SubSink();
    this.languages = [];
    this.logo = "";
    this.productName = "";
    blockBackAction("", "login", this.proJsToAdvplService);
    this.updateLangs();
    const language = poI18nService.getShortLanguage();
    poI18nService.getLiterals({
      language,
      context: "login"
    }).subscribe((literals) => {
      this.updLiterals(literals);
      this.updateBrand();
    });
    this.messageService.changeLanguage(language);
  }
  ngOnInit() {
    this.authService.logout();
    this.isLoading = false;
    this.subs.add(this.subscribeToResolver());
    this.proSessionSettingsService.clearSettingsDefaults();
  }
  ngAfterViewInit() {
    this.setFocusToInput(this.inputFocus);
  }
  setFocusToInput(name) {
    const input = this.elRef.nativeElement.querySelector('input[name="' + name + '"]');
    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  }
  subscribeToResolver() {
    return this.route.data.subscribe((resultOfResolver) => {
      this.validateResolverData(resultOfResolver);
    });
  }
  /**
   * @description Metodo que realiza o login no protheus
   * @returns Subscription
   */
  subscribeToLogin(user) {
    let redirect;
    let hasMfa;
    return this.authService.login(user).pipe(catchError((error) => {
      this.errorLogin(error);
      return error;
    }), tap((auth) => {
      redirect = this.authService.redirectUrl ? this.authService.redirectUrl : this.nextRoute;
      hasMfa = auth.hasMFA;
      this.proMfaService.setHasMFA(auth.hasMFA);
    }), concatMap(() => {
      return this.proMfaService.isSIGACFG();
    })).subscribe({
      next: (isSIGACFG) => {
        this.proMfaService.setIsSigaCfg(isSIGACFG);
        if (!isSIGACFG) {
          if (hasMfa) {
            redirect = `/pro-mfa${redirect}/login`;
          }
        }
        this.resetLoading(this.router.navigate([redirect]));
      },
      error: (error) => {
        this.errorLogin(error);
      }
    });
  }
  /**
   * @description metodo que efetua o tratamento de erros.
   * @param language opção de idioma escolhido pelo usuário
   * @returns void
   */
  errorLogin(error) {
    this.isLoading = false;
    this.messageService.showOneMessage(this.parseErrorMessage(error));
    this.router.navigate(["/login"]);
  }
  resetLoading(navigatePromise) {
    if (navigatePromise) {
      navigatePromise.then(() => {
        this.isLoading = false;
      }).catch((error) => {
        console.error(error);
        this.isLoading = false;
      });
    }
  }
  validateResolverData(resolveData) {
    if (resolveData.defaultsLogin) {
      this.userDefaults = resolveData.defaultsLogin;
      this.hideRememberUser = !resolveData.defaultsLogin.showBindUserToSO || resolveData.defaultsLogin.singleSignOnRequired;
      this.loginValue = resolveData.defaultsLogin.cGetUser;
      this.inputFocus = resolveData.defaultsLogin.setFocus;
    }
  }
  set userDefaults(defaults) {
    this._ProUserDefaults = defaults;
  }
  get userDefaults() {
    return this._ProUserDefaults;
  }
  onLoginSubmit(formData) {
    const user = {
      username: formData.login,
      password: formData.password,
      remember_user: formData.rememberUser || this.userDefaults.singleSignOnRequired
    };
    this.login(user);
  }
  /**
   * @description metodo chamado na mudança do combox de idioma da tela de login
   * @param language opção de idioma escolhido pelo usuário
   * @returns void
   */
  onLanguageChange({
    language
  }) {
    this.poI18nService.setLanguage(language, false);
    this.poI18nService.getLiterals({
      language,
      context: "login"
    }).subscribe((literals) => {
      this.updLiterals(literals);
      this.updateProductName();
    });
    this.messageService.changeLanguage(language);
  }
  /**
   * @description Métodode atualização das traduções
   * @param objeto das traduções
   */
  updLiterals(literals) {
    this.literals = {
      str0001: literals.str0001,
      str0002: literals.str0002,
      str0003: literals.str0003,
      str0004: literals.str0004,
      loginLabel: literals.str0005,
      loginPlaceholder: literals.str0006,
      passwordLabel: literals.str0007,
      loginHint: literals.str0008,
      rememberUserHint: literals.str0009,
      passwordPlaceholder: "",
      str0010: literals.str0010
    };
  }
  onLoginChange(login) {
    this.loginValue = login;
  }
  callRecoverPassword() {
    this.authService.passwordRecovery(this.loginValue);
  }
  /**
   * @description Método para obter o link de suporte e abrir em nova guia
   */
  supportLink(language = this.poI18nService.getShortLanguage()) {
    let supportLink = "http://suporte.totvs.com/";
    if (this.brand == "MA3") {
      supportLink = language === "en" ? "https://www.national-platform.com/" : "https://www.national-platform.ru/";
    } else {
      if (language === "es") {
        supportLink = "https://totvscst.zendesk.com/hc/es#home";
      } else if (language === "en") {
        supportLink = "https://totvscst.zendesk.com/hc/en-us#home";
      }
    }
    window.open(supportLink, "_blank");
  }
  login(user) {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.subs.add(this.subscribeToLogin(user));
  }
  parseErrorMessage(error) {
    switch (error.status) {
      case 401:
        return this.literals.str0002;
      // 'Usuário ou senha inválida.'
      case 0:
        return this.literals.str0003;
      // 'Não foi possível estabelecer conexão com o servidor.';
      default:
        if (error.error && error.error.errorMessage) {
          return this.literals.str0004 + ": " + error.error.errorMessage;
        } else {
          return this.literals.str0004 + ".";
        }
    }
  }
  /**
   * @description Atualiza os idiomas disponíveis
   */
  updateLangs() {
    this.proLanguageService.setChannelAsHTTP(environment.useHTTP);
    this.proLanguageService.getListOfLanguages().subscribe({
      next: (langs) => {
        this.languages = langs;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  /**
   * @description Atualiza as variaveis a partir da marca
   * ma3 na russia e protheus nas demais
   * @returns void
   */
  updateResourceByBrand() {
    if (this.brand == "MA3") {
      this.logo = "./assets/images/nationalplatform/nationalplatform.svg";
      this.productName = "Ma-3 Line";
    } else {
      this.logo = "./assets/images/totvs/totvs.svg";
      this.productName = this.literals.str0001;
    }
  }
  /**
   * @description atualiza a variavel productName.
   * quando não for MA3 precisa atualziar com a literals cada vez que muda o idioma
   * @returns void
   */
  updateProductName() {
    if (this.brand != "MA3") {
      this.productName = this.literals.str0001;
    }
  }
  /**
   * @description atualiza a variavel de marca
   * @returns void
   */
  updateBrand() {
    this.proBrandService.setChannelAsHTTP(environment.useHTTP);
    this.proBrandService.getERPBrand().subscribe({
      next: (brand) => {
        this.brand = brand;
        this.updateResourceByBrand();
      },
      error: (error) => {
        this.brand = "TOTVS";
        this.updateResourceByBrand();
      }
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static {
    this.\u0275fac = function ProLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProLoginComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProAuthService), \u0275\u0275directiveInject(ProMessageService), \u0275\u0275directiveInject(PoI18nService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ProLanguageService), \u0275\u0275directiveInject(ProBrandService), \u0275\u0275directiveInject(ProMfaService), \u0275\u0275directiveInject(ProSessionSettingsService), \u0275\u0275directiveInject(ProJsToAdvplService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ProLoginComponent,
      selectors: [["pro-login"]],
      inputs: {
        nextRoute: [0, "pro-next-route", "nextRoute"]
      },
      standalone: false,
      decls: 4,
      vars: 11,
      consts: [[1, "po-page-login-support", 3, "click", "hidden"], [1, "po-icon", "po-icon-help"], [3, "p-login-submit", "p-login-change", "p-language-change", "p-hide-remember-user", "p-languages", "p-login", "p-loading", "p-literals", "p-product-name", "p-recovery", "p-logo", "p-secondary-logo"]],
      template: function ProLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "button", 0);
          \u0275\u0275listener("click", function ProLoginComponent_Template_button_click_0_listener() {
            return ctx.supportLink();
          });
          \u0275\u0275element(1, "span", 1);
          \u0275\u0275text(2);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "po-page-login", 2);
          \u0275\u0275listener("p-login-submit", function ProLoginComponent_Template_po_page_login_p_login_submit_3_listener($event) {
            return ctx.onLoginSubmit($event);
          })("p-login-change", function ProLoginComponent_Template_po_page_login_p_login_change_3_listener($event) {
            return ctx.onLoginChange($event);
          })("p-language-change", function ProLoginComponent_Template_po_page_login_p_language_change_3_listener($event) {
            return ctx.onLanguageChange($event);
          });
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275property("hidden", !(ctx.literals == null ? null : ctx.literals.str0010));
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate1(" ", ctx.literals == null ? null : ctx.literals.str0010, " ");
          \u0275\u0275advance();
          \u0275\u0275property("p-hide-remember-user", ctx.hideRememberUser)("p-languages", ctx.languages)("p-login", ctx.loginValue)("p-loading", ctx.isLoading)("p-literals", ctx.literals)("p-product-name", ctx.productName)("p-recovery", ctx.callRecoverPassword.bind(ctx))("p-logo", ctx.logo)("p-secondary-logo", ctx.logo);
        }
      },
      dependencies: [PoPageLoginComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProLoginComponent, [{
    type: Component,
    args: [{
      selector: "pro-login",
      standalone: false,
      template: '<button\r\n  class="po-page-login-support"\r\n  (click)="supportLink()"\r\n  [hidden]="!literals?.str0010"\r\n>\r\n  <span class="po-icon po-icon-help"></span>\r\n  {{ literals?.str0010 }}\r\n  <!-- Suporte -->\r\n</button>\r\n\r\n<po-page-login\r\n  [p-hide-remember-user]="hideRememberUser"\r\n  (p-login-submit)="onLoginSubmit($event)"\r\n  (p-login-change)="onLoginChange($event)"\r\n  [p-languages]="languages"\r\n  (p-language-change)="onLanguageChange($event)"\r\n  [p-login]="loginValue"\r\n  [p-loading]="isLoading"\r\n  [p-literals]="literals"\r\n  [p-product-name]="productName"\r\n  [p-recovery]="this.callRecoverPassword.bind(this)"\r\n  [p-logo]="logo"\r\n  [p-secondary-logo]="logo">\r\n  <!-- Linha Protheus -->\r\n</po-page-login>\r\n'
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: ProAuthService
  }, {
    type: ProMessageService
  }, {
    type: PoI18nService
  }, {
    type: ElementRef
  }, {
    type: ProLanguageService
  }, {
    type: ProBrandService
  }, {
    type: ProMfaService
  }, {
    type: ProSessionSettingsService
  }, {
    type: ProJsToAdvplService
  }], {
    nextRoute: [{
      type: Input,
      args: ["pro-next-route"]
    }]
  });
})();
var ProLoginModule = class _ProLoginModule {
  static {
    this.\u0275fac = function ProLoginModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProLoginModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProLoginModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule, PoComponentsModule, ReactiveFormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProLoginModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PoComponentsModule, ReactiveFormsModule],
      declarations: [ProLoginComponent],
      exports: [ProLoginComponent]
    }]
  }], null, null);
})();
var ProPagesModule = class _ProPagesModule {
  static {
    this.\u0275fac = function ProPagesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProPagesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProPagesModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [ProI18nConfigModule, ProHomeModule, PoModule, ProLoginModule, ProPageBackgroundModule, ProSessionSettingsModule, ProHomeModule, ProLoginModule, ProPageBackgroundModule, ProSessionSettingsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProPagesModule, [{
    type: NgModule,
    args: [{
      imports: [ProI18nConfigModule, ProHomeModule, PoModule, ProLoginModule, ProPageBackgroundModule, ProSessionSettingsModule],
      exports: [ProHomeModule, ProLoginModule, ProPageBackgroundModule, ProSessionSettingsModule]
    }]
  }], null, null);
})();
var ProComponentsModule = class _ProComponentsModule {
  static {
    this.\u0275fac = function ProComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProComponentsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProComponentsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [ProFieldsModule, ProPagesModule, ProFieldsModule, ProPagesModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ProFieldsModule, ProPagesModule],
      exports: [ProFieldsModule, ProPagesModule]
    }]
  }], null, null);
})();
var ProtheusLibCoreModule = class _ProtheusLibCoreModule {
  static {
    this.\u0275fac = function ProtheusLibCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProtheusLibCoreModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ProtheusLibCoreModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [ProComponentsModule, ProServicesModule, ProComponentsModule, ProServicesModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProtheusLibCoreModule, [{
    type: NgModule,
    args: [{
      imports: [ProComponentsModule, ProServicesModule],
      exports: [ProComponentsModule, ProServicesModule]
    }]
  }], null, null);
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  AppComponentService;
  proAppConfigService;
  router;
  activatedRoute;
  breadcrumbItems = [];
  menuItemSelected = "";
  menus = [
    {
      label: "Fiscal",
      icon: "an an-newspaper",
      shortLabel: "Fiscal",
      subItems: [
        { label: "\u{1F4C4} Rcap", action: this.relatorioRcapClick.bind(this) }
      ]
    },
    {
      label: "Sair",
      icon: "an an-door-open",
      shortLabel: "Sair",
      action: this.closeApp.bind(this)
    }
  ];
  constructor(AppComponentService2, proAppConfigService, router, activatedRoute) {
    this.AppComponentService = AppComponentService2;
    this.proAppConfigService = proAppConfigService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.atualizaTituloDinamico();
    this.menuItemSelected = "Relat\xF3rio";
    if (this.router.url === "/" || this.router.url === "") {
      this.router.navigate(["/relatorio-rcap"]);
    }
  }
  printMenuAction(menu) {
    AppComponentService;
    this.menuItemSelected = menu.label;
  }
  atualizaTituloDinamico() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let route = this.activatedRoute.firstChild;
      while (route?.firstChild) {
        route = route.firstChild;
      }
      const breadcrumb = route?.snapshot.data?.["breadcrumb"] || "";
      this.breadcrumbItems = [
        { label: this.menuItemSelected },
        { label: breadcrumb }
      ];
    });
  }
  relatorioRcapClick() {
    this.router.navigate(["/", "relatorio-rcap"]);
  }
  closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert("O App n\xE3o est\xE1 sendo executado dentro do Protheus.");
    }
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AppComponentService), \u0275\u0275directiveInject(ProAppConfigService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], features: [\u0275\u0275ProvidersFeature([AppComponentService])], decls: 5, vars: 7, consts: [[1, "po-wrapper"], ["p-logo", "imagens/icon.png", "p-short-logo", "imagens/icon-2.png", 3, "p-collapsed", "p-filter", "p-automatic-toggle", "p-menus", "p-service"], [3, "p-items"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "po-menu", 1);
      \u0275\u0275elementStart(2, "po-page-default");
      \u0275\u0275element(3, "po-breadcrumb", 2)(4, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("p-collapsed", true)("p-filter", false)("p-automatic-toggle", false)("p-menus", ctx.menus)("p-service", ctx.AppComponentService)("p-automatic-toggle", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("p-items", ctx.breadcrumbItems);
    }
  }, dependencies: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoMenuComponent,
    PoPageModule,
    PoPageDefaultComponent,
    PoBreadcrumbModule,
    PoBreadcrumbComponent,
    RouterOutlet
  ], styles: ["\n\n.sample-menu-header-text-color[_ngcontent-%COMP%] {\n  color: #9da7a9;\n}\n[_nghost-%COMP%]     .po-menu {\n  border-right: 1px solid #e6e8eb;\n}\n[_nghost-%COMP%]     .po-menu-header-container-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px 12px;\n  min-height: 88px;\n}\n[_nghost-%COMP%]     .po-menu-header-container-logo img {\n  display: block;\n  max-width: 92px;\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n}\n[_nghost-%COMP%]     .po-menu[ng-reflect-collapsed=true] .po-menu-header-container-logo img {\n  max-width: 44px;\n}\n[_nghost-%COMP%]     .po-menu-body {\n  padding-top: 6px;\n}\n[_nghost-%COMP%]     .po-menu-item {\n  border-radius: 10px;\n  margin: 4px 10px;\n}\n[_nghost-%COMP%]     .po-menu-item:hover {\n  background: #f3f5f7;\n}\n[_nghost-%COMP%]     .po-menu-item.po-menu-item-active {\n  background: #eaf2ff;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .po-menu-item .po-menu-item-icon {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]     .po-menu-group-title {\n  padding: 10px 16px;\n  opacity: 0.85;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 32 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v19.0.7
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.0.7
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
