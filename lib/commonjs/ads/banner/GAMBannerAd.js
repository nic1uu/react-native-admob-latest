"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BaseAd = _interopRequireWildcard(require("./BaseAd"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class GAMBannerAd extends _BaseAd.default {
  handleOnAppEvent(event) {
    const {
      name,
      info
    } = event.nativeEvent;

    if (this.props.onAppEvent) {
      this.props.onAppEvent(name, info);
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_BaseAd.RNAdMobBannerView, _extends({}, this.props, {
      style: [this.props.style, this.state.style],
      onAdLoaded: this.handleOnAdLoaded.bind(this),
      onAdFailedToLoad: this.handleOnAdFailedToLoad.bind(this),
      onAdOpened: this.handleOnAdOpened.bind(this),
      onAdClosed: this.handleOnAdClosed.bind(this),
      onAppEvent: this.handleOnAppEvent.bind(this),
      onSizeChange: this.handleSizeChange.bind(this),
      requestOptions: this.props.requestOptions || {},
      ref: el => {
        //@ts-expect-error
        this.bannerRef = el;
      }
    }));
  }

}

var _default = GAMBannerAd;
exports.default = _default;
//# sourceMappingURL=GAMBannerAd.js.map