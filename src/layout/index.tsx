import * as React from "react";
import {Component} from "react";
import {withRouter} from "react-router";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Err from "./../pages/err/err"


type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
    children: any,
    location:any
}

type PageState = {
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps


class Layout extends Component <IProps, PageState> {
    constructor(props: any) {
        super(props);
    }


    //刷新页面
    private ownReset = async () => {
        window.location.reload(true);
    };

    public render() {

        return (
            <div>
                <div className={"content"}>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.pathname}
                                       classNames={'fade'}
                                       timeout={100}>
                            {this.props.children}
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <div className={'shelter-all'}>
                </div>
                <Err ownReset={this.ownReset.bind(this)}>
                </Err>
            </div>

        )
    }
}

export default withRouter(Layout as any);


