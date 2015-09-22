var ProductList = React.createClass({displayName: "ProductList",
    render:function(){}
});

var InputBox = React.createClass({displayName: "InputBox",
    textChange:function(event){
        this.setState({message: event.target.value});
    },
    getInitialState:function(){
        return {message:"test"};
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", value: this.state.message, onChange: this.textChange}), 
                React.createElement("div", null, this.state.message)
            )
        );
    }
});


React.render(React.createElement(InputBox, null),document.body);