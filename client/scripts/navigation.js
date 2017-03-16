const React = require('react'),
	ReactDOM = require('react-dom');

function NavItem (props) {
    return (
        <li className="{props.isActive ? 'active' : ''}" key={props.label}>
            <a href="{props.href}">{props.label}</a>
        </li>
    );
}

const Navigation = React.createClass({    
    render: function () {
        const links = [{ label: 'Hjem', key: 'home', href: '/' },
		{ label: 'Blog', key: 'blog', href: '/blog' },
		{ label: 'Om INSJ', key: 'Om INSJ', href: '/about' }
        ];
        const navItems = links.map((item) => {
            return NavItem({
                isActive: false,
                label: item.label,
                href: item.href 
            })
        });
        return (
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand page-scroll" href="/">INSJ UiO</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {navItems}
                        </ul>            
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Navigation;