import * as React from 'react'

import Hero from '../../components/Hero'
import Listing from '../../components/Listing'
import {
    PropertyListingsProvider,
    PropertyListingsConsumer
  } from '../../context/PropertyListingsProvider'

  function Home() {
    return (
      <React.Fragment>
        <Hero />
        <div className="container">
          <PropertyListingsProvider>
            <PropertyListingsConsumer>
                {function(value) {
                    const { propertyListings } = value
                    return (
                    <ul>
                        <div className="columns">
                          {propertyListings.map(listing => (
                            <Listing listing={listing} key={listing.address} />
                          ))}
                        </div>
                    </ul>
                    )
                }}
            </PropertyListingsConsumer>
          </PropertyListingsProvider>
        </div>
      </React.Fragment>
    )
  }

export default Home