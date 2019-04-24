/*
  Tortoise racing
  https://www.codewars.com/kata/55e2adece53b4cdcb900006c
*/

export class TortoiseRacing {
  public static race = (v1: number, v2: number, g: number): number[] => {
    if (v1 >= v2) return null;

    const time: number = g / (v2 - v1);

    const _h: number = Math.trunc(time);
    const _m: number = Math.trunc((time * 60) % 60);
    const _s: number = Math.trunc((time * 3600) % 60);

    return [_h, _m, _s];
  };
}
