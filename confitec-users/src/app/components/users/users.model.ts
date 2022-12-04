export class UserModel{
    userId!: number;
    userName!: string;
    surName!: string;
    email!: string;
    birthDate!: Date;
    scholarity!: number;
    scholarityName!: string;
}

export class CreateUserModel{
    userName!: string;
    surName!: string;
    email!: string;
    birthDate!: Date;
    scholarity!: number;
    scholarityName!: string;
}

export class UpdateUserModel{
    userId!: number;
    userName!: string;
    surName!: string;
    email!: string;
    birthDate!: Date;
    scholarity!: number;
    scholarityName!: string;
}