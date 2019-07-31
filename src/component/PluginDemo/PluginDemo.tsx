import * as React from 'react'

interface IObjects {
    [propsName: string]: any
}

// tslint:disable-next-line:no-empty-interface
interface IProps {
    title?: string
}

interface IStates {
    name?: string
}
class PluginDemo extends React.Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            name: '',
        }
    }
    render() {
        const { title } = this.props
        return (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    color: 'skyblue',
                    textAlign: 'center',
                    fontSize: '30px',
                }}
            >
                {title}
            </div>
        )
    }
}

export default PluginDemo
