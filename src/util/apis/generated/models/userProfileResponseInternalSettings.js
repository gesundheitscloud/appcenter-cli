/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UserProfileResponseInternalSettings class.
 * @constructor
 * The user's settings
 *
 * @member {string} [marketingOptIn] The marketing opt-in setting
 * 
 */
function UserProfileResponseInternalSettings() {
}

/**
 * Defines the metadata of UserProfileResponseInternalSettings
 *
 * @returns {object} metadata of UserProfileResponseInternalSettings
 *
 */
UserProfileResponseInternalSettings.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UserProfileResponseInternal_settings',
    type: {
      name: 'Composite',
      className: 'UserProfileResponseInternalSettings',
      modelProperties: {
        marketingOptIn: {
          required: false,
          serializedName: 'marketing_opt_in',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = UserProfileResponseInternalSettings;
