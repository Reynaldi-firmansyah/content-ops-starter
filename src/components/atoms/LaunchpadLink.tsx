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
