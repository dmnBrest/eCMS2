import * as React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { IAppState, appStore } from './../services/store.service'

console.log('Doom1');
console.log(appStore)


export interface AuthProps {}
export class Auth extends React.Component<AuthProps, undefined> {

	constructor(props:AuthProps) {
		super(props);
	}

	render() {
		return (
			<Provider store={appStore}>
				<div className="c-auth-component">
					<div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
						<HashRouter>
							<div>
								<Switch>
									<Route path="/signup" render={() => (
										<div>
											<h3 className="uk-card-title">Register</h3>
											<AuthRegister />
										</div>
									)} />
									<Route path="/signin" render={() => (
										<div>
											<h3 className="uk-card-title">Login</h3>
											<AuthLogin_ />
										</div>
									)}/>
								</Switch>
								<Route path="/" render={(props) => {
									let cp = props.location.pathname;
									return <div>
										<ul>
											{cp != '/signin' && (
												<li><Link to="/signin">Sign In</Link></li>
											)}
											{cp != '/signup' && (
												<li><Link to="/signup">Sign Up</Link></li>
											)}
										</ul>
									</div>
								}}/>
							</div>
						</HashRouter>
					</div>
				</div>
			</Provider>
		);
	}
}

export interface AuthLoginProps {
	counter: number;
	incrementCounter: () => void;
}
export class AuthLogin extends React.Component<AuthLoginProps, undefined> {
	render() {
		return (
			<div className="c-auth-login-component">
				<h1>Auth Login</h1>
				<div>
					<div>Counter: {this.props.counter}</div>
					<div><button onClick={() => this.props.incrementCounter()}>ADD</button></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IAppState) => {
	return {
		counter: state.counter
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		incrementCounter: () => {
			console.log('A1!');
			dispatch({type: 'INCREMENT_COUNTER'})
		}
	}
}

const AuthLogin_ = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLogin)

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