import React, { useState } from 'react';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import TextArea from '@clarityhub/unity-web/lib/forms/Textarea';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import {
    Button
} from 'grommet';

const NewEntry = () => {
    const [selected, setSelected] = useState()

    return (
        <div>
            <Box>
                <Typography>
                    How are you feeling today?
                </Typography>
                <Box direction="row">

                {
                    [0, 1, 2, 3,4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <Button
                            primary={selected === num}
                            plain 
                            key={num}
                            onClick={() => {
                                setSelected(num);
                            }}
                        >
                            <Box padding="small">
                                {num}
                            </Box>
                        </Button>
                        ))
                    }
                    </Box>
                <TextArea placeholder="type here" />
            </Box>
            <Button secondary label="save" />
        </div>
    )
}

export default NewEntry;