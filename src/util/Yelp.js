const apiKey = 'AojHn11mxeGGn-efkNOW-_bSJ6QscDyNjM7ULqcsbWS5-jRAhkzL2VLcOQLBY1Mpz_pzUnCAM95Zq4HK407RlH5Q43Mlrf-YDpz6QTvG4SOeg5XXucVHCLc5DIQQX3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response)=> {
            return response.json();
        }).then((jsonResponse)=> {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                })
            }
        });
    }
    
};

export default Yelp;