﻿function onChange(arg) {
    var selected = $.map(this.select(), function (item) {
        return $(item).text();
    });

    //kendoConsole.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
}

function onDataBound(arg) {
    ///kendoConsole.log("Grid data bound");
}

function onDataBinding(arg) {
    //kendoConsole.log("Grid data binding");
}

function onSorting(arg) {
    //kendoConsole.log("Sorting on field: " + arg.sort.field + ", direction:" + (arg.sort.dir || "none"));
}

function onFiltering(arg) {
    //kendoConsole.log("Filter on " + kendo.stringify(arg.filter));
}

function onPaging(arg) {
    //kendoConsole.log("Paging to page index:" + arg.page);
}

function onGrouping(arg) {
    //kendoConsole.log("Group on " + kendo.stringify(arg.groups));
}

$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "https://demos.telerik.com/kendo-ui/service/Products",
                    dataType: "jsonp"
                }
            },
            pageSize: 20
        },
        height: 350,
        change: onChange,
        dataBound: onDataBound,
        dataBinding: onDataBinding,
        selectable: "multiple cell",
        pageable: true,
        sortable: true,
        filterable: true,
        groupable: true,
        sort: onSorting,
        filter: onFiltering,
        group: onGrouping,
        page: onPaging,
        columns: [
            {
                field: "ProductName",
                title: "Product Name"
            },
            {
                field: "UnitPrice",
                title: "Unit Price",
                format: "{0:c}"
            },
            {
                field: "UnitsInStock",
                title: "Units In Stock"
            }
        ]
    });
});