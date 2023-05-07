import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import * as React from 'react';
import FilterButton from '../components/FilterButton';
import programs from '../json/programs.json';
import typeOptions from '../json/type.json';
import sortOptions from '../json/sort_options.json'
import NavBar from '../components/NavBar';

const HomepageLayout = (props) => {
  const [program, setProgram] = React.useState('');
  const [type, setType] = React.useState('');
  const [sort, setSort] = React.useState('');
  const handleProgramChange = (event) => {
    // Do the filtering here
    setProgram(event.target.value);
  };
  const handleTypeChange = (event) => {
    // Do the filtering here
    setType(event.target.value);
  };
  const handleSortChange = (event) => {
    // Do the filtering here
    setSort(event.target.value);
  };
  return (
    <Container maxWidth="lg">
      <Grid container >
        <Grid item xs={12} md={9} >
          <Grid container direction="row" rowGap={2} justifyContent="flex-start">
            <Grid item xs={5} sm={4} md={2.5}>
              <FilterButton filterName="Program" filterSelected={program} handleFilterSelected={handleProgramChange} filterOptions={programs} />
            </Grid>
            <Grid item xs={5} sm={4} md={2.5}>
              <FilterButton filterName="Type" filterSelected={type} handleFilterSelected={handleTypeChange} filterOptions={typeOptions} />
            </Grid>
            <Grid item xs={5} sm={4} md={2.5}>
              <FilterButton filterName="Sort" filterSelected={sort} handleFilterSelected={handleSortChange} filterOptions={sortOptions} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={3}>

        </Grid>
      </Grid>
    </Container>
  )
}

export default HomepageLayout