import React from "react";
import FooterMenu from "./FooterMenu";
import { Container } from "react-bootstrap";
import './Footer1.css'

function Footer() {
  return (
    <>
    <div className="Footer1">
      <Container>
        <a href="https://info.microsoft.com/ww-landing-idc-white-paper-the-business-value-of-migrating-and-modernizing-with-azure.html">
          1. IDC Business Value Executive Summary, sponsored by Microsoft Azure,
          The Business Value of Migrating and Modernizing to Microsoft Azure,
          IDC #US49665122, September 2022
        </a><br />
        <a href="https://info.microsoft.com/ww-landing-idc-white-paper-the-business-value-of-migrating-and-modernizing-with-azure.html">
          2. Ibid.
        </a><br />
        <a href="https://gigaom.com/report/costs-and-benefits-of-net-application-migration-to-the-cloud-2/">
          3. Costs and Benefits of .NET Application Migration to the Cloud,
          GigaOm, 2022
        </a>
      </Container>
      </div>
      <FooterMenu />
    
    </>
  );
}

export default Footer;
