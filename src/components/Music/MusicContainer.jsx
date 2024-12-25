import React from "react";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { connect, useSelector } from "react-redux";
import Music from "./Music";

const MusicContainer = (props) => {
    // используем хук useSelector для доступа к состоянию Redux
    const musicData = useSelector(state => state.musicData)
    return <Music {...props} musicData={musicData} />
}

export default withAuthRedirect(connect()(MusicContainer));