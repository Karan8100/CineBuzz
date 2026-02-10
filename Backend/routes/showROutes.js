import express from "express";
import {getNowPlayingMovies} from "../controllers/showController.js"
import { addShow ,getShows,getShow} from "../controllers/showcontroller.js";
import { protectAdmin } from "../middleware/auth.js";

const showRouter = express.Router();

showRouter.get("/now-playing",protectAdmin, getNowPlayingMovies);
showRouter.post("/add",protectAdmin,addShow);


showRouter.get("/all", getShows);
showRouter.get("/:movieId", getShow);

export default showRouter;
