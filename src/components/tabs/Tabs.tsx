import React from 'react';

import { Box, Container, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import FirstTab from './firstTab.tsx/FirstTab';
import SecondTab from './secondTab/SecondTab';

const Tabs: React.FC = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='lg' >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="classify tabs">
                        <Tab label={'Classify'} value="1" />
                        <Tab label={'Classify for accuracy'} value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><FirstTab /></TabPanel>
                <TabPanel value="2"><SecondTab /></TabPanel>
            </TabContext>
        </Container>
    );
}

export default Tabs;