import * as React from "react";
import * as ReactDOM from "react-dom";
import * as jQuery from "jquery";

import { Auth } from "./components/auth";

if (jQuery('app-auth').length == 1) {
	ReactDOM.render(<Auth />, jQuery('app-auth')[0]);
}

