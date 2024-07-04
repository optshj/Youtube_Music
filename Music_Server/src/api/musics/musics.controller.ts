import MusicSchema from '../../model/music';
import { Context } from 'koa';

interface MusicRequestBody {
    title: string;
    artist: string;
    releaseDate: string;
    playTime: number;
}

export const create = async (ctx: Context): Promise<void> => {
    const {
        title,
        artist,
        releaseDate,
        playTime
    } = ctx.request.body as MusicRequestBody;
    
    const music = new MusicSchema({
        title,
        artist,
        releaseDate,
        playTime
    });

    try {
        await music.save();
    } catch (e) {
        ctx.throw(500, { details: e });
    }

    ctx.body = music;
};