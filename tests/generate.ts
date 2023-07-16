import { User } from '../src/models/user.model';
import { faker } from '@faker-js/faker';

export function generateUser(overide = {}): User {
    return {
        id: faker.number.int().toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
    } as User;
}

export function generateUsers(overide = {}): Array<User> {
    const users = [] as Array<User>;
    users.push(generateUser());
    users.push(generateUser());
    users.push(generateUser());
    return users;
}

export function createUserPayload() {
    const payload = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: faker.internet.password(),
        passwordConfirmation: faker.internet.password(),
        email: faker.internet.email()
    };
    return payload;
}
