import React from 'react'

const Footer = (props) => {
    return (
        <footer>
            <span>{props.version}</span>

            <span className="float-right">
                <a href={`mailto:${props.supportEmail}?Subject=GPX Support`} target="_top">Support</a>
                <span style={{ color: '#ddd' }}> | </span>
                <a href={props.wikiUrl} rel="noopener noreferrer" target="_blank">Wiki</a>
            </span>
        </footer>
    )
}

export default Footer;
