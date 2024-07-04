import Router from 'koa-router';
import * as musicsCtrl from './musics.controller';

const musics = new Router();

musics.post('/', musicsCtrl.create);

export default musics