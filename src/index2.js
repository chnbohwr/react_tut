var username="jack"

var HelloMessage = React.createClass({
    render:function(){
        return(
            <div>Hello:{this.props.name}</div>
        );
    }
});

$(document).ready(function(){
    React.render(<HelloMessage name={username}/>,document.body);
});
