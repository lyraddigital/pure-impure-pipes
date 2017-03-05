import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name:"customJson", pure: true})
export class CustomJsonPipe implements PipeTransform {
    transform(data?: any): string {
        return JSON.stringify(data);
    }
}