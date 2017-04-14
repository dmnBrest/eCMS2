import * as React from "react";
import * as ReactDOM from "react-dom";
import * as jQuery from "jquery";

import { Hello } from "./components/hello";
import { Auth } from "./components/auth";

// Bootstrap Auth App
if (jQuery('app-auth').length == 1) {
	ReactDOM.render(
		<Auth />,
		jQuery('app-auth')[0]
	);
}

// Bootstrap Example
if (jQuery('#example').length == 1) {
	ReactDOM.render(
		<Hello compiler="TypeScript!!!" framework="React" />,
		jQuery('#example')[0]
	);
}