import * as React from "react";

export interface AuthProps {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Auth extends React.Component<AuthProps, undefined> {
    render() {
        return <h1>AUTH Component</h1>;
    }
}