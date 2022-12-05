export default function Navbar() {
    return (<div className="Navbar">
        <div className="leftsideNav">Logobakery</div>
    <ul>
        <NavbarComponent>Services</NavbarComponent>
        <NavbarComponent>Projects</NavbarComponent>
        <NavbarComponent>About</NavbarComponent>
        <div id="ContactButton">Contact</div>
    </ul>    

    </div>)
}

function NavbarComponent(props) {
    return (
        <li>{props.children}</li>
    )
}