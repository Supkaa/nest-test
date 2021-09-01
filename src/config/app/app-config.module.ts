import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
			validationSchema: Joi.object({
				APP_NAME: Joi.string().default('Test'),
				APP_ENV: Joi.string()
					.valid('development', 'production', 'test')
					.default('development'),
				APP_URL: Joi.string().default('http://nest-first-project'),
				APP_PORT: Joi.number().default(3000),
			}),
		}),
	],
	providers: [ConfigService, AppConfigService],
	exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
