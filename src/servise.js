import React, {Component} from 'react';

export default class Service extends Component {
    url = 'http://localhost:3000/products';

    getMenu = async () => {
        const response = await fetch(this.url);
        if (!response.ok){
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result;
    }
}