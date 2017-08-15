/**
 * 通用字典js
 */

$(function () {
	initialPage();
	getGrid();
});

function initialPage() {
	$(window).resize(function() {
		Menu.table.resetHeight({height: $(window).height()-100});
	});
}

function getGrid() {
	var colunms = Menu.initColumn();
    var table = new TreeTable(Menu.id, '../../sys/macro/list?_' + $.now(), colunms);
    table.setExpandColumn(2);
    table.setIdField("macroId");
    table.setCodeField("macroId");
    table.setParentCodeField("typeId");
    table.setExpandAll(false);
    table.setHeight($(window).height()-100);
    table.init();
    Menu.table = table;
}

var vm = new Vue({
	el:'#dpLTE',
	methods : {
		load: function() {
			Menu.table.refresh();
		},
		save: function() {
			dialogOpen({
				title: '新增字典',
				url: 'base/macro/add.html?_' + $.now(),
				width: '600px',
				height: '420px',
				scroll : true,
				yes : function(iframeId) {
					top.frames[iframeId].vm.acceptClick();
				},
			});
		},
		edit: function() {
			var ck = Menu.table.getSelectedRow();
			if(checkedRow(ck)){
				dialogOpen({
					title: '编辑字典',
					url: 'base/macro/edit.html?_' + $.now(),
					width: '600px',
					height: '420px',
					scroll : true,
					success: function(iframeId){
						top.frames[iframeId].vm.macro.macroId = ck[0].id;
						top.frames[iframeId].vm.setForm();
					},
					yes : function(iframeId) {
						top.frames[iframeId].vm.acceptClick();
					},
				});
			}
		},
		remove: function() {
			var ck = Menu.table.getSelectedRow(), ids = [];
			if(checkedArray(ck)){
				$.each(ck, function(idx, item){
					ids[idx] = item.id;
				});
				$.RemoveForm({
					url: '../../sys/macro/remove?_' + $.now(),
			    	param: ids,
			    	success: function(data) {
			    		vm.load();
			    	}
				});
			}
		}
	}
})

var Menu = {
    id: "dataGrid",
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Menu.initColumn = function () {
    var columns = [
        {field: 'selectItem', radio: true},
        {title: '编号', field: 'macroId', visible: false, align: 'center', valign: 'middle', width: '50px'},
        {title: '参数名', field: 'name', align: 'center', valign: 'middle', width: '180px'},
        {title: '参数值', field: 'value', align: 'center', valign: 'middle', width: '180px'},
        {title: '所属类别', field: 'typeName', align: 'center', valign: 'middle', width: '100px'},
        {title: '类型', field: 'type', align: 'center', valign: 'middle', width: '60px', formatter: function(item, index){
        	 if(item.type === 0){
                 return '<span class="label label-primary">目录</span>';
             }
             if(item.type === 1){
                 return '<span class="label label-warning">参数</span>';
             }
        }},
        {title: '排序', field: 'orderNum', align: 'center', valign: 'middle', width: '50px'},
        {title: '可用', field: 'status', align: 'center', valign: 'middle', width: '60px', formatter: function(item, index){
            if(item.status === 0){
                return '<i class="fa fa-toggle-off"></i>';
            }
            if(item.status === 1){
                return '<i class="fa fa-toggle-on"></i>';
            }
        }},
        {title: '备注', field: 'remark', align: 'left', valign: 'middle'}
    ]
    return columns;
};