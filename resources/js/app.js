import './bootstrap';
import.meta.glob([
    '/public/storage/fonts/**'
]);

import { createApp } from 'vue';
import NotesIndex from './components/Notes/Index.vue';

createApp({})
    .component('NotesIndex', NotesIndex)
    .mount('#app')
