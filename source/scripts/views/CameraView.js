var CameraView = React.createClass({
    render: function() {
        return (
            <div {...this.props}
                style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            position: "absolute",
            transitionDuration: "0.5s",
            transitionProperty: "top left",
            top: -1 * Math.floor(this.props.entity.position.y / HEIGHT) * HEIGHT + "em",
            left: -1 * Math.floor(this.props.entity.position.x / WIDTH) * WIDTH + "em",
        }
    },
    componentDidMount: function() {
        this.timestamp = this.props.entity.timestamp
        console.log("Rendering CameraView", this.timestamp)
    },
    shouldComponentUpdate: function(props) {
        return this.timestamp != props.entity.timestamp
    },
    componentDidUpdate: function() {
        this.timestamp = this.props.entity.timestamp
        console.log("Rendering CameraView", this.timestamp)
    }
})

module.exports = CameraView
