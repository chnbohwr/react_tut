var UserName = React.createClass({displayName: "UserName",
    render: function () {
        return (
            React.createElement("div", null, " hello ", this.props.nane, " ")
        );
    }
}); 
        
var UserAvatar = React.createClass({displayName: "UserAvatar",
    render:function(){
        return(
            React.createElement("h1", {src: 'http://fakeimg.pl/100x100/'}, "test")
        );
    }
});
