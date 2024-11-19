import * as https from "https";

export class SnapFace {
  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public imageUrl: string
  ) {
  }
}
