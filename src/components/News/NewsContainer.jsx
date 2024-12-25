import React from "react";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { connect, useSelector } from "react-redux";
import News from "./News";

const NewsContainer = (props) => {
    // используем хук useSelector для доступа к состоянию Redux
    const newsData = useSelector(state => state.newsData);

    return <News {...props} newsData={newsData} />
}

export default withAuthRedirect(connect()(NewsContainer));