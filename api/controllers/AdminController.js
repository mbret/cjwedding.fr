/**
 * IndexController
 *
 * @description :: Server-side logic for managing Indexcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
    * `IndexController.index()`
    */
    index: function (req, res) {
        return res.view('pages/admin', {layout: 'layout-admin'});
    },

    login: function(req, res){
        return res.view('pages/admin-login', {layout: 'layout-admin'});
    }
};

