import React from "react";
import {MainButton, MainButtonType,} from "../../components/button";

export class SplashPage extends React.Component {
	render() {
		return <MainButton type={MainButtonType.light} backgroundColor="red" children={
			<div>hello</div>
		} onClick={() => console.log("hello")}/>;
	}
}