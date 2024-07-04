import Router from "koa-router";
import musics from "./musics";
import playLists from "./playList";

const api = new Router();

api.use("/musics", musics.routes());
api.use("/playlists", playLists.routes());

export default api;