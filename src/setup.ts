import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

server.events.on('request:start', ({ request }) => {
    console.log('MSW intercepted:', request.method, request.url)
});
