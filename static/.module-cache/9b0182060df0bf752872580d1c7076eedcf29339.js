var product_array = ['ipod touch','iphone','ipad','macbook'];

var ProductList = React.createClass({displayName: "ProductList",
    render:function(){
        return (
            React.createElement("ul", {products: product_array}, 
                React.createElement("li", null, this.props.products)
            )
        );
    }
});

React.render(React.createElement(ProductList, null),document.body);