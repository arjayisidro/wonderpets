import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locale';
import messages from './messages';

const Provider = ({ children, locale = LOCALES.ENGLISH }) => {
  return (
    <React.Fragment>
      <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
      >
        {children}
      </IntlProvider>
      ;
    </React.Fragment>
  );
};

export default Provider;
