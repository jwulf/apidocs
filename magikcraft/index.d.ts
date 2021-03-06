declare namespace magikcraft {
    export namespace io {
        export interface BukkitLocation {
            setX(x: number): void;
            setY(y: number): void;
            setZ(z: number): void;
            setPitch(pitch: number): void;
            setYaw(yaw: number): void;
            setWorld(world: any): void;

            getX(): number;
            getY(): number;
            getZ(): number;
            getYaw(): number;
            getPitch(): number;
            getWorld(): BukkitWorld;
            getBlock(): BukkitBlock;
            getDirection(): vector;

            clone(): BukkitLocation;
        }

        export interface vector {
            multiply(num: number): vector;
        }

        export interface BukkitWorld {
            getBlockAt(location: BukkitLocation): BukkitBlock;
            strikeLightning(location: BukkitLocation);
            spawnEntity(location: BukkitLocation, entityType: any);
            createExplosion(location: BukkitLocation, times: number);
        }

        export interface BukkitBlock {
            location: BukkitLocation;
            getType(): BukkitBlockType;
            getRelative(x: number, y: number, z: number): BukkitBlock;
            setType(newType: BukkitBlockType): void;
        }

        export interface BukkitBlockType {
            equals(comparison: any): boolean;
        }

        export interface BukkitPlayer {
            getWorld(): BukkitWorld;
            getName(): string;
            getLocation(): BukkitLocation;
            getEyeLocation(): BukkitLocation;
            getLineOfSight(blocks: BukkitMaterial[], maxDistance: number): BukkitBlock[];
            launchProjectile(projectileType: any): void;
            isSneaking(): boolean;
        }

        export type BukkitMaterial = any;

        export type JavaType = any;

        /**
         * Return a Java class reference to an org.bukkit.* class.
         * 
         * Refer to the Bukkit API documentation at https://bukkit.magikcraft.io.
         *
        *
        */
        export function type(classname: string): JavaType;

        export type BukkitPlugin = any;

        /**
         * Return a reference to the Magikcraft Bukkit Plugin
         *
         */
        export function getPlugin(): BukkitPlugin;

        /**
        * Execute the callback function once, after the delay in milliseconds
        **/
        export function setTimeout(callback: Function, delay: number): number;
        /**
        * Execute the callback function multiple times, after the delay in milliseconds. Returns a handler that can be used to clear the interval timer.
        **/
        export function setInterval(callback: Function, delay: number): number;
        /**
        * Clear the interval timer.
        **/
        export function clearInterval(handle: number): void;

        /**
         * User interface bars. These use BossBarAPI.
         */
        export const Bars: BossBarAPI;

        export interface BossBarAPI {
            addBar(
                player: BukkitPlayer,
                text: TextComponent,
                color: BarsColor,
                style: BarsStyle,
                progress: number
            ): BossBar;
            getBossBars(): BossBar[];
            addBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;
            removeBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;

            Color: BarsColor;
            Style: BarsStyle;
        }

        export interface BossBar {
            addPlayer(player: BukkitPlayer): void;
            removePlayer(player: BukkitPlayer): void;
            getColor(): BarsColor;
            getStyle(): BarsStyle;
            setProperty(property: any, flag: boolean);
            getMessage(): string;
            setVisible(flag: boolean);
            isVisible(): boolean;
            getProgress(): number;
            setProgress(progress: number): void;
        }
        export interface BarsColor {
            readonly PINK;
            readonly RED;
            readonly GREEN;
            readonly BLUE;
            readonly YELLOW;
            readonly PURPLE;
            readonly WHITE;
        }

        export interface BarsStyle {
            readonly PROGRESS;
            readonly NOTCHED_6;
            readonly NOTCHED_10;
            readonly NOTCHED_12;
            readonly NOTCHED_20;
        }

        export class TextComponent {
            constructor(text: string);
        }
    }
}

/**
 * Access underlying Java classes.
 *
 * @interface Java
 *
 */

declare namespace Java {
    /**
     * 
     * Return a reference to a Java class. In the Nashorn JavaScript engine you can instantiate Java class instances and get a JavaScript reference to them.
     * 
     * Example:
     * ```
     * 
     * ```
     */
    export function type(classname: string): any;
}