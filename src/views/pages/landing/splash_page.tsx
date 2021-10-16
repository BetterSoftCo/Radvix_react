import React from "react";
import {MainButton} from "../../components/button";

export class SplashPage extends React.Component {
	render() {
		return <MainButton children={
			<div>hello</div>
		} onClick={() => console.log("hello")}/>;
	}
}