import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const SearchResults = ({ results }) => {
	if (!results) {
		return null;
	}

	if (results.length === 0) {
		return <h2 className="no-res">Sorry, no results.</h2>;
	}

	return (
		<div className="card-container">
			<Row>
				{results.map((result) => {
					return (
						<Col
							xs={12}
							md={4}
							lg={3}
							key={result.id}
						>
							<Card className="card">
								<Card.Img
									src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`}
									variant="top"
									alt={result.thumbnail?.alt_text}
									className="card-img"
								></Card.Img>
								<Card.Body>
									<Card.Title>{result.title}</Card.Title>
									<Card.Text>{result.thumbnail?.alt_text}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default SearchResults;
