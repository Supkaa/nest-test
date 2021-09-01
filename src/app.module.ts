import { Module } from '@nestjs/common';
import { RouteProviderModule } from './providers/route/route-provider.module';
import { AppConfigModule } from './config/app/app-config.module';
@Module({
	imports: [
		AppConfigModule,
		RouteProviderModule,
	],
})
export class AppModule {}
