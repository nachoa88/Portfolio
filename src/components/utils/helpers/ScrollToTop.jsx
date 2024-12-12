import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component is a helper to scroll to the top of the page when the user navigates to a new page.
// Is needed because the Link component from react-router-dom doesn't do it automatically.
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    
    return null;
}

export default ScrollToTop;