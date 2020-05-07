/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ListOKResponseItemModel.
 */
class ListOKResponseItemModel {
  /**
   * Create a ListOKResponseItemModel.
   * @property {uuid} id The unique id (UUID) of the user
   * @property {string} [avatarUrl] The avatar URL of the user
   * @property {boolean} [canChangePassword] User is required to send an old
   * password in order to change the password.
   * @property {string} displayName The full name of the user. Might for
   * example be first and last name
   * @property {string} email The email address of the user
   * @property {string} name The unique name that is used to identify the user.
   * @property {array} [permissions] The permissions the user has for the app
   * @property {string} origin The creation origin of this user. Possible
   * values include: 'appcenter', 'hockeyapp', 'codepush'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListOKResponseItemModel
   *
   * @returns {object} metadata of ListOKResponseItemModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListOKResponseItem',
      type: {
        name: 'Composite',
        className: 'ListOKResponseItemModel',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          avatarUrl: {
            required: false,
            serializedName: 'avatar_url',
            type: {
              name: 'String'
            }
          },
          canChangePassword: {
            required: false,
            serializedName: 'can_change_password',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: false,
            serializedName: 'permissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListOKResponseItemModel;