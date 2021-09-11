import React from 'react'
class Detail extends React.Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                This is Detail
            </div>
        )
    }
}

export default Detail;