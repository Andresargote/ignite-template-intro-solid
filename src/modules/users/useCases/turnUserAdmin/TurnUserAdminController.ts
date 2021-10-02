import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    // Complete aqui
    const { user_id } = request.params;

    try {
      const turnUser = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(turnUser);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
