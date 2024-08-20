import { defineStackbitConfig, DocumentStringLikeFieldNonLocalized, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import { allModels } from 'sources/local/models';

const gitContentSource = new GitContentSource({
    rootPath: __dirname,
    contentDirs: ['content'],
    models: Object.values(allModels),
    assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    }
});

// Define the LaunchpadLink model
const launchpadLinkModel = {
    name: 'LaunchpadLink',
    type: 'object',
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

export const config = defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    styleObjectModelName: 'ThemeStyle',
    contentSources: [gitContentSource],
    presetSource: {
        type: 'files',
        presetDirs: ['sources/local/presets']
    },
    // Add the LaunchpadLink model to the Stackbit config
    models: {
        ...allModels,
        LaunchpadLink: launchpadLinkModel
    },
    siteMap: ({ documents, models }): SiteMapEntry[] => {
        const pageModels = models.filter((model) => model.type === 'page').map((model) => model.name);
        return documents
            .filter((document) => pageModels.includes(document.modelName))
            .map((document) => {
                let slug = (document.fields.slug as DocumentStringLikeFieldNonLocalized)?.value;
                if (!slug) return null;
                slug = slug.replace(/^\/+/, '');
                switch (document.modelName) {
                    case 'PostFeedLayout':
                        return {
                            urlPath: '/blog',
                            document: document
                        };
                    case 'PostLayout':
                        return {
                            urlPath: `/blog/${slug}`,
                            document: document
                        };
                    default:
                        return {
                            urlPath: `/${slug}`,
                            document: document
                        };
                }
            });
    }
});


export default config;
