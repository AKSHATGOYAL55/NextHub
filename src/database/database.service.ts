import { Injectable,  OnApplicationShutdown, ShutdownSignal, OnModuleInit } from '@nestjs/common';
// import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit(){
        this.isConnected = true;
        console.log("Database connected successfully")
    }

    onApplicationShutdown(signal : string){
        this.isConnected = false
        console.log(`Database connection closed due to app shutdown ${signal}`)
    }

    getStatus(){
        return this.isConnected ? "Connected" : "Disconnected";
    }
}
