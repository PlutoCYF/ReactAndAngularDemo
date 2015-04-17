var CarList = React.createClass({
    render: function() {
        var createItem = function(item) {
            return  (
                <div>
                车名：{item.name},车牌号：{item.num}
                </div>
            );
        };
        return (<div>{this.props.Cars.map(createItem)}</div>);
    }
});
var cars = [
    {name:"汽车1",num:"123123"},
    {name:"汽车1",num:"123123"},
    {name:"汽车1",num:"123123"},
    {name:"汽车1",num:"123123"}
];
React.render(<CarList Cars={cars} />, document.getElementById("list"));
