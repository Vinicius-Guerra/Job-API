import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { applicationCreateSchema } from "../schemas/application.schemas";
import { container } from "tsyringe";
import { ApplicationServices } from "../services/application.services";
import { ValidateToken } from "../middlewares/validateToken.middleware";


container.registerSingleton("ApplicationServices", ApplicationServices);
const applicationControllers = container.resolve(ApplicationControllers);

export const applicationRouter = Router();

applicationRouter.post("/:id/applications", ValidateBody.execute(applicationCreateSchema), (req, res) => applicationControllers.create(req, res));
applicationRouter.get("/:id/applications", ValidateToken.execute, (req, res) => applicationControllers.findMany(req, res));
