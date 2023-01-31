export default `
    query Nearest($latitude: Float!, $longitude: Float!) {
        nearest(lat: $latitude, lon: $longitude, filterByPlaceTypes: BICYCLE_RENT) {
            edges {
                node {
                    id
                    distance
                    place {
                        ... on BikeRentalStation {
                            stationId
                            name
                            bikesAvailable
                            spacesAvailable
                            lat
                            lon
                            allowDropoff
                        }
                    }
                }
            }
        }
    }
}`;
