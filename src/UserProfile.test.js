import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
    it('renders elements without exploding', () => {
        const userProfile = shallow(<UserProfile username='morty' />);

        expect(userProfile.find('div').length).toBe(1);
    });

    it('sets username property', () => {
        const userProfile = shallow(<UserProfile username='morty' />);

        expect(userProfile.text()).toBe('Hi morty!');
    });
});