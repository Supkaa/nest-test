declare const _default: (() => {
    type: string;
    host: string;
    port: string;
    database: string;
    username: string;
    password: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export default _default;
