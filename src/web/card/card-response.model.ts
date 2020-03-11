export class CardResponse {
    public readonly stateDescription: string;
    public readonly validityEnd: string;
    public constructor(stateDescription: string, validityEnd: string) {
        this.stateDescription = stateDescription;
        this.validityEnd = validityEnd;
    }
}