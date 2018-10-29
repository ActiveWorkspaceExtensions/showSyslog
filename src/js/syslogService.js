// @<COPYRIGHT>@
// ==================================================
// Copyright 2017.
// Siemens Product Lifecycle Management Software Inc.
// All Rights Reserved.
// ==================================================
// @<COPYRIGHT>@

/*global
 define
 */

/**
 * @module js/syslogService
 */
define( [ 'app', 'js/logService', 'js/eventBus', //
'js/popupService', 'js/appCtxService' ], //
function( app, logSvc, eventBus ) {
    'use strict';

    var _syslogSvc = null;
    var _appCtxSvc = null;
    var exports = {};


    /**
     */
    exports.updateDisplay = function( data ) {
        data.box2.uiValue = _appCtxSvc.ctx.syslog;
    }
    /**
     * @memberof NgServices
     * @member createChangeService
     */
    app.factory( 'syslogService', //
    [ 'appCtxService', //
    function( appCtxSvc ) {
        _appCtxSvc = appCtxSvc;
        return exports;
    } ] );

    /**
     * Since this module can be loaded as a dependent DUI module we need to return an object indicating which service
     * should be injected to provide the API for this module.
     */
    return {
        moduleServiceNameToInject: 'syslogService'
    };
} );
