export interface IDummy {
    id: string;
    name: string;
}

export function parseDummyUtil(data: any): IDummy {
    return {
        id: String(data?.id || "-1"),
        name: data.name + " parsed v04" || 'Unknown'
    };
}