import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { DatabasePostgresConfigService } from './database-postgres-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
			validationSchema: Joi.object({
				POSTGRES_TYPE: Joi.string().valid('postgres').default('postgres'),
				POSTGRES_HOST: Joi.string().default('127.0.0.1'),
				POSTGRES_PORT: Joi.number().default(5432),
				POSTGRES_DATABASE: Joi.string().default('express_first_db'),
				POSTGRES_USERNAME: Joi.string().default('express'),
				POSTGRES_PASSWORD: Joi.string().default('express'),
			}),
		}),
	],
	providers: [DatabasePostgresConfigService, ConfigService],
	exports: [DatabasePostgresConfigService, ConfigService],
})
export class DatabasePostgresConfigModule {}
