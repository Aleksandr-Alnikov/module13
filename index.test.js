import sinon from 'sinon';
import { expect } from 'chai';
import fetch from 'node-fetch';
import { fetchUsers, API_URL } from './index.js';


describe('fetchUsers',() => {
    let fetchStub;

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchStub.restore();
    });

    it('должен выводить имена пользователей', async () => {
        const mockResponse = [
            { name: 'Aleksandr Ivanov' },
            { name: 'Aleksandr Petrov' },
            { name: 'Aleksandr Sidorov' }
        ];

        fetchStub.returns(Promise.resolve({
            json: () => Promise.resolve(mockResponse)
        }));

        const consoleLogStub = sinon.stub(console, 'log');

        await fetchUsers(API_URL);

        expect(consoleLogStub.calledWith('Aleksandr Ivanov')).to.be.true;
        expect(consoleLogStub.calledWith('Aleksandr Petrov')).to.be.true;
        expect(consoleLogStub.calledWith('Aleksandr Sidorov')).to.be.true;

        consoleLogStub.restore();
    });
});