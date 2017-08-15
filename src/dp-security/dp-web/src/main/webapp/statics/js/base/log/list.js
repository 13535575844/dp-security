/**
 * 系统日志js
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
		url: '../../sys/log/list?_' + $.now(),
		height: $(window).height()-54,
		queryParams: function(params){
			params.username = vm.keyword;
			return params;
		},
		detailView: true,
		detailFormatter: function(index, row) {
			var _html = '<p>操作用户ID：'+ row.userId +'</p>' + 
				        '<p>执行方法：'+ row.method +'</p>' +
						'<p>请求参数：'+ row.params +'</p>';
			return _html;
		},
		columns: [{
			checkbox: true
		}, {
			field : "id",
			title : "编号",
			width : "50px"
		}, {
			field : "username",
			title : "用户名",
			width : "150px"
		}, {
			field : "operation",
			title : "操作",
			width : "150px"
		}, {
			field : "time",
			title : "响应时间(ms)",
			width : "130px"
		}, {
			field : "ip",
			title : "IP地址",
			width : "130px"
		},  {
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
		remove: function() {
			var ck = $('#dataGrid').bootstrapTable('getSelections'), ids = [];	
			if(checkedArray(ck)){
				$.each(ck, function(idx, item){
					ids[idx] = item.id;
				});
				$.RemoveForm({
					url: '../../sys/log/remove?_' + $.now(),
			    	param: ids,
			    	success: function(data) {
			    		vm.load();
			    	}
				});
			}
		},
		clear: function() {
			$.ConfirmAjax({
				msg : "您确定要清空日志吗？",
				url: '../../sys/log/clear?_' + $.now(),
		    	success: function(data) {
		    		vm.load();
		    	}
			});
		}
	}
})