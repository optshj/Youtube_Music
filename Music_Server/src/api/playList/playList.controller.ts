import PlayListSchema from "../../model/playList";
import { Context } from "koa";

interface PlayListRequestBody {
    title: string;
    owner: string;
    descript: string;
    url:string
}

export const create = async (ctx: Context): Promise<void> => {
    const {
        title,
        owner,
        descript,
        url
    } = ctx.request.body as PlayListRequestBody;

    const playList = new PlayListSchema({
        title,
        owner,
        descript,
        url
    });

    try {
        await playList.save();
    } catch (e) {
        ctx.throw(500, { details: e });
    }

    ctx.body = playList;
};

export const list = async (ctx: Context): Promise<void> => {
    let playLists;
    try {
        playLists = await PlayListSchema.find().exec();
    } catch (e) {
        ctx.throw(500, { details: e });
    }
    ctx.body = playLists;
}

export const get = async (ctx: Context): Promise<void> => {
    const { id } = ctx.params;

    let playList;
    try {
        playList = await PlayListSchema.findById(id).exec();
    } catch (e) {
        ctx.throw(500, { details: e });
    }

    if (!playList) {
        ctx.status = 404;
        ctx.body = { message: "PlayList not found" };
        return;
    }
    ctx.body = playList;
}