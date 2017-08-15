/**
 * 系统菜单js
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
    var table = new TreeTable(Menu.id, '../../sys/menu/list?_' + $.now(), colunms);
    table.setExpandColumn(2);
    table.setIdField("menuId");
    table.setCodeField("menuId");
    table.setParentCodeField("parentId");
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
				title: '新增菜单',
				url: 'base/menu/add.html?_' + $.now(),
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
					title: '编辑菜单',
					url: 'base/menu/edit.html?_' + $.now(),
					width: '600px',
					height: '420px',
					scroll : true,
					success: function(iframeId){
						top.frames[iframeId].vm.menu.menuId = ck[0].id;
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
					url: '../../sys/menu/remove?_' + $.now(),
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
        {title: '编号', field: 'menuId', visible: false, align: 'center', valign: 'middle', width: '50px'},
        {title: '名称', field: 'name', align: 'center', valign: 'middle', width: '180px'},
        {title: '上级菜单', field: 'parentName', align: 'center', valign: 'middle', width: '100px'},
        {title: '图标', field: 'icon', align: 'center', valign: 'middle', width: '50px', formatter: function(item, index){
            return item.icon == null ? '' : '<i class="'+item.icon+' fa-lg"></i>';
        }},
        {title: '类型', field: 'type', align: 'center', valign: 'middle', width: '60px', formatter: function(item, index){
            if(item.type === 0){
                return '<span class="label label-primary">目录</span>';
            }
            if(item.type === 1){
                return '<span class="label label-success">菜单</span>';
            }
            if(item.type === 2){
                return '<span class="label label-warning">按钮</span>';
            }
        }},
        {title: '排序', field: 'orderNum', align: 'center', valign: 'middle', width: '50px'},
        {title: '菜单URL', field: 'url', align: 'center', valign: 'middle', width: '200px'},
        {title: '授权标识', field: 'perms', align: 'center', valign: 'middle'}]
    return columns;
};
