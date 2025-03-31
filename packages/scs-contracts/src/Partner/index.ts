export interface IPartner {
    id: string;
    name: string;
}

export function parsePartner(data: any): IPartner {
    return {
        id: String(data?.id || "-1"),
        name: data.name + " parsed" || 'Unknown'
    };
}