import { Menu } from 'semantic-ui-react'

export default function Gnb() {
    const activeItem = 'home';
    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                //onClick={this.handleItemClick}
            />
            <Menu.Item
                name='messages'
                active={activeItem === '테스트'}
                //onClick={this.handleItemClick}
            />
            <Menu.Item
                name='테스트2'
                active={activeItem === '테스트2'}
                //onClick={this.handleItemClick}
            />
        </Menu>
    )
}