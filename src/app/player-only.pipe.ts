import { Pipe, PipeTransform } from '@angular/core';

import { Person } from './Person';

@Pipe({ name:"playerOnly", pure: true})
export class PlayerOnlyPipe implements PipeTransform {
    transform(people: Person[]): Person[] {
        return people.filter(p => p.isPlayer);
    }
}