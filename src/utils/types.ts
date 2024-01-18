import { actionTypes } from "./consts";
export type Language = "en" | "pl" | "de";
export type project = {
	en: {
		title: string;
		img: string[];
		year?: number;
		localisation?: string;
		powierzchnia?: string;
		coAuthor?: string;
		area?: string;
		description?: string;
	};
	pl?: {
		title: string;
		img: string[];
		year?: number;
		localisation?: string;
		powierzchnia?: string;
		coAuthor?: string;
		area?: string;
		description?: string;
	};
	de?: {
		title: string;
		img: string[];
		year?: number;
		localisation?: string;
		powierzchnia?: string;
		coAuthor?: string;
		area?: string;
		description?: string;
	};
};

export type ActionTypesT = keyof typeof actionTypes;

export type ActionT = {
	type: ActionTypesT;
	payload?: any;
};

export type ProjectStateT = {
	loaderTiming: number;
	language: Language;
};
