import { Note } from './note'
export class User {
    id: number;
    name:string;
    birthDate: Date;
    bio: string;
    avatar: string;
    notes: Note[];
}
