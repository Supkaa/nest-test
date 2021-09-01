import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabasePostgresConfigService {
	constructor(private configService: ConfigService) {}

	get type(): string {
		return this.configService.get<string>('postgres.type');
	}

	get host(): string {
		return this.configService.get<string>('postgres.host');
	}

	get port(): number {
		return this.configService.get<number>('postgres.port');
	}

	get database(): string {
		return this.configService.get<string>('postgres.database');
	}

	get username(): string {
		return this.configService.get<string>('postgres.username');
	}

	get password(): string {
		return this.configService.get<string>('postgres.password');
	}
}
