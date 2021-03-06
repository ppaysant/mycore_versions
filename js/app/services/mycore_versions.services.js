/**
 * ownCloud - My Core versions
 *
 * @author Patrick Paysant <ppaysant@linagora.com>
 * @copyright 2014 CNRS DSI
 * @license This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

/**
 * Groups services
 */
angular.module('mycore_versions.services.groups', [])
    .factory('groupsService', ['$http', function($http){
        var doIsGroupsEnabled = function() {
            return $http.get(OC.generateUrl('/apps/mycore_versions/ajax/groups.php?act=is_groups_enabled'));
        };

        return {
            isGroupsEnabled: function() { return doIsGroupsEnabled(); }
        };
    }]);
