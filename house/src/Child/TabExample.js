import React, {Component} from 'react';
import {Tabs} from 'antd-mobile';
import '../index.css'

const tabs = [
    {title: '推荐'},
    {title: '冬季'},
    {title: '宜家'},
    {title: '小清新'},
    {title: '小户型'},
    {title: '个性色彩'},
]

export default class TabExample extends Component {
    render() {
        return (
            <div>
                <Tabs

                    tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => {
                        console.log('onChange', index, tab);
                    }}
                    onTabClick={(tab, index) => {
                        console.log('onTabClick', index, tab);
                    }}
                >
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div style={{backgroundColor: '#fff'}}>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                    <li>
                                        <img style={{
                                            width: '45.6vw',
                                            float: 'left',
                                            paddingLeft: '5vw',
                                            paddingTop: '4vw'
                                        }} src={require('../images/orange.png')} alt="abb"/>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </Tabs>
            </div>
        )
    }
}
