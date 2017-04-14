import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'

export interface AuthProps {}
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Auth extends React.Component<AuthProps, undefined> {

	constructor(props:AuthProps) {
		super(props);
	}

	render() {
		return (
			<div className="c-auth-component">
				<div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
					<HashRouter>
						<div>
							<Route path="/signin" render={() => {
								console.log('ZZZZZ');
								return <div>
									<h3 className="uk-card-title">Login</h3>
									<AuthLogin />
								</div>
							}}/>
							<Route path="/signup" component={Doom} />
							<ul>
								<li><Link to="/signin">Sign In</Link></li>
								<li><Link to="/signup">Sign Up</Link></li>
							</ul>
						</div>
					</HashRouter>
				</div>
			</div>
		);
	}
}

const Doom = () => {
	console.log('this is Doom!');
	return (
		<div>
			<h3 className="uk-card-title">Login</h3>
			<AuthRegister />
		</div>
	)
}

export interface AuthLoginProps {}
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class AuthLogin extends React.Component<AuthLoginProps, undefined> {
	render() {
		return (
			<div className="c-auth-login-component">
				Auth Login
			</div>
		);
	}
}



export interface AuthRegisterProps {}
export class AuthRegister extends React.Component<AuthRegisterProps, undefined> {
	render() {
		return (
			<div className="c-auth-register-component">
				Auth Register
			</div>
		);
	}
}