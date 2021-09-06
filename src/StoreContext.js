import React, {createContext} from "react";

const StoreContext = createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export const Consumer = (props) => {
    return <StoreContext.Consumer>
        {props.children}
    </StoreContext.Consumer>
}

