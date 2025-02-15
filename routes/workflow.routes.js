import { Router } from "express";
import { sendRemider } from "../controllers/workflow.controller.js";

const workflowRouter = Router()

workflowRouter.post("/subscription/reminder", sendRemider)
export default workflowRouter