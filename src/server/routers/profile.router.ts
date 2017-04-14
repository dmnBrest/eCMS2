import { Router, Request, Response, NextFunction } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as db from './../db';

class Profile {

	public index(req: Request, res: Response, next?: NextFunction) {

		res.render('profile.index.html', {});
	}

}

const profile = new Profile();

export const ProfileRouter = Router();
ProfileRouter.get('/', profile.index);