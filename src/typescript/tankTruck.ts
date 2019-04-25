/*
  Tank Truck

*/

export class TankTruck {
  public static tankvol(h: number, d: number, vt: number): number {
    // Calculate cylinder radius and length
    const R: number = d / 2;
    const cylLength: number = vt / (Math.PI * R ** 2);

    // Calculate Sector
    const S_sec: number = R ** 2 * Math.acos(1 - h / R);

    // Calculate S_rectangle of sector
    const S_rect: number = (R - h) * Math.sqrt(2 * R * h - h ** 2);

    // Calculate S_liquid
    const S_liquid: number = S_sec - S_rect;

    // Calculate remaining volume of liquid
    const remaining: number = S_liquid * cylLength;

    return Math.floor(remaining);
  }
}
