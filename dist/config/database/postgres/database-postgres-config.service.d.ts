import { ConfigService } from '@nestjs/config';
export declare class DatabasePostgresConfigService {
    private configService;
    constructor(configService: ConfigService);
    get type(): string;
    get host(): string;
    get port(): number;
    get database(): string;
    get username(): string;
    get password(): string;
}
