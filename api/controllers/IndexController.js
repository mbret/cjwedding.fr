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
        return res.view('pages/homepage');
    }
};

