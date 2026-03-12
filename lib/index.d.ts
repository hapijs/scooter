import { Plugin } from '@hapi/hapi';

export interface ScooterVersionInfo {
    family: string;
    major: string;
    minor: string;
    patch: string;
}

export interface DeviceInfo {
    family: string;
    brand: string | undefined;
    model: string | undefined;
}

export interface ScooterResult {
    family: string;
    major: string;
    minor: string;
    patch: string;
    source: string | undefined;
    os: ScooterVersionInfo;
    device: DeviceInfo;
}

declare module '@hapi/hapi' {

    interface PluginsStates {
        scooter: ScooterResult;
    }

    interface Request {
        userAgent(): ScooterResult;
    }
}

export const plugin: Plugin<void>;
