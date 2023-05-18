import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareerController } from './career/career.controller';
import { CareerService } from './career/career.service';
import { CareerModule } from './career/career.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { careerSchema } from './career/schemas/career.schema';

@Module({
  imports: [
    CareerModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: "career", schema: careerSchema }
    ])],
  controllers: [AppController, CareerController],
  providers: [AppService, CareerService],
})
export class AppModule { }
