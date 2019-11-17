import React from 'react';
import {TabBar, NavBar} from 'antd-mobile';
import Home from './Child/Home';
import TabExample from './Child/TabExample';
import Shop from './Child/Shop';
import Person from './Child/Person';

export default class AppTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }

    render() {
        return (
            <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#FFFF00"
                    barTintColor="#696969"
                >
                    <TabBar.Item style={{color: '#3fcccb'}}

                                 title="首页"
                                 key="Home"
                                 icon={
                                     <i class='iconfont icon-shouye'/>
                                 }
                                 selectedIcon={<div className='iconfont icon-shouye' style={{color: '#3fcccb'}}
                                 />
                                 }
                                 selected={this.state.selectedTab === 'blueTab'}
                                 onPress={() => {
                                     this.setState({
                                         selectedTab: 'blueTab',

                                     });
                                 }}
                    >

                        {
                            <NavBar
                                style={{
                                    background: '#3fcccb',
                                    color: '#ffffff',
                                    position: 'sticky',
                                    top: '0',
                                    zIndex: '10'
                                }}
                            >住吧家居</NavBar>
                        }
                        <Home/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i class='iconfont icon-linggan'/>
                        }
                        selectedIcon={<div className='iconfont icon-linggan' style={{color: '#3fcccb'}}
                        />
                        }
                        title="灵感"

                        key="Linggan"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                    >
                        {
                            <NavBar
                                style={{
                                    background: '#3fcccb',
                                    color: '#ffffff',
                                    position: 'sticky',
                                    top: '0',
                                    zIndex: '10'
                                }}
                            >灵感</NavBar>
                        }
                        <TabExample/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i class='iconfont icon-store'/>
                        }
                        selectedIcon={<div className='iconfont icon-store' style={{color: '#3fcccb'}}
                        />
                        }
                        title="商城"
                        key="Shop"

                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {

                            <NavBar
                                style={{
                                    background: '#3fcccb',
                                    color: '#ffffff',
                                    position: 'sticky',
                                    top: '0',
                                    zIndex: '10'
                                }}
                                icon={
                                    <i style={{float: 'right'}} class='iconfont icon-car '></i>
                                }

                            >商城</NavBar>
                        }
                        <Shop/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i class='iconfont icon-wode'/>
                        }
                        selectedIcon={<div className='iconfont icon-wode' style={{color: '#3fcccb'}}
                        />
                        }
                        title="我的"
                        key="Person"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {
                            <NavBar
                                style={{
                                    background: '#3fcccb',
                                    color: '#ffffff',
                                    position: 'sticky',
                                    top: '0',
                                    zIndex: '10'
                                }}

                            >我的</NavBar>

                        }
                        <Person/>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}