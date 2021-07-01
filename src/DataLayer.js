import React,
{ createContext,
    useContext,
    useReducer }
    from "react";

    export const DataLayerContext = createContext(); // wraps the DataLayer

    export const DataLayer = ({ initialState, reducer, children }) => (
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
    ) // the actual Data Layer

    export const useDataLayerValue = () => useContext(DataLayerContext);