/**
 * 编辑-菜单管理js
 */
var vm = new Vue({
	el:'#dpLTE',
	data: {
		menu:{
			parentName:null,
			parentId:0,
			type:1,
			orderNum:0,
			icon: null
		}
	},
	methods : {
		selectIcon: function() {
			dialogOpen({
				id: 'iconSelect',
				title: '选取图标',
		        url: 'base/menu/icon.html?_' + $.now(),
		        scroll : true,
		        width: "1030px",
		        height: "600px",
		        btn: false
		    })
		},
		menuTree: function(){
		    dialogOpen({
				id: 'layerMenuTree',
				title: '选择菜单',
		        url: 'base/menu/tree.html?_' + $.now(),
		        scroll : true,
		        width: "300px",
		        height: "450px",
		        yes : function(iframeId) {
		        	top.frames[iframeId].vm.acceptClick();
				}
		    })
		},
		setForm: function() {
			$.SetForm({
				url: '../../sys/menu/info?_' + $.now(),
		    	param: vm.menu.menuId,
		    	success: function(data) {
		    		vm.menu = data;
		    	}
			});
		},
		acceptClick: function() {
			if (!$('#form').Validform()) {
		        return false;
		    }
		    $.ConfirmForm({
		    	url: '../../sys/menu/update?_' + $.now(),
		    	param: vm.menu,
		    	success: function(data) {
		    		$.currentIframe().vm.load();
		    	}
		    });
		}
	}
})
