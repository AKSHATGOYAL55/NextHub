

// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { ConfigService, ConfigModule } from '@nestjs/config';
// import { Observable } from 'rxjs';
// import * as jwt from 'jsonwebtoken';
// import { Request } from 'express';

// @Injectable()
// export class SupabaseAuthGuard implements CanActivate {

//   constructor(private ConfigService : ConfigService){}

//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest<Request>();
//     const authHeader = request.headers['authorization'];

//     if(!authHeader || !authHeader.startsWith("Bearer ")){
//       throw new UnauthorizedException("Authorization header is missing")
//     }

//     const token = authHeader.split(" ")[1];
//     const JwtSecret = this.ConfigService.get<string>("SUPABASE_JWT_SECRET");

//     if(!JwtSecret){
//       throw new UnauthorizedException('JWT secret is not configured')
//     }
//     try{
//       const decoded = jwt.verify(token, JwtSecret);
//       request['user'] = decoded;
//       return true;
//     }catch(err){
//       throw new UnauthorizedException("Invalid token")
//     }
//   }
// }


import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {

  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException("Authorization header missing");
    }

    const token = authHeader.split(" ")[1];

    const { data, error } = await this.supabase.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedException("Invalid token");
    }

    request['user'] = data.user;

    return true;
  }
}
