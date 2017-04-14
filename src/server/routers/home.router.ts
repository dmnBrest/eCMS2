import { Router, Request, Response, NextFunction } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as db from './../db';

class Home {

	public index(req: Request, res: Response, next?: NextFunction) {

		res.render('home.index.html', {});
	}

}

const home = new Home();

export const HomeRouter = Router();
HomeRouter.get('/', home.index);