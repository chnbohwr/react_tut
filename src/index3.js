$.get('http://jsonplaceholder.typicode.com/posts',function(data){
    window.posts = data;
    React.render(<PostBox/>,document.body);
});

var PostList = React.createClass({
    render:function(){
        var filter_text = this.props.filter;
        var post_list = this.props.posts.map(function(post){
            var index_body= post.body.indexOf(filter_text),
                index_title=post.title.indexOf(filter_text);
            if((index_body === -1) && (index_title ===-1)){
                return;
            }
           
            return(
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            );
        })
        return (
            <ul>
                {post_list}
            </ul>
        );
    }
});

var InputBox = React.createClass({
    render: function () {
        return (
            <div>
                <input type='text' value={this.props.filter} onChange={this.props.change}/>
                <div>{this.props.filter}</div>
            </div>
        );
    }
});

var PostBox = React.createClass({
    textChange:function(event){
        this.setState({message: event.target.value});
    },
    getInitialState:function(){
        return {message:""};
    },
    render:function(){
        return (
            <div>
                <InputBox filter={this.state.message} change={this.textChange}/>
                <PostList posts={posts} filter={this.state.message}/>
            </div>
        );
    }
}); 

