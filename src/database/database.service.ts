import { Injectable, OnModuleInit, OnApplicationShutdown, ShutdownSignal } from '@nestjs/common';
// import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    OnModuleInit(){
        this.isConnected = true;
        console.log("Database connected successfully")
    }

    OnApplicationShutdown(signal : string){
        this.isConnected = false
        console.log(`Database connection closed due to app shutdown ${signal}`)
    }

    getStatus(){
        return this.isConnected ? "Connected" : "Disconnected";
    }
}
