import { Test, TestingModule } from '@nestjs/testing';
import { EnController } from './en.controller';

describe('EnController', () => {
  let controller: EnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnController],
    }).compile();

    controller = module.get<EnController>(EnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
