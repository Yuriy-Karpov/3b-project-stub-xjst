var ivAPI = ivAPI || {};

ivAPI.replaceObj = {
    default: {},
    add: function (objClass) {
        for (var key in objClass) {
            this.default[key] = objClass[key]
        }
    }
}
ivAPI.replaceObj.add({
    "btn-default": "btn-info",
    "alert-info": "alert-danger"
})


global.ivAPI = ivAPI;


var replaceObj = ivAPI.replaceObj.default;
module.exports = replaceObj;