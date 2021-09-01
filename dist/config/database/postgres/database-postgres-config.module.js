"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasePostgresConfigModule = void 0;
const Joi = require("@hapi/joi");
const common_1 = require("@nestjs/common");
const database_postgres_config_service_1 = require("./database-postgres-config.service");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./configuration");
let DatabasePostgresConfigModule = class DatabasePostgresConfigModule {
};
DatabasePostgresConfigModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
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
        providers: [database_postgres_config_service_1.DatabasePostgresConfigService, config_1.ConfigService],
        exports: [database_postgres_config_service_1.DatabasePostgresConfigService, config_1.ConfigService],
    })
], DatabasePostgresConfigModule);
exports.DatabasePostgresConfigModule = DatabasePostgresConfigModule;
//# sourceMappingURL=database-postgres-config.module.js.map