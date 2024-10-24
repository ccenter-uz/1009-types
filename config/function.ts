import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const initTcpService = (name: string) =>
  <ClientsProviderAsyncOptions>{
    name: name,
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      transport: Transport.TCP,
      options: {
        host: configService.get(`SERVICE.${name}_HOST`) || 'localhost',
        port: parseInt(configService.get(`SERVICE.${name}_PORT`)) || 5462,
      },
    }),
    inject: [ConfigService],
  };
