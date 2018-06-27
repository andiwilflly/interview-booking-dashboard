import React from 'react';
// Utils
import lazy from "utils/lazy.utils";


class InputPage extends React.Component {}


export default lazy(()=> import(/* webpackChunkName: "InputPage" */ 'components/pages/InputPage.component'))(InputPage);
