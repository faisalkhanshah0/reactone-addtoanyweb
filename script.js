var Hello = React.createClass({
    render: function(){
        return (
        <h2>hello world from react !</h2>
        );
    }
});
React.render(<Hello/>, document.getElementById("root"));

// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));

