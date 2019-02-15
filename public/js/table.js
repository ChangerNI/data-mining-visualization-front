$(function () {
    var tableColumns = [
        {field: 'name', title: '名称', sortable: true},
        {field: 'number', title: '编号', sortable: true},
        {field: 'classes', title: '类型', sortable: true},
        {field: 'standard', title: '规格', sortable: true},
        {field: 'managestaff', title: '专管员', sortable: true},
        {field: 'remark', title: '备注', sortable: true}
    ];
    var data1=[
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},
        {name:"aaaa",number:1111,classes:"aklfdja",standard:"bbbb",managestaff:"ccccc",remark:"ddddd"},

    ];
    $('#tableL01').bootstrapTable('destroy');   //动态加载表格之前，先销毁表格

    $('#tableL01').bootstrapTable({//表格初始化
        columns: tableColumns,  //表头
        data:data1, //通过ajax返回的数据
        width:300,
        height:268,
        method: 'get',
        pageSize: 3,
        pageNumber: 1,
        pageList: [],
        cache: false,
        striped: true,
        pagination: true,
        sidePagination: 'client',
        search: false,
        showRefresh: false,
        showExport: false,
        showFooter: true,
        // exportTypes: ['csv', 'txt', 'xml'],
        clickToSelect: true,
    });

});
