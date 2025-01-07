// api.test.js
import { usersAPI } from './api';
import axios from 'axios';

jest.mock('axios');

describe('usersAPI', () => {
    it('should fetch users from the API', async () => {
        const mockUsersData = { data: [{ id: 1, name: "Test User" }] };

        // Мокаем метод get для axios
        axios.create = jest.fn(() => {
            return {
                get: jest.fn().mockResolvedValue(mockUsersData),
            };
        });
        
        // Теперь вызываем ваш API метод
        const users = await usersAPI.getUsers(1, 10);
        
        // Проверяем полученные данные
        expect(users).toEqual(mockUsersData.data);
        expect(axios.create).toHaveBeenCalled(); 
    });
});