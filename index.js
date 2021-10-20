import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

//importando o provedor do react-native-paper
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

//padrão de cores do native paper
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#1976d2',
        secondary: '#115293'
    }
}

//criando a aplicação com o NativePaper
export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);

const isAndroid = require('react-native').Platform.OS === 'android';
const isHermesEnabled = !!global.HermesInternal;

if (isHermesEnabled || isAndroid) {

    require('@formatjs/intl-getcanonicallocales/polyfill');
    require('@formatjs/intl-locale/polyfill');

    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/locale-data/en.js');

    require('@formatjs/intl-displaynames/polyfill');
    require('@formatjs/intl-displaynames/locale-data/en.js');

    require('@formatjs/intl-listformat/polyfill');
    require('@formatjs/intl-listformat/locale-data/en.js');

    require('@formatjs/intl-numberformat/polyfill');
    require('@formatjs/intl-numberformat/locale-data/en.js');

    require('@formatjs/intl-relativetimeformat/polyfill');
    require('@formatjs/intl-relativetimeformat/locale-data/en.js');

    require('@formatjs/intl-datetimeformat/polyfill');
    require('@formatjs/intl-datetimeformat/locale-data/en.js');

    require('@formatjs/intl-datetimeformat/add-golden-tz.js');
}
