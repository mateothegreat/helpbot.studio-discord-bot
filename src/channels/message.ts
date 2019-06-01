export class Message {

    public guild: string;
    public channel?: string;
    public snowflake: string;
    public title?: string;
    public description?: string;
    public message: string;
    public fields?: Array<{
        key: string,
        value: string
    }>;

}
