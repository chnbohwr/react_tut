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


var username="jack"
var HelloMessage = React.createClass({displayName: "HelloMessage",
    render:function(){
        return(
            React.createElement("div", null, "Hello", username)
        );
    }
});

React.render(React.createElement(HelloMessage, null),document.body);