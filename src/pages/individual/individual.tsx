/**
 * 个人中心
 * */
import * as PropTypes from "prop-types";
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import {Button, List, Modal,Toast} from "antd-mobile"
import './individual.scss';
import ListHead from "./../../components/listHead/listHead"
import IndividualItem from "./../../components/individual/individualItem/individualItem"
import alertImg from "./../../assets/imgs/alert.png"

const alert = Modal.alert;
type PageOwnProps = {
    dispatch: any,
    individual: any,
    history:any
}

type PageState = {}


class Individual extends Component <PageOwnProps, PageState> {

    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    public async componentDidMount() {
        //获取用户信息
        let {dispatch} = this.props;
        await dispatch({
            type: "individual/queryIndividual"
        });
    }

    //解除绑定
    private removeBind() {
        alert("", <div className={'remove-alert'}><img src={alertImg} alt='alert'/>
            <b>解除绑定</b>
            <p>解除绑定后，将无法使用钉钉登录，
                无法使用钉钉查看分析报告！</p>
        </div>, [
            {
                text: '解除绑定', onPress: () => {
                    this.goRemove()
                }, style: {color: 'red'}
            },
            {text: '关闭取消'},
        ]);
    }

    //请求解除绑定
    private async goRemove() {
        try {
            let {dispatch,history} = this.props;
            await dispatch({
                type: "app/removeBind"
            });
            Toast.info("解除成功",1);
            setTimeout(() => {
                history.push({pathname: '/bind'});
            }, 1500)
        } catch (e) {

        }

    }


    public render() {
        return (
            <div className={'individual'}>
                <ListHead listHeadTitle={'个人中心'}>
                </ListHead>
                <List className={'individual-item-warp clearfix'}>
                    <IndividualItem individualItemName="账号">
                        {this.props.individual._accountNumber}
                    </IndividualItem>
                    <IndividualItem individualItemName="姓名">
                        {this.props.individual._username}
                    </IndividualItem>
                    <IndividualItem individualItemName="任教信息">
                        {this.props.individual._teach && this.props.individual._teach.map((item: string, index: number) => {
                            return <p key={index}>
                                {item}
                            </p>
                        })}
                    </IndividualItem>
                </List>
                <Button type={'ghost'} className={'bind-submit'}
                        onClick={this.removeBind.bind(this)}>
                    解除绑定
                </Button>
                <p className={'bind-info'}>
                    注：管理年级、管理科目、任教信息如果不正确，请联系系统考试管理员（sd_wfkw）在PC端更改。\
                </p>
            </div>
        )
    }
}

export default connect(({individual}: any) => ({
    individual
}))(Individual);


