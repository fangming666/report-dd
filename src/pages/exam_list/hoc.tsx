import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";
import IndividualClickImg from "../../assets/imgs/Individual-click.svg";
import IndividualImg from "../../assets/imgs/Individual.svg";


type PageOwnProps = {
    app: any,
    dispatch: any,
    examList: any
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
            await dispatch({
                type: "exam_list/queryExam",
                payload: {}
            });
        }

        //跳转到个人中心页面
        private goIndividual() {
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


