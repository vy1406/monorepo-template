export interface IDummy {
    id: string;
    name: string;
}

export function parseDummyUtil(data: any): IDummy {
    return {
        id: String(data?.id || "-1"),
        name: data.name + " from direct package sss" || 'Unknown'
    };
}