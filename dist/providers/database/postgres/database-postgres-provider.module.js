"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasePostgresProviderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_postgres_config_module_1 = require("../../../config/database/postgres/database-postgres-config.module");
const database_postgres_config_service_1 = require("../../../config/database/postgres/database-postgres-config.service");
let DatabasePostgresProviderModule = class DatabasePostgresProviderModule {
};
DatabasePostgresProviderModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [database_postgres_config_module_1.DatabasePostgresConfigModule],
                useFactory: async (postgresConfigService) => ({
                    type: postgresConfigService.type,
                    host: postgresConfigService.host,
                    port: postgresConfigService.port,
                    database: postgresConfigService.database,
                    username: postgresConfigService.username,
                    password: postgresConfigService.password,
                    entities: ['dist/app/**/*.entity.js']
                }),
                inject: [database_postgres_config_service_1.DatabasePostgresConfigService],
            }),
        ],
    })
], DatabasePostgresProviderModule);
exports.DatabasePostgresProviderModule = DatabasePostgresProviderModule;
//# sourceMappingURL=database-postgres-provider.module.js.map