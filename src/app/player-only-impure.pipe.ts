import { Pipe, PipeTransform } from '@angular/core';

import { Person } from './Person';
import { PlayerOnlyPipe } from './player-only.pipe';

@Pipe({ name:"playerOnlyImpure", pure: false})
export class PlayerOnlyImpurePipe extends PlayerOnlyPipe {
}