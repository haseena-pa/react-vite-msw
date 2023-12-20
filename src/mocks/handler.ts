import { HttpResponse, http } from 'msw';

export const handlers = [
    http.get(
        "",
        () => { return HttpResponse.json(["123", "456"]) }
    ),
];