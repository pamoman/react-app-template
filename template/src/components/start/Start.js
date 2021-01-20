/*
 * Start
 */

import React from 'react';

const Start = () => {
    return (
        <Grid container className="page-container">
            <Grid item xs={12} className={`banner ${classes.pageBanner}`}>
                <Typography variant="h1">{title}</Typography>
            </Grid>

            <Grid container spacing={4} className="page">
                <Grid item xs={12}></Grid>
            </Grid>
        </Grid>
    );
};

export default Start;