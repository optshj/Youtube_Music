import Router from "koa-router";
import * as playListCtrl from "./playList.controller";

const playLists = new Router();

playLists.post("/", playListCtrl.create);
playLists.get("/", playListCtrl.list);
playLists.get("/:id", playListCtrl.get);

export default playLists;