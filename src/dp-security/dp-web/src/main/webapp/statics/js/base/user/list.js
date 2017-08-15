/**
 * 用户管理js
 */

$(function () {
	initialPage();
	getGrid();
});

function initialPage() {
	$(window).resize(function() {
		$('#dataGrid').bootstrapTable('resetView', {height: $(window).height()-54});
	});
}

function getGrid() {
	$('#dataGrid').bootstrapTableEx({
		url: '../../sys/user/list?_' + $.now(),
		height: $(window).height()-54,
		queryParams: function(params){
			params.username = vm.keyword;
			return params;
		},
		columns: [{
			checkbox: true
		}, {
			field : "userId",
			title : "编号",
			width : "50px"
		}, {
			field : "username",
			title : "用户名",
			width : "200px"
		}, {
			field : "email",
			title : "邮箱",
			width : "300px"
		}, {
			field : "mobile",
			title : "手机号",
			width : "130px"
		}, {
			field : "status",
			title : "状态",
			width : "60px",
			formatter : function(value , row, index) {
				if(value=='0'){
	        		return '<span class="label label-danger">禁用</span>';
	        	}else if(value=='1'){
	        		return '<span class="label label-success">正常</span>';
	        	}
		   }
		}, {
			field : "gmtCreate",
			title : "创建时间"
		}]
	})
}

var vm = new Vue({
	el:'#dpLTE',
	data: {
		keyword: null
	},
	methods : {
		load: function() {
			$('#dataGrid').bootstrapTable('refresh');
		},
		save: function() {
			dialogOpen({
				title: '新增用户',
				url: 'base/user/add.html?_' + $.now(),
				width: '600px',
				height: '350px',
				scroll : true,
				yes : function(iframeId) {
					top.frames[iframeId].vm.acceptClick();
				},
			});
		},
		edit: function() {
			var ck = $('#dataGrid').bootstrapTable('getSelections');
			if(checkedRow(ck)){
				dialogOpen({
					title: '编辑用户',
					url: 'base/user/edit.html?_' + $.now(),
					width: '600px',
					height: '350px',
					scroll : true,
					success: function(iframeId){
						top.frames[iframeId].vm.user.userId = ck[0].userId;
						top.frames[iframeId].vm.setForm();
					},
					yes : function(iframeId) {
						top.frames[iframeId].vm.acceptClick();
					},
				});
			}
		},
		remove: function() {
			var ck = $('#dataGrid').bootstrapTable('getSelections'), ids = [];	
			if(checkedArray(ck)){
				$.each(ck, function(idx, item){
					ids[idx] = item.userId;
				});
				$.RemoveForm({
					url: '../../sys/user/remove?_' + $.now(),
			    	param: ids,
			    	success: function(data) {
			    		vm.load();
			    	}
				});
			}
		},
		disable: function() {
			var ck = $('#dataGrid').bootstrapTable('getSelections'), ids = [];	
			if(checkedArray(ck)){
				$.each(ck, function(idx, item){
					ids[idx] = item.userId;
				});
				$.ConfirmForm({
					msg: '您是否要禁用所选账户吗？',
					url: '../../sys/user/disable?_' + $.now(),
			    	param: ids,
			    	success: function(data) {
			    		vm.load();
			    	}
				});
			}
		},
		enable: function() {
			var ck = $('#dataGrid').bootstrapTable('getSelections'), ids = [];	
			if(checkedArray(ck)){
				$.each(ck, function(idx, item){
					ids[idx] = item.userId;
				});
				$.ConfirmForm({
					msg: '您是否要启用所选账户吗？',
					url: '../../sys/user/enable?_' + $.now(),
			    	param: ids,
			    	success: function(data) {
			    		vm.load();
			    	}
				});
			}
		},
		reset: function() {
			var ck = $('#dataGrid').bootstrapTable('getSelections');
			if(checkedRow(ck)){
				dialogOpen({
					title: '重置密码',
					url: 'base/user/reset.html?_' + $.now(),
					width: '400px',
					height: '220px',
					success: function(iframeId){
						top.frames[iframeId].vm.user.userId = ck[0].userId;
					},
					yes : function(iframeId) {
						top.frames[iframeId].vm.acceptClick();
					},
				});
			}
		}
	}
})