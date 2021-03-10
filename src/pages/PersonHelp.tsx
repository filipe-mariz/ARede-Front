import { deflate } from 'node:zlib';
import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function PersonHelp() {
    return (
        <div className="help">
            <Sidebar />
        </div>
    );

}

export default PersonHelp;