import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  // microservice
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://iwdnqdej:T8oxUZdfXiw8ZyMsd68EDrwmPLaKQRF2@beaver.rmq.cloudamqp.com/iwdnqdej'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen(() => {
    console.log("Microservice is listening");
  })
}
bootstrap();
