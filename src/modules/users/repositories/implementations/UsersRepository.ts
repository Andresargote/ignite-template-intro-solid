import { v4 as uuidv4 } from "uuid";

import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const newUser = new User();

    Object.assign(newUser, {
      id: uuidv4(),
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const isExistsUser = this.users.find((user) => user.id === id);
    return isExistsUser;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const isExistsUser = this.users.find((user) => user.email === email);
    return isExistsUser;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    receivedUser.admin = true;
    receivedUser.updated_at = new Date();

    return receivedUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
