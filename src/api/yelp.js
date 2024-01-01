import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer fxKT81mNehyzwyUusAlOXDlV-r5x3CRIHp-DVCGx6eq9pxHFA5RZNhxhDasoclyEUamMVhIQY5xIDibxaowR-UcfRB7Hk8zeSVElosecSRNSbsnJ9IxaurxjIt6NZXYx'
	}
})