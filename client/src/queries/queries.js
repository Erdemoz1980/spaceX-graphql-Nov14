import {
  gql
} from '@apollo/client';

const LAUNCHES = gql`
{
  launches{
    id,name, date_local,success, details crew{
      id,name, image,wikipedia
    }
  }
}
`;

const ROCKETS = gql`
{
  rockets{
    id, name, country, company, description, first_flight, flickr_images, active
  }
}
`

export { LAUNCHES, ROCKETS };