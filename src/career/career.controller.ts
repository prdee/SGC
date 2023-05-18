import { Body, Controller, Post, Res } from '@nestjs/common';
import { CareerService } from './career.service';
import { careerDTO } from './dto/career.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import * as responseHandler from "../responseHandler";




@Controller('career')
export class CareerController {
    constructor(
        private readonly careerService: CareerService
    ) { }
    @Post()
    @ApiOperation({ summary: "create career Dto" })
    @ApiBody({
        type: careerDTO,

    })
    async createCareer(@Res() res: any, @Body() careerDtos: careerDTO) {
        try {
            let createCareer = await this.careerService.create(careerDtos);
            console.log(createCareer)
            if (!createCareer) {
                responseHandler.errorResponse(res, 400, "Data not found", []);
            } else {
                responseHandler.successResponse(
                    res,
                    201,
                    "career created successfully",
                    createCareer
                );
            }
        }
        catch (e) {
            return e;
        }
    }
}
