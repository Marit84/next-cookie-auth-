import { getUserProfile, authInitialProps } from '../lib/auth';
import React from 'react';
import Layout from '../components/Layout';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

export default class Profile extends React.Component {
state = {
    user: null
};

componentDidMount() {
    getUserProfile().then(user => this.setState({ user }));
}


render() {
    return (
        <Layout title="Profile" {...this.props}>
        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
        </Layout>
    );
}
}

Profile.getInitialProps = authInitialProps(true);