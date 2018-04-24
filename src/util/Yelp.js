const apiKey = 'e3SrbQTcs9qS3cFv1B1xnIWxd433ulTF04i1TBgil2ilRb0CPAg7teEfgSJInZflxru0XzPex9miw0o3KlGyAIoJQvTsNSaPGikAIVF1w1a_GW8OQLMc1_2mNvDYWnYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { 
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1 + business.location.address2 + business.location.address3,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;