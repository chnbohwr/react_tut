
function initialUserData(){
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function(data){
            console.log('get ajax data success',data);
            window.data = data.results;
            initialReact();
        }
    });
}


var UserName = React.createClass({displayName: "UserName",
    render: function () {
        return (
            React.createElement("div", {className: "user-name"}, " hello ")
        );
    }
}); 
        
var UserAvatar = React.createClass({displayName: "UserAvatar",
    render:function(){
        return(
            React.createElement("img", {className: "user-avatar", src: "http://fakeimg.pl/100x100/"})
        );
    }
});

var UserProfile = React.createClass({displayName: "UserProfile",
    render:function(){
        console.log(this.props.data);
        var userdatas = this.props.data.map(function(d){
            return React.createElement(UserAvatar, null)
        });
        return(
            React.createElement("div", {className: "user-profile"}, 
            userdatas
            )
        );
    }
});

//render react to document.body 
function initialReact (){
    React.render(React.createElement(UserProfile, {data: data}),document.body);
}
                 
//畫面讀取好以後下載使用者資訊                 
$(document).ready(function(){
    initialUserData();
});
