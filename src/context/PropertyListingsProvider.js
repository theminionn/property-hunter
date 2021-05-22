import * as React from 'react'

const DefaultState = {
  propertyListings: []
}

const PropertyListingsContext = React.createContext(DefaultState)
const parseString = require('react-native-xml2js').parseString;

export const PropertyListingsConsumer = PropertyListingsContext.Consumer

export class PropertyListingsProvider extends React.Component {
    state = DefaultState
  
    // componentDidMount() {
    //   fetch('/server/listings.json')
    //     .then(res => res.json())
    //     .then(res => {
    //       this.setState({ propertyListings: res })
    //     })
    // }

    componentDidMount() {
      fetch('http://api.zoopla.co.uk/api/v1/property_listings.xml?postcode=n18xx&area=London&listing_status=rent&api_key=veqcndd6hy74ua7er8s7emu9')
        .then(res => res.text())
        .then(body => parseString(body, (err, result) => {
          console.log(result.response.listing);
          this.setState({ propertyListings: result.response.listing })
      }));
    }
  
    render() {
      const { children } = this.props
      const { propertyListings } = this.state
  
      return (
        <PropertyListingsContext.Provider
          value={{
            propertyListings
          }}
        >
          {children}
        </PropertyListingsContext.Provider>
      )
    }
  }