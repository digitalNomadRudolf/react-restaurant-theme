import React from 'react';
import { Redirect } from 'react-router-dom';

export default function NotFound() {
    return (
        <Redirect to="/" /> 
    )
}
