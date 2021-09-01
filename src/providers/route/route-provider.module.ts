import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { HelloModule } from "../../app/hello/hello.module";

@Module({
  imports: [
    HelloModule,
    RouterModule.register([
      {
        path: 'api',
        children: [{path:'hello', module: HelloModule}]
      }
    ])
  ]
})
export class RouteProviderModule {}