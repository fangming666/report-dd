import * as React from "react";
import {Component} from "react";
import {CSSTransition} from 'react-transition-group'
import "./test.scss"
type PageOwnProps = {}

type PageState = {
    show: boolean
}


class Test extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: true
        }
    }


    private handleToggole() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className={'test'}>
                <CSSTransition
                    in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
                    timeout={1000} //动画执行1秒
                    classNames='fade' //自定义的class名
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleToggole.bind(this)}>toggle</button>
            </div>
        )
    }

}

export default Test;


