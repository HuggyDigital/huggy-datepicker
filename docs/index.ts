import { createApp } from 'vue';
import DatePicker from '@huggydigital/huggy-datepicker';
import '../lib/style/index.scss';
import '../lib/locale/en';

import App from './components/App';
import './index.scss';
import 'highlight.js/styles/atom-one-light.css';

const app = createApp(App);

DatePicker.install(app);
DatePicker.locale('en');

app.mount('#app');
