import Link from 'next/link'

export const Menu: React.FC = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullhight section is-hidden-mobile"
            style={{borderRight: '1px solid'}}>
            <p className="menu-label is-hidden-touch bold" style={{fontWeight:'bold',fontSize:'15px'}}>
                VENDAS
            </p>
            <ul className="menu-list">
                <MenuItem href="/" label="Home"/>
                <MenuItem href="/" label="Cadastros"/>
                <MenuItem href="/" label="Config"/>
                <MenuItem href="/" label="Sair"/>
            </ul>
        </aside>
    )
}

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <Link href={props.href}>
                <a>
                    <span className="icon"></span> {props.label}
                </a>
            </Link>
        </li>
    )
}