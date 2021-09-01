import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabasePostgresConfigModule } from '../../../config/database/postgres/database-postgres-config.module';
import { DatabasePostgresConfigService } from '../../../config/database/postgres/database-postgres-config.service';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [DatabasePostgresConfigModule],
			useFactory: async (
				postgresConfigService: DatabasePostgresConfigService,
			) =>
				({
					type: postgresConfigService.type,
					host: postgresConfigService.host,
					port: postgresConfigService.port,
					database: postgresConfigService.database,
					username: postgresConfigService.username,
					password: postgresConfigService.password,
          entities: ['dist/app/**/*.entity.js']
				} as PostgresConnectionOptions),
			inject: [DatabasePostgresConfigService],
		} as TypeOrmModuleAsyncOptions),
	],
})
export class DatabasePostgresProviderModule {}
