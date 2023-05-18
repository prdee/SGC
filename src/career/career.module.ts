import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { careerSchema } from './schemas/career.schema';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "career", schema: careerSchema }
        ])
    ],
    controllers :[CareerController],
    providers : [CareerService]
})
export class CareerModule { }
