import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- header --> */}
<header>
	<div class="container">
		<div class="header d-lg-flex justify-content-between align-items-center">
			<div class="header-agile">
				<h1>
					<Link to="/" class="navbar-brand logo">
						<span class="fa fa-scissors" aria-hidden="true" ></span> Barbie Girls	<span class="fa fa-user-secret" aria-hidden="true" ></span>
				    </Link>
				</h1>
			</div>
			<div class="nav_w3ls">
				<nav>
					<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
					<input type="checkbox" id="drop" />
						<ul class="menu">
							<li class="mr-lg-3 mr-2 active"><Link to="/">Home</Link></li>
							<li class="mr-lg-3 mr-2"><Link to="/About">About</Link></li>
							<li class="mr-lg-3 mr-2 p-0">
							{/* <!-- First Tier Drop Down --> */}
							<label for="drop-2" class="toggle">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
							<a href="#">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span></a>
							<input type="checkbox" id="drop-2"/>
							<ul class="inner-dropdown">
								<li><Link to="/Service">Our Services</Link></li>
								<li><Link to="/Single">Signle Page</Link></li>
							</ul>
							</li>
							<li class="mr-lg-3 mr-2"><Link to="/Gallery">Gallery</Link></li>
							<li class="mr-lg-3 mr-2"><Link to="/Contact">Contact US</Link></li>
							

						</ul>
				</nav>
			</div>

		</div>
	</div>
</header>
{/* <!-- //header --> */}
            </div>
        )
    }
}

export default Header;