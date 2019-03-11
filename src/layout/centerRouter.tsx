import Layout from "./index";
import * as PropTypes from 'prop-types';
import {connect} from "dva";
// @ts-ignore
import React, {Component} from "react";
import {Route} from "react-router-dom";


type PageOwnProps = {
    title: string,
    exact: boolean,
    key: number,
    path: string,
    component: any,
    location: any,
    dispatch: any,
    loading: any,
    app: any,
    childRoutes: any,
    history: any,
}

type PageState = {}

class CenterRoute extends Component<PageOwnProps, PageState> {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    public async componentDidMount() {
        //修改html的页面标题
        let {title} = this.props;
        document.title = title;

        //是否是绑定状态进行登录页面的跳转判断
        if (this.props.location.pathname !== "/bind") {
            try {
                if (this.props.app._loginSpring) {
                    await this.gainLogin();
                    //当没绑定的时候跳到绑定页面
                    if (!this.props.app._loginStatus) {
                        this.context.router.history.push({pathname: '/bind'});
                    }
                }
            } catch (e) {

            }
        } else {
            // await this.gainLogin();
            // //当没绑定的时候跳到绑定页面
            // if (this.props.app._loginStatus) {
            //     this.context.router.history.push({pathname: '/'});
            // }

        }
    }

    //登录
    private async gainLogin() {

        let {dispatch} = this.props;
        await dispatch({
            type: 'app/queryLogin',
        });
    }

    public render() {
        return (
            <div>
                <Layout>
                    <Route
                        {...this.props}
                    >
                    </Route>
                </Layout>
            </div>
        );
    }
}

export default connect(({app, loading}: any) => ({
    app, loading
}))(CenterRoute);

