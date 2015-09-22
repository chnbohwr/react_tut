var InputBox = React.createClass({displayName: "InputBox",
    getInitialState:function(){
        return {number:"test"};
    },
    render: function () {
        return React.createElement("input", {type: "text", value: this.state.number})
    }
});

React.render(React.createElement(InputBox, null),document.body)