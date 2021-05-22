import * as React from 'react'
import { Link } from '@reach/router'
import classnames from 'classnames'

function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { id, image_url, agent_name, agent_address, street_name, short_description, rental_prices } = listing
  const columnClasses = classnames('column', 'col-4', 'col-xs-12')
  const cardClasses = classnames('card')

  return (
    <div className={columnClasses} style={{ margin: '1rem 0' }}>
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-responsive" src={image_url} alt={agent_name} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{agent_address}</div>
          <div className="card-title h6">&pound; {rental_prices[0].per_month} per month</div>
          <div className="card-subtitle text-gray">{street_name}</div>
        </div>
        <div className="card-body">{short_description}</div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/details/${id}`}>
            Go to property
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listing