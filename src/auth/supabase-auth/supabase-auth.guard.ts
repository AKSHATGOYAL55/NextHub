import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import request from "express"

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor( private ConfigService : ConfigService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')){
      throw new UnauthorizedException('no token provided')
    }
    const token = authHeader.split("")[1];
    const jwtSecret = this.ConfigService.get<String>("SUPABASE_JWT_SECRET");

    if (!jwtSecret){
      throw new UnauthorizedException("JWT secret not configured")
    }
    try{
      const decodes = jwt.verify(token, jwtSecret);
      request[user] = decodes;
      return true;
    } catch (error) {
      throw new UnauthorizedException('invalid token');
    }

    return true;
  }
}
