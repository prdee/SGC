import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({

      // origin: process.env.ALLOWED_ORIGINS?.split(",") || true,
    
      origin: '*',
    
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    
      credentials: true,
    
      /**
    
      * Allowed 31 days for all cors request
    
      * Allowed all headers
    
      */
    
      maxAge: 60 * 60 * 24 * 31,
     });
  const config = new DocumentBuilder()
  .setTitle('SEG')
  .setDescription('The SEG API description')
  .setVersion('1.0')
  .addTag('seg')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api/playground', app, document);
  await app.listen(3000);
}
bootstrap();
