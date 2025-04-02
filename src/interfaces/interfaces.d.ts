export interface Tab {
	id: number;
	title: string;
	active: boolean;
	tabItems: TabChildren[] | [];
}

export interface TabChildren {
	id: number;
	title: string;
	subText?: string;
	date: number;
	url: string;
	icon?: JSX.Element;
}
