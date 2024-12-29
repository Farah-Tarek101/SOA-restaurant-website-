/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FoodModule } from './food/food.module'; // Import FoodModule
import { ReservationModule } from './reservation/reservation.module';
import { OrderModule } from './ordering/ordering.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Load environment variables with ConfigModule
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config globally available
    }),

    // Database connections using ConfigService to retrieve DB URIs
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('usersDB'),
        connectionName: 'usersDB',
      }),
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('foodDB'),
        connectionName: 'foodDB',
      }),
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('ordersDB'),
        connectionName: 'ordersDB',
      }),
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('reservationsDB'),
        connectionName: 'reservationsDB',
      }),
      inject: [ConfigService],
    }),

    // Feature modules
    UserModule,
    FoodModule,
    OrderModule,
    ReservationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService], // Remove any other service from here
})
export class AppModule {}
