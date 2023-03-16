const server = require('../src/App');
const session = require('supertest');
const agent = session(server);

describe('Test de RUTAS GET', () => {
    describe('GET rickandmorty/onsearch/{id}', () => {
        it('Responde con status: 200', async () => {
            const res = await agent.get('/rickandmorty/onsearch/1');
            expect(res.statusCode).toBe(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
            const res = await agent.get('/rickandmorty/onsearch/1');
            expect(Object.keys(res.body)).toEqual([
                'id',
                'name',
                'species',
                'image',
                'gender',
            ]);
        });

        it('Si hay un error responde con status: 500', async () => {
            return agent
            .get('/rickandmorty/onsearch/827')
            .send()
            .then(res => expect(res.statusCode).toBe(500));
        });
    });

    describe('GET rickandmorty/detail/{id}', () => {
        it('Responde con status: 200', async () => {
            const res = await agent.get('/rickandmorty/detail/1');
            expect(res.statusCode).toBe(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "image", "origin", "status"', async () => {
            const res = await agent.get('/rickandmorty/detail/1');
            expect(Object.keys(res.body)).toEqual([
                'image',
                'name',
                'gender',
                'status',
                'origin',
                'species',
                'id',
            ]);
        });

        it('Si hay un error responde con status: 500', async () => {
            return agent
            .get('/rickandmorty/detail/827')
            .send()
            .then(res => expect(res.statusCode).toBe(500));
        });
    });
});