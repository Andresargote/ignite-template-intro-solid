import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const getUser = this.usersRepository.findById(user_id);

    if (getUser.admin === true) {
      const userLists = this.usersRepository.list();
      return userLists;
    }

    if (getUser.admin === false) {
      throw new Error("You are not admin");
    }

    throw new Error("The user not exists!");
  }
}

export { ListAllUsersUseCase };
