import React from "react";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import News from "./News";
import { connect } from "react-redux";

class NewsContainer extends React.Component {
    render () {
        return <News {...this.props}/>
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(withAuthRedirect(NewsContainer));