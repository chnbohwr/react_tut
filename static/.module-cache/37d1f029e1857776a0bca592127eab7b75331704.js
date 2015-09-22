var InputBox = React.createClass({displayName: "InputBox",
    getInitialState:function(){
        return {number:33};
    },
    render: function () {
        return React.createElement("input", {type: "text", value: this.state.number})
    }
});

