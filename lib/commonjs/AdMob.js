"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const RNAdMobAdManager = _reactNative.NativeModules.RNAdMob;
/**
 * Initializes Mobile Ads SDK.
 * @returns Promise of each mediation adapter's initialization status
 */

async function initialize() {
  return RNAdMobAdManager.initialize();
}
/**
 * Get Mobile Ads SDK initialization status.
 * @returns Promise of each mediation adapter's initialization status
 */


async function getInitializationStatus() {
  return RNAdMobAdManager.getInitializationStatus();
}
/**
 * Sets ads request configuration to be applied globally.
 * @param config `RequestConfiguration` object
 */


function setRequestConfiguration(config) {
  RNAdMobAdManager.setRequestConfiguration(config || {});
}
/**
 * Checks if the current device is registered as a test device to show test ads.
 * @returns Promise of boolean weather current device is a test device
 */


async function isTestDevice() {
  return RNAdMobAdManager.isTestDevice();
}

var _default = {
  initialize,
  getInitializationStatus,
  setRequestConfiguration,
  isTestDevice
};
exports.default = _default;
//# sourceMappingURL=AdMob.js.map