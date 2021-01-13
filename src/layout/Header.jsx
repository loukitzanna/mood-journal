import React from 'react';

import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const Header = () => {
    return (
        <Box as="header" background="primary" justify="center" align="center">
            <Typography color="white">Mood Journal</Typography>
        </Box>
    )
}

export default Header;