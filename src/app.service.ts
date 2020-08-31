import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello (): string {
    return 'Maratona Full Cycle 4.0';
  }
}
