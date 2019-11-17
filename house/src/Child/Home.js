import React, {Component} from 'react'
import {Carousel} from 'antd-mobile';
import '../index.css'

export default class Home extends Component {
    state = {

        imgHeight: 150,

    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 50);
    }

    render() {
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1, 2].map(val => (

                        <img
                            src={require('../images/' + val + '.png')}
                            alt=""
                            style={{width: '100%', verticalAlign: 'top', height: '35vw'}}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({imgHeight: 'auto'});
                            }}
                        />

                    ))}
                </Carousel>

                <div style={{backgroundColor: '#eeeeee', width: '100vw', height: '32vw'}}>
                    {
                        [1, 2, 3].map(val => (
                            <li>
                                <img style={{
                                    float: 'left',
                                    width: '28%',
                                    height: '30%',
                                    marginLeft: '3%',
                                    marginTop: '3%'
                                }} src={require('../images/00' + val + '.png')} title="aaa" alt="abb"/>
                            </li>
                        ))
                    }

                </div>
                <div style={{
                    borderLeft: '4px solid #3fcccb',
                    width: '100%',
                    height: '8vw',
                    paddingLeft: '4vw',
                    lineHeight: '8vw',
                    color: '#232323'
                }}>
                    热门推荐
                </div>
                <div>
                    <img style={{width: '100%', paddingTop: '4vw', height: '30vw'}} src={require('../images/004.png')}
                         alt="abb"/>
                </div>


            </div>




        );
    }
}
