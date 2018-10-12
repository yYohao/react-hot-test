import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component{
    render () {
        return(
            <div>
                <h1>Hello React!!!</h1>
                <h1>哈哈哈</h1>
                <p>实时更新</p>
                <p>局部热加载</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))