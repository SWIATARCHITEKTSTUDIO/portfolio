import React, { createContext, useContext, useReducer } from "react";
import { ActionT, ProjectStateT } from "../utils/types";
import { actionTypes } from "../utils/consts";

const initialState: ProjectStateT = {
	loaderTiming: 5,
	language: "pl",
};

const Reducer = (state: ProjectStateT, action: ActionT): ProjectStateT => {
	switch (action.type) {
		case actionTypes.UPDATE_LOADER_TIME:
			return { ...state, loaderTiming: action.payload };
		case actionTypes.UPDATE_LANGUAGE: {
			return { ...state, language: action.payload };
		}

		default:
			return state;
	}
};

export const ProjectContext = createContext<
	{ state: ProjectStateT; dispatch: React.Dispatch<ActionT> } | undefined
>(undefined);

export const ProjectContextProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [state, dispatch] = useReducer<React.Reducer<ProjectStateT, ActionT>>(
		Reducer,
		initialState
	);

	return (
		<ProjectContext.Provider value={{ state, dispatch }}>
			{children}
		</ProjectContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProjectContext = () => {
	const context = useContext(ProjectContext);
	if (context === undefined) {
		throw new Error("useGameContext must be used within a GameContextProvider");
	}
	return context;
};
