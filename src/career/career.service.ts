import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CareerService {
    constructor(
        @InjectModel('career')
        private readonly careerModel: Model<any>
    ) { }

    async create(careerDTO: any) {
        return await this.careerModel.create(careerDTO as any)
    }
}
