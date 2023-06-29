import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { OrderModule } from "./order/order.module";
import { CustomerModule } from "./customer/customer.module";
import { AddressModule } from "./address/address.module";
import { ProductModule } from "./product/product.module";
import { HealthModule } from "./health/health.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GqlModuleOptions, GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  controllers: [],
  imports: [
    UserModule,
    OrderModule,
    CustomerModule,
    AddressModule,
    ProductModule,
    HealthModule,
    ACLModule,
    AuthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      path: '/graphql',
    })
    // GraphQLModule.forRootAsync<ApolloDriverConfig>({
    //   useFactory: async (config: ConfigService) => {
    //     return {
    //       driver: ApolloDriver,
    //       autoSchemaFile: config.get<string>('GRAPHQL_SCHEMA_FILEPATH'),
    //       sortSchema: true,
    //       debug: (config.get<string>('NODE_ENV') !== 'production') as boolean,
    //       uploads: false,
    //       path: '/graphql',
    //       introspection: config.get<boolean>('GRAPHQL_INTROSPECTION', false),
    //     } as GqlModuleOptions;
    //   },
    //   inject: [ConfigService],
    //   imports: [ConfigModule],
    // }),
  ],
  providers: [],
})
export class AppModule {}
