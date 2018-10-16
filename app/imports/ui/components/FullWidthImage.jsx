import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        <div className = 'back'>
          <Grid verticalAlign='middle' container centered columns={2}>
            <Grid.Row >
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png' className='image2'/>
              </Grid.Column>
              <Grid.Column >
                <div middle textAllign = 'center'>
                  <h3>
                    A traditional downtown saloon and eatery located in the Honolulu Financial District,
                    just one block off the waterfront,
                    Murphy’s has been a haven for mariners, businessmen and locals since 1891.
                  </h3>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

    )
  }
}