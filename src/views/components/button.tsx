import React from "react";

export enum MainButtonType {dark, light}

interface MainButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	border?: string;
	backgroundColor?: string;
	minHeight?: string;
	borderRadius?: string;
	minWidth?: string;
	display?: string;
	type?: MainButtonType,
}

export const MainButton: React.FC<MainButtonProps> = ({
	border,
	backgroundColor,
	minHeight,
	minWidth,
	borderRadius,
	display,
	onClick,
	type,
	children,
}) => {
	let styleName: string = "";
	if (type === MainButtonType.dark) {
		styleName = "darkButton";
	}

	if (type === MainButtonType.light) {
		styleName = "lightButton";
	}

	return <button onClick={onClick} className={styleName}
	               style={{
		               display: display,
		               backgroundColor,
		               border,
		               borderRadius,
		               minHeight,
		               minWidth,
	               }}>{children}</button>;
}