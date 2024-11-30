import React from "react";
const StoreContext = React.createContext(null);

const Provider = <StoreContext.Provider value={props.store}>
    {props.children}
</StoreContext.Provider>

export default Provider;