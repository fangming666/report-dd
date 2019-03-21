import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";
import IndividualClickImg from "../../assets/imgs/Individual-click.svg";
import IndividualImg from "../../assets/imgs/Individual.svg";


type PageOwnProps = {
    app: any,
    dispatch: any,
    exam_list: any
}

type PageState = {
    IndividualImgSrc: string
}


const hoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {
    return class extends Component<PageOwnProps, PageState> {
        static contextTypes = {
            router: PropTypes.object.isRequired,
        };

        constructor(props: any) {
            super(props);
            this.state = {
                IndividualImgSrc: IndividualImg
            }
        }

        public async componentDidMount() {
            let {dispatch} = this.props;
            let currPage = this.props.exam_list._currPage;
            try {
                await dispatch({
                    type: "app/changeBack",
                    payload: {
                        backSwitch: false
                    }
                });
                await dispatch({
                    type: "app/changeShelter",
                    payload: {shelter: true}
                });
                await dispatch({
                    type: "exam_list/queryExam",
                    payload: {initSwitch: true, currPage}
                });
                await dispatch({
                    type: "app/changeShelter",
                    payload: {shelter: false}
                });

            } catch (e) {

            }
        }

        public componentWillUnmount(): void {
            //当前页码减一，方便下次调取相加是正确的
            // let {dispatch} = this.props;
            // dispatch({
            //     type: "exam_list/reduceCurrPage",
            //     payload: {}
            // });
            if (!this.props.app._backSwitch) {
                this.context.router.history.push({pathname: '/'});
            }

        }

        //跳转到个人中心页面
        private async goIndividual() {
            await this.props.dispatch({
                type: "app/changeBack",
                payload: {
                    backSwitch: true
                }
            });
            this.context.router.history.push({pathname: '/individual'});
        }

        //改变个人中心图标的路径
        private changeIndividualImg(result: boolean) {
            this.setState({
                IndividualImgSrc: result ? IndividualClickImg : IndividualImg
            })
        }


        render() {
            const props: object = {
                ...this.props,
                state: this.state,
                goIndividual: this.goIndividual.bind(this),
                changeIndividualImg: this.changeIndividualImg.bind(this)
            };
            return <WrappedComponent
                {...props}
            />
        }
    }
};

export default hoc as any;


