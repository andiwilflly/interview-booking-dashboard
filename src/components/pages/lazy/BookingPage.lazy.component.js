import React from 'react';
// Utils
import lazy from "utils/lazy.utils";


class BookingPage extends React.Component {}


export default lazy(()=> import(/* webpackChunkName: "BookingPage" */ 'components/pages/BookingPage.component'))(BookingPage);
