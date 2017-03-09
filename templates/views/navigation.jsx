const React = require('react');

function NavItem (props) {
    return (
        <li className="{props.isActive ? 'active' : ''}">
            <a href="{props.href}">{props.label}</a>
        </li>
    );
}

const Navigation = React.createClass({
    render: function (links) {
        const navItems = this.props.links.map((item) => {
            return NavItem({
                isActive: false,
                label: item.label,
                href: item.href 
            })
        });
        return (
            <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand page-scroll" href="/">INSJ UiO</a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            {navItems}
                        </ul>            
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Navigation;