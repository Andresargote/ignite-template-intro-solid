import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const existsTheUser = this.usersRepository.findById(user_id);

    if (!existsTheUser) {
      throw new Error("The user dont'n exists");
    }

    return existsTheUser;
  }
}

export { ShowUserProfileUseCase };
