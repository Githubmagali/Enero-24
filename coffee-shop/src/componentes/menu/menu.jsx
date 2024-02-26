import React from "react";
import "./menu.css";


const Menu = () => {
  return (
    <section id="menu">
      <div className="heading">
        <div className="span">Our menu</div>
        <h2>Menu</h2>
     </div>
      <div className="container-menu">
        <div className="menu-branch">
          <h2>Brunch</h2>
          <div className="menu-lis">
            <li>scrambled eggs</li>
            <div>two toasts with scrambled egg</div>
            <li>Croissant</li>
            <div>of butter or fat</div>
            <li>Brownie</li>
            <div>with chocolate chips</div>
            <li>Cookies</li>
            <div>with chocolate chips</div>
          </div>
        </div>
        <div className="menu-coffee">
          <h2>Coffee</h2>
          <div className="menu-lis">
            <li>Expresso</li>
            <div>black coffee</div>
            <li>Cappuccino</li>
            <div>coffee with chocolate</div>
            <li>Ristretto</li>
            <div>short made with a normal amount of ground coffee</div>
            <li>Americano</li>
            <div>soft coffee</div>
            <li>Lungo</li>
            <div>espresso but with double the water</div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Menu