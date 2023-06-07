
import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationService } from '../configuration/configuration.service';
import { Connection } from 'mongoose';
import 'colors';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configurationService: ConfigurationService) => ({
        uri: configurationService.MONGODB_URI,
        connectionFactory: (connection: Connection) => {
          if (connection.readyState === 1) {
            Logger.log(
              ` Alhamdulillah! MongoDB Connected with: ${connection.host} `
                .bgWhite.black
            );
          }
          console.log(configurationService.MONGODB_URI)

          connection.on('disconnected', () => {
            Logger.warn('DB disconnected');
          });

          connection.on('error', (error) => {
            Logger.error(
              ` DB connection failed! for error: ${error} `.bgRed.black
                .underline.bold
            );
          });

          //! MongoDB AutoPopulate Plugin Initialization
         
          return connection;
        },
      }),
      inject: [ConfigurationService],
    }),
  ],
})
export class DatabaseModule {}
