import React, {useEffect, useState} from 'react';

const Header = () => {
    const [links, setLinks] = useState(["home ","brands "])

    useEffect(() => {
        setTimeout(() => {
            setLinks(links.concat("profile"))
        }, 5000)
    }, [])

    return (
        <div>
            {links.map(link=> <span>{link}</span>)}
        </div>
    );
};

export default Header;