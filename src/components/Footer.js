import React from 'react';
import Emoji from '../components/Emoji';

export default function Footer() {
    return (
        <footer className="bg-black small text-center text-white">
            <div className="container">
                Coded by Patrick Trillo <Emoji symbol="🐶" label="dog"/>
            </div>
        </footer>
    );
}
