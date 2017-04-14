import { Router, Request, Response, NextFunction } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as db from './../db';

import { ILoginForm } from './../../common/interfaces'

class Auth {

	public index(req: Request, res: Response, next?: NextFunction) {


		res.render('auth.index.html', {});
	}

	public login(req: Request, res: Response, next?: NextFunction) {

		res.setHeader('Content-Type', 'application/json');

		let form = req.body as ILoginForm

		console.log(req.body);

		let currentUser = {
			id: 1,
			username: 'Doom',
			password: '*****',
			email: 'doom@doom.com'
		}

		res.send(JSON.stringify({ status: 'ok', currentUser: currentUser }));
	}

}

const auth = new Auth();

export const AuthRouter = Router();
AuthRouter.get('/', auth.index);
AuthRouter.post('/login', auth.login);
