/**
 * 公用底部信息
 * */
import * as React from "react";
import {Component} from "react";
import './pubFoot.scss'


type PageOwnProps = {}

type PageState = {}


class PubFoot extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'pub-foot-warp'}>
                <div className={'pub-foot'}>
                    <p>该处学情分析内容为简版内容，如需查看详细内容，请至电脑端查看。</p>
                    <ol>
                        <li>电脑端查看地址：www.yuandingbang.cn</li>
                        <li>登陆用户名及密码：您登陆钉钉时使用的用户名及密码。</li>
                        <li>更多内容包含：个性化定制分析、试题质量分析、多次考试纵向对比数据、学生学情跟踪等等。</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default PubFoot;


