import React, {Component} from 'react'
import {Carousel, SearchBar, NavBar} from 'antd-mobile';
import '../index.css'

export default class Shop extends Component {
    state = {

        imgHeight: 176,
        arr: [
            '桌', '床', '椅', '几', '柜', '书架', '沙发', '家居饰品', '户外家居', '全部分类'
        ],
        brr: [
            'Top Art Studio 欧式风格精细...', '顺顺工艺欧式风格塑料外框黑...', 'Top Art Studio 欧式风格精细...', '顺顺工艺欧式风格塑料外框黑...', 'Top Art Studio 欧式风格精细...', '顺顺工艺欧式风格塑料外框黑...', 'Top Art Studio 欧式风格精细...', '顺顺工艺欧式风格塑料外框黑...'
        ],
        crr: [
            '￥39.5',
            '￥83.99',
            '￥39.5',
            '￥83.99',
            '￥39.5',
            '￥83.99',
            '￥39.5',
            '￥83.99',
        ]

    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        return (
            <div>

                <Carousel
                    style={{position: 'relative'}}
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1, 2, 3].map(val => (

                        <img
                            src={require('../images/' + val + '.png')}
                            alt=""
                            style={{width: '100%', height: '42vw', verticalAlign: 'top'}}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({imgHeight: 'auto'});
                            }}
                        />

                    ))}
                </Carousel>
                <div style={{
                    position: 'relative',
                    bottom: '55vw',
                    width: '100%',
                    height: '3vw'
                }}>

                    <NavBar
                        style={{backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '3vw', textalign: 'center'}}
                        icon={<i style={{position: 'relative'}} class='iconfont icon-category'></i>}>
                        <SearchBar style={{backgroundColor: 'rgba(0,0,0,0.5)', width: '80vw', marginLeft: '5vw'}}
                                   placeholder="搜索" maxLength={8}/>
                    </NavBar>
                </div>
                <div style={{
                    position: 'relative',
                    bottom: '13vw',
                    width: '100%',
                    height: '43vw',
                    backgroundColor: '#fff'
                }}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                            <li style={{height: '18vw', width: '18vw', float: 'left', textAlign: 'center'}}>
                                < img style={{width: '10vw', float: 'left', marginLeft: '4vw', marginTop: '2vw'}}
                                      src={require('../images/1' + val + '.png')} alt="abb"/>
                                <span style={{
                                    float: 'left',
                                    width: '25vw',
                                    height: '3vw',
                                    fontSize: '1vw',
                                    marginLeft: '-3.5vw',
                                    marginTop: '1vw'
                                }}>{this.state.arr[val - 1]}</span>
                            </li>

                        ))
                    }
                </div>
                <div style={{position: 'relative', bottom: '8vw', width: '100%', backgroundColor: '#eeeeee'}}>
                    <ul>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map(val => (
                                <li style={{float: 'left', marginLeft: '12vw'}}>
                                    <img style={{width: '30vw'}} src={require('../images/0' + val + '.png')} alt="abb"/>
                                    <p style={{fontSize: '10px'}}>
                                        {this.state.brr[val - 1]}
                                    </p>
                                    <p>
                                        {this.state.crr[val - 1]}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>

                </div>

            </div>
        )
    }
}
