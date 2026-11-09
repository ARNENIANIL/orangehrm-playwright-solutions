import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Generate fake user details', async ({ page }) => {

    const FirstName = faker.person.firstName();
    const LastName = faker.person.lastName();
    const Email = faker.internet.email();

    console.log('First Name:', FirstName);
    console.log('Last Name:', LastName);
    console.log('Email:', Email);



});


console.log('Anil');
