<<<<<<< HEAD
const launchpadLinkModel = {
    name: 'LaunchpadLink',
    type: 'object', // or 'component', 'page', etc., based on what it actually represents
    label: 'Launchpad Link',
    fields: [
        {
            name: 'url',
            type: 'string',
            label: 'Launchpad URL',
            default: 'https://launchpad.net'
        },
        {
            name: 'iconSrc',
            type: 'string',
            label: 'Icon Source',
            default: '/images/Canonical_Launchpad_icon_64px.png'
        },
        {
            name: 'altText',
            type: 'string',
            label: 'Alt Text',
            default: 'Launchpad'
        }
    ]
};
=======
import React from 'react';

const LaunchpadLink = () => (
    <a href="https://launchpad.net" target="_blank" rel="noopener noreferrer">
        <img
            src="/images/Canonical_Launchpad_icon_64px.png"
            alt="Launchpad"
            className="w-8 h-8"
        />
    </a>
);

export default LaunchpadLink;
>>>>>>> 0d21c888873f4ae713f9d32d75e48a3da91de9c4
