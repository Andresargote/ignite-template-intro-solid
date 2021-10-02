import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    // Complete aqui
    const { email, name } = request.body;
    try {
      const createdUser = this.createUserUseCase.execute({ email, name });
      return response.status(201).json(createdUser);
    } catch (error) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}

export { CreateUserController };
