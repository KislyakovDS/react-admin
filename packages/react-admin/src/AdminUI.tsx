import * as React from 'react';
import { CoreAdminUI, AdminUIProps } from 'ra-core';
import {
    Layout as DefaultLayout,
    LoadingPage,
    Login,
    Logout,
    NotFound,
} from 'ra-ui-materialui';

const AdminUI = (props: AdminUIProps) => <CoreAdminUI {...props} />;

AdminUI.defaultProps = {
    layout: DefaultLayout,
    catchAll: NotFound,
    loading: LoadingPage,
    loginPage: Login,
    logout: Logout,
};

export default AdminUI;
