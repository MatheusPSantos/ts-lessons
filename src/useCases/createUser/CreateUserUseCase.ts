import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
