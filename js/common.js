define(function(require, exports, module) {
	require("fastclick");
	require("WeixinApi");
	FastClick.attach(document.body);

	var wxData = {
		title : "",
		link: "",
		desc: "",
		imgUrl: "",
		appid : ""
	};

	function changeWxData(_data){
		_data.title && ( wxData.title = _data.title );
		_data.desc && ( wxData.desc = _data.desc );
		_data.imgUrl && ( wxData.imgUrl = _data.imgUrl );
		_data.link && ( wxData.link = _data.link );
		WeixinApi.share(wxData,wxCallbacks);
	}

	var shareSuccessCallBack = function(){};
    var _shareSuccess = function(func){
    	shareSuccessCallBack = func;
    }
    var wxCallbacks = {
	    favorite : false,
	    ready : function() {
	    },
	    cancel : function(resp) {
	    },
	    fail : function(resp) {
	    },
	    confirm : function(resp) {
	        shareSuccessCallBack();
	    },
	    all : function(resp,shareTo) {
	    }
	};
	WeixinApi.share(wxData,wxCallbacks);

	window.changeWxData = changeWxData;
    window.shareSuccess = _shareSuccess;

});