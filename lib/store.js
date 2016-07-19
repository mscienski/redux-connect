'use strict';

exports.__esModule = true;
exports.loadFail = exports.loadSuccess = exports.load = exports.endGlobalLoad = exports.beginGlobalLoad = exports.clearKey = exports.reducer = exports.END_GLOBAL_LOAD = exports.BEGIN_GLOBAL_LOAD = exports.CLEAR = exports.LOAD_FAIL = exports.LOAD_SUCCESS = exports.LOAD = undefined;

var _extends6 = require('babel-runtime/helpers/extends');

var _extends7 = _interopRequireDefault(_extends6);

var _handleActions;

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD = exports.LOAD = '@reduxAsyncConnect/LOAD';
var LOAD_SUCCESS = exports.LOAD_SUCCESS = '@reduxAsyncConnect/LOAD_SUCCESS';
var LOAD_FAIL = exports.LOAD_FAIL = '@reduxAsyncConnect/LOAD_FAIL';
var CLEAR = exports.CLEAR = '@reduxAsyncConnect/CLEAR';
var BEGIN_GLOBAL_LOAD = exports.BEGIN_GLOBAL_LOAD = '@reduxAsyncConnect/BEGIN_GLOBAL_LOAD';
var END_GLOBAL_LOAD = exports.END_GLOBAL_LOAD = '@reduxAsyncConnect/END_GLOBAL_LOAD';

var initialState = {
  loaded: false,
  loadState: {}
};

var reducer = exports.reducer = (0, _reduxActions.handleActions)((_handleActions = {}, _handleActions[BEGIN_GLOBAL_LOAD] = function (state) {
  return (0, _extends7.default)({}, state, {
    loaded: false
  });
}, _handleActions[END_GLOBAL_LOAD] = function (state) {
  return (0, _extends7.default)({}, state, {
    loaded: true
  });
}, _handleActions[LOAD] = function (state, _ref) {
  var _extends2;

  var payload = _ref.payload;
  return (0, _extends7.default)({}, state, {
    loadState: (0, _extends7.default)({}, state.loadState, (_extends2 = {}, _extends2[payload.key] = {
      loading: true,
      loaded: false
    }, _extends2))
  });
}, _handleActions[LOAD_SUCCESS] = function (state, _ref2) {
  var _extends3;

  var key = _ref2.payload.key;
  return (0, _extends7.default)({}, state, {
    loadState: (0, _extends7.default)({}, state.loadState, (_extends3 = {}, _extends3[key] = {
      loading: false,
      loaded: true,
      error: null
    }, _extends3))
  });
}, _handleActions[LOAD_FAIL] = function (state, _ref3) {
  var _extends4;

  var _ref3$payload = _ref3.payload;
  var key = _ref3$payload.key;
  var error = _ref3$payload.error;
  return (0, _extends7.default)({}, state, {
    loadState: (0, _extends7.default)({}, state.loadState, (_extends4 = {}, _extends4[key] = {
      loading: false,
      loaded: false,
      error: error
    }, _extends4))
  });
}, _handleActions[CLEAR] = function (state, _ref4) {
  var _extends5;

  var payload = _ref4.payload;
  return (0, _extends7.default)({}, state, {
    loadState: (0, _extends7.default)({}, state.loadState, (_extends5 = {}, _extends5[payload] = {
      loading: false,
      loaded: false,
      error: null
    }, _extends5))
  });
}, _handleActions), initialState);

var clearKey = exports.clearKey = (0, _reduxActions.createAction)(CLEAR);

var beginGlobalLoad = exports.beginGlobalLoad = (0, _reduxActions.createAction)(BEGIN_GLOBAL_LOAD);

var endGlobalLoad = exports.endGlobalLoad = (0, _reduxActions.createAction)(END_GLOBAL_LOAD);

var load = exports.load = (0, _reduxActions.createAction)(LOAD, function (key) {
  return {
    key: key
  };
});

var loadSuccess = exports.loadSuccess = (0, _reduxActions.createAction)(LOAD_SUCCESS, function (key) {
  return {
    key: key
  };
});

var loadFail = exports.loadFail = (0, _reduxActions.createAction)(LOAD_FAIL, function (key, error) {
  return {
    key: key,
    error: error
  };
});