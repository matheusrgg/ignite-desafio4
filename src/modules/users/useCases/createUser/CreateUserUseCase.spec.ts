


import { AppError } from "../../../../shared/errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";

let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;


describe("Create a user", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
   createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

  });

  it("Should not be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
        name: 'Test',
        email: 'test@test.com.br',
        password: '12345'
    })   

    expect(user).toHaveProperty('id')

   
  });


});