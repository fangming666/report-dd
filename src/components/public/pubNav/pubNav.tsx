/**
 * 公用的滑动导航（科目列表）
 * */
import * as React from "react";
import {Component} from "react";
import "./pubNav.scss"
import {Affix} from 'antd';
import * as jquery from "jquery";
import navLeftImg from "/src/assets/imgs/nav-left.svg";//左边小箭头
import navRightImg from "/src/assets/imgs/nav-right.svg";//右边小箭头


type PageOwnProps = {
    navArr: any[],
    subNavClick: () => void
}

type PageState = {
    activeIndex: number,
    navLeftSwitch: boolean,
    navRightSwitch: boolean,
    sumNavWidth: number,
    scrollLeft: number
}


class PubNav extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeIndex: 0,//根据index索引进行active类名的赋值
            navLeftSwitch: false,//左边小箭头显示开关
            navRightSwitch: false,//右边小箭头显示开关
            sumNavWidth: 0,//科目导航的总宽度
            scrollLeft: 0//左右两边箭头距上的距离
        }
    }

    //refs
    private pubNav: any;


    //子项的点击事件
    private navClick(...data: any): void {
        let [index, item] = data;
        this.setState({
            activeIndex: index
        });
        //@ts-ignore
        this.props.subNavClick(item);
        this.rollChange(index);
    }

    //初始比较进行心事右箭头的判断
    private initJudge(): void {
        // @ts-ignore
        let domArr = Array.from(document.getElementsByClassName("pub-nav-item"));//dom的类数组对象转换成数组
        let allWidth: number = document.body.offsetWidth;//box盒子宽度
        let itemSum: number = (domArr.length - 1) * 22 + 32;//子项的总宽度
        Array.from(document.getElementsByClassName("pub-nav-item")).map((item: any, index: number) => {
            itemSum += item.offsetWidth
        });
        this.setState({
            navRightSwitch: itemSum > allWidth,
            sumNavWidth: itemSum
        })
    }

    //滑动的时候两侧箭头的显示隐藏
    private roll(e: any): void {
        this.setState({
            navLeftSwitch: e.target.scrollLeft > 0,
            scrollLeft: e.target.scrollLeft,
            navRightSwitch: e.target.scrollLeft < this.state.sumNavWidth / 4.5 - 20
        });

    }

    //点击的时候箭头的显示隐藏
    private rollChange(num: number) {
        let baseNum: number = 0;
        Array.from(document.getElementsByClassName("pub-nav-item")).map((item: any, index: number) => {
            if (index <= num) {
                baseNum += item.offsetWidth
            }
        });
        jquery(this.pubNav).stop().animate({scrollLeft: num < 4 ? 0 : baseNum + 100});
    }


    componentDidMount(): void {
        this.initJudge();
    }

    public render() {
        return (

            <React.Fragment>

                {
                    this.props.navArr && this.props.navArr.length ?
                        <Affix offsetTop={0}>

                            <div className={'pub-nav'}
                                 id={'pubNav'}
                                 ref={(pubNav) => this.pubNav = pubNav}
                                 onScroll={(e) => {
                                     e.persist();
                                     return this.roll(e)
                                 }}>
                                {this.state.navLeftSwitch &&
                                <div className={'nav-left'}
                                     style={{left: `${this.state.scrollLeft}px`}}>
                                    <img src={navLeftImg} alt="nav-left"/>
                                </div>}
                                {
                                    this.state.navRightSwitch &&
                                    <div className={'nav-right'}
                                         style={{left: `calc(100vw - 36px + ${this.state.scrollLeft}px`}}>
                                        <img src={navRightImg} alt="nav-right"/>
                                    </div>
                                }
                                {this.props.navArr.map((item: any, index: number) => {
                                    return <span
                                        key={index}
                                        onClick={this.navClick.bind(this, index, item)}
                                        className={`pub-nav-item ${this.state.activeIndex === index && 'pub-nav-active'}`}>{item}</span>
                                })
                                }

                            </div>
                        </Affix> : null
                }

            </React.Fragment>
        )
    }
}

export default PubNav;


