import { storiesOf, addParameters } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { PhotoUiCardComponent } from '../app/photo-ui-card/photo-ui-card.component'
import { withCssResources } from '@storybook/addon-cssresources';

const src = "assets/avatar-kora.jpg";
const title = "Avatar Kora";

storiesOf('app-photo-ui-card', module)
    .addDecorator(withCssResources)
    .addParameters({
        cssresources: [ {
            id: `Tailwind`,
            code: `<link rel="stylesheet" type="text/css" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"></link>`,
            picked: true,
        },
        ],
    })

    .add('default', () => ({
        component: PhotoUiCardComponent,
        props: {
            name: "Babatunde Lamidi",
            phone: "07089653241",
            jobDescription: "Frontend Engineer",
            email: "2ndescofield@gmail.com",
            photo: {
                src,
                title
            }
        }
    }))

    .add('without image', () => ({
        component: PhotoUiCardComponent,
        props: {
            name: "Babatunde Lamidi",
            phone: "07089653241",
            jobDescription: "Frontend Engineer",
            email: "2ndescofield@gmail.com",
            photo: {

            }
        }
    }))

    .add('image only', () => ({
        component: PhotoUiCardComponent,
        props: {
            photo: {
                src,
                title

            }
        }
    }))