import * as React from 'react';

import { Tabs, Tab, Box, Container } from '@mui/material';

import FirstTab from './firstTab.tsx/FirstTab';
import SecondTab from './secondTab/SecondTab';
import ThirdTab from './thirdTab/ThirdTab';

import { IUploadCSVResponse } from 'types/types';

const BasicTabs: React.FC<{ data: IUploadCSVResponse | undefined }> = ({ data }) => {

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Box>{children}</Box>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='md' >
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="classify tabs"
                centered
            >
                <Tab value={0} label={'Classify'} {...a11yProps(0)} />
                <Tab value={1} label={'Classify for accuracy'} {...a11yProps(1)} />
                <Tab value={2} label={'Show Diagram'} {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}><FirstTab data={data}/></TabPanel>
            <TabPanel value={value} index={1}><SecondTab /></TabPanel>
            <TabPanel value={value} index={2}><ThirdTab data={data}/></TabPanel>
        </Container>
    );
}

export default BasicTabs;