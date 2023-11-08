export class RestClient {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public getItems<T>() {
        return this.makeRequest<T[]>();
    }

    public create<T>(record: T) {
        return this.makeRequest('', 'POST', record)
    }

    public update<T>(id: number, record: T) {
        return this.makeRequest(id.toString(), 'PUT', record)
    }

    public delete(id: number) {
        return this.makeRequest(id.toString(), 'DELETE')
    }

    public getItem<T>(id: number) {
        return this.makeRequest<T>(String(id))
    }

    private async makeRequest<T>(path = '', method = 'GET', data?: T): Promise<T> {
        const response = await fetch(`${this.url}${path}`, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
}