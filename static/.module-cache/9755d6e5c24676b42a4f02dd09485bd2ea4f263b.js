$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function(data){
    console.log(data);
  }
});

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
            React.createElement("img", {src: "http://fakeimg.pl/100x100/"})
        );
    }
});

var UserProfile = React.createClass({displayName: "UserProfile",
    render:function(){
        return(
            React.createElement("div", null, 
            React.createElement(UserAvatar, null), 
            React.createElement(UserName, null)
            )
        );
    }
});

$(document).ready(function(){
    React.render(React.createElement(UserProfile, null),document.body);
});
