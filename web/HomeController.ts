module test {
    export class HomeController {
            public $scope: ng.IScope;
            public title: string;
            static $inject = ["$scope"];
            constructor($scope) {
                this.$scope = $scope;
                this.init();
            }


            init = () => {
                this.title = "hai";
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
                    //change: onChange,
                    //dataBound: onDataBound,
                    //dataBinding: onDataBinding,
                    selectable: "multiple cell",
                    pageable: true,
                    sortable: true,
                    filterable: true,
                    groupable: true,
                    //sort: onSorting,
                    filter: function (e) { debugger; },
                    //group: onGrouping,
                    //page: onPaging,
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
            }


    }
    app.controller("HomeController", HomeController);
}
