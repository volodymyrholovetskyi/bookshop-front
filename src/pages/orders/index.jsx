import React, { useMemo } from 'react';
import IntlProvider from 'misc/providers/IntlProvider';
import useLocationSearch from 'misc/hooks/useLocationSearch';
import getMessages from './intl';
import {Outlet} from "react-router-dom";


function Index(props) {
  const {
    lang,
  } = useLocationSearch();
  const messages = useMemo(() => getMessages(lang), [lang]);
  return (
    <IntlProvider messages={messages}>
        <Outlet {...props}></Outlet>
    </IntlProvider>
  );
}

export default Index;
