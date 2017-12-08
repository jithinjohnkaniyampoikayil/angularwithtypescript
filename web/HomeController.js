var test;
(function (test) {
    var HomeController = (function () {
        function HomeController($scope) {
            var _this = this;
            this.init = function () {
                _this.title = "hai";
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
            };
            this.$scope = $scope;
            this.init();
        }
        return HomeController;
    }());
    HomeController.$inject = ["$scope"];
    test.HomeController = HomeController;
    app.controller("HomeController", HomeController);
})(test || (test = {}));
//# sourceMappingURL=HomeController.js.map