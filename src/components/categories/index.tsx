import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Category } from '../../utils/types';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoDetail from '../video-detail';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  categories?: Array<Category>;
}

const Categories: React.FC<Props> = ({ categories }: Props) => {
  const [expandedCategory, setExpandedCategory] = useState<string | false>('');

  useEffect(() => {
    categories && categories?.length > 0 && setExpandedCategory(categories[0].name);
  }, [categories]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedCategory(isExpanded ? panel : '');
  };

  if (categories && categories.length > 0) {
    return (
      <Box maxWidth="lg" sx={{ marginTop: '20px' }}>
        {categories?.map((category) => {
          return (
            <Accordion
              key={uuidv4()}
              expanded={expandedCategory === category.name}
              sx={{ backgroundColor: '#1976d2', marginBottom: '10px' }}
              onChange={handleChange(category.name)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${category.name}-content`}
                id={`${category.name}-header`}
              >
                <Typography>
                  <b>{category.name}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {category.videos.map((video) => (
                  <VideoDetail key={uuidv4()} video={video} />
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    );
  }
  return (
    <>
      <div>
        <h1>no categories</h1>
      </div>
    </>
  );
};

export default Categories;
