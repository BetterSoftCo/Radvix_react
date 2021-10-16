import React from "react";

enum IconButtonType {dark = 0, light = 1}

enum MainButtonType {dark = 0, light = 1}

interface MainButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	border?: string;
	backgroundColor?: string;
	minHeight?: string;
	borderRadius?: string;
	minWidth?: string;
	display?: string;
	type?: MainButtonType,
}

interface IconButtonProps {
	icon: string;
	size?: string;
	type?: IconButtonType;
}

export const MainButton: React.FC<MainButtonProps> = ({
	border = "none",
	backgroundColor = "red",
	minHeight = "40px",
	minWidth = "80px",
	borderRadius = "10%",
	display = "flex",
	onClick,
	type,
	children,
}) => {
	let _backgroundColor = "";

	if (type === MainButtonType.dark) {
		_backgroundColor = "black";
	}

	if (type === MainButtonType.light) {
		_backgroundColor = "white";
	}

	return <button onClick={onClick}
	               style={{
		               display: display,
		               backgroundColor,
		               border,
		               borderRadius,
		               minHeight,
		               minWidth,
	               }}>{children}</button>;
}

export const IconButton: React.FC<IconButtonProps> = ({
	icon,
	size = "30px",
	type = IconButtonType.dark,
}) => {
	let _backgroundColor = "";

	if (type === IconButtonType.dark) {
		_backgroundColor = "black";
	}

	if (type === IconButtonType.light) {
		_backgroundColor = "white";
	}

	return <button
		style={{
			backgroundColor: _backgroundColor,
			width: size,
			height: size,
		}}>{icon}</button>;
};