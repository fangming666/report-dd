import * as React from "react";
import {Component} from "react";


type PageOwnProps = {
    bureauEducation: any,
    dispatch: any,
    location: any,
}

type PageState = {
    reportId: string | number
}


const hoc = (WrappedComponent: React.ComponentType<{}>): React.ComponentClass<{}> => {
    return class extends Component<PageOwnProps, PageState> {
        constructor(props: any) {
            super(props);
            this.state = {
                reportId: ''
            }
        }

        async componentDidMount() {
            this.setState({
                reportId: this.props.location.state.reportId
            });
            let {dispatch} = this.props;
            await dispatch({
                type: "bureauEducation/queryBureauEducation",
                payload: {
                    reportId: this.state.reportId
                }
            });
        }

        render() {
            const props: object = {
                ...this.props,
                state: this.state,
            };
            return <WrappedComponent
                {...props}
            />
        }
    }
};

export default hoc as any;


