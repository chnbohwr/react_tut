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

var UserName = React.createClass({
    render: function () {
        return (
            <div className="user-name"> {this.props.data.title +". "+ this.props.data.first +" - "+ this.props.data.last} </div>
        );
    }
}); 
        
var UserAvatar = React.createClass({
    render:function(){
        return(
            <img className="user-avatar" src={this.props.data.medium}/>
        );
    }
});

var DeleteButton = React.createClass({
    clickEvent:function(){
        console.log('should delete: ',this.props.index);
        console.log(this.props);
        this.props.onDelete(this.props.index);
    },
    render:function(){
        return <button onClick={this.clickEvent}>刪除使用者</button>
    }
});


var UserProfile = React.createClass({
    getInitialState:function(){
       return {data:window.data};
    },
    deleteUser:function(index){
        this.state.data.splice(index,1);
        this.setState({data:this.state.data});
    },
    render:function(){
        var self = this;
        var userdatas = this.state.data.map(function(d,index){
            return( 
                <div className="user-profile">
                    <UserAvatar data={d.user.picture}/>
                    <UserName data={d.user.name}/>
                    <DeleteButton onDelete={self.deleteUser} index={index}/>
                </div>
            );
        });
        return (<div>{userdatas}</div>);
    }
});
        
//render react to document.body 
function initialReact (){
    React.render(<UserProfile data={data}/>,document.body);
}
                 
//畫面讀取好以後下載使用者資訊                 
$(document).ready(function(){
    initialUserData();
});
