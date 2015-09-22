var InputBox = React.createClass({displayName: "InputBox",
    textChange:function(event){
        console.log('event');
    },
    getInitialState:function(){
        return {message:"test"};
    },
    render: function () {
        return React.createElement("input", {type: "text", value: this.state.message, onChange: this.textChange});
    }
});

React.render(React.createElement(InputBox, null),document.body);