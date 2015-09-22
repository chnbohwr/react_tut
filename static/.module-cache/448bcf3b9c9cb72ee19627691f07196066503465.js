var InputBox = React.createClass({displayName: "InputBox",
    getInitialState:function(){
        return {message:"test"};
    },
    render: function () {
        return React.createElement("input", {type: "text", value: this.state.message})
    }
});

React.render(React.createElement(InputBox, null),document.body)