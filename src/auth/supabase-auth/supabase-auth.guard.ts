// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { Observable } from 'rxjs';
// import * as jwt from 'jsonwebtoken';
// import {request} from "express"


// @Injectable()
// export class SupabaseAuthGuard implements CanActivate {
//   constructor( private ConfigService : ConfigService){}
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {

//     const request = context.switchToHttp().getRequest<Request>();
//     const authHeader = request.headers['authorization'];

//     if (!authHeader || !authHeader.startsWith('Bearer ')){
//       throw new UnauthorizedException('no token provided')
//     }
//     const token = authHeader.split(" ")[1];
//     const jwtSecret = this.ConfigService.get<string>("SUPABASE_JWT_SECRET");

//     console.log(token);
// console.log(jwtSecret);

//     if (!jwtSecret){
//       throw new UnauthorizedException("JWT secret not configured")
//     }
//     try{
//       const decodes = jwt.verify(token, jwtSecret);
//       request['user'] = decodes;
//       return true;
//     } catch (error) {
//       throw new UnauthorizedException('invalid token');
//     }
//   }
// }


import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {

  constructor(private configService: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    // console.log("AUTH HEADER:", authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.split(' ')[1];

    const jwtSecret = this.configService.get<string>('SUPABASE_JWT_SECRET');

    // console.log("JWT SECRET:", jwtSecret);

    if (!jwtSecret) {
      throw new UnauthorizedException('JWT secret not configured');
    }

    try {
      const decoded = jwt.verify(token, jwtSecret);
      // console.log("DECODED TOKEN:", decoded);
      request['user'] = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}