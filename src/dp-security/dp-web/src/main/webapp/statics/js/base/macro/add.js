/**
 * 新增-通用字典js
 */
var vm = new Vue({
	el:'#dpLTE',
	data: {
		macro:{
			typeName: null,
			typeId: 0,
			type: 1,
			orderNum: 0,
			status: 1
		}
	},
	methods : {
		macroTree: function(){
		    dialogOpen({
				id: 'layerMacroTree',
				title: '选择目录',
		        url: 'base/macro/tree.html?_' + $.now(),
		        scroll : true,
		        width: "300px",
		        height: "450px",
		        yes : function(iframeId) {
		        	top.frames[iframeId].vm.acceptClick();
				}
		    })
		},
		acceptClick: function() {
			if (!$('#form').Validform()) {
		        return false;
		    }
		    $.SaveForm({
		    	url: '../../sys/macro/save?_' + $.now(),
		    	param: vm.macro,
		    	success: function(data) {
		    		$.currentIframe().vm.load();
		    	}
		    });
		}
	}
})
