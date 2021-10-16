import React from "react";
import {MainButton, MainButtonType,} from "../../components/button";

export class DashboardPage extends React.Component {
	render() {
		return <MainButton type={MainButtonType.light}  children={
			<div>dashboard</div>
		} onClick={() => console.log("hello")}/>;
	}
}