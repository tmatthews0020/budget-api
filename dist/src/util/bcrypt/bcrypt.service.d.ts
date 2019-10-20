export declare class BcryptService {
    saltRounds: number;
    hashPassword(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}
