/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StartSessionLog class.
 * @constructor
 * Required explicit begin session log (a marker event for analytics service).
 *
 * @member {uuid} sessionId Session ID.
 * 
 */
function StartSessionLog() {
  StartSessionLog['super_'].call(this);
}

util.inherits(StartSessionLog, models['Log']);

/**
 * Defines the metadata of StartSessionLog
 *
 * @returns {object} metadata of StartSessionLog
 *
 */
StartSessionLog.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StartSessionLog',
    type: {
      name: 'Composite',
      className: 'StartSessionLog',
      modelProperties: {
        timestamp: {
          required: true,
          serializedName: 'timestamp',
          type: {
            name: 'DateTime'
          }
        },
        installId: {
          required: true,
          serializedName: 'install_id',
          type: {
            name: 'String'
          }
        },
        device: {
          required: true,
          serializedName: 'device',
          type: {
            name: 'Composite',
            className: 'Device'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        sessionId: {
          required: true,
          serializedName: 'session_id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = StartSessionLog;