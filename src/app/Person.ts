export class Person {
    firstName = '';
    lastName = '';
    isPlayer = false;

    constructor(firstName: string, lastName: string, isPlayer: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isPlayer = isPlayer;
    }
}