import { Test, TestingModule } from '@nestjs/testing';
import { EnService } from './en.service';

describe('EnService', () => {
  let service: EnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnService],
    }).compile();

    service = module.get<EnService>(EnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
