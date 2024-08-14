/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Button, Toolbar, Typography, CssBaseline, Grid, Paper } from '@mui/material';
import { topics } from './consts';
import { ColorPickerField } from './components/color-picker';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

// Define the structure of the JSON output
interface FormData {
  [key: string]: {
    [key: string]: string;
  };
}

const App: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [output, setOutput] = useState<string>('');

  const handleTabChange = (_event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  const handleInputChange = (topicName: string, field: string, value: string) => {
    // Extrai o conteúdo entre parênteses no nome do tópico
    const extractedName = topicName.match(/\(([^)]+)\)/)?.[1] || topicName;
  
    setFormData((prev) => ({
      ...prev,
      [extractedName]: {
        ...prev[extractedName],
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    const jsonOutput = JSON.stringify(formData, null, 2);
    setOutput(jsonOutput);

    console.log(output);

    // Copy to clipboard
    navigator.clipboard.writeText(jsonOutput).then(() => {
      console.log('Copied to clipboard');
    });
  };

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Grid container justifyContent={'center'} alignItems={'center'}>
            <Typography variant="h6">Configuração de cores Soul Systems</Typography>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid container paddingTop={16} paddingX={5} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Paper elevation={3} sx={{ width: '100%', borderRadius: 2, overflow: 'hidden', marginBottom: 2 }}>
          <Tabs
            indicatorColor="secondary"
            variant="scrollable"
            value={tabIndex}
            onChange={handleTabChange}
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none', // Manter o texto no formato original
              },
            }}
          >
            {topics.map((topic, index) => (
              <Tab label={topic.name} key={index} />
            ))}
          </Tabs>

          {topics.map((topic, index) => (
            <TabPanel value={tabIndex} index={index} key={index}>
              <Grid container minHeight={300} gap={2} alignItems="center">
                {topic.attributes.map((attr, i) => (
                  <ColorPickerField
                    key={i}
                    label={`${attr.description}` }
                    value={formData[topic.name]?.[attr.field] || '#000000'}
                    onChange={(value: string) => handleInputChange(topic.name, attr.field, value)}
                    description={`${attr.description} - ${attr.field}`}
                  />
                ))}
              </Grid>
            </TabPanel>
          ))}
        </Paper>

        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: '2rem', alignSelf: 'center' }}>
          Copiar configurações
        </Button>        
      </Grid>
    </Box>
  );
};

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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default App;